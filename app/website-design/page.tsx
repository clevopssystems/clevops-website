import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { niches } from "@/data/niches"

export const metadata: Metadata = {
  title: "Website Design for Service Businesses | ClevOps",
  description:
    "ClevOps builds conversion-focused websites for cleaning companies, HVAC, contractors, landscapers, auto detailers, roofers, plumbers, and barbershops. 14-day delivery from $999.",
}

export default function WebsiteDesignHubPage() {
  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-co-border">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-co-accent/8 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <SectionLabel>Website Design by Service Type</SectionLabel>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            <span className="text-co-accent">Website Design</span> Built for Every Service Business
          </h1>

          <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
            Every service business has different conversion challenges. We build websites specifically for the way customers in each niche search, compare, and decide — not generic templates dressed up with your logo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
              Get Your Free Demo
            </Button>
            <Button href="/locations" variant="outline" size="lg">
              Browse by Location
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-co-text-muted">
            <span>{niches.length} service niches</span>
            <span>$999 one-time</span>
            <span>14-day delivery</span>
          </div>
        </div>
      </section>

      {/* Niches grid */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Service Niches</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Your Industry, Built Right
            </h2>
            <p className="mt-4 text-co-text-secondary leading-relaxed">
              Each niche page explains the specific conversion challenges for that service type, what we build to solve them, and how it translates to more booked jobs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {niches.map((niche) => (
              <Link
                key={niche.slug}
                href={`/website-design/${niche.slug}`}
                className="group rounded-xl border border-co-border bg-co-card p-6 hover:border-co-border-hover hover:bg-co-card-hover transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-2xl">{niche.icon}</span>
                  <ArrowRight className="w-4 h-4 text-co-text-muted group-hover:text-co-accent group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-1" />
                </div>
                <p className="font-semibold text-co-text group-hover:text-co-accent transition-colors duration-200 mb-2">
                  {niche.name}
                </p>
                <p className="text-sm text-co-text-muted leading-relaxed line-clamp-2">
                  {niche.subheadline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why niche-specific matters */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                Why Generic Websites Lose to Niche-Built Ones
              </h2>
              <p className="mt-5 text-co-text-secondary leading-relaxed">
                A cleaning company&apos;s website needs to communicate trust differently than an HVAC company&apos;s. A roofing site has different credibility requirements than a barbershop. The copy, the layout, the CTAs, the social proof — all of it changes based on what the customer is actually afraid of when they search.
              </p>
              <p className="mt-4 text-co-text-secondary leading-relaxed">
                We build each website around the specific psychology of that niche&apos;s buyer. That&apos;s why our sites convert — not because they look good, but because they&apos;re engineered for the decision being made.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="md">
                  Get Your Free Demo
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: "Cleaning & Home Services",
                  note: "Trust-first — customers hand over keys",
                  niches: ["Cleaning Companies", "HVAC Companies", "Plumbers"],
                },
                {
                  label: "Visual Services",
                  note: "Proof-first — customers buy what they can see",
                  niches: ["Auto Detailing", "Landscaping", "Contractors"],
                },
                {
                  label: "High-Trust Purchases",
                  note: "Credibility-first — customers are scared of being taken",
                  niches: ["Roofing Companies", "Barbershops"],
                },
              ].map((group) => (
                <div
                  key={group.label}
                  className="rounded-xl border border-co-border bg-co-card p-5"
                >
                  <p className="font-semibold text-co-text">{group.label}</p>
                  <p className="mt-0.5 text-xs text-co-text-muted">{group.note}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.niches.map((n) => (
                      <span
                        key={n}
                        className="inline-flex items-center rounded-full border border-co-border bg-co-surface px-2.5 py-0.5 text-xs text-co-text-secondary"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-grid-sm opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-co-accent/8 blur-[100px]" />

          <div className="relative rounded-2xl border border-co-border bg-co-surface p-10 md:p-16 text-center max-w-3xl mx-auto">
            <SectionLabel className="justify-center">Free Demo</SectionLabel>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight">
              See What a Niche-Built Website Looks Like for Your Business
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              We&apos;ll build a live demo of your new website — built for your specific service type and market — so you can see exactly what it looks like before committing to anything.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Request Your Free Demo
              </Button>
              <Button href="/locations" variant="outline" size="lg">
                Find Your City
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-co-text-muted">
              <span>No upfront payment required</span>
              <span>Response within 24 hours</span>
              <span>14-day delivery</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
