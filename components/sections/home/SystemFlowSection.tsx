"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Monitor,
  Inbox,
  Zap,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/animations";

/* ── Pipeline step data ────────────────────────────────────────── */
const steps = [
  {
    icon: Globe,
    num: "01",
    title: "Visitor Arrives",
    desc: "Local search & targeted ads",
    metric: "247 /wk",
    glow: "#4F7FFF",
    text: "#7BA3FF",
    bg: "rgba(79,127,255,0.08)",
    border: "rgba(79,127,255,0.2)",
  },
  {
    icon: Monitor,
    num: "02",
    title: "Site Converts",
    desc: "Premium, fast, trusted",
    metric: "1.4s load",
    glow: "#9B72FF",
    text: "#B89AFF",
    bg: "rgba(155,114,255,0.08)",
    border: "rgba(155,114,255,0.2)",
  },
  {
    icon: Inbox,
    num: "03",
    title: "Lead Captured",
    desc: "Smart form, 24/7 intake",
    metric: "31 /mo",
    glow: "#38BDF8",
    text: "#7DD3FC",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
  },
  {
    icon: Zap,
    num: "04",
    title: "Auto Response",
    desc: "Instant, every time",
    metric: "28s avg",
    glow: "#4F7FFF",
    text: "#7BA3FF",
    bg: "rgba(79,127,255,0.08)",
    border: "rgba(79,127,255,0.2)",
  },
  {
    icon: MessageSquare,
    num: "05",
    title: "Nurture Fires",
    desc: "Autopilot follow-up",
    metric: "3× touch",
    glow: "#9B72FF",
    text: "#B89AFF",
    bg: "rgba(155,114,255,0.08)",
    border: "rgba(155,114,255,0.2)",
  },
  {
    icon: CheckCircle2,
    num: "06",
    title: "Job Booked",
    desc: "Revenue confirmed",
    metric: "18 /wk",
    glow: "#FACC15",
    text: "#FDE047",
    bg: "rgba(250,204,21,0.1)",
    border: "rgba(250,204,21,0.28)",
    terminal: true,
  },
] as const;

const NODE_SIZE = 68; // px — icon circle diameter
const NODE_WRAP = NODE_SIZE + 20; // total flex width of each node column

/* ── Track node (icon circle) ──────────────────────────────────── */
function TrackNode({
  step,
  inView,
  delay,
}: {
  step: (typeof steps)[number];
  inView: boolean;
  delay: number;
}) {
  const Icon = step.icon;
  const isTerminal = "terminal" in step && step.terminal;

  return (
    <motion.div
      className="flex flex-col items-center flex-shrink-0"
      style={{ width: NODE_WRAP }}
      initial={{ opacity: 0, scale: 0.6, y: 8 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: [0.34, 1.3, 0.64, 1] }}
    >
      <div className="relative">
        {/* Outer pulse ring — terminal only */}
        {isTerminal && (
          <div
            className="absolute rounded-2xl pointer-events-none"
            style={{
              inset: -6,
              border: `1px solid ${step.glow}45`,
              animation: "nodePulse 2.8s ease-in-out infinite",
            }}
          />
        )}

        {/* Background ambient glow */}
        <div
          className="absolute rounded-2xl pointer-events-none"
          style={{
            inset: -10,
            background: `radial-gradient(ellipse, ${step.glow}${isTerminal ? "18" : "10"} 0%, transparent 70%)`,
            animation: isTerminal
              ? "nodePulse 2.8s ease-in-out infinite"
              : undefined,
          }}
        />

        {/* Main circle */}
        <div
          className="relative flex items-center justify-center rounded-2xl transition-all duration-500"
          style={{
            width: NODE_SIZE,
            height: NODE_SIZE,
            background: step.bg,
            border: `1.5px solid ${step.border}`,
            boxShadow: isTerminal
              ? `0 0 28px ${step.glow}35, inset 0 1px 0 ${step.glow}20`
              : `inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          <Icon
            size={isTerminal ? 27 : 22}
            style={{ color: step.text }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ── Track label (below each node) ─────────────────────────────── */
function TrackLabel({
  step,
  inView,
  delay,
}: {
  step: (typeof steps)[number];
  inView: boolean;
  delay: number;
}) {
  const isTerminal = "terminal" in step && step.terminal;

  return (
    <motion.div
      className="flex flex-col items-center text-center px-1 flex-shrink-0"
      style={{ width: NODE_WRAP }}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: EASE_PREMIUM }}
    >
      <span
        className="text-[8.5px] font-black tracking-[0.28em] uppercase mb-1.5"
        style={{ color: step.text, opacity: 0.5 }}
      >
        {step.num}
      </span>
      <span
        className="text-[12.5px] font-bold leading-tight"
        style={{ color: isTerminal ? step.text : "#F0F0F2" }}
      >
        {step.title}
      </span>
      <span className="text-[10.5px] text-co-text-muted leading-tight mt-0.5">
        {step.desc}
      </span>
      <span
        className="text-[10px] font-mono font-semibold mt-2 px-2 py-0.5 rounded-md"
        style={{
          color: step.text,
          background: step.bg,
          border: `1px solid ${step.border}`,
        }}
      >
        {step.metric}
      </span>
    </motion.div>
  );
}

/* ── Animated connector between nodes ───────────────────────────── */
function TrackConnector({
  fromGlow,
  toGlow,
  inView,
  delay,
}: {
  fromGlow: string;
  toGlow: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      className="flex-1 self-stretch relative flex items-center"
      style={{ minWidth: 28 }}
    >
      {/* Dim base rail */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{ height: 1, background: "rgba(255,255,255,0.04)" }}
      />

      {/* Animated gradient draw-in */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden rounded-full"
        style={{ height: 1 }}
      >
        <motion.div
          className="absolute inset-0 origin-left"
          style={{
            background: `linear-gradient(90deg, ${fromGlow}90, ${toGlow}70)`,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay, duration: 0.5, ease: EASE_PREMIUM }}
        />

        {/* Flowing data particles */}
        {inView &&
          [0, 0.85, 1.7].map((extra, pi) => (
            <div
              key={pi}
              className="absolute rounded-full"
              style={{
                width: 5,
                height: 5,
                top: "50%",
                marginTop: -2.5,
                background: fromGlow,
                boxShadow: `0 0 7px ${fromGlow}, 0 0 3px ${fromGlow}`,
                animation: `flowParticle 2.5s ease-in-out ${
                  delay + 0.55 + extra
                }s infinite`,
              }}
            />
          ))}
      </div>

      {/* Arrowhead */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.45, duration: 0.3 }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "3.5px solid transparent",
            borderBottom: "3.5px solid transparent",
            borderLeft: `6px solid ${toGlow}65`,
          }}
        />
      </motion.div>
    </div>
  );
}

/* ── Mobile: single vertical node row ───────────────────────────── */
function MobileNode({
  step,
  inView,
  delay,
}: {
  step: (typeof steps)[number];
  inView: boolean;
  delay: number;
}) {
  const Icon = step.icon;
  const isTerminal = "terminal" in step && step.terminal;

  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: EASE_PREMIUM }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: step.bg,
          border: `1.5px solid ${step.border}`,
          boxShadow: isTerminal ? `0 0 20px ${step.glow}30` : "none",
        }}
      >
        <Icon size={20} style={{ color: step.text }} />
      </div>

      {/* Labels */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span
            className="text-[9px] font-black tracking-[0.22em] uppercase"
            style={{ color: step.text, opacity: 0.5 }}
          >
            {step.num}
          </span>
          <span
            className="text-[9.5px] font-mono font-semibold px-1.5 py-0.5 rounded"
            style={{
              color: step.text,
              background: step.bg,
              border: `1px solid ${step.border}`,
            }}
          >
            {step.metric}
          </span>
        </div>
        <div
          className="text-[14px] font-bold leading-tight"
          style={{ color: isTerminal ? step.text : "#F0F0F2" }}
        >
          {step.title}
        </div>
        <div className="text-[11.5px] text-co-text-muted">{step.desc}</div>
      </div>
    </motion.div>
  );
}

/* ── Mobile vertical connector ──────────────────────────────────── */
function MobileConnector({
  fromGlow,
  inView,
  delay,
}: {
  fromGlow: string;
  inView: boolean;
  delay: number;
}) {
  return (
    <div className="relative ml-6 h-8 w-px overflow-hidden my-0.5">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top"
        style={{
          height: "100%",
          background: `linear-gradient(180deg, ${fromGlow}70, transparent)`,
        }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay, duration: 0.35, ease: EASE_PREMIUM }}
      />
    </div>
  );
}

/* ── Section export ─────────────────────────────────────────────── */
export function SystemFlowSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative py-28 md:py-44 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#050507]" />
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-co-bg to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-co-bg to-transparent pointer-events-none" />
      {/* Ambient center glow */}
      <div
        className="orb w-[1100px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, rgba(155,114,255,0.04) 40%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="flex justify-center mb-5"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 border border-co-accent/30 bg-co-accent/[0.06] text-sm font-bold tracking-wide text-co-accent backdrop-blur-sm">
              We build → capture → follow up → convert
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[3.2rem] font-bold tracking-tighter text-co-text mb-5 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            The simple system that{" "}
            <span className="text-gradient-accent">gets you clients</span>
          </motion.h2>

          <motion.p
            className="text-co-text-muted text-base md:text-lg leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 }}
          >
            Six steps. Runs 24/7. Every visitor gets captured, every lead gets
            followed up, every job gets booked — automatically.
          </motion.p>
        </div>

        {/* ── Desktop pipeline ── */}
        <div className="hidden lg:block">
          {/* Node row */}
          <div className="flex items-center">
            {steps.map((step, i) => (
              <div key={i} className="contents">
                <TrackNode
                  step={step}
                  inView={inView}
                  delay={0.3 + i * 0.13}
                />
                {i < steps.length - 1 && (
                  <TrackConnector
                    fromGlow={step.glow}
                    toGlow={steps[i + 1].glow}
                    inView={inView}
                    delay={0.38 + i * 0.13}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Label row — matches flex structure exactly */}
          <div className="flex items-start mt-6">
            {steps.map((step, i) => (
              <div key={i} className="contents">
                <TrackLabel
                  step={step}
                  inView={inView}
                  delay={0.48 + i * 0.13}
                />
                {i < steps.length - 1 && <div className="flex-1" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile pipeline ── */}
        <div className="lg:hidden flex flex-col max-w-xs mx-auto">
          {steps.map((step, i) => (
            <div key={i}>
              <MobileNode
                step={step}
                inView={inView}
                delay={0.2 + i * 0.1}
              />
              {i < steps.length - 1 && (
                <MobileConnector
                  fromGlow={step.glow}
                  inView={inView}
                  delay={0.26 + i * 0.1}
                />
              )}
            </div>
          ))}
        </div>

        {/* ── Result callout ── */}
        <motion.div
          className="mt-20 md:mt-28 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 1.15 }}
        >
          <div
            className="inline-flex items-start md:items-center gap-3.5 px-6 py-4 rounded-2xl max-w-xl text-left md:text-center"
            style={{
              background: "rgba(250,204,21,0.04)",
              border: "1px solid rgba(250,204,21,0.14)",
            }}
          >
            <CheckCircle2
              size={18}
              className="flex-shrink-0 mt-0.5 md:mt-0"
              style={{ color: "#FACC15" }}
            />
            <p className="text-co-text-secondary text-sm md:text-[15px] leading-relaxed">
              The result:{" "}
              <span className="text-co-text font-semibold">
                clients contact you, get followed up with instantly, and book —
                while you&apos;re focused on doing the actual work.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
