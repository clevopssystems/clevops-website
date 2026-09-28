/**
 * The project enquiry's vocabulary, shared by the form on /start-a-project and
 * the server-side validator in app/api/leads. Keys are what travel over the
 * wire; labels are what people and the notification email read. Nothing here
 * is secret, so it is safe in the client bundle.
 */

export const SERVICE_OPTIONS = [
  { value: "lead-generation-system", label: "Lead Generation System" },
  { value: "website-development", label: "Website Development" },
  { value: "seo", label: "SEO" },
  { value: "google-ads", label: "Google Ads" },
  { value: "meta-ads", label: "Meta Ads" },
  { value: "crm-automation", label: "CRM / Automation" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-1000", label: "Under $1,000" },
  { value: "1000-2500", label: "$1,000–$2,500" },
  { value: "2500-5000", label: "$2,500–$5,000" },
  { value: "5000-10000", label: "$5,000–$10,000" },
  { value: "10000-plus", label: "$10,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];

export const LIMITS = {
  name: 100,
  business: 120,
  email: 254,
  website: 200,
  phone: 30,
  phoneDigitsMin: 7,
  phoneDigitsMax: 15,
  messageMin: 10,
  message: 4000,
} as const;

/**
 * The honeypot. Visually hidden and skipped by keyboard and screen readers; a
 * person never fills it. Named like a plausible optional field so form-filling
 * bots take it, but not like anything browser autofill targets (website, url,
 * phone, company), so a real visitor's autofill cannot trip it.
 */
export const HONEYPOT_FIELD = "referralCode";

/** Field keys shared by the form and the API's error responses. */
export type EnquiryField = "name" | "business" | "email" | "phone" | "website" | "services" | "message" | "budget";
