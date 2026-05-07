"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  XCircle,
  CheckCircle2,
  TrendingUp,
  Users,
  Star,
  CalendarCheck,
  ShieldCheck,
  Zap,
  LayoutTemplate,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1];

const failureReasons = [
  {
    icon: XCircle,
    heading: "No clear call to action",
    body: "Visitors land, read nothing useful, and leave. There is no obvious next step prompting them to book or call.",
  },
  {
    icon: XCircle,
    heading: "Looks like every other cleaner",
    body: "A stock template with stock photos builds zero trust. Clients compare and choose the one that feels more professional.",
  },
  {
    icon: XCircle,
    heading: "Slow and broken on mobile",
    body: "Over 70% of local searches happen on phones. A website that loads in 6 seconds on mobile is invisible in practice.",
  },
  {
    icon: XCircle,
    heading: "No trust signals",
    body: "No reviews, no credentials, no before-and-after proof. Cleaning clients need reassurance before they hand over keys.",
  },
  {
    icon: XCircle,
    heading: "Built for appearance, not conversion",
    body: "Pretty without strategy generates no leads. A website that does not turn visitors into enquiries is a liability, not an asset.",
  },
];

const whatYouGet = [
  "Custom-designed website built around your cleaning business",
  "Mobile-first, fast-loading, optimised for local search",
  "Conversion-focused layout with prominent booking CTAs",
  "Trust section: reviews, credentials, and service guarantees",
  "Before-and-after or portfolio section tailored to your niche",
  "Lead capture form connected to email and CRM notification",
  "Service area pages for local SEO targeting",
  "Google Analytics and conversion tracking integration",
  "SEO-ready semantic structure using best-practice HTML",
  "Written copy that speaks directly to your ideal client",
];

const outcomes = [
  {
    icon: CalendarCheck,
    stat: "More bookings",
    detail: "A clear booking path means visitors become paying clients instead of bouncing.",
  },
  {
    icon: TrendingUp,
    stat: "Higher close rate",
    detail: "When your website builds trust before the first call, prospects arrive pre-sold.",
  },
  {
    icon: Users,
    stat: "Better-fit clients",
    detail: "Targeted messaging attracts the type of work you actually want: residential, commercial, recurring.",
  },
  {
    icon: Star,
    stat: "Stronger reputation",
    detail: "A professional cleaning company website signals quality before anyone lifts a mop.",
  },
];

export default function CleaningBusinessPage() {
  const heroRef = useRef(null);
  const failRef = useRef(null);
  const helpRef = useRef(null);
  const getRef = useRef(null);
  const outcomesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const failInView = useInView(failRef, { once: true, margin: "-80px" });
  const helpInView = useInView(helpRef, { once: true, margin: "-80px" });
  const getInView = useInView(getRef, { once: true, margin: "-80px" });
  const outcomesInView = useInView(outcomesRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-co-border"
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-co-accent/8 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Cleaning Business Websites</SectionLabel>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              A Website for Your{" "}
              <span className="text-co-accent">Cleaning Business</span>{" "}
              That Actually Books Jobs
            </h1>

            <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
              Most cleaning company websites look fine and produce nothing. Yours will be engineered to
              convert visitors into enquiries, built specifically for service businesses that compete on trust,
              speed, and professionalism.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Request Your Free Demo
              </Button>
              <Button href="/work" variant="outline" size="lg">
                See Our Work
              </Button>
            </div>

            <p className="mt-5 text-sm text-co-text-muted">
              No commitment. No sales pitch. Just a live demo built around your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Most Cleaning Business Websites Fail */}
      <section
        ref={failRef}
        className="py-20 md:py-28 border-b border-co-border bg-co-surface"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={failInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl mb-14"
          >
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Why Most Cleaning Business Websites Fail
            </h2>
            <p className="mt-4 text-co-text-secondary leading-relaxed">
              A cleaning service website that does not generate enquiries is not a website. It is a cost.
              These are the five reasons most cleaning companies never see a single lead from their site.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {failureReasons.map((item, i) => (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 24 }}
                animate={failInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.08 + i * 0.07 }}
                className="rounded-xl border border-co-border bg-co-card p-6 flex flex-col gap-3"
              >
                <item.icon className="w-5 h-5 text-red-400 shrink-0" />
                <h3 className="font-semibold text-co-text">{item.heading}</h3>
                <p className="text-sm text-co-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section
        ref={helpRef}
        className="py-20 md:py-28 border-b border-co-border"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={helpInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                How We Help Cleaning Businesses Get More Clients
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                We do not build websites for aesthetics. We build conversion systems dressed as websites,
                designed specifically for cleaning company owners who need a consistent pipeline of new clients.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                Every element on your cleaning service website is placed with intent: to build trust, remove
                friction, and drive the visitor toward a single action: contacting you.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                We combine premium visual design with local SEO structure, fast performance, and proven
                conversion psychology. The result is a website for your cleaning business that works as hard
                as you do.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Request Your Free Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={helpInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: LayoutTemplate,
                  title: "Conversion-first design",
                  body: "Built around a clear customer journey: from first impression to booked appointment.",
                },
                {
                  icon: ShieldCheck,
                  title: "Trust architecture",
                  body: "Strategically placed reviews, guarantees, and credentials that eliminate hesitation.",
                },
                {
                  icon: Zap,
                  title: "Speed and mobile performance",
                  body: "Sub-2-second load times on mobile. Fast websites rank higher and convert better.",
                },
                {
                  icon: TrendingUp,
                  title: "Local SEO structure",
                  body: "Semantic HTML, service area pages, and on-page optimisation built in from day one.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={helpInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease, delay: 0.15 + i * 0.08 }}
                  className="flex gap-4 rounded-xl border border-co-border bg-co-card p-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-co-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-co-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-co-text">{item.title}</p>
                    <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section
        ref={getRef}
        className="py-20 md:py-28 border-b border-co-border bg-co-surface"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={getInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel>What Is Included</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Everything Your Cleaning Company Website Needs to Compete
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                No packages. No upsells. Every cleaning service website design we deliver includes the full
                stack, because a half-built site is no better than no site at all.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={getInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-3"
            >
              {whatYouGet.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  animate={getInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.055 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-co-accent shrink-0 mt-0.5" />
                  <span className="text-co-text-secondary text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        ref={outcomesRef}
        className="py-20 md:py-28 border-b border-co-border"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="max-w-2xl mb-14"
          >
            <SectionLabel>The Outcome</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              What Changes When Your Website Actually Works
            </h2>
            <p className="mt-4 text-co-text-secondary leading-relaxed">
              A well-built website for a cleaning business is not a one-time expense. It is a compounding
              asset. Here is what that looks like in practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((item, i) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 24 }}
                animate={outcomesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: 0.08 + i * 0.08 }}
                className="rounded-xl border border-co-border bg-co-card p-6 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-co-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-co-accent" />
                </div>
                <div>
                  <p className="font-bold text-lg text-co-text">{item.stat}</p>
                  <p className="mt-1 text-sm text-co-text-secondary leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-20 md:py-28"
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-grid-sm opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-co-accent/8 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="relative rounded-2xl border border-co-border bg-co-surface p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <SectionLabel className="justify-center">Free Demo</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              See What Your Cleaning Business Website Could Look Like
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              We will build a live demo of your new website (no templates, no filler) so you can see
              exactly what your cleaning company website will look like before you commit to anything.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Request Your Free Demo
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-co-text-muted">
              <span>No upfront payment required</span>
              <span>Response within 24 hours</span>
              <span>Built for your specific business</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
