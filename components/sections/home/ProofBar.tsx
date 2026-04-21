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
  },
  {
    icon: Clock,
    value: "<60s",
    label: "Average lead response time",
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.18)",
  },
  {
    icon: Zap,
    value: "3×",
    label: "Average conversion lift",
    color: "#9B72FF",
    bg: "rgba(155,114,255,0.1)",
    border: "rgba(155,114,255,0.2)",
  },
  {
    icon: Bot,
    value: "24/7",
    label: "Automated follow-up system",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.18)",
  },
];

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
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: metric.bg, border: `1px solid ${metric.border}` }}
                >
                  <Icon size={16} style={{ color: metric.color }} />
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
