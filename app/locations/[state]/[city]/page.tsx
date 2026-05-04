import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CityPageLayout, type NearbyLocation } from "@/components/seo/CityPageLayout"
import { locations } from "@/data/locations"

export function generateStaticParams() {
  return locations.map((loc) => ({
    state: loc.stateSlug,
    city: loc.slug,
  }))
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

  return {
    title: `Website Design for Service Businesses in ${cityData.city}, ${cityData.state}`,
    description: `ClevOps builds high-converting websites for local service businesses in ${cityData.city}. ${cityData.businessAngle.slice(0, 110)}`,
    openGraph: {
      title: `Website Design for Local Businesses in ${cityData.city}, ${cityData.state} | ClevOps`,
      description: `Premium website design for ${cityData.city} service businesses — cleaning, HVAC, landscaping, contractors, and more. 14-day delivery from $999.`,
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

  const nearbyLocations: NearbyLocation[] = cityData.nearbyCities
    .map((name) => locations.find((loc) => loc.city === name))
    .filter((loc): loc is (typeof locations)[number] => loc !== undefined)
    .map((loc) => ({ city: loc.city, stateSlug: loc.stateSlug, slug: loc.slug }))

  return <CityPageLayout data={cityData} nearbyLocations={nearbyLocations} />
}
