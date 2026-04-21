"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Target, Heart, Lightbulb, TrendingUp } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Results over aesthetics",
    body: "We build beautiful sites because trust is visual. But beauty without function is just an expense. Every design decision is justified by its impact on conversion, trust, or clarity.",
  },
  {
    icon: Heart,
    title: "Deep care for service businesses",
    body: "The service business owners we work with are operators — people who get up early, work hard, and deliver real value. They deserve a digital presence that reflects that quality.",
  },
  {
    icon: Lightbulb,
    title: "Systems thinking, not project thinking",
    body: "We do not hand you a website and move on. We build the infrastructure around it — lead capture, automation, visibility — so the whole system works together.",
  },
  {
    icon: TrendingUp,
    title: "Long-term growth, not quick wins",
    body: "The best digital assets compound over time. We build foundations that become more valuable with every passing month — and we stay with you to make sure they do.",
  },
];

const facts = [
  { value: "100%", label: "Service business focused" },
  { value: "14d", label: "Average project launch time" },
  { value: "5+", label: "Core growth services" },
  { value: "24h", label: "Consultation response time" },
];

export default function AboutPage() {
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
          className="orb w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(79,127,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-5"
          >
            <SectionLabel>About ClevOps</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-co-text mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Built for businesses that{" "}
            <br className="hidden md:block" />
            <span className="text-gradient-accent">deserve better online</span>
          </motion.h1>

          <motion.p
            className="text-co-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            ClevOps is a premium growth systems company that builds websites,
            lead systems, and digital infrastructure for service businesses that
            want to grow.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <StorySection />

      {/* Values */}
      <ValuesSection />

      {/* Stats */}
      <StatsSection facts={facts} />

      {/* CTA */}
      <AboutCTA />
    </div>
  );
}

function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-28 border-t border-co-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel className="mb-5">Our Philosophy</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-6">
              A mediocre website is not free.{" "}
              <span className="text-gradient-accent">It costs you every day.</span>
            </h2>
            <div className="space-y-4 text-co-text-secondary text-base leading-relaxed">
              <p>
                ClevOps was built around a simple observation: most service
                business websites are quietly costing their owners money every
                single day. Not through any direct charge — but through missed
                leads, lost trust, and slower-responding competitors.
              </p>
              <p>
                We exist to fix that. Not with generic templates or surface-level
                redesigns — but with a proper understanding of your market, your
                customer psychology, your competitive landscape, and the digital
                infrastructure you need to win.
              </p>
              <p>
                We focus exclusively on service businesses. Cleaning companies,
                detailing businesses, home services, professional services.
                Because when you specialize, you get better at it — and our
                clients feel that difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="space-y-4"
          >
            {[
              {
                title: "We believe in precision",
                body: "Every element on your website should earn its place. No clutter, no decoration, no confusion. Just clear, strategic design that moves the visitor toward action.",
              },
              {
                title: "We believe in systems",
                body: "A website alone is not enough. Lead capture, automation, and follow-up systems transform your site from a digital brochure into a business-generating machine.",
              },
              {
                title: "We believe in partnership",
                body: "We are not transactional. We want to understand your business deeply and remain a partner in your growth — not just a vendor who delivers and disappears.",
              },
            ].map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.1,
                }}
                className="p-5 rounded-2xl border border-co-border bg-co-card hover:border-co-border-hover transition-all duration-300"
              >
                <h3 className="font-semibold text-co-text text-sm mb-2">
                  {belief.title}
                </h3>
                <p className="text-xs text-co-text-secondary leading-relaxed">
                  {belief.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-20 md:py-28 border-t border-co-border bg-co-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Core Values</SectionLabel>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            What we stand for
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 + i * 0.1,
                }}
                className="flex gap-5 p-6 rounded-2xl border border-co-border bg-co-card hover:border-co-border-hover hover:bg-co-card-hover transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-co-accent/10 border border-co-accent/15 flex items-center justify-center mt-0.5">
                  <Icon size={20} className="text-co-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-co-text mb-2">{value.title}</h3>
                  <p className="text-sm text-co-text-secondary leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Fact = { value: string; label: string };
function StatsSection({ facts }: { facts: Fact[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-16 border-t border-co-border bg-co-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + i * 0.1,
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black tracking-tighter text-co-text mb-1">
                {fact.value}
              </div>
              <div className="text-xs text-co-text-secondary">{fact.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="py-20 border-t border-co-border bg-co-surface">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-4">
            Ready to work with a partner who{" "}
            <span className="text-gradient-accent">thinks like you do</span>?
          </h2>
          <p className="text-co-text-secondary mb-8 leading-relaxed">
            Book a free consultation and let us understand your business, your
            goals, and how we can help you build the digital presence your work
            deserves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowUpRight size={16} />}
              className="shadow-glow-md"
            >
              Book a Free Consultation
            </Button>
            <Button href="/services" size="lg" variant="outline">
              View Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
