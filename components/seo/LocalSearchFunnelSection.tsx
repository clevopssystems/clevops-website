"use client"

import { useRef } from "react"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Search,
  MapPin,
  Globe,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Smartphone,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM } from "@/lib/animations"

// ── Pipeline step data ───────────────────────────────────────────────────────

interface PipelineStep {
  num: string
  Icon: LucideIcon
  title: string
  sub: string
  color: string
  bg: string
  border: string
  warningLabel?: string
  successLabel?: string
}

const pipelineSteps: PipelineStep[] = [
  {
    num: "01",
    Icon: Search,
    title: "Local Search",
    sub: "Customer searches for a nearby service",
    color: "#7BA3FF",
    bg: "rgba(79,127,255,0.1)",
    border: "rgba(79,127,255,0.22)",
  },
  {
    num: "02",
    Icon: MapPin,
    title: "Visibility",
    sub: "Business appears in map pack or organic results",
    color: "#B87FFF",
    bg: "rgba(155,114,255,0.1)",
    border: "rgba(155,114,255,0.22)",
    warningLabel: "Most miss this",
  },
  {
    num: "03",
    Icon: Globe,
    title: "Website Visit",
    sub: "First impression forms in under 3 seconds",
    color: "#4FC8FF",
    bg: "rgba(79,200,255,0.1)",
    border: "rgba(79,200,255,0.22)",
    warningLabel: "Highest drop-off",
  },
  {
    num: "04",
    Icon: ShieldCheck,
    title: "Trust",
    sub: "Reviews and proof close the confidence gap",
    color: "#7BA3FF",
    bg: "rgba(79,127,255,0.1)",
    border: "rgba(79,127,255,0.22)",
  },
  {
    num: "05",
    Icon: Phone,
    title: "Inquiry",
    sub: "Form submitted or call placed",
    color: "#B87FFF",
    bg: "rgba(155,114,255,0.1)",
    border: "rgba(155,114,255,0.22)",
  },
  {
    num: "06",
    Icon: CheckCircle2,
    title: "Booked",
    sub: "Lead confirmed and job scheduled",
    color: "#4ADE80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.3)",
    successLabel: "Revenue",
  },
]

// ── Mini visual components ───────────────────────────────────────────────────

function MobileBar() {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: "#7BA3FF" }}>Mobile vs Desktop</span>
      </div>
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
          <div
            className="h-full rounded-full"
            style={{ width: "74%", background: "linear-gradient(90deg, #7BA3FF, #B87FFF)" }}
          />
        </div>
        <span className="text-[10.5px] font-bold shrink-0 tabular-nums" style={{ color: "#7BA3FF" }}>74%</span>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
          <div
            className="h-full rounded-full"
            style={{ width: "26%", background: "rgba(255,255,255,0.12)" }}
          />
        </div>
        <span className="text-[10.5px] font-bold shrink-0 tabular-nums text-co-text-muted">26%</span>
      </div>
      <div className="flex gap-2.5 mt-2">
        <span className="text-[9px] text-co-text-muted flex-1">Mobile</span>
        <span className="text-[9px] text-co-text-muted flex-1">Desktop</span>
      </div>
    </div>
  )
}

function SpeedBars() {
  const segs = [
    { label: "< 1s", height: 85, color: "rgba(74,222,128,0.55)" },
    { label: "1–3s", height: 58, color: "rgba(79,127,255,0.32)" },
    { label: "3–5s", height: 34, color: "rgba(251,146,60,0.25)" },
    { label: "5s+",  height: 16, color: "rgba(239,68,68,0.18)" },
  ]
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: "#B87FFF" }}>Conversion by Load Time</span>
      </div>
      <div className="flex items-end gap-2.5 h-9 mb-2">
        {segs.map((s) => (
          <div key={s.label} className="flex-1 flex flex-col justify-end">
            <div
              className="w-full rounded-t-[3px]"
              style={{ height: `${s.height}%`, background: s.color }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2.5">
        {segs.map((s) => (
          <div key={s.label} className="flex-1 text-center text-[8px] text-co-text-muted font-medium">
            {s.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function MapPackBars() {
  const positions = [
    { pos: "#1", height: 88, color: "rgba(79,200,255,0.65)" },
    { pos: "#2", height: 52, color: "rgba(79,200,255,0.32)" },
    { pos: "#3", height: 30, color: "rgba(79,200,255,0.16)" },
    { pos: "4+",  height: 10, color: "rgba(255,255,255,0.06)" },
  ]
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: "#4FC8FF" }}>Clicks by Map Pack Rank</span>
      </div>
      <div className="flex items-end gap-2.5 h-9 mb-2">
        {positions.map((p) => (
          <div key={p.pos} className="flex-1 flex flex-col justify-end">
            <div
              className="w-full rounded-t-[3px]"
              style={{ height: `${p.height}%`, background: p.color }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2.5">
        {positions.map((p) => (
          <div key={p.pos} className="flex-1 text-center text-[8px] text-co-text-muted font-medium">
            {p.pos}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Insight card data ────────────────────────────────────────────────────────

interface InsightCard {
  Icon: LucideIcon
  title: string
  body: string
  accent: string
  bg: string
  border: string
  topBar: string
  visual: ReactNode
}

const insightCards: InsightCard[] = [
  {
    Icon: Smartphone,
    title: "Mobile is where local search starts",
    body: "Most local service searches begin on a phone — often while customers are at home comparing options. A fast, mobile-optimized website is what separates businesses that get found from those that don't.",
    accent: "#7BA3FF",
    bg: "rgba(79,127,255,0.08)",
    border: "rgba(79,127,255,0.16)",
    topBar: "linear-gradient(90deg, rgba(79,127,255,0.7), rgba(155,114,255,0.4))",
    visual: <MobileBar />,
  },
  {
    Icon: Zap,
    title: "Site speed signals business quality",
    body: "A slow website creates a negative quality signal before a customer reads a single word. Load time directly affects how trustworthy a business appears on first visit — and whether the visitor stays.",
    accent: "#B87FFF",
    bg: "rgba(155,114,255,0.08)",
    border: "rgba(155,114,255,0.16)",
    topBar: "linear-gradient(90deg, rgba(155,114,255,0.7), rgba(79,200,255,0.4))",
    visual: <SpeedBars />,
  },
  {
    Icon: Star,
    title: "Map pack position drives most calls",
    body: "The top three positions in Google's local map pack capture the majority of clicks and calls for service searches. Businesses ranked 4th or lower receive dramatically lower inquiry volume.",
    accent: "#4FC8FF",
    bg: "rgba(79,200,255,0.08)",
    border: "rgba(79,200,255,0.16)",
    topBar: "linear-gradient(90deg, rgba(79,200,255,0.7), rgba(74,222,128,0.3))",
    visual: <MapPackBars />,
  },
]

// ── Desktop pipeline connector ───────────────────────────────────────────────

function PipelineConnector({ index }: { index: number }) {
  const colors = [
    ["rgba(79,127,255,0.35)", "rgba(155,114,255,0.35)"],
    ["rgba(155,114,255,0.35)", "rgba(79,200,255,0.35)"],
    ["rgba(79,200,255,0.35)", "rgba(79,127,255,0.35)"],
    ["rgba(79,127,255,0.35)", "rgba(155,114,255,0.35)"],
    ["rgba(155,114,255,0.35)", "rgba(74,222,128,0.4)"],
  ]
  const [from, to] = colors[index] ?? colors[0]
  return (
    <div className="flex items-center shrink-0 w-8" style={{ paddingTop: "1.75rem" }}>
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
      />
      <ArrowRight
        size={10}
        style={{ color: to, marginLeft: "-1px", flexShrink: 0 }}
      />
    </div>
  )
}

// ── Props ────────────────────────────────────────────────────────────────────

export interface LocalSearchFunnelProps {
  city?: string
  state: string
  topIndustries: string[]
}

// ── Component ────────────────────────────────────────────────────────────────

export function LocalSearchFunnelSection({ city, state, topIndustries }: LocalSearchFunnelProps) {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.05 })

  const primaryIndustry = topIndustries[0] ?? "service businesses"

  const supportingText = city
    ? `${city} customers searching for ${primaryIndustry} compare options before committing. The businesses capturing that demand have optimized every step of this journey — from how they appear in local search to how fast their site loads on a phone.`
    : `Service businesses across ${state} compete for the same local searches every day. The ones consistently winning new clients have structured their digital presence around each stage of this journey — from map pack visibility to a frictionless booking experience.`

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-co-bg" />
      <div className="absolute inset-0 bg-dot opacity-[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div
        className="orb w-[700px] h-[500px] top-1/2 right-[-8%] -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-end mb-10 md:mb-14"
        >
          <div>
            <SectionLabel className="mb-5">Search to Revenue</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
              How local customers become{" "}
              <span className="text-gradient-accent">booked clients</span>
            </h2>
          </div>
          <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
            {supportingText}
          </p>
        </motion.div>

        {/* ── Pipeline desktop ──────────────────────────────────────────────── */}
        <div className="hidden lg:block mb-12">
          {/* Progress track */}
          <div
            className="h-px mb-8 mx-auto"
            style={{ background: "linear-gradient(90deg, rgba(79,127,255,0.15), rgba(155,114,255,0.15), rgba(74,222,128,0.15))" }}
          />

          <motion.div
            className="flex items-start gap-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: EASE_PREMIUM, delay: 0.15 }}
          >
            {pipelineSteps.flatMap((step, i) => {
              const isLast = i === pipelineSteps.length - 1
              const card = (
                <motion.div
                  key={step.num}
                  className="flex-1 flex flex-col items-center text-center min-w-0"
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.2 + i * 0.1 }}
                >
                  {/* Badge row */}
                  <div className="h-6 flex items-center justify-center mb-3">
                    {(step.warningLabel || step.successLabel) ? (
                      <span
                        className="text-[7px] font-black tracking-[0.18em] uppercase px-2 py-1 rounded-md"
                        style={
                          step.warningLabel
                            ? { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#F87171" }
                            : { background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ADE80" }
                        }
                      >
                        {step.warningLabel ?? step.successLabel}
                      </span>
                    ) : (
                      <span className="text-[9px] font-black tracking-[0.22em] uppercase" style={{ color: step.color, opacity: 0.5 }}>
                        {step.num}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      boxShadow: isLast ? `0 0 24px ${step.bg}` : "none",
                    }}
                  >
                    <step.Icon size={22} style={{ color: step.color }} />
                  </div>

                  {/* Labels */}
                  <p className="font-bold text-co-text text-[13px] leading-snug mb-1.5 px-1">{step.title}</p>
                  <p className="text-[10.5px] text-co-text-muted leading-relaxed px-1 max-w-[9rem]">{step.sub}</p>
                </motion.div>
              )

              if (!isLast) {
                return [card, <PipelineConnector key={`conn-${i}`} index={i} />]
              }
              return [card]
            })}
          </motion.div>
        </div>

        {/* ── Pipeline mobile / tablet vertical ────────────────────────────── */}
        <div className="lg:hidden mb-10">
          <div className="relative">
            {/* Vertical track */}
            <div
              className="absolute w-px"
              style={{
                left: "1.625rem",
                top: "2rem",
                bottom: "2rem",
                background: "linear-gradient(180deg, rgba(79,127,255,0.3), rgba(155,114,255,0.3), rgba(74,222,128,0.35))",
              }}
            />

            <div className="space-y-7">
              {pipelineSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE_PREMIUM, delay: 0.15 + i * 0.08 }}
                >
                  {/* Icon */}
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      width: "3.25rem",
                      height: "3.25rem",
                    }}
                  >
                    <step.Icon size={19} style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <div className="pt-2.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-[9px] font-black tracking-[0.22em] uppercase"
                        style={{ color: step.color, opacity: 0.65 }}
                      >
                        {step.num}
                      </span>
                      {step.warningLabel && (
                        <span
                          className="text-[7.5px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide"
                          style={{ background: "rgba(239,68,68,0.1)", color: "#F87171", border: "1px solid rgba(239,68,68,0.2)" }}
                        >
                          {step.warningLabel}
                        </span>
                      )}
                      {step.successLabel && (
                        <span
                          className="text-[7.5px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide"
                          style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.22)" }}
                        >
                          {step.successLabel}
                        </span>
                      )}
                    </div>
                    <p className="font-bold text-co-text text-[14px] leading-snug mb-1">{step.title}</p>
                    <p className="text-[12px] text-co-text-muted leading-relaxed">{step.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-10 md:mb-12"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
        />

        {/* ── Insight cards ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {insightCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative rounded-2xl flex flex-col overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.022)",
                border: `1px solid ${card.border}`,
              }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.55 + i * 0.12 }}
            >
              {/* Accent top bar */}
              <div
                className="h-[2px] w-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: card.topBar }}
              />

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Visual chart */}
                {card.visual}

                {/* Icon + title row */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: card.bg, border: `1px solid ${card.border}` }}
                  >
                    <card.Icon size={15} style={{ color: card.accent }} />
                  </div>
                  <p className="font-semibold text-co-text text-[13.5px] leading-snug pt-1">{card.title}</p>
                </div>

                {/* Body */}
                <p className="text-[12px] text-co-text-muted leading-relaxed flex-1">{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
