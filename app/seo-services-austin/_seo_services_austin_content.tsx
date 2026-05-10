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
  Rocket,
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
    question: "How much do SEO services cost in Austin?",
    answer:
      "SEO pricing in Austin depends on your goals, competitive landscape, and the current state of your site. At ClevOps, engagements are scoped around what it actually takes to compete in your specific niche, whether that is a startup building organic traction from scratch, a local service business targeting East Austin and South Congress, or an established brand looking to own its category. The more meaningful question is what consistent inbound traffic from high-intent searchers is worth to your business monthly. For most Austin companies, one new client covers months of investment.",
  },
  {
    question: "How long does SEO take to show results in Austin?",
    answer:
      "Local SEO results for Austin businesses typically become visible within 60 to 90 days for less competitive niches and 4 to 8 months for more established categories. Austin moves fast, but SEO compounds over time rather than spiking and disappearing like ad spend. Technical fixes and Google Business Profile improvements often show early gains. Content authority and topical depth build the rankings that hold long-term. The businesses that start now have a compounding advantage over those who wait.",
  },
  {
    question: "Do Austin startups need SEO?",
    answer:
      "Yes, and it is often more valuable for startups than for established businesses because the math is different. A startup without a large marketing budget needs sustainable inbound channels that do not require per-click spend. Organic search, when structured correctly, builds a traffic and lead asset that compounds with time. Austin's startup ecosystem is competitive, and founders who search for vendors, tools, and partners almost always start with Google. Being visible in those searches is a distribution channel a startup cannot afford to ignore.",
  },
  {
    question: "What is local SEO and why does it matter in Austin?",
    answer:
      "Local SEO is the discipline of optimizing your online presence so your business appears when people in your service area search for what you offer, with and without geographic terms. For Austin businesses, this means ranking in Google's local map results, appearing for 'near me' searches, and surfacing in neighborhood-specific queries like 'cleaning service East Austin' or 'HVAC company Round Rock.' Austin's rapid population growth and high density of digitally sophisticated customers means local search is often the primary acquisition channel for both service businesses and modern startups selling locally.",
  },
  {
    question: "What is Google Maps SEO?",
    answer:
      "Google Maps SEO refers to optimizing your Google Business Profile and local authority signals so your business appears in the Map Pack, the three listings that appear at the top of local search results. In Austin, where mobile search and 'near me' behavior is high given the young, tech-forward demographic, Map Pack visibility is often the most direct path to inbound calls. Ranking there requires an optimized GBP, consistent local citations, a review strategy, and website signals that reinforce local relevance. It is often the fastest-returning component of a local SEO strategy.",
  },
  {
    question: "Does SEO work for SaaS companies in Austin?",
    answer:
      "Yes, though the strategy looks different from local service business SEO. SaaS SEO focuses on topical authority, product-led content, keyword clusters around buyer intent at different funnel stages, and competing for the terms your ideal customers search while evaluating solutions. Austin's SaaS ecosystem is dense and competitive. Companies that build strong organic presence through content depth and technical SEO structure reduce their dependence on paid acquisition and build a compounding inbound channel that survives budget fluctuations.",
  },
  {
    question: "What is semantic SEO?",
    answer:
      "Semantic SEO is building content around topics, entities, and related concepts rather than repeating specific keywords. Search engines have evolved to understand meaning and context. A page built with semantic depth, covering a topic comprehensively and answering the related questions customers actually ask, outperforms a page that mechanically repeats a keyword. For Austin businesses competing in crowded markets, semantic depth is what earns durable rankings instead of fragile ones that collapse with the next algorithm update.",
  },
  {
    question: "What is GEO and AEO optimization?",
    answer:
      "GEO stands for Generative Engine Optimization and AEO stands for Answer Engine Optimization. Both refer to structuring your website and content so AI-powered tools like ChatGPT, Perplexity, Gemini, Bing AI, and Google AI Overviews surface your business in generated answers. Austin's tech-forward user base is already using these tools heavily to research vendors, agencies, and service providers. Businesses with properly structured content, clear entity signals, and FAQ-rich pages are the ones getting cited. We build those structures by default.",
  },
  {
    question: "How does AI search affect Austin businesses?",
    answer:
      "Austin's population skews young, tech-comfortable, and research-oriented. A founder evaluating SEO agencies, a startup CTO looking for a development partner, or a homeowner searching for an HVAC company is increasingly likely to start with an AI tool rather than a raw Google search. The businesses surfaced in those AI answers are the ones with well-structured websites, authoritative content, clear entity signals, and strong local SEO foundations. This shift rewards businesses that invest in modern SEO architecture and punishes those relying on outdated tactics.",
  },
  {
    question: "Can SEO replace paid advertising for Austin businesses?",
    answer:
      "Not immediately, but over time it can become a more cost-efficient primary channel. Paid ads stop the moment spend stops. Organic search compounds, meaning rankings earned today continue driving traffic next month, next quarter, and next year. For Austin startups and small businesses managing limited budgets, building SEO early creates an asset that grows in value over time. Many businesses run both channels simultaneously, using paid ads for immediate traffic while SEO builds the durable organic presence. The goal is reducing dependence on paid over time.",
  },
  {
    question: "Is mobile SEO critical for Austin businesses?",
    answer:
      "Austin's demographic profile, young, tech-native, mobile-first, makes mobile performance non-negotiable. Over 70% of local service searches in Austin happen on mobile devices. Google's mobile-first indexing means the mobile version of your site determines your rankings. A site that loads slowly or converts poorly on a phone is penalized in rankings and loses the visitors it does attract. Core Web Vitals, mobile layout, and click-to-call architecture are foundational to every ClevOps SEO engagement.",
  },
  {
    question: "What Austin industries benefit most from SEO?",
    answer:
      "Any Austin business with customers who search before they buy, which is most of them. Startups and SaaS companies benefit from topical authority and product-led content. Local service businesses like HVAC, cleaning, contractors, and landscapers benefit from local SEO and Map Pack visibility. Creative agencies, consultants, and law firms benefit from thought leadership content and category ranking. Med spas and fitness businesses benefit from local maps visibility and high-intent treatment or class searches. The industries where SEO matters most are the ones where customers research online before making a decision, which in Austin is nearly universal.",
  },
  {
    question: "Can you improve SEO on an existing Austin website?",
    answer:
      "Yes. Most of the Austin businesses we work with have existing sites that are underperforming in search. We start with a technical and content audit to identify exactly where visibility is being lost, what structural changes are needed, and what content gaps are costing you rankings. In many cases, targeted improvements to an existing site produce faster results than a full rebuild, particularly when the domain already has some history. We work from your current starting point and build toward what the competitive landscape requires.",
  },
  {
    question: "What does an Austin SEO audit include?",
    answer:
      "A ClevOps Austin SEO audit covers technical performance, including Core Web Vitals, crawlability, schema, and indexation status; on-page structure including heading hierarchy, content depth, and keyword alignment; local signals including Google Business Profile status, citation consistency, and review profile; competitor gap analysis showing where your Austin competitors are ranking that you are not; and an AI readiness review looking at how well your content is structured for generative search engines. The audit produces a prioritized action list tied to the opportunities with the highest business impact.",
  },
  {
    question: "What is the difference between local SEO and general SEO?",
    answer:
      "General SEO targets ranking for informational and commercial queries without geographic intent. Local SEO specifically targets location-based searches, appearing in Google's map results, 'near me' queries, and city or neighborhood searches. For an Austin service business, local SEO is more directly tied to calls and booked jobs than general SEO. For an Austin startup or SaaS company, a combination of both is typically right: local SEO for in-market customers and product-led content SEO for broader awareness and inbound lead generation.",
  },
  {
    question: "Is SEO worth the investment for small Austin businesses?",
    answer:
      "For most local Austin service businesses, SEO has a higher long-term return than paid advertising because the traffic does not stop when budget stops. A cleaning company or HVAC business ranking in Austin search results receives consistent inbound calls without paying per click. Austin's growth rate also means new residents are constantly searching for local service providers, meaning the market itself is expanding. The investment window is longer than paid ads, but the compounding return is why established Austin businesses consistently prioritize SEO even when referral networks are strong.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const RANK_STRUGGLES = [
  {
    heading: "Generic service pages with no Austin context",
    body: "A page that mentions Austin once in the title and nowhere else signals nothing local to search engines. Austin's startup-savvy and neighborhood-oriented audiences also disengage from content that feels copy-pasted from a national template.",
  },
  {
    heading: "No topical authority in a competitive market",
    body: "Austin's digital landscape is mature. Startups, agencies, and even local service businesses here often have sophisticated digital presences. Ranking without depth across your topic cluster is increasingly difficult in this market.",
  },
  {
    heading: "Unclaimed or underoptimized Google Business Profile",
    body: "Map Pack visibility is where most Austin local service calls originate. Businesses without a properly configured GBP are invisible in the results that drive the highest-intent traffic.",
  },
  {
    heading: "No neighborhood-level content",
    body: "Austin's neighborhoods, East Austin, South Congress, the Domain, Zilker, and Cedar Park have distinct search audiences. A single 'Austin' page misses the neighborhood-specific queries that often convert at higher rates than city-level terms.",
  },
  {
    heading: "Slow mobile performance despite tech-savvy audience",
    body: "Austin's mobile-first demographic expects fast, frictionless digital experiences. A site that fails Core Web Vitals ranks below faster competitors and converts fewer visitors even when it does rank.",
  },
  {
    heading: "No structure for AI search retrieval",
    body: "Austin's tech community uses ChatGPT, Perplexity, and AI Overviews at higher rates than most markets. Sites without clear headings, direct FAQ answers, schema markup, and semantic structure are invisible in AI-generated responses.",
  },
  {
    heading: "Missing schema markup",
    body: "Schema communicates your business type, services, location, and content meaning to search engines and AI tools. Without it, pages are harder to surface in rich results, local knowledge panels, and generative search answers.",
  },
  {
    heading: "No internal linking architecture",
    body: "Pages that exist in isolation distribute no authority across the site. For Austin businesses with multiple services, service areas, or content, a deliberate internal link structure is what makes the whole site rank rather than just a single page.",
  },
  {
    heading: "Inconsistent or missing local citations",
    body: "NAP consistency across directories and data aggregators is a foundational local SEO signal. Inconsistent information across the web confuses search engines and suppresses map rankings regardless of how well the rest of your site is optimized.",
  },
  {
    heading: "SEO treated as a one-time task",
    body: "Austin's competitive landscape shifts as new businesses enter and existing ones invest in digital. SEO that is set once and left produces diminishing returns. Sustained visibility requires monitoring, iteration, and adaptation to what competitors are doing.",
  },
]

const SEO_SERVICES = [
  {
    icon: MapPin,
    title: "Local SEO",
    body: "Complete local search optimization targeting Austin and surrounding areas including Round Rock, Cedar Park, Georgetown, and San Marcos. Service area pages, local signals, and citation authority built to capture neighborhood-level and city-wide searches.",
  },
  {
    icon: Globe,
    title: "Google Maps Optimization",
    body: "Google Business Profile audit, full optimization, and management. Category selection, service area configuration, photo optimization, Q&A content, and review strategy to improve Map Pack visibility for Austin's high-intent local searches.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    body: "Core Web Vitals, crawlability, indexation, site architecture, canonical structure, schema implementation, and mobile performance. The foundation that determines whether the rest of your SEO investment actually translates into rankings.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    body: "Title tags, meta descriptions, heading structure, semantic content depth, and internal anchor text optimized for search intent. Every page structured to compete for the specific queries your Austin customers use when they are ready to act.",
  },
  {
    icon: Link2,
    title: "Internal Linking Strategy",
    body: "A deliberate link architecture that distributes authority across your site, signals content relationships to search engines, and guides users from discovery pages to conversion pages without friction.",
  },
  {
    icon: Brain,
    title: "Semantic SEO",
    body: "Content structured around topics and entities rather than keyword repetition. Semantic depth signals expertise to Google and earns durable rankings, especially in competitive Austin categories where thin content cannot compete.",
  },
  {
    icon: Activity,
    title: "GEO and AEO Optimization",
    body: "Structuring content and technical signals so AI search tools can extract, understand, and cite your business accurately. Built for ChatGPT, Perplexity, Gemini, Bing AI, and Google AI Overviews, where Austin's tech audience increasingly searches.",
  },
  {
    icon: Layers,
    title: "Content Strategy",
    body: "A topical content plan mapped to how Austin customers and startup founders search across the full buyer journey. Every piece of content serves a ranking purpose and a conversion purpose, not just a publishing cadence.",
  },
  {
    icon: Building2,
    title: "Service Page SEO",
    body: "Dedicated, SEO-optimized pages for each service and service area. The specificity and depth that earns rankings for high-intent queries and converts those rankings into booked calls and form submissions.",
  },
  {
    icon: Target,
    title: "Conversion SEO",
    body: "SEO that connects visibility to revenue. Intent-aligned pages, clear CTAs, trust signals, and local credibility structured to turn search traffic into qualified leads, not just sessions in an analytics dashboard.",
  },
  {
    icon: Rocket,
    title: "Startup SEO Structure",
    body: "SEO architecture built for growth-stage companies that need organic traction without dependence on paid acquisition. Scalable site structure, topical authority frameworks, and product-led content strategies for Austin startups and SaaS companies.",
  },
]

const AUSTIN_INDUSTRIES = [
  {
    icon: "🚀",
    name: "Startups",
    body: "Austin's startup density is among the highest per capita in the US. Founders building early-stage companies need organic channels that compound over time rather than evaporating when ad budgets are cut. SEO built into product and marketing infrastructure from the start creates distribution that scales with the company rather than requiring constant reinvestment.",
  },
  {
    icon: "💻",
    name: "SaaS Companies",
    body: "Austin has become a significant SaaS hub, with companies across B2B, B2C, and vertical-specific markets. SaaS SEO involves building topical authority around buyer intent keywords at every funnel stage, from awareness through evaluation to purchase. Organic search reduces CAC and creates compounding inbound pipelines that paid advertising cannot replicate.",
  },
  {
    icon: "🎨",
    name: "Creative Agencies",
    body: "Austin's creative economy is thriving. Design studios, marketing agencies, and content companies compete for clients who research online before reaching out. SEO that ranks an agency for their specific niche, clients type, and service specialization puts them in front of searches at the exact moment a potential client is evaluating options.",
  },
  {
    icon: "💼",
    name: "Consultants and Coaches",
    body: "Austin has a deep consulting and professional coaching market driven by the startup and executive population. Consultants ranking for specific expertise-based searches attract clients who are already motivated and pre-qualified. Content SEO that demonstrates domain expertise turns search visibility into authority, which is the primary currency in consulting.",
  },
  {
    icon: "🔨",
    name: "Contractors",
    body: "Austin's relentless residential and commercial growth has created sustained demand for contractors. Renovation and construction searches in Austin neighborhoods like Tarrytown, Barton Hills, and Hyde Park have strong intent. Contractors ranking for specific service-area terms and appearing in the Map Pack for remodeling and construction searches capture leads that referral networks alone cannot provide.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Austin's summers consistently rank among the most extreme in the country, driving intense seasonal demand for AC repair and replacement. HVAC companies visible in Google Maps and organic results at the moment a system fails capture the high-value urgent calls that represent the most profitable HVAC revenue. Map Pack optimization and emergency-intent page structure are critical for this category.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Cleaning is one of the highest-volume local search categories in Austin. The city's density of apartments, condos, and single-family homes in neighborhoods like South Lamar, Bouldin Creek, and Mueller creates strong recurring demand. Ranking for Austin cleaning searches with proper local SEO creates a consistent pipeline of new bookings from customers who are already searching and ready to hire.",
  },
  {
    icon: "💪",
    name: "Fitness and Wellness",
    body: "Austin's health-conscious, active demographic creates strong demand for gyms, personal trainers, yoga studios, and wellness practitioners. Local SEO that ranks a fitness business for their neighborhood and specialty, alongside strong GBP visibility with photos and reviews, is how fitness businesses grow beyond their existing member network.",
  },
  {
    icon: "💆",
    name: "Med Spas",
    body: "Austin's med spa market is competitive and premium. Customers research treatments extensively before booking, reading reviews and comparing providers. SEO that ranks individual treatment pages for relevant Austin searches, alongside a strong review profile and GBP optimization, captures high-value customers at the research phase rather than losing them to competitors who are ranking for those terms.",
  },
  {
    icon: "⚖️",
    name: "Law Firms",
    body: "Legal searches carry some of the highest intent of any local category. Someone searching 'employment attorney Austin' or 'personal injury lawyer South Austin' is actively evaluating representation. Law firms ranking for practice-area and location terms capture potential clients at the decision point. Austin's professional population and startup community create strong demand across employment, business, and real estate law.",
  },
  {
    icon: "🚗",
    name: "Auto Detailers",
    body: "Austin's tech and startup culture means a high concentration of premium vehicles, particularly in areas like West Lake Hills, Rollingwood, and the Domain. Auto detailers capturing that market need visibility for searches like 'mobile detailing Austin' and 'car detailing east Austin' alongside strong visual proof and booking-ready pages. SEO paired with a premium website converts those searches into scheduled appointments.",
  },
  {
    icon: "🌿",
    name: "Modern Service Businesses",
    body: "Austin's local economy rewards businesses that feel authentic, professional, and digitally competent. Whether you run a landscaping company, a pest control business, or a specialty service, local search is how new customers find you. SEO that captures consistent search volume in your category turns Austin's steady population growth into a reliable new customer pipeline.",
  },
]

const COMPARISON_ROWS = [
  { label: "Startup awareness", generic: "No startup-specific positioning or content", clevops: "Founder-aware strategy with startup SEO architecture" },
  { label: "Content depth", generic: "Thin pages repeated across service areas", clevops: "Topical authority built across the full niche cluster" },
  { label: "Google Maps", generic: "GBP ignored or minimally configured", clevops: "Full GBP optimization and Map Pack strategy" },
  { label: "Technical SEO", generic: "Core Web Vitals not addressed", clevops: "Mobile performance, schema, architecture, crawlability" },
  { label: "AI search", generic: "Not considered in any strategy", clevops: "GEO + AEO structured for AI engine citation" },
  { label: "Local targeting", generic: "Generic 'Austin' city name mentions", clevops: "Neighborhood-level targeting across East Austin, Domain, South Congress" },
  { label: "Internal linking", generic: "Flat site with disconnected pages", clevops: "Deliberate architecture that distributes authority site-wide" },
  { label: "Conversion focus", generic: "Rankings in isolation without conversion context", clevops: "Intent-aligned pages with CTAs connected to leads" },
  { label: "Scalability", generic: "Single city page that cannot grow", clevops: "Architecture built to scale with your service area and growth" },
  { label: "Reporting", generic: "Vanity rankings without business context", clevops: "Traffic, map visibility, leads, and revenue impact" },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Austin Market and Growth Gap Audit",
    body: "We audit your current search footprint against your top Austin competitors, identifying keyword gaps, technical issues, and opportunities in your specific niche, whether that is local services, startup categories, or industry verticals.",
  },
  {
    step: "02",
    title: "Search Intent and Opportunity Mapping",
    body: "We map the highest-value keywords for your Austin market to buyer intent, separating the searches that represent ready-to-hire customers from those still in research mode. Every optimization target connects to actual leads.",
  },
  {
    step: "03",
    title: "Digital Architecture and Site Structure",
    body: "We build or restructure the page hierarchy, service page layout, internal linking framework, and local signal architecture that forms the foundation of all subsequent SEO work. Structure determines how well every other effort compounds.",
  },
  {
    step: "04",
    title: "Technical SEO and Performance Optimization",
    body: "Core Web Vitals, schema markup, metadata, crawlability, mobile performance, and indexation. Austin's tech-aware audience expects fast, polished digital experiences, and Google ranks accordingly.",
  },
  {
    step: "05",
    title: "Semantic Content and Topical Authority",
    body: "Service pages, local content, FAQ structures, and topic clusters developed around how Austin customers and startup founders actually search. Depth and specificity that earns and holds rankings in a competitive, digitally sophisticated market.",
  },
  {
    step: "06",
    title: "Local Authority and Maps Presence",
    body: "Google Business Profile management, citation consistency, review strategy, and neighborhood-level content that strengthens map visibility and local trust across Austin and surrounding areas including Round Rock, Cedar Park, and Georgetown.",
  },
  {
    step: "07",
    title: "Tracking, Iteration, and Scale",
    body: "Ranking monitoring, traffic analysis, call and form tracking connected to SEO activity. We adjust based on what is generating qualified leads, not just movement in rankings. Strategy evolves with your business and the competitive landscape.",
  },
]

const INTERNAL_LINKS = [
  { label: "Austin Market Overview", href: "/locations/texas/austin", description: "Austin local market context, industries, and growth landscape" },
  { label: "Website Design Austin", href: "/website-design-austin", description: "Conversion-focused website design for Austin businesses and startups" },
  { label: "Texas Service Area", href: "/locations/texas", description: "All ClevOps-served cities across Texas" },
  { label: "SEO Services Dallas", href: "/seo-services-dallas", description: "Local SEO strategy for Dallas and DFW businesses" },
  { label: "SEO Services Houston", href: "/seo-services-houston", description: "Local SEO for Houston service businesses" },
  { label: "Website Design Dallas", href: "/website-design-dallas", description: "Premium website design for Dallas service businesses" },
  { label: "Website Design Houston", href: "/website-design-houston", description: "High-converting websites for Houston businesses" },
  { label: "Get a Free SEO Audit", href: "/contact", description: "Talk to ClevOps about your Austin search visibility" },
]

// ── Hero visual ───────────────────────────────────────────────────────────────

function HeroVisual({ inView }: { inView: boolean }) {
  const keywords = [
    { label: "seo agency austin tx", pos: "2", up: true },
    { label: "local seo east austin", pos: "1", up: true },
    { label: "startup seo austin", pos: "3", up: true },
    { label: "austin local business seo", pos: "5", up: true },
  ]

  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.09) 0%, transparent 70%)" }}
        />
      </div>

      {/* Main growth dashboard card */}
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
              Organic Growth Dashboard · Austin, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                Growth Active
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
                  Scaling
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
                    animate={inView ? { width: `${90 - i * 11}%` } : {}}
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

          {/* Organic traffic growth chart */}
          <motion.div
            className="mt-2 pt-2 border-t border-white/[0.05]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 1.3 }}
          >
            <div className="text-[9px] uppercase tracking-[0.1em] font-medium text-co-text-muted mb-1.5">
              Organic Growth Curve
            </div>
            <svg viewBox="0 0 230 36" className="w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="austinFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F7FFF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#4F7FFF" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient id="austinLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F7FFF" />
                  <stop offset="100%" stopColor="#9B72FF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0,35 C 20,34 35,33 55,30 C 80,26 95,22 115,17 C 135,12 155,6 180,3 C 205,1 220,0.5 230,0 L 230,36 L 0,36 Z"
                fill="url(#austinFill)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: EASE_PREMIUM, delay: 1.5 }}
              />
              <motion.path
                d="M 0,35 C 20,34 35,33 55,30 C 80,26 95,22 115,17 C 135,12 155,6 180,3 C 205,1 220,0.5 230,0"
                fill="none"
                stroke="url(#austinLine)"
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
            { label: "Organic Traffic", value: "+312%", color: "#7BA3FF" },
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

      {/* Growth signal notification - top right */}
      <motion.div
        className="absolute top-1 right-0 z-10 w-[200px]"
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
              Startup · Austin, TX
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Moved to position #1 for target keyword
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
              {["Cleaning Co · East Austin", "HVAC Pro · Austin TX", "Agency · South Congress"].map((biz, i) => (
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
              <span className="text-[8.5px] text-co-text-muted">Austin coverage</span>
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

      {/* GEO + AEO badge - mid right */}
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

export function SeoAustinContent() {
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
            name: "SEO Services Austin, TX | Local SEO for Modern Businesses",
            description:
              "ClevOps helps Austin businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
            url: "https://www.clevops.co/seo-services-austin",
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
          { name: "SEO Services Austin", href: "/seo-services-austin" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="SEO Services Austin, TX"
        description="ClevOps provides local SEO services for Austin businesses, startups, and SaaS companies. Google Maps optimization, technical SEO, semantic content strategy, startup SEO architecture, and AI search readiness built to improve visibility and generate qualified leads."
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
              { label: "SEO Services Austin" },
            ]}
            className="mb-10"
          />

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
            >
              <SectionLabel>Austin, TX</SectionLabel>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-tight">
                SEO Services in Austin{" "}
                <span className="text-co-accent">Built for Modern Growth-Focused Businesses</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
                ClevOps helps Austin businesses improve local search visibility, Google rankings,
                map presence, and lead generation with SEO systems built for modern search behavior
                and AI discovery.
              </p>

              <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
                From Google Maps optimization and technical SEO to semantic content and GEO readiness, built for startups, local brands, and growth-focused businesses competing across Austin's digital landscape.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                  Get a Free SEO Audit
                </Button>
                <Button href="/website-design-austin" variant="outline" size="lg">
                  View Web Design Austin
                </Button>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { label: "Austin Local SEO" },
                  { label: "Startup SEO" },
                  { label: "Google Maps" },
                  { label: "Technical SEO" },
                  { label: "GEO + AEO" },
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
                  <p className="text-xl font-bold text-co-text">ATX</p>
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
                {["Local SEO", "Maps Optimization", "Startup SEO", "AI Search"].map((item) => (
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

      {/* ── Why SEO Matters in Austin ────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Austin Search Market</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Why SEO in Austin Is a Different Game
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Austin's economy has been reshaped by technology. The same city that incubated
                Dell, Whole Foods, and dozens of unicorn startups now has a resident population
                that treats digital research as the default first step before any purchase decision.
                Founders evaluate SEO agencies the same way they evaluate SaaS tools: with tabs open,
                comparisons made, and a decision reached before a single conversation happens.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For local service businesses, this means the homeowner in Bouldin Creek searching
                for a cleaning company or an HVAC tech in East Austin is arriving at that search
                primed to evaluate and decide fast. For startups and modern brands, it means
                organic search is a distribution channel that compounds rather than resets with
                every budget cycle.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Austin's population growth, one of the fastest in the US, keeps demand expanding.
                But so does competition. The businesses appearing in local search and AI-generated
                answers are capturing that growth. The ones without solid SEO foundations are watching
                it go to whoever does.
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
                  icon: Rocket,
                  title: "Startup-driven digital behavior",
                  body: "Austin's high concentration of founders, startup employees, and tech workers sets a baseline of digital sophistication that exceeds most US markets. Businesses that meet that standard online build trust before the first conversation.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first, research-heavy buying",
                  body: "The majority of Austin local searches happen on phones. The typical customer compares multiple options before reaching out. Fast mobile performance, clear positioning, and easy booking paths are what convert that research into calls.",
                },
                {
                  icon: MapPin,
                  title: "Neighborhood-level local intent",
                  body: "Searches in Austin often carry neighborhood specificity: East Austin, South Congress, the Domain, Zilker. Local SEO that captures neighborhood-level queries converts at higher rates than city-level terms alone.",
                },
                {
                  icon: Brain,
                  title: "AI search at above-average adoption",
                  body: "Austin's tech-native population uses ChatGPT, Perplexity, and AI Overviews for research at higher rates than most markets. Businesses structured for AI answer retrieval are visible where competitors are not.",
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
              Why Most Austin Businesses Struggle to Rank
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Weak search performance almost never comes from a single issue. It comes from a
              predictable combination of structural, technical, and strategic gaps that show up
              clearly in an audit. These are the most common reasons Austin businesses stay invisible
              in the searches that matter most to their growth.
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

      {/* ── What ClevOps SEO Focuses On ──────────────────────────────────── */}
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
              The ClevOps SEO System for Austin Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Visibility in Austin's competitive, tech-forward market requires more than a few
              optimized pages. These are the disciplines we apply to improve search rankings,
              map presence, and lead generation for Austin businesses and startups.
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

      {/* ── Austin Industries ─────────────────────────────────────────────── */}
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
              <SectionLabel>Austin Industries</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              SEO for Austin Businesses and Startups
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Austin's economy is unusually diverse: startups and SaaS companies sit alongside
              local service businesses, creative agencies, and established professional firms.
              Search behavior varies significantly across these categories. Effective SEO is built
              around those differences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {AUSTIN_INDUSTRIES.map((industry) => (
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
                Google Maps Is Where Austin Local Searches Convert
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                When someone in Austin searches for a service on their phone, the Map Pack at the
                top of results is often the only section they engage with before calling. The three
                businesses listed there receive a disproportionate share of clicks. For an HVAC
                company in North Austin, a cleaning service in Bouldin Creek, or a contractor in
                Tarrytown, Map Pack visibility is the most direct path from search to booked job.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Austin's competitive service market means map rankings are actively contested.
                The businesses appearing in those positions have deliberately optimized Google
                Business Profiles, strong review signals, consistent citations, and websites that
                reinforce their local relevance. Getting there requires all four working together.
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
                "Service area setup for Austin neighborhoods and surrounding cities",
                "Review strategy and response management",
                "Photo and media optimization for Austin service context",
                "Citation audit and NAP consistency across directories",
                "Local signals that reinforce map authority",
                "Q&A management and content optimization",
                "Competitor Map Pack gap analysis for your Austin niche",
                "Ongoing GBP monitoring and update management",
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
              Built for Google and the AI Engines Austin Uses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Austin's tech-forward population uses AI tools, ChatGPT, Perplexity, Gemini, Bing AI,
              and Google AI Overviews, to research businesses, evaluate services, and find local
              recommendations at higher rates than most US markets. The businesses appearing in those
              AI-generated answers are not there by accident. We build the structural characteristics
              they share into every engagement.
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
                body: "Clear headings, direct answers, and FAQ blocks organized so AI engines can extract and surface your content accurately when answering Austin-related business queries from local customers.",
              },
              {
                icon: MapPin,
                title: "Austin Entity Signals",
                body: "Business type, neighborhood coverage, service area, and local context communicated through schema and structured content so AI tools understand who you are and where you operate in Austin.",
              },
              {
                icon: Layers,
                title: "Semantic Content Architecture",
                body: "Content built around user intent and topic clusters rather than keyword frequency. This earns featured snippets, AI citations, and rankings that hold through algorithm changes rather than collapse with them.",
              },
              {
                icon: FileText,
                title: "Topical Authority",
                body: "Comprehensive coverage of the topics your Austin customers and startup peers search. Depth across a niche signals domain expertise to both Google and AI search engines, which rewards with sustained visibility.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Credibility Signals",
                body: "Reviews, credentials, authoritative content, and consistent entity information build the trust scores that search engines and AI tools use to decide which businesses to recommend in Austin searches.",
              },
              {
                icon: Globe,
                title: "GEO and AEO Optimization",
                body: "Generative Engine Optimization and Answer Engine Optimization disciplines applied so AI tools can identify, understand, and accurately cite your Austin business in the generated answers your potential customers are reading.",
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
                Rankings Are Inputs. Leads Are the Output.
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                An Austin business can rank on page one and still generate few actual leads if the
                traffic is misaligned with buyer intent, the pages fail to establish trust, or
                the path from search to contact has too much friction. Visibility and conversion
                are two different problems that have to be solved together.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Austin's research-oriented buyers take roughly 60 seconds to decide whether to
                engage further or move to the next option. A site that ranks but does not
                immediately communicate who you serve, what you do, and why you are credible
                loses that window. We build SEO strategies where the ranking and the conversion
                logic are designed together from the start.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For startups, this means content that attracts the right intent signals at each
                funnel stage. For local service businesses, it means landing on the phone number
                with no obstacles between search and call. The measurement that matters is not
                impressions. It is qualified inbound contacts.
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
                  body: "Separating the keywords that represent ready-to-hire customers from those still in discovery mode. Austin buyers decide fast once intent is formed, so targeting the right moment matters more than raw traffic volume.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile conversion architecture",
                  body: "Austin's mobile-first demographic expects frictionless digital interactions. Fast load times, visible phone numbers, minimal-field forms, and clean mobile layouts convert significantly better than desktop-first designs.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust signals positioned strategically",
                  body: "Reviews, certifications, client types, and service area confirmation placed where they remove hesitation. Austin's research-driven buyers make faster decisions when trust signals appear before they start looking for reasons to leave.",
                },
                {
                  icon: BarChart3,
                  title: "Conversion tracking tied to SEO",
                  body: "Which keywords and pages produce calls and form submissions, not just traffic. Strategy is adjusted based on what is generating revenue rather than what is moving in a rankings dashboard.",
                },
                {
                  icon: Zap,
                  title: "Frictionless contact paths",
                  body: "Click-to-call, clear CTAs above the fold, and booking flows that work on mobile. Every obstacle removed between search and contact increases the return on every ranking earned.",
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
              Most SEO agencies apply the same templated playbook regardless of market. Austin's
              digitally sophisticated buyers and competitive business landscape require a different
              approach. Here is what that difference looks like in practice.
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
                The Austin SEO Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not offer SEO packages or predetermined deliverable lists. We start from
                the actual competitive landscape of your Austin market, your current site's
                technical state, and the specific search behavior of your customer base or
                target audience.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every engagement starts with an audit that shows exactly where you stand today,
                what your top Austin competitors are doing that you are not, and what it would
                take to compete effectively. The work that follows is methodical, measurable,
                and connected to the business outcome of qualified inbound leads.
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
              title="Austin SEO Questions, Answered"
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
              Explore the Texas Digital Cluster
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
              If Your Austin Business Is Invisible in Local Search, Stronger Competitors Are Capturing Those Customers First.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free SEO audit from ClevOps shows you exactly where your Austin search visibility
              is falling short, which keywords you should be ranking for, and what it would take to
              compete in local search, Google Maps, and AI-powered discovery.
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
              <span>Built around your Austin market</span>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
