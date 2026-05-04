import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { states } from "@/data/states"
import { locations } from "@/data/locations"

export const metadata: Metadata = {
  title: "Website Design for Service Businesses — All US Locations",
  description:
    "ClevOps builds high-converting websites for local service businesses across the USA. Browse by state to see local market context, city pages, and pricing.",
}

export default function LocationsHubPage() {
  const cityCountByState = locations.reduce<Record<string, number>>((acc, loc) => {
    acc[loc.stateSlug] = (acc[loc.stateSlug] ?? 0) + 1
    return acc
  }, {})

  return (
    <main className="bg-co-bg text-co-text overflow-hidden">

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-co-border">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-co-accent/8 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <SectionLabel>All US Locations</SectionLabel>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Website Design for{" "}
            <span className="text-co-accent">Service Businesses</span>{" "}
            Across the USA
          </h1>

          <p className="mt-6 text-lg md:text-xl text-co-text-secondary leading-relaxed max-w-2xl">
            We build conversion-focused websites for local service businesses in every major US market. Select your state to see city-level coverage, local market context, and what we build in your area.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
            <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
              Get Your Free Demo
            </Button>
            <Button href="/website-design" variant="outline" size="lg">
              Browse by Service
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-co-text-muted">
            <span>{states.length} priority states</span>
            <span>{locations.length} cities covered</span>
            <span>14-day delivery</span>
          </div>
        </div>
      </section>

      {/* States grid */}
      <section className="py-20 md:py-28 border-b border-co-border bg-co-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Browse by State</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Priority Markets
            </h2>
            <p className="mt-4 text-co-text-secondary leading-relaxed">
              Each state page includes local market context, city-level pages, and industry-specific information for service businesses in that market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {states.map((state) => {
              const cityCount = cityCountByState[state.slug] ?? 0
              return (
                <Link
                  key={state.slug}
                  href={`/locations/${state.slug}`}
                  className="group rounded-xl border border-co-border bg-co-card p-6 hover:border-co-border-hover hover:bg-co-card-hover transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-semibold text-co-text group-hover:text-co-accent transition-colors duration-200">
                        {state.name}
                      </p>
                      <p className="text-xs text-co-text-muted mt-0.5">
                        {cityCount} {cityCount === 1 ? "city" : "cities"} &middot; {state.abbreviation}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-co-text-muted group-hover:text-co-accent group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                  </div>
                  <p className="text-sm text-co-text-muted leading-relaxed line-clamp-2">
                    {state.marketAngle}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All cities quick-nav */}
      <section className="py-20 md:py-28 border-b border-co-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>All Cities</SectionLabel>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
              Find Your City
            </h2>
            <p className="mt-4 text-co-text-secondary leading-relaxed">
              Every city page includes local market context, industry-specific information, FAQ answers written for that market, and links to nearby cities.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {locations.map((loc) => (
              <Link
                key={`${loc.stateSlug}-${loc.slug}`}
                href={`/locations/${loc.stateSlug}/${loc.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-co-border bg-co-card px-3.5 py-2 text-sm text-co-text-secondary hover:border-co-border-hover hover:text-co-text hover:bg-co-card-hover transition-all duration-200"
              >
                {loc.city}
                <span className="text-co-text-muted text-xs">{loc.state === "Washington DC" ? "DC" : loc.stateSlug === "washington-dc" ? "DC" : loc.state.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}</span>
              </Link>
            ))}
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
              Not Sure Where to Start?
            </h2>

            <p className="mt-5 text-co-text-secondary leading-relaxed max-w-xl mx-auto">
              Tell us your city and what you do — we&apos;ll build a live demo of your new website so you can see exactly what it looks like before committing to anything.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="shadow-glow-md">
                Request Your Free Demo
              </Button>
              <Button href="/website-design" variant="outline" size="lg">
                Browse Services
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
