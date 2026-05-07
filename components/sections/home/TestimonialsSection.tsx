"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_PREMIUM } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "Our leads doubled in the first 30 days. We used to miss customers while on jobs. Now the system responds instantly before we even know someone called.",
    name: "Mark T.",
    business: "Roof Cleaning Co.",
    result: "+2× leads in 30 days",
    initial: "M",
    color: "#4F7FFF",
  },
  {
    quote:
      "The before/after difference was shocking. Our old site looked like it was built in 2009. Now customers comment on how professional we look, and our calendar stays full.",
    name: "Lisa R.",
    business: "Premium Auto Detailing",
    result: "Calendar fully booked",
    initial: "L",
    color: "#9B72FF",
  },
  {
    quote:
      "I was skeptical about the investment but within 3 months we added over $8,000 a month in new revenue. ClevOps doesn't build websites. They build growth machines.",
    name: "Carlos M.",
    business: "Home Services",
    result: "+$8K/month revenue",
    initial: "C",
    color: "#38BDF8",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* ── Slightly lighter background — the contrast section ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0C1018 0%, #0E1322 50%, #0C1018 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.1]" />

      {/* Ambient centre glow */}
      <div
        className="orb w-[700px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.09) 0%, rgba(155,114,255,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Edge separators */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-accent/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-14 md:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Client Results</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-4"
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            Real clients.{" "}
            <span className="text-gradient-accent">Real revenue.</span>
          </motion.h2>
          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 }}
          >
            Service business owners who stopped relying on referrals and built
            a system that brings in leads every month, with numbers to prove it.
          </motion.p>
        </div>

        {/* ── Testimonial cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.25 + i * 0.13,
                duration: 0.7,
                ease: EASE_PREMIUM,
              }}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 28 },
              }}
              style={{
                background: "#111116",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-[2px] w-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, ${t.color} 0%, transparent 80%)`,
                }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={13}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote mark */}
                <Quote size={22} className="mb-3" style={{ color: `${t.color}30` }} />

                {/* Quote text */}
                <p className="text-sm md:text-[14.5px] text-co-text leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Result badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold mb-5 self-start"
                  style={{
                    background: `${t.color}14`,
                    border: `1px solid ${t.color}28`,
                    color: t.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: t.color }}
                  />
                  {t.result}
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: `${t.color}18`, color: t.color }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-co-text">{t.name}</div>
                    <div className="text-xs text-co-text-muted">{t.business}</div>
                  </div>
                </div>
              </div>

              {/* Hover glow layer */}
              <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                style={{ boxShadow: `0 0 48px ${t.color}10` }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── CTA nudge ── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.72 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-co-accent hover:text-co-accent-light transition-colors duration-200"
          >
            Want results like these? Book a free 30-minute strategy call.
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
