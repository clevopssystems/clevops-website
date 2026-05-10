"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { EASE_PREMIUM } from "@/lib/animations"

const PROOF_ITEMS = [
  { value: "14", unit: " days", label: "average launch" },
  { value: "24/7", unit: "", label: "automation uptime" },
  { value: "Monthly", unit: "", label: "SEO optimization" },
]

const AUTHORITY_ITEMS = [
  { label: "Built for serious businesses", accent: "#4F7FFF" },
  { label: "Focused on long-term growth", accent: "#9B72FF" },
  { label: "Systems optimized monthly", accent: "#4F7FFF" },
  { label: "Results over relationship", accent: "#9B72FF" },
]

const COMPOUNDING_NODES = [
  { label: "Month 1", desc: "Foundation live" },
  { label: "Month 3", desc: "Rankings building" },
  { label: "Month 6", desc: "Leads compounding" },
  { label: "Month 12", desc: "Market authority" },
]

// Static particle positions
const CTA_PARTICLES = [
  { top: 10, left: 8,  w: 2,   opacity: 0.18, anim: "animate-float" },
  { top: 30, left: 3,  w: 1.5, opacity: 0.13, anim: "animate-float-alt" },
  { top: 70, left: 6,  w: 2,   opacity: 0.20, anim: "animate-float-slow" },
  { top: 85, left: 18, w: 1.5, opacity: 0.15, anim: "animate-float" },
  { top: 12, left: 90, w: 2,   opacity: 0.17, anim: "animate-float-alt" },
  { top: 45, left: 95, w: 1.5, opacity: 0.12, anim: "animate-float" },
  { top: 75, left: 88, w: 2.5, opacity: 0.20, anim: "animate-float-slow" },
  { top: 90, left: 75, w: 1.5, opacity: 0.14, anim: "animate-float-alt" },
]

export default function PricingFinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="relative py-28 md:py-44 overflow-hidden">
      {/* Top separator — cinematic glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(79,127,255,0.22) 25%, rgba(155,114,255,0.38) 50%, rgba(79,127,255,0.22) 75%, transparent 100%)",
        }}
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(7,7,9,0.65) 0%, transparent 100%)",
        }}
      />

      {/* Base */}
      <div className="absolute inset-0 bg-co-bg" />
      <div className="absolute inset-0 bg-grid opacity-[0.28]" />

      {/* Primary glow */}
      <div
        className="orb w-[1200px] h-[700px] -top-24 left-1/2 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.19) 0%, rgba(155,114,255,0.08) 38%, transparent 70%)",
        }}
      />

      {/* Secondary glow — bottom */}
      <div
        className="orb w-[800px] h-[500px] -bottom-20 left-1/2 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Side accent glows */}
      <div
        className="orb w-[400px] h-[800px] top-0 -left-20"
        style={{
          background: "radial-gradient(ellipse, rgba(79,127,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb w-[400px] h-[800px] top-0 -right-20"
        style={{
          background: "radial-gradient(ellipse, rgba(155,114,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal glimmer */}
      <div
        className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(79,127,255,0.08) 25%, rgba(79,127,255,0.18) 50%, rgba(79,127,255,0.08) 75%, transparent 100%)",
        }}
      />

      {/* Floating particles */}
      {CTA_PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none rounded-full ${p.anim}`}
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.w,
            height: p.w,
            background:
              i % 2 === 0 ? "rgba(79,127,255,0.9)" : "rgba(155,114,255,0.9)",
            opacity: p.opacity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">

        {/* Eyebrow */}
        <motion.p
          className="text-[10px] font-bold uppercase tracking-widest text-co-text-muted mb-7"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
        >
          The decision
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-black tracking-tightest text-co-text leading-[0.95] mb-7"
          style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.2rem)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, ease: EASE_PREMIUM, delay: 0.08 }}
        >
          Growth compounds when
          <br className="hidden sm:block" />{" "}
          the infrastructure{" "}
          <span className="text-gradient-accent">is right.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-co-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-5"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.2 }}
        >
          Businesses winning local search today are investing in systems, not
          hoping referrals hold. The gap between them and their competitors
          widens every month the infrastructure is missing.
        </motion.p>

        {/* Strategic supporting line */}
        <motion.p
          className="text-co-text-muted text-base max-w-xl mx-auto leading-relaxed mb-11"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.3 }}
        >
          Book a strategy call. We will show you exactly what your business
          needs and what it does not.
        </motion.p>

        {/* Compounding timeline — visual detail */}
        <motion.div
          className="flex items-center justify-center gap-0 mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.38 }}
        >
          {COMPOUNDING_NODES.map((node, i) => (
            <div key={node.label} className="flex items-center flex-1 min-w-0">
              {/* Node */}
              <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: `rgba(79,127,255,${0.35 + i * 0.2})`,
                    boxShadow: `0 0 ${8 + i * 4}px rgba(79,127,255,${0.3 + i * 0.18})`,
                  }}
                  animate={inView ? { scale: [1, 1.3, 1] } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
                <div className="text-center" style={{ minWidth: "60px" }}>
                  <div
                    className="text-[8px] font-bold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {node.label}
                  </div>
                  <div
                    className="text-[9px] font-semibold mt-0.5"
                    style={{ color: `rgba(79,127,255,${0.4 + i * 0.18})` }}
                  >
                    {node.desc}
                  </div>
                </div>
              </div>

              {/* Connector */}
              {i < COMPOUNDING_NODES.length - 1 && (
                <div className="flex-1 relative mx-1" style={{ height: "2px", marginBottom: "22px" }}>
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, rgba(79,127,255,${0.25 + i * 0.12}), rgba(79,127,255,${0.25 + (i+1) * 0.12}))`,
                    }}
                  />
                  {/* Moving light */}
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <motion.div
                      className="absolute inset-y-0"
                      style={{
                        width: "40%",
                        background: "linear-gradient(90deg, transparent, rgba(79,127,255,0.8), transparent)",
                        filter: "blur(0.5px)",
                      }}
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.6,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.48 }}
        >
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={16} />}
            className="shadow-glow-lg min-w-[220px]"
          >
            Book Strategy Call
          </Button>
          <Button href="/services" size="lg" variant="ghost">
            See How It Works
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.6 }}
        >
          {PROOF_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <div
                className="font-black tracking-tightest text-co-text leading-none"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                {item.value}
                {item.unit && (
                  <span className="text-gradient-accent">{item.unit}</span>
                )}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-semibold text-co-text-muted">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fine print */}
        <motion.p
          className="mt-10 text-xs text-co-text-muted"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 0.74 }}
        >
          No commitment required. We will tell you honestly if we are the
          right fit for your business and market.
        </motion.p>

        {/* Closing authority strip */}
        <motion.div
          className="mt-10 pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.86 }}
        >
          {AUTHORITY_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: item.accent + "70" }}
              />
              <span className="text-[10px] text-co-text-muted text-center uppercase tracking-widest font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
