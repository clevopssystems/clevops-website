"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import {
  EASE_PREMIUM,
  headerBlock,
  headerH2,
  headerLabel,
  headerP,
  staggerGrid,
  staggerItemCard,
} from "@/lib/animations"

const CASES = [
  {
    type: "Cleaning Company",
    market: "Residential Services",
    situation: "Referral-only growth. No digital presence capturing local search demand.",
    changes: [
      "Local search profile built and actively optimized",
      "Automated review requests after every completed job",
      "Online booking with 24/7 availability embedded",
      "Missed call text-back system active within seconds",
    ],
    outcome: "Lead capture running continuously without manual effort",
    accentColor: "#4F7FFF",
    tag: "Operational",
  },
  {
    type: "HVAC Contractor",
    market: "Emergency Services",
    situation: "After-hours calls missed during peak demand. No automated capture system.",
    changes: [
      "Emergency CTA above fold, mobile-optimized for urgency",
      "After-hours automated text-back triggered instantly",
      "Online scheduling with deposit collection built in",
      "Local SEO targeting emergency service keywords",
    ],
    outcome: "After-hours leads captured, not lost to competitors",
    accentColor: "#9B72FF",
    tag: "Infrastructure",
  },
  {
    type: "Landscaping Business",
    market: "Seasonal Services",
    situation: "Revenue dependent on seasonal word-of-mouth. No compounding growth system.",
    changes: [
      "Monthly local SEO optimization started and sustained",
      "Service area pages targeting every neighborhood served",
      "Online quote request flow reducing friction to inquire",
      "Automated review system generating consistent social proof",
    ],
    outcome: "Search visibility compounding month over month",
    accentColor: "#06B6D4",
    tag: "Growth",
  },
]

export default function CaseStudyPreviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #09090e 0%, #070709 50%, #09090e 100%)",
        }}
      />

      {/* Ambient — left blue */}
      <div
        className="orb w-[700px] h-[600px] top-0 -left-20"
        style={{
          background: "radial-gradient(ellipse, rgba(79,127,255,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Ambient — right teal */}
      <div
        className="orb w-[600px] h-[600px] bottom-0 -right-20"
        style={{
          background: "radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)",
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
            <SectionLabel>Service Intelligence</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            variants={headerH2}
          >
            Purpose-built for{" "}
            <span className="text-gradient-accent">your industry.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            variants={headerP}
          >
            Every service business type has a specific lead problem. The
            infrastructure is configured around it, not built generically.
          </motion.p>
        </motion.div>

        {/* Case cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {CASES.map((c) => (
            <motion.div
              key={c.type}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              variants={staggerItemCard}
              whileHover={{
                y: -6,
                boxShadow: `0 0 60px ${c.accentColor}0E, 0 24px 56px rgba(0,0,0,0.5)`,
                borderColor: `${c.accentColor}35`,
                transition: { type: "spring", stiffness: 360, damping: 24 },
              }}
              style={{
                background: "linear-gradient(155deg, #0f0f16 0%, #0c0c12 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              {/* Top accent line */}
              <div
                className="h-[2px] w-full flex-shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${c.accentColor} 0%, ${c.accentColor}40 60%, transparent 100%)`,
                }}
              />

              <div className="flex flex-col flex-1 p-6 md:p-7 gap-5">

                {/* Business type + tag */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div
                      className="text-[9px] font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: `${c.accentColor}60` }}
                    >
                      {c.market}
                    </div>
                    <div className="font-bold text-co-text text-base leading-snug">
                      {c.type}
                    </div>
                  </div>
                  <div
                    className="px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest shrink-0"
                    style={{
                      background: `${c.accentColor}12`,
                      border: `1px solid ${c.accentColor}28`,
                      color: `${c.accentColor}90`,
                    }}
                  >
                    {c.tag}
                  </div>
                </div>

                {/* Situation */}
                <div
                  className="rounded-lg px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest mb-1.5"
                    style={{ color: "rgba(255,255,255,0.22)" }}
                  >
                    Situation
                  </div>
                  <p className="text-xs text-co-text-muted leading-relaxed">
                    {c.situation}
                  </p>
                </div>

                {/* What changed */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <div
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: `${c.accentColor}60` }}
                  >
                    What the system delivers
                  </div>
                  <ul className="flex flex-col gap-2">
                    {c.changes.map((change, ci) => (
                      <li key={ci} className="flex items-start gap-2.5">
                        <div
                          className="shrink-0 mt-[2px] w-4 h-4 rounded-full flex items-center justify-center"
                          style={{
                            background: `${c.accentColor}12`,
                            border: `1px solid ${c.accentColor}28`,
                          }}
                        >
                          <Check
                            size={7.5}
                            style={{ color: c.accentColor }}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-[11.5px] text-co-text-muted leading-snug">
                          {change}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome strip */}
                <div
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg"
                  style={{
                    background: `${c.accentColor}0A`,
                    border: `1px solid ${c.accentColor}20`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse-slow"
                    style={{ background: c.accentColor }}
                  />
                  <p
                    className="text-[11px] font-semibold leading-snug"
                    style={{ color: `${c.accentColor}90` }}
                  >
                    {c.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing note */}
        <motion.p
          className="text-center text-xs text-co-text-muted mt-8 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.85 }}
        >
          These are infrastructure configurations, not testimonials. Every
          business type gets a system designed for its specific lead acquisition
          challenge.
        </motion.p>
      </div>
    </section>
  )
}
