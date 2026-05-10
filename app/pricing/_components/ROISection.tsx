"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM, headerBlock, headerH2, headerLabel, headerP } from "@/lib/animations"

const COMPARISONS = [
  {
    dimension: "Lead capture after hours",
    without: "Missed calls go nowhere",
    with: "Automated text-back within 30 seconds",
  },
  {
    dimension: "Follow-up speed",
    without: "Manual calls when you get the chance",
    with: "Instant SMS and email sequence triggered automatically",
  },
  {
    dimension: "Booking process",
    without: "Back-and-forth phone calls to schedule",
    with: "Online booking available 24/7, deposits collected automatically",
  },
  {
    dimension: "Local search visibility",
    without: "Not ranking for your service keywords",
    with: "Monthly SEO optimization targeting your market and service area",
  },
  {
    dimension: "Online reviews",
    without: "Waiting and hoping clients leave reviews",
    with: "Automated review requests sent after every job",
  },
  {
    dimension: "Business visibility",
    without: "Invisible to anyone who did not get a referral",
    with: "Showing up in local search results for your target keywords",
  },
]

const ROI_POINTS = [
  {
    label: "One new recurring client per month",
    value: "Covers the Growth plan within the first job",
    accent: "#9B72FF",
  },
  {
    label: "Automated follow-up system",
    value: "Reaches leads you would have lost to voicemail",
    accent: "#4F7FFF",
  },
  {
    label: "Local SEO compounding over time",
    value: "Traffic and rankings grow month over month",
    accent: "#06B6D4",
  },
]

export default function ROISection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
      {/* Separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Ambient */}
      <div
        className="orb w-[900px] h-[600px] top-1/2 -left-40 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-18"
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center mb-5" variants={headerLabel}>
            <SectionLabel>The Math</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            variants={headerH2}
          >
            The cost of doing nothing{" "}
            <span className="text-gradient-accent">is not zero.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={headerP}
          >
            Every month without a growth system is a month of leads going to
            voicemail, competitors ranking above you, and revenue that should
            be yours going elsewhere.
          </motion.p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="rounded-2xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.28 }}
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-[1fr_1fr_1fr] gap-0"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="px-5 py-4 text-[10px] font-bold uppercase tracking-widest text-co-text-muted"
              style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}
            >
              Dimension
            </div>
            <div
              className="px-5 py-4 text-[10px] font-bold uppercase tracking-widest"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(239,68,68,0.7)",
              }}
            >
              Without systems
            </div>
            <div
              className="px-5 py-4 text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "rgba(79,127,255,0.8)" }}
            >
              With ClevOps
            </div>
          </div>

          {/* Rows */}
          {COMPARISONS.map((row, i) => (
            <motion.div
              key={row.dimension}
              className="grid grid-cols-[1fr_1fr_1fr] gap-0 group"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.34 + i * 0.06, duration: 0.55, ease: EASE_PREMIUM }}
              style={{
                borderBottom:
                  i < COMPARISONS.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                transition: "background 0.2s ease",
              }}
              whileHover={{
                background: "rgba(79,127,255,0.04)",
              }}
            >
              <div
                className="px-5 py-4 text-xs font-semibold text-co-text-secondary"
                style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
              >
                {row.dimension}
              </div>
              <div
                className="px-5 py-4 flex items-start gap-2"
                style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
              >
                <X
                  size={12}
                  className="text-red-400/70 shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-xs text-co-text-muted leading-relaxed">
                  {row.without}
                </span>
              </div>
              <div className="px-5 py-4 flex items-start gap-2">
                <Check
                  size={12}
                  style={{ color: "#4F7FFF" }}
                  className="shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-xs text-co-text-secondary leading-relaxed">
                  {row.with}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ROI points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {ROI_POINTS.map((point, i) => (
            <motion.div
              key={point.label}
              className="rounded-xl p-5 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.65, ease: EASE_PREMIUM }}
              whileHover={{
                y: -3,
                boxShadow: `0 0 32px ${point.accent}14, 0 12px 32px rgba(0,0,0,0.35)`,
                transition: { type: "spring", stiffness: 400, damping: 28 },
              }}
              style={{
                background: `linear-gradient(145deg, ${point.accent}0A 0%, ${point.accent}05 100%)`,
                border: `1px solid ${point.accent}22`,
                boxShadow: `0 4px 16px rgba(0,0,0,0.25)`,
              }}
            >
              <div
                className="w-6 h-[2px] rounded-full mb-1"
                style={{
                  background: `linear-gradient(90deg, ${point.accent}, ${point.accent}60)`,
                  boxShadow: `0 0 8px ${point.accent}50`,
                }}
              />
              <p className="text-xs font-bold text-co-text-secondary uppercase tracking-wider">
                {point.label}
              </p>
              <p className="text-sm font-semibold text-co-text leading-snug">
                {point.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.88 }}
        >
          <p className="text-co-text-muted text-sm md:text-base mb-6 max-w-xl mx-auto">
            Ready to see what this looks like for your specific business and market?
          </p>
          <Button
            href="/contact"
            size="lg"
            className="shadow-glow-md"
          >
            Book a Free Audit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
