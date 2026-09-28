/**
 * The business details the Privacy Policy and Terms of Service depend on,
 * as confirmed by the owner on 2026-09-28. Change them here and both pages
 * follow.
 *
 * ClevOps is the trading name. It is not described anywhere as an LLC, Ltd or
 * registered company, because no such status has been confirmed. No postal
 * address is published by design.
 *
 * CONTACT_EMAIL is the official inbox for general, privacy, deletion and
 * legal enquiries (confirmed by the owner 2026-09-28). clevops.co has no MX
 * record, so no @clevops.co address can receive mail; the auto-reply is sent
 * from the verified Resend domain with this address as its Reply-To (see
 * app/api/leads/emails.ts). The sender addresses in `.env` are server-side
 * delivery settings and are never published.
 */

export const CONTACT_EMAIL = "clevops.systems@gmail.com";

export type LegalDetails = {
  /** ISO date shown as "Last updated" on both pages. */
  lastUpdated: string;
  businessName: string;
  operator: string;
  country: string;
  /** The production domain, as set in the root layout's metadataBase. */
  domain: string;
  /** The monitored inbox for general, privacy and legal enquiries. */
  contactEmail: string;
  /** Serves clevops.co (www.clevops.co is a Vercel CNAME). */
  hostingProvider: string;
  /** Hosts the inbox LEADS_NOTIFY_EMAIL delivers to. */
  emailProvider: string;
};

export const LEGAL_DETAILS: LegalDetails = {
  lastUpdated: "2026-09-28",
  businessName: "ClevOps",
  operator: "Zain",
  country: "Pakistan",
  domain: "clevops.co",
  contactEmail: CONTACT_EMAIL,
  hostingProvider: "Vercel",
  emailProvider: "Google (Gmail)",
};

export const RESEND_PRIVACY_URL = "https://resend.com/legal/privacy-policy";

/** "2026-09-28" → "28 September 2026", fixed to UTC so server and client agree. */
export function formatLegalDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
