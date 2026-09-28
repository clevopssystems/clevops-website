import { ProjectLink } from "./project-link";

/**
 * Phase 11: the /process opening, and none of the four heroes already on the
 * site. The oversized statement holds the left column and a compact rail of
 * the six stages sits beside it, grouped into the three phases of an
 * engagement: what happens before the build, during it, and after launch.
 * The grouping is the point, it is what a visitor is actually asking about.
 */
export const stages = [
  { number: "01", name: "Discovery", href: "#discovery", phase: "Before we build" },
  { number: "02", name: "Audit & Strategy", href: "#audit-strategy" },
  { number: "03", name: "Build", href: "#build", phase: "Building" },
  { number: "04", name: "Connect & Test", href: "#connect-test" },
  { number: "05", name: "Launch", href: "#launch", phase: "After launch" },
  { number: "06", name: "Optimize & Scale", href: "#optimize" },
];

export function ProcessPageHero() {
  return (
    <section className="pr-hero" aria-labelledby="pr-hero-heading">
      <div className="container pr-hero-grid">
        <div className="pr-hero-copy">
          <p className="eyebrow">The ClevOps Process</p>
          <h1 id="pr-hero-heading">
            A clear process from first conversation to launch.
          </h1>
          <p className="pr-hero-description">
            We keep strategy, execution, tracking and optimization connected so
            you always know what is being built, why it matters and what
            happens next.
          </p>
          <div className="pr-hero-actions">
            <ProjectLink source="hero" />
            <a className="button button-secondary" href="#the-process">
              See the Process
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="pr-hero-rail" aria-labelledby="pr-hero-rail-label">
          <p className="pr-hero-rail-label" id="pr-hero-rail-label">Six stages</p>
          <ol className="pr-hero-stages">
            {stages.map((stage) => (
              <li
                className="pr-hero-stage"
                key={stage.number}
                data-phase={stage.phase ? "" : undefined}
              >
                <span className="pr-hero-line" aria-hidden="true" />
                {stage.phase && <span className="pr-hero-phase">{stage.phase}</span>}
                <span className="pr-hero-node" aria-hidden="true" />
                <a className="pr-hero-link" href={stage.href}>
                  <span className="pr-hero-number">{stage.number}</span>
                  <span className="pr-hero-name">{stage.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
