import "server-only";
import { Resend } from "resend";

export type LeadEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function requireEmailConfig(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing email configuration: ${name}`);
  }

  return value;
}

function leadSummary(lead: LeadEmailPayload): string {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Business: ${lead.business || "Not provided"}`,
    `Service: ${lead.service || "Not provided"}`,
    "",
    "Message:",
    lead.message || "Not provided",
  ].join("\n");
}

export async function sendAdminNotification(lead: LeadEmailPayload) {
  await resend.emails.send({
    from: requireEmailConfig(process.env.LEADS_FROM_EMAIL, "LEADS_FROM_EMAIL"),
    to: requireEmailConfig(
      process.env.LEADS_NOTIFY_EMAIL,
      "LEADS_NOTIFY_EMAIL"
    ),
    subject: `New Lead — ${lead.name}`,
    text: leadSummary(lead),
  });
}

export async function sendAutoReply(lead: LeadEmailPayload) {
  await resend.emails.send({
    from: requireEmailConfig(
      process.env.AUTO_REPLY_FROM_EMAIL,
      "AUTO_REPLY_FROM_EMAIL"
    ),
    to: lead.email,
    subject: "Got your message — ClevOps",
    text: [
      `Hey ${lead.name},`,
      "",
      "Thanks for reaching out — I’ve received your message.",
      "",
      "I’ll review your request and get back to you shortly with the next steps.",
      "",
      "In the meantime, feel free to reply to this email if there’s anything you’d like to add.",
      "",
      "– Zain",
      "ClevOps",
      "https://clevops.co",
    ].join("\n"),
  });
}
