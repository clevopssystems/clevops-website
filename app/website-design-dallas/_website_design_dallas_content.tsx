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

// ── FAQ data (shared with schema) ─────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does website design cost in Dallas?",
    answer:
      "Website design for Dallas businesses starts at $999 at ClevOps, with an ongoing care plan from $199 per month. The total cost depends on the number of pages, SEO depth, custom integrations, and lead capture requirements. A basic 5-page site costs less than a full service-area build with booking systems and CRM integration. The more relevant question is not what a website costs but what it returns. A site that generates two new clients per month recovers the investment quickly.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "Most Dallas clients go live within 14 days of starting. We run design, development, copywriting, and technical SEO simultaneously so nothing waits on anything else. Larger builds with custom integrations, multiple service areas, or content strategies may take longer, but 14 days applies to the majority of our projects.",
  },
  {
    question: "Do Dallas businesses need SEO with their website?",
    answer:
      "Yes. A website without SEO structure is a brochure with no distribution. Dallas is one of the most competitive local service markets in the US. For your website to appear when someone searches for HVAC service in Dallas or cleaning companies in DFW, your site needs technical SEO foundations, semantic content, and local signals built in from the start. We include this in every build.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. We handle full website redesigns for Dallas businesses that have an existing site underperforming on leads. We start by auditing what your current site does well and where it is costing you customers, then rebuild with a conversion-focused architecture. We can preserve existing SEO value during the migration.",
  },
  {
    question: "Do you build websites for contractors in Dallas?",
    answer:
      "Yes. Contractor websites are a core service at ClevOps. We build websites for general contractors, roofing companies, HVAC businesses, plumbers, electricians, and other trade businesses across Dallas and the DFW Metroplex. Contractor sites need strong proof sections, license and insurance displays, project galleries, and quote request flows. We build all of that.",
  },
  {
    question: "What makes a website convert more leads?",
    answer:
      "A converting website does four things well: it communicates clearly what you do and where within 3 seconds of landing, it establishes trust through proof and credentials, it removes friction from the path to contact, and it loads fast on mobile. Most business websites fail on at least two of these. We engineer all four into every site we build.",
  },
  {
    question: "Is mobile optimization important for Dallas businesses?",
    answer:
      "It is critical. Over 70% of local service searches in Dallas happen on mobile phones. If your website loads slowly, displays awkwardly, or makes it difficult to call or book on a phone, you are losing the majority of your potential leads before they ever see your offer. Mobile-first performance is built into every ClevOps website.",
  },
  {
    question: "Can a website help me get more calls?",
    answer:
      "Yes, but only if it is built for that purpose. A website with click-to-call buttons, a phone number visible on every page, trust signals that build confidence before the call, and fast mobile loading generates significantly more inbound calls than a generic site. We build this type of conversion flow into every business website we deliver.",
  },
  {
    question: "What is the difference between a normal website and a conversion-focused website?",
    answer:
      "A normal website presents information. A conversion-focused website moves visitors toward a specific action: calling, booking, or submitting a lead form. The difference is in how the page is structured, where attention is directed, how trust is built, and how friction is reduced at every step. Most business websites are informational. ClevOps builds websites designed around a conversion goal from the first element on the page.",
  },
  {
    question: "Do you build landing pages?",
    answer:
      "Yes. We build standalone landing pages for Dallas businesses running paid ads, seasonal campaigns, or specific service promotions. Landing pages are built around a single conversion goal with no navigation distractions. They are particularly effective for Google Ads and Meta Ads traffic where every visitor has a defined intent.",
  },
  {
    question: "Do you optimize websites for AI search?",
    answer:
      "Yes. AI search engines including ChatGPT, Perplexity, Gemini, and Bing AI are increasingly answering local search queries directly. Websites that use structured headings, clear FAQ blocks, semantic content, and local entity signals are more likely to be surfaced in AI-generated answers. We build this into our content and technical structure on every project.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. Our core client is a small to medium local service business in Dallas or the surrounding DFW area. You do not need to be a large company to benefit from a professional, conversion-focused website. Small businesses often see a faster and more significant return because they are competing against larger companies where referrals alone cannot scale.",
  },
  {
    question: "Should I build a new website or improve my existing one?",
    answer:
      "It depends on your current site's foundation. If your existing site is on a platform that limits SEO and customization, a new build is usually the better long-term investment. If your site has a solid technical base but poor design or copy, a redesign or optimization project may be more efficient. We audit your existing site before recommending a path.",
  },
  {
    question: "How do I know if my website is losing leads?",
    answer:
      "If your website gets visitors but generates few or no calls and inquiries, you are losing leads. Common signs include high bounce rates, short session times, low mobile conversion, and calls that start with 'I got your number from a referral' rather than 'I found you on Google.' A free audit from ClevOps will show you exactly where your current site drops conversions.",
  },
]

// ── Section data ──────────────────────────────────────────────────────────────

const FAILURE_REASONS = [
  {
    heading: "No clear above-the-fold message",
    body: "Visitors land and cannot immediately tell what you do, who you serve, or why they should trust you. They leave in seconds.",
  },
  {
    heading: "Slow loading speed",
    body: "A site that takes 4 seconds to load on mobile loses more than half its visitors before they see anything. Speed is not optional.",
  },
  {
    heading: "Weak mobile layout",
    body: "Most local searches in Dallas and across the DFW Metroplex happen on phones. A site that is hard to navigate or read on mobile is not competing for that traffic.",
  },
  {
    heading: "No local trust signals",
    body: "No reviews, no licensing info, no service area clarity. Customers decide in seconds whether to trust you or close the tab.",
  },
  {
    heading: "Confusing CTA structure",
    body: "Multiple competing buttons, buried phone numbers, unclear next steps. A confused visitor does not convert.",
  },
  {
    heading: "Generic stock design",
    body: "A template that looks identical to 50 other local service websites signals that the business behind it operates the same way.",
  },
  {
    heading: "Poor service page structure",
    body: "Vague descriptions with no specifics about process, pricing range, or service area fail to qualify or retain the right leads.",
  },
  {
    heading: "No SEO foundation",
    body: "A website without proper meta structure, internal linking, and semantic content does not appear in the searches that drive revenue.",
  },
  {
    heading: "No AI-readable content structure",
    body: "AI search engines increasingly answer local queries. Sites without structured headings, FAQ content, and local signals get left out.",
  },
  {
    heading: "No lead capture system",
    body: "Phone calls alone leave money on the table. Visitors who do not pick up the phone need a form, callback option, or booking path.",
  },
]

const CONVERSION_PILLARS = [
  { icon: Zap, title: "3-second clarity", body: "Visitors must understand what you do, where you serve, and why to choose you within 3 seconds of landing." },
  { icon: Smartphone, title: "Fast mobile experience", body: "Sub-2-second target load time. Click-to-call. Clean layout on any screen size. Mobile-first from the start." },
  { icon: ShieldCheck, title: "Trust signals", body: "Reviews, licensing details, service guarantees, and credentials placed where they eliminate hesitation before contact." },
  { icon: Star, title: "Proof sections", body: "Project photos, client results, and before-and-after work displayed in formats that build confidence fast." },
  { icon: Target, title: "Clear calls to action", body: "One primary action per page. Visible phone number everywhere. Booking and inquiry paths with zero friction." },
  { icon: Search, title: "Local SEO structure", body: "Page hierarchy, service area targeting, metadata, and semantic content built to compete for Dallas and DFW local searches." },
  { icon: Layers, title: "Industry-specific content", body: "Copy and page structure tailored to how your specific type of customer searches, compares, and decides." },
  { icon: MapPin, title: "Service area relevance", body: "Neighborhood and area-specific signals for Dallas, North Dallas, and surrounding DFW suburbs that tell Google exactly where you operate." },
  { icon: MousePointer, title: "Contact friction reduction", body: "Fewer clicks to reach you. Prefilled forms. Visible phone numbers. Every barrier removed from the path to contact." },
  { icon: Mail, title: "Lead capture flow", body: "Multi-path capture: phone, form, and booking. Automated notifications so no inquiry goes unanswered." },
]

const SERVICES = [
  { icon: LayoutTemplate, title: "Custom Website Design", body: "Built from scratch around your business, your market, and your conversion goals. No templates, no shortcuts." },
  { icon: RefreshCw, title: "Website Redesign", body: "Rebuild underperforming sites with a conversion-first architecture while preserving existing SEO equity." },
  { icon: Target, title: "Landing Page Design", body: "Single-purpose pages for paid traffic, seasonal campaigns, or specific service offers. Built to convert one action." },
  { icon: Search, title: "Local SEO Website Structure", body: "Service area pages, semantic architecture, internal linking, and technical foundations built to rank locally." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", body: "Identify where visitors drop off and restructure pages to increase contact rates on existing sites." },
  { icon: Smartphone, title: "Mobile-First Website Design", body: "Performance-optimized for the mobile searches that drive most local lead volume in Dallas and the DFW Metroplex." },
  { icon: Mail, title: "Lead Capture Systems", body: "Multi-path capture with form integration, CRM connection, and automated response for every inquiry." },
  { icon: Brain, title: "AI Search Ready Content", body: "Structured headings, FAQ blocks, and semantic content built to surface in Google, ChatGPT, Perplexity, and Gemini." },
]

const INDUSTRIES = [
  {
    icon: "🔨",
    name: "Contractors",
    body: "Dallas has a dense contractor market. The businesses winning online have proof-first websites with project galleries, license and insurance displays, clear service area coverage, and a quote request flow that qualifies leads before they call.",
  },
  {
    icon: "❄️",
    name: "HVAC Companies",
    body: "Dallas HVAC companies face one of the highest-urgency service markets in Texas. When AC fails in Frisco or Plano in August, homeowners search fast and call the first company that looks trustworthy. Emergency CTAs above the fold, click-to-call on every screen, and sub-2-second mobile load times are what separate the businesses that get the call from the ones that do not.",
  },
  {
    icon: "🏠",
    name: "Roofers",
    body: "North Texas hailstorms drive steady roofing demand across the DFW area. Dallas roofers competing for storm-season jobs need more than a directory listing. Licensing, reviews, project galleries, insurance claim guidance pages, and a clear quote request flow build the credibility that converts site visits into signed estimates.",
  },
  {
    icon: "🧹",
    name: "Cleaning Companies",
    body: "Cleaning customers let you into their home. Trust is the only currency. Reviews visible above the fold, a clear service area list, before-and-after work, and a frictionless booking path separate the cleaning businesses that grow from those still waiting on referrals.",
  },
  {
    icon: "💆",
    name: "Med Spas",
    body: "Dallas med spas operate in a high-income, appearance-conscious market where clients are comparing multiple providers online before booking a consultation. A premium visual experience, detailed treatment pages, before-and-after imagery, and a frictionless booking flow convert those comparison-shoppers into booked appointments.",
  },
  {
    icon: "⚖️",
    name: "Law Firms",
    body: "Dallas law firms compete for high-intent searches from people who need help immediately. A law firm website needs to establish credibility in seconds: bar credentials visible, practice areas clearly defined, contact options prominent, and content that answers the exact questions Dallas residents search when they need legal representation.",
  },
  {
    icon: "🔧",
    name: "Plumbers",
    body: "Plumbing is emergency-driven. The website that converts plumbing leads has the phone number above the fold, a 24/7 availability display, service area confirmation, and loads in under 2 seconds. Dallas homeowners searching for a plumber are calling the first one that looks reliable.",
  },
  {
    icon: "⚡",
    name: "Electricians",
    body: "Electrical work requires licensed, trusted professionals. An electrician website displaying licensing prominently, showing residential and commercial capability, and making it easy to request a quote builds confidence with customers making safety-critical decisions.",
  },
  {
    icon: "🚗",
    name: "Auto Detailing",
    body: "Detailing is visual proof. A portfolio of work, service package pages, and online booking with deposits remove the friction between a search and a confirmed appointment. Dallas car culture and the density of luxury vehicles in areas like Highland Park and Uptown mean premium visual presentation and positioning directly affect how much clients are willing to pay.",
  },
  {
    icon: "🏢",
    name: "Local Service Companies",
    body: "Any local service business in Dallas, from landscapers and pest control to handymen and pool services, needs the same core foundation: fast mobile site, clear service area, visible trust signals, and a conversion path that works on the first visit.",
  },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Business and Market Audit",
    body: "We review your current online presence, your competitors in Dallas, and the search landscape for your service category. This tells us exactly what the site needs to win.",
  },
  {
    step: "02",
    title: "Offer and Positioning Strategy",
    body: "We define what you do, who you serve, and what makes you worth choosing in the Dallas market. Positioning is the foundation everything else is built on.",
  },
  {
    step: "03",
    title: "Website Structure and Conversion Map",
    body: "We map every page, its purpose, and its conversion goal before a single design element is created. Structure drives results.",
  },
  {
    step: "04",
    title: "Premium Design and Development",
    body: "Custom design built around your brand and market, developed for performance and scalability. No templates, no off-the-shelf shortcuts.",
  },
  {
    step: "05",
    title: "SEO, Speed, and Mobile Optimization",
    body: "Technical SEO foundation, metadata, schema markup, performance optimization, and mobile testing on real devices before launch.",
  },
  {
    step: "06",
    title: "Launch, Tracking, and Growth",
    body: "We launch, set up conversion tracking, connect analytics, and monitor performance. The engagement does not end at launch.",
  },
]

const COMPARISON_ROWS = [
  { label: "Strategy", generic: "None", clevops: "Conversion-mapped before design starts" },
  { label: "Design", generic: "Template-based", clevops: "Custom to your business and market" },
  { label: "Mobile experience", generic: "Functional at best", clevops: "Optimized for fast booking on phones" },
  { label: "SEO", generic: "Afterthought", clevops: "Built into structure from day one" },
  { label: "AI search readiness", generic: "Not considered", clevops: "Structured for AI answer extraction" },
  { label: "Lead capture", generic: "Contact page only", clevops: "Multi-path with CRM integration" },
  { label: "Speed", generic: "3 to 6 second load time", clevops: "Sub-2-second target" },
  { label: "Local relevance", generic: "Generic city mention", clevops: "Neighborhood and service area targeting" },
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
  { label: "Dallas, TX", href: "/locations/texas/dallas", description: "Dallas market context, industries, and local strategy" },
  { label: "Houston, TX", href: "/locations/texas/houston", description: "Website design for Houston businesses" },
  { label: "Austin, TX", href: "/locations/texas/austin", description: "Website design for Austin businesses" },
  { label: "Website Design by Industry", href: "/website-design", description: "Service-specific web design for every niche" },
  { label: "Get a Free Audit", href: "/contact", description: "Talk to ClevOps about your Dallas website" },
]

// ── Hero visual (right-side dashboard) ───────────────────────────────────────

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
              Conversion Performance · Dallas, TX
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-black tracking-tighter text-co-text text-[1.25rem]">
                3.2x Avg. Lift
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
                  +28%
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
              <linearGradient id="wddFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9B72FF" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#9B72FF" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="wddLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9B72FF" />
                <stop offset="100%" stopColor="#4F7FFF" />
              </linearGradient>
            </defs>
            <line x1="0" y1="25" x2="260" y2="25" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="50" x2="260" y2="50" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <motion.path
              d="M 0,70 C 30,66 45,60 70,53 C 98,46 110,40 135,33 C 162,26 182,16 210,11 C 232,7 248,5 260,3 L 260,75 L 0,75 Z"
              fill="url(#wddFill)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 1.0 }}
            />
            <motion.path
              d="M 0,70 C 30,66 45,60 70,53 C 98,46 110,40 135,33 C 162,26 182,16 210,11 C 232,7 248,5 260,3"
              fill="none"
              stroke="url(#wddLine)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 2.0, ease: "easeInOut", delay: 0.8 }}
            />
            <circle cx="260" cy="3" r="5" fill="rgba(79,127,255,0.25)" />
            <circle cx="260" cy="3" r="2.5" fill="#4F7FFF" />
          </svg>
        </div>

        {/* Footer stats */}
        <div className="grid grid-cols-3 gap-2 px-5 py-3.5 border-t border-white/[0.05]">
          {[
            { label: "Local Searches/mo", value: "8,500+", color: "#B87FFF" },
            { label: "Conversion Lift", value: "3.2x", color: "#4FC8FF" },
            { label: "Mobile Traffic", value: "74%", color: "#4ADE80" },
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
                New Inquiry
              </span>
              <span className="text-[8.5px] text-co-text-muted ml-auto">3m ago</span>
            </div>
            <p className="text-[11px] font-semibold text-co-text leading-snug mb-0.5">
              Cleaning Co. · Dallas
            </p>
            <p className="text-[9.5px] text-co-text-muted leading-snug">
              Audit request · website form
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── DFW search coverage — bottom left ── */}
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
                DFW Visibility
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
              {[18, 28, 24, 40, 50, 62, 75, 90].map((h, i) => (
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
                +90% lift
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

export function WebsiteDesignDallasContent() {
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
            name: "Website Design Dallas, TX | High-Converting Websites for Local Businesses",
            description:
              "ClevOps builds high-converting websites for Dallas businesses that need more calls, leads, bookings, and local search visibility.",
            url: "https://clevops.co/website-design-dallas",
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
          { name: "Website Design Dallas", href: "/website-design-dallas" },
        ]}
      />
      <SchemaMarkup
        type="Service"
        name="Website Design Dallas, TX"
        description="ClevOps builds high-converting websites for Dallas local service businesses. Premium web design with SEO, mobile optimization, and lead capture built in."
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
              { label: "Website Design Dallas" },
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
              Website Design in Dallas{" "}
              <span className="text-co-accent">Built to Turn Visitors Into Leads</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
              ClevOps builds premium, conversion-focused websites for Dallas and DFW service businesses
              that need more booked calls, quote requests, and qualified leads from local search.
            </p>

            <p className="mt-3 text-sm text-co-text-muted leading-relaxed">
              Built for calls, quote requests, and booked appointments. Designed for Dallas service businesses competing across DFW search, Google, and AI engines.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Get a Free Website Audit
              </Button>
              <Button href="/locations/texas/dallas" variant="outline" size="lg">
                View Dallas Strategy
              </Button>
            </div>

            {/* Trust chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                { label: "Dallas Web Design" },
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
                Dallas businesses searching for a web designer want more booked jobs, not a prettier page.
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                When someone searches "website design Dallas" or "web design agency DFW," they are not
                shopping for aesthetics. They want a site that generates booked calls, drives quote
                requests, captures form submissions, and builds the kind of credibility that converts
                before the first phone call.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Dallas and the broader DFW Metroplex have one of the most competitive local service
                markets in the US. From North Dallas and Frisco to Irving and Garland, contractors,
                HVAC companies, cleaning businesses, and trade services are competing for the same
                local searches. Over 70% of those searches happen on mobile phones.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                A website that does not immediately communicate trust, clarity, and competence is not
                neutral in that environment. It is actively sending customers to someone else.
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
                  title: "Lead generation first",
                  body: "A conversion-focused site is structured to move visitors toward a specific action: calling, booking, or submitting a form.",
                },
                {
                  icon: MapPin,
                  title: "Local credibility signals",
                  body: "Dallas customers search for local businesses. Your site needs to confirm you serve their area and establish trust before they contact you.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile-first customer behavior",
                  body: "The majority of your potential customers in Dallas are searching on their phones. A site not built for that loses them immediately.",
                },
                {
                  icon: Search,
                  title: "Google and AI search visibility",
                  body: "Showing up in search results requires proper SEO structure built into the site from day one, not bolted on after launch.",
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
              Why Most Dallas Business Websites Do Not Convert
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              A website that cannot generate leads is not a marketing asset. It is a line item with no
              return. These are the ten reasons most Dallas business websites fail to convert visitors into
              customers.
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
              What Makes a High-Converting Dallas Website
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Every element on a conversion-focused website is placed with intent. These are the ten
              structural pillars we build into every ClevOps website for Dallas businesses.
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
              Website Design Services for Dallas Businesses
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              From custom builds to conversion optimization, every service we offer is focused on one
              outcome: more qualified leads for your Dallas business.
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
              Industries We Build Websites For in Dallas
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Every industry has different customers, different purchase decisions, and different conversion
              paths. We build websites that match how your specific customer searches and decides.
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
                The Dallas Web Design Process
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not start with design. We start with your Dallas market, your competitors, and
                how your ideal customer searches and makes decisions. Every design and content choice
                follows from that foundation.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                The result is a website positioned to compete for high-intent Dallas searches and
                structured to convert that traffic into booked calls, quote requests, and form
                submissions for your specific service.
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
                SEO Built Into the Website From Day One
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not build websites as empty digital brochures. Every ClevOps website ships with a
                technical SEO foundation designed to improve your visibility in Dallas-area searches from
                the moment it goes live, whether someone is searching in Uptown, North Dallas, Plano,
                or anywhere across the DFW Metroplex.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                SEO is not something you add to a finished website. It is something you build into every
                page, every heading, every internal link, and every piece of content from the start.
                Retrofitting SEO onto a poorly structured site is expensive and rarely closes the gap.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every page we build targets specific Dallas search intent, from "HVAC service Dallas" and
                "roofing company North Dallas" to "cleaning company DFW." Proper semantic HTML and a
                clear site structure give your pages a foundation to earn and hold rankings for the
                searches that bring in booked calls and form submissions.
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
                "Local SEO structure with service area targeting",
                "Semantic HTML with proper heading hierarchy",
                "Optimized metadata for every page",
                "Schema markup for rich search result eligibility",
                "Internal linking strategy across all pages",
                "Performance optimization for Core Web Vitals",
                "Crawlability and indexability verification",
                "Service area pages for DFW neighborhood targeting",
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
              Built for Google and AI Search
            </motion.h2>
            <motion.p variants={headerP} className="mt-4 text-co-text-secondary leading-relaxed">
              Search is no longer just Google. AI engines like ChatGPT, Perplexity, Gemini, and Bing AI
              now answer local business queries directly. The websites they surface share specific
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
                body: "Clear headings, direct answers, and FAQ blocks make it straightforward for AI engines to extract and surface your content when someone asks a relevant question.",
              },
              {
                icon: Brain,
                title: "Local Entity Signals",
                body: "Location data, service area pages, business category signals, and schema markup tell AI search engines exactly who you are, what you do, and which Dallas and DFW neighborhoods you serve.",
              },
              {
                icon: Search,
                title: "Semantic Content Architecture",
                body: "Page structure and content organized around user intent rather than keyword frequency. This is what earns featured snippets and AI answer citations.",
              },
              {
                icon: Layers,
                title: "Service-Specific Pages",
                body: "Dedicated pages for each service and service area. This breadth and specificity is what gets websites included in AI-generated answers to industry and location queries.",
              },
              {
                icon: ShieldCheck,
                title: "Trust and Authority Signals",
                body: "Reviews, credentials, and authoritative content build the trust metrics that both Google and AI search engines use to determine which sources to recommend.",
              },
              {
                icon: TrendingUp,
                title: "Conversion-Focused Page Architecture",
                body: "A well-structured, high-performing page earns more links and more engagement, which compounds into better AI search visibility over time.",
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
              In a market as competitive as Dallas, the gap between a conversion-focused website and a
              generic one shows up directly in your booked calls and quote request volume. Here is what
              that difference looks like.
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
                What Does Website Design Cost in Dallas?
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                Website design starts at $999 at ClevOps. The final investment depends on the scope of
                your project, the complexity of your service area targeting, and the systems you need
                connected to your site.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Cheap websites almost always cost more in the long run. A site that generates no leads is
                not a $500 savings. It is a recurring revenue problem. The relevant calculation is not
                what the website costs but what a steady stream of qualified leads is worth to your
                Dallas business.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                For most Dallas service businesses running $50K or more in annual revenue, a single new
                recurring client from online search covers several months of the care plan investment.
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
                    Every project starts with a free audit so you know exactly what your site needs before
                    committing to anything.
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
              title="Dallas Web Design Questions, Answered"
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
              If Your Dallas Website Is Not Bringing In Leads, It Is Not Doing Its Job.
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              A free website audit from ClevOps shows you exactly where your site is losing booked
              calls, quote requests, and form submissions, and what a properly built Dallas website
              could realistically change.
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
