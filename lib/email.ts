import "server-only";
import { Resend, type CreateEmailResponse } from "resend";
import { SITE_CONFIG } from "@/lib/config";

export type LeadEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  message?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function firstEnv(...names: string[]): string | undefined {
  return names.map((name) => process.env[name]).find(Boolean);
}

function requireEmailConfig(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing email configuration: ${name}`);
  }

  return value;
}

function requireResendApiKey() {
  requireEmailConfig(process.env.RESEND_API_KEY, "RESEND_API_KEY");
}

function requireContactToEmail() {
  return requireEmailConfig(
    firstEnv("CONTACT_TO_EMAIL", "LEADS_NOTIFY_EMAIL"),
    "CONTACT_TO_EMAIL or LEADS_NOTIFY_EMAIL"
  );
}

function requireContactFromEmail() {
  return requireEmailConfig(
    firstEnv("CONTACT_FROM_EMAIL", "LEADS_FROM_EMAIL"),
    "CONTACT_FROM_EMAIL or LEADS_FROM_EMAIL"
  );
}

function requireAutoReplyFromEmail() {
  return requireEmailConfig(
    firstEnv("AUTO_REPLY_FROM_EMAIL", "CONTACT_FROM_EMAIL", "LEADS_FROM_EMAIL"),
    "AUTO_REPLY_FROM_EMAIL or CONTACT_FROM_EMAIL or LEADS_FROM_EMAIL"
  );
}

function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL || SITE_CONFIG.url;
}

function assertResendSuccess(
  response: CreateEmailResponse,
  label: "admin" | "auto-reply"
) {
  if (response.error) {
    throw new Error(
      `Resend ${label} error: ${JSON.stringify(response.error)}`
    );
  }

  return response;
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
  requireResendApiKey();

  const response = await resend.emails.send({
    from: requireContactFromEmail(),
    to: requireContactToEmail(),
    subject: `New Lead - ${lead.name}`,
    text: leadSummary(lead),
  });

  return assertResendSuccess(response, "admin");
}

export async function sendAutoReply(lead: LeadEmailPayload) {
  requireResendApiKey();

  const response = await resend.emails.send({
    from: requireAutoReplyFromEmail(),
    to: lead.email,
    subject: "Got your message - ClevOps",
    text: [
      `Hey ${lead.name},`,
      "",
      "Thanks for reaching out - I've received your message.",
      "",
      "I'll review your request and get back to you shortly with the next steps.",
      "",
      "In the meantime, feel free to reply to this email if there's anything you'd like to add.",
      "",
      "- Zain",
      "ClevOps",
      getAppUrl(),
    ].join("\n"),
  });

  return assertResendSuccess(response, "auto-reply");
}

export function getEmailEnvDiagnostics() {
  const contactFromEmail = firstEnv("CONTACT_FROM_EMAIL", "LEADS_FROM_EMAIL");
  const autoReplyFromEmail = firstEnv(
    "AUTO_REPLY_FROM_EMAIL",
    "CONTACT_FROM_EMAIL",
    "LEADS_FROM_EMAIL"
  );
  const appUrl = getAppUrl();

  return {
    missing: [
      !process.env.RESEND_API_KEY && "RESEND_API_KEY",
      !firstEnv("CONTACT_TO_EMAIL", "LEADS_NOTIFY_EMAIL") &&
        "CONTACT_TO_EMAIL or LEADS_NOTIFY_EMAIL",
      !contactFromEmail && "CONTACT_FROM_EMAIL or LEADS_FROM_EMAIL",
      !autoReplyFromEmail &&
        "AUTO_REPLY_FROM_EMAIL or CONTACT_FROM_EMAIL or LEADS_FROM_EMAIL",
      !process.env.NEXT_PUBLIC_APP_URL && "NEXT_PUBLIC_APP_URL",
      !process.env.DATABASE_URL && "DATABASE_URL",
    ].filter(Boolean) as string[],
    configured: {
      RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
      CONTACT_TO_EMAIL: Boolean(process.env.CONTACT_TO_EMAIL),
      CONTACT_FROM_EMAIL: Boolean(process.env.CONTACT_FROM_EMAIL),
      LEADS_NOTIFY_EMAIL: Boolean(process.env.LEADS_NOTIFY_EMAIL),
      LEADS_FROM_EMAIL: Boolean(process.env.LEADS_FROM_EMAIL),
      AUTO_REPLY_FROM_EMAIL: Boolean(process.env.AUTO_REPLY_FROM_EMAIL),
      NEXT_PUBLIC_APP_URL: Boolean(process.env.NEXT_PUBLIC_APP_URL),
      TURNSTILE_SECRET_KEY: Boolean(process.env.TURNSTILE_SECRET_KEY),
      NEXT_PUBLIC_TURNSTILE_SITE_KEY: Boolean(
        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
      ),
      UPSTASH_REDIS_REST_URL: Boolean(process.env.UPSTASH_REDIS_REST_URL),
      UPSTASH_REDIS_REST_TOKEN: Boolean(process.env.UPSTASH_REDIS_REST_TOKEN),
      DATABASE_URL: Boolean(process.env.DATABASE_URL),
    },
    senderDomains: {
      contactFrom: getEmailDomain(contactFromEmail),
      autoReplyFrom: getEmailDomain(autoReplyFromEmail),
      appUrl: getUrlDomain(appUrl),
    },
  };
}

function getEmailDomain(value: string | undefined) {
  const match = value?.match(/@([^>\s]+)>?$/);
  return match?.[1]?.toLowerCase() ?? null;
}

function getUrlDomain(value: string | undefined) {
  if (!value) return null;

  try {
    return new URL(value).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return null;
  }
}
