"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Check,
  ArrowUpRight,
  Globe,
  Shield,
  Zap,
  Crown,
  Lock,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM } from "@/lib/animations"

/* ── Foundation features ──────────────────────────────────────── */
const FOUNDATION_FEATURES = [
  "Up to 7 conversion-focused pages",
  "Mobile-first, performance-optimized build",
  "Sub-2-second load time target",
  "Lead capture and contact forms",
  "On-page SEO foundations",
  "Google Business Profile integration",
  "SSL certificate and basic security setup",
  "Launch strategy session included",
]

/* ── Plan data ────────────────────────────────────────────────── */
interface Plan {
  step: string
  name: string
  price: string
  period: string
  badge: string | null
  tagline: string
  forWho: string
  mandatoryNote: string | null
  roiLine: string | null
  accentColor: string
  borderColor: string
  bgGlow: string
  featured: boolean
  icon: LucideIcon
  features: string[]
  cta: string
  href: string
}

const PLANS: Plan[] = [
  {
    step: "02",
    name: "Care Plan",
    price: "$300",
    period: "/month",
    badge: "REQUIRED",
    tagline: "Without this, your website slows down, breaks, and stops ranking.",
    forWho:
      "Every ClevOps website requires this plan. It is the operational baseline that keeps your investment performing.",
    mandatoryNote: "This is not optional. It is what keeps your site live, secure, and indexed.",
    roiLine: null,
    accentColor: "#F59E0B",
    borderColor: "rgba(245,158,11,0.28)",
    bgGlow: "rgba(245,158,11,0.04)",
    featured: false,
    icon: Shield,
    features: [
      "Managed hosting with uptime monitoring",
      "Security patches and malware scanning",
      "Plugin and system updates",
      "Monthly performance checks",
      "Automated daily backups",
      "Minor content updates",
      "Priority support access",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    step: "03",
    name: "Growth",
    price: "$600",
    period: "/month",
    badge: "MOST POPULAR",
    tagline: "Your business ranks higher and grows stronger every month.",
    forWho:
      "Service businesses ready to move past referrals and win on local search. This plan builds the SEO foundation and ongoing optimization that keeps you ranking consistently.",
    mandatoryNote: null,
    roiLine: "Most clients recover this in 1 to 2 booked jobs.",
    accentColor: "#9B72FF",
    borderColor: "rgba(155,114,255,0.45)",
    bgGlow: "rgba(155,114,255,0.12)",
    featured: true,
    icon: Zap,
    features: [
      "Everything in Care Plan",
      "Local SEO optimization and keyword targeting",
      "Google Business Profile optimization",
      "On-page SEO improvements monthly",
      "Technical SEO monitoring and fixes",
      "Local ranking tracking and reporting",
      "Content optimization for target searches",
      "Conversion-focused website improvements",
      "Monthly SEO growth strategy session",
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
      "Full automation, ads, and systems. We run your growth infrastructure end to end.",
    forWho:
      "For established service businesses ready to scale aggressively. You have the capacity for more volume. This plan builds the systems to deliver it.",
    mandatoryNote: null,
    roiLine: null,
    accentColor: "#06B6D4",
    borderColor: "rgba(6,182,212,0.4)",
    bgGlow: "rgba(6,182,212,0.1)",
    featured: false,
    icon: Crown,
    features: [
      "Everything in Growth",
      "Automated SMS and email follow-up",
      "Missed call text-back system",
      "CRM setup and integration",
      "Online booking integration",
      "Full lead automation workflows",
      "Google Ads campaign management",
      "Meta Ads (Facebook and Instagram)",
      "Multi-channel lead system",
      "Competitor monitoring and analysis",
      "Dedicated account strategist",
      "Monthly strategy call and reporting",
    ],
    cta: "Book Strategy Call",
    href: "/contact",
  },
]

/* ── Foundation Card ──────────────────────────────────────────── */
function FoundationCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3, duration: 0.7, ease: EASE_PREMIUM }}
      style={{
        background: "linear-gradient(140deg, #0c1120 0%, #0f1018 100%)",
        border: "1px solid rgba(79,127,255,0.22)",
        boxShadow: "0 0 60px rgba(79,127,255,0.05), 0 20px 48px rgba(0,0,0,0.35)",
      }}
    >
      {/* Top accent */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, #4F7FFF 0%, transparent 60%)",
        }}
      />

      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_240px] gap-8">

        {/* Left: details */}
        <div>
          <div className="flex items-center gap-3 mb-6">
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
                style={{ color: "rgba(79,127,255,0.55)" }}
              >
                Step 01 · Foundation
              </div>
              <div className="font-bold text-co-text text-base leading-none">
                Your Website
              </div>
            </div>
          </div>

          <p className="text-base font-semibold text-co-text leading-snug mb-2">
            Your website should bring you clients, not just represent you.
          </p>
          <p className="text-sm text-co-text-muted leading-relaxed mb-7">
            This is where everything starts. Without a conversion-ready website,
            no amount of marketing or automation will stick. We build for speed,
            trust, and the single metric that matters: booked appointments.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {FOUNDATION_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(79,127,255,0.12)",
                    border: "1px solid rgba(79,127,255,0.22)",
                  }}
                >
                  <Check size={7.5} style={{ color: "#4F7FFF" }} strokeWidth={3} />
                </div>
                <span className="text-[12.5px] text-co-text-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: price + CTA */}
        <div
          className="flex flex-col justify-between gap-6 md:pl-8 md:border-l"
          style={{ borderColor: "rgba(79,127,255,0.1)" }}
        >
          <div>
            <div className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold mb-3">
              One-time investment
            </div>
            <div
              className="font-black tracking-tight text-white leading-none mb-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3rem)" }}
            >
              $999
              <span
                className="font-semibold"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "rgba(255,255,255,0.45)" }}
              >
                {" "}– 1999
              </span>
            </div>
            <p className="text-xs text-co-text-muted leading-relaxed">
              No recurring fee for the website itself. Price scales with
              scope and page count.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowUpRight size={15} />}
              className="shadow-glow-md w-full justify-center"
            >
              Build My Website
            </Button>
            <p
              className="text-center text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: "rgba(79,127,255,0.5)" }}
            >
              14-day average delivery
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Flow Connector ───────────────────────────────────────────── */
function FlowConnector({ inView }: { inView: boolean }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-0 py-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 0.44, duration: 0.5, ease: EASE_PREMIUM }}
    >
      <div
        className="w-px h-12"
        style={{
          background:
            "linear-gradient(to bottom, rgba(79,127,255,0.4), rgba(155,114,255,0.4))",
        }}
      />
      <div
        className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest"
        style={{
          background: "rgba(155,114,255,0.08)",
          border: "1px solid rgba(155,114,255,0.22)",
          color: "rgba(155,114,255,0.75)",
        }}
      >
        Then choose your growth speed
      </div>
      <div
        className="w-px h-12"
        style={{
          background:
            "linear-gradient(to bottom, rgba(155,114,255,0.4), transparent)",
        }}
      />
    </motion.div>
  )
}

/* ── Pricing Card ─────────────────────────────────────────────── */
function PricingCard({
  plan,
  index,
  inView,
}: {
  plan: Plan
  index: number
  inView: boolean
}) {
  const Icon = plan.icon
  const isElite = plan.name === "Domination"

  return (
    <motion.div
      className="relative flex flex-col rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 + index * 0.11, duration: 0.72, ease: EASE_PREMIUM }}
      whileHover={
        !plan.featured
          ? {
              y: isElite ? -7 : -5,
              transition: { type: "spring", stiffness: 360, damping: 24 },
            }
          : undefined
      }
      style={{
        background: plan.featured
          ? "linear-gradient(160deg, #17122e 0%, #120f22 50%, #0f0d1c 100%)"
          : isElite
          ? "linear-gradient(155deg, #091718 0%, #0c1a1e 50%, #090e10 100%)"
          : "#111116",
        border: `1px solid ${plan.borderColor}`,
        boxShadow: plan.featured
          ? `0 0 140px ${plan.bgGlow}, 0 0 0 1px ${plan.borderColor}, 0 32px 80px rgba(0,0,0,0.55)`
          : isElite
          ? `0 0 90px ${plan.bgGlow}, 0 4px 32px rgba(0,0,0,0.45), 0 0 0 1px ${plan.borderColor}`
          : `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${plan.borderColor}`,
      }}
    >
      {/* Featured card animated breathing glow */}
      {plan.featured && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(155,114,255,0.14) 0%, transparent 65%)",
          }}
        />
      )}

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
          background: `linear-gradient(90deg, ${plan.accentColor} 0%, transparent 75%)`,
          opacity: plan.featured || isElite ? 1 : 0.55,
        }}
      />

      <div
        className={`flex flex-col flex-1 p-6 md:p-7 ${
          plan.featured ? "lg:pt-9 lg:pb-9" : ""
        }`}
      >
        {/* Icon + step + name */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="rounded-xl flex items-center justify-center shrink-0"
            style={{
              width: plan.featured ? 42 : 36,
              height: plan.featured ? 42 : 36,
              background: `${plan.accentColor}14`,
              border: `1px solid ${plan.accentColor}2a`,
            }}
          >
            <Icon
              size={plan.featured ? 18 : 15}
              style={{ color: plan.accentColor }}
            />
          </div>
          <div>
            <div
              className="text-[9px] font-bold uppercase tracking-widest mb-0.5"
              style={{ color: `${plan.accentColor}70` }}
            >
              Step {plan.step}
            </div>
            <div
              className="font-bold text-co-text leading-none"
              style={{ fontSize: plan.featured ? "1rem" : "0.875rem" }}
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
                ? "clamp(2rem, 3.5vw, 2.6rem)"
                : "clamp(1.8rem, 3vw, 2.2rem)",
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
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl mb-4"
            style={{
              background: "rgba(155,114,255,0.08)",
              border: "1px solid rgba(155,114,255,0.2)",
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

        {/* Mandatory note — Care Plan */}
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
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
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
                  background: `${plan.accentColor}12`,
                  border: `1px solid ${plan.accentColor}26`,
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
  )
}

/* ── Main Section ─────────────────────────────────────────────── */
export default function PricingTiers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.04 })

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-co-bg"
    >
      {/* Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Ambient glow */}
      <div
        className="orb w-[1100px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.06) 0%, rgba(79,127,255,0.02) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <SectionLabel>Investment</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.08 }}
          >
            A system that{" "}
            <span className="text-gradient-accent">pays for itself.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.16 }}
          >
            Start with the foundation. Add the systems that fill your calendar.
            Scale when you are ready to own your market.
          </motion.p>
        </div>

        {/* Foundation label */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.22 }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-widest mb-1"
            style={{ color: "rgba(79,127,255,0.55)" }}
          >
            Start here
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-co-text">
            Step 1. Build the foundation.
          </h3>
          <p className="text-sm text-co-text-muted mt-1 max-w-lg">
            Without a conversion-ready website, everything else is noise.
          </p>
        </motion.div>

        {/* Foundation card */}
        <FoundationCard inView={inView} />

        {/* Flow connector */}
        <FlowConnector inView={inView} />

        {/* Plans label */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.46 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-co-text">
            Step 2. Choose how fast you want to{" "}
            <span className="text-gradient-accent">grow.</span>
          </h3>
          <p className="text-sm text-co-text-muted mt-1.5 max-w-2xl">
            Your website alone will not bring clients. Growth comes from systems,
            SEO, and automation that run 24/7, even when you are on the job.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 lg:items-end">
          {/* Spotlight glow centered on Growth card */}
          <div
            className="absolute hidden sm:block pointer-events-none -z-0"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "480px",
              height: "560px",
              background:
                "radial-gradient(ellipse, rgba(155,114,255,0.20) 0%, rgba(155,114,255,0.08) 40%, transparent 68%)",
              filter: "blur(48px)",
              borderRadius: "9999px",
            }}
          />
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} inView={inView} />
          ))}
        </div>

        {/* Mandatory footnote */}
        <motion.div
          className="mt-7 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.92 }}
        >
          <Lock size={11} className="text-amber-400/60 shrink-0" />
          <p className="text-xs text-center text-co-text-muted">
            <span className="text-amber-400/80 font-medium">
              Care Plan is required
            </span>{" "}
            with every website. It keeps your site live, secure, and indexed
            by Google every day after launch.
          </p>
        </motion.div>

        {/* Trust row */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.98 }}
        >
          {[
            "No hidden fees",
            "You own everything",
            "Cancel anytime",
            "Built to generate real clients",
          ].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-co-accent/50" />
              <span className="text-xs font-medium text-co-text-muted">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom nudge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 1.06 }}
        >
          <p className="text-sm text-co-text-muted">
            Not sure which plan fits?{" "}
            <a
              href="/contact"
              className="text-co-accent hover:text-co-accent-light underline underline-offset-2 transition-colors duration-200 font-medium"
            >
              Book a free 30-minute audit
            </a>{" "}
            and we will tell you exactly what your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
