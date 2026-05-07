"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  Search,
  Smartphone,
  MapPin,
  Star,
} from "lucide-react"
import { SchemaMarkup } from "@/components/seo/SchemaMarkup"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav"
import { LocalFAQ, type FAQItem } from "@/components/seo/LocalFAQ"
import { InternalLinks, type InternalLink } from "@/components/seo/InternalLinks"
import { LocalInsightsSection } from "@/components/seo/LocalInsightsSection"
import { LocalSearchFunnelSection } from "@/components/seo/LocalSearchFunnelSection"
import { LocalProofSection } from "@/components/seo/LocalProofSection"
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
import type { CityData } from "@/data/locations"

// ── City skyline SVG ─────────────────────────────────────────────────────────

function CitySkyline() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 right-0 w-full pointer-events-none select-none"
      height="180"
      viewBox="0 0 1440 180"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Back row — lightest, tallest towers */}
      <path
        d="M0 180V155H40V130H55V110H70V90H90V110H110V70H130V50H155V70H170V90H185V60H210V30H240V60H260V40H290V20H320V40H350V60H370V40H400V20H430V60H460V80H480V50H510V30H545V50H575V70H600V50H630V30H660V60H690V80H720V50H760V20H800V50H830V30H870V50H900V70H930V50H960V30H990V60H1020V80H1050V60H1080V80H1110V60H1140V90H1165V70H1195V90H1220V110H1245V90H1270V110H1295V130H1320V150H1350V160H1380V165H1440V180Z"
        fill="rgba(255,255,255,0.018)"
      />
      {/* Mid row — medium buildings */}
      <path
        d="M0 180V165H25V155H50V145H75V135H95V120H120V130H145V115H165V105H190V120H215V110H235V100H260V115H285V125H310V110H335V120H360V130H385V115H405V105H430V120H455V130H475V115H500V105H530V115H555V125H580V115H610V125H635V135H660V125H685V115H710V125H740V135H765V125H790V115H820V125H845V115H875V125H905V135H930V125H955V115H985V125H1010V135H1040V125H1070V115H1100V130H1125V140H1150V130H1175V140H1200V150H1230V155H1260V160H1290V165H1320V170H1370V175H1440V180Z"
        fill="rgba(255,255,255,0.025)"
      />
      {/* Front row — foreground buildings, darkest */}
      <path
        d="M0 180V172H30V168H60V162H90V158H115V150H140V158H165V165H190V158H215V162H240V170H270V172H300V168H330V160H355V168H385V172H415V168H445V162H470V168H500V175H535V172H565V168H595V162H625V168H655V172H685V168H715V162H745V168H775V172H810V168H845V162H875V168H905V172H935V168H965V162H995V168H1025V172H1055V168H1085V162H1115V170H1145V173H1175V170H1205V165H1235V170H1265V175H1295V173H1325V170H1360V175H1400V178H1440V180Z"
        fill="rgba(255,255,255,0.032)"
      />
      {/* Antenna dots on tallest buildings */}
      <line x1="240" y1="20" x2="240" y2="8" stroke="rgba(79,127,255,0.3)" strokeWidth="1.5" />
      <circle cx="240" cy="7" r="2" fill="rgba(79,127,255,0.5)" />
      <line x1="545" y1="30" x2="545" y2="18" stroke="rgba(155,114,255,0.3)" strokeWidth="1.5" />
      <circle cx="545" cy="17" r="2" fill="rgba(155,114,255,0.5)" />
      <line x1="800" y1="20" x2="800" y2="8" stroke="rgba(79,127,255,0.3)" strokeWidth="1.5" />
      <circle cx="800" cy="7" r="2" fill="rgba(79,127,255,0.4)" />
      <line x1="1050" y1="30" x2="1050" y2="18" stroke="rgba(155,114,255,0.25)" strokeWidth="1.5" />
      <circle cx="1050" cy="17" r="2" fill="rgba(155,114,255,0.4)" />
    </svg>
  )
}

// ── Industry icons ────────────────────────────────────────────────────────────

function IndustryIcon({ industry }: { industry: string }) {
  const stroke = "currentColor"
  const props = { viewBox: "0 0 20 20", fill: "none", stroke, strokeWidth: "1.4", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 18, height: 18 }

  if (industry === "cleaning companies") return (
    <svg {...props}>
      <path d="M8 3h5v3H8z" /><path d="M10.5 6v3" /><path d="M5 9h10l-1.5 8h-7L5 9z" />
      <circle cx="8" cy="7" r="0.6" fill={stroke} stroke="none" /><circle cx="12" cy="6.5" r="0.5" fill={stroke} stroke="none" />
    </svg>
  )
  if (industry === "auto detailers") return (
    <svg {...props}>
      <path d="M3 12l2.5-5h9l2.5 5" /><rect x="2" y="12" width="16" height="4" rx="1.5" />
      <circle cx="6" cy="16" r="1.5" /><circle cx="14" cy="16" r="1.5" />
      <path d="M7 9.5h6" strokeOpacity="0.5" />
    </svg>
  )
  if (industry === "HVAC companies") return (
    <svg {...props}>
      <circle cx="10" cy="10" r="3.5" /><path d="M10 2v3M10 15v3M2 10h3M15 10h3" />
      <path d="M4.9 4.9l2.1 2.1M13 13l2.1 2.1M4.9 15.1L7 13M13 7l2.1-2.1" />
    </svg>
  )
  if (industry === "landscapers") return (
    <svg {...props}>
      <path d="M10 17V9" /><path d="M10 9C10 5 5 3 3 5c3 0 5 2 7 4z" /><path d="M10 9c0-4 5-6 7-4-3 0-5 2-7 4z" />
      <path d="M7 13c0-2-3-4-5-3 2.5 0 4 1.5 5 3z" /><path d="M13 13c0-2 3-4 5-3-2.5 0-4 1.5-5 3z" />
    </svg>
  )
  if (industry === "roofing contractors") return (
    <svg {...props}>
      <path d="M2 10L10 2l8 8" /><path d="M4 10v8h12v-8" /><path d="M8 18v-6h4v6" />
      <path d="M8 4V2h2" strokeOpacity="0.6" />
    </svg>
  )
  if (industry === "contractors") return (
    <svg {...props}>
      <path d="M13 3l4 4-9.5 9.5-4 .5.5-4L13 3z" /><path d="M11 5l4 4" strokeOpacity="0.5" />
    </svg>
  )
  if (industry === "plumbers") return (
    <svg {...props}>
      <path d="M14 3a3 3 0 0 1 0 4.2L8.5 12.7a3 3 0 1 1-4.2-4.2L9.8 3A3 3 0 0 1 14 3z" />
      <path d="M5 15l1 1" /><circle cx="5.5" cy="15.5" r="1.5" />
    </svg>
  )
  if (industry === "med spas") return (
    <svg {...props}>
      <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
    </svg>
  )
  if (industry === "barbershops") return (
    <svg {...props}>
      <circle cx="6" cy="6" r="2" /><circle cx="14" cy="6" r="2" />
      <path d="M6 8l4 4 4-8" /><path d="M10 12l-3 5" /><path d="M10 12l3 5" />
    </svg>
  )
  if (industry === "electricians") return (
    <svg {...props}>
      <path d="M13 2L7 11h5l-3 7 9-10h-5l3-6z" />
    </svg>
  )
  // fallback
  return (
    <svg {...props}><circle cx="10" cy="10" r="4" /><path d="M10 6v4l3 3" /></svg>
  )
}

// ── Industry lookup ──────────────────────────────────────────────────────────

const industryDescriptions: Record<string, string> = {
  "cleaning companies": "Customers hand over keys. Trust signals and a fast booking path are everything.",
  "auto detailers": "Visual, premium service — website quality signals the quality of the work.",
  "HVAC companies": "Emergency demand means urgent buyers who decide in seconds. Speed wins.",
  "landscapers": "Before/after proof-driven service where visual galleries convert browsers.",
  "roofing contractors": "High-ticket purchase. Credibility signals must do the work before any call.",
  "contractors": "Portfolio galleries and licensing display win quote requests before competitors.",
  "plumbers": "Emergency search behavior — fast trust signals and instant contact path are critical.",
  "med spas": "Premium aesthetics — online presentation directly reflects treatment quality.",
  "barbershops": "Vibe-driven loyalty business — website needs to feel like the shop, immediately.",
  "electricians": "Licensing trust matters most — customers are choosing reliability over price.",
}

const industryToNicheSlug: Record<string, string> = {
  "cleaning companies": "cleaning-business",
  "auto detailers": "auto-detailing",
  "HVAC companies": "hvac",
  "landscapers": "landscaping",
  "roofing contractors": "roofing",
  "contractors": "contractors",
  "plumbers": "plumbing",
  "barbershops": "barbershop",
}

const industryAccents = [
  { accentColor: "rgba(79,127,255,0.15)", borderAccent: "rgba(79,127,255,0.3)", spotlightColor: "rgba(79,127,255,0.12)" },
  { accentColor: "rgba(155,114,255,0.15)", borderAccent: "rgba(155,114,255,0.3)", spotlightColor: "rgba(155,114,255,0.12)" },
  { accentColor: "rgba(79,200,255,0.12)", borderAccent: "rgba(79,200,255,0.25)", spotlightColor: "rgba(79,200,255,0.10)" },
  { accentColor: "rgba(79,127,255,0.12)", borderAccent: "rgba(79,127,255,0.22)", spotlightColor: "rgba(79,127,255,0.10)" },
  { accentColor: "rgba(155,114,255,0.12)", borderAccent: "rgba(155,114,255,0.22)", spotlightColor: "rgba(155,114,255,0.10)" },
]

// ── Problem card data ────────────────────────────────────────────────────────

const failureReasons = [
  {
    Icon: Globe,
    num: "01",
    accent: "red" as const,
    heading: "Looks like every other local business",
    body: "Stock templates and generic copy build zero trust. Customers compare and choose the one that looks and feels most professional.",
    impact: "3s",
    impactLabel: "to lose trust",
    cost: "Lost Credibility",
  },
  {
    Icon: Zap,
    num: "02",
    accent: "orange" as const,
    heading: "Slow and broken on mobile",
    body: "Over 70% of local searches happen on phones. A site that loads in 6 seconds on mobile is effectively invisible to real buyers.",
    impact: "70%",
    impactLabel: "search on mobile",
    cost: "Lost Traffic",
  },
  {
    Icon: ShieldCheck,
    num: "03",
    accent: "red" as const,
    heading: "No trust signals above the fold",
    body: "No reviews, no credentials, no proof of work. Service customers need reassurance before they pick up the phone — or they don't.",
    impact: "97%",
    impactLabel: "never return",
    cost: "Lost Leads",
  },
  {
    Icon: TrendingUp,
    num: "04",
    accent: "orange" as const,
    heading: "Built for looks, not conversion",
    body: "A pretty website without a clear booking path and conversion architecture generates zero leads — no matter how good it looks.",
    impact: "$0",
    impactLabel: "ROI without a system",
    cost: "Lost Revenue",
  },
]

const PROBLEM_ACCENT = {
  red: {
    topBar: "linear-gradient(90deg, #EF4444 0%, #F97316 100%)",
    border: "rgba(239,68,68,0.14)",
    borderHover: "rgba(239,68,68,0.32)",
    iconBg: "rgba(239,68,68,0.09)",
    iconBorder: "rgba(239,68,68,0.18)",
    iconColor: "#F87171",
    stat: "#F87171",
    glowHover: "rgba(239,68,68,0.1)",
    numColor: "rgba(239,68,68,0.80)",
    costText: "#F87171",
    costBg: "rgba(239,68,68,0.08)",
    costBorder: "rgba(239,68,68,0.18)",
  },
  orange: {
    topBar: "linear-gradient(90deg, #F97316 0%, #FACC15 100%)",
    border: "rgba(251,146,60,0.12)",
    borderHover: "rgba(251,146,60,0.28)",
    iconBg: "rgba(251,146,60,0.08)",
    iconBorder: "rgba(251,146,60,0.16)",
    iconColor: "#FB923C",
    stat: "#FB923C",
    glowHover: "rgba(251,146,60,0.09)",
    numColor: "rgba(251,146,60,0.80)",
    costText: "#FB923C",
    costBg: "rgba(251,146,60,0.08)",
    costBorder: "rgba(251,146,60,0.16)",
  },
}

// ── Deliverables ─────────────────────────────────────────────────────────────

const deliverables = [
  "Custom-designed website built around your local service business",
  "Mobile-first, fast-loading — optimized for local search rankings",
  "Conversion-focused layout with prominent booking and contact CTAs",
  "Trust section: reviews, credentials, and service guarantees",
  "Lead capture form connected to email and CRM notification",
  "Service area pages targeting your specific neighborhoods",
  "Google Analytics and conversion tracking integrated from day one",
  "SEO-ready semantic structure with proper heading hierarchy",
  "Written copy positioned to convert your specific local market",
  "14-day build timeline — nothing drags out for months",
]

// ── Local SEO strategy items ──────────────────────────────────────────────────

const localSeoItems = [
  { Icon: Globe,       title: "City Landing Pages",      body: "Dedicated pages for your city built to rank for high-intent local searches — not generic service descriptions that nobody searches for." },
  { Icon: Search,      title: "Service-Area Keywords",   body: "Every page targets specific service + city combinations your customers actually type. Built in from day one, not bolted on later." },
  { Icon: ShieldCheck, title: "GBP Alignment",           body: "Your website and Google Business Profile reinforce each other — consistent signals that strengthen map pack rankings across your full service area." },
  { Icon: Star,        title: "Review Trust Signals",    body: "Reviews and social proof are structurally embedded in your layout, visible before a visitor ever decides whether to contact you." },
  { Icon: Smartphone,  title: "Mobile-First Speed",      body: "Built for Core Web Vitals and sub-2s mobile load — the performance factors that separate page-one rankings from invisible competitors." },
  { Icon: MapPin,      title: "Nearby City Links",       body: "Strategic internal links across your city and service-area pages build topical authority and expand search visibility across the full metro." },
]

// ── City metrics helpers ──────────────────────────────────────────────────────

function parsePop(pop: string): number {
  const lower = pop.toLowerCase().replace(/,/g, "")
  const m = lower.match(/([\d.]+)\s*(million)?/)
  if (!m) return 500_000
  const n = parseFloat(m[1])
  return m[2] === "million" ? n * 1_000_000 : n
}

function getCityMetrics(data: CityData) {
  const pop = parsePop(data.population)
  if (pop >= 5_000_000) return { competition: "Extreme",     searches: "18,000+/mo", mobilePct: "77%", missedLeads: "$9,200/mo", responseWindow: "< 90 sec" }
  if (pop >= 2_000_000) return { competition: "Very High",   searches: "12,000+/mo", mobilePct: "75%", missedLeads: "$6,400/mo", responseWindow: "< 2 min"  }
  if (pop >= 1_000_000) return { competition: "High",        searches: "8,500+/mo",  mobilePct: "74%", missedLeads: "$4,200/mo", responseWindow: "< 3 min"  }
  if (pop >= 600_000)   return { competition: "High",        searches: "5,800+/mo",  mobilePct: "73%", missedLeads: "$2,900/mo", responseWindow: "< 4 min"  }
  if (pop >= 400_000)   return { competition: "Medium-High", searches: "3,800+/mo",  mobilePct: "72%", missedLeads: "$1,800/mo", responseWindow: "< 5 min"  }
  return                       { competition: "Medium",      searches: "2,400+/mo",  mobilePct: "71%", missedLeads: "$1,100/mo", responseWindow: "< 7 min"  }
}

// ── Hero Dashboard visual ─────────────────────────────────────────────────────

function HeroDashboard({ inView, metrics, city }: { inView: boolean; metrics: ReturnType<typeof getCityMetrics>; city: string }) {
  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      {/* Ambient glow behind the cluster */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* === Main Analytics Card === */}
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
        {/* Accent top bar */}
        <div className="h-[2px] flex-shrink-0" style={{ background: "linear-gradient(90deg, #4F7FFF, #9B72FF)" }} />

        {/* Card header */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-white/[0.05]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-co-text-muted mb-1">
              Local Search Traffic · {city}
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="font-black tracking-tighter text-co-text"
                style={{ fontSize: metrics.searches.length > 9 ? "1.25rem" : "1.55rem" }}
              >
                {metrics.searches}
              </span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg" style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)" }}>
                <TrendingUp size={9} style={{ color: "#4ADE80" }} />
                <span className="text-[10px] font-bold" style={{ color: "#4ADE80" }}>+34%</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 mt-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/35" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/35" />
            <div className="w-2 h-2 rounded-full bg-green-500/35" />
          </div>
        </div>

        {/* Traffic trend line chart */}
        <div className="px-5 pt-3 pb-0 flex-1 min-h-0">
          <svg viewBox="0 0 260 75" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cityHeroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F7FFF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="cityHeroLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4F7FFF" />
                <stop offset="100%" stopColor="#9B72FF" />
              </linearGradient>
            </defs>
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="50" x2="260" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <motion.path
              d="M 0,68 C 32,64 32,55 65,49 C 98,43 105,36 130,31 C 158,26 178,17 210,11 C 232,7 248,5 260,3 L 260,75 L 0,75 Z"
              fill="url(#cityHeroFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 1.0 }}
            />
            <motion.path
              d="M 0,68 C 32,64 32,55 65,49 C 98,43 105,36 130,31 C 158,26 178,17 210,11 C 232,7 248,5 260,3"
              fill="none"
              stroke="url(#cityHeroLine)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
            />
            <circle cx="260" cy="3" r="5" fill="rgba(155,114,255,0.25)" />
            <circle cx="260" cy="3" r="2.5" fill="#9B72FF" />
          </svg>
        </div>

        {/* Bottom metric row */}
        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Mobile Traffic", value: metrics.mobilePct, color: "#B87FFF" },
            { label: "Decision Window", value: metrics.responseWindow, color: "#4FC8FF" },
            { label: "Competition", value: metrics.competition, color: "#FB923C" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <div
                className="font-black tracking-tighter leading-none"
                style={{ color: m.color, fontSize: m.value.length > 8 ? "0.72rem" : m.value.length > 5 ? "0.88rem" : "1.05rem" }}
              >
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
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">{city} Cleaning Co.</p>
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
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">Search Visibility</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg" style={{ background: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.2)" }}>
                <TrendingUp size={8} style={{ color: "#7BA3FF" }} />
                <span className="text-[8px] font-bold" style={{ color: "#7BA3FF" }}>Rising</span>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-7 mb-2">
              {[22, 32, 28, 44, 52, 62, 73, 88].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-[2px]"
                  style={{
                    background: i === 7 ? "linear-gradient(180deg, #4F7FFF, #9B72FF)" : `rgba(79,127,255,${0.12 + i * 0.035})`,
                  }}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${h}%` } : {}}
                  transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 1.0 + i * 0.06 }}
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

      {/* === Conversion Rate Badge (mid-right, floating) === */}
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
            <span className="text-[10.5px] font-bold whitespace-nowrap" style={{ color: "#B87FFF" }}>3.2x Conversion</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface NearbyLocation {
  city: string
  stateSlug: string
  slug: string
}

interface CityPageLayoutProps {
  data: CityData
  nearbyLocations?: NearbyLocation[]
}

// ── Component ────────────────────────────────────────────────────────────────

export function CityPageLayout({ data, nearbyLocations = [] }: CityPageLayoutProps) {
  const heroRef = useRef(null)
  const problemRef = useRef(null)
  const industriesRef = useRef(null)
  const deliverablesRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" })
  const problemInView = useInView(problemRef, { once: true, amount: 0.05 })
  const industriesInView = useInView(industriesRef, { once: true, amount: 0.05 })
  const deliverablesInView = useInView(deliverablesRef, { once: true, amount: 0.05 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.25 })

  const metrics = getCityMetrics(data)

  const ind0 = data.topIndustries[0] ?? "service businesses"
  const ind1 = data.topIndustries[1] ?? data.topIndustries[0] ?? "service businesses"
  const ind2 = data.topIndustries[2] ?? ind0

  const faqItems: FAQItem[] = [
    {
      question: `How quickly can ClevOps launch a website for a ${ind0} in ${data.city}?`,
      answer: data.faqAnswers.howLong,
    },
    {
      question: `How much should a ${data.city} ${ind0} invest in a professional website?`,
      answer: data.faqAnswers.howMuch,
    },
    {
      question: `Why do ${data.city} ${ind1} lose clients to competitors with better websites?`,
      answer: data.faqAnswers.whyLocal,
    },
    {
      question: `Can ClevOps help ${data.city} ${ind0} rank higher on Google Maps?`,
      answer: `Yes. Every website we build includes local SEO foundations: city-specific landing pages, service-area keyword structure, semantic heading hierarchy, Google Business Profile alignment, and internal linking to nearby ${data.state} cities. We don't just design — we build the ranking infrastructure ${data.city} ${ind0} need to capture local search traffic and convert it.`,
    },
    {
      question: `Does ClevOps build websites for ${ind2} and other service trades in ${data.city}?`,
      answer: `Yes — we build websites for ${data.topIndustries.slice(0, 3).join(", ")}, and other local service businesses across ${data.city}. Each build is structured around how customers in ${data.city} specifically search, compare, and book — not a generic template applied to any city.`,
    },
  ]

  const nearbyLinks: InternalLink[] = nearbyLocations.map((loc) => ({
    label: loc.city,
    href: `/locations/${loc.stateSlug}/${loc.slug}`,
  }))

  const topNicheSlug = industryToNicheSlug[ind0]
  const exploreLinks: InternalLink[] = [
    { label: `All ${data.state} cities`, href: `/locations/${data.stateSlug}` },
    ...nearbyLinks,
    ...(topNicheSlug ? [{ label: `${ind0.charAt(0).toUpperCase() + ind0.slice(1)} websites`, href: `/website-design/${topNicheSlug}` }] : []),
    { label: "Website design services", href: "/website-design" },
    { label: "Start your project", href: "/contact" },
  ]

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: data.state, href: `/locations/${data.stateSlug}` },
    { label: data.city },
  ]

  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        {/* Background stack */}
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

        {/* City skyline — subtle background illustration */}
        <CitySkyline />

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
            {/* Eyebrow */}
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
                {data.city}, {data.state}
              </span>
            </motion.div>

            {/* H1 — line-by-line reveal */}
            <h1 className="font-black tracking-[-0.03em] leading-[1.05] mb-7" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
              {[
                { text: "Website Design for", delay: 0.15 },
                { text: "Local Businesses", delay: 0.27, accent: true },
                { text: `in ${data.city}`, delay: 0.39 },
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
              {data.businessAngle}
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
                { value: "14d", label: "Avg. launch" },
                { value: "From $999", label: "One-time build" },
                { value: data.population, label: "Market size" },
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
            <HeroDashboard inView={heroInView} metrics={metrics} city={data.city} />
          </div>
        </div>
      </section>

      {/* ── Problem section ───────────────────────────────────────────────── */}
      <section ref={problemRef} className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060608]" />
        <div className="absolute inset-0 bg-dot opacity-[0.10]" />
        <div
          className="orb w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.05) 0%, rgba(249,115,22,0.03) 45%, transparent 70%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          {/* Header */}
          <motion.div
            variants={headerBlock}
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-end mb-10 md:mb-14"
          >
            <div>
              <motion.div variants={headerLabel} className="mb-5">
                <SectionLabel className="border-red-500/20 text-red-400/70">The Problem</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                Why most {data.city} service websites{" "}
                <span style={{ background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  fail to convert
                </span>
              </motion.h2>
            </div>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Most local service sites in {data.city} look fine on the surface and produce nothing.{" "}
              <span className="text-co-text-secondary">These are the four patterns we fix — every time.</span>
            </motion.p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {failureReasons.map((item, i) => {
              const a = PROBLEM_ACCENT[item.accent]
              return (
                <motion.div
                  key={item.num}
                  className="relative group h-full"
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  animate={problemInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: i * 0.09, duration: 0.65, ease: EASE_PREMIUM }}
                >
                  <div
                    className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
                    style={{ background: "#111116", border: `1px solid ${a.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
                  >
                    <div className="h-[2px] w-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500" style={{ background: a.topBar }} />
                    <div className="p-6 flex flex-col flex-1">
                      {/* num + cost tag */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[10.5px] font-black tracking-[0.25em] uppercase" style={{ color: a.numColor }}>{item.num}</span>
                        <span
                          className="text-[9.5px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide"
                          style={{ color: a.costText, background: a.costBg, border: `1px solid ${a.costBorder}` }}
                        >
                          {item.cost}
                        </span>
                      </div>
                      {/* icon left + impact stat right */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
                          style={{ background: a.iconBg, border: `1px solid ${a.iconBorder}` }}
                        >
                          <item.Icon size={18} style={{ color: a.iconColor }} />
                        </div>
                        <div className="text-right">
                          <div
                            className="font-black leading-none tracking-tighter"
                            style={{ color: a.stat, fontSize: item.impact.length <= 3 ? "2rem" : item.impact.length <= 5 ? "1.7rem" : "1.35rem" }}
                          >
                            {item.impact}
                          </div>
                          <div className="text-[9.5px] text-co-text-muted leading-tight mt-1">{item.impactLabel}</div>
                        </div>
                      </div>
                      <h3 className="font-bold text-co-text text-[14.5px] leading-snug mb-2">{item.heading}</h3>
                      <p className="text-[12.5px] text-co-text-muted leading-relaxed flex-1">{item.body}</p>
                    </div>
                  </div>
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10"
                    style={{ border: `1px solid ${a.borderHover}`, boxShadow: `0 0 32px ${a.glowHover}` }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Summary banner */}
          <motion.div
            className="mt-10 md:mt-14 rounded-2xl px-8 py-5 text-center"
            style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.10)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.7 }}
          >
            <p className="text-sm md:text-base font-medium text-co-text leading-relaxed">
              Every day you operate without a proper system, a {data.city} competitor with one is taking your clients.{" "}
              <span className="font-bold" style={{ background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We fix all four — in 14 days.
              </span>
            </p>
          </motion.div>

          {/* Resolution statement */}
          <motion.div
            className="mt-10 md:mt-12 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.0 }}
          >
            <div className="h-px w-12 bg-co-accent/40 mb-7" />
            <p className="text-xl md:text-2xl font-medium text-co-text leading-relaxed">
              Every one of these is fixable — fast.{" "}
              <span className="text-co-text-secondary">
                The {data.city} businesses that fix them first don&apos;t just catch up. They pull far enough ahead that competitors can&apos;t follow.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── City Opportunity Snapshot ─────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-co-bg" />
        <div className="absolute inset-0 bg-grid opacity-[0.10]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="max-w-2xl mb-12"
          >
            <SectionLabel className="mb-5">Market Intelligence</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4">
              The {data.city}{" "}
              <span className="text-gradient-accent">opportunity snapshot</span>
            </h2>
            <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Service businesses in {data.city} face a specific competitive environment. Here&apos;s what the local market data shows.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {([
              { label: "Local Competition",  value: metrics.competition,    sub: "in your niche",                accent: "#F87171", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.16)"   },
              { label: "Monthly Searches",   value: metrics.searches,       sub: "local service searches",       accent: "#7BA3FF", bg: "rgba(79,127,255,0.08)",  border: "rgba(79,127,255,0.16)"  },
              { label: "Mobile Traffic",     value: metrics.mobilePct,      sub: "of local searches",            accent: "#B87FFF", bg: "rgba(155,114,255,0.08)", border: "rgba(155,114,255,0.16)" },
              { label: "Missed Lead Risk",   value: metrics.missedLeads,    sub: "est. monthly w/o proper site", accent: "#FB923C", bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.16)"  },
              { label: "Decision Window",    value: metrics.responseWindow, sub: "before visitor bounces",       accent: "#4FC8FF", bg: "rgba(79,200,255,0.08)",  border: "rgba(79,200,255,0.16)"  },
            ] as const).map((metric, i) => (
              <motion.div
                key={metric.label}
                className="rounded-2xl p-5 flex flex-col gap-2"
                style={{ background: "#0D0D11", border: `1px solid ${metric.border}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.55, ease: EASE_PREMIUM, delay: i * 0.09 }}
              >
                <div
                  className="w-9 h-9 rounded-xl mb-1 flex items-center justify-center shrink-0"
                  style={{ background: metric.bg }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: metric.accent }} />
                </div>
                <div
                  className="font-black leading-none tracking-tighter"
                  style={{
                    color: metric.accent,
                    fontSize: metric.value.length > 8 ? "1.15rem" : metric.value.length > 5 ? "1.5rem" : "1.9rem",
                  }}
                >
                  {metric.value}
                </div>
                <div className="text-[11.5px] font-semibold text-co-text leading-tight">{metric.label}</div>
                <div className="text-[10px] text-co-text-muted leading-snug">{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries section ────────────────────────────────────────────── */}
      <section ref={industriesRef} className="relative py-16 md:py-24 overflow-hidden bg-co-bg">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div
          className="orb w-[500px] h-[500px] top-1/2 right-[-8%] -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(79,127,255,0.04) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10 md:mb-14"
          >
            <div>
              <motion.div variants={headerLabel} className="mb-4">
                <SectionLabel>Who We Serve</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                Service businesses we build for{" "}
                <span className="text-gradient-accent">in {data.city}</span>
              </motion.h2>
            </div>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              {data.city}&apos;s top service niches each have different conversion challenges. We build specifically for how customers in this market search, compare, and decide.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {data.topIndustries.map((industry, i) => {
              const accent = industryAccents[i % industryAccents.length]
              return (
                <motion.div key={industry} variants={staggerItemCard} whileHover={springHoverCard}>
                  <SpotlightCard
                    spotlightColor={accent.spotlightColor}
                    className="h-full rounded-2xl border border-co-border bg-co-card transition-colors duration-300 hover:border-co-border-hover hover:shadow-card-hover"
                  >
                    <div className="relative h-full flex flex-col p-6">
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                          style={{ background: accent.accentColor, borderColor: accent.borderAccent, color: accent.borderAccent }}
                        >
                          <IndustryIcon industry={industry} />
                        </div>
                        <span className="text-4xl font-black leading-none mt-1 text-co-text-muted/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="font-bold text-co-text text-base capitalize mb-2 leading-tight">{industry}</p>
                      <p className="text-sm text-co-text-muted leading-relaxed flex-1">
                        {industryDescriptions[industry] ?? "High-intent local search market with strong demand for professional digital presence."}
                      </p>
                      {industryToNicheSlug[industry] && (
                        <Link
                          href={`/website-design/${industryToNicheSlug[industry]}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors duration-200 hover:opacity-100"
                          style={{ color: accent.borderAccent, opacity: 0.75 }}
                        >
                          View {industry} websites
                          <ArrowRight size={11} />
                        </Link>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.5 }}
            className="mt-10"
          >
            <Button href="/contact" variant="primary" size="md">
              Get Your Free Demo
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Local Proof section ──────────────────────────────────────────── */}
      <LocalProofSection data={data} nearbyLocations={nearbyLocations} />

      {/* ── Deliverables section ──────────────────────────────────────────── */}
      <section ref={deliverablesRef} className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-co-surface" />
        <div className="absolute inset-0 bg-grid-sm opacity-[0.25]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={headerBlock}
              initial="hidden"
              animate={deliverablesInView ? "visible" : "hidden"}
            >
              <motion.div variants={headerLabel} className="mb-4">
                <SectionLabel>What You Get</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5">
                Everything a {data.city} service business needs{" "}
                <span className="text-gradient-accent">to compete online</span>
              </motion.h2>
              <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed mb-8">
                No packages. No upsells. Every website ships complete — because a half-built site performs no better than no site at all.
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
              animate={deliverablesInView ? "visible" : "hidden"}
              className="space-y-3"
            >
              {deliverables.map((item) => (
                <motion.li key={item} variants={staggerItemRow} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-co-text-secondary leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Local SEO section ────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-co-bg" />
        <div className="absolute inset-0 bg-dot opacity-[0.06]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div
          className="orb w-[500px] h-[400px] top-1/2 left-[-6%] -translate-y-1/2"
          style={{ background: "radial-gradient(ellipse, rgba(155,114,255,0.05) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10"
          >
            <div>
              <SectionLabel className="mb-5">Local SEO Strategy</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                Built to rank in{" "}
                <span className="text-gradient-accent">{data.city}</span>
              </h2>
            </div>
            <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Every site we build is structured for local search visibility — not just a design handoff. {data.city} customers are searching for your service right now. We build the infrastructure to capture them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localSeoItems.map((item, i) => (
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.4 }}
            className="mt-10"
          >
            <Button href="/contact" variant="primary" size="md" icon={<ArrowUpRight size={15} />}>
              Get Your Free Local SEO Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Local Insights section ───────────────────────────────────────── */}
      <LocalInsightsSection city={data.city} />

      {/* ── Local Search Funnel section ───────────────────────────────────── */}
      <LocalSearchFunnelSection city={data.city} state={data.state} topIndustries={data.topIndustries} />

      {/* ── FAQ section ───────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-co-bg">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          >
            <LocalFAQ
              items={faqItems}
              title={`Common questions from ${data.city} business owners`}
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
          <InternalLinks title={`More ${data.state} cities & services`} links={exploreLinks} />
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
          {/* Icon badge */}
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
            Ready to grow your {data.city} service business?
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
            <Button href="/website-design" size="lg" variant="outline">View All Services</Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-6 border-t border-white/[0.06]"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["No upfront payment", "Response within 24 hours", `Built for ${data.city} businesses`].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-co-accent/40" />
                <span className="text-[11px] font-medium text-co-text-muted">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── JSON-LD Schema ─────────────────────────────────────────────────── */}
      <SchemaMarkup type="LocalBusiness" city={data.city} state={data.state} stateSlug={data.stateSlug} slug={data.slug} description={data.businessAngle} />
      <SchemaMarkup type="FAQPage" items={faqItems} />
      <SchemaMarkup type="BreadcrumbList" items={breadcrumbs.map((b) => ({ name: b.label, href: b.href }))} />
    </main>
  )
}
