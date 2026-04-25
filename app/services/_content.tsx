"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Filter,
  Bot,
  MapPin,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "websites",
    icon: Globe,
    number: "01",
    label: "Core Offering",
    title: "High-Converting Website Design & Development",
    tagline: "Revenue architecture, not just design",
    description:
      "Most websites look decent and do nothing. Ours are engineered from the ground up to turn visitors into inquiries. We combine premium visual design with proven conversion frameworks, trust psychology, and technical excellence to build you a digital asset that actually works.",
    includes: [
      "Custom design built around your brand and goals",
      "Mobile-first, fully responsive across all devices",
      "Conversion-optimised layout and UX structure",
      "Fast load times — sub-2 second performance target",
      "Clear trust signals: testimonials, badges, and proof",
      "Prominent, strategic CTAs throughout every page",
      "SEO-ready semantic HTML structure",
      "Google Analytics and tracking integration",
      "One revision round built into the process",
    ],
    idealFor: "Cleaning, detailing, landscaping, home service, professional service brands",
    accentColor: "rgba(79,127,255,0.12)",
    borderAccent: "rgba(79,127,255,0.25)",
  },
  {
    id: "lead-systems",
    icon: Filter,
    number: "02",
    label: "Lead Infrastructure",
    title: "Lead Capture Systems",
    tagline: "Never miss a potential customer again",
    description:
      "Traffic without capture is wasted opportunity. We build integrated lead systems that convert website visitors into inquiries 24/7 — even when you are on a job, asleep, or off for the weekend.",
    includes: [
      "Custom inquiry and contact forms",
      "Online booking system integration",
      "Service-specific landing pages",
      "Lead magnet setup (free quotes, estimates)",
      "Form-to-CRM connection and pipeline setup",
      "Lead notification system (email + SMS)",
      "Conversion tracking and reporting setup",
    ],
    idealFor: "Any service business losing leads due to friction or poor follow-up",
    accentColor: "rgba(155,114,255,0.12)",
    borderAccent: "rgba(155,114,255,0.25)",
  },
  {
    id: "automation",
    icon: Bot,
    number: "03",
    label: "Response Systems",
    title: "Automation & Follow-Up",
    tagline: "The first to respond wins. Always.",
    description:
      "Speed is a competitive advantage in service businesses. We build automated systems that respond instantly to every inquiry, send follow-up sequences, request reviews, and keep your business front-of-mind — all without manual effort.",
    includes: [
      "Instant auto-response email and SMS setup",
      "Multi-step follow-up email sequences",
      "Missed call text-back automation",
      "Automated review request campaigns",
      "Re-engagement sequences for cold leads",
      "Appointment reminder workflows",
      "CRM automation and lead tagging",
    ],
    idealFor: "Service businesses losing jobs to faster-responding competitors",
    accentColor: "rgba(79,200,255,0.1)",
    borderAccent: "rgba(79,200,255,0.2)",
  },
  {
    id: "seo",
    icon: MapPin,
    number: "04",
    label: "Local Visibility",
    title: "Local SEO Foundations",
    tagline: "Be found in your city before your competitors",
    description:
      "Ranking locally is not magic — it is structure, consistency, and signals done correctly. We build the technical and content foundations that help your business appear in Google Maps, local search results, and your service area for the right searches.",
    includes: [
      "Google Business Profile optimization",
      "Local citation building and cleanup",
      "On-page SEO: titles, meta, headers, schema",
      "Location page creation for service areas",
      "Local keyword research and mapping",
      "Schema markup for services and business",
      "NAP (name, address, phone) consistency audit",
    ],
    idealFor: "Service businesses invisible in local search despite great reviews",
    accentColor: "rgba(155,114,255,0.1)",
    borderAccent: "rgba(155,114,255,0.2)",
  },
  {
    id: "growth",
    icon: BarChart3,
    number: "05",
    label: "Ongoing Partnership",
    title: "Ongoing Growth Support",
    tagline: "Your digital presence should compound over time",
    description:
      "A launch is a beginning, not a destination. Our ongoing support includes monitoring, optimization, strategic updates, and monthly reviews that keep your digital presence performing, improving, and growing — month after month.",
    includes: [
      "Monthly performance review and reporting",
      "Continuous UX and conversion optimizations",
      "Content and copy updates",
      "A/B testing on key conversion points",
      "SEO progress monitoring and improvements",
      "New page and feature additions",
      "Priority support and response",
    ],
    idealFor: "Clients who want long-term growth, not a one-time deliverable",
    accentColor: "rgba(79,127,255,0.08)",
    borderAccent: "rgba(79,127,255,0.18)",
  },
];

export default function ServicesPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-co-bg">
      {/* Hero */}
      <section
        ref={headerRef}
        className="relative pt-36 pb-20 md:pt-40 md:pb-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div
          className="orb w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(79,127,255,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>What We Offer</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Services built to{" "}
            <span className="text-gradient-accent">perform</span>
          </motion.h1>

          <motion.p
            className="text-co-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Every service we offer is built around a single objective: helping
            your service business generate more qualified leads, build stronger
            trust, and convert more visitors into customers.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return <ServiceBlock key={service.id} service={service} Icon={Icon} index={i} />;
          })}
        </div>
      </section>

      {/* CTA */}
      <BottomCTA />
    </div>
  );
}

function ServiceBlock({
  service,
  Icon,
  index: _index,
}: {
  service: (typeof services)[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
      className="rounded-3xl border border-co-border bg-co-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-co-border">
        {/* Left panel */}
        <div
          className="lg:col-span-2 p-6 md:p-8 relative"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${service.accentColor} 0%, transparent 60%)`,
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: service.accentColor, border: `1px solid ${service.borderAccent}` }}
            >
              <Icon size={22} className="text-co-accent" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-co-text-muted">
                {service.number} · {service.label}
              </div>
            </div>
          </div>

          <div className="text-xs font-semibold tracking-widest uppercase text-co-accent mb-2">
            {service.tagline}
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-co-text tracking-tight mb-4 leading-tight">
            {service.title}
          </h2>
          <p className="text-sm text-co-text-secondary leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="rounded-xl border border-co-border bg-white/[0.02] px-4 py-3">
            <div className="text-[10px] font-semibold tracking-widest uppercase text-co-text-muted mb-1.5">
              Ideal for
            </div>
            <p className="text-xs text-co-text-secondary">{service.idealFor}</p>
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:col-span-3 p-6 md:p-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-5">
            What&apos;s included
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + j * 0.06,
                }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2 size={14} className="text-co-accent shrink-0 mt-0.5" />
                <span className="text-sm text-co-text-secondary leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-5 border-t border-co-border flex items-center gap-3">
            <Button href="/contact" size="sm" icon={<ArrowUpRight size={13} />}>
              Get Started
            </Button>
            <Button href="/contact" size="sm" variant="ghost">
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BottomCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 border-t border-co-border bg-co-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Not sure where to start?
        </motion.h2>
        <motion.p
          className="text-co-text-secondary mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Book a free consultation and we will assess where your biggest
          opportunities are — no commitment, no pressure, just clarity on what
          would actually move the needle for your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowUpRight size={16} />}
            className="shadow-glow-md"
          >
            Book a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
