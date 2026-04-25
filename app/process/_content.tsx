"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const phases = [
  {
    icon: Search,
    number: "01",
    color: "rgba(79,127,255,0.15)",
    borderColor: "rgba(79,127,255,0.3)",
    title: "Discovery",
    duration: "Week 1",
    tagline: "Understand before we build",
    description:
      "We begin with a comprehensive discovery session. We learn your business, your customers, your competitors, and your goals. This is where we identify exactly what is missing from your current presence — and what your ideal customer needs to see before they trust you enough to book.",
    deliverables: [
      "Business and goals intake",
      "Current presence audit",
      "Competitor landscape review",
      "Customer persona development",
      "Conversion opportunity identification",
      "Project scope definition",
    ],
    insight:
      "Most agencies skip this phase. They use your logo and move straight to templates. We consider discovery the most important phase — because a beautiful site built on the wrong strategy is just an expensive mistake.",
  },
  {
    icon: Lightbulb,
    number: "02",
    color: "rgba(155,114,255,0.15)",
    borderColor: "rgba(155,114,255,0.3)",
    title: "Strategy",
    duration: "Week 1–2",
    tagline: "Map the growth architecture",
    description:
      "Strategy turns discovery into a blueprint. We define your site structure, conversion flow, content architecture, and system connections. We plan every page with intent — knowing what it needs to do, who it is speaking to, and what action it should drive.",
    deliverables: [
      "Site map and page architecture",
      "Content strategy and messaging framework",
      "Conversion flow mapping",
      "Brand direction and visual concept",
      "System architecture plan",
      "Project timeline and milestones",
    ],
    insight:
      "Strategy is what separates a business asset from a digital brochure. We write the blueprint before a single line of code or design pixel is created.",
  },
  {
    icon: Code2,
    number: "03",
    color: "rgba(79,200,255,0.12)",
    borderColor: "rgba(79,200,255,0.25)",
    title: "Build",
    duration: "Week 2–3",
    tagline: "Design and develop with precision",
    description:
      "Design and development happen in parallel, with constant alignment to strategy. Every visual decision has a reason. Every interaction serves the conversion goal. We build your website, integrate your lead systems, configure automation, and set up your local SEO foundations simultaneously.",
    deliverables: [
      "Custom premium website design",
      "Full mobile-responsive development",
      "Lead capture form integration",
      "Booking system setup",
      "Automation workflow configuration",
      "Local SEO technical implementation",
    ],
    insight:
      "We do not hand off between designers and developers. It is a unified build — meaning design decisions are always technically aware and technical choices are always design-informed.",
  },
  {
    icon: Rocket,
    number: "04",
    color: "rgba(79,127,255,0.12)",
    borderColor: "rgba(79,127,255,0.22)",
    title: "Launch",
    duration: "Week 3–4",
    tagline: "Deploy and verify everything works",
    description:
      "We do not just press publish and disappear. We run a comprehensive pre-launch audit: speed tests, mobile verification, form testing, automation verification, analytics confirmation, and cross-browser checking. Everything must work before we go live.",
    deliverables: [
      "Pre-launch performance audit",
      "Mobile and cross-browser testing",
      "Form and automation system testing",
      "Analytics and tracking verification",
      "Domain and hosting setup",
      "Post-launch monitoring period",
    ],
    insight:
      "A broken form on launch day is not just a technical problem — it is lost leads. We treat launch as a quality gate, not a finish line.",
  },
  {
    icon: TrendingUp,
    number: "05",
    color: "rgba(155,114,255,0.12)",
    borderColor: "rgba(155,114,255,0.22)",
    title: "Growth",
    duration: "Ongoing",
    tagline: "Optimize, improve, expand",
    description:
      "After launch, we enter the growth phase. Monthly performance reviews, conversion optimizations, SEO progress monitoring, content updates, and new capability additions. Your digital presence should compound — not sit still. We remain your partner in making that happen.",
    deliverables: [
      "Monthly performance reports",
      "Conversion rate analysis and improvements",
      "SEO rank tracking and optimizations",
      "Content and page updates",
      "New feature and service page additions",
      "Strategic growth recommendations",
    ],
    insight:
      "The best websites are living systems. They evolve based on data, customer behavior, and market opportunities. Growth support is where investment becomes compounding return.",
  },
];

export default function ProcessPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-co-bg">
      {/* Hero */}
      <section
        ref={headerRef}
        className="relative pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div
          className="orb w-[500px] h-[350px] top-0 left-1/2 -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(79,127,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>How We Work</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Five phases. Zero{" "}
            <span className="text-gradient-accent">shortcuts.</span>
          </motion.h1>

          <motion.p
            className="text-co-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Every project follows the same disciplined process — not because it
            is easy, but because it is what produces real, lasting results for
            service businesses.
          </motion.p>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-6">
          {phases.map((phase, i) => (
            <PhaseBlock key={i} phase={phase} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <ProcessCTA />
    </div>
  );
}

function PhaseBlock({
  phase,
  index: _index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const Icon = phase.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
      className="rounded-3xl border border-co-border bg-co-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-co-border">
        {/* Phase marker */}
        <div
          className="lg:col-span-3 p-6 md:p-8 relative"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${phase.color} 0%, transparent 70%)`,
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: phase.color, border: `1px solid ${phase.borderColor}` }}
            >
              <Icon size={22} className="text-co-accent" />
            </div>
            <span className="text-4xl font-black text-co-text-muted/25 leading-none">
              {phase.number}
            </span>
          </div>

          <div className="text-xs font-semibold tracking-widest uppercase text-co-accent mb-2">
            {phase.tagline}
          </div>
          <h2 className="text-2xl font-bold text-co-text mb-2 tracking-tight">
            {phase.title}
          </h2>
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-co-surface border border-co-border text-co-text-secondary">
            {phase.duration}
          </span>

          <p className="mt-5 text-sm text-co-text-secondary leading-relaxed">
            {phase.description}
          </p>
        </div>

        {/* Deliverables */}
        <div className="lg:col-span-5 p-6 md:p-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-5">
            Phase Deliverables
          </h3>
          <ul className="space-y-3">
            {phase.deliverables.map((item, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + j * 0.06,
                }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: phase.borderColor }}
                />
                <span className="text-sm text-co-text-secondary">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Insight */}
        <div className="lg:col-span-4 p-6 md:p-8 bg-co-surface/50">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-4">
            Why This Phase Matters
          </h3>
          <p className="text-sm text-co-text-secondary leading-relaxed">
            {phase.insight}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 border-t border-co-border bg-co-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-4">
            Ready to start the{" "}
            <span className="text-gradient-accent">discovery process</span>?
          </h2>
          <p className="text-co-text-secondary mb-8 leading-relaxed">
            The first step is a free consultation. We learn about your business,
            audit your current presence, and show you exactly what a ClevOps
            growth system would look like for you.
          </p>
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={16} />}
            className="shadow-glow-md"
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
