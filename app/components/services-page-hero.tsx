/**
 * Phase 9: the /services opening. Not the homepage hero and not the
 * /our-system hero: the oversized statement holds the left column and a quiet
 * numbered index sits beside it, so the reader sees the whole offering before
 * scrolling. The index below expands each entry; this one is navigation.
 */
import { ProjectLink } from "./project-link";

export const index = [
  { name: "Lead Generation Systems", href: "#lead-generation-systems" },
  { name: "Website Development", href: "#website-development" },
  { name: "SEO", href: "#seo" },
  { name: "Google Ads", href: "#google-ads" },
  { name: "Meta Ads", href: "#meta-ads" },
];

export function ServicesPageHero() {
  return (
    <section className="sv-hero" aria-labelledby="sv-hero-heading">
      <div className="container sv-hero-grid">
        <div className="sv-hero-copy">
          <p className="eyebrow">ClevOps Services</p>
          <h1 id="sv-hero-heading">
            Everything your growth system needs, connected.
          </h1>
          <p className="sv-hero-description">
            From websites and search to paid media and lead automation, ClevOps
            brings the pieces together around one clear goal: turning attention
            into qualified opportunities.
          </p>
          <div className="sv-hero-actions">
            <ProjectLink source="hero" />
            <a className="button button-secondary" href="#service-index">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="sv-hero-index" aria-labelledby="sv-hero-index-label">
          <p className="sv-hero-index-label" id="sv-hero-index-label">On this page</p>
          <ol className="sv-hero-index-list">
            {index.map((entry, position) => (
              <li className="sv-hero-index-item" key={entry.href}>
                <span className="sv-hero-index-line" aria-hidden="true" />
                <span className="sv-hero-index-node" aria-hidden="true" />
                <a className="sv-hero-index-link" href={entry.href}>
                  <span className="sv-hero-index-number">0{position + 1}</span>
                  <span className="sv-hero-index-name">{entry.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
