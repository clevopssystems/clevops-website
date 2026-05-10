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
    question: "How much does website design cost in Austin?",
    answer:
      "Website design for Austin businesses starts at $999 at ClevOps, with an ongoing care plan from $199 per month. Austin's market is competitive and design-conscious, from startups in East Austin to service businesses in Round Rock and Cedar Park. The scope of your project, the number of pages, SEO depth, and any custom integrations affect the total. The more meaningful question is what a steady stream of qualified leads is worth to your business. For most Austin companies, one new client covers months of investment.",
  },
  {
    question: "How long does it take to build a website in Austin?",
    answer:
      "Most Austin clients go live within 14 days of starting. We run design, development, copy, and SEO simultaneously. Austin's fast-moving business environment means time matters. Every week without a properly built site is a week of search visibility and booked calls going to a competitor who already has one.",
  },
  {
    question: "Do Austin startups need SEO built into their website?",
    answer:
      "Yes. A startup website without SEO structure is digital infrastructure with no distribution. Austin's tech ecosystem means your potential clients are savvy searchers who compare options before committing. Showing up when they search requires technical SEO foundations, semantic content, and local signals built into the site from day one. We include all of that in every build.",
  },
  {
    question: "What makes a website actually convert leads?",
    answer:
      "A converting website does four things well: it communicates what you do and who you serve within 3 seconds of landing, it builds trust through proof and credentials, it removes every possible barrier between a visitor and contacting you, and it loads fast on mobile. Most Austin business websites fail on at least two of these. We engineer all four into every site we build.",
  },
  {
    question: "Do you build websites for startups and SaaS companies?",
    answer:
      "Yes. Startup and SaaS websites are a meaningful part of what we build. Austin's tech ecosystem has created a large population of early-stage companies that need digital infrastructure that reflects the quality of their product. We build marketing sites and lead generation systems for startups that need to convert visitors into demos, trials, or consultations.",
  },
  {
    question: "Can you redesign my existing Austin business website?",
    answer:
      "Yes. We handle full redesigns for Austin businesses with underperforming sites. We audit what your current site does well and where it is losing customers, then rebuild with a conversion-focused architecture. Existing SEO equity is preserved through the migration wherever possible.",
  },
  {
    question: "What is AI search optimization and why does it matter for Austin businesses?",
    answer:
      "AI search engines including ChatGPT, Perplexity, Gemini, and Bing AI increasingly answer business queries directly, without the user clicking a search result. Austin's tech-forward user base is already using these tools to research vendors, agencies, and service providers. Websites that appear in AI-generated answers share specific traits: clear headings, direct FAQ content, semantic structure, and local entity signals. We build all of that in by default.",
  },
  {
    question: "Is mobile optimization important for Austin businesses?",
    answer:
      "It is critical. Austin has one of the highest rates of mobile internet usage of any Texas city. Founders reviewing vendor websites between meetings, customers searching for services on South Congress, professionals comparing options on their phones while working remotely. If your site does not load fast and look premium on mobile, you are losing a significant share of your potential leads before they read anything.",
  },
  {
    question: "Do you build websites for creative agencies and marketing firms?",
    answer:
      "Yes. Austin has a dense concentration of creative agencies, consultants, and marketing firms that need websites matching the quality of the work they sell. A creative agency with a generic or template-looking site undermines its own positioning before a prospect ever reads the pitch. We build portfolio-forward, brand-driven sites for Austin creatives that convert visitors into conversations.",
  },
  {
    question: "What makes Austin's web design market different from Dallas or Houston?",
    answer:
      "Austin's market is more design-conscious and startup-aware than most Texas cities. Founders, SaaS buyers, and creative professionals are comparing your website to the quality of products they use daily. The standard is higher. A website that might work in a smaller market looks unprofessional in Austin. Local service businesses also compete harder here because the population is growing fast and digital competition is intensifying every quarter.",
  },
  {
    question: "Do you serve businesses across the greater Austin area?",
    answer:
      "Yes. We build websites for businesses in Austin proper and across the surrounding area including Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, Buda, and San Marcos. Service area pages for businesses covering multiple Austin-metro ZIP codes are included in builds that need them.",
  },
  {
    question: "What industries do you serve in Austin?",
    answer:
      "We build websites for startups, SaaS companies, creative agencies, marketing consultants, HVAC companies, cleaning businesses, contractors, med spas, fitness studios, lawyers, and most other local business categories in Austin. If your business needs a website that generates leads and builds credibility with an Austin audience, we are built for that.",
  },
  {
    question: "Can a website help my Austin business compete with larger competitors?",
    answer:
      "Yes. A well-built, fast, conversion-focused website with strong local SEO competes effectively against much larger operations. Large companies often have slow, bloated sites built years ago. A modern, focused site built around local search and mobile performance can outperform them in specific service categories and neighborhoods.",
  },
  {
    question: "Do you build landing pages for Austin businesses?",
    answer:
      "Yes. We build standalone landing pages for Austin businesses running paid campaigns, launching new services, or testing specific offers. Landing pages built around a single conversion goal, with no navigation distractions, convert paid traffic significantly better than sending visitors to a general homepage.",
  },
  {
    question: "How do I know if my Austin website is losing leads?",
    answer:
      "If your site gets visitors but generates few calls or form submissions, you are losing leads. Common signs include high bounce rates, most inquiries coming from referrals rather than Google, no form submissions from people who do not already know you, and calls that start with 'I found your number online' rather than 'I was just on your website.' A free audit from ClevOps shows exactly where your current site is dropping conversions.",
  },
  {
    question: "Do you work with small and local service businesses in Austin?",
    answer:
      "Yes. Our core client is a small to mid-size local service business or growth-stage company in Austin and the surrounding metro. You do not need to be a funded startup or large company to benefit from a conversion-focused website. Smaller businesses often see the fastest return because the competitive gap a well-built site creates is disproportionately large.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const FAILURE_REASONS = [
  {
    heading: "No clear positioning in the hero",
    body: "Austin visitors are comparison-shopping fast. If your site does not communicate what you do, who you serve, and why you are worth choosing within 3 seconds, they are already looking at the next result.",
  },
  {
    heading: "Generic SaaS or template design",
    body: "Austin's design-conscious population immediately recognizes off-the-shelf templates. A generic website signals a generic business, which is especially damaging in a market full of polished startups and agencies.",
  },
  {
    heading: "Slow mobile performance",
    body: "Austin users are mobile-first. A site that loads in 4 or 5 seconds loses more than half its visitors before the above-the-fold content is visible. Speed is not a nice-to-have.",
  },
  {
    heading: "Poor messaging for founder audiences",
    body: "B2B and startup-facing businesses often use industry jargon or vague value propositions. Austin's founder population reads through that instantly and moves on.",
  },
  {
    heading: "No local trust signals",
    body: "Without reviews, project proof, service area clarity, or team credibility, Austin customers have no reason to trust you over the dozen similar options returning in the same search.",
  },
  {
    heading: "Buried or missing CTAs",
    body: "Multiple competing buttons, phone numbers that are hard to find, unclear next steps. A confused visitor does not become a lead regardless of how strong your service is.",
  },
  {
    heading: "No blog or content depth",
    body: "Austin's sophisticated buyer base often researches before committing. A site with no content beyond a services page fails to capture mid-funnel attention and earns no topical authority.",
  },
  {
    heading: "No SEO foundation",
    body: "Without proper metadata, semantic structure, and internal linking, your site does not appear in the searches that drive organic lead volume in Austin and the surrounding metro.",
  },
  {
    heading: "No AI search structure",
    body: "Austin's tech-forward population is increasingly discovering businesses through AI tools. Sites without structured headings, FAQ content, and entity signals do not get surfaced in those answers.",
  },
  {
    heading: "Weak visual design for a design-aware market",
    body: "Austin holds businesses to a higher visual standard than most Texas cities. A visually weak website in Austin's market is not just unimpressive, it is disqualifying.",
  },
]

const CONVERSION_PILLARS = [
  { icon: Zap, title: "3-second clarity", body: "What you do, who you serve, and why you are worth choosing must be immediately clear. Austin visitors decide fast and move on faster." },
  { icon: Smartphone, title: "Mobile-first performance", body: "Sub-2-second target load time. Click-to-call. Clean layout on any screen. Austin's mobile-first audience demands it." },
  { icon: Star, title: "Startup-quality visual design", body: "Austin's design expectations are influenced by the SaaS and tech products founders use daily. The visual bar is high and generic does not clear it." },
  { icon: ShieldCheck, title: "Trust and proof architecture", body: "Reviews, credentials, project galleries, and case proof placed where they eliminate hesitation before someone makes contact." },
  { icon: Target, title: "Clear CTA hierarchy", body: "One primary action per page. Phone number visible everywhere. No competing buttons or confusing next steps." },
  { icon: Search, title: "Austin local SEO structure", body: "Page hierarchy, service area pages, metadata, and semantic content built to compete for Austin and surrounding suburb searches." },
  { icon: Rocket, title: "Founder-aware messaging", body: "Copy that speaks directly to how Austin's founder and business-owner audience evaluates vendors and makes purchase decisions." },
  { icon: MapPin, title: "Neighborhood relevance", body: "Signals for East Austin, South Congress, Downtown, and the wider metro that tell search engines exactly where you operate and who you serve." },
  { icon: MousePointer, title: "Friction-free contact paths", body: "Fewer clicks to reach you. Prefilled forms. Visible contact options. Every barrier between a visitor and a lead removed." },
  { icon: Mail, title: "Multi-path lead capture", body: "Phone, form, and booking paths. Automated notifications so no inquiry goes unanswered, even outside business hours." },
]

const SERVICES = [
  { icon: LayoutTemplate, title: "Custom Website Design", body: "Built from scratch around your Austin business, your market position, and your specific conversion goals. No templates, no shortcuts." },
  { icon: RefreshCw, title: "Website Redesign", body: "Rebuild underperforming sites with a conversion-first architecture while preserving SEO equity earned by the current site." },
  { icon: Target, title: "Landing Page Design", body: "High-converting single-purpose pages for paid campaigns, product launches, or specific offers. Built around one action." },
  { icon: Rocket, title: "Startup Website Systems", body: "Marketing sites and lead generation infrastructure for Austin startups that need to convert visitors into demos, trials, or consultations." },
  { icon: Search, title: "Local SEO Website Structure", body: "Service area pages, semantic architecture, internal linking, and technical foundations built to rank across Austin and the metro." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", body: "Identify where your current site loses visitors and restructure pages to increase contact rates without rebuilding from scratch." },
  { icon: Smartphone, title: "Mobile-First Design", body: "Performance-optimized for the mobile searches that drive the majority of local and startup lead volume in Austin." },
  { icon: Brain, title: "AI Search Ready Architecture", body: "Structured headings, FAQ blocks, and semantic content built to surface in Google AI Overviews, ChatGPT, Perplexity, and Gemini answers." },
]

const INDUSTRIES = [
  {
    icon: "🚀",
    name: "Startups",
    body: "Early-stage Austin companies need websites that convert visitor attention into investor meetings, customer demos, or early signups. A polished, fast marketing site that clearly communicates your product and traction changes how you are perceived in Austin's competitive startup scene.",
  },
  {
    icon: "💻",
    name: "SaaS Companies",
    body: "Austin's SaaS ecosystem is dense and growing. Buyers are sophisticated and move fast. A SaaS website that does not clearly communicate value, demonstrate proof, and make the next step frictionless loses to competitors that do. We build conversion-focused sites that align with how SaaS buyers research and decide.",
  },
  {
    icon: "🎨",
    name: "Creative Agencies",
    body: "A creative agency with a weak website is arguing against itself. In Austin's saturated agency market, where clients often choose based on first digital impression, a site that does not match the quality of the work on offer is disqualifying before a conversation even starts.",
  },
  {
    icon: "🔨",
    name: "Contractors",
    body: "Austin's construction boom means contractors face a more digitally savvy customer base than most markets. Homeowners in Travis County research extensively before requesting quotes. A project gallery, clear licensing display, and frictionless quote request flow are what convert that research into a phone call.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Austin's Central Texas heat means summer AC failures drive urgent searches. When a homeowner's system fails in July, they are searching and calling fast. Emergency CTAs above the fold, click-to-call on every screen, and sub-2-second mobile load times separate the businesses that get the call from those that do not.",
  },
  {
    icon: "🧘",
    name: "Fitness Studios and Gyms",
    body: "Austin's active, health-conscious population searches for fitness options by neighborhood and specialty. A studio website with clear class schedules, instructor profiles, membership options, and a frictionless trial booking path converts that search intent into actual clients.",
  },
  {
    icon: "💆",
    name: "Med Spas and Wellness",
    body: "Austin's wellness market is competitive and premium. Clients are comparing multiple providers before booking a consultation. A high-end visual experience, detailed treatment pages, before-and-after proof, and a seamless booking flow convert that comparison shopping into booked appointments.",
  },
  {
    icon: "⚖️",
    name: "Lawyers and Law Firms",
    body: "Legal clients in Austin are researching before they call. A law firm website needs to establish credibility immediately: practice areas clearly defined, credentials visible, contact options prominent, and content that directly addresses the questions Travis County residents search when they need legal help.",
  },
  {
    icon: "🌿",
    name: "Landscaping Companies",
    body: "Austin's outdoor culture and hot climate drive strong landscaping and lawn care demand. Customers want to see your work before requesting a quote. A site with a strong visual portfolio, clear service area, seasonal service pages, and a quote request flow generates significantly more inbound than a text-only site.",
  },
  {
    icon: "📣",
    name: "Marketing Agencies and Consultants",
    body: "If your marketing agency or consultancy website is not ranking, not converting, or not reflecting the caliber of your work, it is making your sales process harder. Austin's business community evaluates marketing vendors with high skepticism. Your site needs to prove the capability you are selling.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Cleaning is a trust business. Clients let you into their home or office. In Austin's competitive market, the cleaning businesses growing beyond referrals have websites with visible reviews, clear service area coverage, before-and-after proof, and a booking path that works on the first visit.",
  },
  {
    icon: "🏢",
    name: "Modern Local Service Businesses",
    body: "Any Austin service business, from pest control and auto detailing to handymen and home organizers, needs the same core foundation: fast mobile site, clear service area, visible trust signals, and a conversion path that requires no effort from the visitor.",
  },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Business and Positioning Audit",
    body: "We review your current digital presence, your Austin competitors, and the search landscape for your category. This defines exactly what your site needs to win.",
  },
  {
    step: "02",
    title: "Audience and Market Strategy",
    body: "We map how your Austin audience searches, compares, and makes decisions. Startup founders, local homeowners, and creative directors all have different decision paths. Your site speaks to the right one.",
  },
  {
    step: "03",
    title: "Conversion-Focused Structure",
    body: "Every page, its purpose, and its conversion goal are mapped before design starts. Structure drives results more than aesthetics.",
  },
  {
    step: "04",
    title: "Premium Design and Development",
    body: "Custom design built around your brand and Austin market position, developed for performance and scalability. No templates, no off-the-shelf shortcuts.",
  },
  {
    step: "05",
    title: "SEO and AI Optimization",
    body: "Technical SEO foundation, metadata, schema markup, performance optimization, and semantic content structure built for both traditional and AI search.",
  },
  {
    step: "06",
    title: "Launch, Tracking, and Iteration",
    body: "We launch with full analytics and conversion tracking in place. Performance data informs ongoing improvements. The engagement does not end at launch.",
  },
]

const COMPARISON_ROWS = [
  { label: "Strategy", generic: "None", clevops: "Conversion-mapped before design starts" },
  { label: "Design quality", generic: "Template-based", clevops: "Custom to your brand and Austin market" },
  { label: "Mobile experience", generic: "Functional at best", clevops: "Optimized for Austin's mobile-first users" },
  { label: "SEO", generic: "Afterthought", clevops: "Built into structure from day one" },
  { label: "AI search readiness", generic: "Not considered", clevops: "Structured for AI answer extraction" },
  { label: "Lead capture", generic: "Contact page only", clevops: "Multi-path with CRM integration" },
  { label: "Speed", generic: "3 to 6 second load time", clevops: "Sub-2-second target" },
  { label: "Local relevance", generic: "Generic city mention", clevops: "Neighborhood and metro-area targeting" },
  { label: "Startup positioning", generic: "One-size-fits-all copy", clevops: "Founder-aware messaging and proof" },
  { label: "Scalability", generic: "Rebuild needed to grow", clevops: "Designed to scale from launch" },
]

const PRICING_FACTORS = [
  "Number of pages and service area pages required",
  "Depth of local SEO and content strategy",
  "Custom design scope and brand complexity",
  "Lead capture integrations and booking systems",
  "Content writing and copywriting requirements",
  "CRM, form, and third-party integrations",
  "Ongoing care plan and growth support needs",
]

const INTERNAL_LINKS = [
  { label: "Texas Service Area", href: "/locations/texas", description: "All ClevOps-served cities in Texas" },
  { label: "Austin, TX", href: "/locations/texas/austin", description: "Austin market context, industries, and local strategy" },
  { label: "Website Design Dallas", href: "/website-design-dallas", description: "Web design for Dallas service businesses" },
  { label: "Website Design Houston", href: "/website-design-houston", description: "Web design for Houston businesses" },
  { label: "SEO Services Dallas", href: "/seo-services-dallas", description: "Local SEO for Dallas businesses" },
  { label: "SEO Services Houston", href: "/seo-services-houston", description: "Local SEO for Houston businesses" },
  { label: "Website Design by Industry", href: "/website-design", description: "Service-specific web design for every niche" },
  { label: "Get a Free Audit", href: "/contact", description: "Talk to ClevOps about your Austin website" },
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

      {/* ── Main growth card ── */}
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
              Growth Metrics · Austin, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                3.8x Avg. Lift
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
                  +34%
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
              <linearGradient id="wdaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B72FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#9B72FF" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="wdaLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9B72FF" />
                <stop offset="100%" stopColor="#4F7FFF" />
              </linearGradient>
            </defs>
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="50" x2="260" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <motion.path
              d="M 0,72 C 25,68 40,63 65,57 C 92,50 108,44 128,36 C 152,28 170,18 196,10 C 218,4 240,2 260,1 L 260,75 L 0,75 Z"
              fill="url(#wdaFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 1.0 }}
            />
            <motion.path
              d="M 0,72 C 25,68 40,63 65,57 C 92,50 108,44 128,36 C 152,28 170,18 196,10 C 218,4 240,2 260,1"
              fill="none"
              stroke="url(#wdaLine)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
            />
            <circle cx="260" cy="1" r="5" fill="rgba(79,127,255,0.25)" />
            <circle cx="260" cy="1" r="2.5" fill="#4F7FFF" />
          </svg>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Austin Searches/mo", value: "11,200+", color: "#B87FFF" },
            { label: "Lead Lift", value: "3.8x", color: "#4FC8FF" },
            { label: "Mobile Share", value: "78%", color: "#4ADE80" },
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
              Creative Agency · East Austin
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Audit request · website form
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Austin search growth — bottom left ── */}
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
            border: "1px solid rgba(79,127,255,0.22)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 18px rgba(79,127,255,0.06)",
          }}
        >
          <div className="px-3.5 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-co-text-muted">
                Austin Search Growth
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
              {[14, 22, 28, 38, 48, 58, 72, 92].map((h, i) => (
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
                +112% lift
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

export function WebsiteDesignAustinContent() {
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
            name: "Website Design Austin, TX | High-Converting Websites for Modern Businesses",
            description:
              "ClevOps builds premium, conversion-focused websites for Austin businesses that need more leads, stronger visibility, and modern digital positioning built for SEO, speed, and AI search.",
            url: "https://www.clevops.co/website-design-austin",
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
          { name: "Website Design Austin", href: "/website-design-austin" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="Website Design Austin, TX"
        description="ClevOps builds premium, conversion-focused websites for Austin businesses, startups, and modern service companies. Web design with SEO, mobile optimization, and lead capture built in."
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
              { label: "Website Design Austin" },
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
                Website Design in Austin{" "}
                <span className="text-co-accent">Built for Modern Growth-Focused Businesses</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
                ClevOps builds premium, conversion-focused websites for Austin businesses that need stronger visibility, more leads, better digital positioning, and modern web experiences built for search and AI discovery.
              </p>

              <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
                Built for founders, local businesses, and growth-stage companies competing in Austin's fast-moving digital landscape. Designed for search, speed, and conversion.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
                <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                  Get a Free Website Audit
                </Button>
                <Button href="/locations/texas/austin" variant="outline" size="lg">
                  View Austin Strategy
                </Button>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  { label: "Austin Web Design" },
                  { label: "Startup-Ready" },
                  { label: "SEO-Optimized" },
                  { label: "Mobile-First" },
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

      {/* ── Austin Market Positioning ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Austin Digital Market</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Austin businesses compete digitally first. Your website is the first thing clients judge you on.
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Austin has grown into one of the most competitive digital markets in the country. The city's tech ecosystem, startup culture, and influx of remote professionals have raised the design and performance expectations that local businesses are measured against.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                A founder in East Austin evaluating marketing agencies, a homeowner in South Congress searching for a cleaning company, a SaaS buyer researching a new vendor. Each of them opens your website and forms an opinion in seconds. That opinion determines whether they contact you or move to the next result.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                A generic template site does not clear the bar in Austin's market. It does not build trust with a design-conscious buyer. It does not rank well for local searches. It does not convert mobile visitors. A ClevOps website is built to do all three.
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
                  title: "Startup and founder expectations",
                  body: "Austin's tech ecosystem has trained buyers to expect SaaS-level polish and clarity. Anything that looks template-built reads as unprofessional in this market.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first research behavior",
                  body: "Austin has one of the highest mobile search rates in Texas. Customers are searching on their phones and forming opinions before they ever reach a desktop.",
                },
                {
                  icon: Search,
                  title: "Fast-growing digital competition",
                  body: "As Austin's population grows, digital competition intensifies every quarter. Businesses that build properly now earn visibility advantages that are hard to close later.",
                },
                {
                  icon: MapPin,
                  title: "Neighborhood and district identity",
                  body: "East Austin, South Congress, Downtown, the Domain. Austin customers are neighborhood-aware. Your website should reflect and speak to the areas you actually serve.",
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
              Why Most Austin Business Websites Do Not Convert
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Austin holds websites to a higher standard than most Texas markets. These are the ten reasons most Austin business websites fail to convert visitors into leads, clients, or customers.
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
              What Makes a High-Converting Austin Website
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Every element on a conversion-focused website is placed with intent. These are the structural pillars we build into every ClevOps website for Austin businesses.
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
              Website Design Services for Austin Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              From startup marketing sites to local service business redesigns, every service is focused on generating more qualified leads for your Austin business.
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
              Industries We Build Websites For in Austin
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Austin's business landscape is uniquely diverse. Startups sit next to service companies. SaaS founders share neighborhoods with contractors. We build websites for all of them, tailored to how each audience searches and decides.
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

      {/* ── Austin Digital Market Section ────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Austin Search Landscape</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Austin's digital market is growing faster than most businesses realize
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Austin's population has grown by more than 30% over the past decade, and the majority of new residents are digitally active, mobile-first, and comparison-oriented. Every month, more people are searching for local services, comparing vendors, and making decisions based on what they find online.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Mobile searches for local businesses in Austin have increased substantially year over year. Searches like "near me" queries, neighborhood-specific service searches, and startup vendor discovery all reflect a customer base that starts its buying process on a phone before ever picking one up to call.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Google Maps visibility in Austin is directly tied to the quality and structure of your website. Your local pack ranking, your credibility signals, your review response strategy, and your on-page optimization all interact with Maps visibility. A weak website weakens your local presence at every level.
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
                "Austin's population has grown faster than nearly any major US city",
                "Mobile-first search behavior dominates local discovery in Travis County",
                "AI-powered search tools are now a primary research channel for Austin's tech-aware population",
                "Google Maps visibility is directly correlated with website quality and structure",
                "Neighborhood-specific searches drive high-intent local traffic in East Austin, South Congress, and the Domain",
                "Startup vendor discovery increasingly happens through AI-generated answers",
                "Higher income demographics in Austin translate to faster purchase decisions on mobile",
                "Digital competition is intensifying across every major service category in the metro",
                "Review volume and recency significantly affect local ranking in Austin's competitive markets",
                "Content depth and semantic structure determine who gets surfaced in AI search results",
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
              Austin's tech population is already using ChatGPT, Perplexity, Gemini, and Bing AI to find local vendors, evaluate agencies, and research service providers. The websites that appear in those answers share specific structural traits. We build all of them into every project by default.
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
                body: "Clear headings, direct answers, and FAQ blocks allow AI engines to extract and surface your content when an Austin founder or buyer asks a relevant question. Structure is what earns inclusion.",
              },
              {
                icon: Brain,
                title: "Local Entity Signals",
                body: "Austin-specific service area data, business category schema, neighborhood targeting, and structured metadata tell AI search systems exactly who you are, what you do, and where you operate.",
              },
              {
                icon: Search,
                title: "Semantic Content Architecture",
                body: "Content organized around user intent rather than keyword frequency. This is what earns featured snippets, Google AI Overviews, and AI engine citations for Austin-relevant queries.",
              },
              {
                icon: Layers,
                title: "Service and Location Specificity",
                body: "Dedicated pages for each service and service area. Breadth and specificity get websites included in AI-generated answers to industry and location queries that are already happening in Austin.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Authority Signals",
                body: "Reviews, credentials, and authoritative content build the trust metrics that both Google and AI search engines use to determine which sources to recommend in answer generation.",
              },
              {
                icon: TrendingUp,
                title: "Performance Compounds Authority",
                body: "A well-structured, fast-loading page earns more engagement and more links, which compounds into better AI search visibility over time. Speed is not separate from SEO. It is part of it.",
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

      {/* ── What Actually Drives Leads ───────────────────────────────────── */}
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
                What actually drives booked calls and qualified leads
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                A website generates leads when six things work together: design that earns trust in the first second, messaging that speaks directly to the visitor's intent, mobile performance that keeps them engaged, SEO that brings them to the page in the first place, a clear path to contact, and proof that makes taking that next step feel safe.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Most Austin businesses have at least two of those. A ClevOps site is built to deliver all six. That is what the difference between a site that generates 3 inquiries a month and one that generates 30 looks like from the inside.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For Austin's diverse business landscape, this matters more than most markets. Startup founders vet vendors harder. Creative agency clients are skeptical. Local service customers have more options and compare faster. The margin for a weak first impression is thin.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Start the Conversation
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
                "Design that builds trust within 3 seconds of landing",
                "Messaging that speaks to the specific intent behind the search",
                "Mobile performance that keeps visitors engaged through the conversion path",
                "SEO structure that brings high-intent Austin visitors to the page",
                "Clear CTA hierarchy with one primary action and no competing distractions",
                "Social proof positioned where it eliminates hesitation before contact",
                "Fast load times that maintain engagement on mobile",
                "Local credibility signals that confirm you serve their area",
                "FAQ content that handles objections before they become barriers",
                "Multi-path lead capture so no visitor leaves without a contact option",
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
              Generic Website vs ClevOps Growth Website
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              In Austin's design-conscious, competitive market, the difference between a generic template site and a conversion-focused website shows up directly in lead volume, client quality, and how your business is perceived before anyone speaks to you.
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

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
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
                The Austin Web Design Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not start with design. We start with your Austin market, your audience, and the specific conversion goal your website needs to hit. Every design decision, copy choice, and technical element follows from that foundation.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                The result is a website that reflects the quality of your business, ranks for the searches that drive your best leads, and converts that traffic into booked calls, demo requests, form submissions, or whatever action actually moves your business forward.
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
      <section className="py-20 md:py-28 border-b border-co-border">
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
                SEO Built Into Every Austin Website From Day One
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not build websites as empty brochures. Every ClevOps site ships with a technical SEO foundation designed to improve your visibility in Austin-area searches from the moment it goes live, whether someone is searching in East Austin, Round Rock, Cedar Park, or across Travis County.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                SEO is not something added to a finished website. It is built into every page, heading, internal link, and piece of content from the start. Retrofitting SEO onto a poorly structured site is expensive and rarely closes the gap on a properly built competitor.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every page we build targets specific Austin search intent. Proper semantic structure and a clear site architecture give your pages the foundation to earn and hold rankings for the searches that bring in your best leads.
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
                "Local SEO structure with Austin service area targeting",
                "Semantic HTML with proper heading hierarchy",
                "Optimized metadata for every page",
                "Schema markup for rich search result eligibility",
                "Internal linking strategy across all pages",
                "Performance optimization for Core Web Vitals",
                "Crawlability and indexability verification",
                "Service area pages for Austin metro neighborhood targeting",
                "FAQ content built for featured snippet and AI answer eligibility",
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
                What Does Website Design Cost in Austin?
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Website design starts at $999 at ClevOps. The final investment depends on the scope of your project, the number of pages, the depth of SEO and content strategy, and the systems you need connected.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Cheap websites almost always cost more in the long run. A site that generates no leads is not a money-saver. It is a recurring revenue problem. The relevant question is not what the website costs but what consistent qualified leads are worth to your Austin business each month.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For most Austin service businesses and growth-stage companies, a single new client from online search covers months of the care plan investment. The math changes when the site is actually generating leads.
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
                    Every project starts with a free audit so you know exactly what your site needs before committing to anything.
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
              title="Austin Web Design Questions, Answered"
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
            <SectionLabel className="justify-center">Free Audit</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              If Your Austin Website Does Not Reflect the Quality of Your Business, It Is Costing You Trust, Visibility, and Leads.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free website audit from ClevOps shows exactly where your site is losing leads, what Austin-market-specific improvements would move the needle, and what a properly built website could realistically change for your business.
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
