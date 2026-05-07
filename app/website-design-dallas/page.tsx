import type { Metadata } from "next"
import { WebsiteDesignDallasContent } from "./_website_design_dallas_content"

export const metadata: Metadata = {
  title: "Website Design Dallas, TX | High-Converting Websites for Local Businesses",
  description:
    "ClevOps builds high-converting websites for Dallas businesses that need more calls, leads, bookings, and local search visibility. Premium web design built for SEO, speed, and conversions.",
  keywords: [
    "website design dallas",
    "web design dallas",
    "dallas web design agency",
    "website designer dallas",
    "small business website design dallas",
    "business website design dallas",
    "contractor website design dallas",
    "local business web design dallas",
    "high converting websites dallas",
    "dallas website redesign",
    "web design dallas tx",
    "dallas local seo website",
  ],
  openGraph: {
    title: "Website Design Dallas, TX | High-Converting Websites for Local Businesses",
    description:
      "ClevOps builds high-converting websites for Dallas businesses that need more calls, leads, bookings, and local search visibility. Premium web design built for SEO, speed, and conversions.",
    type: "website",
    url: "https://clevops.co/website-design-dallas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Dallas, TX | High-Converting Websites for Local Businesses",
    description:
      "ClevOps builds high-converting websites for Dallas businesses. Premium web design built for SEO, speed, and conversions.",
  },
  alternates: {
    canonical: "https://clevops.co/website-design-dallas",
  },
}

export default function WebsiteDesignDallasPage() {
  return <WebsiteDesignDallasContent />
}
