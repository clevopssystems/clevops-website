import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NichePageLayout } from "@/components/seo/NichePageLayout"
import { niches } from "@/data/niches"
import { locations } from "@/data/locations"

const nicheToIndustryLabel: Record<string, string> = {
  "cleaning-business": "cleaning companies",
  "auto-detailing": "auto detailers",
  "barbershop": "barbershops",
  "contractors": "contractors",
  "roofing": "roofing contractors",
  "hvac": "HVAC companies",
  "landscaping": "landscapers",
  "plumbing": "plumbers",
}

export function generateStaticParams() {
  return niches.map((n) => ({ niche: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>
}): Promise<Metadata> {
  const { niche: nicheSlug } = await params
  const nicheData = niches.find((n) => n.slug === nicheSlug)
  if (!nicheData) return {}

  return {
    title: `${nicheData.headline} | ClevOps`,
    description: `${nicheData.subheadline} ClevOps builds conversion-focused ${nicheData.name.toLowerCase()} websites in 14 days from $999.`,
    openGraph: {
      title: `${nicheData.headline} | ClevOps`,
      description: `${nicheData.subheadline} ${nicheData.keyBenefit.slice(0, 80)}`,
    },
  }
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ niche: string }>
}) {
  const { niche: nicheSlug } = await params
  const nicheData = niches.find((n) => n.slug === nicheSlug)
  if (!nicheData) notFound()

  const industryLabel = nicheToIndustryLabel[nicheSlug]
  const featuredCities = industryLabel
    ? locations
        .filter((loc) => loc.topIndustries.includes(industryLabel))
        .slice(0, 8)
    : []

  return <NichePageLayout data={nicheData} featuredCities={featuredCities} />
}
