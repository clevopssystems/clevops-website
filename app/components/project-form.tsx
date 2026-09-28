"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  BUDGET_OPTIONS,
  HONEYPOT_FIELD,
  LIMITS,
  SERVICE_OPTIONS,
  type EnquiryField,
} from "./enquiry-options";
import { parseLead } from "./enquiry-validation";

type Status = "idle" | "sending" | "sent";
type FieldErrors = Partial<Record<EnquiryField, string>>;

// Visual order, so focus lands on the first problem the visitor would see.
const FIELD_ORDER: EnquiryField[] = ["name", "business", "email", "phone", "website", "services", "message", "budget"];

// Where each field's focus goes when it is the first error. Groups focus
// their first control.
const FOCUS_TARGET: Record<EnquiryField, string> = {
  name: "pf-name",
  business: "pf-business",
  email: "pf-email",
  phone: "pf-phone",
  website: "pf-website",
  services: `pf-service-${SERVICE_OPTIONS[0].value}`,
  message: "pf-message",
  budget: "pf-budget",
};

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p className="sp-error" id={id}>{message}</p>;
}

/**
 * The project enquiry. Validates with the same parser the API uses, posts
 * JSON to /api/leads, and keeps every value in place until the server confirms.
 * The form only gives way to the success message on a 200.
 */
export function ProjectForm() {
  const successRef = useRef<HTMLHeadingElement>(null);
  const pending = useRef(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  function describedBy(field: EnquiryField, hint?: string) {
    return [hint, errors[field] ? `pf-${field}-error` : undefined].filter(Boolean).join(" ") || undefined;
  }

  function clearError(field: EnquiryField) {
    if (!errors[field]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function showErrors(fields: FieldErrors) {
    setErrors(fields);
    const first = FIELD_ORDER.find((field) => fields[field]);
    if (first) document.getElementById(FOCUS_TARGET[first])?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const data = new FormData(event.currentTarget);
    const payload = {
      name: data.get("name") ?? "",
      business: data.get("business") ?? "",
      email: data.get("email") ?? "",
      phone: data.get("phone") ?? "",
      website: data.get("website") ?? "",
      services: data.getAll("services"),
      message: data.get("message") ?? "",
      budget: data.get("budget") ?? "",
      [HONEYPOT_FIELD]: data.get(HONEYPOT_FIELD) ?? "",
    };

    setFormError("");
    const check = parseLead(payload);
    if (check.kind === "invalid") {
      showErrors(check.fields);
      setFormError("Please check the highlighted fields.");
      return;
    }
    setErrors({});

    pending.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; fields?: FieldErrors };

      if (response.ok && result.ok) {
        setStatus("sent");
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }

      setStatus("idle");
      if (response.status === 400 && result.fields && Object.keys(result.fields).length > 0) {
        showErrors(result.fields);
        setFormError("Please check the highlighted fields.");
      } else if (response.status === 429) {
        setFormError("You’ve sent a few enquiries in a short time. Please wait a few minutes and try again.");
      } else {
        setFormError("Something went wrong on our side and your enquiry wasn’t sent. Your details are still here, please try again in a moment.");
      }
    } catch {
      setStatus("idle");
      setFormError("We couldn’t reach the server. Check your connection and try again, your details are still here.");
    } finally {
      pending.current = false;
    }
  }

  if (status === "sent") {
    return (
      <div className="sp-form sp-success" id="project-form">
        <span className="sp-success-mark" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="sp-success-title" ref={successRef} tabIndex={-1}>
          Thanks, we&rsquo;ve received your project details.
        </h2>
        <p className="sp-success-copy">
          We&rsquo;ll review what you sent and follow up using the contact details
          you provided.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      className="sp-form"
      id="project-form"
      method="post"
      action="/api/leads"
      aria-labelledby="sp-form-heading"
      aria-busy={sending}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="sp-form-head">
        <h2 className="sp-form-title" id="sp-form-heading">Project details</h2>
        <p className="sp-form-hint">Fields marked <span aria-hidden="true">*</span><span className="visually-hidden">with an asterisk</span> are required.</p>
      </div>

      {/* ---- 01 About you ---- */}
      <fieldset className="sp-group">
        <legend className="sp-group-legend"><span className="sp-group-num">01</span> About you</legend>
        <div className="sp-fields">
          <div className="sp-field">
            <label htmlFor="pf-name">Full name <span className="sp-req" aria-hidden="true">*</span></label>
            <input
              id="pf-name" name="name" type="text" autoComplete="name" required maxLength={LIMITS.name}
              aria-invalid={errors.name ? true : undefined} aria-describedby={describedBy("name")}
              onChange={() => clearError("name")}
            />
            <FieldError id="pf-name-error" message={errors.name} />
          </div>
          <div className="sp-field">
            <label htmlFor="pf-business">Business name <span className="sp-req" aria-hidden="true">*</span></label>
            <input
              id="pf-business" name="business" type="text" autoComplete="organization" required maxLength={LIMITS.business}
              aria-invalid={errors.business ? true : undefined} aria-describedby={describedBy("business")}
              onChange={() => clearError("business")}
            />
            <FieldError id="pf-business-error" message={errors.business} />
          </div>
          <div className="sp-field">
            <label htmlFor="pf-email">Email address <span className="sp-req" aria-hidden="true">*</span></label>
            <input
              id="pf-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={LIMITS.email}
              aria-invalid={errors.email ? true : undefined} aria-describedby={describedBy("email")}
              onChange={() => clearError("email")}
            />
            <FieldError id="pf-email-error" message={errors.email} />
          </div>
          <div className="sp-field">
            <label htmlFor="pf-phone">Phone number <span className="sp-req" aria-hidden="true">*</span></label>
            <input
              id="pf-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={LIMITS.phone}
              placeholder="+1 206 555 1234"
              aria-invalid={errors.phone ? true : undefined} aria-describedby={describedBy("phone")}
              onChange={() => clearError("phone")}
            />
            <FieldError id="pf-phone-error" message={errors.phone} />
          </div>
          <div className="sp-field">
            <label htmlFor="pf-website">Website <span className="sp-optional">Optional</span></label>
            <input
              id="pf-website" name="website" type="url" autoComplete="url" inputMode="url" maxLength={LIMITS.website}
              placeholder="yourbusiness.com"
              aria-invalid={errors.website ? true : undefined} aria-describedby={describedBy("website")}
              onChange={() => clearError("website")}
            />
            <FieldError id="pf-website-error" message={errors.website} />
          </div>
        </div>
      </fieldset>

      {/* ---- 02 The project ---- */}
      <fieldset className="sp-group">
        <legend className="sp-group-legend"><span className="sp-group-num">02</span> The project</legend>

        <fieldset
          className="sp-choices"
          aria-describedby={describedBy("services", "pf-services-hint")}
        >
          <legend className="sp-label">What do you need help with? <span className="sp-req" aria-hidden="true">*</span><span className="visually-hidden"> (required)</span></legend>
          <p className="sp-hint" id="pf-services-hint">Choose any that apply.</p>
          <div className="sp-options">
            {SERVICE_OPTIONS.map((option) => (
              <div className="sp-option" key={option.value}>
                <input
                  id={`pf-service-${option.value}`} type="checkbox" name="services" value={option.value}
                  aria-invalid={errors.services ? true : undefined}
                  onChange={() => clearError("services")}
                />
                <label htmlFor={`pf-service-${option.value}`}>{option.label}</label>
              </div>
            ))}
          </div>
          <FieldError id="pf-services-error" message={errors.services} />
        </fieldset>

        <div className="sp-field">
          <label htmlFor="pf-message">Tell us about your project <span className="sp-req" aria-hidden="true">*</span></label>
          <textarea
            id="pf-message" name="message" rows={6} required maxLength={LIMITS.message}
            placeholder="What are you trying to improve, build or solve?"
            aria-invalid={errors.message ? true : undefined} aria-describedby={describedBy("message", "pf-message-hint")}
            onChange={() => clearError("message")}
          />
          <p className="sp-hint" id="pf-message-hint">Where things stand today and what you&rsquo;d like to change.</p>
          <FieldError id="pf-message-error" message={errors.message} />
        </div>

        <div className="sp-field sp-field-narrow">
          <label htmlFor="pf-budget">Approximate monthly marketing budget <span className="sp-optional">Optional</span></label>
          <div className="sp-select">
            <select
              id="pf-budget" name="budget" defaultValue=""
              aria-invalid={errors.budget ? true : undefined} aria-describedby={describedBy("budget")}
              onChange={() => clearError("budget")}
            >
              <option value="">Prefer not to say</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <FieldError id="pf-budget-error" message={errors.budget} />
        </div>
      </fieldset>

      {/* Honeypot: hidden from people, keyboards and screen readers alike. */}
      <div className="sp-trap" aria-hidden="true">
        <label htmlFor="pf-referral">Referral code</label>
        <input id="pf-referral" name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sp-submit-row">
        <p className="sp-form-error" role="alert">{formError}</p>
        <button
          className="button button-primary sp-submit"
          type="submit"
          aria-disabled={sending || undefined}
          data-pending={sending || undefined}
        >
          {sending ? "Sending…" : "Request a Proposal"}
          {!sending && <Arrow />}
        </button>
        <p className="visually-hidden" aria-live="polite">{sending ? "Sending your enquiry." : ""}</p>
        <p className="sp-privacy">
          By submitting this form, you acknowledge that your information will be
          processed in accordance with our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </form>
  );
}
