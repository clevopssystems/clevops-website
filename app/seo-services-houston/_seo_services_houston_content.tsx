"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  TrendingUp,
  Search,
  Smartphone,
  MapPin,
  Brain,
  Layers,
  Target,
  Globe,
  BarChart3,
  Activity,
  Link2,
  FileText,
  Gauge,
  Building2,
} from "lucide-react"
import { SchemaMarkup } from "@/components/seo/SchemaMarkup"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { BreadcrumbNav } from "@/components/seo/BreadcrumbNav"
import { LocalFAQ, type FAQItem } from "@/components/seo/LocalFAQ"
import {
  EASE_PREMIUM,
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerGrid,
  staggerItemCard,
} from "@/lib/animations"

const ease = EASE_PREMIUM

// ── FAQ data ──────────────────────────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much do SEO services cost in Houston?",
    answer:
      "SEO pricing in Houston depends on scope, competitive intensity, and what your current site needs. At ClevOps, engagements are structured around your business goals, the competitive landscape in your specific niche and service area, and the technical state of your existing site. Houston's service business market is large and geographically spread across dozens of suburbs. The right question is not the monthly cost but the value of consistent inbound calls from customers who are already searching for what you offer.",
  },
  {
    question: "How long does SEO take to show results in Houston?",
    answer:
      "Meaningful local SEO results in Houston typically become visible within 60 to 120 days for lower-competition niches and 4 to 8 months for categories like roofing, HVAC, and contracting. Houston's size works in your favor in some ways: suburban markets like Katy, Sugar Land, and Pearland often have lower digital competition than central Houston, meaning targeted local SEO can generate results faster in those areas. Technical fixes and Google Business Profile optimization often deliver early wins while longer-term content and authority work compounds.",
  },
  {
    question: "Is local SEO important for Houston businesses?",
    answer:
      "Houston is the fourth-largest city in the US and one of the most geographically sprawling metros in the country. Service businesses here compete not just city-wide but across dozens of distinct suburbs and ZIP codes. Local SEO is what determines whether a homeowner in Pearland searching for an HVAC company finds you or finds a competitor. Without it, your website has no systematic way to capture the search traffic that represents ready-to-hire customers across Houston's vast service area.",
  },
  {
    question: "What is Google Maps SEO and why does it matter in Houston?",
    answer:
      "Google Maps SEO refers to optimizing your Google Business Profile and local signals so your business appears in the map pack at the top of local search results. In Houston, where customers search across a massive geographic area, the map pack is often the first and only result they engage with before calling. A contractor in Katy, an HVAC company in The Woodlands, or a cleaning service in Sugar Land all need map pack visibility in their specific service areas, not just a general Houston ranking. Achieving that requires deliberate GBP optimization, service area configuration, review strategy, and website signals that reinforce local relevance.",
  },
  {
    question: "Can SEO generate more phone calls for Houston businesses?",
    answer:
      "Yes. The majority of local service calls in Houston originate from Google searches or Google Maps results. Customers searching 'roofing contractor Houston' or 'HVAC repair Katy' are ready to hire, not browsing. SEO that puts your business in front of those searches at the moment intent is highest is one of the most reliable sources of inbound calls. The focus has to be on the keywords that represent buyers, not just traffic, and on pages that convert those visitors into calls rather than just satisfying the search.",
  },
  {
    question: "Do Houston contractors need SEO?",
    answer:
      "Contractors are among the highest-intent local search categories, and Houston has one of the densest contractor markets in the US. When a homeowner needs a roofing estimate after a storm or a general contractor for a remodel, they search. The contractors ranking in those results get the calls. Houston's suburban spread means there are also significant opportunities in specific service areas like Katy, Spring, Pearland, and The Woodlands that are less competitive than central Houston but still carry substantial search volume.",
  },
  {
    question: "What is semantic SEO?",
    answer:
      "Semantic SEO is the practice of building content around topics, entities, and concepts rather than simply repeating keywords. Search engines understand meaning and context now, not just keyword frequency. A semantically structured page about plumbing services in Houston signals expertise through comprehensive coverage of related topics, clear entity signals, and content that directly answers the questions customers ask. This earns durable rankings and AI search citations rather than rankings that are fragile to algorithm changes.",
  },
  {
    question: "What is GEO and AEO optimization?",
    answer:
      "GEO stands for Generative Engine Optimization and AEO stands for Answer Engine Optimization. Both refer to structuring your website and content so that AI-powered search tools like ChatGPT, Perplexity, Gemini, Bing AI, and Google AI Overviews surface your business when answering relevant queries. These tools are increasingly used by Houston customers to find local service businesses. GEO and AEO optimization ensures your content is structured so AI engines can extract, understand, and cite your business accurately in generated answers.",
  },
  {
    question: "How does AI search affect Houston businesses?",
    answer:
      "AI-powered search tools are changing how customers find local businesses. When someone asks ChatGPT or Perplexity for the best roofing company in Houston or a reliable HVAC contractor in The Woodlands, the businesses mentioned are those with well-structured websites, strong local signals, clear entity information, and authoritative content. Houston's large market means the businesses investing in AI-ready SEO structures now are building advantages before this shift becomes standard knowledge among local competitors.",
  },
  {
    question: "Can you improve SEO on my existing Houston website?",
    answer:
      "Yes. Most Houston businesses we work with have existing websites that underperform in local search. The process starts with a technical and content audit to identify where the site is losing rankings, what structural gaps exist, and what local signal work is needed. Targeted improvements to an existing site often produce faster initial results than a complete rebuild, particularly when the domain already has some history. We work with what you have and build toward what the competitive landscape requires.",
  },
  {
    question: "Is mobile SEO important for Houston businesses?",
    answer:
      "Essential. Houston's sprawl means a large portion of local searches happen on phones while people are on the move, comparing options in real time. Over 70% of local service searches in the Houston metro area originate from mobile devices. Google evaluates your mobile experience as the primary signal for ranking. A site that loads slowly on mobile, displays incorrectly, or makes it difficult to call or book is penalized both in rankings and in conversion rate, which compounds the SEO investment loss.",
  },
  {
    question: "Do service businesses in the Houston suburbs need their own SEO strategy?",
    answer:
      "Yes. A business serving Sugar Land, Katy, Pearland, or The Woodlands needs SEO that targets those specific areas, not just a generic Houston approach. Suburb-level searches like 'cleaning service Katy' or 'plumber Sugar Land' have real search volume and often face less competition than Houston-wide terms. Service area pages, suburb-specific content, and local signals configured for each area you serve are what capture that geography. A Houston-only strategy leaves significant suburban search volume unaddressed.",
  },
  {
    question: "Does the Energy Corridor or Texas Medical Center area require specific SEO?",
    answer:
      "Businesses serving the Energy Corridor, Texas Medical Center, or other distinct Houston commercial zones benefit from SEO that captures searches specific to those areas. Cleaning services serving commercial clients near TMC, logistics businesses in the industrial corridor, or auto detailers serving Energy Corridor professionals all benefit from service area targeting that goes beyond a generic Houston approach. We configure service area structures to reflect how your specific customers actually search.",
  },
  {
    question: "Is SEO worth the investment for small Houston service businesses?",
    answer:
      "For most Houston local service businesses, SEO produces a higher long-term return than paid advertising because organic rankings compound over time while paid traffic stops the moment spend stops. A small cleaning company or plumbing business ranking consistently for relevant Houston searches receives ongoing inbound calls without paying per click. The investment horizon is longer than paid ads, but the durable visibility and compounding return is why established Houston businesses treat SEO as a core business asset rather than an optional marketing expense.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const RANK_STRUGGLES = [
  {
    heading: "No geographic depth for Houston's sprawl",
    body: "A single Houston page cannot capture searches in Katy, Sugar Land, Pearland, and The Woodlands simultaneously. Without dedicated service area pages, you are invisible in the suburbs where much of Houston's search volume actually lives.",
  },
  {
    heading: "Thin, keyword-repeated service pages",
    body: "Pages that repeat 'Houston' and a service name without substantive content signal low quality to Google. Houston's competitive service categories require depth and specificity, not word repetition.",
  },
  {
    heading: "Weak or unclaimed Google Business Profile",
    body: "The Map Pack dominates local Houston search results. Businesses without fully optimized GBP profiles, correct service areas, and active review management are invisible in the map results that drive most local calls.",
  },
  {
    heading: "Slow mobile load times",
    body: "Houston's mobile-search-heavy population searches on the go across a city with long commute times. A site that loads slowly on mobile loses rankings and conversions simultaneously, compounding the SEO investment gap.",
  },
  {
    heading: "No local topical authority",
    body: "Ranking in a market as competitive as Houston requires semantic depth across related topics. A business with one generic services page cannot compete with a site that comprehensively covers its niche.",
  },
  {
    heading: "Inconsistent NAP across directories",
    body: "Houston businesses with inconsistent name, address, and phone information across Google, Yelp, and other directories confuse search engines about their location and legitimacy, suppressing local rankings.",
  },
  {
    heading: "Poor internal link architecture",
    body: "Sites with flat or disconnected internal structures distribute no authority between pages and leave ranking potential untapped. Internal linking is especially important for multi-area Houston businesses.",
  },
  {
    heading: "No schema markup",
    body: "Schema tells search engines what your content means, not just what it says. Without it, your pages are harder to surface in rich results, AI answers, and local knowledge panels.",
  },
  {
    heading: "Generic city pages with no unique context",
    body: "A page that inserts 'Houston' into a generic template provides no value to users or search engines. It rarely ranks, and when it does, it converts poorly because it says nothing meaningful about the local market.",
  },
  {
    heading: "Not structured for AI search visibility",
    body: "AI tools like ChatGPT and Perplexity now answer local business queries directly. Sites without clear headings, direct answers, structured FAQs, and entity signals are not surfaced in AI-generated responses.",
  },
]

const SEO_SERVICES = [
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Complete local search optimization targeting Houston-specific searches and suburb-level queries across Katy, Sugar Land, Pearland, The Woodlands, and the broader Houston metro. Service area pages, local signals, and citation authority built to improve visibility across the searches that produce real calls.",
  },
  {
    icon: Globe,
    title: "Google Maps Optimization",
    body: "Google Business Profile audit, optimization, and ongoing management. Category selection, service area configuration for Houston's sprawl, photo optimization, review strategy, and Q&A management to improve Map Pack visibility for high-intent Houston searches.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    body: "Core Web Vitals, crawlability, indexation, site architecture, canonical structure, schema implementation, and mobile performance. The technical foundation that determines whether your other SEO efforts actually produce rankings in Houston's competitive market.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    body: "Title tags, meta descriptions, heading structure, semantic content, internal anchor text, and page-level optimization aligned with search intent. Every page structured to compete for the specific queries Houston customers use when they are ready to hire.",
  },
  {
    icon: Link2,
    title: "Internal Linking Strategy",
    body: "A deliberate internal link architecture that distributes authority across your site, helps search engines understand page relationships, and guides users toward conversion pages from every entry point across your Houston service area coverage.",
  },
  {
    icon: Brain,
    title: "Semantic SEO",
    body: "Content structured around topics and entities rather than keyword repetition. Semantic depth signals expertise to search engines, earns durable rankings, and satisfies the actual intent behind Houston customer searches.",
  },
  {
    icon: Activity,
    title: "GEO and AEO Optimization",
    body: "Structuring content and technical signals so AI search engines can extract, understand, and cite your business accurately. Optimized for ChatGPT, Perplexity, Gemini, Bing AI, and Google AI Overviews as they field Houston-area business queries.",
  },
  {
    icon: Layers,
    title: "Content Strategy",
    body: "A topical content plan mapped to how Houston customers search across the full buyer journey. Every piece of content built to serve both a ranking purpose and a conversion purpose.",
  },
  {
    icon: Building2,
    title: "Service Page SEO",
    body: "Dedicated, SEO-optimized pages for each service and service area across the Houston metro. The specificity and depth that earns rankings for the high-intent queries driving quote requests and booked calls.",
  },
  {
    icon: Target,
    title: "Conversion SEO",
    body: "SEO that drives the right traffic and converts it. Intent alignment, page structure, CTA placement, and local trust signals that connect search visibility directly to revenue for Houston service businesses.",
  },
]

const HOUSTON_INDUSTRIES = [
  {
    icon: "🔨",
    name: "Contractors",
    body: "Houston is one of the busiest construction and remodeling markets in the US, with constant residential development across Katy, Cypress, Pearland, and League City. Contractors competing for project bids need to rank for searches like 'general contractor Houston' and 'remodeling contractor Katy' before customers even start comparing quotes. Local SEO builds the search presence that gets you into those consideration sets before a competitor does.",
  },
  {
    icon: "🏠",
    name: "Roofing Companies",
    body: "Houston's Gulf Coast position means hurricane season brings predictable surges in roofing demand, but year-round hail and severe weather events drive consistent search volume. Roofing companies ranking in Google Maps and organic results during weather events capture the majority of inbound calls. SEO built before storm season means visibility at the exact moment homeowners are searching.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Houston's heat and humidity make HVAC one of the highest-urgency service categories in the metro. When AC fails during a Houston summer, customers search fast and call the first business that ranks and looks credible. Map Pack visibility, fast-loading mobile pages, and content optimized for emergency searches like 'AC repair Houston same day' capture the high-value urgent calls that drive HVAC revenue.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Cleaning is one of the most search-driven local service categories, and Houston's residential density across suburbs like Sugar Land and The Woodlands creates consistent search volume. Customers searching 'cleaning service Houston' or 'house cleaning Katy' are ready to hire. Local SEO that covers your specific service areas turns that search volume into a reliable pipeline of new bookings.",
  },
  {
    icon: "🏥",
    name: "Healthcare and Medical Businesses",
    body: "The Texas Medical Center is the world's largest medical complex, and the broader Houston healthcare economy generates substantial local search traffic for medical services, healthcare staffing, and health-adjacent businesses. Healthcare businesses in the TMC area and surrounding neighborhoods benefit from local SEO that captures searches from patients, professionals, and institutions in one of the most concentrated healthcare markets in the world.",
  },
  {
    icon: "🚛",
    name: "Logistics and Industrial Services",
    body: "Houston's port, Energy Corridor, and extensive industrial base create demand for logistics services, industrial cleaning, facilities maintenance, and equipment services that operate largely through local search and business development. B2B service businesses in Houston's industrial economy benefit from SEO that captures the search traffic from the procurement managers, operations leads, and business owners who research vendors online before contact.",
  },
  {
    icon: "🔧",
    name: "Plumbers",
    body: "Plumbing is emergency-driven in Houston, where flooding, aging infrastructure, and high heat can cause urgent situations at any time. The plumber appearing in the Map Pack when someone's pipe fails gets the call. Mobile speed, Map Pack optimization, and content that signals immediate availability and service area coverage are what separate the businesses capturing those calls from the ones missing them.",
  },
  {
    icon: "⚡",
    name: "Electricians",
    body: "Electrical work requires licensed professionals, and Houston customers perform real research before hiring. Local SEO that surfaces your licensing credentials, service area, and customer reviews at the top of relevant searches builds the trust that converts searchers into scheduled jobs, particularly in high-value residential areas like River Oaks, Memorial, and The Woodlands.",
  },
  {
    icon: "🚗",
    name: "Auto Detailing",
    body: "Houston's car culture and warm year-round climate create consistent demand for auto detailing, with premium and mobile services doing especially well. Detailers competing for the premium residential market in areas like Memorial, Sugar Land, and The Woodlands need visibility for searches like 'car detailing Houston' alongside strong visual proof and booking-ready pages that convert searches into appointments.",
  },
  {
    icon: "⚖️",
    name: "Law Firms",
    body: "Legal searches carry some of the highest intent of any local category. Someone searching 'personal injury attorney Houston' or 'family law lawyer Katy' is actively seeking representation. SEO that ranks your firm for practice-area and location searches directly affects how many new clients find you before finding a competitor in one of the largest legal markets in Texas.",
  },
  {
    icon: "🌿",
    name: "Landscaping Companies",
    body: "Houston's climate and suburban residential density create year-round demand for landscaping, lawn care, and outdoor services across the metro and its sprawling suburbs. Landscaping companies covering multiple Houston suburbs benefit from SEO with dedicated service area pages for each market, combined with visual portfolio content that converts searches into quote requests.",
  },
]

const COMPARISON_ROWS = [
  { label: "Keyword strategy", generic: "Keyword stuffing into pages", clevops: "Intent-mapped semantic content strategy" },
  { label: "Local approach", generic: "Generic 'Houston' name mentions", clevops: "Suburb-level targeting for Houston's sprawl" },
  { label: "Google Maps", generic: "Ignored or basic GBP setup", clevops: "Full GBP optimization and service area coverage" },
  { label: "Technical SEO", generic: "Rarely audited or addressed", clevops: "Core Web Vitals, schema, architecture, crawlability" },
  { label: "AI search", generic: "Not considered or planned for", clevops: "GEO and AEO structured for AI engine citation" },
  { label: "Internal linking", generic: "Flat site with no authority flow", clevops: "Deliberate architecture that distributes authority" },
  { label: "Service pages", generic: "One generic services page", clevops: "Dedicated pages per service and service area" },
  { label: "Content depth", generic: "Thin, repetitive copy", clevops: "Topical authority across the full niche" },
  { label: "Reporting focus", generic: "Rankings reported in isolation", clevops: "Traffic, visibility, and revenue impact" },
  { label: "Scalability", generic: "Hard to expand without rebuilding", clevops: "Designed to scale across Houston's geography" },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Houston Market and Competitor Audit",
    body: "We analyze your current search footprint, your top Houston competitors in your specific niche and geography, keyword gaps, technical issues, and the opportunities available across the Houston metro and its suburbs.",
  },
  {
    step: "02",
    title: "Local Search Opportunity Analysis",
    body: "We identify the highest-value keywords and search patterns for your Houston market, mapped to buyer intent so every optimization target connects to actual leads rather than just traffic metrics.",
  },
  {
    step: "03",
    title: "Site Architecture and SEO Structure",
    body: "We build or restructure the page hierarchy, service area coverage, internal linking framework, and local signal architecture that forms the foundation of all search visibility work for your Houston business.",
  },
  {
    step: "04",
    title: "Technical Optimization",
    body: "Core Web Vitals, schema markup, metadata, crawlability, mobile performance, and indexation. Every technical ranking signal that affects how Google and AI engines evaluate your site in a competitive Houston search environment.",
  },
  {
    step: "05",
    title: "Content and Semantic Expansion",
    body: "Service pages, suburb-level content, FAQ structures, and topic clusters developed around the actual search behavior of Houston customers across your specific market. Depth and specificity that earns and holds rankings.",
  },
  {
    step: "06",
    title: "Local Authority Building",
    body: "Google Business Profile management, citation consistency across Houston directories, review strategy, and local entity signals that strengthen map visibility and local search trust across the Houston metro.",
  },
  {
    step: "07",
    title: "Tracking and Iteration",
    body: "Ranking monitoring, traffic analysis, call tracking, and conversion data connected to SEO activity. Strategy adjusts based on what is producing leads across your Houston service areas, not just movement in rankings.",
  },
]

const INTERNAL_LINKS = [
  { label: "Houston Market Overview", href: "/locations/texas/houston", description: "Houston local market context and industry landscape" },
  { label: "Website Design Houston", href: "/website-design-houston", description: "Conversion-focused website design for Houston businesses" },
  { label: "SEO Services Dallas", href: "/seo-services-dallas", description: "Local SEO strategy for Dallas and DFW businesses" },
  { label: "Texas Service Area", href: "/locations/texas", description: "All ClevOps-served cities across Texas" },
  { label: "Website Design Dallas", href: "/website-design-dallas", description: "High-converting websites for Dallas businesses" },
  { label: "Get a Free SEO Audit", href: "/contact", description: "Talk to ClevOps about your Houston search visibility" },
]

// ── Hero visual ───────────────────────────────────────────────────────────────

function HeroVisual({ inView }: { inView: boolean }) {
  const keywords = [
    { label: "hvac repair houston", pos: "2", up: true },
    { label: "roofing contractor katy tx", pos: "1", up: true },
    { label: "cleaning service sugar land", pos: "3", up: true },
    { label: "contractor the woodlands", pos: "5", up: true },
  ]

  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.08) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main rankings card */}
      <motion.div
        className="absolute left-6 right-6 top-12 bottom-10 rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: "rgba(9,9,14,0.88)",
          border: "1px solid rgba(79,127,255,0.18)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(79,127,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.35 }}
      >
        {/* Top accent bar */}
        <div
          className="h-[2px] flex-shrink-0"
          style={{ background: "linear-gradient(90deg, #4F7FFF, #9B72FF)" }}
        />

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-white/[0.05]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-co-text-muted mb-1">
              Local Search Rankings · Houston, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                Top 3 Avg
              </span>
              <div
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
                style={{
                  background: "rgba(74,222,128,0.1)",
                  border: "1px solid rgba(74,222,128,0.2)",
                }}
              >
                <TrendingUp size={9} style={{ color: "#4ADE80" }} />
                <span className="text-[10px] font-bold" style={{ color: "#4ADE80" }}>
                  Improving
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 mt-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/35" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/35" />
            <div className="w-2 h-2 rounded-full bg-green-500/35" />
          </div>
        </div>

        {/* Keyword rankings list */}
        <div className="px-5 pt-3 pb-2 flex-1 min-h-0 space-y-2 overflow-hidden">
          {keywords.map((kw, i) => (
            <motion.div
              key={kw.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE_PREMIUM, delay: 0.7 + i * 0.12 }}
            >
              <div
                className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-black text-[11px]"
                style={{
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.22)",
                  color: "#4ADE80",
                }}
              >
                #{kw.pos}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-co-text-secondary truncate">{kw.label}</div>
                <motion.div
                  className="mt-1 h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #4F7FFF, #9B72FF)" }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${94 - i * 10}%` } : {}}
                    transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.0 + i * 0.1 }}
                  />
                </motion.div>
              </div>
              <div
                className="text-[10px] font-semibold shrink-0"
                style={{ color: "#4ADE80" }}
              >
                +{12 - i * 2}
              </div>
            </motion.div>
          ))}

          {/* Mini organic traffic chart */}
          <motion.div
            className="mt-2 pt-2 border-t border-white/[0.05]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 1.3 }}
          >
            <div className="text-[9px] uppercase tracking-[0.1em] font-medium text-co-text-muted mb-1.5">
              Organic Visibility Trend
            </div>
            <svg viewBox="0 0 230 36" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="seoFillHou" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F7FFF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient id="seoLineHou" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F7FFF" />
                  <stop offset="100%" stopColor="#9B72FF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0,34 C 20,32 30,28 50,24 C 75,20 90,17 112,13 C 138,9 158,6 182,3 C 205,1 220,0.5 230,0 L 230,36 L 0,36 Z"
                fill="url(#seoFillHou)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: EASE_PREMIUM, delay: 1.5 }}
              />
              <motion.path
                d="M 0,34 C 20,32 30,28 50,24 C 75,20 90,17 112,13 C 138,9 158,6 182,3 C 205,1 220,0.5 230,0"
                fill="none"
                stroke="url(#seoLineHou)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 1.4 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Organic Traffic", value: "+310%", color: "#7BA3FF" },
            { label: "Map Pack", value: "Top 3", color: "#4ADE80" },
            { label: "Keywords", value: "60+", color: "#B87FFF" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <div
                className="font-black tracking-tighter leading-none"
                style={{ color: m.color, fontSize: "1rem" }}
              >
                {m.value}
              </div>
              <div className="text-[8px] uppercase tracking-[0.1em] font-medium text-co-text-muted leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Ranking notification - top right */}
      <motion.div
        className="absolute top-1 right-0 z-10 w-[196px]"
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
              <span
                className="text-[9px] font-bold tracking-[0.14em] uppercase"
                style={{ color: "#4ADE80" }}
              >
                Ranking Update
              </span>
              <span className="text-[8.5px] text-co-text-muted ml-auto">Now</span>
            </div>
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">
              Roofing Co · Katy, TX
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Moved to position #1 for target keyword
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Map Pack card - bottom left */}
      <motion.div
        className="absolute bottom-1 left-0 z-10 w-[214px]"
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
            border: "1px solid rgba(155,114,255,0.22)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 18px rgba(155,114,255,0.06)",
          }}
        >
          <div className="px-3.5 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">
                Google Maps Pack
              </span>
              <div
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg"
                style={{
                  background: "rgba(155,114,255,0.1)",
                  border: "1px solid rgba(155,114,255,0.2)",
                }}
              >
                <MapPin size={8} style={{ color: "#B87FFF" }} />
                <span className="text-[8px] font-bold" style={{ color: "#B87FFF" }}>
                  Visible
                </span>
              </div>
            </div>
            <div className="space-y-1.5 mb-2">
              {["HVAC Pro · Houston", "Cleaning Co · Sugar Land", "Plumber · Katy"].map((biz, i) => (
                <div key={biz} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-sm flex items-center justify-center text-[8px] font-black"
                    style={{
                      background: i === 0 ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.06)",
                      color: i === 0 ? "#4ADE80" : "#666",
                    }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-[9px] text-co-text-secondary">{biz}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8.5px] text-co-text-muted">Houston metro</span>
              <span
                className="text-[11px] font-black tracking-tighter"
                style={{ color: "#B87FFF" }}
              >
                3-Pack
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* AI Search Ready badge */}
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
            <Brain size={10} style={{ color: "#B87FFF" }} />
            <span
              className="text-[10.5px] font-bold whitespace-nowrap"
              style={{ color: "#B87FFF" }}
            >
              GEO + AEO Ready
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function SeoHoustonContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.1 })

  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SEO Services Houston, TX | Local SEO for Houston Businesses",
            description:
              "ClevOps helps Houston businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
            url: "https://www.clevops.co/seo-services-houston",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "ClevOps",
              url: "https://www.clevops.co",
            },
          }),
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        items={[
          { name: "Home", href: "/" },
          { name: "SEO Services Houston", href: "/seo-services-houston" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="SEO Services Houston, TX"
        description="ClevOps provides local SEO services for Houston businesses. Google Maps optimization, technical SEO, semantic content strategy, suburb-level service area targeting, and AI search readiness built to improve rankings and generate qualified leads across the Houston metro."
        serviceType="SEO Services"
      />
      <SchemaMarkup type="FAQPage" items={FAQ_ITEMS} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative pt-28 pb-20 md:pt-36 md:pb-28 border-b border-co-border">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-co-accent/8 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: "SEO Services Houston" },
            ]}
            className="mb-10"
          />

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
            >
              <SectionLabel>Houston, TX</SectionLabel>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-tight">
                SEO Services in Houston{" "}
                <span className="text-co-accent">Built for Local Visibility and Lead Growth</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
                ClevOps helps Houston businesses improve local search visibility, Google rankings,
                map presence, and lead generation with SEO strategies built for modern search and
                AI discovery.
              </p>

              <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
                From Google Maps optimization and technical SEO to suburb-level service area targeting and GEO readiness, built for businesses competing across Houston, Katy, Sugar Land, Pearland, and The Woodlands.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                  Get a Free SEO Audit
                </Button>
                <Button href="/website-design-houston" variant="outline" size="lg">
                  View Web Design Houston
                </Button>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { label: "Houston Local SEO" },
                  { label: "Google Maps" },
                  { label: "Technical SEO" },
                  { label: "GEO + AEO" },
                  { label: "Semantic SEO" },
                ].map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-co-border bg-co-card text-co-text-secondary"
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              {/* Stat cards */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-xl font-bold text-co-text">Top 3</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Map Pack target</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-xl font-bold text-co-text">Metro</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Full coverage</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-base font-bold text-co-accent">Local</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">SEO built in</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-base font-bold text-co-accent">AI</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Search ready</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {["Local SEO", "Maps Optimization", "Technical SEO", "AI Search"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-co-text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-co-accent shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <HeroVisual inView={heroInView} />
          </div>
        </div>
      </section>

      {/* ── Why SEO Matters in Houston ───────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Houston Search Market</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Why SEO Is Especially Critical in the Houston Market
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Houston is the fourth-largest city in the United States and one of the most
                geographically expansive metros in the country. The Greater Houston area spans
                over 10,000 square miles with a population exceeding 7 million people and a
                dense concentration of local service businesses across dozens of distinct suburbs
                and ZIP codes.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                That geography creates a specific SEO challenge. A contractor serving Katy, an
                HVAC business covering Sugar Land, and a cleaning company operating in Pearland
                all face different local search dynamics from each other and from businesses
                competing in central Houston. Effective SEO in this market is not about ranking
                for "Houston" broadly. It is about building visibility across the specific
                geography your customers actually search from.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Houston's industrial backbone, Gulf Coast position, and massive healthcare economy
                add further complexity. The Texas Medical Center, Energy Corridor, and port
                logistics infrastructure create categories of service demand that respond to
                different search patterns than standard residential services. SEO in Houston
                requires understanding how that specific market actually searches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: MapPin,
                  title: "Geographic sprawl demands service-area depth",
                  body: "Houston's size means customers search with suburb-specific intent. 'HVAC repair Katy' and 'cleaning service Sugar Land' are different queries from 'HVAC Houston,' and the businesses ranking for suburb-level searches often face less competition with equal intent.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first search across a large city",
                  body: "Houston's commute patterns and suburban spread mean a large proportion of local searches happen on mobile. Mobile performance affects both rankings and conversion rates, and the two compound in a market with long travel distances between neighborhoods.",
                },
                {
                  icon: Search,
                  title: "High-intent search volume in every service category",
                  body: "Houston's scale means every major service category, from roofing and HVAC to logistics and healthcare support, carries significant search volume. The customers searching are ready to hire. Local SEO determines which businesses they find.",
                },
                {
                  icon: Brain,
                  title: "AI search surfaces Houston businesses differently",
                  body: "ChatGPT, Perplexity, and Google AI Overviews now answer local business queries directly. Houston businesses with properly structured, entity-rich websites are being cited in AI responses. Those without that structure are simply absent.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: 0.1 + i * 0.07 }}
                  className="flex gap-4 rounded-xl border border-co-border bg-co-card p-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-co-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-co-text">{item.title}</p>
                    <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Businesses Struggle to Rank ─────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-14"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>Root Causes</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Why Most Houston Businesses Struggle to Rank
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Weak local search performance is almost never random. It traces back to specific
              structural and strategic failures that are visible in an audit. These are the most
              common reasons Houston businesses do not appear where their customers are searching.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {RANK_STRUGGLES.map((item) => (
              <motion.div
                key={item.heading}
                variants={staggerItemCard}
                className="rounded-xl border border-co-border bg-co-card p-6 flex gap-4"
              >
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-co-text">{item.heading}</h3>
                  <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What ClevOps SEO Includes ────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-14"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>What We Focus On</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              The ClevOps SEO System for Houston Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              SEO is not a single tactic. It is a system of interconnected signals that compound
              over time. These are the disciplines we apply to improve search visibility, map
              presence, and lead generation for Houston businesses across the metro and its suburbs.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {SEO_SERVICES.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItemCard}
                className="rounded-xl border border-co-border bg-co-card p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-co-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-co-text">{service.title}</h3>
                  <p className="mt-2 text-sm text-co-text-secondary leading-relaxed">{service.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-14"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>Houston Industries</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              SEO for Houston Service Industries
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Local search behavior varies by industry and by geography. How a homeowner in The
              Woodlands searches for a roofing company is different from how a facilities manager
              in the Energy Corridor searches for industrial cleaning. Effective SEO accounts for
              those differences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {HOUSTON_INDUSTRIES.map((industry) => (
              <motion.div
                key={industry.name}
                variants={staggerItemCard}
                className="rounded-xl border border-co-border bg-co-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl" role="img" aria-label={industry.name}>{industry.icon}</span>
                  <h3 className="font-semibold text-co-text">{industry.name}</h3>
                </div>
                <p className="text-sm text-co-text-secondary leading-relaxed">{industry.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Local SEO + Google Maps ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Google Maps SEO</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Google Maps Visibility Drives Most Local Calls in Houston
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                When someone searches for a local service in Houston or any of its suburbs, the
                Google Map Pack appears at the top of results before any organic listings. The
                three businesses in that pack receive the majority of clicks. For HVAC, roofing,
                plumbing, cleaning, and contracting searches across the Houston metro, Map Pack
                visibility is where most inbound calls originate.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Houston's geography creates a specific Map Pack challenge. A business appearing in
                the Map Pack for "plumber Houston" may not appear for "plumber Katy" or "plumber
                Pearland" without deliberate service area configuration. Capturing Houston's
                suburban search volume requires GBP optimization designed around how your
                customers actually search across the metro, not just a single city-level targeting.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Sustained Map Pack visibility in Houston requires your Google Business Profile,
                website local signals, review activity, and citation consistency to work in
                coordination. Gaps in any of these suppress rankings regardless of how strong
                the others are.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Audit My Map Visibility
                </Button>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                "Google Business Profile audit and full optimization",
                "Category and service attribute configuration",
                "Service area setup for Houston suburbs: Katy, Sugar Land, Pearland, The Woodlands",
                "Review strategy and response management",
                "Photo and media optimization",
                "Citation audit and NAP consistency across Houston-area directories",
                "Local link signals that strengthen map authority",
                "Q&A management and content optimization",
                "Competitor Map Pack gap analysis for your Houston niche",
                "Ongoing GBP monitoring and update cadence",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <span className="text-co-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── AI Search Section ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-14"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>GEO and AEO</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              SEO Built for Google and AI Search Engines
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Search has expanded beyond the Google blue links. AI tools like ChatGPT, Perplexity,
              Gemini, Bing AI, and Google AI Overviews now answer local business queries directly.
              The websites they cite share specific structural characteristics. We build those in
              by default so Houston businesses are represented in AI-generated answers, not just
              traditional search results.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              {
                icon: Brain,
                title: "Structured for AI Answer Extraction",
                body: "Clear headings, direct answers, and FAQ blocks make it straightforward for AI engines to extract and surface your content in response to relevant Houston business queries.",
              },
              {
                icon: MapPin,
                title: "Local Entity Signals",
                body: "Business type, service area, location data, and schema markup tell AI search engines who you are, what you do, and which Houston suburbs you serve. Entity clarity, not just keyword presence.",
              },
              {
                icon: Layers,
                title: "Semantic Content Architecture",
                body: "Content structured around user intent rather than keyword frequency. This earns featured snippets, AI citations, and rankings that hold through algorithm changes rather than collapsing with them.",
              },
              {
                icon: FileText,
                title: "Topical Authority Building",
                body: "Comprehensive coverage of the topics your Houston customers search. Depth and breadth across a niche signals expertise to both Google and AI engines, which rewards with higher visibility and citation frequency.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Credibility Signals",
                body: "Reviews, credentials, authoritative content, and consistent business information build the trust metrics that search engines and AI tools use to decide which sources to recommend to Houston-area searchers.",
              },
              {
                icon: Globe,
                title: "GEO and AEO Optimization",
                body: "Generative Engine Optimization and Answer Engine Optimization disciplines applied to ensure AI tools can identify, understand, and accurately cite your Houston business in generated local answers.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItemCard}
                className="rounded-xl border border-co-border bg-co-card p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-co-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-co-text">{card.title}</h3>
                  <p className="mt-2 text-sm text-co-text-secondary leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SEO That Generates Leads ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>SEO and Revenue</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Rankings Do Not Pay the Bills. Leads Do.
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                A Houston business can rank and still generate few leads if the traffic is not
                aligned with buyer intent, the pages do not convert visitors to action, or the
                phone number is buried below the fold on mobile.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Effective SEO is not purely about rankings. It is about capturing the searches
                that represent buyers at the moment of highest intent, landing those visitors
                on pages that establish trust and eliminate friction, and making it effortless
                for them to call, book, or request a quote. That connection between search
                visibility and actual revenue is where most Houston businesses leave significant
                money on the table.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                We build SEO strategies that consider conversion at every stage: which keywords
                attract ready-to-hire traffic, how service pages are structured to convert that
                traffic for Houston customers specifically, and how the site's contact
                architecture removes every barrier between a searcher and a booked call.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Start the Conversation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Target,
                  title: "Intent-first keyword targeting",
                  body: "Prioritizing searches where Houston users are ready to hire, not just researching. The keywords that drive calls are different from the ones that drive traffic, and a good SEO strategy is built around that distinction.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile conversion optimization",
                  body: "Houston's mobile-search-heavy population searches on the go. Fast load times, visible phone numbers, and frictionless booking paths convert mobile visitors at significantly higher rates than slow, cluttered pages.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust signals on every page",
                  body: "Reviews, licensing, service area confirmation, and professional credibility signals placed where they eliminate hesitation before a Houston customer picks up the phone.",
                },
                {
                  icon: BarChart3,
                  title: "Conversion tracking connected to SEO",
                  body: "We track which keywords and pages produce calls and form submissions, not just rankings. Strategy adjusts based on what is generating revenue from Houston traffic, not just visibility metrics.",
                },
                {
                  icon: Zap,
                  title: "Fast, frictionless contact paths",
                  body: "Click-to-call, minimal-field forms, and clear CTAs above the fold. Every barrier removed from the path between search and contact increases the return on every ranking earned.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: i * 0.07 }}
                  className="flex gap-4 rounded-xl border border-co-border bg-co-card p-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-co-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-co-text">{item.title}</p>
                    <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-14"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>Side by Side</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Generic SEO Agency vs ClevOps SEO System
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Most SEO agencies operate on playbooks that were relevant years ago. Houston's
              sprawling market, Gulf Coast competitive dynamics, and the shift toward AI-powered
              search demand a different approach. Here is what that difference looks like in
              practice.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="overflow-x-auto"
          >
            <div className="min-w-[580px] rounded-2xl border border-co-border overflow-hidden">
              <div className="grid grid-cols-3 bg-co-surface border-b border-co-border">
                <div className="p-5 text-sm font-semibold text-co-text-secondary">Category</div>
                <div className="p-5 text-sm font-semibold text-red-400 border-l border-co-border">Generic SEO Agency</div>
                <div className="p-5 text-sm font-semibold text-co-accent border-l border-co-border">ClevOps SEO System</div>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 border-b border-co-border last:border-b-0 ${
                    i % 2 === 0 ? "bg-co-bg" : "bg-co-card"
                  }`}
                >
                  <div className="p-5 text-sm font-semibold text-co-text">{row.label}</div>
                  <div className="p-5 text-sm text-co-text-secondary border-l border-co-border flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.generic}</span>
                  </div>
                  <div className="p-5 text-sm text-co-text-secondary border-l border-co-border flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-co-accent shrink-0 mt-0.5" />
                    <span>{row.clevops}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                The Houston SEO Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not sell SEO packages. We build strategies from the actual competitive
                landscape of your Houston market, the geographic scope of your service area,
                your current site's technical state, and the specific search behavior of your
                customer base across the metro and its suburbs.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every engagement starts with an audit that shows exactly where you stand and
                what needs to change. The work that follows is methodical, measurable, and
                connected to the business outcome of more qualified inbound calls and leads
                from the Houston areas you serve.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Get a Free SEO Audit
                </Button>
              </div>
            </motion.div>

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease, delay: i * 0.07 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-co-accent/10 border border-co-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-co-accent">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-co-text">{step.title}</h3>
                    <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <LocalFAQ
              items={FAQ_ITEMS}
              title="Houston SEO Questions, Answered"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={headerBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mb-12"
          >
            <motion.div variants={headerLabel}>
              <SectionLabel>Related Pages</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">
              Explore the Houston and Texas SEO Cluster
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {INTERNAL_LINKS.map((link) => (
              <motion.div key={link.href} variants={staggerItemCard}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-co-border bg-co-card hover:border-co-border-hover transition-colors duration-200 p-5 group"
                >
                  <p className="font-semibold text-co-text text-sm">{link.label}</p>
                  <p className="mt-1.5 text-xs text-co-text-secondary leading-relaxed">{link.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-co-accent text-xs font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-grid-sm opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-co-accent/8 blur-[110px]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="relative rounded-2xl border border-co-border bg-co-surface p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <SectionLabel className="justify-center">Free SEO Audit</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              If Your Houston Business Is Invisible in Local Search, Your Competitors Are Capturing Those Leads.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free SEO audit from ClevOps shows you exactly where your search visibility is
              falling short across Houston and its suburbs, which keywords you should be ranking
              for, and what it would take to compete in local search and Google Maps in your
              specific market.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Get a Free SEO Audit
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to ClevOps
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-co-text-muted">
              <span>No commitment required</span>
              <span>Response within 24 hours</span>
              <span>Built around your business</span>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
