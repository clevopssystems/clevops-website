import type { Metadata } from "next"
import { SeoAustinContent } from "./_seo_services_austin_content"

export const metadata: Metadata = {
  title: "SEO Services Austin, TX | Local SEO for Modern Businesses",
  description:
    "ClevOps helps Austin businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
  keywords: [
    "seo services austin",
    "austin seo",
    "seo company austin",
    "seo agency austin",
    "local seo austin",
    "austin local seo services",
    "seo for startups austin",
    "seo for local businesses austin",
    "google maps seo austin",
    "austin business seo",
    "search engine optimization austin",
  ],
  openGraph: {
    title: "SEO Services Austin, TX | Local SEO for Modern Businesses",
    description:
      "ClevOps helps Austin businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
    type: "website",
    url: "https://www.clevops.co/seo-services-austin",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Austin, TX | Local SEO for Modern Businesses",
    description:
      "ClevOps helps Austin businesses rank higher, attract qualified leads, and build local search authority in one of the most growth-focused markets in the US.",
  },
  alternates: {
    canonical: "https://www.clevops.co/seo-services-austin",
  },
}

export default function SeoAustinPage() {
  return <SeoAustinContent />
}
