"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import {
  EASE_PREMIUM,
  headerBlock,
  headerH2,
  headerLabel,
  headerP,
} from "@/lib/animations"

const FAQ_ITEMS = [
  {
    q: "Why is ClevOps more expensive than cheap agencies?",
    a: "Because we are not selling a product. We are building your business's revenue infrastructure. Cheap agencies use templates, skip strategy, and move on after launch. We build custom systems for your specific service, market, and goals. The pricing reflects what it actually costs to do that correctly and maintain it over time.",
  },
  {
    q: "Why is the Care Plan required?",
    a: "A website without ongoing maintenance is a liability. Within months, security vulnerabilities appear, plugins break, page speed degrades, and Google rankings drop. The Care Plan is not an upsell. It is the minimum required to keep your investment performing. We do not build websites we are not responsible for keeping healthy.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Meaningful movement in local search typically shows within 60 to 90 days for competitive keywords. Less competitive markets can move faster. We build your SEO foundation correctly from day one so the results compound over time rather than requiring expensive corrections later.",
  },
  {
    q: "Are ads included in any plan?",
    a: "Google Ads and Meta Ads are included in the Domination plan. The Growth plan focuses on organic local SEO and automation systems. Both generate clients. During your strategy call, we will tell you honestly which approach fits your market, budget, and business stage.",
  },
  {
    q: "Who is ClevOps best for?",
    a: "Local service businesses with real revenue, an existing client base, and the ambition to grow systematically rather than by chance. Cleaning companies, HVAC businesses, contractors, landscapers, auto detailers, and similar trades are our core focus. If you are pre-revenue or testing a business idea, this is not the right fit yet.",
  },
  {
    q: "Do you work with every type of business?",
    a: "No. We focus exclusively on local service businesses in the US. That specificity is part of why our systems work. We understand this market, this customer psychology, and these SEO patterns better than a generalist agency that works across every vertical.",
  },
  {
    q: "How long does the website take to build?",
    a: "14 days on average from signed agreement to live site. We run design, copy, and development in parallel rather than sequentially. Some projects move faster. Some take slightly longer depending on revision cycles and content collection on your end.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. You own the domain, the code, and all content. If you decide to leave for any reason, you take everything with you. We never hold your business hostage or lock you into proprietary platforms you cannot export.",
  },
  {
    q: "Is support included?",
    a: "Priority support is included in the Care Plan and all plans above it. You have a direct line, not a ticket queue. We respond to technical issues within one business day for Care Plan clients and faster for Growth and Domination clients.",
  },
  {
    q: "What happens after the website launches?",
    a: "If you are on the Growth or Domination plan, we continue working on your business every single month. New SEO content and improvements, conversion optimization, performance monitoring, and strategic adjustments based on what is actually driving leads for your specific market.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}

function FAQItem({
  item,
  index,
  inView,
}: {
  item: { q: string; a: string }
  index: number
  inView: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.28 + index * 0.045, duration: 0.55, ease: EASE_PREMIUM }}
      className="relative rounded-xl overflow-hidden"
      style={{
        border: open
          ? "1px solid rgba(79,127,255,0.28)"
          : "1px solid rgba(255,255,255,0.07)",
        borderLeft: open
          ? "3px solid rgba(79,127,255,0.55)"
          : "1px solid rgba(255,255,255,0.07)",
        background: open ? "rgba(79,127,255,0.05)" : "#0D0D11",
        boxShadow: open
          ? "0 8px 40px rgba(79,127,255,0.08), 0 2px 16px rgba(0,0,0,0.3)"
          : "none",
        transition: "border-color 0.22s ease, background 0.22s ease, box-shadow 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
        style={{ paddingLeft: open ? "20px" : "24px" }}
      >
        <span className="text-sm md:text-base font-semibold text-co-text leading-snug">
          {item.q}
        </span>

        {/* Rotating plus icon */}
        <motion.span
          className="shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: EASE_PREMIUM }}
          style={{
            background: open ? "rgba(79,127,255,0.18)" : "rgba(255,255,255,0.06)",
            border: open
              ? "1px solid rgba(79,127,255,0.35)"
              : "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <Plus
            size={12}
            style={{ color: open ? "#4F7FFF" : "rgba(255,255,255,0.4)" }}
            strokeWidth={2.5}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_PREMIUM }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-5 pt-0 text-sm text-co-text-muted leading-relaxed"
              style={{
                borderTop: "1px solid rgba(79,127,255,0.10)",
                paddingLeft: "20px",
              }}
            >
              <div className="pt-4">{item.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingFAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #070709 0%, #09090e 60%, #070709 100%)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="orb w-[700px] h-[500px] top-1/2 right-0 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-14"
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-center mb-5" variants={headerLabel}>
            <SectionLabel>FAQ</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4"
            variants={headerH2}
          >
            Questions we get{" "}
            <span className="text-gradient-accent">every time.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            variants={headerP}
          >
            Straight answers. If yours is not here, book a call and ask directly.
          </motion.p>
        </motion.div>

        {/* FAQ list */}
        <div className="flex flex-col gap-2.5">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
