import type { Metadata } from "next"
import { WebsiteDesignAustinContent } from "./_website_design_austin_content"

export const metadata: Metadata = {
  title: "Website Design Austin, TX | High-Converting Websites for Modern Businesses",
  description:
    "ClevOps builds premium, conversion-focused websites for Austin businesses that need more leads, stronger visibility, and modern digital positioning built for SEO, speed, and AI search.",
  keywords: [
    "website design austin",
    "web design austin",
    "austin web design agency",
    "website designer austin",
    "startup website design austin",
    "small business website design austin",
    "local business websites austin",
    "high-converting websites austin",
    "austin business website company",
    "web development austin businesses",
    "austin web design company",
    "austin local seo website",
  ],
  openGraph: {
    title: "Website Design Austin, TX | High-Converting Websites for Modern Businesses",
    description:
      "ClevOps builds premium, conversion-focused websites for Austin businesses that need more leads, stronger visibility, and modern digital positioning built for SEO, speed, and AI search.",
    type: "website",
    url: "https://www.clevops.co/website-design-austin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Austin, TX | High-Converting Websites for Modern Businesses",
    description:
      "ClevOps builds premium, conversion-focused websites for Austin businesses. Modern web design built for SEO, speed, and conversions.",
  },
  alternates: {
    canonical: "https://www.clevops.co/website-design-austin",
  },
}

export default function WebsiteDesignAustinPage() {
  return <WebsiteDesignAustinContent />
}
