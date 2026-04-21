"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/config";

const words = [
  "Every day without",
  "a system that converts",
  "is a day your competitor",
  "books your customer.",
];

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-co-surface" />
      <div className="absolute inset-0 bg-grid-sm opacity-30" />

      {/* Center glow */}
      <motion.div
        className="orb w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(ellipse, rgba(79,127,255,0.1) 0%, rgba(155,114,255,0.05) 40%, transparent 70%)",
          y: orbY,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      {/* Decorative border lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-co-border-hover to-transparent opacity-40" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-co-border-hover to-transparent opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Alert badge */}
        <motion.div
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-10 border border-red-500/20 bg-red-500/[0.06]"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
          </span>
          <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
            Your competitors are investing right now
          </span>
        </motion.div>

        {/* Animated headline */}
        <h2
          className="font-black tracking-tighter leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block mr-[0.2em] last:mr-0">
              <motion.span
                className={`block ${i >= 2 ? "text-gradient-accent" : "text-co-text"}`}
                initial={{ y: "110%" }}
                animate={inView ? { y: "0%" } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15 + i * 0.1,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* Body */}
        <motion.p
          className="text-co-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        >
          Most businesses fix this too late — after a competitor has taken their
          market position. You are reading this now, which means you still have
          the window.{" "}
          <span className="text-co-text font-medium">Let&apos;s use it.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        >
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={16} />}
            className="shadow-glow-md hover:shadow-glow-lg min-w-[220px]"
          >
            Book a Free Consultation
          </Button>
          {SITE_CONFIG.phone ? (
            <Button
              href={`tel:${SITE_CONFIG.phone}`}
              size="lg"
              variant="outline"
              icon={<Phone size={15} />}
              iconPosition="left"
            >
              {SITE_CONFIG.phoneDisplay ?? "Call Us Directly"}
            </Button>
          ) : (
            <Button
              href="/contact"
              size="lg"
              variant="outline"
            >
              Schedule a Call
            </Button>
          )}
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          className="text-xs text-co-text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          Free 30-minute strategy call · No pitch, just a diagnosis · Response within 4 hours
        </motion.p>

        {/* Soft pricing anchor — filters low-quality leads */}
        <motion.p
          className="text-[11px] mt-3"
          style={{ color: "rgba(255,255,255,0.42)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          Most complete systems range from{" "}
          <span style={{ color: "rgba(255,255,255,0.70)" }}>$2,000–$5,000</span>
          {" "}depending on scope — scoped to your business, not a template.
        </motion.p>

        {/* Minimal trust line */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.88 }}
        >
          {[
            "Built to convert, not just impress",
            "No templates, no shortcuts",
            "Underperforms? We fix it.",
          ].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-co-accent/50" />
              <span className="text-xs font-medium text-co-text-muted">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
