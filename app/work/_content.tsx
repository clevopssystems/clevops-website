"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowUpRight, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const beforeIssues = [
  "Generic template design with no brand identity",
  "No clear headline or value proposition above fold",
  "Missing trust signals — no reviews, no certifications",
  "Weak call-to-action buried below the fold",
  "Not mobile-friendly — poor experience on phones",
  "Zero local SEO optimization",
  "Slow page load (4.8s average)",
  "No online booking or inquiry path",
];

const afterDelivered = [
  {
    category: "Brand & Design",
    items: [
      "Custom premium visual identity and logo refresh",
      "Cohesive color system and typography hierarchy",
      "Premium photography direction and image treatment",
      "Consistent brand language across all touchpoints",
    ],
  },
  {
    category: "Conversion Architecture",
    items: [
      "Powerful above-fold section with immediate value prop",
      "Strategic CTA placement throughout all pages",
      "Social proof section: reviews, star ratings, client count",
      "Service area map and coverage display",
      "Pricing transparency section to pre-qualify leads",
    ],
  },
  {
    category: "Lead Systems",
    items: [
      "Online booking form with service selection",
      "Instant email + SMS notification on form submit",
      "Automated confirmation and follow-up to prospect",
      "Lead routing to owner with all captured details",
    ],
  },
  {
    category: "Technical & SEO",
    items: [
      "Sub-2s load time on all pages",
      "Mobile-first responsive build",
      "Google Business Profile optimization",
      "Local schema markup and citation setup",
      "Google Analytics + conversion tracking",
    ],
  },
];

const thinkingPoints = [
  {
    title: "Trust first, then conversion",
    body: "Residential cleaning is high-trust. A stranger is entering someone's home. Every design decision prioritized building trust before asking for action. Review count, photo-rich service descriptions, and clear policies all came before the booking CTA.",
  },
  {
    title: "Mobile is the primary device",
    body: "Over 70% of local service searches happen on mobile. The entire site was designed mobile-first with thumb-friendly tap targets, simplified navigation, and a sticky booking button on scroll.",
  },
  {
    title: "Speed kills competition",
    body: "A 1-second delay reduces conversions by 7%. We obsessed over performance: optimized images, minimal dependencies, and an architecture built for Core Web Vitals compliance.",
  },
  {
    title: "Automated follow-up closes more jobs",
    body: "A cleaning lead that does not hear back within 5 minutes is already calling the next provider. We set up instant auto-response and a 3-step follow-up sequence to capture every inquiry.",
  },
];

export default function WorkPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-co-bg">
      {/* Page Header */}
      <section
        ref={headerRef}
        className="relative pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div
          className="orb w-[500px] h-[350px] top-0 left-1/2 -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(155,114,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>Case Study</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Real work.{" "}
            <span className="text-gradient-accent">Real results.</span>
          </motion.h1>

          <motion.p
            className="text-co-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            We believe in quality over volume. Each project receives the full
            weight of our strategy, design, and systems thinking. Here is a
            detailed look at how we transformed a residential cleaning brand.
          </motion.p>
        </div>
      </section>

      {/* Case Study */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <CaseStudyBlock />
        </div>
      </section>

      {/* More Work CTA */}
      <MoreWorkCTA />
    </div>
  );
}

function CaseStudyBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="space-y-6">
      {/* Project card header */}
      <motion.div
        className="rounded-3xl border border-co-border bg-co-card overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-3 px-6 py-3.5 border-b border-co-border bg-co-surface">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-co-text-muted">cleaningfromtheheart.com</span>
          </div>
          <div className="flex gap-2">
            <span className="px-2.5 py-1 rounded text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/15">
              Residential Cleaning
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded text-[10px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/15">
              Full Transformation
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-co-border">
          <div className="p-6 md:p-8">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-co-text-muted mb-3">Client</div>
            <h2 className="text-xl font-bold text-co-text mb-1">Cleaning From The Heart</h2>
            <p className="text-sm text-co-text-secondary">Residential cleaning service with strong customer satisfaction but weak digital presence.</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-co-text-muted mb-3">Scope</div>
            <ul className="space-y-1.5">
              {["Website Redesign", "Lead Capture System", "Automation Setup", "Local SEO Foundations"].map((s, i) => (
                <li key={i} className="text-sm text-co-text-secondary flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-co-accent shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-co-text-muted mb-3">Outcome</div>
            <div className="flex flex-col gap-3">
              {[
                { metric: "Premium presence", sub: "immediately commanding" },
                { metric: "Lead capture", sub: "fully automated" },
                { metric: "Response time", sub: "from hours to seconds" },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Star size={12} className="text-co-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-co-text">{m.metric}</span>
                    <span className="text-sm text-co-text-secondary"> — {m.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Before & After */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before */}
        <motion.div
          className="rounded-3xl border border-red-500/15 bg-red-500/[0.03] overflow-hidden"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="px-6 py-4 border-b border-red-500/10 bg-red-500/[0.05]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-red-400/80">
                Before ClevOps
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-co-text mb-4 text-base">The Problems</h3>
            <ul className="space-y-3">
              {beforeIssues.map((issue, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-co-text-secondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0 mt-1.5" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          className="rounded-3xl border border-co-accent/15 bg-co-accent/[0.03] overflow-hidden"
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="px-6 py-4 border-b border-co-accent/10 bg-co-accent/[0.05]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-co-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-co-accent">
                After ClevOps
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-6">
            {afterDelivered.map((section, i) => (
              <div key={i}>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-3">
                  {section.category}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-co-text-secondary">
                      <CheckCircle2 size={13} className="text-co-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Strategic Thinking */}
      <motion.div
        className="rounded-3xl border border-co-border bg-co-card overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      >
        <div className="px-6 md:px-8 py-5 border-b border-co-border">
          <h3 className="font-bold text-co-text text-lg">Strategic Thinking Behind The Build</h3>
          <p className="text-sm text-co-text-secondary mt-1">
            Every major decision had a reason. Here is the thinking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-co-border">
          {thinkingPoints.map((point, i) => (
            <div key={i} className="p-6 md:p-8">
              <h4 className="font-semibold text-co-text text-sm mb-2.5">{point.title}</h4>
              <p className="text-sm text-co-text-secondary leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function MoreWorkCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 border-t border-co-border bg-co-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-4">
            Want your business to be the next{" "}
            <span className="text-gradient-accent">transformation?</span>
          </h2>
          <p className="text-co-text-secondary mb-8 leading-relaxed">
            Book a free consultation and let us show you exactly what we would
            build for your business.
          </p>
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={16} />}
            className="shadow-glow-md"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
