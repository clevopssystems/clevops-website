"use client"

import { Fragment, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Search,
  Monitor,
  Mail,
  BarChart2,
  Zap,
  TrendingUp,
} from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { EASE_PREMIUM } from "@/lib/animations"

const NODES = [
  {
    icon: Search,
    label: "Local Search",
    desc: "Customer finds you",
    color: "#4F7FFF",
    step: "01",
  },
  {
    icon: Monitor,
    label: "Your Website",
    desc: "Converts in seconds",
    color: "#4F7FFF",
    step: "02",
  },
  {
    icon: Mail,
    label: "Lead Capture",
    desc: "Every inquiry logged",
    color: "#9B72FF",
    step: "03",
  },
  {
    icon: BarChart2,
    label: "SEO Engine",
    desc: "Rankings compound",
    color: "#9B72FF",
    step: "04",
  },
  {
    icon: Zap,
    label: "Automation",
    desc: "Follow-up in seconds",
    color: "#06B6D4",
    step: "05",
  },
  {
    icon: TrendingUp,
    label: "Revenue",
    desc: "Month over month",
    color: "#10B981",
    step: "06",
  },
]

function FlowConnector({ index }: { index: number }) {
  const lc = NODES[index].color
  const rc = NODES[index + 1].color
  return (
    <div
      className="hidden md:block relative self-center mx-0.5"
      style={{ flex: "1 1 0%", height: "3px", minWidth: "18px" }}
    >
      {/* Base rail */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: `linear-gradient(90deg, ${lc}30, ${rc}30)` }}
      />
      {/* Ambient glow layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, ${lc}15, ${rc}15)`,
          boxShadow: `0 0 8px ${lc}22`,
        }}
      />
      {/* Moving highlight with blur glow */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0"
          style={{
            width: "45%",
            background: `linear-gradient(90deg, transparent, ${lc}E0 35%, ${rc}E0 65%, transparent)`,
            filter: "blur(1px)",
          }}
          animate={{ x: ["-100%", "280%"] }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.36,
          }}
        />
      </div>
    </div>
  )
}

export default function SystemsVisualization() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border to-transparent" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #09090e 0%, #0b0b14 50%, #09090e 100%)",
        }}
      />

      {/* Ambient — left blue, stronger */}
      <div
        className="orb w-[800px] h-[600px] top-0 -left-24"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Ambient — right green */}
      <div
        className="orb w-[700px] h-[600px] bottom-0 -right-24"
        style={{
          background:
            "radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Center violet depth */}
      <div
        className="orb w-[600px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          >
            <SectionLabel>Growth Infrastructure</SectionLabel>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.78, ease: EASE_PREMIUM, delay: 0.08 }}
          >
            Not just a website.{" "}
            <span className="text-gradient-accent">A revenue system.</span>
          </motion.h2>

          <motion.p
            className="text-co-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE_PREMIUM, delay: 0.16 }}
          >
            Every element works in sequence. The website attracts. The system
            converts. Automation closes. Month over month, the machine compounds.
          </motion.p>
        </div>

        {/* Desktop: horizontal flow in glass tray */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE_PREMIUM, delay: 0.3 }}
        >
          <div
            className="flex items-center px-6 py-7 rounded-3xl"
            style={{
              background: "rgba(255,255,255,0.015)",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow:
                "0 8px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {NODES.map((node, i) => {
              const Icon = node.icon
              return (
                <Fragment key={node.step}>
                  {/* Node card */}
                  <motion.div
                    className="flex flex-col items-center gap-3 px-3 py-5 rounded-2xl"
                    style={{
                      width: "118px",
                      flexShrink: 0,
                      background: `linear-gradient(145deg, ${node.color}0E 0%, ${node.color}06 100%)`,
                      border: `1px solid ${node.color}22`,
                      boxShadow: `0 0 24px ${node.color}0C, 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 ${node.color}16`,
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.4 + i * 0.08,
                      duration: 0.6,
                      ease: EASE_PREMIUM,
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: `0 0 40px ${node.color}22, 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 ${node.color}28`,
                      transition: { type: "spring", stiffness: 400, damping: 28 },
                    }}
                  >
                    {/* Step label */}
                    <div
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: `${node.color}60` }}
                    >
                      {node.step}
                    </div>

                    {/* Icon with glow */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${node.color}18`,
                        border: `1px solid ${node.color}30`,
                        boxShadow: `0 0 18px ${node.color}38, 0 4px 12px rgba(0,0,0,0.4)`,
                      }}
                    >
                      <Icon size={17} style={{ color: node.color }} />
                    </div>

                    {/* Label + desc */}
                    <div className="text-center">
                      <div className="text-[11px] font-bold text-co-text leading-tight">
                        {node.label}
                      </div>
                      <div
                        className="text-[9.5px] leading-snug mt-0.5"
                        style={{ color: "rgba(255,255,255,0.34)" }}
                      >
                        {node.desc}
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated connector */}
                  {i < NODES.length - 1 && <FlowConnector index={i} />}
                </Fragment>
              )
            })}
          </div>
        </motion.div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col gap-0 items-center">
          {NODES.map((node, i) => {
            const Icon = node.icon
            return (
              <div key={node.step} className="flex flex-col items-center w-full max-w-xs">
                <motion.div
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.35 + i * 0.07,
                    duration: 0.6,
                    ease: EASE_PREMIUM,
                  }}
                  style={{
                    background: `linear-gradient(145deg, ${node.color}0C 0%, ${node.color}05 100%)`,
                    border: `1px solid ${node.color}1E`,
                    boxShadow: `0 0 16px ${node.color}0A, 0 4px 16px rgba(0,0,0,0.3)`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${node.color}18`,
                      border: `1px solid ${node.color}30`,
                      boxShadow: `0 0 14px ${node.color}35`,
                    }}
                  >
                    <Icon size={15} style={{ color: node.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-co-text">
                      {node.label}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {node.desc}
                    </div>
                  </div>
                  <div
                    className="text-[9px] font-black uppercase tracking-widest shrink-0"
                    style={{ color: `${node.color}50` }}
                  >
                    {node.step}
                  </div>
                </motion.div>

                {/* Vertical connector */}
                {i < NODES.length - 1 && (
                  <motion.div
                    style={{
                      width: "2px",
                      height: "24px",
                      background: `linear-gradient(to bottom, ${node.color}55, ${NODES[i + 1].color}55)`,
                      boxShadow: `0 0 6px ${node.color}30`,
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{
                      delay: 0.4 + i * 0.07,
                      duration: 0.4,
                      ease: EASE_PREMIUM,
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* System status bar */}
        <motion.div
          className="mt-8 md:mt-7 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_PREMIUM, delay: 1.0 }}
        >
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "rgba(52,211,153,0.85)" }}
            >
              System Active
            </span>
          </div>
          <span className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold hidden sm:block">
            SEO compounding
          </span>
          <span
            className="hidden sm:block w-1 h-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
          <span className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold hidden sm:block">
            Leads automated
          </span>
          <span
            className="hidden sm:block w-1 h-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.15)" }}
          />
          <span className="text-[10px] text-co-text-muted uppercase tracking-widest font-semibold hidden sm:block">
            Built for long-term growth
          </span>
        </motion.div>
      </div>
    </section>
  )
}
