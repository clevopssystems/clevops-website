import type { Metadata } from "next"
import { SeoHoustonContent } from "./_seo_services_houston_content"

export const metadata: Metadata = {
  title: "SEO Services Houston, TX | Local SEO for Houston Businesses",
  description:
    "ClevOps helps Houston businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
  keywords: [
    "seo services houston",
    "houston seo",
    "seo company houston",
    "seo agency houston",
    "local seo houston",
    "houston local seo services",
    "seo for contractors houston",
    "google maps seo houston",
    "houston business seo",
    "seo for local businesses houston",
    "houston search engine optimization",
    "local search houston",
  ],
  openGraph: {
    title: "SEO Services Houston, TX | Local SEO for Houston Businesses",
    description:
      "ClevOps helps Houston businesses improve local search visibility, Google rankings, map presence, and lead generation with strategic SEO built for modern search and AI visibility.",
    type: "website",
    url: "https://www.clevops.co/seo-services-houston",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Houston, TX | Local SEO for Houston Businesses",
    description:
      "ClevOps helps Houston businesses rank higher, get more calls, and build local search authority across one of the largest and most competitive metros in the US.",
  },
  alternates: {
    canonical: "https://www.clevops.co/seo-services-houston",
  },
}

export default function SeoHoustonPage() {
  return <SeoHoustonContent />
}
