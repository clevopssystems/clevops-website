import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' required: Next.js injects inline hydration scripts; no nonce middleware in use
  // 'unsafe-eval' added in dev only: React dev mode uses eval() for better error messages
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://challenges.cloudflare.com`,
  // 'unsafe-inline' required: Framer Motion and Tailwind generate inline styles
  "style-src 'self' 'unsafe-inline'",
  // next/font/google self-hosts fonts at build time — no external font CDN needed
  "font-src 'self'",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Prevent clickjacking — redundant with frame-ancestors but kept for older browser compat
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Control referrer information sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features not used by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Force HTTPS for 2 years, include subdomains, opt into preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
