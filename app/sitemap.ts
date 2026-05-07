import { MetadataRoute } from 'next'
import { locations } from '@/data/locations'
import { states } from '@/data/states'
import { niches } from '@/data/niches'

const BASE_URL = 'https://clevops.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: now },
    { url: `${BASE_URL}/services`, lastModified: now },
    { url: `${BASE_URL}/work`, lastModified: now },
    { url: `${BASE_URL}/process`, lastModified: now },
    { url: `${BASE_URL}/about`, lastModified: now },
  ]

  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/website-design`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/website-design-dallas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  const statePages: MetadataRoute.Sitemap = states.map((state) => ({
    url: `${BASE_URL}/locations/${state.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.stateSlug}/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const nichePages: MetadataRoute.Sitemap = niches.map((niche) => ({
    url: `${BASE_URL}/website-design/${niche.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...corePages,
    ...hubPages,
    ...statePages,
    ...cityPages,
    ...nichePages,
  ]
}
