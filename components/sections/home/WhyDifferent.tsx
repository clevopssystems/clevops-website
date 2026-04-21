"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Rocket,
  Target,
  Zap,
  Users,
  LineChart,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  staggerGrid,
  staggerItemCard,
  springHoverCard,
  springHoverCardSmall,
} from "@/lib/animations";

const differentiators = [
  {
    icon: Brain,
    title: "We think in leads, not just layouts",
    description:
      "Every design decision is stress-tested against a single question: does this make a visitor more likely to call or book? If not, it gets changed. Good-looking does not mean good-performing.",
    spotlightColor: "rgba(79,127,255,0.15)",
    featured: true,
  },
  {
    icon: Target,
    title: "Business psychology is our foundation",
    description:
      "We study how service customers make buying decisions — the trust signals they need, the objections they carry, the specific words that make them book. Your site is engineered around that research.",
    spotlightColor: "rgba(155,114,255,0.12)",
    featured: true,
  },
  {
    icon: Users,
    title: "Built exclusively for service businesses",
    description:
      "Cleaning, detailing, HVAC, landscaping — we only work with businesses that live by local reputation and booked jobs. That narrow focus means our systems are already proven in your market.",
    spotlightColor: "rgba(79,127,255,0.12)",
    featured: false,
  },
  {
    icon: Zap,
    title: "Speed and quality — not one or the other",
    description:
      "Premium design does not mean slow. We build fast-loading, optimized sites that feel luxurious and load in under 1.5 seconds.",
    spotlightColor: "rgba(79,200,255,0.1)",
    featured: false,
  },
  {
    icon: Rocket,
    title: "You need a sales machine, not a website",
    description:
      "Lead capture, automation, CRM, SEO — all connected and running while you work jobs. Not separate tools. Not a brochure. A system.",
    spotlightColor: "rgba(155,114,255,0.12)",
    featured: false,
  },
  {
    icon: LineChart,
    title: "Pretty does not pay bills",
    description:
      "If a design element does not move a visitor toward booking, we question whether it belongs. Every pixel is justified. Every section earns its place.",
    spotlightColor: "rgba(79,127,255,0.15)",
    featured: false,
  },
];

export function WhyDifferent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <motion.div
        className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(155,114,255,0.05) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <motion.div
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-end mb-16 md:mb-20"
        >
          <div>
            <motion.div variants={headerLabel} className="mb-5">
              <SectionLabel>Why ClevOps</SectionLabel>
            </motion.div>
            <motion.h2
              variants={headerH2}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text"
            >
              Not a web agency.{" "}
              <span className="text-gradient-accent">A growth partner.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={headerP}
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
          >
            Most agencies deliver a website and invoice. We deliver a system —
            one that generates leads, earns trust, and makes your business the
            obvious choice in your area.
          </motion.p>
        </motion.div>

        {/* ── Row 1: 2 featured wide cards ── */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5"
        >
          {differentiators.filter((d) => d.featured).map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItemCard}
                whileHover={springHoverCard}
              >
                <SpotlightCard
                  spotlightColor={item.spotlightColor}
                  className="group h-full rounded-2xl border border-co-border bg-co-card hover:border-co-border-hover transition-colors duration-300 p-7 md:p-8"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-co-accent/10 border border-co-accent/15 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-co-accent/[0.18] group-hover:border-co-accent/25"
                    whileHover={{ scale: 1.1, rotate: 3, transition: { type: "spring", stiffness: 500, damping: 20 } }}
                  >
                    <Icon size={20} className="text-co-accent" />
                  </motion.div>
                  <h3 className="font-bold text-co-text text-base md:text-lg mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-co-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Row 2: 4 smaller cards ── */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {differentiators.filter((d) => !d.featured).map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItemCard}
                whileHover={springHoverCardSmall}
              >
                <SpotlightCard
                  spotlightColor={item.spotlightColor}
                  className="group h-full rounded-2xl border border-co-border bg-co-card hover:border-co-border-hover transition-colors duration-300 p-5"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="shrink-0 w-9 h-9 rounded-xl bg-co-accent/10 border border-co-accent/15 flex items-center justify-center group-hover:bg-co-accent/[0.18] group-hover:border-co-accent/25 transition-all duration-300"
                      whileHover={{ scale: 1.12, transition: { type: "spring", stiffness: 500, damping: 20 } }}
                    >
                      <Icon size={15} className="text-co-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-co-text text-sm mb-1.5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-co-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Blockquote — editorial, no box ── */}
        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start max-w-4xl"
          initial={{ opacity: 0, y: 32, scale: 0.99 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <div className="hidden lg:block w-px self-stretch bg-gradient-to-b from-co-accent/40 via-co-accent/20 to-transparent" />
          <div className="lg:pl-2">
            <div
              className="text-6xl font-black leading-none mb-3 select-none"
              style={{
                background: "linear-gradient(135deg, rgba(79,127,255,0.5) 0%, rgba(155,114,255,0.25) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              &ldquo;
            </div>
            <blockquote className="text-lg md:text-xl font-medium text-co-text leading-relaxed tracking-tight mb-5 max-w-3xl">
              A mediocre website does not just look bad — it actively costs you
              money every day. Every missed lead, every lost trust signal, every
              slow response is revenue walking out the door. ClevOps exists to
              close that door permanently.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-co-border" />
              <span className="text-sm text-co-text-muted font-medium">
                ClevOps Growth Philosophy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
