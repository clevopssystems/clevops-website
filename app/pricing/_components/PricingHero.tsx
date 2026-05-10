"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { EASE_PREMIUM } from "@/lib/animations"

const TRUST_ITEMS = [
  "Fewer clients. More attention.",
  "14-day average launch",
  "Systems improved monthly",
  "Built for serious businesses",
]

// Static positions — no SSR mismatch
const HERO_PARTICLES = [
  { top: 13, left: 7,  w: 2,   opacity: 0.22, anim: "animate-float" },
  { top: 27, left: 14, w: 1.5, opacity: 0.16, anim: "animate-float-alt" },
  { top: 63, left: 5,  w: 2.5, opacity: 0.26, anim: "animate-float-slow" },
  { top: 80, left: 22, w: 1.5, opacity: 0.18, anim: "animate-float-alt" },
  { top: 44, left: 2,  w: 2,   opacity: 0.12, anim: "animate-float" },
  { top: 16, left: 88, w: 2,   opacity: 0.20, anim: "animate-float-alt" },
  { top: 38, left: 93, w: 1.5, opacity: 0.15, anim: "animate-float" },
  { top: 71, left: 91, w: 2.5, opacity: 0.22, anim: "animate-float-slow" },
  { top: 87, left: 79, w: 1.5, opacity: 0.14, anim: "animate-float-alt" },
  { top: 55, left: 49, w: 1.5, opacity: 0.09, anim: "animate-float" },
]

export default function PricingHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-co-bg" />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 bg-grid"
        animate={{ opacity: [0.28, 0.44, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blue orb — top center, deepened */}
      <div
        className="orb w-[1100px] h-[720px] -top-40 left-1/2 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.18) 0%, rgba(79,127,255,0.07) 40%, transparent 70%)",
        }}
      />

      {/* Pulsing center depth glow — breathing scale + opacity */}
      <motion.div
        className="orb w-[820px] h-[540px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.09) 0%, rgba(155,114,255,0.04) 50%, transparent 70%)",
        }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.96, 1.03, 0.96] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Violet orb — bottom right */}
      <div
        className="orb w-[700px] h-[700px] -bottom-20 -right-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Violet orb — bottom left (new) */}
      <div
        className="orb w-[500px] h-[500px] -bottom-10 -left-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Teal depth accent — top right (new) */}
      <div
        className="orb w-[400px] h-[600px] -top-10 -right-10"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Glimmer line 1 */}
      <div
        className="absolute top-1/3 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(79,127,255,0.07) 25%, rgba(79,127,255,0.16) 50%, rgba(79,127,255,0.07) 75%, transparent 100%)",
        }}
      />

      {/* Glimmer line 2 */}
      <div
        className="absolute top-2/3 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(155,114,255,0.05) 25%, rgba(155,114,255,0.10) 50%, rgba(155,114,255,0.05) 75%, transparent 100%)",
        }}
      />

      {/* Floating depth particles */}
      {HERO_PARTICLES.map((p, i) => (
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

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 py-28 md:py-36 text-center">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <div
            className="relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase overflow-hidden"
            style={{
              background: "rgba(79,127,255,0.09)",
              border: "1px solid rgba(79,127,255,0.26)",
              color: "rgba(79,127,255,0.95)",
            }}
          >
            {/* Shimmer sweep on badge */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(79,127,255,0.14) 50%, transparent 100%)",
              }}
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "linear", delay: 1.2 }}
            />
            <span className="w-1.5 h-1.5 rounded-full bg-co-accent animate-pulse-slow shrink-0" />
            Investment in Growth
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-black tracking-tightest text-co-text leading-[0.95] mb-6"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.75rem)" }}
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE_PREMIUM, delay: 0.1 }}
        >
          Your website is either
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient-accent">making money</span>
          <br className="hidden sm:block" />{" "}
          <span style={{ color: "rgba(255,255,255,0.38)" }}>or losing it.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-co-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.25 }}
        >
          ClevOps does not sell websites. We build the revenue infrastructure
          local service businesses need to generate clients, automate follow-up,
          and grow without relying on referrals.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.38 }}
        >
          <Button
            href="#pricing"
            size="lg"
            icon={<ChevronDown size={16} />}
            className="shadow-glow-md"
          >
            See Pricing
          </Button>
          <Button
            href="/contact"
            size="lg"
            variant="outline"
            icon={<ArrowUpRight size={15} />}
          >
            Book Strategy Call
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.52 }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <div
                className="w-1 h-1 rounded-full shrink-0"
                style={{
                  background:
                    i % 2 === 0 ? "rgba(79,127,255,0.6)" : "rgba(155,114,255,0.5)",
                }}
              />
              <span className="text-xs text-co-text-muted font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
