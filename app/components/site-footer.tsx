import Link from "next/link";
import { ProjectLink } from "./project-link";

/**
 * Phase 7B: complete but minimal. Every link resolves to something that
 * exists, including /privacy and /terms. No contact details are published
 * that are not verified. Links are absolute so the footer resolves the same
 * from every page.
 */
const services = [
  { name: "Lead Generation Systems", href: "/services/lead-generation-systems" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "SEO", href: "/services/seo" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Meta Ads", href: "/services/meta-ads" },
];

const company = [
  { name: "Our System", href: "/our-system" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/start-a-project" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <h2 className="visually-hidden" id="footer-heading">ClevOps site footer</h2>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="wordmark footer-wordmark">ClevOps</span>
            <p className="footer-descriptor">
              Websites, search, paid media and lead systems, connected.
            </p>
          </div>

          <nav className="footer-column" aria-label="Services">
            <h3 className="footer-column-heading">Services</h3>
            <ul>
              {services.map((service) => (
                <li key={service.name}><a href={service.href}>{service.name}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Company">
            <h3 className="footer-column-heading">Company</h3>
            <ul>
              {company.map((item) => (
                <li key={item.name}>
                  {item.href.includes("#")
                    ? <a href={item.href}>{item.name}</a>
                    : <Link href={item.href}>{item.name}</Link>}
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-action">
            <p className="footer-action-copy">Tell us what you&rsquo;re working on.</p>
            <ProjectLink source="footer" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ClevOps</p>
          <p className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
