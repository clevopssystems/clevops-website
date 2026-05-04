import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { StatePageLayout } from "@/components/seo/StatePageLayout"
import { states } from "@/data/states"
import { locations } from "@/data/locations"

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

  return {
    title: `Website Design for Service Businesses in ${stateData.name}`,
    description: `ClevOps builds high-converting websites for local service businesses across ${stateData.name}. ${stateData.marketAngle.slice(0, 100)}`,
    openGraph: {
      title: `Website Design for Service Businesses in ${stateData.name} | ClevOps`,
      description: `High-converting websites for ${stateData.name} service businesses — cleaning, HVAC, landscaping, contractors, and more.`,
    },
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
