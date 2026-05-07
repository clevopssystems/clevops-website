"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Script from "next/script";
import {
  Send,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/config";

const services = [
  "Website Design & Development",
  "Lead Capture System",
  "Automation & Follow-Up",
  "Local SEO Foundations",
  "Full Growth Package",
  "Not Sure Yet, Need Guidance",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

// Resolved at build time — undefined when env var not set (captcha disabled)
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function ContactPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.1 });

  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState<string>("");

  // Bot-protection refs — not state (no re-renders needed)
  const formStartTimeRef = useRef<number>(0);
  const turnstileTokenRef = useRef<string>("");
  const widgetIdRef = useRef<string>("");
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const turnstileRenderedRef = useRef(false);

  useEffect(() => {
    formStartTimeRef.current = Date.now();
  }, []);

  function renderTurnstileWidget() {
    if (
      !TURNSTILE_SITE_KEY ||
      turnstileRenderedRef.current ||
      !widgetContainerRef.current ||
      !window.turnstile
    )
      return;

    widgetIdRef.current = window.turnstile.render(widgetContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: "dark",
      callback: (token: string) => {
        turnstileTokenRef.current = token;
      },
      "expired-callback": () => {
        turnstileTokenRef.current = "";
      },
    });
    turnstileRenderedRef.current = true;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side captcha guard — prevents submit before widget loads
    if (TURNSTILE_SITE_KEY && !turnstileTokenRef.current) {
      setFormState("error");
      setErrorMessage(
        "Please wait for the bot verification to load, then try again."
      );
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get("name") as string,
        business: formData.get("business") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        website: formData.get("website") as string,
        service: selectedService,
        message: formData.get("message") as string,
        // Bot-protection fields
        honeypot: formData.get("honeypot") as string,
        formStartTime: formStartTimeRef.current,
        turnstileToken: turnstileTokenRef.current || undefined,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again."
        );
      }

      setFormState("success");
    } catch (err) {
      setFormState("error");
      // Reset Turnstile so user can re-verify after a failed attempt
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        turnstileTokenRef.current = "";
      }
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email us directly."
      );
    }
  };

  return (
    <div className="min-h-screen bg-co-bg">
      {/* Hero */}
      <section
        ref={headerRef}
        className="relative pt-36 pb-12 md:pt-40 md:pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div
          className="orb w-[500px] h-[350px] top-0 left-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(79,127,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>Get In Touch</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Let&apos;s build something{" "}
            <span className="text-gradient-accent">
              your business can grow from
            </span>
          </motion.h1>

          <motion.p
            className="text-co-text-secondary text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
          >
            Book a free consultation. We will review your current presence,
            understand your goals, and show you exactly how we would build your
            growth system.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 32 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {formState === "success" ? (
                <div className="rounded-3xl border border-green-500/20 bg-green-500/[0.04] p-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-co-text mb-3">
                    Message received!
                  </h3>
                  <p className="text-co-text-secondary text-sm leading-relaxed max-w-sm mx-auto mb-6">
                    We will review your details and get back to you within 24
                    hours. We are looking forward to learning about your
                    business.
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center gap-1.5 text-sm text-co-accent hover:text-co-accent-light transition-colors duration-200"
                  >
                    {SITE_CONFIG.email}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-co-border bg-co-card p-6 md:p-8 space-y-5"
                >
                  <div>
                    <h2 className="text-xl font-bold text-co-text">
                      Tell us about your project
                    </h2>
                    <p className="text-xs text-co-text-muted mt-1">
                      Fields marked{" "}
                      <span className="text-co-accent">*</span> are required
                    </p>
                  </div>

                  {/* Error banner */}
                  {formState === "error" && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3">
                      <AlertCircle
                        size={16}
                        className="text-red-400 shrink-0 mt-0.5"
                      />
                      <p className="text-sm text-red-400">{errorMessage}</p>
                    </div>
                  )}

                  {/* Honeypot — off-screen, aria-hidden, bots fill it, humans don't */}
                  <input
                    type="text"
                    name="honeypot"
                    defaultValue=""
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: 0,
                      height: 0,
                      opacity: 0,
                      overflow: "hidden",
                    }}
                  />

                  {/* Name + Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />
                    <FormField
                      label="Business Name"
                      name="business"
                      placeholder="Smith Cleaning Co."
                      required
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@business.com"
                      required
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Website */}
                  <FormField
                    label="Current Website (if any)"
                    name="website"
                    placeholder="https://yourbusiness.com"
                  />

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-co-text-secondary mb-3">
                      Service Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() =>
                            setSelectedService(
                              service === selectedService ? "" : service
                            )
                          }
                          className={cn(
                            "px-3.5 py-2.5 rounded-xl text-xs font-medium text-left",
                            "border transition-all duration-200",
                            selectedService === service
                              ? "border-co-accent bg-co-accent/10 text-co-accent"
                              : "border-co-border bg-co-surface text-co-text-secondary hover:border-co-border-hover hover:text-co-text"
                          )}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-widest uppercase text-co-text-secondary mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your business, your goals, and what you feel is holding you back online..."
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-sm",
                        "bg-co-surface border border-co-border",
                        "text-co-text placeholder:text-co-text-muted",
                        "focus:outline-none focus:border-co-accent/40 focus:bg-co-surface",
                        "transition-all duration-200 resize-none"
                      )}
                    />
                  </div>

                  {/* Cloudflare Turnstile widget — only rendered when site key is configured */}
                  {TURNSTILE_SITE_KEY && (
                    <>
                      <Script
                        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                        strategy="afterInteractive"
                        onLoad={renderTurnstileWidget}
                      />
                      <div ref={widgetContainerRef} />
                    </>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full justify-center"
                    icon={
                      formState === "submitting" ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Send size={15} />
                      )
                    }
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-co-text-muted text-center">
                    Free consultation · No commitment · Response within 24 hours
                  </p>
                </form>
              )}
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-5"
              initial={{ opacity: 0, x: 24 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
            >
              {/* Contact details */}
              <div className="rounded-2xl border border-co-border bg-co-card p-6 space-y-4">
                <h3 className="font-bold text-co-text text-sm mb-4">
                  Direct Contact
                </h3>
                {contactDetails.map((detail, i) => {
                  const Icon = detail.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-co-accent/10 border border-co-accent/15 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-co-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-widest uppercase text-co-text-muted">
                          {detail.label}
                        </div>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-sm text-co-text-secondary hover:text-co-text transition-colors duration-200"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <div className="text-sm text-co-text-secondary">
                            {detail.value}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* What to expect */}
              <div className="rounded-2xl border border-co-border bg-co-card p-6">
                <h3 className="font-bold text-co-text text-sm mb-4">
                  What to expect on your call
                </h3>
                <ul className="space-y-3">
                  {[
                    "Review of your current digital presence",
                    "Identify your biggest growth opportunities",
                    "Walkthrough of the ClevOps approach",
                    "Clear recommendations tailored to your business",
                    "Pricing and timeline overview",
                    "No pressure, no obligation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-co-text-secondary"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-co-accent shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social proof */}
              <div className="rounded-2xl border border-co-border bg-co-card p-5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl mt-0.5 text-co-text-muted">
                    &ldquo;
                  </div>
                  <div>
                    <p className="text-sm text-co-text-secondary leading-relaxed italic">
                      The transformation was exactly what we needed. Our online
                      presence finally reflects the quality of our service.
                    </p>
                    <div className="mt-3 text-xs text-co-text-muted">
                      — Client, Residential Cleaning Business
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold tracking-widest uppercase text-co-text-secondary mb-2"
      >
        {label}
        {required && <span className="text-co-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={
          name === "email"
            ? "email"
            : name === "name"
              ? "name"
              : name === "phone"
                ? "tel"
                : name === "website"
                  ? "url"
                  : "off"
        }
        className={cn(
          "w-full h-11 rounded-xl px-4 text-sm",
          "bg-co-surface border border-co-border",
          "text-co-text placeholder:text-co-text-muted",
          "focus:outline-none focus:border-co-accent/40 focus:bg-co-card",
          "transition-all duration-200"
        )}
      />
    </div>
  );
}
