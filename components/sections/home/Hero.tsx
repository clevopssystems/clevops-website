"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, TrendingUp, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

/* ── Floating dashboard visual ────────────────────────────── */
function DashboardVisual({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const rotateX = (mouseY - 0.5) * -12;
  const rotateY = (mouseX - 0.5) * 12;

  return (
    <motion.div
      className="relative w-full max-w-[420px] mx-auto"
      style={{
        perspective: 800,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 80, damping: 25 }}
    >
      {/* Glow behind */}
      <div
        className="absolute -inset-8 rounded-3xl blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.22) 0%, rgba(155,114,255,0.1) 50%, transparent 70%)",
          animation: "pulseGlow 5s ease-in-out infinite",
        }}
      />

      {/* Lead notification – top right */}
      <motion.div
        className="absolute -top-6 -right-4 z-20 rounded-2xl border border-co-border bg-co-card/90 backdrop-blur-xl px-3.5 py-2.5 shadow-card-md"
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-co-text whitespace-nowrap">
              New Lead Received
            </div>
            <div className="text-[9px] text-co-text-muted">
              Sarah M. · Cleaning Service
            </div>
          </div>
          <div className="text-[10px] font-bold text-green-400 ml-1">+1</div>
        </div>
      </motion.div>

      {/* Booking confirmed – bottom left */}
      <motion.div
        className="absolute -bottom-5 -left-4 z-20 rounded-2xl border border-co-border bg-co-card/90 backdrop-blur-xl px-3.5 py-2.5 shadow-card-md"
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translateZ(14px)" }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-co-accent/20 border border-co-accent/30 flex items-center justify-center shrink-0">
            <Zap size={12} className="text-co-accent" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-co-text whitespace-nowrap">
              Booking Confirmed
            </div>
            <div className="text-[9px] text-co-text-muted">
              John D. · Roof Cleaning
            </div>
          </div>
        </div>
      </motion.div>

      {/* Review card – right mid */}
      <motion.div
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 rounded-2xl border border-co-border bg-co-card/90 backdrop-blur-xl p-3 shadow-card-md"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translateZ(10px)" }}
      >
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <div className="text-[9px] text-co-text-muted whitespace-nowrap">
          &ldquo;Best investment we made&rdquo;
        </div>
      </motion.div>

      {/* Main card — website mock */}
      <motion.div
        className="relative rounded-2xl border border-co-border bg-co-card overflow-hidden shadow-card-md"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translateZ(0px)" }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-co-border bg-co-surface">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2 h-4 rounded bg-co-bg flex items-center px-2">
            <span className="text-[8px] text-co-text-muted tracking-wide">
              yourbusiness.com
            </span>
          </div>
          <TrendingUp size={10} className="text-green-400" />
        </div>

        {/* Hero area mock */}
        <div className="p-3 bg-[#080808] border-b border-co-border">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-5 w-5 rounded bg-co-accent/20 border border-co-accent/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-co-accent" />
            </div>
            <div className="h-2 rounded w-20 bg-co-text/20" />
          </div>
          <div className="h-3 rounded w-3/4 bg-co-text/25 mb-1.5" />
          <div className="h-3 rounded w-2/3 bg-co-text/15 mb-1.5" />
          <div className="h-2.5 rounded w-1/2 bg-co-text/10 mb-3" />
          <div className="flex gap-2">
            <div className="h-6 rounded-lg w-20 bg-co-accent/70" />
            <div className="h-6 rounded-lg w-16 bg-white/[0.06] border border-white/[0.10]" />
          </div>
        </div>

        {/* Trust bar mock */}
        <div className="grid grid-cols-3 gap-1.5 p-3 border-b border-co-border">
          {[
            { icon: Star, label: "4.9★ Rating", color: "text-yellow-400" },
            { icon: TrendingUp, label: "200+ Jobs", color: "text-green-400" },
            { icon: Zap, label: "Fast Response", color: "text-co-accent" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-co-surface p-2 flex flex-col items-center gap-0.5"
            >
              <item.icon size={10} className={item.color} />
              <span className="text-[7px] text-co-text-muted text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Services grid mock */}
        <div className="grid grid-cols-2 gap-2 p-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-co-surface h-10 border border-co-border flex items-center justify-between px-2"
            >
              <div className="h-1.5 rounded w-12 bg-co-text/15" />
              <ArrowUpRight size={8} className="text-co-accent" />
            </div>
          ))}
        </div>

        {/* Score bar */}
        <div className="flex items-center justify-between px-3 py-2.5 border-t border-co-border">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-co-accent animate-pulse" />
            <span className="text-[9px] text-co-text-muted font-medium">
              ClevOps Conversion Score
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 w-16 h-1 rounded-full bg-co-surface overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-co-accent"
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-[9px] font-bold text-co-accent">92/100</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Stat card ────────────────────────────────────────────── */
function StatCard({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 px-5 py-3.5 rounded-2xl backdrop-blur-sm"
      style={{
        background: "rgba(255,255,255,0.055)",
        border: "1px solid rgba(255,255,255,0.13)",
      }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-gradient-accent">
        {value}
      </span>
      <span className="text-[10px] text-co-text-muted text-center leading-tight font-medium tracking-widest uppercase">
        {label}
      </span>
    </motion.div>
  );
}

/* ── Main Hero ────────────────────────────────────────────── */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 600], [0, 60]);
  const contentOpacity = useTransform(scrollY, [300, 800], [1, 0]);
  const orbY = useTransform(scrollY, [0, 600], [0, -120]);
  const ring1Y = useTransform(scrollY, [0, 600], [0, -70]);
  const ring2Y = useTransform(scrollY, [0, 600], [0, 50]);

  const rawMouseX = useMotionValue(0.5);
  const rawMouseY = useMotionValue(0.5);
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 20 });
  const [mx, setMx] = useState(0.5);
  const [my, setMy] = useState(0.5);

  useEffect(() => {
    const unsubX = mouseX.on("change", setMx);
    const unsubY = mouseY.on("change", setMy);
    return () => {
      unsubX();
      unsubY();
    };
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rawMouseX.set((e.clientX - rect.left) / rect.width);
    rawMouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* ── Layer 1: Base ── */}
      <div className="absolute inset-0 bg-co-bg" />

      {/* ── Layer 2: Fine dot texture ── */}
      <div className="absolute inset-0 bg-dot opacity-[0.18]" />

      {/* ── Layer 3: Grid ── */}
      <div className="absolute inset-0 bg-grid opacity-[0.28]" />

      {/* ── Layer 4: Central stage spotlight ── */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "1000px",
          height: "750px",
          background:
            "radial-gradient(ellipse 50% 65% at 50% 0%, rgba(79,127,255,0.18) 0%, rgba(79,127,255,0.05) 45%, transparent 75%)",
          y: orbY,
        }}
      />

      {/* ── Layer 5: Violet bottom-right accent ── */}
      <div
        className="orb w-[700px] h-[600px] bottom-[-12%] right-[-8%] animate-float-alt"
        style={{
          background:
            "radial-gradient(ellipse, rgba(155,114,255,0.11) 0%, transparent 70%)",
        }}
      />

      {/* ── Layer 6: Subtle blue left ── */}
      <div
        className="orb w-[500px] h-[400px] top-[35%] left-[-10%] animate-float-slow"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Layer 7: Decorative rotating rings ── */}
      {/* Large ring — top right, parallax */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "650px",
          height: "650px",
          top: "-12%",
          right: "-8%",
          border: "1px solid rgba(79,127,255,0.07)",
          y: ring1Y,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner ring — slightly faster, violet tint */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "440px",
          height: "440px",
          top: "-6%",
          right: "-3%",
          border: "1px solid rgba(155,114,255,0.05)",
          y: ring1Y,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      />
      {/* Small ring — bottom left, opposite parallax */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "320px",
          height: "320px",
          bottom: "8%",
          left: "-4%",
          border: "1px solid rgba(79,127,255,0.05)",
          y: ring2Y,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Layer 8: Horizontal glimmer lines ── */}
      <div className="absolute top-[37%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-accent/8 to-transparent" />
      <div className="absolute top-[64%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-violet/5 to-transparent" />

      {/* ── Layer 9: Edge & bottom fades ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-co-bg/70 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-co-bg to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-co-bg to-transparent" />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* LEFT — Text */}
          <div className="flex flex-col items-start justify-center">

            {/* Eyebrow */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-10 backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.028)",
                boxShadow:
                  "0 0 0 1px rgba(79,127,255,0.22), inset 0 0 0 1px rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-co-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-co-accent" />
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-co-text-secondary">
                Premium Growth Systems · Service Businesses
              </span>
            </motion.div>

            {/* Headline — cinematic scale */}
            <h1
              className="font-black leading-[0.93] tracking-[-0.04em] mb-8 text-co-text"
              style={{ fontSize: "clamp(4rem, 8.5vw, 7rem)" }}
            >
              {/* Line 1 */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25,
                  }}
                  className="block"
                >
                  Your Site Is
                </motion.div>
              </div>

              {/* Line 2 */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.38,
                  }}
                  className="block"
                  style={{ color: "rgba(240,240,242,0.92)" }}
                >
                  Costing You
                </motion.div>
              </div>

              {/* Line 3 — accent with animated underline */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.51,
                  }}
                  className="block"
                >
                  <span className="relative inline-block">
                    <span className="text-gradient-accent">Jobs Every Day.</span>

                    {/* Draw-in underline */}
                    <motion.span
                      className="absolute left-0 right-0 overflow-hidden rounded-full block"
                      style={{
                        bottom: "-0.1em",
                        height: "3px",
                        transformOrigin: "left center",
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{
                        delay: 1.05,
                        duration: 0.85,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {/* Shifting gradient inner */}
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #4F7FFF 0%, #9B72FF 50%, #4F7FFF 100%)",
                          backgroundSize: "200% 100%",
                          animation: "gradientX 5s ease infinite 2s",
                          opacity: 0.7,
                        }}
                      />
                    </motion.span>
                  </span>
                </motion.div>
              </div>
            </h1>

            {/* Subtext — distinctly secondary */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-[500px]"
              style={{ color: "#A0A8BC", lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.78 }}
            >
              Every hour without automated lead capture, instant responses, and
              a conversion-first website is revenue going to a competitor.
              ClevOps builds the complete system that fixes all of it — fast.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.96 }}
            >
              {/* Primary CTA — pulsing outer ring */}
              <div className="relative">
                <motion.div
                  className="absolute -inset-[4px] rounded-[14px] pointer-events-none"
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.96, 1.03, 0.96],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.8,
                  }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(79,127,255,0.45), rgba(155,114,255,0.35))",
                    filter: "blur(6px)",
                  }}
                />
                <Button
                  href="/contact"
                  size="lg"
                  icon={<ArrowUpRight size={16} />}
                  className="relative shadow-glow-md hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300 text-base px-8 py-4"
                >
                  Book a Free Consultation
                </Button>
              </div>

              <Button href="/work" size="lg" variant="outline">
                See Our Work
              </Button>
            </motion.div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 relative z-20">
              {[
                { value: "3×", label: "More Qualified Leads" },
                { value: "92%", label: "Client Satisfaction" },
                { value: "14d", label: "Avg. Launch Time" },
              ].map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  delay={1.2 + i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <DashboardVisual mouseX={mx} mouseY={my} />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span className="text-[10px] text-co-text-muted tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={15} className="text-co-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
