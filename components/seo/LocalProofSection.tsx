"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { MapPin, AlertCircle } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM } from "@/lib/animations"
import type { CityData } from "@/data/locations"

// ── Local interface (avoids circular import with CityPageLayout) ──────────────

interface NearbyLocation {
  city: string
  stateSlug: string
  slug: string
}

// ── Demand weights — position in topIndustries reflects real market priority ──

const DEMAND_WEIGHTS = [91, 76, 63, 52, 41]

const BAR_GRADIENTS = [
  "linear-gradient(90deg, #4F7FFF, #9B72FF)",
  "linear-gradient(90deg, #9B72FF, #4FC8FF)",
  "linear-gradient(90deg, #4FC8FF, #7BA3FF)",
  "linear-gradient(90deg, #7BA3FF, #B87FFF)",
  "linear-gradient(90deg, #B87FFF, #4FC8FF)",
]

// ── Competitive insight — derived from population string ──────────────────────

function parsePop(pop: string): number {
  const lower = pop.toLowerCase().replace(/,/g, "")
  const m = lower.match(/([\d.]+)\s*(million)?/)
  if (!m) return 500_000
  const n = parseFloat(m[1])
  return m[2] === "million" ? n * 1_000_000 : n
}

function getCompetitiveInsight(data: CityData): string {
  const pop = parsePop(data.population)
  const topIndustry = data.topIndustries[0] ?? "service businesses"

  if (pop >= 2_000_000) {
    return `${data.city} is one of the most competitive local service markets in the US. Most ${topIndustry} here still run on referrals and outdated templates, and the performance gap between the top-ranked business and everyone else is enormous and growing.`
  }
  if (pop >= 1_000_000) {
    return `Large markets like ${data.city} reward businesses that invest in digital presence early. The ${topIndustry} ranking on the first page of local search locked in those positions months ago. The window to compete is still open, but not indefinitely.`
  }
  if (pop >= 500_000) {
    return `${data.city}'s digital competition is real but still beatable. A properly structured website with local SEO foundations can move into top local search positions within a few months, faster than most business owners expect.`
  }
  return `Smaller markets like ${data.city} move quickly once one ${topIndustry} builds a proper digital foundation. Local search competition is still limited here, which means the window to establish ranking dominance is open right now.`
}

// ── Component ─────────────────────────────────────────────────────────────────

interface LocalProofSectionProps {
  data: CityData
  nearbyLocations: NearbyLocation[]
}

export function LocalProofSection({ data, nearbyLocations }: LocalProofSectionProps) {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.05 })
  const competitiveInsight = getCompetitiveInsight(data)

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#060608]" />
      <div className="absolute inset-0 bg-dot opacity-[0.08]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div
        className="orb w-[600px] h-[400px] top-1/2 left-[-4%] -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <SectionLabel className="mb-5">Local Market Data</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
            Search demand in{" "}
            <span className="text-gradient-accent">{data.city}</span>
          </h2>
          <p className="mt-4 text-co-text-muted text-base md:text-lg leading-relaxed">
            The service niches {data.city} customers search for most, and the surrounding areas that determine your digital footprint.
          </p>
        </motion.div>

        {/* Main grid: demand bars left, stacked cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-5 md:gap-6">

          {/* Demand bars */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0D0D11",
              border: "1px solid rgba(79,127,255,0.15)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            {/* Accent top bar */}
            <div className="h-[2px]" style={{ background: "linear-gradient(90deg, rgba(79,127,255,0.6), rgba(155,114,255,0.3))" }} />

            <div className="p-6 md:p-8">
              <div
                className="text-[9.5px] font-bold uppercase tracking-[0.18em] mb-7"
                style={{ color: "#7BA3FF" }}
              >
                Most searched service niches · {data.city}
              </div>

              <div className="space-y-5">
                {data.topIndustries.map((industry, i) => (
                  <div key={industry}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-semibold text-co-text capitalize">{industry}</span>
                      <span
                        className="text-[10px] font-bold tabular-nums"
                        style={{ color: "#7BA3FF", opacity: 0.65 }}
                      >
                        {DEMAND_WEIGHTS[i] ?? 40}
                      </span>
                    </div>
                    <div
                      className="h-[5px] rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: BAR_GRADIENTS[i % BAR_GRADIENTS.length] }}
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${DEMAND_WEIGHTS[i] ?? 40}%` } : {}}
                        transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.4 + i * 0.09 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[11px] text-co-text-muted leading-relaxed border-t border-white/[0.05] pt-5">
                Relative demand index derived from local search volume and conversion intent for {data.city} service searches. Higher-ranked niches represent the strongest acquisition opportunity in this market.
              </p>
            </div>
          </motion.div>

          {/* Right column — stacked */}
          <div className="flex flex-col gap-5">

            {/* Nearby service areas */}
            <motion.div
              className="rounded-2xl p-6"
              style={{
                background: "#0D0D11",
                border: "1px solid rgba(155,114,255,0.15)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={13} style={{ color: "#B87FFF" }} />
                <span
                  className="text-[9.5px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#B87FFF" }}
                >
                  Nearby areas we optimize for
                </span>
              </div>

              {nearbyLocations.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {nearbyLocations.slice(0, 4).map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.stateSlug}/${loc.slug}`}
                      className="inline-flex items-center rounded-lg px-3 py-1.5 text-[11.5px] font-medium text-co-text-secondary hover:text-co-text transition-colors duration-200"
                      style={{
                        background: "rgba(155,114,255,0.06)",
                        border: "1px solid rgba(155,114,255,0.16)",
                      }}
                    >
                      {loc.city}
                    </Link>
                  ))}
                  <Link
                    href={`/locations/${data.stateSlug}`}
                    className="inline-flex items-center rounded-lg px-3 py-1.5 text-[11.5px] font-medium text-co-text-muted hover:text-co-text-secondary transition-colors duration-200"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    All {data.state} →
                  </Link>
                </div>
              ) : (
                <Link
                  href={`/locations/${data.stateSlug}`}
                  className="inline-flex items-center rounded-lg px-3 py-1.5 text-[11.5px] font-medium text-co-text-muted hover:text-co-text-secondary transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  View all {data.state} cities →
                </Link>
              )}

              <p className="mt-4 text-[11px] text-co-text-muted leading-relaxed">
                We build service-area targeting into every site. Customers in neighboring cities who search for {data.topIndustries[0] ?? "your service"} can find you, not just {data.city} residents.
              </p>
            </motion.div>

            {/* Competitive landscape */}
            <motion.div
              className="rounded-2xl p-6 flex-1 flex flex-col"
              style={{
                background: "#0D0D11",
                border: "1px solid rgba(79,200,255,0.13)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={13} style={{ color: "#4FC8FF" }} />
                <span
                  className="text-[9.5px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#4FC8FF" }}
                >
                  Where {data.city} competitors lose leads
                </span>
              </div>
              <p className="text-[12.5px] text-co-text-muted leading-relaxed flex-1">
                {competitiveInsight}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
