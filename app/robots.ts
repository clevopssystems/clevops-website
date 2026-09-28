import type { MetadataRoute } from "next";

// Every public page is crawlable. /api/ holds only the enquiry endpoint, which
// answers POST and has nothing to index.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://clevops.co/sitemap.xml",
    host: "https://clevops.co",
  };
}
