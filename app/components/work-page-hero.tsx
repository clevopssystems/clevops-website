import { ProjectLink } from "./project-link";

/**
 * Phase 10: the /work opening, and deliberately none of the three heroes
 * already on the site. It is a masthead: one oversized statement across the
 * full container, the position underneath it, then a ruled ledger carrying the
 * selected build's metadata. The build plate itself opens the next scene, so
 * the work is shown once rather than twice.
 *
 * The ledger describes the engagement, not the client: industry, scope and
 * project type are true of the build and identify nobody.
 */
export const ledger = [
  { label: "Industry", value: "Local Services" },
  {
    label: "Scope",
    value: "Website Development · SEO Foundations · Conversion Architecture",
  },
  { label: "Project type", value: "Client Implementation" },
];

export function WorkPageHero() {
  return (
    <section className="wk-hero" aria-labelledby="wk-hero-heading">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h1 id="wk-hero-heading">
          Work built around <span>real business problems.</span>
        </h1>

        <div className="wk-hero-lead">
          <p className="wk-hero-description">
            We design websites and growth systems around how customers
            discover, evaluate and contact a business, not around what
            looks impressive in a portfolio.
          </p>
          <div className="wk-hero-actions">
            <a className="button button-secondary" href="#selected-build">
              View Selected Build
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <ProjectLink source="hero" />
          </div>
        </div>

        <dl className="wk-hero-ledger">
          {ledger.map((entry) => (
            <div className="wk-ledger-item" key={entry.label}>
              <dt>{entry.label}</dt>
              <dd>{entry.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
