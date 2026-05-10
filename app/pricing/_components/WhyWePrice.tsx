"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Target, TrendingUp, Layers } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import {
  EASE_PREMIUM,
  headerBlock,
  headerH2,
  headerLabel,
  headerP,
  staggerGrid,
  staggerItemCard,
} from "@/lib/animations"

const REASONS = [
  {
    icon: Users,
    title: "Fewer clients. More attention.",
    body: "We intentionally limit the number of businesses we work with at any time. More clients would mean more revenue for us and worse results for you. That is not a trade we are willing to make.",
    accent: "#4F7FFF",
  },
  {
    icon: Target,
    title: "We are invested in your outcome, not your invoice.",
    body: "Our pricing is not a transaction. It reflects the real cost of building infrastructure that works long-term. Agencies that charge less are either cutting corners, using templates, or moving on after launch.",
    accent: "#9B72FF",
  },
  {
    icon: TrendingUp,
    title: "Systems require ongoing investment to work.",
    body: "SEO compounds. Automation improves. Conversion rates optimize. The value of the Growth plan at month 12 is dramatically higher than at month 1. That compounding effect requires sustained attention, not a one-time project.",
    accent: "#06B6D4",
  },
  {
    icon: Layers,
    title: "Quality requires the right foundation.",
    body: "The website, the care plan, the growth system. Each layer builds on the last. Skipping layers creates fragile infrastructure that looks good and performs poorly. We build the whole thing correctly, or not at all.",
    accent: "#F59E0B",
  },
]

export default function WhyWePrice() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #070709 0%, #080810 60%, #070709 100%)",
        }}
      />

      {/* Subtle orb */}
      <div
        className="orb w-[700px] h-[500px] bottom-0 right-0"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="mb-5" variants={headerLabel}>
            <SectionLabel>Our Approach</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            variants={headerH2}
          >
            Why we price the way{" "}
            <span className="text-gradient-accent">we do.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
            variants={headerP}
          >
            Transparent pricing comes from a simple principle: charge what it
            actually costs to do the work correctly. Nothing more. Nothing
            negotiated down to the point where the results disappear.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {REASONS.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div key={reason.title} variants={staggerItemCard}>
                <SpotlightCard
                  spotlightColor={`${reason.accent}16`}
                  className="relative rounded-2xl h-full"
                >
                  <motion.div
                    className="relative rounded-2xl p-7 md:p-8 flex flex-col gap-4 h-full"
                    style={{
                      background: "linear-gradient(145deg, #0E0E13 0%, #0B0B10 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    }}
                    whileHover={{
                      y: -4,
                      borderColor: `${reason.accent}30`,
                      boxShadow: `0 0 40px ${reason.accent}0C, 0 16px 48px rgba(0,0,0,0.4)`,
                      transition: { type: "spring", stiffness: 380, damping: 26 },
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${reason.accent}35 50%, transparent)`,
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${reason.accent}14`,
                        border: `1px solid ${reason.accent}28`,
                        boxShadow: `0 0 16px ${reason.accent}20`,
                      }}
                    >
                      <Icon size={16} style={{ color: reason.accent }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-co-text leading-snug">
                      {reason.title}
                    </h3>

                    {/* Body */}
                    <p className="text-sm text-co-text-muted leading-relaxed">
                      {reason.body}
                    </p>
                  </motion.div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing statement — premium glass treatment */}
        <motion.div
          className="relative mt-12 md:mt-14 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.6 }}
        >
          {/* Top shine */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(79,127,255,0.45) 50%, transparent)",
            }}
          />

          <div
            className="p-7 md:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(79,127,255,0.07) 0%, rgba(155,114,255,0.05) 100%)",
              border: "1px solid rgba(79,127,255,0.18)",
              boxShadow:
                "0 0 48px rgba(79,127,255,0.06), 0 16px 48px rgba(0,0,0,0.25)",
            }}
          >
            <p
              className="text-lg md:text-xl font-semibold text-co-text leading-relaxed"
              style={{ maxWidth: "680px" }}
            >
              The businesses growing online today are not getting lucky. They are
              investing in infrastructure. The ones still waiting for referrals are
              leaving revenue on the table every single month.
            </p>
            <p className="text-sm text-co-text-muted mt-3">
              That is what this pricing is built around: the real cost of making
              growth happen, not the lowest number that still sounds professional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
