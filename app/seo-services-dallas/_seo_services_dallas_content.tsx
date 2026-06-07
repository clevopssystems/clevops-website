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
    question: "How much do SEO services cost in Dallas?",
    answer:
      "SEO pricing in Dallas varies significantly by scope. At ClevOps, local SEO engagements are scoped around your specific business goals, competitive landscape, and the technical state of your current site. A typical local SEO engagement covers technical optimization, content strategy, Google Business Profile management, and local authority building. The relevant measure is not the monthly cost but the revenue unlocked by consistent search visibility in a market as competitive as Dallas.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Meaningful local SEO results in Dallas typically appear within 60 to 120 days for lower-competition niches, and 4 to 8 months for competitive categories like HVAC, roofing, and cleaning. Factors that affect speed include the current state of your website, your existing domain authority, the competitiveness of your target keywords, and how aggressively your competitors are investing in SEO. Technical fixes and Google Business Profile optimization often show faster gains than content-driven authority building.",
  },
  {
    question: "What is local SEO and why does it matter for Dallas businesses?",
    answer:
      "Local SEO is the practice of optimizing your online presence so your business appears prominently when people in your service area search for what you offer. For Dallas businesses, this means ranking in Google's local results, appearing in the Map Pack, and surfacing in 'near me' searches. Dallas has one of the most competitive local service markets in the US. Local SEO determines which businesses appear in those searches and which ones stay invisible regardless of how good their service actually is.",
  },
  {
    question: "What is Google Maps SEO?",
    answer:
      "Google Maps SEO, often called Google Business Profile optimization or local pack optimization, is the process of improving your business's visibility in Google's map results. When someone searches 'HVAC company near me' or 'cleaning service Dallas,' the three businesses appearing in the map section at the top of results are often the ones that receive the most calls. Ranking there requires a properly optimized Google Business Profile, consistent local citations, strong reviews, and website signals that confirm your local relevance.",
  },
  {
    question: "Do I need SEO if I already have a website?",
    answer:
      "Yes. A website without SEO is like a storefront with no signage in an area where people only discover businesses by searching. In Dallas, the majority of local service customers find businesses through Google search or Google Maps. A website that is not structured for search visibility, does not rank for relevant keywords, and has no local signals will generate almost no organic traffic regardless of how well it is designed.",
  },
  {
    question: "What industries do you work with for SEO in Dallas?",
    answer:
      "We focus on local service businesses across Dallas and the DFW Metroplex. This includes contractors, HVAC companies, roofing businesses, cleaning companies, plumbers, electricians, auto detailers, landscapers, med spas, and law firms. Each industry has different search patterns, different buyer intent, and different competitive dynamics. SEO strategy built for a roofing company looks different from SEO built for a cleaning business, even in the same city.",
  },
  {
    question: "Can SEO help generate more phone calls?",
    answer:
      "Yes, directly. The majority of local service calls in Dallas come from customers who found the business through a Google search or Maps result. SEO that puts your business in front of high-intent searchers at the moment they are looking for exactly what you offer is one of the most reliable sources of inbound calls. The key is targeting the right keywords, the ones people search when they are ready to hire, not just researching.",
  },
  {
    question: "What is the difference between local SEO and general SEO?",
    answer:
      "General SEO focuses on ranking a website nationally or globally for informational and commercial queries. Local SEO is specifically about appearing in location-based searches, typically with geographic modifiers like 'Dallas' or 'near me,' and in Google's map results. Local SEO requires Google Business Profile optimization, local citation building, review management, service area targeting, and neighborhood-level content signals that general SEO does not prioritize.",
  },
  {
    question: "What is semantic SEO?",
    answer:
      "Semantic SEO is the practice of building content around topics, entities, and concepts rather than simply repeating keywords. Search engines have evolved to understand meaning, context, and relationships between ideas. A semantically structured page about HVAC repair in Dallas signals expertise and relevance through comprehensive coverage of related concepts, not through keyword repetition. This is what earns durable rankings and AI search citations, as opposed to rankings that collapse with the next algorithm update.",
  },
  {
    question: "What is GEO and AEO optimization?",
    answer:
      "GEO stands for Generative Engine Optimization, and AEO stands for Answer Engine Optimization. Both refer to structuring your website and content so that AI-powered search engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews surface your business when answering relevant questions. AI engines increasingly answer local business queries directly rather than just listing links. GEO and AEO optimization ensures your content is structured so these engines can extract and cite it accurately.",
  },
  {
    question: "How does AI search affect my Dallas business?",
    answer:
      "AI search is changing how customers find local businesses. Tools like ChatGPT, Perplexity, and Google's AI Overviews now answer questions directly rather than just returning a list of links. When someone asks an AI 'what is the best roofing company in Dallas' or 'which cleaning services serve North Dallas,' the businesses that get mentioned are the ones with well-structured websites, strong local signals, authoritative content, and clear entity information. This is a shift that rewards businesses with proper SEO foundations.",
  },
  {
    question: "Can you improve SEO on my existing website?",
    answer:
      "Yes. Most of the Dallas businesses we work with have existing websites that underperform in local search. We start with a technical and content audit to identify where the site is losing rankings, what structural changes are needed, and what content gaps are costing you visibility. In many cases, targeted improvements to an existing site deliver faster results than a complete rebuild, especially when there is existing domain history and some ranking signals already present.",
  },
  {
    question: "Do Dallas businesses need mobile SEO?",
    answer:
      "It is not optional. Over 70% of local service searches in Dallas happen on mobile phones. Google uses mobile-first indexing, meaning it primarily evaluates your mobile experience when determining rankings. A site that loads slowly, displays poorly, or is difficult to navigate on a phone is penalized in rankings and converts fewer visitors even when it does rank. Mobile performance is a core part of every SEO engagement.",
  },
  {
    question: "Is SEO worth it for small businesses in Dallas?",
    answer:
      "For most Dallas local service businesses, SEO has a higher long-term return than paid advertising because the traffic compounds over time rather than stopping when spend stops. A small cleaning company or HVAC business ranking on the first page for relevant Dallas searches receives consistent inbound calls without paying per click. The investment timeline is longer than paid ads, but the compounding value of organic rankings is why established businesses in Dallas consistently invest in SEO even when they already have strong referral networks.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const RANK_STRUGGLES = [
  {
    heading: "Thin, keyword-stuffed service pages",
    body: "Pages that repeat city names and service keywords without depth signal low quality to search engines. Google understands content now. Thin pages rank poorly and do not stay ranked.",
  },
  {
    heading: "No local topical authority",
    body: "Ranking in a competitive market like Dallas requires semantic depth across related topics. A business with one generic services page cannot compete with a site that comprehensively covers its niche.",
  },
  {
    heading: "Weak or unclaimed Google Business Profile",
    body: "Many Dallas businesses either ignore their GBP or underoptimize it. The Map Pack is prime real estate for local searches, and the businesses appearing there have actively managed profiles.",
  },
  {
    heading: "Poor internal link structure",
    body: "Search engines follow internal links to understand site hierarchy and content relationships. Flat or disconnected sites distribute no authority between pages and leave rankings on the table.",
  },
  {
    heading: "Slow mobile load times",
    body: "Core Web Vitals are a ranking signal. A slow-loading site in Dallas's competitive market ranks below faster competitors, especially on mobile where most local searches originate.",
  },
  {
    heading: "No schema markup",
    body: "Schema tells search engines what your content means, not just what it says. Without it, pages are harder to surface in rich results, AI answers, and local knowledge panels.",
  },
  {
    heading: "Generic city pages with no real context",
    body: "Pages that simply substitute a city name into a template provide no unique value to users or search engines. They rarely rank, and when they do, they convert poorly.",
  },
  {
    heading: "No semantic content strategy",
    body: "SEO without a topical content plan produces random keyword rankings at best. A coherent strategy builds authority around the topics your customers actually search across the full buyer journey.",
  },
  {
    heading: "Inconsistent or missing local citations",
    body: "NAP consistency across directories, aggregators, and local data sources is a foundational local SEO signal. Inconsistent citations confuse search engines about who you are and where you operate.",
  },
  {
    heading: "Not structured for AI search",
    body: "AI search engines read content differently from traditional crawlers. Sites without clear headings, direct answers, FAQ blocks, and structured entity signals are not surfaced in AI-generated responses.",
  },
]

const SEO_SERVICES = [
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Complete local search optimization targeting Dallas-specific and DFW neighborhood searches. Service area pages, local signals, and citation authority built to improve visibility across the searches that drive real calls.",
  },
  {
    icon: Globe,
    title: "Google Maps Optimization",
    body: "Google Business Profile audit, optimization, and ongoing management. Category selection, service area configuration, photo optimization, Q&A, and review strategy to improve Map Pack visibility for high-intent Dallas searches.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    body: "Core Web Vitals, crawlability, indexation, site architecture, canonical structure, schema implementation, and mobile performance. The foundation that determines whether your other SEO efforts actually produce rankings.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    body: "Title tags, meta descriptions, heading structure, semantic content, internal anchor text, and page-level optimization aligned with search intent. Every page structured to compete for the specific queries your customers use.",
  },
  {
    icon: Link2,
    title: "Internal Linking Strategy",
    body: "A deliberate internal link architecture that distributes authority across your site, helps search engines understand page relationships, and guides users toward conversion pages from every entry point.",
  },
  {
    icon: Brain,
    title: "Semantic SEO",
    body: "Content structured around topics and entities rather than keyword repetition. Semantic depth signals expertise to search engines, earns durable rankings, and satisfies the intent behind searches rather than just matching keywords.",
  },
  {
    icon: Activity,
    title: "GEO and AEO Optimization",
    body: "Structuring content and technical signals so AI search engines can extract, understand, and cite your business accurately. Optimized for ChatGPT, Perplexity, Gemini, Bing AI, and Google AI Overviews.",
  },
  {
    icon: Layers,
    title: "Content Strategy",
    body: "A topical content plan mapped to how your customers search across the full buyer journey, from awareness to ready-to-hire. Every piece of content serves a ranking purpose and a conversion purpose.",
  },
  {
    icon: Building2,
    title: "Service Page SEO",
    body: "Dedicated, SEO-optimized pages for each service and service area. The specificity and depth that earns rankings for the high-intent queries that drive quote requests and booked calls.",
  },
  {
    icon: Target,
    title: "Conversion SEO",
    body: "SEO that does not just drive traffic but drives the right traffic and converts it. Intent alignment, page structure, CTA placement, and local trust signals that connect visibility directly to revenue.",
  },
]

const DALLAS_INDUSTRIES = [
  {
    icon: "🔨",
    name: "Contractors",
    body: "Dallas-Fort Worth is one of the fastest-growing construction markets in the US. Contractors competing for project bids need to rank for searches like 'general contractor Dallas' and 'remodeling contractor DFW' before customers begin comparing. Local SEO builds the search presence that gets you into those comparison sets in the first place.",
  },
  {
    icon: "🏠",
    name: "Roofers",
    body: "North Texas averages more hail events than almost anywhere in the country, driving predictable seasonal demand. Roofing companies ranking in Google Maps and organic results during storm season capture the majority of inbound calls. SEO built before hail season arrives means visibility at the exact moment homeowners are searching.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Dallas HVAC customers search urgently. When AC fails in August, they search fast and call the first company that ranks and looks reliable. Map Pack visibility, fast-loading mobile pages, and content optimized for emergency searches like 'AC repair Dallas same day' capture the high-value urgent calls that drive HVAC revenue.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Cleaning is one of the most search-driven local service categories. Customers searching 'cleaning service Dallas' or 'house cleaning Frisco' are ready to hire. Ranking for these searches with local SEO that covers neighborhoods and service areas turns consistent search volume into a steady pipeline of new bookings.",
  },
  {
    icon: "💆",
    name: "Med Spas",
    body: "Dallas med spa customers research extensively before booking. They search for specific treatments, compare providers, and read reviews. A comprehensive SEO strategy covering individual treatment pages, local authority signals, and strong GBP visibility puts your practice in front of high-intent searches before the booking decision is made.",
  },
  {
    icon: "⚖️",
    name: "Lawyers",
    body: "Legal searches have some of the highest intent of any category. Someone searching 'personal injury attorney Dallas' or 'family law lawyer DFW' is actively looking for representation. SEO that ranks your firm for practice-area and location searches directly affects how many new clients find you versus finding a competitor.",
  },
  {
    icon: "🔧",
    name: "Plumbers",
    body: "Plumbing is emergency-driven. The Dallas plumber appearing in the Map Pack and the first organic result when someone's pipe bursts gets the call. Mobile speed, Map Pack optimization, and content that signals immediate availability and local coverage are what separate the businesses capturing those calls from the ones missing them.",
  },
  {
    icon: "⚡",
    name: "Electricians",
    body: "Electrical work requires licensed professionals and customers perform real due diligence online before hiring. Local SEO that surfaces your licensing credentials, service area coverage, and customer reviews at the top of relevant searches builds the trust that converts searchers into scheduled jobs.",
  },
  {
    icon: "🚗",
    name: "Auto Detailers",
    body: "Dallas has a significant luxury vehicle market, particularly in areas like Highland Park, Uptown, and Southlake. Auto detailers capturing that market need visibility for searches like 'car detailing Dallas' and 'mobile detailing DFW' alongside strong visual proof and booking-ready pages that convert searches into scheduled appointments.",
  },
  {
    icon: "🌿",
    name: "Local Service Businesses",
    body: "Any local service business in Dallas, from landscapers and pest control to handymen and pool services, benefits from local SEO that captures consistent search volume. The customers searching for these services are ready to hire. SEO determines which businesses they find.",
  },
]

const COMPARISON_ROWS = [
  { label: "Keyword strategy", generic: "Keyword stuffing into pages", clevops: "Intent-mapped semantic content strategy" },
  { label: "Local approach", generic: "Generic city name mentions", clevops: "Dallas-specific context and neighborhood targeting" },
  { label: "Google Maps", generic: "Ignored or basic setup", clevops: "Full GBP optimization and Map Pack strategy" },
  { label: "Technical SEO", generic: "Rarely audited", clevops: "Core Web Vitals, schema, architecture, crawlability" },
  { label: "AI search", generic: "Not considered", clevops: "GEO and AEO structured for AI engine citation" },
  { label: "Internal linking", generic: "Flat site with no strategy", clevops: "Deliberate architecture that distributes authority" },
  { label: "Service pages", generic: "One generic services page", clevops: "Dedicated pages per service and service area" },
  { label: "Content depth", generic: "Thin, repetitive copy", clevops: "Topical authority across the full niche" },
  { label: "Reporting focus", generic: "Rankings in isolation", clevops: "Traffic, visibility, and revenue impact" },
  { label: "Scalability", generic: "Hard to expand without rebuilding", clevops: "Designed to scale with your service area" },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Market and Competitor Audit",
    body: "We analyze your current search footprint, your top Dallas competitors, keyword gaps, technical issues, and the opportunities available in your specific niche and service area.",
  },
  {
    step: "02",
    title: "Local Search Opportunity Analysis",
    body: "We identify the highest-value keywords and search patterns for your Dallas market, mapped to buyer intent so every optimization target connects to actual leads rather than just traffic.",
  },
  {
    step: "03",
    title: "Site Architecture and SEO Structure",
    body: "We build or restructure the page hierarchy, service page layout, internal linking framework, and local signal architecture that forms the foundation of all other SEO work.",
  },
  {
    step: "04",
    title: "Technical Optimization",
    body: "Core Web Vitals, schema markup, metadata, crawlability, mobile performance, and indexation. Every technical ranking signal that affects how Google and AI engines evaluate your site.",
  },
  {
    step: "05",
    title: "Content and Semantic Expansion",
    body: "Service pages, local content, FAQ structures, and topic clusters developed around the actual search behavior of your Dallas customers. Depth and specificity that earns and holds rankings.",
  },
  {
    step: "06",
    title: "Local Authority Building",
    body: "Google Business Profile management, citation consistency, review strategy, and local entity signals that strengthen your map visibility and local search trust across the DFW area.",
  },
  {
    step: "07",
    title: "Tracking and Iteration",
    body: "Ranking monitoring, traffic analysis, call tracking, and conversion data connected to SEO activity. We adjust strategy based on what is actually producing leads, not just movement in rankings.",
  },
]

const INTERNAL_LINKS = [
  { label: "Dallas Market Overview", href: "/locations/texas/dallas", description: "Dallas local market context and industry landscape" },
  { label: "Website Design Dallas", href: "/website-design-dallas", description: "Conversion-focused website design for Dallas businesses" },
  { label: "Texas Service Area", href: "/locations/texas", description: "All ClevOps-served cities across Texas" },
  { label: "Houston, TX", href: "/locations/texas/houston", description: "Local strategy for Houston service businesses" },
  { label: "Austin, TX", href: "/locations/texas/austin", description: "Local strategy for Austin service businesses" },
  { label: "Get a Free SEO Audit", href: "/contact", description: "Talk to ClevOps about your Dallas search visibility" },
]

// ── Hero visual ───────────────────────────────────────────────────────────────

function HeroVisual({ inView }: { inView: boolean }) {
  const keywords = [
    { label: "hvac repair dallas", pos: "3", up: true },
    { label: "cleaning service frisco", pos: "1", up: true },
    { label: "roofing contractor dfw", pos: "4", up: true },
    { label: "contractor north dallas", pos: "6", up: true },
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
              Local Search Rankings · Dallas, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                Top 5 Avg
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
                    animate={inView ? { width: `${92 - i * 12}%` } : {}}
                    transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.0 + i * 0.1 }}
                  />
                </motion.div>
              </div>
              <div
                className="text-[10px] font-semibold shrink-0"
                style={{ color: "#4ADE80" }}
              >
                +{11 - i * 2}
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
                <linearGradient id="seoFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F7FFF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient id="seoLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F7FFF" />
                  <stop offset="100%" stopColor="#9B72FF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0,34 C 25,32 35,28 55,25 C 80,21 95,19 115,15 C 140,11 160,7 185,4 C 205,2 220,1 230,0 L 230,36 L 0,36 Z"
                fill="url(#seoFill)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: EASE_PREMIUM, delay: 1.5 }}
              />
              <motion.path
                d="M 0,34 C 25,32 35,28 55,25 C 80,21 95,19 115,15 C 140,11 160,7 185,4 C 205,2 220,1 230,0"
                fill="none"
                stroke="url(#seoLine)"
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
            { label: "Organic Traffic", value: "+284%", color: "#7BA3FF" },
            { label: "Map Pack", value: "Top 3", color: "#4ADE80" },
            { label: "Keywords", value: "50+", color: "#B87FFF" },
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
        className="absolute top-1 right-0 z-10 w-[190px]"
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
              HVAC Co. · Dallas, TX
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Moved to position #2 for target keyword
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Map Pack card - bottom left */}
      <motion.div
        className="absolute bottom-1 left-0 z-10 w-[210px]"
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
              {["Cleaning Co · Frisco", "HVAC Pro · Dallas", "Roof Co · Plano"].map((biz, i) => (
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
              <span className="text-[8.5px] text-co-text-muted">DFW coverage</span>
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

      {/* AI Search Ready badge - mid right */}
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

export function SeoDallasContent() {
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
            name: "SEO Services Dallas, TX | Local SEO for Dallas Businesses",
            description:
              "ClevOps helps Dallas businesses improve local search visibility, Google rankings, map presence, and lead generation with SEO strategies built for modern search and AI discovery.",
            url: "https://clevops.co/seo-services-dallas",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "ClevOps",
              url: "https://clevops.co",
            },
          }),
        }}
      />
      <SchemaMarkup
        type="BreadcrumbList"
        items={[
          { name: "Home", href: "/" },
          { name: "SEO Services Dallas", href: "/seo-services-dallas" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="SEO Services Dallas, TX"
        description="ClevOps provides local SEO services for Dallas businesses. Google Maps optimization, technical SEO, semantic content strategy, and AI search readiness built to improve rankings and generate qualified leads."
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
              { label: "SEO Services Dallas" },
            ]}
            className="mb-10"
          />

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
            >
              <SectionLabel>Dallas, TX</SectionLabel>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-tight">
                SEO Services in Dallas{" "}
                <span className="text-co-accent">Built for Local Visibility and Lead Growth</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
                ClevOps helps Dallas businesses improve local search visibility, Google rankings,
                map presence, and lead generation with SEO strategies built for modern search and
                AI discovery.
              </p>

              <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
                From Google Maps optimization and technical SEO to semantic content and GEO readiness, built for the businesses competing across Dallas and DFW local search.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                  Get a Free SEO Audit
                </Button>
                <Button href="/website-design-dallas" variant="outline" size="lg">
                  View Web Design Dallas
                </Button>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { label: "Dallas Local SEO" },
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
                  <p className="text-xl font-bold text-co-text">DFW</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Metro coverage</p>
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

      {/* ── Why SEO Matters in Dallas ────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Dallas Search Market</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Why SEO Matters More in Dallas Than in Most Markets
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Dallas is one of the most competitive local service markets in the United States. The
                DFW Metroplex spans more than 9,000 square miles with over 7 million people and a
                dense concentration of local service businesses across every category.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                In that environment, local search is not a supplementary marketing channel. It is
                where customers go when they are ready to hire. Searches like "HVAC repair Dallas,"
                "cleaning service Frisco," and "roofing contractor Plano" represent buyers with their
                wallets open. The businesses ranking for those searches get the calls.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Over 70% of those searches happen on mobile phones, and a significant portion now
                happen through AI-powered tools. The search landscape in Dallas is shifting faster
                than most business owners realize, and the gap between businesses with strong SEO
                and those without it is widening every quarter.
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
                  title: "Dallas Map Pack competition",
                  body: "The three businesses appearing in Google's Map Pack for any given Dallas search capture the majority of clicks. Getting into that pack requires a deliberate, sustained local SEO effort.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first local searches",
                  body: "Most Dallas local service searches happen on phones. Mobile performance, fast load times, and click-to-call placement affect both rankings and conversion rates simultaneously.",
                },
                {
                  icon: Search,
                  title: "High-intent search volume",
                  body: "Dallas search volume for service categories like HVAC, roofing, and cleaning is among the highest in Texas. The customers searching are ready to hire, not just browsing.",
                },
                {
                  icon: Brain,
                  title: "AI search is changing discovery",
                  body: "ChatGPT, Perplexity, and Google's AI Overviews now answer local business queries directly. Dallas businesses with properly structured websites are being cited. Others are invisible.",
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
              Why Most Dallas Businesses Struggle to Rank
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Weak local search performance is almost never random. It traces back to specific
              structural and strategic failures that are visible in an audit. These are the ten most
              common reasons Dallas businesses do not appear where their customers are searching.
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
              The ClevOps SEO System for Dallas Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              SEO is not a single tactic. It is a system of interconnected signals that compound
              over time. These are the disciplines we apply to improve search visibility, map
              presence, and lead generation for Dallas businesses.
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
              <SectionLabel>Dallas Industries</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              SEO for Dallas Service Industries
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Local search behavior varies significantly by industry. How a homeowner searches for
              an HVAC company is different from how they search for a cleaning service or a
              contractor. Effective SEO is built around those differences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {DALLAS_INDUSTRIES.map((industry) => (
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
                Google Maps Visibility Is Where Dallas Leads Are Won
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                When someone searches for a local service in Dallas, the Google Map Pack appears
                at the top of results before any organic listings. The three businesses in that pack
                receive the vast majority of clicks. For service categories like HVAC, cleaning,
                plumbing, and contracting, being outside the Map Pack means competing for the
                scraps below it.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Map Pack rankings are determined by a combination of your Google Business Profile
                quality, the relevance of your website to local searches, the strength of your
                review signals, and the consistency of your business information across the web.
                All four need to be working together for sustained Map Pack visibility in Dallas's
                competitive market.
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
                "Service area setup for DFW neighborhoods and suburbs",
                "Review strategy and response management",
                "Photo and media optimization",
                "Citation audit and NAP consistency across directories",
                "Local link signals that strengthen map authority",
                "Q&A management and content optimization",
                "Competitor Map Pack gap analysis",
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
              by default.
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
                body: "Clear headings, direct answers, and FAQ blocks make it straightforward for AI engines to extract and surface your content in response to relevant Dallas business queries.",
              },
              {
                icon: MapPin,
                title: "Local Entity Signals",
                body: "Business type, service area, location data, and schema markup tell AI search engines who you are, what you do, and which DFW neighborhoods you serve. Entities, not just keywords.",
              },
              {
                icon: Layers,
                title: "Semantic Content Architecture",
                body: "Content structured around user intent rather than keyword frequency. This earns featured snippets, AI citations, and durable rankings that do not collapse with each algorithm update.",
              },
              {
                icon: FileText,
                title: "Topical Authority Building",
                body: "Comprehensive coverage of the topics your customers search. Depth and breadth across a niche signals expertise to both Google and AI engines, which rewards with higher visibility.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Credibility Signals",
                body: "Reviews, credentials, authoritative content, and consistent business information build the trust metrics that search engines and AI tools use to decide which sources to recommend.",
              },
              {
                icon: Globe,
                title: "GEO and AEO Optimization",
                body: "Generative Engine Optimization and Answer Engine Optimization disciplines applied to ensure AI tools can identify, understand, and accurately cite your Dallas business in generated answers.",
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
                A Dallas business can rank well and still generate few leads if the traffic is not
                aligned with buyer intent, the pages do not convert visitors to action, or the
                phone number is buried three scrolls deep.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Effective SEO is not purely about rankings. It is about capturing the searches that
                represent buyers, landing those visitors on pages that establish trust and remove
                friction, and making it effortless for them to call, book, or submit a form. That
                connection between search visibility and actual revenue is where most Dallas
                businesses leave money on the table.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                We build SEO strategies that consider conversion at every stage: which keywords
                attract ready-to-hire traffic, how landing pages are structured to convert that
                traffic, and how the site's contact architecture removes every barrier between a
                searcher and a booked call.
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
                  body: "Prioritizing searches where users are ready to hire, not just researching. The keywords that drive calls are different from the ones that drive traffic.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile conversion optimization",
                  body: "Most Dallas local searches happen on phones. Fast load times, visible phone numbers, and frictionless booking paths convert mobile visitors at a significantly higher rate.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust signals on every page",
                  body: "Reviews, licensing, service area confirmation, and professional credibility signals placed where they eliminate hesitation before a customer picks up the phone.",
                },
                {
                  icon: BarChart3,
                  title: "Conversion tracking connected to SEO",
                  body: "We track which keywords and pages produce calls and form submissions, not just rankings. Strategy adjusts based on what is generating revenue, not just visibility metrics.",
                },
                {
                  icon: Zap,
                  title: "Fast, frictionless contact paths",
                  body: "Click-to-call, minimal-field forms, and clear CTAs above the fold. Every barrier removed from the path between search and contact increases the return on every ranking you earn.",
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
              Most SEO agencies operate on playbooks built for 2019. Dallas's competitive local
              market and the shift toward AI-powered search demand a different approach. Here is
              what that difference looks like in practice.
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
                The Dallas SEO Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not sell SEO packages. We build strategies from the actual competitive
                landscape of your Dallas market, your current site's technical state, and the
                specific search patterns of your customer base.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every engagement starts with an audit that shows exactly where you stand and what
                needs to change. The work that follows is methodical, measurable, and connected to
                the business outcome of more qualified inbound calls and leads.
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
              title="Dallas SEO Questions, Answered"
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
              Explore the Dallas SEO Cluster
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
              If Your Dallas Business Is Invisible in Local Search, Your Competitors Are Getting Those Calls.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free SEO audit from ClevOps shows you exactly where your search visibility is
              falling short, which keywords you should be ranking for, and what it would take to
              compete in Dallas local search and Google Maps.
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
