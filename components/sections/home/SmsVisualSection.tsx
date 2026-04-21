"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  CheckCircle2,
  Bell,
  Zap,
  User,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EASE_PREMIUM } from "@/lib/animations";

/* ── SMS conversation ─────────────────────────────────── */
const smsMessages = [
  {
    from: "customer" as const,
    text: "Hi, I saw your website. Do you have availability this Saturday for a deep clean?",
    time: "2:14 PM",
  },
  {
    from: "system" as const,
    text: "Hi! Thanks for reaching out to Premier Cleaning Co. 🙌 We'd love to help — here's a quick booking link to lock in your spot!",
    time: "2:14 PM",
    auto: true,
  },
  {
    from: "customer" as const,
    text: "Wow that was fast! Just booked for 10am. Thank you!",
    time: "2:16 PM",
  },
  {
    from: "system" as const,
    text: "Confirmed! ✅ You're booked for Saturday at 10am. We'll send a reminder 24hrs before. See you then!",
    time: "2:16 PM",
    auto: true,
  },
];

/* ── CRM notification feed ────────────────────────────── */
const crmItems = [
  {
    Icon: User,
    label: "New lead: Sarah M.",
    sub: "Cleaning service inquiry",
    time: "Just now",
    color: "#4F7FFF",
  },
  {
    Icon: Zap,
    label: "Auto-response sent",
    sub: "Response time: 28 seconds",
    time: "Just now",
    color: "#38BDF8",
  },
  {
    Icon: CheckCircle2,
    label: "Booking confirmed",
    sub: "Saturday · 10:00 AM",
    time: "2 min ago",
    color: "#4ade80",
  },
  {
    Icon: Bell,
    label: "Reminder scheduled",
    sub: "24hr pre-appointment SMS",
    time: "2 min ago",
    color: "#9B72FF",
  },
];

/* ── Feature bullets ──────────────────────────────────── */
const features = [
  "Instant SMS auto-response on every inquiry",
  "Missed call text-back — never lose a lead",
  "Automated booking confirmation & reminders",
  "Follow-up sequences that run until they book",
];

export function SmsVisualSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#060609]" />
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />

      {/* Ambient glow */}
      <div
        className="orb w-[900px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,127,255,0.07) 0%, rgba(155,114,255,0.03) 45%, transparent 70%)",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE_PREMIUM }}
              className="mb-5"
            >
              <SectionLabel>Automation In Action</SectionLabel>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-[3.1rem] font-bold tracking-tighter text-co-text mb-5 leading-tight"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.1 }}
            >
              Respond in{" "}
              <span className="text-gradient-accent">28 seconds.</span>
              <br />
              Even when you&apos;re on a job.
            </motion.h2>

            <motion.p
              className="text-co-text-muted text-base md:text-lg leading-relaxed mb-8 max-w-[420px]"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.2 }}
            >
              78% of customers book with whoever responds first — not the best
              business, the fastest one. ClevOps builds instant auto-response
              systems that capture every lead, around the clock.
            </motion.p>

            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.32 }}
            >
              {features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-co-accent flex-shrink-0" />
                  <span className="text-sm text-co-text-muted">{feat}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right: visuals ── */}
          <motion.div
            className="relative flex flex-col gap-4"
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.35 }}
          >
            {/* Glow behind panels */}
            <div
              className="absolute -inset-8 -z-10 rounded-3xl blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(79,127,255,0.14) 0%, rgba(155,114,255,0.06) 50%, transparent 70%)",
              }}
            />

            {/* ── SMS conversation panel ── */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0C0C14",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(79,127,255,0.07)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center gap-3 px-4 py-3 border-b"
                style={{
                  background: "#0F0F18",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-co-accent/20 border border-co-accent/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={14} className="text-co-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-co-text">
                    SMS Auto-Response
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[9.5px] text-green-400">
                      Active · Responding automatically
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3">
                {smsMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${
                      msg.from === "customer" ? "justify-start" : "justify-end"
                    }`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.55 + i * 0.14,
                      duration: 0.4,
                      ease: EASE_PREMIUM,
                    }}
                  >
                    <div className="flex flex-col gap-1 max-w-[82%]">
                      {msg.from === "system" && msg.auto && (
                        <div className="flex items-center gap-1 justify-end">
                          <Zap size={9} className="text-co-accent" />
                          <span className="text-[8px] text-co-accent font-medium">
                            Auto-responded
                          </span>
                        </div>
                      )}
                      <div
                        className="px-3.5 py-2.5 text-[11.5px] leading-relaxed"
                        style={
                          msg.from === "customer"
                            ? {
                                background: "rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.75)",
                                borderRadius: "18px 18px 18px 4px",
                              }
                            : {
                                background:
                                  "linear-gradient(135deg, rgba(79,127,255,0.28) 0%, rgba(155,114,255,0.2) 100%)",
                                color: "rgba(255,255,255,0.92)",
                                border: "1px solid rgba(79,127,255,0.22)",
                                borderRadius: "18px 18px 4px 18px",
                              }
                        }
                      >
                        {msg.text}
                      </div>
                      <span
                        className="text-[8px]"
                        style={{
                          color: "rgba(255,255,255,0.22)",
                          textAlign: msg.from === "customer" ? "left" : "right",
                        }}
                      >
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── CRM notification feed ── */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0C0C14",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              {/* Feed header */}
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{
                  background: "#0F0F18",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-xs font-semibold text-co-text">
                  Lead Activity Feed
                </span>
                <span className="flex items-center gap-1.5 text-[9.5px] font-medium text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Feed items */}
              <div className="divide-y divide-white/[0.04]">
                {crmItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 px-4 py-2.5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.72 + i * 0.1,
                      duration: 0.45,
                      ease: EASE_PREMIUM,
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}24`,
                      }}
                    >
                      <item.Icon size={12} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-co-text truncate">
                        {item.label}
                      </div>
                      <div className="text-[9.5px] text-co-text-muted truncate">
                        {item.sub}
                      </div>
                    </div>
                    <span className="text-[8.5px] text-co-text-muted flex-shrink-0">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
