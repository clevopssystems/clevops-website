"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  Clock,
  TrendingDown,
  Eye,
  PhoneOff,
  SearchX,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_PREMIUM } from "@/lib/animations";

/* ── Problem data ─────────────────────────────────────────────── */
const problems = [
  {
    icon: Eye,
    num: "01",
    title: "Your website looks behind",
    desc: "Visitors judge your business in under 3 seconds — before reading a single word. An outdated site signals an outdated business.",
    impact: "< 3s",
    impactLabel: "to lose trust",
    cost: "Lost credibility",
    accent: "red" as const,
  },
  {
    icon: TrendingDown,
    num: "02",
    title: "It doesn't convert visitors",
    desc: "Without clear calls to action and trust signals, 97% of visitors leave and never come back. Traffic without conversion is just cost.",
    impact: "97%",
    impactLabel: "never return",
    cost: "Lost revenue",
    accent: "orange" as const,
  },
  {
    icon: PhoneOff,
    num: "03",
    title: "You're missing leads",
    desc: "If a customer can't reach you in two clicks, they find a competitor who can. Every friction point is a job going elsewhere.",
    impact: "2 clicks",
    impactLabel: "is all they'll give",
    cost: "Lost customers",
    accent: "red" as const,
  },
  {
    icon: Clock,
    num: "04",
    title: "Slow follow-up loses jobs",
    desc: "78% of customers choose the first business to respond — not the best one. Without automation, you're losing while you sleep.",
    impact: "78%",
    impactLabel: "book first responder",
    cost: "Lost deals",
    accent: "orange" as const,
  },
  {
    icon: AlertTriangle,
    num: "05",
    title: "No systems — just a page",
    desc: "A site without automation, CRM, or lead capture is a cost centre. It runs 24/7 and earns nothing when you're not watching.",
    impact: "$0",
    impactLabel: "ROI with no system",
    cost: "Lost efficiency",
    accent: "red" as const,
  },
  {
    icon: SearchX,
    num: "06",
    title: "Your presence is invisible",
    desc: "46% of Google searches are local. If you're not ranking in Maps and local results, competitors are capturing those customers.",
    impact: "46%",
    impactLabel: "of searches are local",
    cost: "Lost visibility",
    accent: "orange" as const,
  },
] as const;

/* ── Accent colour tokens ─────────────────────────────────────── */
const ACCENT = {
  red: {
    topBar: "linear-gradient(90deg, #EF4444 0%, #F97316 100%)",
    border: "rgba(239,68,68,0.14)",
    borderHover: "rgba(239,68,68,0.32)",
    iconBg: "rgba(239,68,68,0.09)",
    iconBorder: "rgba(239,68,68,0.18)",
    iconColor: "#F87171",
    glowHover: "rgba(239,68,68,0.1)",
    stat: "#F87171",
    costText: "#F87171",
    costBg: "rgba(239,68,68,0.08)",
    costBorder: "rgba(239,68,68,0.18)",
    numColor: "rgba(239,68,68,0.80)",
  },
  orange: {
    topBar: "linear-gradient(90deg, #F97316 0%, #FACC15 100%)",
    border: "rgba(251,146,60,0.12)",
    borderHover: "rgba(251,146,60,0.28)",
    iconBg: "rgba(251,146,60,0.08)",
    iconBorder: "rgba(251,146,60,0.16)",
    iconColor: "#FB923C",
    glowHover: "rgba(251,146,60,0.09)",
    stat: "#FB923C",
    costText: "#FB923C",
    costBg: "rgba(251,146,60,0.08)",
    costBorder: "rgba(251,146,60,0.16)",
    numColor: "rgba(251,146,60,0.80)",
  },
} as const;

/* ── Individual problem card ─────────────────────────────────── */
function ProblemCard({
  problem,
  index,
  inView,
}: {
  problem: (typeof problems)[number];
  index: number;
  inView: boolean;
}) {
  const { icon: Icon, num, title, desc, impact, impactLabel, cost, accent } =
    problem;
  const a = ACCENT[accent];

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.09,
        duration: 0.65,
        ease: EASE_PREMIUM,
      }}
    >
      {/* Card shell */}
      <div
        className="h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
        style={{
          background: "#111116",
          border: `1px solid ${a.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* Top accent bar */}
        <div
          className="h-[2px] w-full flex-shrink-0 transition-opacity duration-500 opacity-50 group-hover:opacity-100"
          style={{ background: a.topBar }}
        />

        <div className="p-6 flex flex-col flex-1">
          {/* Number + cost tag */}
          <div className="flex items-center justify-between mb-5">
            <span
              className="text-[10.5px] font-black tracking-[0.25em] uppercase"
              style={{ color: a.numColor }}
            >
              {num}
            </span>
            <span
              className="text-[9.5px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide"
              style={{
                color: a.costText,
                background: a.costBg,
                border: `1px solid ${a.costBorder}`,
              }}
            >
              {cost}
            </span>
          </div>

          {/* Icon + impact stat */}
          <div className="flex items-start justify-between gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
              style={{
                background: a.iconBg,
                border: `1px solid ${a.iconBorder}`,
              }}
            >
              <Icon size={18} style={{ color: a.iconColor }} />
            </div>

            <div className="text-right">
              <div
                className="font-black leading-none tracking-tighter"
                style={{
                  color: a.stat,
                  fontSize:
                    impact.length <= 3
                      ? "2rem"
                      : impact.length <= 5
                      ? "1.7rem"
                      : "1.35rem",
                }}
              >
                {impact}
              </div>
              <div className="text-[9.5px] text-co-text-muted leading-tight mt-1">
                {impactLabel}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-co-text text-[14.5px] leading-snug mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[12.5px] text-co-text-muted leading-relaxed flex-1">
            {desc}
          </p>
        </div>
      </div>

      {/* Hover border glow — layered behind card */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10"
        style={{
          border: `1px solid ${a.borderHover}`,
          boxShadow: `0 0 32px ${a.glowHover}`,
        }}
      />
    </motion.div>
  );
}

/* ── Section export ──────────────────────────────────────────── */
export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060608]" />
      <div className="absolute inset-0 bg-dot opacity-[0.11]" />
      {/* Ambient warning orb */}
      <div
        className="orb w-[900px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(239,68,68,0.05) 0%, rgba(249,115,22,0.03) 45%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-end mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          >
            <div className="mb-5">
              <SectionLabel className="border-red-500/20 text-red-400/70">
                The Real Problem
              </SectionLabel>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text">
              Most service businesses are losing{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #f87171 0%, #fb923c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30–70% of their potential clients.
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.12 }}
          >
            Not because their service is bad — because they don&apos;t have a
            system to capture, follow up, and convert leads.{" "}
            <span className="text-co-text-secondary">
              Every problem below has a direct, measurable cost.
            </span>
          </motion.p>
        </div>

        {/* ── Card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {problems.map((problem, i) => (
            <ProblemCard key={i} problem={problem} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Summary banner ── */}
        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.85 }}
        >
          <div
            className="rounded-2xl px-8 py-5 text-center"
            style={{
              background: "rgba(239,68,68,0.04)",
              border: "1px solid rgba(239,68,68,0.1)",
            }}
          >
            <p className="text-[15px] md:text-base font-medium text-co-text leading-relaxed">
              Every day you operate without a proper system, a competitor with
              one is taking your clients.{" "}
              <span
                className="font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #f87171 0%, #fb923c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                30–70% of potential revenue
              </span>{" "}
              disappears before you ever know it existed.
            </p>
          </div>
        </motion.div>

        {/* ── Resolution statement ── */}
        <motion.div
          className="mt-10 md:mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 1.0 }}
        >
          <div className="h-px w-12 bg-co-accent/40 mb-7" />
          <p className="text-xl md:text-2xl font-medium text-co-text leading-relaxed">
            Every one of these is fixable — fast.{" "}
            <span className="text-co-text">
              The businesses that fix them first don&apos;t just catch up. They
              pull so far ahead that competitors can&apos;t follow.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
