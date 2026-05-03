import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://clevops.co',
      lastModified: new Date(),
    },
    {
      url: 'https://clevops.co/services',
      lastModified: new Date(),
    },
    {
      url: 'https://clevops.co/work',
      lastModified: new Date(),
    },
    {
      url: 'https://clevops.co/process',
      lastModified: new Date(),
    },
    {
      url: 'https://clevops.co/about',
      lastModified: new Date(),
    },
  ]
}
