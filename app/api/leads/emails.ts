import { BUDGET_OPTIONS, SERVICE_OPTIONS } from "../../components/enquiry-options";
import type { Lead } from "../../components/enquiry-validation";
import { CONTACT_EMAIL } from "../../components/legal-details";

const SITE_URL = "https://clevops.co";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export type EmailMessage = {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export type SendResult = { ok: true } | { ok: false; reason: string };

/** Every submitted value goes through this before it touches HTML. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const labelOf = <T extends { value: string; label: string }>(options: readonly T[], value: string | null) =>
  options.find((option) => option.value === value)?.label ?? null;

/**
 * Sends one email through Resend's REST API. Runs on the server only: the key
 * is read here, per request, and never leaves this function. Failures come
 * back as a short reason with the provider's status and error name, never the
 * key, the request body or the provider's full response.
 */
export async function sendEmail(message: EmailMessage): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return { ok: false, reason: "RESEND_API_KEY is not set" };

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: message.from,
        to: [message.to],
        subject: message.subject,
        html: message.html,
        text: message.text,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (response.ok) return { ok: true };

    let name = "unknown_error";
    try {
      const data = (await response.json()) as { name?: unknown };
      if (typeof data.name === "string") name = data.name.slice(0, 60);
    } catch {
      // Non-JSON error body; the status is enough.
    }
    return { ok: false, reason: `Resend responded ${response.status} (${name})` };
  } catch (error) {
    const kind = error instanceof Error ? error.name : "UnknownError";
    return { ok: false, reason: `Resend request failed (${kind})` };
  }
}

/* ---- Internal notification ------------------------------------------------ */

function leadRows(lead: Lead, submittedAt: Date) {
  const services = lead.services.map((value) => labelOf(SERVICE_OPTIONS, value) ?? value).join(", ");
  return [
    { label: "Name", value: lead.name },
    { label: "Business", value: lead.business },
    { label: "Email", value: lead.email, href: `mailto:${lead.email}` },
    { label: "Phone", value: lead.phone, href: `tel:${lead.phone.replace(/[^\d+]/g, "")}` },
    { label: "Website", value: lead.website ?? "Not provided", href: lead.website ?? undefined },
    { label: "Services interested in", value: services },
    { label: "Budget range", value: labelOf(BUDGET_OPTIONS, lead.budget) ?? "Not provided" },
    { label: "Submitted", value: formatTime(submittedAt) },
  ];
}

function formatTime(date: Date): string {
  return `${date.toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "medium",
    timeStyle: "short",
  })} UTC`;
}

export function notificationEmail(lead: Lead, from: string, to: string, submittedAt: Date): EmailMessage {
  const rows = leadRows(lead, submittedAt);
  const subjectBusiness = lead.business.length > 80 ? `${lead.business.slice(0, 79)}…` : lead.business;

  const htmlRows = rows
    .map(({ label, value, href }) => {
      const shown = escapeHtml(value);
      const cell = href
        ? `<a href="${escapeHtml(href)}" style="color:#315cff;text-decoration:none;">${shown}</a>`
        : shown;
      return `<tr>
  <td style="padding:10px 16px 10px 0;border-top:1px solid #e4e4e0;color:#6b6b6b;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
  <td style="padding:10px 0;border-top:1px solid #e4e4e0;color:#0d0d0d;font-size:14px;vertical-align:top;">${cell}</td>
</tr>`;
    })
    .join("\n");

  const html = `<!doctype html>
<html lang="en"><body style="margin:0;padding:24px;background:#f7f7f4;font-family:Arial,Helvetica,sans-serif;color:#0d0d0d;">
<div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e0;border-radius:12px;padding:28px;">
  <p style="margin:0 0 6px;color:#315cff;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">ClevOps</p>
  <h1 style="margin:0 0 20px;font-size:22px;line-height:1.3;">New Project Enquiry</h1>
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
${htmlRows}
  </table>
  <h2 style="margin:28px 0 10px;font-size:15px;">Project details</h2>
  <div style="padding:16px;border-radius:8px;background:#f7f7f4;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(lead.message)}</div>
  <p style="margin:24px 0 0;color:#6b6b6b;font-size:12px;">Reply to this email to answer ${escapeHtml(lead.name)} directly.</p>
</div>
</body></html>`;

  const text = [
    "New Project Enquiry",
    "",
    ...rows.map(({ label, value }) => `${label}: ${value}`),
    "",
    "Project details:",
    lead.message,
    "",
    `Reply to this email to answer ${lead.name} directly.`,
  ].join("\n");

  return {
    from,
    to,
    subject: `New ClevOps Project Enquiry: ${subjectBusiness}`,
    html,
    text,
    replyTo: lead.email,
  };
}

/* ---- Auto-reply to the lead ----------------------------------------------- */

export function autoReplyEmail(lead: Lead, from: string): EmailMessage {
  const firstName = lead.name.split(" ")[0] || lead.name;
  const paragraphs = [
    "Thanks for reaching out to ClevOps.",
    "We’ve received your project details and will review your current situation, goals and the services you’re interested in.",
    "We’ll follow up with the most sensible next step.",
  ];

  const html = `<!doctype html>
<html lang="en"><body style="margin:0;padding:24px;background:#f7f7f4;font-family:Arial,Helvetica,sans-serif;color:#0d0d0d;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e0;border-radius:12px;padding:32px;font-size:15px;line-height:1.65;">
  <p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
${paragraphs.map((text) => `  <p style="margin:0 0 16px;">${escapeHtml(text)}</p>`).join("\n")}
  <p style="margin:0 0 24px;">In the meantime, you can learn more about how we work on the <a href="${SITE_URL}/process" style="color:#315cff;">ClevOps website</a>.</p>
  <p style="margin:0;padding-top:20px;border-top:1px solid #e4e4e0;font-weight:bold;">ClevOps</p>
  <p style="margin:4px 0 0;color:#6b6b6b;font-size:13px;">Websites, search, paid media and lead systems, connected.</p>
</div>
</body></html>`;

  const text = [
    `Hi ${firstName},`,
    "",
    ...paragraphs.flatMap((paragraph) => [paragraph, ""]),
    `In the meantime, you can learn more about how we work on the ClevOps website: ${SITE_URL}/process`,
    "",
    "ClevOps",
    "Websites, search, paid media and lead systems, connected.",
  ].join("\n");

  // The sender domain (clevops.co) is send-only, so replies go to the inbox
  // the legal pages publish.
  return {
    from,
    to: lead.email,
    subject: "We received your project enquiry | ClevOps",
    html,
    text,
    replyTo: CONTACT_EMAIL,
  };
}
