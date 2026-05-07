"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM } from "@/lib/animations"

interface InsightCard {
  num: string
  title: string
  body: string
  accentColor: string
  accentBorder: string
  accentGlow: string
}

const insightCards: InsightCard[] = [
  {
    num: "01",
    title: "Speed creates trust before anything else",
    body: "Most local customers decide within seconds whether a business feels credible. A slow or visually dated website signals low quality before a single word is read — and most visitors leave without coming back.",
    accentColor: "#7BA3FF",
    accentBorder: "rgba(79,127,255,0.28)",
    accentGlow: "rgba(79,127,255,0.08)",
  },
  {
    num: "02",
    title: "Mobile is where local searches happen",
    body: "The majority of local service searches happen on phones. Businesses that haven't optimized for mobile load speed and navigation lose potential customers before the site even fully renders.",
    accentColor: "#B87FFF",
    accentBorder: "rgba(155,114,255,0.28)",
    accentGlow: "rgba(155,114,255,0.08)",
  },
  {
    num: "03",
    title: "The first clear response wins the job",
    body: "Customers searching for local services typically contact two or three businesses. The one with the clearest contact path — or an automated response system — usually wins, regardless of price.",
    accentColor: "#4FC8FF",
    accentBorder: "rgba(79,200,255,0.28)",
    accentGlow: "rgba(79,200,255,0.08)",
  },
  {
    num: "04",
    title: "Trust signals close before the conversation",
    body: "Reviews, credentials, and visible proof of work do the conversion work before any call happens. Customers who arrive at a site with strong trust signals raise fewer objections and book faster.",
    accentColor: "#7BA3FF",
    accentBorder: "rgba(79,127,255,0.28)",
    accentGlow: "rgba(79,127,255,0.08)",
  },
  {
    num: "05",
    title: "Most visitors decide without scrolling",
    body: "The majority of website visitors form their decision within the first visible screen. If your positioning, contact option, and key proof aren't immediately visible above the fold, most potential customers never see them.",
    accentColor: "#B87FFF",
    accentBorder: "rgba(155,114,255,0.28)",
    accentGlow: "rgba(155,114,255,0.08)",
  },
  {
    num: "06",
    title: "Local search visibility compounds over time",
    body: "Search authority builds incrementally. A properly structured website earns ranking strength month over month — widening the gap between you and local competitors who haven't invested in the foundations.",
    accentColor: "#4FC8FF",
    accentBorder: "rgba(79,200,255,0.28)",
    accentGlow: "rgba(79,200,255,0.08)",
  },
]

interface LocalInsightsSectionProps {
  city: string
}

export function LocalInsightsSection({ city }: LocalInsightsSectionProps) {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.05 })

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-co-surface" />
      <div className="absolute inset-0 bg-grid-sm opacity-[0.18]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div
        className="orb w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(155,114,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-end mb-10 md:mb-12"
        >
          <div>
            <SectionLabel className="mb-5">Conversion Intelligence</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
              What actually drives{" "}
              <span className="text-gradient-accent">local conversions</span>
            </h2>
          </div>
          <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
            Service businesses in {city} don&apos;t lose on price — they lose on the first impression. These are the factors that determine who gets the call and who gets scrolled past.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {insightCards.map((card, i) => (
            <motion.div
              key={card.num}
              className="group relative"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: i * 0.08 }}
            >
              <div
                className="relative h-full rounded-2xl p-6 flex flex-col overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.016)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Accent bar that appears on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${card.accentColor}, transparent 60%)` }}
                />

                {/* Number + divider line */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-[10px] font-black tracking-[0.24em] uppercase shrink-0"
                    style={{ color: card.accentColor }}
                  >
                    {card.num}
                  </span>
                  <div
                    className="flex-1 h-px opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, ${card.accentColor}, transparent)` }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-co-text text-[14.5px] leading-snug mb-3">{card.title}</h3>

                {/* Body */}
                <p className="text-[12.5px] text-co-text-muted leading-relaxed flex-1">{card.body}</p>
              </div>

              {/* Hover glow border overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10"
                style={{
                  border: `1px solid ${card.accentBorder}`,
                  boxShadow: `0 0 28px ${card.accentGlow}`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
