import type { Metadata } from "next"
import { SeoDallasContent } from "./_seo_services_dallas_content"

export const metadata: Metadata = {
  title: "SEO Services Dallas, TX | Local SEO for Dallas Businesses",
  description:
    "ClevOps helps Dallas businesses improve local search visibility, Google rankings, map presence, and lead generation with SEO strategies built for modern search and AI discovery.",
  keywords: [
    "seo services dallas",
    "dallas seo",
    "local seo dallas",
    "seo company dallas",
    "seo agency dallas",
    "dallas local seo services",
    "seo for contractors dallas",
    "seo for local businesses dallas",
    "dallas business seo",
    "google maps seo dallas",
    "local search optimization dallas",
    "dallas seo consultant",
  ],
  openGraph: {
    title: "SEO Services Dallas, TX | Local SEO for Dallas Businesses",
    description:
      "ClevOps helps Dallas businesses improve local search visibility, Google rankings, map presence, and lead generation with SEO strategies built for modern search and AI discovery.",
    type: "website",
    url: "https://clevops.co/seo-services-dallas",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services Dallas, TX | Local SEO for Dallas Businesses",
    description:
      "ClevOps helps Dallas businesses rank higher, get more calls, and build local search authority in the DFW market.",
  },
  alternates: {
    canonical: "https://clevops.co/seo-services-dallas",
  },
}

export default function SeoDallasPage() {
  return <SeoDallasContent />
}
