"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import {
  headerBlock,
  headerH2,
  headerLabel,
  headerP,
  staggerGrid,
  staggerItemCard,
} from "@/lib/animations"

const PILLARS = [
  {
    number: "01",
    title: "Cheap websites cost more in the long run.",
    body: "A $500 template looks like what it is. Customers who land on a dated, slow, or generic site make a decision in under 3 seconds. Most leave before you ever have a chance to earn their business. The website that looked like savings becomes the reason you are not growing.",
    accent: "#4F7FFF",
  },
  {
    number: "02",
    title: "Most agencies build it and disappear.",
    body: "A website is not a one-time project. It needs ongoing SEO, updates, performance optimization, and conversion improvements. Agencies that launch and move on leave you with an asset that depreciates every month. No one is watching. No one is improving. You are on your own.",
    accent: "#9B72FF",
  },
  {
    number: "03",
    title: "A beautiful site without systems generates nothing.",
    body: "Design without infrastructure is decoration. What actually generates clients is the combination of fast load times, clear positioning, lead capture, automated follow-up, and local search visibility working together as one system. Visuals alone do not fill your calendar.",
    accent: "#06B6D4",
  },
]

export default function PricingPhilosophy() {
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
            "linear-gradient(180deg, #070709 0%, #09090e 50%, #070709 100%)",
        }}
      />

      {/* Ambient */}
      <div
        className="orb w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center mb-5" variants={headerLabel}>
            <SectionLabel>The Reality</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            variants={headerH2}
          >
            Why most service businesses{" "}
            <span className="text-gradient-accent">leave money on the table.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={headerP}
          >
            The problem is rarely the quality of the work. The problem is
            invisibility online, slow or nonexistent follow-up, and digital
            infrastructure built for a decade ago.
          </motion.p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {PILLARS.map((pillar) => (
            <motion.div key={pillar.number} variants={staggerItemCard}>
              <SpotlightCard
                spotlightColor={`${pillar.accent}18`}
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
                    y: -5,
                    borderColor: `${pillar.accent}30`,
                    boxShadow: `0 0 40px ${pillar.accent}0E, 0 16px 48px rgba(0,0,0,0.4)`,
                    transition: { type: "spring", stiffness: 400, damping: 28 },
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${pillar.accent}40 50%, transparent)`,
                    }}
                  />

                  {/* Number tag */}
                  <div
                    className="text-[10px] font-black tracking-widest uppercase"
                    style={{ color: `${pillar.accent}60` }}
                  >
                    {pillar.number}
                  </div>

                  {/* Accent rule */}
                  <div
                    className="w-8 h-[2px] rounded-full"
                    style={{ background: `${pillar.accent}80` }}
                  />

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-co-text leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Body */}
                  <p className="text-sm text-co-text-muted leading-relaxed">
                    {pillar.body}
                  </p>
                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
