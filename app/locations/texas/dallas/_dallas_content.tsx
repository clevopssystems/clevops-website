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
  Brain,
  Layers,
  Activity,
  BarChart3,
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
import { locations } from "@/data/locations"
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

// ── Dallas data ───────────────────────────────────────────────────────────────

const dallasData = locations.find(
  (l) => l.slug === "dallas" && l.stateSlug === "texas"
)!

const dallasNearbyLocations = (["fort-worth", "arlington", "houston", "austin"] as const)
  .map((slug) => locations.find((l) => l.slug === slug && l.stateSlug === "texas"))
  .filter((l): l is NonNullable<typeof l> => l !== undefined)
  .map((l) => ({ city: l.city, stateSlug: l.stateSlug, slug: l.slug }))

// ── Industry data ─────────────────────────────────────────────────────────────

interface DallasIndustry {
  name: string
  icon: string
  nicheSlug: string | undefined
  headline: string
  body: string
  accent: { accentColor: string; accentBorder: string; spotlightColor: string }
}

const DALLAS_INDUSTRIES: DallasIndustry[] = [
  {
    name: "HVAC Companies",
    icon: "HVAC companies",
    nicheSlug: "hvac",
    headline: "When it's 104°F in Dallas, customers call first and compare second.",
    body: "Texas summers create urgent, high-ticket HVAC demand across the DFW metro. When AC fails in Frisco or Plano, homeowners search fast and pick the first company that looks trustworthy. Emergency CTAs above the fold, a click-to-call visible on every screen, and trust signals that communicate 'licensed, local, and available' are not optional. They're the reason one HVAC company gets the call and another doesn't.",
    accent: { accentColor: "rgba(79,127,255,0.15)", accentBorder: "rgba(79,127,255,0.3)", spotlightColor: "rgba(79,127,255,0.12)" },
  },
  {
    name: "Cleaning Companies",
    icon: "cleaning companies",
    nicheSlug: "cleaning-business",
    headline: "Dallas cleaning businesses compete on trust, and trust is won online.",
    body: "The cleaning companies growing fastest in Uptown, Preston Hollow, and Frisco aren't winning on price. They're winning because their websites look professional, show real customer reviews, and make booking feel simple and safe. Customers hand you keys to their home. Your website needs to establish that level of trust before any phone call happens, or they're calling your competitor instead.",
    accent: { accentColor: "rgba(155,114,255,0.15)", accentBorder: "rgba(155,114,255,0.3)", spotlightColor: "rgba(155,114,255,0.12)" },
  },
  {
    name: "Roofing Contractors",
    icon: "roofing contractors",
    nicheSlug: "roofing",
    headline: "Dallas hail season creates a narrow window where the right website wins everything.",
    body: "North Texas averages more hail events per year than almost anywhere in the US. When a storm hits, homeowners search immediately and call the first roofing company that looks legitimate. A free inspection CTA, insurance claim guidance, and visible licensing information do more to close those calls than any sales pitch. Your website is the pitch, and it runs 24/7.",
    accent: { accentColor: "rgba(79,200,255,0.12)", accentBorder: "rgba(79,200,255,0.25)", spotlightColor: "rgba(79,200,255,0.10)" },
  },
  {
    name: "General Contractors",
    icon: "contractors",
    nicheSlug: "contractors",
    headline: "DFW's construction boom means more competition for every project bid.",
    body: "Dallas-Fort Worth is one of the fastest-growing metro areas in the US. Demand for contractors has never been higher, but so has competition. Customers making major financial decisions compare websites before making any contact. Project portfolios, license and insurance display, and a professional online presence pre-qualify you before the estimate conversation even begins.",
    accent: { accentColor: "rgba(79,127,255,0.12)", accentBorder: "rgba(79,127,255,0.22)", spotlightColor: "rgba(79,127,255,0.10)" },
  },
  {
    name: "Auto Detailers",
    icon: "auto detailers",
    nicheSlug: "auto-detailing",
    headline: "Texas heat punishes vehicles. Premium Dallas detailers position online to match.",
    body: "Dallas car culture runs deep, and the detailers commanding $400+ packages in Addison and Highland Park have websites that reflect the same precision they apply to every vehicle. Visual portfolios, clear service packages with transparent pricing, and online booking with deposits attract higher-value clients and reduce no-shows. The website signals whether you're a premium operation or a side hustle.",
    accent: { accentColor: "rgba(155,114,255,0.12)", accentBorder: "rgba(155,114,255,0.22)", spotlightColor: "rgba(155,114,255,0.10)" },
  },
  {
    name: "Landscaping Companies",
    icon: "landscapers",
    nicheSlug: "landscaping",
    headline: "Dallas's year-round growing season means year-round search volume.",
    body: "Unlike northern markets, Dallas landscaping demand doesn't slow in winter. It shifts to cleanup, seasonal planting, and hardscape projects. Customers booking landscaping services want visual proof: before/after galleries, completed project showcases, evidence you understand Texas soil, heat, and plant varieties. A website built around that proof converts faster than any generic portfolio.",
    accent: { accentColor: "rgba(79,127,255,0.15)", accentBorder: "rgba(79,127,255,0.3)", spotlightColor: "rgba(79,127,255,0.12)" },
  },
  {
    name: "Plumbers",
    icon: "plumbers",
    nicheSlug: "plumbing",
    headline: "Emergency plumbing in Dallas is a first-click, first-call market.",
    body: "Dallas homeowners with a burst pipe or failed water heater aren't comparison shopping. They're calling the first plumber whose website loads fast and has a visible phone number. A site that takes 5 seconds to load instead of 1 costs you real jobs. Emergency CTAs, 24/7 availability signals, and above-the-fold contact paths are the difference between winning and losing the call.",
    accent: { accentColor: "rgba(155,114,255,0.15)", accentBorder: "rgba(155,114,255,0.3)", spotlightColor: "rgba(155,114,255,0.12)" },
  },
  {
    name: "Med Spas",
    icon: "med spas",
    nicheSlug: undefined,
    headline: "North Dallas's affluent demographics support premium med spa services, with high research expectations.",
    body: "Customers considering Botox or body sculpting in North Dallas, Frisco, or Southlake research extensively before booking. They compare clinic websites the same way they compare restaurants: by feel, credibility, and presentation. A med spa website that communicates clinical expertise, showcases treatment results, and makes consultation booking effortless consistently outbooks competitors who rely on Instagram alone.",
    accent: { accentColor: "rgba(79,200,255,0.12)", accentBorder: "rgba(79,200,255,0.25)", spotlightColor: "rgba(79,200,255,0.10)" },
  },
  {
    name: "Electricians",
    icon: "electricians",
    nicheSlug: undefined,
    headline: "Dallas homeowners choose electricians on trust signals, not lowest price.",
    body: "Electrical work carries real safety implications, and Dallas homeowners know it. They're looking for licensing proof, insurance disclosure, and a professional presentation that signals legitimate, accountable service, all before any contact. The electricians winning the most quote requests in DFW have websites that establish those credentials immediately and make scheduling feel safe and straightforward.",
    accent: { accentColor: "rgba(79,127,255,0.12)", accentBorder: "rgba(79,127,255,0.22)", spotlightColor: "rgba(79,127,255,0.10)" },
  },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────

const DALLAS_FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does website design cost for a Dallas service business?",
    answer:
      "Most Dallas service businesses invest between $999 and $2,499 depending on scope. That covers a fully custom-designed, mobile-optimized, locally SEO-structured website, not a template with your logo swapped in. There's also a $199/month care plan covering hosting, updates, performance monitoring, and ongoing SEO work. For businesses running $50K+ annually, the cost is typically recovered from a single new client within the first 30 days of launch.",
  },
  {
    question: "How long does it take to launch a website for a Dallas service business?",
    answer:
      "Most Dallas clients are live within 14 days of signing. We run design, copywriting, and technical setup simultaneously so nothing waits on sequential approvals. Clients with multiple service areas or specific DFW neighborhoods get that scoped into the plan on day one, so it's built into the structure rather than added after launch.",
  },
  {
    question: "Why do Dallas cleaning companies lose leads to competitors with better websites?",
    answer:
      "Dallas's cleaning market is driven by trust, established online before any call happens. When a homeowner in Plano or Uptown searches for a cleaning service, they open three or four results and pick the business that looks most professional. A slow, generic website signals low quality. A fast, polished site with reviews, a clear booking flow, and visible credentials wins that comparison every time. Most cleaning businesses lose on first impression, not price.",
  },
  {
    question: "Can ClevOps help Dallas service businesses rank higher on Google Maps?",
    answer:
      "Yes. Every website we build includes local SEO foundations designed to support map pack rankings: city-specific landing pages, service-area keyword architecture, semantic heading structure, schema markup, Google Business Profile alignment, and internal linking across DFW cities. We also build for Google's mobile-first indexing requirements, which directly affects map pack visibility. We don't just design. We build the ranking infrastructure.",
  },
  {
    question: "Do Dallas businesses actually need local SEO, or is a professional website enough?",
    answer:
      "A premium website without local SEO is invisible to the customers actively searching for what you offer. Dallas service businesses need both. Local SEO ensures you appear when someone in Frisco searches 'HVAC company near me' or in Irving searches 'window cleaning service.' The website then converts that traffic into a call or booking. One without the other produces no results. ClevOps builds both the conversion architecture and the SEO foundation into every project.",
  },
  {
    question: "What industries do you build websites for in Dallas?",
    answer:
      "We build websites for cleaning companies, HVAC contractors, roofers, general contractors, auto detailers, landscapers, plumbers, electricians, med spas, and other local service businesses across the Dallas-Fort Worth metro. Each website is built around how customers in that specific niche search, compare, and decide, not a generic template applied across categories.",
  },
  {
    question: "How long does SEO take to work for a Dallas service business?",
    answer:
      "For a properly structured website in a competitive DFW market, local SEO typically produces visible results within 60 to 90 days. Map pack movement can happen faster, and some Dallas clients see ranking improvements within 30 days. Long-tail keyword traffic builds over 3 to 6 months as topical authority accumulates. The key is starting with the right structural foundation: a site Google can correctly interpret, index, and associate with your specific service areas.",
  },
  {
    question: "Why is mobile optimization so important for Dallas local businesses?",
    answer:
      "Over 74% of local service searches in Dallas happen on mobile devices, often from someone at home comparing options in real time. A website that loads slowly, has small tap targets, or breaks on smaller screens loses those visitors immediately. Google's mobile-first indexing means your mobile performance directly affects rankings. Fast, mobile-perfect websites rank better and convert more. It's not optional for any serious Dallas service business.",
  },
  {
    question: "Can you redesign an existing website that's outdated?",
    answer:
      "Yes. Many Dallas clients come to us with an existing site that underperforms, looks dated, or was built on a platform they can't update. We rebuild from scratch on a performance-focused, SEO-structured stack. The existing domain is preserved to maintain search equity. If the old site has ranking assets worth protecting, we map those carefully in the migration so nothing valuable is lost in the transition.",
  },
  {
    question: "What makes a website actually convert visitors into leads for a Dallas service business?",
    answer:
      "Conversion comes down to five factors: trust (reviews, credentials, and proof visible immediately), speed (sub-2 second load on mobile), clarity (visitors know in 3 seconds what you do and where), CTA hierarchy (one clear action, call or book, more prominent than everything else), and service area specificity (customers in Frisco, Irving, or Arlington need immediate confirmation you serve them). Most Dallas service sites fail on three or more of these simultaneously.",
  },
  {
    question: "What is local SEO and how does it apply to Dallas service businesses?",
    answer:
      "Local SEO is the practice of optimizing your online presence to appear when customers nearby search for relevant services. For a Dallas HVAC company, this means appearing when someone in Garland searches 'AC repair near me' or in Addison searches 'furnace service.' It involves your website's technical structure, city and service-area content, Google Business Profile optimization, and building the authority signals that tell Google you're the most relevant result for those local searches.",
  },
  {
    question: "How do Dallas service businesses generate consistent leads online?",
    answer:
      "Consistent lead generation comes from three things operating together: visibility (appearing in Google search and the map pack for the right queries), credibility (a professional website that establishes trust on arrival), and capture (a clear conversion path, whether form, phone, or booking, that reduces friction to action). Businesses with all three generate leads predictably, month after month, without depending on referrals or paid ads to fill their calendar.",
  },
  {
    question: "Is ClevOps a Dallas-based agency?",
    answer:
      "ClevOps is a digital agency building websites and growth systems for local service businesses across the United States, with deep experience in the Dallas-Fort Worth market. We understand the DFW competitive landscape, the specific neighborhoods Dallas businesses target, and how local customers search and decide. Every Dallas website we build is informed by real knowledge of this market, not generic templates applied to any city.",
  },
  {
    question: "What's different about a ClevOps website versus a template or DIY builder?",
    answer:
      "The difference is function, not just appearance. Template websites produce sites that look identical to thousands of other local business sites — which means customers can't distinguish you from competitors. More critically, most templates aren't optimized for local SEO, mobile conversion, or lead capture. A ClevOps website is custom-built around your specific service, your Dallas neighborhoods, and the conversion psychology that works for your industry. The outcome is a site that both ranks and converts.",
  },
]

// ── Deliverables ──────────────────────────────────────────────────────────────

const DALLAS_DELIVERABLES = [
  "Custom-designed website built around your specific Dallas service business and target neighborhoods",
  "Mobile-first architecture: sub-2 second load on any device, any connection speed",
  "Local SEO structure targeting Dallas, DFW neighborhoods, and surrounding suburbs",
  "Conversion-focused layout with prominent CTAs, booking paths, and contact forms",
  "Trust architecture: reviews, credentials, and service guarantees visible above the fold",
  "Google Analytics 4 and conversion tracking configured and verified from day one",
  "Schema markup: LocalBusiness, FAQPage, and BreadcrumbList for AI and search readability",
  "Service area pages targeting the specific DFW neighborhoods and suburbs you serve",
  "Lead capture system connected to email notifications and optional CRM integration",
  "14-day build timeline: most Dallas clients are live within two weeks of signing",
]

// ── Local SEO items ───────────────────────────────────────────────────────────

const DALLAS_LOCAL_SEO_ITEMS = [
  {
    Icon: Globe,
    title: "Dallas City & Neighborhood Pages",
    body: "Dedicated pages targeting high-intent Dallas searches (Frisco, Plano, Uptown, North Dallas, Irving), not generic service descriptions nobody searches for.",
  },
  {
    Icon: Search,
    title: "DFW Service-Area Keywords",
    body: "Every page targets specific service + location combinations your customers actually type: 'cleaning service Plano', 'HVAC repair Frisco', 'roofer North Dallas', built in from day one.",
  },
  {
    Icon: ShieldCheck,
    title: "Google Business Profile Alignment",
    body: "Your website and GBP reinforce each other through consistent NAP data, category alignment, and cross-linking that strengthens map pack rankings across the DFW metro.",
  },
  {
    Icon: Star,
    title: "Review Trust Architecture",
    body: "Reviews and social proof structurally embedded in your layout, visible before a Dallas visitor decides whether to contact you, not buried at the bottom.",
  },
  {
    Icon: Smartphone,
    title: "Mobile-First Performance",
    body: "Built for Core Web Vitals and sub-2 second mobile load, the performance factors separating page-one Dallas rankings from invisible competitors in the same niche.",
  },
  {
    Icon: MapPin,
    title: "DFW Internal Link Network",
    body: "Strategic internal links across city and suburb pages build topical authority and expand your search footprint across the entire Dallas-Fort Worth metro.",
  },
]

// ── Problem cards ─────────────────────────────────────────────────────────────

const DALLAS_FAILURE_REASONS = [
  {
    Icon: Globe,
    num: "01",
    accent: "red" as const,
    heading: "Looks like every other local site in DFW",
    body: "The DFW market is saturated with generic Wix and Squarespace sites. Customers comparing 3-4 options in one tab choose the business that looks distinctly more credible, not just slightly better.",
    impact: "3s",
    impactLabel: "to lose trust",
    cost: "Lost Credibility",
  },
  {
    Icon: Zap,
    num: "02",
    accent: "orange" as const,
    heading: "Slow and broken on mobile in Dallas",
    body: "74% of Dallas local service searches happen on phones. A site loading in 6 seconds on mobile is effectively invisible. Google also ranks mobile performance, and slow sites don't just convert less, they rank lower.",
    impact: "74%",
    impactLabel: "search on mobile",
    cost: "Lost Traffic",
  },
  {
    Icon: ShieldCheck,
    num: "03",
    accent: "red" as const,
    heading: "No trust signals above the fold",
    body: "Dallas customers are skeptical of service businesses they haven't heard of. No reviews, no credentials, no proof of work visible immediately, and they click back to Google within seconds.",
    impact: "97%",
    impactLabel: "never return",
    cost: "Lost Leads",
  },
  {
    Icon: TrendingUp,
    num: "04",
    accent: "orange" as const,
    heading: "No booking path, just a contact page",
    body: "A 'Contact Us' page with a form and phone number is not a conversion system. Dallas competitors with clear booking flows, instant quote options, and SMS automation win the job before you see the inquiry.",
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

// ── City skyline SVG ──────────────────────────────────────────────────────────

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
      <path
        d="M0 180V155H40V130H55V110H70V90H90V110H110V70H130V50H155V70H170V90H185V60H210V30H240V60H260V40H290V20H320V40H350V60H370V40H400V20H430V60H460V80H480V50H510V30H545V50H575V70H600V50H630V30H660V60H690V80H720V50H760V20H800V50H830V30H870V50H900V70H930V50H960V30H990V60H1020V80H1050V60H1080V80H1110V60H1140V90H1165V70H1195V90H1220V110H1245V90H1270V110H1295V130H1320V150H1350V160H1380V165H1440V180Z"
        fill="rgba(255,255,255,0.018)"
      />
      <path
        d="M0 180V165H25V155H50V145H75V135H95V120H120V130H145V115H165V105H190V120H215V110H235V100H260V115H285V125H310V110H335V120H360V130H385V115H405V105H430V120H455V130H475V115H500V105H530V115H555V125H580V115H610V125H635V135H660V125H685V115H710V125H740V135H765V125H790V115H820V125H845V115H875V125H905V135H930V125H955V115H985V125H1010V135H1040V125H1070V115H1100V130H1125V140H1150V130H1175V140H1200V150H1230V155H1260V160H1290V165H1320V170H1370V175H1440V180Z"
        fill="rgba(255,255,255,0.025)"
      />
      <path
        d="M0 180V172H30V168H60V162H90V158H115V150H140V158H165V165H190V158H215V162H240V170H270V172H300V168H330V160H355V168H385V172H415V168H445V162H470V168H500V175H535V172H565V168H595V162H625V168H655V172H685V168H715V162H745V168H775V172H810V168H845V162H875V168H905V172H935V168H965V162H995V168H1025V172H1055V168H1085V162H1115V170H1145V173H1175V170H1205V165H1235V170H1265V175H1295V173H1325V170H1360V175H1400V178H1440V180Z"
        fill="rgba(255,255,255,0.032)"
      />
      <line x1="240" y1="20" x2="240" y2="8" stroke="rgba(79,127,255,0.3)" strokeWidth="1.5" />
      <circle cx="240" cy="7" r="2" fill="rgba(79,127,255,0.5)" />
      <line x1="545" y1="30" x2="545" y2="18" stroke="rgba(155,114,255,0.3)" strokeWidth="1.5" />
      <circle cx="545" cy="17" r="2" fill="rgba(155,114,255,0.5)" />
      <line x1="800" y1="20" x2="800" y2="8" stroke="rgba(79,127,255,0.3)" strokeWidth="1.5" />
      <circle cx="800" cy="7" r="2" fill="rgba(79,127,255,0.4)" />
    </svg>
  )
}

// ── Industry icons ────────────────────────────────────────────────────────────

function IndustryIcon({ industry }: { industry: string }) {
  const stroke = "currentColor"
  const props = {
    viewBox: "0 0 20 20",
    fill: "none",
    stroke,
    strokeWidth: "1.4",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 18,
    height: 18,
  }
  if (industry === "cleaning companies") return (
    <svg {...props}>
      <path d="M8 3h5v3H8z" /><path d="M10.5 6v3" /><path d="M5 9h10l-1.5 8h-7L5 9z" />
    </svg>
  )
  if (industry === "auto detailers") return (
    <svg {...props}>
      <path d="M3 12l2.5-5h9l2.5 5" /><rect x="2" y="12" width="16" height="4" rx="1.5" />
      <circle cx="6" cy="16" r="1.5" /><circle cx="14" cy="16" r="1.5" />
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
    </svg>
  )
  if (industry === "roofing contractors") return (
    <svg {...props}>
      <path d="M2 10L10 2l8 8" /><path d="M4 10v8h12v-8" /><path d="M8 18v-6h4v6" />
    </svg>
  )
  if (industry === "contractors") return (
    <svg {...props}>
      <path d="M13 3l4 4-9.5 9.5-4 .5.5-4L13 3z" />
    </svg>
  )
  if (industry === "plumbers") return (
    <svg {...props}>
      <path d="M14 3a3 3 0 0 1 0 4.2L8.5 12.7a3 3 0 1 1-4.2-4.2L9.8 3A3 3 0 0 1 14 3z" />
      <circle cx="5.5" cy="15.5" r="1.5" />
    </svg>
  )
  if (industry === "med spas") return (
    <svg {...props}>
      <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
    </svg>
  )
  if (industry === "electricians") return (
    <svg {...props}>
      <path d="M13 2L7 11h5l-3 7 9-10h-5l3-6z" />
    </svg>
  )
  return (
    <svg {...props}><circle cx="10" cy="10" r="4" /><path d="M10 6v4l3 3" /></svg>
  )
}

// ── Hero dashboard ────────────────────────────────────────────────────────────

const DALLAS_METRICS = {
  searches: "8,500+/mo",
  mobilePct: "74%",
  competition: "High",
  missedLeads: "$4,200/mo",
  responseWindow: "< 3 min",
}

function HeroDashboard({ inView }: { inView: boolean }) {
  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main card */}
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
              Local Search Traffic · Dallas, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                {DALLAS_METRICS.searches}
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

        <div className="px-5 pt-3 pb-0 flex-1 min-h-0">
          <svg viewBox="0 0 260 75" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dallasHeroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F7FFF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="dallasHeroLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4F7FFF" />
                <stop offset="100%" stopColor="#9B72FF" />
              </linearGradient>
            </defs>
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="50" x2="260" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <motion.path
              d="M 0,68 C 32,64 32,55 65,49 C 98,43 105,36 130,31 C 158,26 178,17 210,11 C 232,7 248,5 260,3 L 260,75 L 0,75 Z"
              fill="url(#dallasHeroFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 1.0 }}
            />
            <motion.path
              d="M 0,68 C 32,64 32,55 65,49 C 98,43 105,36 130,31 C 158,26 178,17 210,11 C 232,7 248,5 260,3"
              fill="none"
              stroke="url(#dallasHeroLine)"
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

        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Mobile Traffic", value: DALLAS_METRICS.mobilePct, color: "#B87FFF" },
            { label: "Decision Window", value: DALLAS_METRICS.responseWindow, color: "#4FC8FF" },
            { label: "Competition", value: DALLAS_METRICS.competition, color: "#FB923C" },
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

      {/* Lead notification */}
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
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">Dallas HVAC Co.</p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">Submitted form · Website Design</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Search rankings */}
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
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">DFW Visibility</span>
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

      {/* Conversion badge */}
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

// ── Dallas Market Context section ─────────────────────────────────────────────

function DallasMarketSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const marketStats = [
    {
      value: "7.5M+",
      label: "DFW Metro Population",
      sub: "4th largest metro in the United States",
      color: "#7BA3FF",
      bg: "rgba(79,127,255,0.08)",
      border: "rgba(79,127,255,0.16)",
    },
    {
      value: "8,500+",
      label: "Monthly Local Searches",
      sub: "Service business queries in the Dallas area",
      color: "#B87FFF",
      bg: "rgba(155,114,255,0.08)",
      border: "rgba(155,114,255,0.16)",
    },
    {
      value: "74%",
      label: "Mobile Search Rate",
      sub: "Of Dallas local service searches on phones",
      color: "#4FC8FF",
      bg: "rgba(79,200,255,0.08)",
      border: "rgba(79,200,255,0.16)",
    },
  ]

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-co-surface" />
      <div className="absolute inset-0 bg-grid-sm opacity-[0.18]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          >
            <SectionLabel className="mb-5">Dallas Market Context</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-6">
              Why Dallas is one of the most{" "}
              <span className="text-gradient-accent">competitive local markets</span>{" "}
              in the US
            </h2>
            <div className="space-y-4 text-co-text-muted text-base md:text-[17px] leading-relaxed">
              <p>
                The Dallas-Fort Worth Metroplex is the fourth largest metro area in the United States and one of the fastest growing. Over 100,000 people relocated to DFW in 2023 alone. That inflow means relentless demand for home services, but it also means a constant supply of new service businesses entering the market.
              </p>
              <p>
                Dallas proper has 1.3 million residents, but the real competitive battleground spans a much larger geography: Plano, Frisco, McKinney, Allen, Garland, Irving, Arlington, and the Mid-Cities between Dallas and Fort Worth each represent distinct local search markets. A cleaning company in Uptown Dallas isn&apos;t just competing with Uptown businesses — they&apos;re potentially competing with operations in Richardson or Addison that have built strong enough online presences to capture searches across the metro.
              </p>
              <p>
                Most Dallas service businesses are still running on referrals and outdated digital infrastructure. That gap between where the market is and where most businesses&apos; online presence sits is the opportunity, and it closes faster than most owners expect once a competitor decides to close it first.
              </p>
            </div>
          </motion.div>

          {/* Right: stat cards + note */}
          <div className="flex flex-col gap-4">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl p-5 flex items-center gap-5"
                style={{ background: "#0D0D11", border: `1px solid ${stat.border}` }}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.15 + i * 0.1 }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: stat.bg }}
                >
                  <span
                    className="font-black tracking-tighter leading-none"
                    style={{ color: stat.color, fontSize: stat.value.length > 4 ? "0.9rem" : "1.25rem" }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-co-text text-[14px] leading-snug mb-0.5">{stat.label}</p>
                  <p className="text-[12px] text-co-text-muted leading-snug">{stat.sub}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="rounded-2xl p-5 mt-1"
              style={{ background: "rgba(79,127,255,0.04)", border: "1px solid rgba(79,127,255,0.14)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.5 }}
            >
              <p className="text-[12.5px] text-co-text-muted leading-relaxed">
                <span className="text-co-text font-semibold">The DFW advantage:</span> High search volume, above-average household income, and a service business market where digital competition hasn&apos;t yet caught up to the demand. That window is open, but not indefinitely.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── AI Search section ─────────────────────────────────────────────────────────

function DallasAISearchSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const aiPlatforms = ["ChatGPT", "Perplexity", "Google AI", "Gemini"]

  const aiFeatures = [
    {
      Icon: Layers,
      title: "Clear entity identification",
      body: "Every page signals who you are, what you do, and where you serve, structured so AI engines can extract and cite that information accurately in response to local queries.",
    },
    {
      Icon: Search,
      title: "Conversational FAQ structure",
      body: "FAQ sections formatted for AI extraction: direct question → direct answer, covering the queries Dallas customers ask most in natural language.",
    },
    {
      Icon: BarChart3,
      title: "Semantic heading hierarchy",
      body: "H1 → H2 → H3 structure that maps to topical relationships, helping both Google and AI systems understand the authoritative scope of your content.",
    },
    {
      Icon: ShieldCheck,
      title: "Schema markup",
      body: "LocalBusiness, FAQPage, Service, and BreadcrumbList schema built into every page, the structured data that AI engines use to identify and trust your business.",
    },
    {
      Icon: Brain,
      title: "Topical authority architecture",
      body: "Internal linking across related service and city pages builds topical depth, the signal that tells AI engines you are the authoritative source on web design for Dallas businesses.",
    },
    {
      Icon: Activity,
      title: "Natural language content",
      body: "Every page is written in the conversational register that answer engines prefer, not keyword-stuffed copy that reads well to no one, human or machine.",
    },
  ]

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-co-bg" />
      <div className="absolute inset-0 bg-dot opacity-[0.06]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div
        className="orb w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(155,114,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12"
        >
          <div>
            <motion.div variants={headerLabel} className="mb-5">
              <SectionLabel>GEO + AEO Optimization</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
              Built for Google{" "}
              <span className="text-gradient-accent">and AI search</span>
            </motion.h2>
          </div>
          <motion.div variants={headerP} className="space-y-4">
            <p className="text-co-text-muted text-base md:text-[17px] leading-relaxed">
              When someone asks ChatGPT, Perplexity, or Google&apos;s AI Overview to recommend the best web design agency in Dallas, or the best HVAC company in Frisco, AI engines pull those answers from websites they can read, understand, and trust.
            </p>
            <p className="text-co-text-muted text-base leading-relaxed">
              The Dallas businesses that get cited by AI search will be the ones with structured, semantically rich, clearly identified content. ClevOps builds that architecture into every website we deliver.
            </p>
          </motion.div>
        </motion.div>

        {/* AI platform badges */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.3 }}
        >
          {aiPlatforms.map((platform) => (
            <div
              key={platform}
              className="flex items-center gap-2 px-4 py-2 rounded-xl"
              style={{
                background: "rgba(155,114,255,0.06)",
                border: "1px solid rgba(155,114,255,0.18)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#B87FFF" }} />
              <span className="text-[12px] font-semibold text-co-text-secondary">{platform}</span>
            </div>
          ))}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{
              background: "rgba(79,127,255,0.06)",
              border: "1px solid rgba(79,127,255,0.18)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7BA3FF" }} />
            <span className="text-[12px] font-semibold text-co-text-secondary">Bing Copilot</span>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.075)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE_PREMIUM, delay: 0.4 + i * 0.08 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(155,114,255,0.08)", border: "1px solid rgba(155,114,255,0.18)" }}
              >
                <feature.Icon size={16} style={{ color: "#B87FFF" }} />
              </div>
              <p className="font-semibold text-co-text text-sm leading-snug">{feature.title}</p>
              <p className="text-[12.5px] text-co-text-muted leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 rounded-2xl px-8 py-5"
          style={{ background: "rgba(155,114,255,0.04)", border: "1px solid rgba(155,114,255,0.12)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.9 }}
        >
          <p className="text-sm md:text-base text-co-text-secondary leading-relaxed">
            <span className="font-bold text-co-text">Local SEO and AI readability share the same foundations.</span>{" "}
            A website Google can understand is a website AI engines can understand. The Dallas businesses that rank on page one today will be the ones AI search recommends tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Conversion factors section ────────────────────────────────────────────────

function DallasConversionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  const factors = [
    {
      num: "01",
      title: "Sub-2 second mobile load",
      body: "Every additional second of load time reduces conversion by 7–20%. In Dallas's mobile-first search environment, speed is not a nice-to-have. It's the first gate visitors pass through.",
      color: "#7BA3FF",
      border: "rgba(79,127,255,0.22)",
    },
    {
      num: "02",
      title: "Trust visible without scrolling",
      body: "Reviews, credentials, and social proof must appear in the first visible screen. Dallas customers who don't see trust signals above the fold leave before they ever see your portfolio.",
      color: "#B87FFF",
      border: "rgba(155,114,255,0.22)",
    },
    {
      num: "03",
      title: "Positioning clarity in 3 seconds",
      body: "Visitors decide within 3 seconds whether they're in the right place. What you do, where you serve, and why you're different must be immediately legible, no detective work required.",
      color: "#4FC8FF",
      border: "rgba(79,200,255,0.22)",
    },
    {
      num: "04",
      title: "Single dominant CTA",
      body: "One clear action (call or book) must be more prominent than everything else on the page. Competing CTAs dilute attention. The businesses converting best in Dallas have ruthless hierarchy.",
      color: "#7BA3FF",
      border: "rgba(79,127,255,0.22)",
    },
    {
      num: "05",
      title: "Service area specificity",
      body: "A customer in Frisco needs immediate confirmation you serve Frisco, not a vague 'Dallas area' claim buried in fine print. Service area clarity is a conversion factor, not just an SEO element.",
      color: "#B87FFF",
      border: "rgba(155,114,255,0.22)",
    },
  ]

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#060608]" />
      <div className="absolute inset-0 bg-dot opacity-[0.08]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="max-w-2xl mb-12"
        >
          <SectionLabel className="mb-5">Conversion Architecture</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4">
            What makes a Dallas website{" "}
            <span className="text-gradient-accent">actually convert</span>
          </h2>
          <p className="text-co-text-muted text-base md:text-[17px] leading-relaxed">
            Most Dallas service websites look acceptable and produce nothing. These five factors determine whether a visitor becomes a lead, and most local sites fail on three or more simultaneously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {factors.map((factor, i) => (
            <motion.div
              key={factor.num}
              className="group relative rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: "rgba(255,255,255,0.016)", border: `1px solid rgba(255,255,255,0.07)` }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: i * 0.09 }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${factor.color}, transparent 60%)` }}
              />
              <div className="flex items-center gap-3">
                <span
                  className="text-[10px] font-black tracking-[0.24em] uppercase"
                  style={{ color: factor.color }}
                >
                  {factor.num}
                </span>
                <div
                  className="flex-1 h-px opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, ${factor.color}, transparent)` }}
                />
              </div>
              <h3 className="font-bold text-co-text text-[14.5px] leading-snug">{factor.title}</h3>
              <p className="text-[12.5px] text-co-text-muted leading-relaxed flex-1">{factor.body}</p>
            </motion.div>
          ))}

          {/* Final card: CTA */}
          <motion.div
            className="rounded-2xl p-6 flex flex-col justify-between"
            style={{ background: "rgba(79,127,255,0.05)", border: "1px solid rgba(79,127,255,0.18)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.45 }}
          >
            <div>
              <p className="font-bold text-co-text text-sm mb-3">
                ClevOps builds all five into every website we deliver, not as optional add-ons, but as core architecture.
              </p>
              <p className="text-[12.5px] text-co-text-muted leading-relaxed">
                Dallas businesses that fix all five conversion factors simultaneously see meaningful improvement in lead volume within 30 days of launch.
              </p>
            </div>
            <div className="mt-6">
              <Button href="/contact" variant="primary" size="md" icon={<ArrowUpRight size={14} />}>
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function DallasPageContent() {
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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: "Texas", href: "/locations/texas" },
    { label: "Dallas" },
  ]

  const exploreLinks: InternalLink[] = [
    { label: "All Texas cities", href: "/locations/texas" },
    { label: "Dallas web design", href: "/website-design-dallas" },
    { label: "Fort Worth", href: "/locations/texas/fort-worth" },
    { label: "Houston", href: "/locations/texas/houston" },
    { label: "Austin", href: "/locations/texas/austin" },
    { label: "Arlington", href: "/locations/texas/arlington" },
    { label: "Cleaning business websites", href: "/website-design/cleaning-business" },
    { label: "HVAC websites", href: "/website-design/hvac" },
    { label: "Roofing websites", href: "/website-design/roofing" },
    { label: "Website design services", href: "/website-design" },
    { label: "Start your project", href: "/contact" },
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
                  Dallas, Texas · DFW Metro
                </span>
              </motion.div>

              <h1 className="font-black tracking-[-0.03em] leading-[1.05] mb-7" style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
                {[
                  { text: "Website Design for", delay: 0.15 },
                  { text: "Dallas Service", delay: 0.27, accent: true },
                  { text: "Businesses", delay: 0.39 },
                ].map(({ text, delay, accent }) => (
                  <div key={text} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", opacity: 0 }}
                      animate={heroInView ? { y: "0%", opacity: 1 } : {}}
                      transition={{ duration: 0.85, ease: EASE_PREMIUM, delay }}
                      className="block"
                    >
                      {accent ? <span className="text-gradient-accent">{text}</span> : text}
                    </motion.div>
                  </div>
                ))}
              </h1>

              <motion.p
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
                style={{ color: "#A0A8BC" }}
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.55 }}
              >
                Dallas has one of the fastest-growing home services markets in the US, with cleaning, roofing, HVAC, and detailing businesses competing hard for the same local searches. The ones winning that competition have websites built to rank, convert, and capture leads around the clock.
              </motion.p>

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

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.84 }}
              >
                {[
                  { value: "14 Days", label: "Avg. launch" },
                  { value: "From $999", label: "One-time build" },
                  { value: "7.5M+", label: "DFW Metro" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    <span className="text-xl font-black tracking-tighter text-gradient-accent">{stat.value}</span>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-co-text-muted">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <HeroDashboard inView={heroInView} />
          </div>
        </div>
      </section>

      {/* ── Dallas Market Context ─────────────────────────────────────────── */}
      <DallasMarketSection />

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
                Why most Dallas service websites{" "}
                <span style={{ background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  fail to convert
                </span>
              </motion.h2>
            </div>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Most local service sites in Dallas look acceptable on the surface and produce nothing.{" "}
              <span className="text-co-text-secondary">These are the four patterns we fix, every time.</span>
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {DALLAS_FAILURE_REASONS.map((item, i) => {
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
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[10.5px] font-black tracking-[0.25em] uppercase" style={{ color: a.numColor }}>{item.num}</span>
                        <span className="text-[9.5px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide" style={{ color: a.costText, background: a.costBg, border: `1px solid ${a.costBorder}` }}>
                          {item.cost}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: a.iconBg, border: `1px solid ${a.iconBorder}` }}>
                          <item.Icon size={18} style={{ color: a.iconColor }} />
                        </div>
                        <div className="text-right">
                          <div className="font-black leading-none tracking-tighter" style={{ color: a.stat, fontSize: item.impact.length <= 3 ? "2rem" : item.impact.length <= 5 ? "1.7rem" : "1.35rem" }}>
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

          <motion.div
            className="mt-10 md:mt-14 rounded-2xl px-8 py-5 text-center"
            style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.10)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.7 }}
          >
            <p className="text-sm md:text-base font-medium text-co-text leading-relaxed">
              Every day a Dallas competitor with a proper digital system is taking inquiries that could be yours.{" "}
              <span className="font-bold" style={{ background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                We fix all four, in 14 days.
              </span>
            </p>
          </motion.div>

          <motion.div
            className="mt-10 md:mt-12 max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.0 }}
          >
            <div className="h-px w-12 bg-co-accent/40 mb-7" />
            <p className="text-xl md:text-2xl font-medium text-co-text leading-relaxed">
              Every one of these is fixable. Fast.{" "}
              <span className="text-co-text-secondary">
                The Dallas businesses that fix them first don&apos;t just catch up. They establish a digital position their competitors will spend months trying to close.
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
              The Dallas{" "}
              <span className="text-gradient-accent">opportunity snapshot</span>
            </h2>
            <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Dallas service businesses face a specific competitive environment. Here&apos;s what the local market data shows.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {([
              { label: "Local Competition",  value: "High",         sub: "in your niche",                accent: "#F87171", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.16)"   },
              { label: "Monthly Searches",   value: "8,500+/mo",    sub: "local service searches",       accent: "#7BA3FF", bg: "rgba(79,127,255,0.08)",  border: "rgba(79,127,255,0.16)"  },
              { label: "Mobile Traffic",     value: "74%",          sub: "of local searches",            accent: "#B87FFF", bg: "rgba(155,114,255,0.08)", border: "rgba(155,114,255,0.16)" },
              { label: "Missed Lead Risk",   value: "$4,200/mo",    sub: "est. monthly w/o proper site", accent: "#FB923C", bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.16)"  },
              { label: "Decision Window",    value: "< 3 min",      sub: "before visitor bounces",       accent: "#4FC8FF", bg: "rgba(79,200,255,0.08)",  border: "rgba(79,200,255,0.16)"  },
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
                <div className="w-9 h-9 rounded-xl mb-1 flex items-center justify-center shrink-0" style={{ background: metric.bg }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: metric.accent }} />
                </div>
                <div
                  className="font-black leading-none tracking-tighter"
                  style={{ color: metric.accent, fontSize: metric.value.length > 8 ? "1.15rem" : metric.value.length > 5 ? "1.5rem" : "1.9rem" }}
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
                <SectionLabel>Who We Serve in Dallas</SectionLabel>
              </motion.div>
              <motion.h2 variants={headerH2} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                Dallas service businesses{" "}
                <span className="text-gradient-accent">we build for</span>
              </motion.h2>
            </div>
            <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Every service niche in Dallas has different conversion challenges, different customer psychology, and different search behavior. We build specifically for each, not a generic template applied across the board.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {DALLAS_INDUSTRIES.map((industry, i) => (
              <motion.div key={industry.name} variants={staggerItemCard} whileHover={springHoverCard}>
                <SpotlightCard
                  spotlightColor={industry.accent.spotlightColor}
                  className="h-full rounded-2xl border border-co-border bg-co-card transition-colors duration-300 hover:border-co-border-hover hover:shadow-card-hover"
                >
                  <div className="relative h-full flex flex-col p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                        style={{
                          background: industry.accent.accentColor,
                          borderColor: industry.accent.accentBorder,
                          color: industry.accent.accentBorder,
                        }}
                      >
                        <IndustryIcon industry={industry.icon} />
                      </div>
                      <span className="text-4xl font-black leading-none mt-1 text-co-text-muted/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-bold text-co-text text-base mb-1 leading-snug">{industry.name}</p>
                    <p className="text-[11.5px] font-semibold mb-3 leading-snug" style={{ color: industry.accent.accentBorder }}>
                      {industry.headline}
                    </p>
                    <p className="text-sm text-co-text-muted leading-relaxed flex-1">{industry.body}</p>
                    {industry.nicheSlug && (
                      <Link
                        href={`/website-design/${industry.nicheSlug}`}
                        className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold transition-colors duration-200 hover:opacity-100"
                        style={{ color: industry.accent.accentBorder, opacity: 0.7 }}
                      >
                        View {industry.name.toLowerCase()} websites
                        <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
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

      {/* ── Local Proof ───────────────────────────────────────────────────── */}
      <LocalProofSection data={dallasData} nearbyLocations={dallasNearbyLocations} />

      {/* ── Deliverables ──────────────────────────────────────────────────── */}
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
                Everything a Dallas service business needs{" "}
                <span className="text-gradient-accent">to compete online</span>
              </motion.h2>
              <motion.p variants={headerP} className="text-co-text-muted text-base md:text-lg leading-relaxed mb-8">
                No packages. No upsells. No surprises. Every website ships complete, because a half-built site performs no better than no site at all.
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
              {DALLAS_DELIVERABLES.map((item) => (
                <motion.li key={item} variants={staggerItemRow} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-co-text-secondary leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Local SEO section ─────────────────────────────────────────────── */}
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
              <SectionLabel className="mb-5">Dallas Local SEO Strategy</SectionLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
                Built to rank across{" "}
                <span className="text-gradient-accent">DFW</span>
              </h2>
            </div>
            <p className="text-co-text-muted text-base md:text-lg leading-relaxed">
              Every site we build is structured for local search visibility across Dallas and the surrounding DFW suburbs, not just a design handoff. Dallas customers are searching for your service right now. We build the infrastructure that captures them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DALLAS_LOCAL_SEO_ITEMS.map((item, i) => (
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

      {/* ── Local Insights ────────────────────────────────────────────────── */}
      <LocalInsightsSection city="Dallas" />

      {/* ── Search Funnel ─────────────────────────────────────────────────── */}
      <LocalSearchFunnelSection
        city="Dallas"
        state="Texas"
        topIndustries={["cleaning companies", "auto detailers", "roofing contractors", "HVAC companies", "landscapers"]}
      />

      {/* ── AI Search section ─────────────────────────────────────────────── */}
      <DallasAISearchSection />

      {/* ── Conversion section ────────────────────────────────────────────── */}
      <DallasConversionSection />

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
              items={DALLAS_FAQ_ITEMS}
              title="Common questions from Dallas business owners"
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
          <InternalLinks title="More Texas cities &amp; services" links={exploreLinks} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
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
            Ready to grow your Dallas service business?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "#A0A8BC" }}
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.22 }}
          >
            We&apos;ll build a live demo of your new website, custom to your Dallas business (no templates, no filler) so you can see exactly what it looks like before committing to anything.
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
            {["No upfront payment required", "Response within 24 hours", "Built for Dallas businesses"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-co-accent/40" />
                <span className="text-[11px] font-medium text-co-text-muted">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Schema ────────────────────────────────────────────────────────── */}
      <SchemaMarkup
        type="LocalBusiness"
        city="Dallas"
        state="Texas"
        stateSlug="texas"
        slug="dallas"
        description="ClevOps builds high-converting websites for Dallas service businesses: HVAC, cleaning companies, roofers, contractors, auto detailers, landscapers, plumbers, electricians, and med spas. Local SEO built in. 14-day delivery from $999."
      />
      <SchemaMarkup type="FAQPage" items={DALLAS_FAQ_ITEMS} />
      <SchemaMarkup
        type="BreadcrumbList"
        items={breadcrumbs.map((b) => ({ name: b.label, href: b.href }))}
      />
    </main>
  )
}
