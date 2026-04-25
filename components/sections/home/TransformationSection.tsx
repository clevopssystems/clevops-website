"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  Star,
  MapPin,
} from "lucide-react";
import { EASE_PREMIUM } from "@/lib/animations";

/* ── Metric comparison data ────────────────────────────────────── */
const metrics = [
  { label: "Page Speed",    before: "7.2s",   after: "1.4s",    gain: "5× faster" },
  { label: "Conversion",   before: "4%",     after: "22%",     gain: "+450%"     },
  { label: "Leads / mo",   before: "3",      after: "31",      gain: "+10×"      },
  { label: "Revenue / mo", before: "$2,400", after: "$14,400", gain: "+500%"     },

] as const;

/* ── Before panel — intentionally degraded: readable but clearly "bad" ── */
const resultStats = [
  { label: "Leads / week",   val: "31",  color: "#7BA3FF" },
  { label: "Conversion",     val: "22%", color: "#B89AFF" },
  { label: "Avg. Response",  val: "28s", color: "#7DD3FC" },
  { label: "Bookings / mo",  val: "18",  color: "#FDE047" },
] as const;

function BeforePanel() {
  return (
    <div
      className="h-full w-full flex flex-col overflow-hidden select-none"
      style={{ background: "#0C0B0F" }}
    >
      {/* Subtle red ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(239,68,68,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Nav */}
      <div
        className="relative z-10 flex items-center justify-between px-5 py-3.5"
        style={{
          background: "#100F13",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span className="text-[13px] font-semibold text-white/40">
          Joe&apos;s Cleaning Service
        </span>
        <div className="flex items-center gap-4">
          {["Home", "Services", "About", "Contact"].map((label) => (
            <span key={label} className="text-[10px] text-white/25">
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Warning bar */}
      <div
        className="relative z-10 flex items-center gap-2.5 px-5 py-1.5 text-[9.5px] font-medium flex-wrap"
        style={{
          background: "rgba(239,68,68,0.06)",
          borderBottom: "1px solid rgba(239,68,68,0.12)",
        }}
      >
        <AlertTriangle size={9} className="text-red-500/60 shrink-0" />
        {[
          "7.2s load time",
          "Not mobile-optimised",
          "Not ranking locally",
          "No lead capture",
        ].map((item, i) => (
          <span key={item} className="flex items-center gap-2.5">
            {i > 0 && <span className="text-white/15">·</span>}
            <span className="text-red-400/70">{item}</span>
          </span>
        ))}
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 px-8 py-6">
        <div className="flex flex-col items-start gap-3">
          <p className="text-[9px] font-medium tracking-[0.18em] uppercase text-white/30">
            Welcome to our website
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white/55">
            Joe&apos;s Local<br />Cleaning Service
          </h2>
          <p className="text-[11px] leading-relaxed max-w-[195px] text-white/38">
            We are a local cleaning company serving the community since 2015.
            Call or email us today!
          </p>

          <button
            className="px-5 py-2 text-xs font-medium rounded text-white/35"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              cursor: "default",
            }}
          >
            Contact Us
          </button>

          <div className="flex items-center gap-1.5 text-red-400/55">
            <AlertTriangle size={9} />
            <span className="text-[9px]">No form · No automation · No follow-up</span>
          </div>
        </div>

        {/* Image placeholder */}
        <div
          className="hidden md:flex items-center justify-center flex-col rounded-xl flex-shrink-0"
          style={{
            width: 156,
            height: 116,
            background: "rgba(255,255,255,0.03)",
            border: "1px dashed rgba(255,255,255,0.08)",
          }}
        >
          <span className="text-[9px] text-white/20">Image placeholder</span>
          <span className="text-[8px] mt-0.5 text-white/13">Generic stock photo</span>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 grid grid-cols-4"
        style={{
          background: "#100F13",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {[
          { label: "Leads/wk",   val: "3"   },
          { label: "Conversion", val: "4%"  },
          { label: "Response",   val: "26h" },
          { label: "Bookings",   val: "4"   },
        ].map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-3.5"
            style={{
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <span className="text-xl font-black text-red-500/55">{s.val}</span>
            <span className="text-[9px] mt-0.5 text-white/28">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── After panel — the ClevOps-built system ─────────────────────── */
function AfterPanel() {
  return (
    <div
      className="h-full w-full flex flex-col overflow-hidden select-none"
      style={{ background: "#070709" }}
    >
      {/* Blue ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(79,127,255,0.09) 0%, transparent 60%)",
        }}
      />

      {/* Nav */}
      <div
        className="relative z-10 flex items-center justify-between px-5 py-3.5"
        style={{
          background: "rgba(10,10,14,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{
              background: "rgba(79,127,255,0.15)",
              border: "1px solid rgba(79,127,255,0.3)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#4F7FFF]" />
          </div>
          <span className="text-[13px] font-bold text-white/92">
            Premier Cleaning Co.
          </span>
        </div>
        <div className="flex items-center gap-4">
          {["Services", "Reviews", "Areas"].map((label) => (
            <span key={label} className="text-[10px] text-white/40">
              {label}
            </span>
          ))}
          <button
            className="px-3.5 py-1.5 text-[11px] font-bold rounded-lg text-white"
            style={{
              background: "#4F7FFF",
              boxShadow: "0 0 16px rgba(79,127,255,0.4)",
              cursor: "default",
            }}
          >
            Book Online
          </button>
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="relative z-10 flex items-center gap-3 px-5 py-1.5 text-[9.5px] flex-wrap"
        style={{
          background: "rgba(79,127,255,0.04)",
          borderBottom: "1px solid rgba(79,127,255,0.10)",
        }}
      >
        <Zap size={9} className="text-[#4F7FFF]" />
        <span className="text-[#7BA3FF]">1.4s load</span>
        <span className="text-white/15">·</span>
        <Star size={9} className="text-yellow-400" />
        <span className="text-yellow-300/85">4.9 (127 reviews)</span>
        <span className="text-white/15">·</span>
        <MapPin size={9} className="text-green-400" />
        <span className="text-green-400/85">Ranking #1 locally</span>
        <span className="text-white/15">·</span>
        <CheckCircle2 size={9} className="text-[#7BA3FF]" />
        <span className="text-[#7BA3FF]/85">Insured &amp; bonded</span>
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-5">
        <div className="flex flex-col items-start gap-3 flex-1">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(79,127,255,0.10)",
              border: "1px solid rgba(79,127,255,0.25)",
              color: "#7BA3FF",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#4F7FFF" }}
            />
            Live · Taking bookings
          </div>

          <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight text-white">
            Book Your Clean<br />in 60 Seconds
          </h2>

          <p className="text-[11px] leading-relaxed max-w-[195px] text-white/50">
            Instant quotes, automated reminders, and a team that always shows up on time.
          </p>

          <button
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg, #4F7FFF 0%, #9B72FF 100%)",
              boxShadow: "0 0 22px rgba(79,127,255,0.4)",
              cursor: "default",
            }}
          >
            Get My Free Quote <ArrowRight size={12} />
          </button>

          <p className="text-[9px] text-white/30">
            No commitment · 2-min form · Instant response
          </p>
        </div>

        {/* Mini booking form */}
        <div className="hidden md:flex flex-col gap-2 flex-shrink-0" style={{ width: 148 }}>
          <p className="text-[9px] font-semibold mb-0.5 text-white/40">Quick Quote</p>
          {["Service type", "Your address", "Preferred date"].map((label, i) => (
            <div
              key={i}
              className="px-3 py-2 rounded-lg text-[9px] text-white/30"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {label}
            </div>
          ))}
          <button
            className="px-3 py-2 rounded-lg text-[10px] font-bold text-white text-center mt-0.5"
            style={{ background: "#4F7FFF", cursor: "default" }}
          >
            Get Quote
          </button>
          <div className="flex items-center gap-1.5 justify-center">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#4ade80" }}
            />
            <span className="text-[8.5px] text-green-400/75">Avg. 28s response</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 grid grid-cols-4"
        style={{
          background: "rgba(10,10,14,0.7)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {[
          { label: "Leads/wk",   val: "31",  color: "#7BA3FF" },
          { label: "Conversion", val: "22%", color: "#B89AFF" },
          { label: "Response",   val: "28s", color: "#7DD3FC" },
          { label: "Bookings",   val: "18",  color: "#FDE047" },
        ].map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-3.5"
            style={{
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <span className="text-xl font-black" style={{ color: s.color }}>{s.val}</span>
            <span className="text-[9px] mt-0.5 text-white/35">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Section export ─────────────────────────────────────────────── */
export function TransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [pos, setPos] = useState(52);
  const [dragging, setDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [mobileTab, setMobileTab] = useState<"before" | "after">("after");

  const clamp = (v: number) => Math.max(8, Math.min(92, v));

  const updatePos = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const { left, width } = containerRef.current.getBoundingClientRect();
      setPos(clamp(((clientX - left) / width) * 100));
    },
    []
  );

  /* ── Mouse drag ── */
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(true);
      setInteracted(true);
      updatePos(e.clientX);
    },
    [updatePos]
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => updatePos(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging, updatePos]);

  /* ── Touch drag ── */
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setDragging(true);
      setInteracted(true);
      updatePos(e.touches[0].clientX);
    },
    [updatePos]
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: TouchEvent) => updatePos(e.touches[0].clientX);
    const onEnd = () => setDragging(false);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [dragging, updatePos]);

  /* ── Auto-hint: swing slider once when section enters view ── */
  useEffect(() => {
    if (!inView || interacted) return;
    let raf: number;
    let start: number | null = null;
    const DURATION = 2600;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / DURATION, 1);
      setPos(52 + Math.sin(t * Math.PI) * -20);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPos(52);
      }
    };

    const tid = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 1100);

    return () => {
      clearTimeout(tid);
      cancelAnimationFrame(raf);
    };
  }, [inView, interacted]);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070709]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
            className="flex justify-center mb-4"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 border border-red-500/20 bg-red-500/[0.05] text-[11px] font-semibold tracking-widest uppercase text-red-400/70">
              Sound familiar?
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
          >
            This is how most businesses{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f87171 0%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              operate today.
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-sm mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 }}
          >
            The left side costs you jobs every day. The right side books them
            while you sleep. Drag to see the difference.
          </motion.p>
        </div>

        {/* ── Desktop comparison slider ── */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: EASE_PREMIUM, delay: 0.3 }}
        >
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-3xl"
            style={{
              height: 500,
              cursor: dragging ? "ew-resize" : "col-resize",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            {/* After panel — base layer */}
            <div
              className="absolute inset-0 z-0"
              style={{
                clipPath: `inset(0 0 0 ${pos}%)`,
                willChange: "clip-path",
              }}
            >
              <AfterPanel />
            </div>

            {/* Before panel — clipped overlay */}
            <div
              className="absolute inset-0 z-[1]"
              style={{
                clipPath: `inset(0 ${100 - pos}% 0 0)`,
                willChange: "clip-path",
              }}
            >
              <BeforePanel />
            </div>

            {/* Divider line — bright, clean */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{
                left: `${pos}%`,
                width: 2,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.6) 12%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 88%, transparent 100%)",
              }}
            />

            {/* Drag handle — clean white pill */}
            <div
              className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full pointer-events-auto"
              style={{
                left: `${pos}%`,
                width: 44,
                height: 44,
                background: "#FFFFFF",
                boxShadow:
                  "0 2px 16px rgba(0,0,0,0.5), 0 0 0 2px rgba(255,255,255,0.2)",
                touchAction: "none",
              }}
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
            >
              <ChevronLeft size={12} style={{ color: "#111", marginRight: -2 }} />
              <ChevronRight size={12} style={{ color: "#111", marginLeft: -2 }} />
            </div>

            {/* BEFORE badge — high contrast red */}
            <div
              className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest pointer-events-none"
              style={{
                background: "rgba(239,68,68,0.18)",
                backdropFilter: "blur(8px)",
                color: "#F87171",
                border: "1px solid rgba(239,68,68,0.35)",
              }}
            >
              Before
            </div>

            {/* AFTER badge — high contrast blue */}
            <div
              className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest pointer-events-none"
              style={{
                background: "rgba(79,127,255,0.18)",
                backdropFilter: "blur(8px)",
                color: "#7BA3FF",
                border: "1px solid rgba(79,127,255,0.35)",
              }}
            >
              After
            </div>

            {/* Drag hint — fades once user interacts */}
            <AnimatePresence>
              {!interacted && (
                <motion.div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    bottom: 72,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { repeat: Infinity, duration: 2.2 },
                    exit: { duration: 0.3 },
                  }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-medium whitespace-nowrap text-white/70"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <ChevronLeft size={10} />
                    drag to compare
                    <ChevronRight size={10} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Mobile tab comparison ── */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.3 }}
        >
          {/* Tab switcher */}
          <div
            className="flex rounded-xl p-1 mb-3 gap-1"
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {(["before", "after"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setMobileTab(tab)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                  mobileTab === tab
                    ? tab === "before"
                      ? "text-red-400"
                      : "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
                style={
                  mobileTab === tab
                    ? tab === "before"
                      ? {
                          background: "rgba(239,68,68,0.15)",
                          border: "1px solid rgba(239,68,68,0.30)",
                        }
                      : {
                          background: "#4F7FFF",
                          border: "1px solid rgba(79,127,255,0.5)",
                        }
                    : {}
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Mobile panel */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: 460,
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            <AnimatePresence mode="wait">
              {mobileTab === "before" ? (
                <motion.div
                  key="before"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <BeforePanel />
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <AfterPanel />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Metric comparison cards ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 md:mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_PREMIUM, delay: 0.65 }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl px-5 py-4 transition-all duration-300"
              style={{
                background: "#111116",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <p className="text-[9px] font-semibold uppercase tracking-widest mb-3 text-white/50">
                {m.label}
              </p>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-black text-[15px] leading-none text-red-500/60">
                  {m.before}
                </span>
                <ArrowRight size={11} className="text-white/40 shrink-0" />
                <span className="font-black text-[15px] leading-none text-[#7BA3FF]">
                  {m.after}
                </span>
              </div>
              <span
                className="inline-block text-[9px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.18)",
                  color: "rgba(74,222,128,0.85)",
                }}
              >
                {m.gain}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Results metrics bar ── */}
        <motion.div
          className="mt-4 rounded-2xl grid grid-cols-2 md:grid-cols-4 overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "#0D0D11",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.8 }}
        >
          {resultStats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-5 px-4"
              style={{
                borderRight:
                  i < resultStats.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <span
                className="text-2xl font-black leading-none mb-1"
                style={{ color: s.color }}
              >
                {s.val}
              </span>
              <span className="text-[10px] font-medium text-white/40">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
