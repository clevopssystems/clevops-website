"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Activity, ArrowRight, Clock, Zap, Search, BarChart2 } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Counter } from "@/components/ui/Counter"
import {
  EASE_PREMIUM,
  headerBlock,
  headerH2,
  headerLabel,
  headerP,
  staggerGrid,
  staggerItemCard,
} from "@/lib/animations"

const IMPROVEMENTS = [
  {
    icon: Clock,
    dimension: "Lead Response",
    before: "Missed calls with no follow-up path",
    after: "Automated text-back triggered in under 30 seconds",
    accent: "#4F7FFF",
  },
  {
    icon: Search,
    dimension: "Search Visibility",
    before: "Not appearing for local service keywords",
    after: "Monthly local SEO optimization targeting your market",
    accent: "#9B72FF",
  },
  {
    icon: Zap,
    dimension: "Follow-up Speed",
    before: "Manual outreach whenever you find time",
    after: "Instant SMS and email sequence, no human required",
    accent: "#06B6D4",
  },
  {
    icon: BarChart2,
    dimension: "Website Performance",
    before: "Slow, generic site losing trust in 3 seconds",
    after: "Conversion-focused build targeting sub-2s load times",
    accent: "#10B981",
  },
]

const METRICS = [
  { label: "Launch Window", numeric: true, to: 14, suffix: " days", text: "" },
  { label: "Load Target", numeric: false, to: 0, suffix: "", text: "< 2s" },
  { label: "Automation", numeric: false, to: 0, suffix: "", text: "24 / 7" },
  { label: "Optimization", numeric: false, to: 0, suffix: "", text: "Monthly" },
  { label: "Lead Response", numeric: false, to: 0, suffix: "", text: "Instant" },
  { label: "Growth Pattern", numeric: false, to: 0, suffix: "", text: "Compounding" },
]

export default function AuthorityProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #070709 0%, #0b0b14 50%, #070709 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="orb w-[1000px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, rgba(155,114,255,0.03) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-16"
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center mb-5" variants={headerLabel}>
            <SectionLabel>System Intelligence</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            variants={headerH2}
          >
            Infrastructure built to{" "}
            <span className="text-gradient-accent">compound.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            variants={headerP}
          >
            Every component of the system is engineered to improve over time.
            Not a website. An operating layer for consistent client acquisition.
          </motion.p>
        </motion.div>

        {/* ── SIGNATURE INTERACTION: Live System Terminal ─────────────── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-14 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.3 }}
          style={{
            background: "linear-gradient(145deg, #0b0e1a 0%, #080b14 60%, #0a0c16 100%)",
            border: "1px solid rgba(79,127,255,0.22)",
            boxShadow:
              "0 0 100px rgba(79,127,255,0.07), 0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(79,127,255,0.12)",
          }}
        >
          {/* Corner brackets — premium technical detail */}
          <div
            className="absolute top-3 left-3 w-5 h-5 border-t border-l pointer-events-none z-10"
            style={{ borderColor: "rgba(79,127,255,0.55)" }}
          />
          <div
            className="absolute top-3 right-3 w-5 h-5 border-t border-r pointer-events-none z-10"
            style={{ borderColor: "rgba(79,127,255,0.55)" }}
          />
          <div
            className="absolute bottom-3 left-3 w-5 h-5 border-b border-l pointer-events-none z-10"
            style={{ borderColor: "rgba(79,127,255,0.28)" }}
          />
          <div
            className="absolute bottom-3 right-3 w-5 h-5 border-b border-r pointer-events-none z-10"
            style={{ borderColor: "rgba(79,127,255,0.28)" }}
          />

          {/* Animated scan line — the insane detail */}
          {inView && (
            <>
              <motion.div
                className="absolute left-0 right-0 pointer-events-none z-20"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(79,127,255,0.06) 8%, rgba(79,127,255,0.55) 30%, rgba(100,150,255,0.85) 50%, rgba(79,127,255,0.55) 70%, rgba(79,127,255,0.06) 92%, transparent 100%)",
                  boxShadow:
                    "0 0 16px rgba(79,127,255,0.55), 0 0 56px rgba(79,127,255,0.18)",
                }}
                animate={{ top: ["8%", "92%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2.2,
                }}
              />
              {/* Soft glow beneath scan line */}
              <motion.div
                className="absolute left-0 right-0 pointer-events-none z-10"
                style={{
                  height: "48px",
                  background:
                    "linear-gradient(180deg, rgba(79,127,255,0.05) 0%, transparent 100%)",
                }}
                animate={{ top: ["8%", "92%"], opacity: [0, 0.7, 0.7, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2.2,
                }}
              />
            </>
          )}

          {/* Terminal header bar */}
          <div
            className="flex items-center justify-between px-6 md:px-8 py-4"
            style={{ borderBottom: "1px solid rgba(79,127,255,0.1)" }}
          >
            <div className="flex items-center gap-3">
              <Activity size={12} style={{ color: "rgba(79,127,255,0.7)" }} />
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: "rgba(79,127,255,0.6)" }}
              >
                ClevOps Infrastructure
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span
                className="text-[9px] font-bold uppercase tracking-widest"
                style={{ color: "rgba(52,211,153,0.75)" }}
              >
                All Systems Active
              </span>
            </div>
          </div>

          {/* Metric readouts — 2x3 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3">
            {METRICS.map((metric, i) => {
              const isLastRow = i >= 3
              const isLastInRow2 = i % 3 === 2
              return (
                <motion.div
                  key={metric.label}
                  className="flex flex-col gap-2.5 p-5 md:p-7"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{
                    delay: 0.55 + i * 0.09,
                    duration: 0.7,
                    ease: EASE_PREMIUM,
                  }}
                  style={{
                    borderRight: isLastInRow2
                      ? "none"
                      : "1px solid rgba(79,127,255,0.07)",
                    borderBottom: isLastRow
                      ? "none"
                      : "1px solid rgba(79,127,255,0.07)",
                  }}
                >
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    {metric.label}
                  </div>
                  <div
                    className="font-black tracking-tight leading-none"
                    style={{
                      fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {metric.numeric ? (
                      <Counter
                        to={metric.to}
                        duration={1.6}
                        suffix={metric.suffix}
                        className="font-black"
                      />
                    ) : (
                      metric.text
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Operational improvement cards ──────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {IMPROVEMENTS.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.dimension}
                className="relative rounded-xl p-6 flex flex-col gap-4 overflow-hidden"
                variants={staggerItemCard}
                whileHover={{
                  y: -4,
                  boxShadow: `0 0 48px ${item.accent}10, 0 20px 48px rgba(0,0,0,0.45)`,
                  borderColor: `${item.accent}32`,
                  transition: { type: "spring", stiffness: 400, damping: 26 },
                }}
                style={{
                  background: "linear-gradient(145deg, #0E0E14 0%, #0B0B10 100%)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}
              >
                {/* Left accent stripe */}
                <div
                  className="absolute left-0 top-5 bottom-5 w-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${item.accent} 0%, ${item.accent}40 100%)`,
                    boxShadow: `0 0 8px ${item.accent}55`,
                  }}
                />

                {/* Icon + label */}
                <div className="flex items-center gap-3 pl-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${item.accent}14`,
                      border: `1px solid ${item.accent}2a`,
                    }}
                  >
                    <Icon size={13} style={{ color: item.accent }} />
                  </div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: `${item.accent}80` }}
                  >
                    {item.dimension}
                  </div>
                </div>

                {/* Before / After block */}
                <div className="pl-5 flex flex-col gap-2">
                  {/* Before */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.2)",
                      }}
                    >
                      <div className="w-[7px] h-[1.5px] rounded-full bg-red-400/70" />
                    </div>
                    <p className="text-xs text-co-text-muted leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 pl-[2px]">
                    <ArrowRight
                      size={9}
                      style={{ color: `${item.accent}55` }}
                    />
                  </div>

                  {/* After */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: `${item.accent}12`,
                        border: `1px solid ${item.accent}2a`,
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: item.accent,
                          boxShadow: `0 0 5px ${item.accent}`,
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-co-text leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Authority microcopy strip */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 1.0 }}
        >
          {[
            { text: "Infrastructure designed for scale", c: "#4F7FFF" },
            { text: "Systems built to compound over time", c: "#9B72FF" },
            { text: "Designed to convert local demand", c: "#4F7FFF" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: item.c + "70" }}
              />
              <span className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
