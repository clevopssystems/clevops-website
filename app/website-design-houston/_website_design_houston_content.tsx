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
  RefreshCw,
  MousePointer,
  Mail,
  Star,
  LayoutTemplate,
  Globe,
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
    question: "How much does website design cost in Houston?",
    answer:
      "Website design for Houston businesses starts at $999 at ClevOps, with an ongoing care plan from $199 per month. The final cost depends on the number of pages, service area coverage, SEO depth, and any lead capture integrations required. Houston is a large metro with strong competition across contractors, HVAC, roofing, and healthcare. The right question is not what the website costs but what a consistent stream of qualified leads is worth to your business. For most Houston service businesses, one new recurring client covers several months of investment.",
  },
  {
    question: "How long does it take to build a website in Houston?",
    answer:
      "Most Houston clients go live within 14 days of starting. We run design, development, copywriting, and technical SEO simultaneously. Houston businesses often serve large geographic footprints spanning multiple ZIP codes and suburbs. We map service area targeting into the architecture from day one so nothing is retrofitted after launch.",
  },
  {
    question: "Do Houston businesses need SEO built into their website?",
    answer:
      "Yes. A website without SEO structure is a digital brochure with no distribution. Houston is one of the most competitive local service markets in the country. For your site to appear when someone searches for a roofing company in Katy or an HVAC company in The Woodlands, it needs technical SEO foundations, semantic content, and local signals baked in from the start. We include all of that in every build.",
  },
  {
    question: "Can you redesign my existing Houston business website?",
    answer:
      "Yes. We handle full redesigns for Houston businesses with underperforming sites. We begin by auditing what your current site does well and where it is costing you customers, then rebuild with a conversion-focused architecture. Existing SEO value is preserved through the migration wherever possible.",
  },
  {
    question: "Do you build websites for contractors in Houston?",
    answer:
      "Yes. Contractor websites are a core service. Houston has one of the densest contractor markets in the US, with roofing companies, HVAC businesses, plumbers, electricians, and general contractors competing hard for local search visibility. Contractor sites need project galleries, license and insurance displays, service area pages, and quote request flows that qualify leads before they call. We build all of that.",
  },
  {
    question: "What makes a website convert more leads?",
    answer:
      "A converting website does four things well: it communicates exactly what you do and where within 3 seconds of landing, it builds trust through proof and credentials, it removes friction from the path to contact, and it loads fast on mobile. Most Houston business websites fail on at least two of these. We engineer all four into every site we build.",
  },
  {
    question: "Is mobile optimization important for Houston businesses?",
    answer:
      "It is essential. Over 70% of local service searches in Houston happen on mobile phones. Houston's sprawl means customers are often searching while out, comparing options on the move. If your website loads slowly, looks broken on a phone, or makes it hard to call or book, you are losing the majority of your potential leads before they ever read your offer.",
  },
  {
    question: "Do you build websites for HVAC companies in Houston?",
    answer:
      "Yes. Houston's Gulf Coast climate creates one of the highest-demand HVAC markets in the country. Summer AC failures and winter cold snaps drive urgent searches where customers call the first business that looks trustworthy. HVAC websites need emergency CTAs above the fold, click-to-call on every screen, 24/7 availability displays, and sub-2-second mobile load times. We build all of that.",
  },
  {
    question: "What is the difference between a normal website and a conversion-focused website?",
    answer:
      "A normal website presents information. A conversion-focused website moves visitors toward a specific action: calling, booking, or submitting a form. The difference is in how the page is structured, where attention is directed, how trust is built, and how friction is removed at every step. Most business websites are informational. ClevOps websites are built around a conversion goal from the first element on the page.",
  },
  {
    question: "Do you build landing pages for Houston businesses?",
    answer:
      "Yes. We build standalone landing pages for Houston businesses running paid ads, seasonal campaigns, or specific service promotions. Landing pages built around a single conversion goal, with no navigation distractions, work particularly well for Google Ads and Meta Ads traffic where each visitor has a defined intent.",
  },
  {
    question: "What is AI search optimization and does it matter?",
    answer:
      "AI search engines including ChatGPT, Perplexity, Gemini, and Bing AI increasingly answer local business queries directly. A Houston roofing company or HVAC business that appears in those AI-generated answers gets traffic that never touches a traditional search results page. Websites surfaced by AI share specific structural traits: clear headings, direct FAQ content, semantic entity signals, and local relevance. We build all of that into every project.",
  },
  {
    question: "How do I know if my Houston website is losing leads?",
    answer:
      "If your site gets visitors but generates few calls or form submissions, you are losing leads. Common signs include high bounce rates, low time on page, most calls coming from referrals rather than Google, and zero form submissions from people who do not already know you. A free audit from ClevOps shows exactly where your current site drops conversions.",
  },
  {
    question: "Do you work with small businesses in Houston?",
    answer:
      "Yes. Our core client is a small to mid-size local service business in Houston or the surrounding metro. You do not need to be a large company to benefit from a conversion-focused website. Small businesses often see a faster return because they are competing against larger operations where a properly built site creates a disproportionate visibility advantage.",
  },
  {
    question: "Can a website help me compete against larger Houston contractors?",
    answer:
      "Yes. A well-built website with strong SEO, fast mobile performance, and clear conversion architecture competes effectively against much larger competitors. Large companies often have bloated, slow sites built years ago. A focused, modern website built around conversion and local search can outperform them in specific neighborhoods and service categories.",
  },
  {
    question: "Do you cover service area pages for Houston suburbs?",
    answer:
      "Yes. Houston's geography means customers in Sugar Land, Katy, The Woodlands, Pearland, and Pasadena are often searching for services with suburb-specific terms. We build service area pages targeting your actual coverage zones so your site ranks for searches happening across the Houston metro, not just the city core.",
  },
  {
    question: "Should I build a new website or improve my existing one?",
    answer:
      "It depends on your current site's foundation. If it is on a platform that limits SEO and customization, a new build is usually the better long-term investment. If the technical base is solid but design and copy are underperforming, a redesign or optimization engagement may be more efficient. We audit your existing site before recommending a direction.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const FAILURE_REASONS = [
  {
    heading: "No clear above-the-fold message",
    body: "Houston customers searching for a contractor, roofer, or cleaner make snap decisions. If they cannot tell what you do, where you serve, and why to trust you in the first 3 seconds, they leave.",
  },
  {
    heading: "Slow load speed on mobile",
    body: "Houston's service searches are dominated by mobile traffic. A site taking 4 or more seconds to load loses more than half its visitors before they see anything. Speed is not optional.",
  },
  {
    heading: "No ZIP code or suburb targeting",
    body: "Houston spans a massive geographic footprint. A site that says 'serving Houston' but has no content for Katy, Sugar Land, The Woodlands, or Pearland is invisible to customers searching in those areas.",
  },
  {
    heading: "Weak trust signals",
    body: "No license numbers, no reviews, no photos of real work. In a market with Houston's contractor density, customers need reasons to trust you before they ever make contact. A generic site provides none.",
  },
  {
    heading: "Confusing contact path",
    body: "If a visitor cannot find your phone number, submit a form, or request a quote within two clicks, they are on your competitor's site. Friction kills conversions.",
  },
  {
    heading: "Generic template design",
    body: "A site that looks identical to dozens of other local service businesses communicates nothing about your quality or reliability. In Houston's competitive market, that is fatal.",
  },
  {
    heading: "Poor service page structure",
    body: "Vague service descriptions with no process, pricing range, or area specificity fail to qualify leads. Customers want to know what you do, how, and whether you cover their neighborhood.",
  },
  {
    heading: "No technical SEO foundation",
    body: "Without proper metadata, heading structure, internal linking, and schema, your site cannot appear in the searches that drive booked calls and quote requests.",
  },
  {
    heading: "No AI-readable content structure",
    body: "AI engines are increasingly surfacing local business answers. Sites without structured headings, FAQ content, and local entity signals are left out of those answers entirely.",
  },
  {
    heading: "No lead capture system",
    body: "Phone calls alone leave money on the table. Visitors who do not call immediately need a form, callback option, or booking path. Without one, they are gone.",
  },
]

const CONVERSION_PILLARS = [
  { icon: Zap, title: "3-second clarity", body: "Visitors must understand what you do, which Houston ZIP codes you cover, and why to choose you before they scroll." },
  { icon: Smartphone, title: "Fast mobile experience", body: "Sub-2-second target load time. Click-to-call. Clean layout on any screen. Houston local searches are predominantly mobile." },
  { icon: ShieldCheck, title: "Trust signals", body: "Reviews, licensing details, service guarantees, and credentials placed where they eliminate hesitation before a call." },
  { icon: Star, title: "Proof sections", body: "Real project photos, before-and-after work, and client results that build confidence before the first phone interaction." },
  { icon: Target, title: "Clear calls to action", body: "One primary action per page. Phone number visible on every screen. Booking and quote request paths with zero friction." },
  { icon: Search, title: "Local SEO structure", body: "Page hierarchy, suburb targeting, metadata, and semantic content built to compete across Houston and its surrounding metro." },
  { icon: Layers, title: "Industry-specific content", body: "Copy and structure tailored to how Houston's roofing, HVAC, cleaning, and contractor customers search and decide." },
  { icon: MapPin, title: "Service area coverage", body: "Neighborhood and ZIP code signals for Houston proper, the Energy Corridor, Heights, Katy, Sugar Land, Pearland, and The Woodlands." },
  { icon: MousePointer, title: "Contact friction reduction", body: "Fewer clicks to reach you. Prefilled forms. Visible phone numbers. Every barrier removed from the path to inquiry." },
  { icon: Mail, title: "Lead capture flow", body: "Multi-path capture: phone, form, and booking. Automated notifications so no inquiry goes unanswered." },
]

const SERVICES = [
  { icon: LayoutTemplate, title: "Custom Website Design", body: "Built from scratch around your Houston business, your market, and your conversion goals. No templates, no off-the-shelf shortcuts." },
  { icon: RefreshCw, title: "Website Redesign", body: "Rebuild underperforming sites with a conversion-first architecture while preserving existing SEO equity and domain authority." },
  { icon: Target, title: "Landing Page Design", body: "Single-purpose pages for paid ads, seasonal campaigns, or specific service offers. Built to convert one action." },
  { icon: Search, title: "Local SEO Website Structure", body: "Service area pages, suburb targeting, internal linking, and technical foundations built to rank across the Houston metro." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", body: "Identify where visitors drop off and restructure pages to increase contact rates on existing sites." },
  { icon: Smartphone, title: "Mobile-First Design", body: "Performance-optimized for the mobile searches that drive the majority of local lead volume across Houston." },
  { icon: Mail, title: "Lead Capture Systems", body: "Multi-path capture with form integration, CRM connection, and automated response for every inquiry." },
  { icon: Brain, title: "AI Search Ready Architecture", body: "Structured headings, FAQ blocks, and semantic content built to surface in Google, ChatGPT, Perplexity, and Gemini." },
]

const INDUSTRIES = [
  {
    icon: "🔨",
    name: "Contractors",
    body: "Houston has one of the densest contractor markets in the US. The businesses winning local search have proof-first websites: project galleries, license and insurance displays, detailed service area coverage, and a quote flow that qualifies leads before they call. Generic sites are invisible against this level of competition.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Houston's heat and humidity create year-round urgency in the HVAC market. When AC fails in Sugar Land in July or a heat pump goes down in The Woodlands, customers are searching and calling fast. Emergency CTAs above the fold, click-to-call on every screen, and sub-2-second mobile load times separate the businesses that get the call from those that do not.",
  },
  {
    icon: "🏠",
    name: "Roofing Companies",
    body: "Gulf Coast storm seasons drive recurring roofing demand across the Houston metro. Roofers competing for hail damage and hurricane repair jobs need more than a directory listing. Insurance claim guidance pages, licensing credentials, project galleries, and a clear quote flow build the credibility that converts site visits into signed estimates.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Houston's large residential market and growing professional class drive consistent cleaning demand. Trust is the deciding factor: visible reviews, a clear service area list, before-and-after imagery, and a frictionless booking path separate cleaning businesses that grow online from those still waiting on referrals.",
  },
  {
    icon: "🏥",
    name: "Healthcare Businesses",
    body: "Houston is home to the Texas Medical Center and a sprawling network of clinics, specialty practices, and health service businesses. Healthcare customers research thoroughly before booking. A professional website with clear service descriptions, credentials, location information, and an easy appointment path converts that research into revenue.",
  },
  {
    icon: "🚚",
    name: "Logistics and Industrial Services",
    body: "Houston's port economy and energy sector create unique demand for logistics, equipment maintenance, and industrial service businesses. B2B customers in this market evaluate credibility fast. A professional site with clear service capabilities, relevant industry experience, and easy request forms positions your business to win those searches.",
  },
  {
    icon: "⚖️",
    name: "Law Firms",
    body: "Houston law firms compete for high-intent searches from people who need help immediately. A firm website that establishes credibility in seconds, with bar credentials visible, practice areas clearly defined, and contact options prominent, converts those urgent searchers into consultations.",
  },
  {
    icon: "🔧",
    name: "Plumbers",
    body: "Plumbing is emergency-driven. A phone number above the fold, a 24/7 availability display, service area confirmation for Houston ZIP codes, and sub-2-second mobile loading are what separate the plumbers that get the call from those that do not. Houston homeowners searching for a plumber are calling the first company that looks trustworthy.",
  },
  {
    icon: "⚡",
    name: "Electricians",
    body: "Electrical work requires licensed, trusted professionals. A Houston electrician website displaying licensing prominently, showing residential and commercial capability across neighborhoods like Heights, Midtown, and Pearland, and making it easy to request a quote builds confidence with customers making safety-critical decisions.",
  },
  {
    icon: "🚗",
    name: "Auto Detailing",
    body: "Houston's car culture and concentration of luxury vehicles in areas like River Oaks, Memorial, and West University Place mean premium visual presentation directly affects what clients are willing to pay. A portfolio of real work, service package pages, and online booking with deposits remove the friction between a search and a confirmed appointment.",
  },
  {
    icon: "🌿",
    name: "Landscaping Companies",
    body: "Houston's sprawling suburban footprint and year-round warm climate drive consistent landscaping demand from Katy to Pearland. Visual proof drives decisions: project galleries, service area pages, and a quote request flow that shows clearly which Houston suburbs you serve convert comparison-shoppers into paying clients.",
  },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Houston Market and Business Audit",
    body: "We review your current online presence, your competitors across the Houston metro, and the search landscape for your specific service category. This tells us exactly what the site needs to compete.",
  },
  {
    step: "02",
    title: "Positioning and Offer Strategy",
    body: "We define what you do, which Houston ZIP codes and suburbs you serve, and what makes you worth choosing in a market this competitive. Positioning is the foundation everything else is built on.",
  },
  {
    step: "03",
    title: "Website Structure and Conversion Map",
    body: "We map every page, its purpose, and its conversion goal before a single design element is created. Houston's geographic complexity often means service area pages are part of the plan from day one.",
  },
  {
    step: "04",
    title: "Premium Design and Development",
    body: "Custom design built around your brand and Houston market, developed for performance and scalability. No templates, no off-the-shelf shortcuts.",
  },
  {
    step: "05",
    title: "SEO, Speed, and Mobile Optimization",
    body: "Technical SEO foundation, suburb-level metadata, schema markup, performance optimization, and mobile testing on real devices before launch.",
  },
  {
    step: "06",
    title: "Launch, Tracking, and Growth",
    body: "We launch, connect conversion tracking and analytics, and monitor performance. The engagement does not end at launch.",
  },
]

const COMPARISON_ROWS = [
  { label: "Strategy", generic: "None", clevops: "Conversion-mapped before design starts" },
  { label: "Design", generic: "Template-based", clevops: "Custom to your business and Houston market" },
  { label: "Mobile experience", generic: "Functional at best", clevops: "Optimized for fast booking on phones" },
  { label: "SEO", generic: "Afterthought", clevops: "Built into structure from day one" },
  { label: "AI search readiness", generic: "Not considered", clevops: "Structured for AI answer extraction" },
  { label: "Lead capture", generic: "Contact page only", clevops: "Multi-path with CRM integration" },
  { label: "Speed", generic: "3 to 6 second load time", clevops: "Sub-2-second target" },
  { label: "Local relevance", generic: "Generic city mention", clevops: "ZIP code and suburb targeting across Houston metro" },
  { label: "Scalability", generic: "Rebuild needed to grow", clevops: "Designed to scale from launch" },
]

const PRICING_FACTORS = [
  "Number of pages and Houston service area pages required",
  "Depth of local SEO and suburb-level content strategy",
  "Custom design scope and brand complexity",
  "Lead capture integrations and booking systems",
  "Content writing and copywriting requirements",
  "CRM, form, and third-party integrations",
  "Ongoing care plan and growth support needs",
]

const INTERNAL_LINKS = [
  { label: "Texas Service Area", href: "/locations/texas", description: "All ClevOps-served cities across Texas" },
  { label: "Houston, TX", href: "/locations/texas/houston", description: "Houston market context, industries, and local strategy" },
  { label: "Dallas, TX", href: "/locations/texas/dallas", description: "Website design for Dallas businesses" },
  { label: "Website Design Dallas", href: "/website-design-dallas", description: "Our conversion-focused Dallas web design service" },
  { label: "SEO Services Dallas", href: "/seo-services-dallas", description: "Local SEO strategy for Texas businesses" },
  { label: "Get a Free Audit", href: "/contact", description: "Talk to ClevOps about your Houston website" },
]

// ── Hero visual ───────────────────────────────────────────────────────────────

function HeroVisual({ inView }: { inView: boolean }) {
  return (
    <div className="relative hidden lg:block h-[500px] xl:h-[520px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px]"
          style={{ background: "radial-gradient(ellipse, rgba(155,114,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Main performance card ── */}
      <motion.div
        className="absolute left-6 right-6 top-12 bottom-10 rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: "rgba(9,9,14,0.88)",
          border: "1px solid rgba(155,114,255,0.18)",
          backdropFilter: "blur(20px)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(155,114,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.35 }}
      >
        {/* Top accent bar */}
        <div
          className="h-[2px] flex-shrink-0"
          style={{ background: "linear-gradient(90deg, #9B72FF, #4F7FFF)" }}
        />

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-4 pb-3 border-b border-white/[0.05]">
          <div>
            <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-co-text-muted mb-1">
              Conversion Performance · Houston, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                3.4x Avg. Lift
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
                  +31%
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

        {/* Chart */}
        <div className="px-5 pt-3 pb-0 flex-1 min-h-0">
          <svg viewBox="0 0 260 75" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wdhFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B72FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#9B72FF" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="wdhLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9B72FF" />
                <stop offset="100%" stopColor="#4F7FFF" />
              </linearGradient>
            </defs>
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="50" x2="260" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <motion.path
              d="M 0,72 C 28,68 42,62 65,55 C 92,47 108,41 130,34 C 155,27 175,18 205,12 C 228,7 246,4 260,2 L 260,75 L 0,75 Z"
              fill="url(#wdhFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 1.0 }}
            />
            <motion.path
              d="M 0,72 C 28,68 42,62 65,55 C 92,47 108,41 130,34 C 155,27 175,18 205,12 C 228,7 246,4 260,2"
              fill="none"
              stroke="url(#wdhLine)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
            />
            <circle cx="260" cy="2" r="5" fill="rgba(79,127,255,0.25)" />
            <circle cx="260" cy="2" r="2.5" fill="#4F7FFF" />
          </svg>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Local Searches/mo", value: "12,000+", color: "#B87FFF" },
            { label: "Conversion Lift", value: "3.4x", color: "#4FC8FF" },
            { label: "Mobile Traffic", value: "76%", color: "#4ADE80" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <div
                className="font-black tracking-tighter leading-none"
                style={{
                  color: m.color,
                  fontSize: m.value.length > 6 ? "0.78rem" : "1.05rem",
                }}
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

      {/* ── New inquiry notification — top right ── */}
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
                New Inquiry
              </span>
              <span className="text-[8.5px] text-co-text-muted ml-auto">2m ago</span>
            </div>
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">
              HVAC Co. · Houston
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Audit request · website form
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Gulf Coast coverage card — bottom left ── */}
      <motion.div
        className="absolute bottom-1 left-0 z-10 w-[220px]"
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
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">
                Houston Metro Visibility
              </span>
              <div
                className="flex items-center gap-1 px-1.5 py-0.5 rounded-lg"
                style={{
                  background: "rgba(79,127,255,0.1)",
                  border: "1px solid rgba(79,127,255,0.2)",
                }}
              >
                <TrendingUp size={8} style={{ color: "#7BA3FF" }} />
                <span className="text-[8px] font-bold" style={{ color: "#7BA3FF" }}>
                  Growing
                </span>
              </div>
            </div>
            <div className="flex items-end gap-[3px] h-7 mb-2">
              {[16, 26, 22, 38, 52, 65, 78, 94].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-[2px]"
                  style={{
                    background:
                      i === 7
                        ? "linear-gradient(180deg, #9B72FF, #4F7FFF)"
                        : `rgba(155,114,255,${0.1 + i * 0.04})`,
                  }}
                  initial={{ height: 0 }}
                  animate={inView ? { height: `${h}%` } : {}}
                  transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 1.0 + i * 0.06 }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[8.5px] text-co-text-muted">8-week trend</span>
              <span
                className="text-[11.5px] font-black tracking-tighter"
                style={{ color: "#7BA3FF" }}
              >
                +94% lift
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── AI Search Ready badge — mid right ── */}
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
            background: "rgba(79,127,255,0.1)",
            border: "1px solid rgba(79,127,255,0.28)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 20px rgba(79,127,255,0.12)",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Brain size={10} style={{ color: "#7BA3FF" }} />
            <span
              className="text-[10.5px] font-bold whitespace-nowrap"
              style={{ color: "#7BA3FF" }}
            >
              AI Search Ready
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function WebsiteDesignHoustonContent() {
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
            name: "Website Design Houston, TX | High-Converting Websites for Local Businesses",
            description:
              "ClevOps builds high-converting websites for Houston businesses that need more calls, leads, bookings, and local search visibility.",
            url: "https://www.clevops.co/website-design-houston",
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
          { name: "Website Design Houston", href: "/website-design-houston" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="Website Design Houston, TX"
        description="ClevOps builds high-converting websites for Houston local service businesses. Premium web design with SEO, mobile optimization, and lead capture built in."
        serviceType="Web Design"
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
              { label: "Website Design Houston" },
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
                Website Design in Houston{" "}
                <span className="text-co-accent">Built to Turn Visitors Into Leads</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
                ClevOps builds premium, conversion-focused websites for Houston service businesses
                that need more booked calls, qualified leads, and stronger visibility across the
                Gulf Coast metro and beyond.
              </p>

              <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
                Built for contractors, HVAC companies, roofers, healthcare businesses, and service companies competing across Houston, Sugar Land, Katy, The Woodlands, Pearland, and the surrounding metro.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                  Get a Free Website Audit
                </Button>
                <Button href="/locations/texas/houston" variant="outline" size="lg">
                  View Houston Strategy
                </Button>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { label: "Houston Web Design" },
                  { label: "SEO-Ready" },
                  { label: "Mobile-First" },
                  { label: "Built for Leads" },
                  { label: "AI Search Ready" },
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
                  <p className="text-2xl font-bold text-co-text">14</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Day delivery</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-xl font-bold text-co-text">$999</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Starting price</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-base font-bold text-co-accent">SEO</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Built in from day one</p>
                </div>
                <div className="rounded-xl border border-co-border bg-co-card p-4">
                  <p className="text-base font-bold text-co-accent">AI</p>
                  <p className="text-xs text-co-text-secondary mt-1 leading-tight">Search ready</p>
                </div>
              </div>

              {/* Mini value row */}
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {["Strategy", "Design", "SEO", "Lead Capture"].map((item) => (
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

      {/* ── Buyer Intent Intro ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>The Real Search Intent</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Houston businesses searching for web design want more booked jobs, not a prettier page.
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                When a Houston contractor, HVAC company, or roofing business searches for "website
                design Houston," they are not shopping for aesthetics. They need a site that generates
                inbound calls, drives quote requests, captures form submissions, and establishes the
                kind of credibility that closes new clients before the first phone conversation.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Houston is the fourth-largest city in the US and one of its most geographically complex.
                From the Energy Corridor and Heights to Sugar Land, Katy, The Woodlands, and Pearland,
                service businesses are competing across dozens of distinct search markets simultaneously.
                Over 76% of those searches happen on mobile phones.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                A website that fails to communicate trust, service area clarity, and clear next steps is
                not neutral in that competitive environment. It is actively routing customers to whoever
                does those things better.
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
                  icon: TrendingUp,
                  title: "Lead generation over decoration",
                  body: "A conversion-focused site is structured to move visitors toward a specific action: calling, booking, or submitting a form. Design serves that goal, not the other way around.",
                },
                {
                  icon: MapPin,
                  title: "ZIP code-level local relevance",
                  body: "Houston's sprawl means suburb-specific signals matter. Customers in Katy, Pearland, and The Woodlands are searching with area-specific intent. Your site needs to answer it.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first customer behavior",
                  body: "The majority of Houston service searches happen on phones. A site not built for fast, frictionless mobile use loses those visitors the moment it loads.",
                },
                {
                  icon: Search,
                  title: "Google and AI search visibility",
                  body: "Appearing in Houston local searches requires proper SEO architecture built in from the start. Bolting it on afterward rarely catches the businesses that built it right from day one.",
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

      {/* ── Why Websites Fail ────────────────────────────────────────────── */}
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
              <SectionLabel>Common Mistakes</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Why Most Houston Business Websites Do Not Convert
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              A website that cannot generate leads is not a marketing asset. It is a cost with no return.
              These are the ten reasons most Houston business websites fail to turn visitors into customers
              in one of the most competitive service markets in the country.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {FAILURE_REASONS.map((item) => (
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

      {/* ── Conversion Architecture ──────────────────────────────────────── */}
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
              <SectionLabel>Conversion Architecture</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              What Makes a High-Converting Houston Website
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Every element on a conversion-focused website is placed with intent. These are the ten
              structural pillars we build into every ClevOps website for Houston businesses competing
              across the Gulf Coast metro.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {CONVERSION_PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={staggerItemCard}
                className="flex gap-4 rounded-xl border border-co-border bg-co-card p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-co-accent" />
                </div>
                <div>
                  <p className="font-semibold text-co-text">{pillar.title}</p>
                  <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
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
              <SectionLabel>What We Build</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Website Design Services for Houston Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              From custom builds to conversion optimization, every service we offer is focused on one
              outcome: more qualified leads for your Houston business.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {SERVICES.map((service) => (
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
              <SectionLabel>Industries We Serve</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Industries We Build Websites For in Houston
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Houston's industrial scale and service economy diversity mean different industries face
              different customer behavior, different trust requirements, and different conversion paths.
              We build websites matched to how your specific customer searches and decides.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {INDUSTRIES.map((industry) => (
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-10 text-center"
          >
            <Button href="/website-design" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Browse by Industry
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Houston Market Section ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Houston Market Context</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Houston Is One of the Most Competitive Service Markets in America
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                With 2.3 million residents in the city and over 7 million across the metro, Houston
                has the service business density of a major coastal market combined with the competitive
                intensity of Texas. Contractors, HVAC companies, roofers, and cleaning businesses are
                competing across an enormous geographic footprint where customers in Katy search
                differently from customers in Pasadena.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Gulf Coast storm seasons drive recurring demand for roofing and repair services.
                Houston's humidity and heat create year-round urgency in the HVAC market. The Texas
                Medical Center and surrounding healthcare ecosystem fuel consistent demand for clinic
                and health service websites. And Houston's logistics and energy corridor creates a
                unique B2B service market unlike any other metro in the country.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                In this environment, "near me" searches are not just common; they are how Houston
                customers find and evaluate every local service business before making contact.
                The businesses capturing that traffic have websites that load fast, rank well,
                and convert visits into calls. The businesses missing it are still waiting on
                referrals alone.
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
                  label: "4th largest city in the US",
                  detail: "Houston's scale creates a service business market with volume and competition intensity matching cities like Los Angeles and Chicago.",
                },
                {
                  label: "Gulf Coast storm-driven demand",
                  detail: "Hurricane season and severe weather events generate recurring high-value roofing, HVAC, and contractor demand across the metro.",
                },
                {
                  label: "Sprawling multi-suburb geography",
                  detail: "Customers in The Woodlands, Katy, Sugar Land, and Pearland search with suburb-specific intent. Service area targeting is not optional.",
                },
                {
                  label: "Texas Medical Center influence",
                  detail: "The world's largest medical complex creates unique demand for healthcare service websites across clinics, specialists, and health businesses.",
                },
                {
                  label: "Energy and logistics economy",
                  detail: "Houston's industrial and logistics sector generates B2B service demand that rewards businesses with professional, credibility-first digital presence.",
                },
                {
                  label: "Mobile-first search behavior",
                  detail: "Over 76% of local Houston service searches happen on phones. Mobile performance directly determines whether you get the call.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className="flex gap-3 rounded-xl border border-co-border bg-co-card p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-co-text text-sm">{item.label}</p>
                    <p className="mt-0.5 text-xs text-co-text-secondary leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
                The Houston Web Design Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not start with design. We start with your Houston market, your competitors,
                and how your ideal customer searches and decides across the metro. Every design choice
                and content decision follows from that foundation.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                The result is a website positioned to compete for high-intent Houston searches and
                structured to convert that traffic into booked calls, quote requests, and form
                submissions across your specific service area.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Start the Conversation
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

      {/* ── SEO Built In ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>SEO Foundation</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                SEO Built Into the Website From Day One
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Every ClevOps website ships with a technical SEO foundation designed to improve your
                visibility in Houston-area searches from the moment it goes live, whether someone is
                searching in the Heights, Midtown, the Energy Corridor, or anywhere across the metro.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                SEO is not something you add to a finished website. It is something built into every
                page, every heading, every internal link, and every piece of content from the start.
                Retrofitting SEO onto a poorly structured site is expensive and rarely catches
                businesses that built it correctly from the beginning.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every page we build targets specific Houston search intent, from "roofing company
                Katy TX" and "HVAC service Pearland" to "cleaning company The Woodlands." Proper
                semantic architecture and suburb-level service area pages give your site a foundation
                to earn and hold rankings for the searches that drive booked calls.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                "Technical SEO foundation and site architecture",
                "Local SEO structure with Houston suburb targeting",
                "Semantic HTML with proper heading hierarchy",
                "Optimized metadata for every page",
                "Schema markup for rich search result eligibility",
                "Internal linking strategy across all pages",
                "Performance optimization for Core Web Vitals",
                "Crawlability and indexability verification",
                "Service area pages for Houston ZIP code and suburb targeting",
                "FAQ content built for featured snippet eligibility",
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
              <SectionLabel>GEO and AEO</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Built for Google and AI Search
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Search is no longer just Google. AI engines including ChatGPT, Perplexity, Gemini, and
              Bing AI increasingly answer local business queries directly. A Houston roofing company or
              HVAC business that appears in those AI-generated answers gets high-intent traffic that
              never touches a traditional results page. The websites AI engines surface share specific
              structural characteristics. We build all of them in by default.
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
                icon: Globe,
                title: "Structured for AI Answer Extraction",
                body: "Clear headings, direct answers, and FAQ blocks make it straightforward for AI engines to extract and surface your content when someone asks a relevant Houston service question.",
              },
              {
                icon: Brain,
                title: "Local Entity Signals",
                body: "Location data, service area pages, business category signals, and schema markup tell AI search engines exactly who you are, what you do, and which Houston suburbs and ZIP codes you serve.",
              },
              {
                icon: Search,
                title: "Semantic Content Architecture",
                body: "Page structure and content organized around user intent rather than keyword frequency. This earns featured snippets and AI answer citations in Houston local searches.",
              },
              {
                icon: Layers,
                title: "Service-Specific Pages",
                body: "Dedicated pages for each service and Houston service area. This breadth and specificity is what gets websites included in AI-generated answers to industry and location queries.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Authority Signals",
                body: "Reviews, credentials, and authoritative content build the trust metrics that both Google and AI search engines use to determine which sources to recommend to Houston searchers.",
              },
              {
                icon: TrendingUp,
                title: "Conversion-Focused Page Architecture",
                body: "A well-structured, high-performing page earns more engagement and links, which compounds into better AI search visibility across Houston's competitive local market over time.",
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

      {/* ── What Generates Leads ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Lead Generation</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                What Actually Generates Leads for Houston Businesses
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Lead generation from a website is not magic. It is the result of specific design,
                content, and technical decisions working together. When those decisions are right,
                a Houston contractor or HVAC company gets quote requests, booked calls, and form
                submissions from people actively searching for exactly what they offer.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                When those decisions are wrong, or left to chance, the site gets visits that go
                nowhere. The business keeps relying on referrals, the phone stays quieter than it
                should, and the competitor with a better website captures the search traffic instead.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Get a Free Website Audit
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
                  title: "Design that builds instant credibility",
                  body: "Premium visual design communicates that you are a legitimate, established business before a customer reads a single word. In Houston's competitive contractor and HVAC markets, that first impression determines whether they keep reading.",
                },
                {
                  title: "Local SEO that brings the right traffic",
                  body: "Ranking for 'HVAC company Houston' is valuable. Ranking for 'HVAC service Katy TX' is what drives booked calls from customers in your actual service area. Suburb-level SEO is where Houston local leads come from.",
                },
                {
                  title: "Mobile UX that converts on the go",
                  body: "A Houston homeowner whose AC fails in July is searching on their phone, finding the first business that looks trustworthy, and calling immediately. Mobile load time and click-to-call placement determine who gets that call.",
                },
                {
                  title: "CTA structure that removes friction",
                  body: "One clear primary action per page. Phone number visible everywhere. A form that takes under 60 seconds to complete. Every step toward contact made as easy as possible.",
                },
                {
                  title: "Trust signals that close before the call",
                  body: "Reviews, licensing, service area clarity, and real project photos answer the customer's unspoken questions: Are you legitimate? Do you serve my area? Can I trust you? Getting those answers right means they call instead of bouncing.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                  className="rounded-xl border border-co-border bg-co-card p-5"
                >
                  <h3 className="font-semibold text-co-text text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-co-text-secondary leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────────── */}
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
              <SectionLabel>Side by Side</SectionLabel>
            </motion.div>
            <motion.h2 variants={headerH2} className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Generic Website vs ClevOps Conversion Website
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              In Houston's market, the gap between a conversion-focused website and a generic one
              shows up directly in your booked calls and quote request volume. Here is what that
              difference looks like across every dimension that matters.
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
                <div className="p-5 text-sm font-semibold text-red-400 border-l border-co-border">Generic Website</div>
                <div className="p-5 text-sm font-semibold text-co-accent border-l border-co-border">ClevOps Website</div>
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

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Investment</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                What Does Website Design Cost in Houston?
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Website design starts at $999 at ClevOps. The final investment depends on the scope
                of your project, the complexity of your Houston service area targeting, and the
                systems you need connected to your site.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Cheap websites almost always cost more in the long run. A site that generates no leads
                is not a $500 savings. It is a recurring revenue problem. The relevant calculation is
                not what the website costs but what a steady stream of qualified leads is worth to your
                Houston business.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For most Houston service businesses operating across Katy, Sugar Land, Pearland, and
                The Woodlands, a single new recurring client from local search covers several months
                of the care plan investment. The website pays for itself when it works.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Get a Free Audit
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
            >
              <div className="rounded-xl border border-co-border bg-co-card p-8">
                <h3 className="font-semibold text-co-text mb-5">Factors that affect project cost</h3>
                <ul className="space-y-3">
                  {PRICING_FACTORS.map((factor) => (
                    <li key={factor} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-co-text-secondary leading-relaxed">{factor}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-co-border">
                  <p className="text-xs text-co-text-muted leading-relaxed">
                    Every project starts with a free audit so you know exactly what your Houston website
                    needs before committing to anything.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <LocalFAQ
              items={FAQ_ITEMS}
              title="Houston Web Design Questions, Answered"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
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
              Explore the Texas SEO Cluster
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
            <SectionLabel className="justify-center">Free Audit</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              If Your Houston Website Is Not Generating Leads, It Is Not Doing Its Job.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free website audit from ClevOps shows you exactly where your site is losing booked
              calls, quote requests, and form submissions from Houston customers actively searching
              for what you offer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Get a Free Website Audit
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
