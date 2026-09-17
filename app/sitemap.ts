import { MetadataRoute } from 'next'

const BASE_URL = 'https://clevops.co'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE_URL, lastModified: new Date() }]
}
