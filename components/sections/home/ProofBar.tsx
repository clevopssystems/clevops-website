"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Zap, Bot } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/animations";

const metrics = [
  {
    icon: TrendingUp,
    value: "2,000+",
    label: "Monthly searches captured",
    color: "#4F7FFF",
    bg: "rgba(79,127,255,0.1)",
    border: "rgba(79,127,255,0.2)",
    ringPercent: 84,
  },
  {
    icon: Clock,
    value: "<60s",
    label: "Average lead response time",
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.18)",
    ringPercent: 93,
  },
  {
    icon: Zap,
    value: "3×",
    label: "Average conversion lift",
    color: "#9B72FF",
    bg: "rgba(155,114,255,0.1)",
    border: "rgba(155,114,255,0.2)",
    ringPercent: 76,
  },
  {
    icon: Bot,
    value: "24/7",
    label: "Automated follow-up system",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.18)",
    ringPercent: 100,
  },
];

function AnimatedRing({
  percent,
  color,
  delay,
  inView,
}: {
  percent: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  const r = 20;
  const circ = 2 * Math.PI * r;
  const filled = (percent / 100) * circ;
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      className="absolute inset-0 m-auto"
      style={{ transform: "rotate(-90deg)" }}
    >
      {/* Track */}
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="2.5"
      />
      {/* Fill arc */}
      <motion.circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={`${circ}`}
        initial={{ strokeDashoffset: circ }}
        animate={
          inView
            ? { strokeDashoffset: circ - filled }
            : { strokeDashoffset: circ }
        }
        transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 0.2 + delay }}
        style={{ opacity: 0.7 }}
      />
    </svg>
  );
}

export function ProofBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative border-y border-co-border overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(79,127,255,0.05) 0%, rgba(7,7,9,1) 40%, rgba(155,114,255,0.04) 100%)",
      }}
    >
      {/* Glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-accent/35 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-violet/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.p
          className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-co-text-muted pt-7 pb-0"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          What happens when you have the right system
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-co-border">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center gap-2 py-8 px-4 group cursor-default"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.65, ease: EASE_PREMIUM }}
              >
                {/* Icon with animated ring */}
                <div className="relative w-[52px] h-[52px] flex items-center justify-center mb-0.5 shrink-0">
                  <AnimatedRing
                    percent={metric.ringPercent}
                    color={metric.color}
                    delay={i * 0.12}
                    inView={inView}
                  />
                  <div
                    className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: metric.bg, border: `1px solid ${metric.border}` }}
                  >
                    <Icon size={16} style={{ color: metric.color }} />
                  </div>
                </div>

                {/* Value */}
                <span
                  className="text-2xl md:text-[2rem] font-black tracking-tight leading-none"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </span>

                {/* Label */}
                <span className="text-[9.5px] text-co-text-muted text-center leading-tight uppercase tracking-widest font-medium max-w-[96px]">
                  {metric.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
