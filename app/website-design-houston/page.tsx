import type { Metadata } from "next"
import { WebsiteDesignHoustonContent } from "./_website_design_houston_content"

export const metadata: Metadata = {
  title: "Website Design Houston, TX | High-Converting Websites for Local Businesses",
  description:
    "ClevOps builds high-converting websites for Houston businesses that need more calls, leads, bookings, and local search visibility. Premium web design built for SEO, speed, and conversions.",
  keywords: [
    "website design houston",
    "web design houston",
    "houston web design agency",
    "website designer houston",
    "small business website design houston",
    "contractor website design houston",
    "local business websites houston",
    "high-converting websites houston",
    "houston business website company",
    "web development houston businesses",
    "houston web design company",
    "houston local seo website",
  ],
  openGraph: {
    title: "Website Design Houston, TX | High-Converting Websites for Local Businesses",
    description:
      "ClevOps builds high-converting websites for Houston businesses that need more calls, leads, bookings, and local search visibility. Premium web design built for SEO, speed, and conversions.",
    type: "website",
    url: "https://www.clevops.co/website-design-houston",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Houston, TX | High-Converting Websites for Local Businesses",
    description:
      "ClevOps builds high-converting websites for Houston businesses. Premium web design built for SEO, speed, and conversions.",
  },
  alternates: {
    canonical: "https://www.clevops.co/website-design-houston",
  },
}

export default function WebsiteDesignHoustonPage() {
  return <WebsiteDesignHoustonContent />
}
