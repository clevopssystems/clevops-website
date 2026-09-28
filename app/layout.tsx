import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clevops.co"),
  title: "ClevOps | Lead Generation & Conversion Systems",
  description:
    "We build websites, run Google and Meta campaigns, and create automated lead systems that capture, qualify, follow up with and book your prospects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ClevOps | Lead Generation & Conversion Systems",
    description:
      "Turn more traffic into qualified booked appointments with connected websites, campaigns, and automated lead systems.",
    url: "/",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
  // No social image exists yet, so the small card. Title and description are
  // inherited from each page's Open Graph metadata.
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Deliberately minimal: only facts the site itself states. No logo, address,
// social profiles, ratings or reviews until each one is real and verified.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://clevops.co/#organization",
      name: "ClevOps",
      url: "https://clevops.co",
      description: "Websites, search, paid media and lead systems, connected.",
    },
    {
      "@type": "WebSite",
      "@id": "https://clevops.co/#website",
      name: "ClevOps",
      url: "https://clevops.co",
      publisher: { "@id": "https://clevops.co/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
