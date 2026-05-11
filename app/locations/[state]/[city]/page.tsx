import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CityPageLayout, type NearbyLocation } from "@/components/seo/CityPageLayout"
import { locations } from "@/data/locations"

const BASE_URL = "https://clevops.co"

export function generateStaticParams() {
  return locations.map((loc) => ({
    state: loc.stateSlug,
    city: loc.slug,
  }))
}

function stateAbbr(state: string): string {
  if (state === "Washington DC") return "DC"
  const words = state.split(" ")
  return words.map((w) => w[0]).join("").slice(0, 2).toUpperCase()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params
  const cityData = locations.find(
    (loc) => loc.stateSlug === stateSlug && loc.slug === citySlug
  )
  if (!cityData) return {}

  const abbr = stateAbbr(cityData.state)
  const title = `Website Design for Local Businesses in ${cityData.city}, ${abbr} | ClevOps`
  const description = `Conversion-focused website design for ${cityData.city} service businesses. Built for local SEO, lead capture, mobile speed, and higher-quality customer inquiries. 14-day delivery from $999.`

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/locations/${cityData.stateSlug}/${cityData.slug}`,
    },
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>
}) {
  const { state: stateSlug, city: citySlug } = await params
  const cityData = locations.find(
    (loc) => loc.stateSlug === stateSlug && loc.slug === citySlug
  )
  if (!cityData) notFound()

  // Explicit nearby cities that have location pages
  const explicitNearby: NearbyLocation[] = cityData.nearbyCities
    .map((name) => locations.find((loc) => loc.city === name))
    .filter((loc): loc is (typeof locations)[number] => loc !== undefined)
    .map((loc) => ({ city: loc.city, stateSlug: loc.stateSlug, slug: loc.slug }))

  // Fill with other same-state cities if nearby list is sparse
  const sameStateFill: NearbyLocation[] = locations
    .filter((loc) => loc.stateSlug === stateSlug && loc.slug !== citySlug)
    .slice(0, 4)
    .map((loc) => ({ city: loc.city, stateSlug: loc.stateSlug, slug: loc.slug }))

  const seen = new Set(explicitNearby.map((l) => l.slug))
  const nearbyLocations: NearbyLocation[] = [
    ...explicitNearby,
    ...sameStateFill.filter((l) => !seen.has(l.slug)),
  ]

  return <CityPageLayout data={cityData} nearbyLocations={nearbyLocations} />
}
