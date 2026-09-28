import {
  BUDGET_OPTIONS,
  HONEYPOT_FIELD,
  LIMITS,
  SERVICE_OPTIONS,
  type BudgetValue,
  type EnquiryField,
  type ServiceValue,
} from "./enquiry-options";

export type Lead = {
  name: string;
  business: string;
  email: string;
  phone: string;
  website: string | null;
  services: ServiceValue[];
  message: string;
  budget: BudgetValue | null;
};

export type ParseResult =
  | { kind: "lead"; lead: Lead }
  | { kind: "spam" }
  | { kind: "invalid"; fields: Partial<Record<EnquiryField, string>> };

// Control characters (other than tab and newline) never belong in a form
// field; stripping them also rules out header injection through the subject.
// Unicode line and paragraph separators (U+2028, U+2029) go too, as do the
// bidirectional overrides (U+202A–U+202E, U+2066–U+2069), which could make a
// submitted name or subject render in a misleading order in the inbox.
const SEPARATORS = String.fromCharCode(0x2028, 0x2029, 0x202a, 0x202b, 0x202c, 0x202d, 0x202e, 0x2066, 0x2067, 0x2068, 0x2069);
const CONTROL = new RegExp(`[\x00-\x08\x0B-\x1F\x7F-\x9F${SEPARATORS}]`, "g");

/** Single-line text: no line breaks, collapsed whitespace. */
function line(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n?|\n|\t/g, " ").replace(CONTROL, "").replace(/\s+/g, " ").trim();
}

/** Multi-line text: newlines kept, runs of blank lines capped at one. */
function block(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/\t/g, "  ")
    .replace(CONTROL, "")
    .split("\n")
    .map((part) => part.replace(/[^\S\n]+$/g, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Deliberately conservative: one @, no whitespace or characters that are only
// legal in quoted local parts, and a dotted hostname with a real TLD.
const EMAIL =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

// Digits plus the separators people actually type: spaces, dots, dashes and
// brackets, with an optional leading +. No country is assumed; the digit count
// (7–15, the E.164 ceiling) is what rules out junk like "call me" or "123".
const PHONE = /^\+?[0-9 ().-]+$/;

function normaliseWebsite(raw: string): string | null | undefined {
  if (!raw) return null;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    if (url.username || url.password) return undefined;
    if (!/^[a-z0-9.-]+\.[a-z]{2,63}$/i.test(url.hostname)) return undefined;
    return url.href;
  } catch {
    return undefined;
  }
}

function pick<T extends { value: string }>(options: readonly T[], value: unknown): T["value"] | undefined {
  return options.find((option) => option.value === value)?.value;
}

/**
 * Turns an untrusted JSON body into a Lead. Everything is re-derived from the
 * allow-lists and limits in enquiry-options.ts; nothing the client sends is
 * passed through as-is.
 */
export function parseLead(body: unknown): ParseResult {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return { kind: "invalid", fields: {} };
  }
  const input = body as Record<string, unknown>;

  // A filled honeypot is a bot. It gets the same answer a person would.
  if (line(input[HONEYPOT_FIELD])) return { kind: "spam" };

  const fields: Partial<Record<EnquiryField, string>> = {};

  const name = line(input.name);
  if (name.length < 2) fields.name = "Enter your full name.";
  else if (name.length > LIMITS.name) fields.name = `Keep your name under ${LIMITS.name} characters.`;

  const business = line(input.business);
  if (!business) fields.business = "Enter your business name.";
  else if (business.length > LIMITS.business) fields.business = `Keep the business name under ${LIMITS.business} characters.`;

  const email = line(input.email);
  if (!email) fields.email = "Enter your email address.";
  else if (email.length > LIMITS.email || !EMAIL.test(email)) fields.email = "Enter a valid email address, like name@business.com.";

  const phone = line(input.phone);
  const phoneDigits = phone.replace(/\D/g, "").length;
  if (!phone) fields.phone = "Enter your phone number.";
  else if (phone.length > LIMITS.phone) fields.phone = `Keep the phone number under ${LIMITS.phone} characters.`;
  else if (!PHONE.test(phone) || phoneDigits < LIMITS.phoneDigitsMin || phoneDigits > LIMITS.phoneDigitsMax) {
    fields.phone = "Enter a valid phone number, like +1 206 555 1234.";
  }

  const websiteRaw = line(input.website);
  const website = websiteRaw.length > LIMITS.website ? undefined : normaliseWebsite(websiteRaw);
  if (website === undefined) fields.website = "Enter a valid web address, like yourbusiness.com, or leave it blank.";

  const requested = Array.isArray(input.services) ? input.services.slice(0, SERVICE_OPTIONS.length * 2) : [];
  const services = SERVICE_OPTIONS.map((option) => option.value).filter((value) => requested.includes(value));
  if (services.length === 0) fields.services = "Choose at least one option, or “Not sure yet”.";

  const message = block(input.message);
  if (message.length < LIMITS.messageMin) fields.message = `Tell us a little more about the project (at least ${LIMITS.messageMin} characters).`;
  else if (message.length > LIMITS.message) fields.message = `Keep the project details under ${LIMITS.message} characters.`;

  const budget = input.budget === "" || input.budget == null ? null : pick(BUDGET_OPTIONS, input.budget);
  if (budget === undefined) fields.budget = "Choose a budget range from the list.";

  if (Object.keys(fields).length > 0) return { kind: "invalid", fields };

  return {
    kind: "lead",
    lead: {
      name,
      business,
      email,
      phone,
      website: website ?? null,
      services: services as ServiceValue[],
      message,
      budget: budget ?? null,
    },
  };
}
