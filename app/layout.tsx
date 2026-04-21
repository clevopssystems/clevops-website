import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ClevOps — Premium Growth Systems for Service Businesses",
    template: "%s | ClevOps",
  },
  description:
    "ClevOps builds high-converting websites, lead capture systems, and digital growth infrastructure for service businesses. Get more leads, more trust, and more booked jobs.",
  keywords: [
    "service business website",
    "lead generation website",
    "cleaning company website",
    "local SEO",
    "website design",
    "lead capture system",
    "business automation",
    "conversion-focused design",
  ],
  authors: [{ name: "ClevOps" }],
  creator: "ClevOps",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clevops.com",
    siteName: "ClevOps",
    title: "ClevOps — Premium Growth Systems for Service Businesses",
    description:
      "High-converting websites, lead systems, and automation for service businesses that want to look premium and grow faster.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClevOps — Premium Growth Systems for Service Businesses",
    description:
      "High-converting websites, lead systems, and automation for service businesses that want to look premium and grow faster.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-co-bg text-co-text antialiased" suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
