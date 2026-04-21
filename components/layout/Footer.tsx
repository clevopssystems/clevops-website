import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/config";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Website Design", href: "/services#websites" },
    { label: "Lead Systems", href: "/services#lead-systems" },
    { label: "Automation", href: "/services#automation" },
    { label: "Local SEO", href: "/services#seo" },
    { label: "Growth Support", href: "/services#growth" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-co-bg border-t border-co-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-co-border-hover to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="w-fit group block">
              <Logo size="md" />
            </Link>

            <p className="text-co-text-secondary text-sm leading-relaxed max-w-sm">
              Premium digital growth systems for service businesses. We build
              websites that convert, systems that capture leads, and presence
              that earns trust.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-co-text-secondary hover:text-co-text text-sm transition-colors duration-200"
              >
                <Mail size={14} />
                {SITE_CONFIG.email}
              </a>
              {SITE_CONFIG.phone && (
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 text-co-text-secondary hover:text-co-text text-sm transition-colors duration-200"
                >
                  <Mail size={14} />
                  {SITE_CONFIG.phoneDisplay ?? SITE_CONFIG.phone}
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-co-text-muted">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-co-text-secondary hover:text-co-text transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={11}
                        className="opacity-0 group-hover:opacity-60 transition-opacity duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-co-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-co-text-muted text-xs">
            © {year} ClevOps. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-co-text-muted hover:text-co-text-secondary text-xs transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-co-text-muted hover:text-co-text-secondary text-xs transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-co-text-muted text-xs">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
