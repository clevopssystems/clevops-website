"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe, Filter, Bot, MapPin, BarChart3 } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  staggerGrid,
  staggerItemCard,
  headerBlock,
  headerLabel,
  headerH2,
  headerP,
  springHoverCard,
} from "@/lib/animations";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "High-Converting Websites",
    tagline: "Revenue architecture, not just design",
    description:
      "Most websites look decent and do nothing. We engineer every element around one goal: getting a visitor to book. Structure, copy, trust signals, and speed — all working together.",
    features: ["Mobile-first responsive build", "Speed-optimized <2s load", "Trust-driven layout", "SEO-ready structure"],
    accentColor: "rgba(79,127,255,0.15)",
    borderAccent: "rgba(79,127,255,0.3)",
    spotlightColor: "rgba(79,127,255,0.12)",
    href: "/services#websites",
  },
  {
    icon: Filter,
    number: "02",
    title: "Lead Capture Systems",
    tagline: "Your site should work while you work",
    description:
      "While you are on a job, your site should be closing the next one. Smart forms, booking integrations, and conversion paths that capture leads around the clock — no manual effort required.",
    features: ["Smart inquiry forms", "Booking system integration", "Lead routing setup", "CRM connection"],
    accentColor: "rgba(155,114,255,0.15)",
    borderAccent: "rgba(155,114,255,0.3)",
    spotlightColor: "rgba(155,114,255,0.12)",
    href: "/services#lead-systems",
  },
  {
    icon: Bot,
    number: "03",
    title: "Automation & Follow-Up",
    tagline: "Speed wins. 78% of customers choose who responds first.",
    description:
      "Instant auto-response, email follow-up sequences, and missed-call text-back so you always respond first — even when you are in the middle of a job.",
    features: ["Instant auto-response", "Email follow-up sequences", "Missed call text-back", "Review automation"],
    accentColor: "rgba(79,200,255,0.12)",
    borderAccent: "rgba(79,200,255,0.25)",
    spotlightColor: "rgba(79,200,255,0.1)",
    href: "/services#automation",
  },
  {
    icon: MapPin,
    number: "04",
    title: "Local SEO Foundations",
    tagline: "Be found before your competitors",
    description:
      "46% of all Google searches are local. We build the digital foundation that puts you in Maps, local results, and your service area searches — where customers are actively looking to book.",
    features: ["Google Business optimization", "Local citation building", "On-page SEO setup", "Schema markup"],
    accentColor: "rgba(155,114,255,0.12)",
    borderAccent: "rgba(155,114,255,0.22)",
    spotlightColor: "rgba(155,114,255,0.1)",
    href: "/services#seo",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Ongoing Growth Support",
    tagline: "Most agencies build and disappear. We stay.",
    description:
      "Monthly performance reviews, conversion tests, and strategic updates that make your digital presence stronger every month. Your site should be better on day 365 than on launch day.",
    features: ["Monthly performance review", "Continuous optimizations", "Content updates", "Growth strategy calls"],
    accentColor: "rgba(79,127,255,0.1)",
    borderAccent: "rgba(79,127,255,0.18)",
    spotlightColor: "rgba(79,127,255,0.08)",
    href: "/services#growth",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-co-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />
      <div
        className="orb w-[500px] h-[500px] top-1/2 right-[-10%] -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(79,127,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header — orchestrated stagger ── */}
        <motion.div
          variants={headerBlock}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-14 md:mb-18"
        >
          <div>
            <motion.div variants={headerLabel} className="mb-4">
              <SectionLabel>What We Build</SectionLabel>
            </motion.div>
            <motion.h2
              variants={headerH2}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-co-text"
            >
              Five systems that work{" "}
              <span className="text-gradient-accent">together</span>
            </motion.h2>
          </div>
          <motion.p
            variants={headerP}
            className="text-co-text-muted text-base md:text-lg leading-relaxed"
          >
            Each service is engineered around one outcome: more qualified
            customers finding, trusting, and booking your business.
          </motion.p>
        </motion.div>

        {/* ── Services grid — stagger parent ── */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItemCard}
                className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                whileHover={springHoverCard}
              >
                <Link href={service.href} className="block h-full group">
                  <SpotlightCard
                    spotlightColor={service.spotlightColor}
                    className="h-full rounded-2xl border border-co-border bg-co-card transition-colors duration-300 group-hover:border-co-border-hover group-hover:shadow-card-hover"
                  >
                    <div className="relative h-full flex flex-col p-6">
                      {/* Top row */}
                      <div className="flex items-start justify-between mb-5">
                        <motion.div
                          className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300"
                          style={{
                            background: service.accentColor,
                            borderColor: service.borderAccent,
                          }}
                          whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 500, damping: 25 } }}
                        >
                          <Icon size={20} className="text-co-accent" />
                        </motion.div>
                        <span className="text-4xl font-black leading-none mt-1 text-co-text-muted/30 transition-colors duration-300 group-hover:text-co-text-muted/50">
                          {service.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="text-[10px] font-bold tracking-widest uppercase text-co-accent mb-2">
                          {service.tagline}
                        </div>
                        <h3 className="text-lg font-bold text-co-text mb-3 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm text-co-text-muted leading-relaxed mb-5 flex-1">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-5">
                          {service.features.map((feat, fi) => (
                            <li
                              key={fi}
                              className="flex items-center gap-2 text-xs text-co-text-muted"
                            >
                              <div
                                className="w-1 h-1 rounded-full shrink-0"
                                style={{ background: service.borderAccent }}
                              />
                              {feat}
                            </li>
                          ))}
                        </ul>

                        {/* Arrow */}
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-co-accent mt-auto">
                          Learn more
                          <motion.span
                            className="inline-flex"
                            whileHover={{ x: 2, y: -2, transition: { type: "spring", stiffness: 600, damping: 20 } }}
                          >
                            <ArrowUpRight size={13} />
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
