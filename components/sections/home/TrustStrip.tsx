"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Target,
  Layers,
  TrendingUp,
  Shield,
  Award,
  Globe,
  BarChart3,
  Cpu,
} from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const items = [
  { icon: Target, text: "Conversion-first design" },
  { icon: Layers, text: "Systems, not just pages" },
  { icon: Zap, text: "Sub-2s load performance" },
  { icon: TrendingUp, text: "Built to grow with you" },
  { icon: Shield, text: "Trust-engineered UX" },
  { icon: Award, text: "Service business specialists" },
  { icon: Globe, text: "Local SEO foundations" },
  { icon: BarChart3, text: "Lead capture infrastructure" },
  { icon: Cpu, text: "Automation by default" },
];

const companyTypes = [
  "Cleaning Companies",
  "Detailing Businesses",
  "Home Services",
  "Landscaping",
  "HVAC & Plumbing",
  "Law Firms",
  "Professional Services",
  "Roofing & Siding",
  "Pest Control",
  "Pool Services",
];

function PillItem({
  icon: Icon,
  text,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-co-border bg-co-card hover:border-co-border-hover hover:bg-co-card-hover transition-all duration-300 cursor-default shrink-0">
      <Icon
        size={14}
        className="text-co-accent group-hover:scale-110 transition-transform duration-300 shrink-0"
      />
      <span className="text-sm font-medium text-co-text-secondary group-hover:text-co-text transition-colors duration-300 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

function CompanyType({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0">
      <div className="w-1 h-1 rounded-full bg-co-accent/50" />
      <span className="text-xs font-medium text-co-text-muted tracking-wide whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export function TrustStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-0 border-y border-co-border bg-co-surface overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-5 space-y-0 divide-y divide-co-border"
      >
        {/* Row 1 — services */}
        <div className="py-3">
          <Marquee speed="slow" gap={10} pauseOnHover>
            {items.map((item, i) => (
              <PillItem key={i} icon={item.icon} text={item.text} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 — company types (reverse) */}
        <div className="py-3">
          <Marquee speed="normal" gap={24} reverse pauseOnHover={false}>
            {companyTypes.map((label, i) => (
              <CompanyType key={i} label={label} />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
}
