import type { Metadata } from "next"
import { DallasPageContent } from "./_dallas_content"

export const metadata: Metadata = {
  title: "Website Design for Dallas Service Businesses | ClevOps",
  description:
    "ClevOps builds high-converting websites for Dallas service businesses — HVAC, cleaning companies, roofers, contractors, plumbers, and more. Local SEO built in. 14-day delivery from $999.",
  keywords: [
    "website design dallas",
    "web design dallas tx",
    "dallas web design agency",
    "small business website design dallas",
    "local business websites dallas",
    "dallas local seo",
    "high converting websites dallas",
    "dallas website redesign",
    "contractor websites dallas",
    "service business website dallas",
  ],
  openGraph: {
    title: "Website Design for Dallas Service Businesses | ClevOps",
    description:
      "ClevOps builds high-converting websites for Dallas service businesses — HVAC, cleaning companies, roofers, contractors, plumbers, and more. Local SEO built in. 14-day delivery from $999.",
    type: "website",
    url: "https://clevops.co/locations/texas/dallas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design for Dallas Service Businesses | ClevOps",
    description:
      "ClevOps builds high-converting websites for Dallas service businesses. Local SEO built in. 14-day delivery from $999.",
  },
  alternates: {
    canonical: "https://clevops.co/locations/texas/dallas",
  },
}

export default function DallasPage() {
  return <DallasPageContent />
}
