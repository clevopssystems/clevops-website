"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  ArrowUpRight,
  Globe,
  Shield,
  Zap,
  Crown,
  Lock,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_PREMIUM } from "@/lib/animations";

/* ── Static data ────────────────────────────────────────────── */

const WEBSITE_FEATURES = [
  "Up to 5 conversion-focused pages",
  "Mobile-first responsive design",
  "Loads in under 2 seconds",
  "Lead capture form",
  "Basic on-page SEO",
];

interface Plan {
  step: string;
  name: string;
  price: string;
  period: string;
  badge: string | null;
  tagline: string;
  roiLine: string | null;
  forWho: string;
  mandatoryNote: string | null;
  accentColor: string;
  borderColor: string;
  bgGlow: string;
  featured: boolean;
  icon: LucideIcon;
  features: string[];
  cta: string;
  href: string;
}

const plans: Plan[] = [
  {
    step: "02",
    name: "Care Plan",
    price: "$300",
    period: "/month",
    badge: "REQUIRED",
    tagline: "Without this, your website slows down, breaks, and stops ranking.",
    roiLine: null,
    forWho: "Every website requires this. No exceptions.",
    mandatoryNote: "Every website requires this. No exceptions.",
    accentColor: "#F59E0B",
    borderColor: "rgba(245,158,11,0.2)",
    bgGlow: "rgba(245,158,11,0.04)",
    featured: false,
    icon: Shield,
    features: [
      "Managed hosting & uptime",
      "Security patches & updates",
      "Monthly performance checks",
      "Basic SEO maintenance",
      "Priority support access",
    ],
    cta: "Keep It Running",
    href: "/contact",
  },
  {
    step: "03",
    name: "Growth",
    price: "$600",
    period: "/month",
    badge: "MOST POPULAR",
    tagline: "Get consistent leads every month — without chasing referrals.",
    roiLine: "Most clients recover this in 1–2 deals.",
    forWho: "If your website isn't bringing you leads, this is why. Best for service businesses ready to scale.",
    mandatoryNote: null,
    accentColor: "#9B72FF",
    borderColor: "rgba(155,114,255,0.5)",
    bgGlow: "rgba(155,114,255,0.12)",
    featured: true,
    icon: Zap,
    features: [
      "Everything in Care Plan",
      "Automated SMS + email follow-up",
      "Missed call text-back",
      "Online booking system",
      "CRM integration",
      "Local SEO optimization",
      "Monthly website improvements",
    ],
    cta: "Start Getting Clients",
    href: "/contact",
  },
  {
    step: "04",
    name: "Domination",
    price: "$1,000+",
    period: "/month",
    badge: "ELITE",
    tagline:
      "We run your ads, SEO, and automation — so you dominate your local market.",
    roiLine: null,
    forWho: "For businesses serious about dominating their city — when you're ready to scale aggressively.",
    mandatoryNote: null,
    accentColor: "#06B6D4",
    borderColor: "rgba(6,182,212,0.2)",
    bgGlow: "rgba(6,182,212,0.04)",
    featured: false,
    icon: Crown,
    features: [
      "Everything in Growth",
      "Google Ads management",
      "Meta Ads (Facebook + Instagram)",
      "Advanced local SEO",
      "Full marketing automation",
      "Monthly strategy + reporting",
    ],
    cta: "Book Strategy Call",
    href: "/contact",
  },
];

/* ── Website Foundation Card ────────────────────────────────── */
function WebsiteCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.7, ease: EASE_PREMIUM }}
      style={{
        background: "linear-gradient(135deg, #0c1120 0%, #111116 100%)",
        border: "1px solid rgba(79,127,255,0.22)",
        boxShadow:
          "0 0 60px rgba(79,127,255,0.05), 0 20px 48px rgba(0,0,0,0.3)",
      }}
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, #4F7FFF 0%, transparent 60%)",
        }}
      />

      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 md:gap-8">
        {/* Left — info + features */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "rgba(79,127,255,0.12)",
                border: "1px solid rgba(79,127,255,0.25)",
              }}
            >
              <Globe size={16} style={{ color: "#4F7FFF" }} />
            </div>
            <div>
              <div
                className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
                style={{ color: "rgba(79,127,255,0.6)" }}
              >
                Step 01 · Foundation
              </div>
              <div className="font-bold text-co-text text-base leading-none">
                Your Website
              </div>
            </div>
          </div>

          <p className="text-base font-semibold text-co-text leading-snug mb-1.5">
            Your website should bring you clients — not just sit there.
          </p>
          <p className="text-sm text-co-text-muted leading-relaxed mb-6">
            This is where everything starts. Without a conversion-ready website,
            no amount of marketing will stick.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {WEBSITE_FEATURES.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(79,127,255,0.12)",
                    border: "1px solid rgba(79,127,255,0.22)",
                  }}
                >
                  <Check
                    size={7.5}
                    style={{ color: "#4F7FFF" }}
                    strokeWidth={3}
                  />
                </div>
                <span className="text-[12.5px] text-co-text-muted">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — price + CTA */}
        <div
          className="flex flex-col justify-between gap-6 md:pl-8 md:border-l"
          style={{ borderColor: "rgba(79,127,255,0.1)" }}
        >
          <div>
            <div className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold mb-2">
              One-time investment
            </div>
            <div
              className="font-black tracking-tight text-white leading-none mb-1.5"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3rem)" }}
            >
              $999–1999
            </div>
            <p className="text-xs text-co-text-muted">
              No recurring fee for the site itself.
            </p>
          </div>
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={15} />}
            className="shadow-glow-md w-full justify-center"
          >
            Build My Website
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Flow Connector ─────────────────────────────────────────── */
function FlowConnector({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0 py-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.44, duration: 0.5, ease: EASE_PREMIUM }}
    >
      <div
        className="w-px h-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(79,127,255,0.4), rgba(155,114,255,0.4))",
        }}
      />
      <div
        className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
        style={{
          background: "rgba(155,114,255,0.08)",
          border: "1px solid rgba(155,114,255,0.22)",
          color: "rgba(155,114,255,0.75)",
        }}
      >
        Then choose your growth speed
      </div>
      <div
        className="w-px h-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(155,114,255,0.4), transparent)",
        }}
      />
    </motion.div>
  );
}

/* ── Pricing Card (Growth Plans) ────────────────────────────── */
function PricingCard({
  plan,
  index,
  inView,
}: {
  plan: Plan;
  index: number;
  inView: boolean;
}) {
  const Icon = plan.icon;

  return (
    <motion.div
      className="relative flex flex-col rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.52 + index * 0.1, duration: 0.7, ease: EASE_PREMIUM }}
      style={{
        background: plan.featured
          ? "linear-gradient(160deg, #17122e 0%, #110e20 100%)"
          : "#111116",
        border: `1px solid ${plan.borderColor}`,
        boxShadow: plan.featured
          ? `0 0 110px ${plan.bgGlow}, 0 0 0 1px ${plan.borderColor}, 0 28px 80px rgba(0,0,0,0.5)`
          : "none",
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase z-10"
          style={{
            background: `${plan.accentColor}18`,
            border: `1px solid ${plan.accentColor}38`,
            color: plan.accentColor,
          }}
        >
          {plan.badge}
        </div>
      )}

      {/* Top accent line */}
      <div
        className="h-[2px] w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${plan.accentColor} 0%, transparent 80%)`,
          opacity: plan.featured ? 1 : 0.5,
        }}
      />

      <div
        className={`flex flex-col flex-1 p-6 md:p-7 ${
          plan.featured ? "lg:pt-10 lg:pb-10" : ""
        }`}
      >
        {/* Step + Icon + Name */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="rounded-xl flex items-center justify-center shrink-0"
            style={{
              width: plan.featured ? 40 : 36,
              height: plan.featured ? 40 : 36,
              background: `${plan.accentColor}14`,
              border: `1px solid ${plan.accentColor}28`,
            }}
          >
            <Icon size={plan.featured ? 17 : 15} style={{ color: plan.accentColor }} />
          </div>
          <div>
            <div
              className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
              style={{ color: `${plan.accentColor}80` }}
            >
              Step {plan.step}
            </div>
            <div
              className="font-bold text-co-text leading-none"
              style={{ fontSize: plan.featured ? "0.9375rem" : "0.875rem" }}
            >
              {plan.name}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-1">
          <span
            className="font-black tracking-tight leading-none"
            style={{
              fontSize: plan.featured
                ? "clamp(2rem, 3.5vw, 2.5rem)"
                : "clamp(1.75rem, 3vw, 2.25rem)",
              color: plan.featured ? plan.accentColor : "#FFFFFF",
            }}
          >
            {plan.price}
          </span>
        </div>
        <div className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold mb-5">
          {plan.period}
        </div>

        {/* ROI line — Growth only */}
        {plan.roiLine && (
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg mb-4"
            style={{
              background: "rgba(155,114,255,0.08)",
              border: "1px solid rgba(155,114,255,0.22)",
            }}
          >
            <Zap size={10} style={{ color: "#9B72FF" }} className="shrink-0" />
            <span
              className="text-[11px] font-semibold"
              style={{ color: "rgba(155,114,255,0.9)" }}
            >
              {plan.roiLine}
            </span>
          </div>
        )}

        {/* Mandatory notice — Care Plan */}
        {plan.mandatoryNote && (
          <div
            className="flex items-start gap-2 p-3 rounded-xl mb-5"
            style={{
              background: "rgba(245,158,11,0.07)",
              border: "1px solid rgba(245,158,11,0.18)",
            }}
          >
            <Lock size={11} className="text-amber-400 shrink-0 mt-px" />
            <p className="text-[11px] leading-snug text-amber-300/80">
              {plan.mandatoryNote}
            </p>
          </div>
        )}

        {/* Tagline */}
        <p className="text-sm font-semibold text-co-text leading-snug mb-2">
          {plan.tagline}
        </p>

        {/* For who */}
        <p
          className="text-xs text-co-text-muted leading-relaxed mb-6 pb-6 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {plan.forWho}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 flex-1 mb-7">
          {plan.features.map((feature, fi) => (
            <li key={fi} className="flex items-start gap-2.5">
              <div
                className="shrink-0 mt-[2px] w-4 h-4 rounded-full flex items-center justify-center"
                style={{
                  background: `${plan.accentColor}14`,
                  border: `1px solid ${plan.accentColor}28`,
                }}
              >
                <Check
                  size={8}
                  style={{ color: plan.accentColor }}
                  strokeWidth={3}
                />
              </div>
              <span className="text-[12.5px] text-co-text-muted leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          href={plan.href}
          size={plan.featured ? "lg" : "md"}
          variant={plan.featured ? "primary" : "outline"}
          icon={<ArrowUpRight size={plan.featured ? 15 : 14} />}
          className={`w-full justify-center ${
            plan.featured ? "shadow-glow-md" : ""
          }`}
        >
          {plan.cta}
        </Button>
      </div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────────── */
export function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-co-bg"
    >
      {/* Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Ambient glow */}
      <div
        className="orb w-[1000px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.06) 0%, rgba(79,127,255,0.02) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Global header ── */}
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            className="flex justify-center mb-4"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <SectionLabel>Investment</SectionLabel>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            A system that{" "}
            <span className="text-gradient-accent">pays for itself.</span>
          </motion.h2>

          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.18 }}
          >
            Start with a website. Add the systems that fill your calendar.
            Scale when you&apos;re ready to own your market.
          </motion.p>
        </div>

        {/* ── Part 1: Website Foundation ── */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.22 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-co-text-muted mb-1">
            Start here
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-co-text">
            Start with your website.
          </h3>
          <p className="text-sm text-co-text-muted mt-1 max-w-lg">
            Your website should bring you clients — not just sit there.
          </p>
          <p className="text-xs mt-1 max-w-lg font-semibold" style={{ color: "rgba(79,127,255,0.65)" }}>
            This is where everything starts. Without this, nothing else works.
          </p>
        </motion.div>

        <WebsiteCard inView={inView} />

        {/* ── Flow Connector ── */}
        <FlowConnector inView={inView} />

        {/* ── Part 2: Growth Plans ── */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.48 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-co-text">
            Then choose how fast you want to{" "}
            <span className="text-gradient-accent">grow.</span>
          </h3>
          <p className="text-sm text-co-text-muted mt-1.5 max-w-2xl">
            Your website alone won&apos;t bring clients. Growth comes from systems, SEO,
            and automation that run 24/7 — even when you&apos;re on the job.
          </p>
        </motion.div>

        {/* 3-card grid — lg:items-end lets Growth's extra padding elevate it naturally */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:items-end">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Mandatory footnote ── */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.9 }}
        >
          <Lock size={11} className="text-amber-400/60 shrink-0" />
          <p className="text-xs text-center text-co-text-muted">
            <span className="text-amber-400/80">Care Plan is required</span>{" "}
            with every website — it&apos;s what keeps your site live, secure, and
            indexed by Google.
          </p>
        </motion.div>

        {/* ── Trust row ── */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.96 }}
        >
          {["No hidden fees", "Cancel anytime", "Built to generate real clients"].map(
            (label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-co-accent/50" />
                <span className="text-xs font-medium text-co-text-muted">
                  {label}
                </span>
              </div>
            )
          )}
        </motion.div>

        {/* ── Urgency line ── */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 1.04 }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full"
            style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.15)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400" />
            </span>
            <span className="text-xs text-red-400/90 font-medium">
              Every day without a proper system, your competitors get your customers.
            </span>
          </div>
        </motion.div>

        {/* ── Bottom nudge ── */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 1.1 }}
        >
          <p className="text-sm text-co-text-muted">
            Not sure where to start?{" "}
            <a
              href="/contact"
              className="text-co-accent hover:text-co-accent-light underline underline-offset-2 transition-colors duration-200 font-medium"
            >
              Book a free 30-min audit
            </a>{" "}
            — we&apos;ll tell you exactly what your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
