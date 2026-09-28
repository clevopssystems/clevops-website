import { MetadataRoute } from 'next'
import { LEGAL_DETAILS } from './components/legal-details'

const BASE_URL = 'https://clevops.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/services`, lastModified: new Date() },
    { url: `${BASE_URL}/services/lead-generation-systems`, lastModified: new Date() },
    { url: `${BASE_URL}/services/website-development`, lastModified: new Date() },
    { url: `${BASE_URL}/services/seo`, lastModified: new Date() },
    { url: `${BASE_URL}/services/google-ads`, lastModified: new Date() },
    { url: `${BASE_URL}/services/meta-ads`, lastModified: new Date() },
    { url: `${BASE_URL}/our-system`, lastModified: new Date() },
    { url: `${BASE_URL}/work`, lastModified: new Date() },
    { url: `${BASE_URL}/process`, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/start-a-project`, lastModified: new Date() },
    // The legal pages change only when their Last updated date does.
    { url: `${BASE_URL}/privacy`, lastModified: new Date(LEGAL_DETAILS.lastUpdated) },
    { url: `${BASE_URL}/terms`, lastModified: new Date(LEGAL_DETAILS.lastUpdated) },
  ]
}
