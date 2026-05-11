import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { StatePageLayout } from "@/components/seo/StatePageLayout"
import { states } from "@/data/states"
import { locations } from "@/data/locations"

const BASE_URL = "https://clevops.co"

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state: stateSlug } = await params
  const stateData = states.find((s) => s.slug === stateSlug)
  if (!stateData) return {}

  const title = `Website Design for Service Businesses in ${stateData.name} | ClevOps`
  const description = `Conversion-focused website design for ${stateData.name} service businesses. City-level local SEO, lead capture, and mobile-first performance. 14-day delivery from $999.`

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/locations/${stateData.slug}`,
    },
    openGraph: { title, description },
    twitter: { card: "summary_large_image", title, description },
  }
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state: stateSlug } = await params
  const stateData = states.find((s) => s.slug === stateSlug)
  if (!stateData) notFound()

  const cities = locations.filter((loc) => loc.stateSlug === stateSlug)

  return <StatePageLayout data={stateData} cities={cities} />
}
