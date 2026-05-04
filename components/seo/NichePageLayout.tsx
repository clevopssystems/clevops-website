"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav"
import { InternalLinks, type InternalLink } from "@/components/seo/InternalLinks"
import {
  EASE_PREMIUM,
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerGrid,
  staggerItemCard,
  staggerList,
  staggerItemRow,
  springHoverCard,
} from "@/lib/animations"
import type { NicheData } from "@/data/niches"
import type { CityData } from "@/data/locations"

const cityAccents = [
  { accentColor: "rgba(79,127,255,0.15)", borderAccent: "rgba(79,127,255,0.3)", spotlightColor: "rgba(79,127,255,0.12)" },
  { accentColor: "rgba(155,114,255,0.15)", borderAccent: "rgba(155,114,255,0.3)", spotlightColor: "rgba(155,114,255,0.12)" },
  { accentColor: "rgba(79,200,255,0.12)", borderAccent: "rgba(79,200,255,0.25)", spotlightColor: "rgba(79,200,255,0.10)" },
  { accentColor: "rgba(79,127,255,0.12)", borderAccent: "rgba(79,127,255,0.22)", spotlightColor: "rgba(79,127,255,0.10)" },
  { accentColor: "rgba(155,114,255,0.12)", borderAccent: "rgba(155,114,255,0.22)", spotlightColor: "rgba(155,114,255,0.10)" },
]

interface NichePageLayoutProps {
  data: NicheData
  featuredCities?: CityData[]
}

export function NichePageLayout({ data, featuredCities = [] }: NichePageLayoutProps) {
  const heroRef = useRef(null)
  const problemRef = useRef(null)
  const buildsRef = useRef(null)
  const citiesRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" })
  const problemInView = useInView(problemRef, { once: true, amount: 0.05 })
  const buildsInView = useInView(buildsRef, { once: true, amount: 0.05 })
  const citiesInView = useInView(citiesRef, { once: true, amount: 0.05 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.25 })

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Website Design", href: "/website-design" },
    { label: data.name },
  ]

  const exploreLinks: InternalLink[] = [
    { label: "All services", href: "/website-design" },
    { label: "Locations", href: "/locations" },
    { label: "Get a demo", href: "/contact" },
  ]

  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-co-bg" />
        <div className="absolute inset-0 bg-dot opacity-[0.15]" />
        <div className="absolute inset-0 bg-grid opacity-[0.22]" />
        <div
          className="orb w-[900px] h-[600px] top-[-15%] left-1/2 -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse 55% 65% at 50% 0%, rgba(79,127,255,0.16) 0%, rgba(79,127,255,0.04) 55%, transparent 75%)" }}
        />
        <div
          className="orb w-[500px] h-[400px] bottom-[-10%] right-[-5%] animate-float-alt"
          style={{ background: "radial-gradient(ellipse, rgba(155,114,255,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          >
            <BreadcrumbNav items={breadcrumbs} className="mb-10" />
          </motion.div>

          <div className="max-w-3xl">
            {/* Eyebrow pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
              style={{
                background: "rgba(255,255,255,0.028)",
                boxShadow: "0 0 0 1px rgba(79,127,255,0.22), inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.05 }}
            >
              <span className="text-base leading-none">{data.icon}</span>
              <span className="text-xs font-semibold tracking-widest uppercase text-co-text-secondary">
                {data.name}
              </span>
            </motion.div>

            {/* H1 — line-by-line clip reveal */}
            <h1 className="font-bold tracking-tighter leading-[1.08] mb-7" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
              {[
                { text: "Website Design", delay: 0.15, accent: true },
                { text: `for ${data.name}`, delay: 0.27 },
              ].map(({ text, delay, accent }) => (
                <div key={text} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%", opacity: 0 }}
                    animate={heroInView ? { y: "0%", opacity: 1 } : {}}
                    transition={{ duration: 0.85, ease: EASE_PREMIUM, delay }}
                    className="block"
                  >
                    {accent ? (
                      <span className="text-gradient-accent">{text}</span>
                    ) : (
                      text
                    )}
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ color: "#A0A8BC" }}
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.45 }}
            >
              {data.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-[4px] rounded-[14px] pointer-events-none"
                  animate={{ opacity: [0, 0.55, 0], scale: [0.96, 1.03, 0.96] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{
                    background: "linear-gradient(135deg, rgba(79,127,255,0.45), rgba(155,114,255,0.35))",
                    filter: "blur(6px)",
                  }}
                />
                <Button href="/contact" size="lg" icon={<ArrowUpRight size={16} />} className="relative shadow-glow-md">
                  Request Your Free Demo
                </Button>
              </div>
              <Button href="/locations" size="lg" variant="outline">
                Find Your City
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.75 }}
            >
              {[
                { value: "$999", label: "One-time build" },
                { value: "14d", label: "Avg. launch" },
                { value: "No", label: "Commitment needed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <span className="text-xl font-black tracking-tighter text-gradient-accent">{stat.value}</span>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-co-text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Problem / challenge section ───────────────────────────────────── */}
      <section ref={problemRef} className="relative py-24 md:py-32 overflow-hidden bg-co-surface">
        <div className="absolute inset-0 bg-dot opacity-[0.08]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={headerBlock}
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
            >
              <motion.div variants={headerLabel} className="mb-5">
                <SectionLabel>The Challenge</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5">
                Why most {data.name.toLowerCase()} websites{" "}
                <span className="text-gradient-accent">don&apos;t convert</span>
              </motion.h2>
              <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed mb-8">
                {data.problemAngle}
              </motion.p>
              <motion.div variants={headerP}>
                <Button href="/contact" variant="primary" size="md">
                  Get Your Free Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Key benefit card */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{ background: "rgba(79,127,255,0.04)", border: "1px solid rgba(79,127,255,0.14)" }}
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={problemInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.15 }}
            >
              <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #4F7FFF 0%, #9B72FF 100%)" }} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(79,127,255,0.10)", border: "1px solid rgba(79,127,255,0.22)" }}
                  >
                    <Zap size={18} style={{ color: "#4F7FFF" }} />
                  </div>
                  <p className="font-semibold text-co-text text-sm">The ClevOps Advantage</p>
                </div>
                <p className="text-co-text-secondary leading-relaxed text-sm">
                  {data.keyBenefit}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we build ─────────────────────────────────────────────────── */}
      <section ref={buildsRef} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
        <div className="absolute inset-0 bg-grid-sm opacity-[0.25]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={headerBlock}
              initial="hidden"
              animate={buildsInView ? "visible" : "hidden"}
            >
              <motion.div variants={headerLabel} className="mb-4">
                <SectionLabel>What Is Included</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5">
                Everything your {data.name.toLowerCase()} website{" "}
                <span className="text-gradient-accent">needs to compete</span>
              </motion.h2>
              <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed mb-8">
                No packages. No upsells. Every {data.name.toLowerCase()} website ships complete — with every system needed to rank, convert, and grow.
              </motion.p>
              <motion.div variants={headerP}>
                <Button href="/contact" variant="primary" size="md" icon={<ArrowUpRight size={15} />}>
                  Get Your Free Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.ul
              variants={staggerList}
              initial="hidden"
              animate={buildsInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {data.whatWeBuild.map((item) => (
                <motion.li key={item} variants={staggerItemRow} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-co-text-secondary leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Featured cities ───────────────────────────────────────────────── */}
      {featuredCities.length > 0 && (
        <section ref={citiesRef} className="relative py-24 md:py-32 overflow-hidden bg-co-surface">
          <div className="absolute inset-0 bg-grid-sm opacity-[0.15]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
            <motion.div
              variants={headerBlock}
              initial="hidden"
              animate={citiesInView ? "visible" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14 md:mb-18"
            >
              <div>
                <motion.div variants={headerLabel} className="mb-4">
                  <SectionLabel>Markets We Serve</SectionLabel>
                </motion.div>
                <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                  {data.name} websites{" "}
                  <span className="text-gradient-accent">across the US</span>
                </motion.h2>
              </div>
              <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
                We build {data.name.toLowerCase()} websites for businesses in every major market. Select your city for local context and pricing.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerGrid}
              initial="hidden"
              animate={citiesInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
            >
              {featuredCities.map((city, i) => {
                const accent = cityAccents[i % cityAccents.length]
                return (
                  <motion.div key={city.slug} variants={staggerItemCard} whileHover={springHoverCard}>
                    <Link href={`/locations/${city.stateSlug}/${city.slug}`} className="block h-full">
                      <SpotlightCard
                        spotlightColor={accent.spotlightColor}
                        className="h-full rounded-2xl border border-co-border bg-co-card transition-colors duration-300 hover:border-co-border-hover hover:shadow-card-hover"
                      >
                        <div className="relative h-full flex items-center justify-between p-5">
                          <div>
                            <p className="font-semibold text-co-text text-sm mb-1">{city.city}</p>
                            <p className="text-xs text-co-text-muted">{city.state}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-co-text-muted shrink-0" />
                        </div>
                      </SpotlightCard>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Internal links ────────────────────────────────────────────────── */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-co-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <InternalLinks title="Explore" links={exploreLinks} />
        </div>
      </section>

      {/* ── CTA section ───────────────────────────────────────────────────── */}
      <section ref={ctaRef} className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-co-surface" />
        <div className="absolute inset-0 bg-grid-sm opacity-30" />
        <div
          className="orb w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.12) 0%, rgba(155,114,255,0.06) 40%, transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
            style={{ background: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.22)", boxShadow: "0 0 40px rgba(79,127,255,0.12)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <ArrowUpRight size={22} style={{ color: "#4F7FFF" }} />
          </motion.div>

          <motion.h2
            className="font-black tracking-tighter leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#F0F0F2" }}
            initial={{ opacity: 0, y: 22 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            See what your {data.name.toLowerCase()} website could look like
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#A0A8BC" }}
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.22 }}
          >
            We&apos;ll build a live demo of your new website — no templates, no filler — so you can see exactly what it looks like before you commit to anything.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.34 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-[5px] rounded-[16px] pointer-events-none"
                animate={{ opacity: [0, 0.55, 0], scale: [0.96, 1.04, 0.96] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                style={{ background: "linear-gradient(135deg, rgba(79,127,255,0.4), rgba(155,114,255,0.3))", filter: "blur(6px)" }}
              />
              <Button href="/contact" size="lg" icon={<ArrowUpRight size={16} />} className="relative shadow-glow-md min-w-[240px]">
                Request Free Demo
              </Button>
            </div>
            <Button href="/website-design" size="lg" variant="outline">View All Services</Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["No upfront payment required", "Response within 24 hours", "14-day delivery"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-co-accent/50" />
                <span className="text-xs font-medium text-co-text-muted">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
