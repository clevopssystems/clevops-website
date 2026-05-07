"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, Star, Zap } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerList,
  staggerItemRow,
} from "@/lib/animations";

const improvements = [
  "Full visual rebrand: from forgettable template to premium identity",
  "Mobile-first architecture rebuilt from scratch, not retrofitted",
  "Conversion-focused layout with trust signals placed strategically",
  "Online booking integration with automated confirmation and follow-up",
  "Google Business profile fully optimized for local map rankings",
  "Page speed cut to sub-1.4s (down from 6.8s at baseline)",
];

/* ── Stylized before/after website mockup ── */
function BeforeMock() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-[#0c0608] overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-red-500/10 bg-red-500/[0.05]">
        <span className="text-[9px] font-semibold text-red-400/60 tracking-widest uppercase">Before</span>
      </div>
      {/* Nav bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-red-500/10">
        <div className="h-2 w-14 rounded bg-red-500/15" />
        <div className="flex-1" />
        <div className="flex gap-1.5">
          {[1,2,3,4].map(i => <div key={i} className="h-1.5 w-6 rounded bg-red-500/10" />)}
        </div>
      </div>
      {/* Hero */}
      <div className="p-3 space-y-2">
        <div className="h-10 rounded bg-red-500/10 w-full flex items-center justify-center">
          <div className="h-1.5 w-1/2 rounded bg-red-500/15" />
        </div>
        <div className="h-2 rounded bg-red-500/10 w-full" />
        <div className="h-2 rounded bg-red-500/10 w-3/4" />
        <div className="h-6 rounded bg-red-500/15 w-1/3 mt-1" />
      </div>
      {/* Services row */}
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-3">
        {[1,2,3].map(i => (
          <div key={i} className="h-8 rounded bg-red-500/[0.07] border border-red-500/10" />
        ))}
      </div>
      {/* Issues badges */}
      <div className="flex flex-wrap gap-1 px-3 pb-3">
        {["No CTA", "No Trust", "Slow"].map((t, i) => (
          <span key={i} className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400/60 border border-red-500/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function AfterMock() {
  return (
    <div className="rounded-xl border border-co-accent/25 bg-co-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-co-accent/10 bg-co-accent/[0.06]">
        <span className="text-[9px] font-semibold text-co-accent tracking-widest uppercase">After</span>
      </div>
      {/* Nav bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-co-border bg-co-surface/50">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-co-accent/30" />
          <div className="h-2 w-12 rounded bg-co-text/20" />
        </div>
        <div className="flex-1" />
        <div className="h-5 w-14 rounded bg-co-accent/20 border border-co-accent/20 flex items-center justify-center">
          <span className="text-[8px] text-co-accent font-semibold">Book Now</span>
        </div>
      </div>
      {/* Hero */}
      <div className="relative p-3">
        <div className="h-2.5 rounded w-3/4 bg-co-text/25 mb-1.5" />
        <div className="h-2 rounded w-2/3 bg-co-text/15 mb-1.5" />
        <div className="h-2 rounded w-1/2 bg-co-text/10 mb-3" />
        <div className="flex gap-2">
          <div className="h-6 rounded-lg w-16 bg-co-accent/70 flex items-center justify-center">
            <span className="text-[8px] text-white font-semibold">Book</span>
          </div>
          <div className="h-6 rounded-lg w-14 bg-white/[0.06] border border-white/10" />
        </div>
      </div>
      {/* Trust row */}
      <div className="grid grid-cols-3 gap-1.5 px-3 pb-2">
        {[
          { icon: Star, label: "4.9★" },
          { icon: TrendingUp, label: "200+" },
          { icon: Zap, label: "Fast" }
        ].map((item, i) => (
          <div key={i} className="rounded-lg bg-co-surface p-1.5 flex flex-col items-center gap-0.5 border border-co-border">
            <item.icon size={8} className="text-co-accent" />
            <span className="text-[7px] text-co-text-muted">{item.label}</span>
          </div>
        ))}
      </div>
      {/* Score */}
      <div className="flex items-center justify-between px-3 pb-2.5 border-t border-co-border pt-2">
        <span className="text-[8px] text-co-text-muted">ClevOps Score</span>
        <div className="flex items-center gap-1.5">
          <div className="w-12 h-1 rounded-full bg-co-surface overflow-hidden">
            <div className="h-full w-[92%] rounded-full bg-co-accent" />
          </div>
          <span className="text-[8px] font-bold text-co-accent">92/100</span>
        </div>
      </div>
    </div>
  );
}

export function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div
        className="orb w-[600px] h-[500px] top-1/2 right-[-8%] -translate-y-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(79,127,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12 md:mb-16"
        >
          <div>
            <motion.div variants={headerLabel} className="mb-4">
              <SectionLabel>Featured Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={headerH2}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text"
            >
              Go from invisible on Google to{" "}
              <span className="text-gradient-accent">consistent leads</span>
            </motion.h2>
          </div>
          <motion.p
            variants={headerP}
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
          >
            A cleaning business with great reviews and zero online leads.
            We rebuilt their digital presence into a machine that books jobs
            while they work, without chasing a single referral.
          </motion.p>
        </motion.div>

        {/* ── Case study — no outer box, panels breathe directly ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Before/After toggle row — floats above the content */}
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-co-border/50">
            <div className="flex items-center gap-3">
              <span className="text-xs text-co-text-muted font-medium">cleaningfromtheheart.com</span>
              <span className="hidden sm:inline-flex px-2.5 py-1 rounded text-[10px] font-semibold bg-green-500/10 text-green-400 border border-green-500/15">
                Residential Cleaning
              </span>
            </div>
            <div className="flex rounded-xl border border-co-border bg-co-card/60 backdrop-blur-sm p-1 gap-1">
              {(["before", "after"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest rounded-lg transition-all duration-200 ${
                    activeTab === tab
                      ? tab === "before"
                        ? "bg-red-500/15 text-red-400"
                        : "bg-co-accent/15 text-co-accent"
                      : "text-co-text-muted hover:text-co-text-secondary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Visual panel — no box */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-co-text-muted block mb-2">
                  Client
                </span>
                <h3 className="text-2xl font-bold text-co-text mb-3">
                  Cleaning From The Heart
                </h3>
                <p className="text-sm text-co-text-secondary leading-relaxed">
                  A quality cleaning business with strong word-of-mouth and
                  4.9-star reviews, with a website that undermined every
                  recommendation the moment a potential customer landed on it.
                </p>
              </div>

              {/* Before/After mockup */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {activeTab === "before" ? <BeforeMock /> : <AfterMock />}
              </motion.div>

              <p className="text-xs text-co-text-muted">
                Toggle Before / After above to compare
              </p>
            </div>

            {/* Deliverables panel — no box */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase text-co-text-muted block mb-6">
                What We Delivered
              </span>

              <motion.ul
                variants={staggerList}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4 mb-10"
              >
                {improvements.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItemRow}
                    className="flex items-start gap-3"
                    whileHover={{ x: 3, transition: { type: "spring", stiffness: 500, damping: 35 } }}
                  >
                    <CheckCircle2 size={15} className="text-co-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-co-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Impact stats */}
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } } }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="border-t border-co-border/50 pt-6 mb-8 grid grid-cols-2 gap-y-5"
              >
                {[
                  { label: "Brand identity", sub: "Generic → premium" },
                  { label: "Lead capture", sub: "Manual → fully automated" },
                  { label: "Response time", sub: "26 hours → 28 seconds" },
                  { label: "Page speed", sub: "6.8s → 1.4s load time" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.97 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    <div className="text-xs font-semibold text-co-text mb-0.5">{item.label}</div>
                    <div className="text-[11px] text-co-accent font-medium">{item.sub}</div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex items-center gap-4">
                <Button
                  href="/work"
                  variant="outline"
                  size="sm"
                  icon={<ArrowUpRight size={13} />}
                >
                  Full Case Study
                </Button>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-co-accent hover:text-co-accent-light transition-colors duration-200 flex items-center gap-1"
                >
                  Start your project
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
