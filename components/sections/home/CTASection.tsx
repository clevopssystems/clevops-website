"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const trustItems = [
  "Free 30-minute call",
  "No pitch, just a plan",
  "Response within 4 hours",
  "Zero obligation",
];

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-co-surface" />
      <div className="absolute inset-0 bg-grid-sm opacity-30" />

      {/* Center glow */}
      <motion.div
        className="orb w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.12) 0%, rgba(155,114,255,0.06) 40%, transparent 70%)",
          y: orbY,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-co-border-hover to-transparent opacity-40" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-co-border-hover to-transparent opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Icon badge */}
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8"
          style={{
            background: "rgba(79,127,255,0.1)",
            border: "1px solid rgba(79,127,255,0.22)",
            boxShadow: "0 0 40px rgba(79,127,255,0.12)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <MessageCircle size={22} style={{ color: "#4F7FFF" }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-black tracking-tighter leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", color: "#F0F0F2" }}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Stop losing clients to better systems.
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-3"
          style={{ color: "#A0A8BC" }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
        >
          We&apos;ll show you exactly how to fix it.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-co-text-muted leading-relaxed max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
        >
          In 30 minutes, we&apos;ll diagnose exactly what&apos;s losing you clients
          and build you a clear plan to fix it.{" "}
          <span className="text-co-text font-medium">No pitch. Just answers.</span>
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
        >
          {/* Pulsing glow wrapper */}
          <div className="relative">
            <motion.div
              className="absolute -inset-[5px] rounded-[16px] pointer-events-none"
              animate={{ opacity: [0, 0.55, 0], scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              style={{
                background: "linear-gradient(135deg, rgba(79,127,255,0.4), rgba(155,114,255,0.3))",
                filter: "blur(6px)",
              }}
            />
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowUpRight size={16} />}
              className="relative shadow-glow-md hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300 min-w-[260px]"
            >
              Book Free Strategy Call
            </Button>
          </div>

          <Button href="/work" size="lg" variant="outline">
            View Our Work
          </Button>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.58 }}
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-co-accent/50" />
              <span className="text-xs font-medium text-co-text-muted">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Urgency line */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.68 }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
            style={{
              background: "rgba(239,68,68,0.06)",
              border: "1px solid rgba(239,68,68,0.15)",
            }}
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400" />
            </span>
            <span className="text-xs text-red-400/90 font-medium">
              Every day without a proper system, your competitors get your customers.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
