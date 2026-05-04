"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerGrid,
  staggerItemCard,
  staggerList,
  staggerItemRow,
} from "@/lib/animations";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    subtitle: "Understand before we build",
    description:
      "Deep-dive into your business, your customers, and your competitors. We learn what makes you the obvious choice — and build everything around that. No templates, no assumptions.",
    duration: "Week 1",
    accentColor: "rgba(79,127,255,0.15)",
    borderColor: "rgba(79,127,255,0.25)",
    glowColor: "#4F7FFF",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    subtitle: "Map the growth architecture",
    description:
      "Every conversion path, trust signal, and automation flow is mapped before a single line of code is written. We build the blueprint — then we build to it.",
    duration: "Week 1–2",
    accentColor: "rgba(155,114,255,0.15)",
    borderColor: "rgba(155,114,255,0.25)",
    glowColor: "#9B72FF",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    subtitle: "Website, systems, and automation — in parallel",
    description:
      "Most agencies build in sequence. We build in parallel: website, lead systems, automation, and SEO foundations all move at once. That is why our average launch time is 14 days, not 8 weeks.",
    duration: "Week 2–3",
    accentColor: "rgba(79,200,255,0.12)",
    borderColor: "rgba(79,200,255,0.22)",
    glowColor: "#38BDF8",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    subtitle: "A quality gate, not a finish line",
    description:
      "Speed testing, mobile verification, form testing, analytics — we do not go live until every system is confirmed working. Launch day is a checkpoint, not a celebration.",
    duration: "Week 3–4",
    accentColor: "rgba(79,127,255,0.12)",
    borderColor: "rgba(79,127,255,0.22)",
    glowColor: "#4F7FFF",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Growth",
    subtitle: "Your site gets better every month",
    description:
      "Most agencies launch and disappear. We review monthly — conversion rates, lead volume, search rankings — and optimize. The system is intentionally designed to compound over time.",
    duration: "Ongoing",
    accentColor: "rgba(155,114,255,0.12)",
    borderColor: "rgba(155,114,255,0.22)",
    glowColor: "#9B72FF",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <motion.div variants={headerLabel} className="flex justify-center mb-4">
            <SectionLabel>How We Work</SectionLabel>
          </motion.div>
          <motion.h2
            variants={headerH2}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
          >
            How we actually{" "}
            <span className="text-gradient-accent">get you clients</span>
          </motion.h2>
          <motion.p
            variants={headerP}
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
          >
            Five steps. No templates, no guesswork. Every phase is built to
            move the needle on one thing: clients in your calendar.
          </motion.p>
        </motion.div>

        {/* ── Desktop: icon strip + connector + staggered text columns ── */}
        <div className="hidden md:block">

          {/* Icon badges — stagger */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center justify-between mb-4 px-[2%]"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.88 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flex flex-col items-center gap-2 flex-1"
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 500, damping: 28 } }}
              >
                <div
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center"
                  style={{ background: step.accentColor, borderColor: step.borderColor }}
                >
                  <step.icon size={20} className="text-co-accent" />
                </div>
                <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: step.borderColor.replace("0.25", "0.7").replace("0.22", "0.7") }}
                >
                  {step.number}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Step connector with SVG arrows */}
          <div className="relative flex items-center justify-between mx-[5.5%] mb-10" style={{ height: "28px" }}>
            {/* Background track */}
            <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-co-border/30" />
            {/* Animated fill */}
            <motion.div
              className="absolute inset-y-1/2 left-0 h-px origin-left"
              style={{
                background: "linear-gradient(90deg, rgba(79,127,255,0.5), rgba(155,114,255,0.35), rgba(56,189,248,0.25))",
              }}
              initial={{ scaleX: 0, width: "100%" }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            />
            {/* Arrow chevrons between steps */}
            {[0, 1, 2, 3].map((idx) => {
              const colors = ["#4F7FFF", "#9B72FF", "#38BDF8", "#4F7FFF"]
              return (
                <motion.div
                  key={idx}
                  className="absolute"
                  style={{ left: `${(idx + 1) * 20}%`, transform: "translateX(-50%)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.55 + idx * 0.15 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="rgba(13,13,17,1)" stroke={`${colors[idx]}40`} strokeWidth="1" />
                    <path
                      d="M7.5 6.5L12.5 10L7.5 13.5"
                      stroke={colors[idx]}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.85"
                    />
                  </svg>
                </motion.div>
              )
            })}
          </div>

          {/* Open text columns — staggered */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-5 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={staggerItemCard}>
                <div
                  className="text-[9px] font-bold tracking-widest uppercase mb-2"
                  style={{
                    color: step.borderColor.replace("0.25", "0.75").replace("0.22", "0.75"),
                  }}
                >
                  {step.subtitle}
                </div>
                <h3 className="font-bold text-co-text text-base mb-2">{step.title}</h3>
                <p className="text-sm text-co-text-muted leading-relaxed mb-3">
                  {step.description}
                </p>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-co-surface border border-co-border/50 text-co-text-muted">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Mobile: staggered numbered list ── */}
        <motion.div
          variants={staggerList}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:hidden border-t border-co-border/40"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={staggerItemRow}
              className="border-b border-co-border/40 py-7 grid grid-cols-[44px_1fr] gap-4 items-start"
            >
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                style={{ background: step.accentColor, borderColor: step.borderColor }}
              >
                <step.icon size={16} className="text-co-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[9px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: step.borderColor.replace("0.25", "0.7").replace("0.22", "0.7") }}
                  >
                    {step.number}
                  </span>
                  <span className="text-[10px] text-co-text-muted">{step.subtitle}</span>
                </div>
                <h3 className="font-bold text-co-text text-base mb-1.5">{step.title}</h3>
                <p className="text-sm text-co-text-muted leading-relaxed mb-3">
                  {step.description}
                </p>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-co-surface border border-co-border/50 text-co-text-muted">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
