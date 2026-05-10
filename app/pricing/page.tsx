import type { Metadata } from "next"
import PricingContent from "./_content"

export const metadata: Metadata = {
  title: "Pricing | ClevOps — Website & Growth System Investment",
  description:
    "Transparent, results-focused pricing for local service businesses. ClevOps builds websites and growth systems that generate consistent clients. No fluff. Just infrastructure.",
  keywords: [
    "website pricing",
    "web design pricing",
    "SEO pricing",
    "local business website packages",
    "business growth system pricing",
    "website and SEO services",
    "local business website pricing",
    "business growth systems",
  ],
  openGraph: {
    title: "Pricing | ClevOps",
    description:
      "Transparent pricing for websites and growth systems that generate clients for local service businesses.",
    url: "https://clevops.co/pricing",
    siteName: "ClevOps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | ClevOps",
    description:
      "Transparent pricing for websites and growth systems that generate clients for local service businesses.",
  },
  alternates: {
    canonical: "https://clevops.co/pricing",
  },
}

export default function PricingPage() {
  return <PricingContent />
}
