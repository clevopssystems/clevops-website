"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowRight, Globe, Search, ShieldCheck, Smartphone, MapPin, Star, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav"
import { LocalFAQ, type FAQItem } from "@/components/seo/LocalFAQ"
import { InternalLinks, type InternalLink } from "@/components/seo/InternalLinks"
import { SchemaMarkup } from "@/components/seo/SchemaMarkup"
import { LocalSearchFunnelSection } from "@/components/seo/LocalSearchFunnelSection"
import {
  EASE_PREMIUM,
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerGrid,
  staggerItemCard,
  springHoverCard,
} from "@/lib/animations"
import type { StateData } from "@/data/states"
import type { CityData } from "@/data/locations"

const cityAccents = [
  { accentColor: "rgba(79,127,255,0.15)", borderAccent: "rgba(79,127,255,0.3)", spotlightColor: "rgba(79,127,255,0.12)" },
  { accentColor: "rgba(155,114,255,0.15)", borderAccent: "rgba(155,114,255,0.3)", spotlightColor: "rgba(155,114,255,0.12)" },
  { accentColor: "rgba(79,200,255,0.12)", borderAccent: "rgba(79,200,255,0.25)", spotlightColor: "rgba(79,200,255,0.10)" },
  { accentColor: "rgba(79,127,255,0.12)", borderAccent: "rgba(79,127,255,0.22)", spotlightColor: "rgba(79,127,255,0.10)" },
  { accentColor: "rgba(155,114,255,0.12)", borderAccent: "rgba(155,114,255,0.22)", spotlightColor: "rgba(155,114,255,0.10)" },
]

// ── State Hero Dashboard visual ───────────────────────────────────────────────

function StateHeroDashboard({ inView, data, citiesCount }: { inView: boolean; data: StateData; citiesCount: number }) {
  const monthlySearches = `${Math.round(citiesCount * 5.2)}K+/mo`
  const industryBars = [88, 74, 68, 58, 44]

  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* === Main State Coverage Card === */}
      <motion.div
        className="absolute left-6 right-6 top-14 bottom-12 rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: "rgba(9,9,14,0.88)",
          border: "1px solid rgba(79,127,255,0.18)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(79,127,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.35 }}
      >
        <div className="h-[2px] flex-shrink-0" style={{ background: "linear-gradient(90deg, #4F7FFF, #9B72FF)" }} />

        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-white/[0.05]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-co-text-muted mb-1">
              State Coverage · {data.name}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[1.55rem] font-black tracking-tighter text-co-text">{monthlySearches}</span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg" style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)" }}>
                <TrendingUp size={9} style={{ color: "#4ADE80" }} />
                <span className="text-[10px] font-bold" style={{ color: "#4ADE80" }}>+28%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 mt-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/35" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/35" />
            <div className="w-2 h-2 rounded-full bg-green-500/35" />
          </div>
        </div>

        {/* Industry demand bars */}
        <div className="px-5 pt-4 pb-2 flex-1 min-h-0">
          <div className="text-[9px] uppercase tracking-[0.12em] font-medium text-co-text-muted mb-3">Top Industry Demand</div>
          <div className="flex items-end gap-2 h-[68px]">
            {data.topIndustries.slice(0, 5).map((industry, i) => (
              <div key={industry} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${industryBars[i]}%`,
                    background: i === 0
                      ? "linear-gradient(180deg, #4F7FFF, rgba(79,127,255,0.35))"
                      : i === 1
                        ? "linear-gradient(180deg, #9B72FF, rgba(155,114,255,0.25))"
                        : `rgba(79,127,255,${0.22 - i * 0.03})`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-1.5">
            {data.topIndustries.slice(0, 5).map((industry) => (
              <div key={industry} className="flex-1 text-center text-co-text-muted capitalize truncate" style={{ fontSize: "7px" }}>
                {industry.split(" ")[0]}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Cities Active", value: String(citiesCount), color: "#7BA3FF" },
            { label: "Mobile Traffic", value: "73%", color: "#B87FFF" },
            { label: "Market", value: data.abbreviation, color: "#4FC8FF" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <div className="font-black tracking-tighter leading-none" style={{ color: m.color, fontSize: "1.05rem" }}>
                {m.value}
              </div>
              <div className="text-[8px] uppercase tracking-[0.1em] font-medium text-co-text-muted leading-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* === Lead Notification (top-right, floating) === */}
      <motion.div
        className="absolute top-1 right-0 z-10 w-[186px]"
        initial={{ opacity: 0, y: -14, x: 8 }}
        animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.65 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(8,10,16,0.95)",
            border: "1px solid rgba(74,222,128,0.24)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 18px rgba(74,222,128,0.05)",
          }}
        >
          <div className="px-3.5 py-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-[9px] font-bold tracking-[0.14em] uppercase" style={{ color: "#4ADE80" }}>New Lead</span>
              <span className="text-[8.5px] text-co-text-muted ml-auto">2m ago</span>
            </div>
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">{data.abbreviation} Cleaning Co.</p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">Submitted form · Website Design</p>
          </div>
        </motion.div>
      </motion.div>

      {/* === Search Rankings (bottom-left, floating) === */}
      <motion.div
        className="absolute bottom-1 left-0 z-10 w-[204px]"
        initial={{ opacity: 0, y: 14, x: -8 }}
        animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.82 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(8,10,16,0.95)",
            border: "1px solid rgba(79,127,255,0.22)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 18px rgba(79,127,255,0.06)",
          }}
        >
          <div className="px-3.5 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">Search Rankings</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg" style={{ background: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.2)" }}>
                <TrendingUp size={8} style={{ color: "#7BA3FF" }} />
                <span className="text-[8px] font-bold" style={{ color: "#7BA3FF" }}>Rising</span>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-7 mb-2">
              {[22, 32, 28, 44, 52, 62, 73, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[2px]"
                  style={{
                    height: `${h}%`,
                    background: i === 7 ? "linear-gradient(180deg, #4F7FFF, #9B72FF)" : `rgba(79,127,255,${0.12 + i * 0.035})`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8.5px] text-co-text-muted">8-week trend</span>
              <span className="text-[11.5px] font-black tracking-tighter" style={{ color: "#7BA3FF" }}>Rank #3</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* === Cities Covered Badge (mid-right, floating) === */}
      <motion.div
        className="absolute z-10 right-1"
        style={{ top: "51%" }}
        initial={{ opacity: 0, scale: 0.8, x: 10 }}
        animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="rounded-xl px-3 py-2"
          style={{
            background: "rgba(155,114,255,0.1)",
            border: "1px solid rgba(155,114,255,0.28)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(155,114,255,0.12)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Zap size={10} style={{ color: "#B87FFF" }} />
            <span className="text-[10.5px] font-bold whitespace-nowrap" style={{ color: "#B87FFF" }}>{citiesCount} Cities Covered</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

interface StatePageLayoutProps {
  data: StateData
  cities: CityData[]
}

export function StatePageLayout({ data, cities }: StatePageLayoutProps) {
  const heroRef = useRef(null)
  const citiesRef = useRef(null)
  const industriesRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" })
  const citiesInView = useInView(citiesRef, { once: true, amount: 0.05 })
  const industriesInView = useInView(industriesRef, { once: true, amount: 0.05 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.25 })

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: data.name },
  ]

  const serviceLinks: InternalLink[] = cities.map((city) => ({
    label: city.city,
    href: `/locations/${data.slug}/${city.slug}`,
  }))

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

          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-12 xl:gap-16 items-center">
            <div>
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
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-co-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-co-accent" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-co-text-secondary">
                {data.abbreviation} — {data.name}
              </span>
            </motion.div>

            {/* H1 — line-by-line clip reveal */}
            <h1 className="font-bold tracking-tighter leading-[1.08] mb-7" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
              {[
                { text: "Website Design for", delay: 0.15 },
                { text: "Local Businesses", delay: 0.27, accent: true },
                { text: `in ${data.name}`, delay: 0.39 },
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
              transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.55 }}
            >
              {data.marketAngle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.7 }}
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
                  Get Your Free Demo
                </Button>
              </div>
              <Button href="/website-design" size="lg" variant="outline">
                See Our Services
              </Button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.84 }}
            >
              {[
                { value: String(cities.length), label: "Markets" },
                { value: "From $999", label: "One-time build" },
                { value: "14d", label: "Avg. launch" },
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
            <StateHeroDashboard inView={heroInView} data={data} citiesCount={cities.length} />
          </div>
        </div>
      </section>

      {/* ── Cities grid ───────────────────────────────────────────────────── */}
      <section ref={citiesRef} className="relative py-16 md:py-24 overflow-hidden bg-co-surface">
        <div className="absolute inset-0 bg-grid-sm opacity-[0.18]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            animate={citiesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10 md:mb-14"
          >
            <div>
              <motion.div variants={headerLabel} className="mb-4">
                <SectionLabel>Cities We Serve</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                {data.name} service business{" "}
                <span className="text-gradient-accent">markets</span>
              </motion.h2>
            </div>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              We build conversion-focused websites for service businesses across {data.name}. Select your city to see local market context and what we build for businesses in your area.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            animate={citiesInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
          >
            {cities.map((city, i) => {
              const accent = cityAccents[i % cityAccents.length]
              return (
                <motion.div key={city.slug} variants={staggerItemCard} whileHover={springHoverCard}>
                  <Link href={`/locations/${data.slug}/${city.slug}`} className="block h-full">
                    <SpotlightCard
                      spotlightColor={accent.spotlightColor}
                      className="h-full rounded-2xl border border-co-border bg-co-card transition-colors duration-300 hover:border-co-border-hover hover:shadow-card-hover"
                    >
                      <div className="relative h-full flex items-center justify-between p-5">
                        <div>
                          <p className="font-semibold text-co-text text-sm mb-1">{city.city}</p>
                          <p className="text-xs text-co-text-muted">Pop. {city.population}</p>
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

      {/* ── Industries section ────────────────────────────────────────────── */}
      <section ref={industriesRef} className="relative py-16 md:py-24 overflow-hidden bg-co-bg">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div
          className="orb w-[500px] h-[500px] top-1/2 right-[-8%] -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(79,127,255,0.04) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            className="max-w-2xl mb-12"
          >
            <motion.div variants={headerLabel} className="mb-5">
              <SectionLabel>Top Industries</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5">
              Top service niches in{" "}
              <span className="text-gradient-accent">{data.name}</span>
            </motion.h2>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              These are the service business categories with the strongest search volume and conversion opportunity across {data.name} markets.
            </motion.p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-10">
            {data.topIndustries.map((industry, i) => (
              <motion.span
                key={industry}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-co-text-secondary capitalize"
                style={{
                  background: "rgba(79,127,255,0.05)",
                  border: "1px solid rgba(79,127,255,0.15)",
                }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={industriesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, ease: EASE_PREMIUM, delay: 0.05 + i * 0.07 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-co-accent/50 shrink-0" />
                {industry}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.3 }}
          >
            <Button href="/website-design" variant="primary" size="md">
              See Industry-Specific Websites
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── State Local SEO section ───────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-co-bg">
        <div className="absolute inset-0 bg-dot opacity-[0.06]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div
          className="orb w-[600px] h-[400px] top-1/2 right-[-5%] -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14"
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[11px] font-semibold tracking-widest uppercase"
                style={{ background: "rgba(79,127,255,0.07)", border: "1px solid rgba(79,127,255,0.18)", color: "#7BA3FF" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              >
                Local SEO Strategy
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                How we rank {data.name}{" "}
                <span className="text-gradient-accent">service businesses</span>
              </h2>
            </div>
            <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Every site we build is structured for local search visibility from day one — not bolted on after. {data.name}&apos;s top markets are competitive. We build the infrastructure to capture that demand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { Icon: Globe,       title: "City Landing Pages",    body: `Dedicated pages for every major ${data.name} market, built to rank for high-intent local searches specific to your city and niche.` },
              { Icon: Search,      title: "Service-Area Keywords", body: "Every page targets specific service + city combinations your customers actually search — not generic terms that bring in unqualified traffic." },
              { Icon: ShieldCheck, title: "GBP Alignment",         body: "Your website and Google Business Profile reinforce each other across all your service areas — stronger map pack rankings, more calls." },
              { Icon: Star,        title: "Review Trust Signals",  body: "Reviews and social proof are built into the site structure so new visitors see your credibility before they decide whether to contact you." },
              { Icon: Smartphone,  title: "Mobile-First Speed",    body: "Built for Core Web Vitals and sub-2s mobile load across all devices — the performance factors that determine who ranks and who doesn't." },
              { Icon: MapPin,      title: "Multi-City Coverage",   body: `Strategic internal linking across ${data.name} city pages builds topical authority and expands search visibility across the full state.` },
            ] as const).map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.075)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.55, ease: EASE_PREMIUM, delay: i * 0.09 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.18)" }}
                >
                  <item.Icon size={16} style={{ color: "#7BA3FF" }} />
                </div>
                <p className="font-semibold text-co-text text-sm leading-snug">{item.title}</p>
                <p className="text-[12.5px] text-co-text-muted leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Search Funnel section ───────────────────────────────────── */}
      <LocalSearchFunnelSection state={data.name} topIndustries={data.topIndustries} />

      {/* ── State FAQ section ─────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-co-surface">
        <div className="absolute inset-0 bg-grid-sm opacity-[0.15]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          >
            <LocalFAQ
              title={`Common questions about service business websites in ${data.name}`}
              items={[
                {
                  question: `How much does a website cost for a ${data.name} service business?`,
                  answer: `ClevOps websites typically range from $999–$1,999 depending on the number of pages, integrations, automation, and SEO structure required. Most ${data.name} service businesses also choose our $300/month care plan or $600/month growth system for ongoing optimization and lead generation. For businesses generating consistent revenue, the build cost is typically recovered within one or two new clients.`,
                },
                {
                  question: `How long does it take to launch a website in ${data.name}?`,
                  answer: `14-day average from kickoff to live site. We run design, SEO setup, and copy in parallel so nothing waits on anything else. ${data.name} clients are often surprised at how fast the process moves.`,
                },
                {
                  question: `Do you build websites for all cities in ${data.name}?`,
                  answer: `We have dedicated pages and local market expertise for ${cities.slice(0, 3).map((c) => c.city).join(", ")} and more. If your city isn't listed, contact us — we serve businesses across the full state of ${data.name}.`,
                },
                {
                  question: `Can ClevOps help ${data.name} service businesses rank on Google?`,
                  answer: `Yes. Every site we build includes local SEO foundations: city-specific landing pages, service-area keyword structure, GBP alignment, and technical SEO. ${data.name}'s top markets are competitive — we build for rankings, not just looks.`,
                },
                {
                  question: `What types of service businesses do you work with in ${data.name}?`,
                  answer: `We build websites for ${data.topIndustries.slice(0, 3).join(", ")}, and other local service businesses across ${data.name}. If you run a local service business and your current site isn't generating consistent leads, we're the right fit.`,
                },
              ] satisfies FAQItem[]}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Internal links ────────────────────────────────────────────────── */}
      <section className="relative py-7 overflow-hidden">
        <div className="absolute inset-0 bg-co-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <InternalLinks title={`${data.name} Cities`} links={serviceLinks} />
        </div>
      </section>

      {/* ── CTA section ───────────────────────────────────────────────────── */}
      <section ref={ctaRef} className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
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
            Grow your {data.name} service business online
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#A0A8BC" }}
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.22 }}
          >
            We&apos;ll build a live demo of your new website — no templates, no filler — so you can see exactly what it looks like before committing to anything.
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
            <Button href="/locations" size="lg" variant="outline">All Locations</Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-6 border-t border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["No upfront payment", "Response within 24 hours", `${cities.length} ${cities.length === 1 ? "city" : "cities"} in ${data.abbreviation}`].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-co-accent/40" />
                <span className="text-[11px] font-medium text-co-text-muted">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JSON-LD Schema ─────────────────────────────────────────────────── */}
      <SchemaMarkup
        type="Service"
        name={`Website Design for Service Businesses in ${data.name}`}
        description={data.marketAngle}
        serviceType="Website Design for Local Service Businesses"
      />
      <SchemaMarkup
        type="BreadcrumbList"
        items={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: data.name },
        ]}
      />
    </main>
  )
}
