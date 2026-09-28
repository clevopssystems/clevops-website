import { ProjectLink } from "./project-link";

/**
 * The /our-system opening. Deliberately not the homepage hero composition:
 * the copy is a single left-aligned column and the system visual runs the full
 * width of the container beneath it, as an overview of the six stages the rest
 * of the page then explains one at a time.
 */
export const spine = [
  { name: "Traffic", role: "Demand" },
  { name: "Capture", role: "Enquiry" },
  { name: "Qualify", role: "Fit" },
  { name: "Follow Up", role: "Response" },
  { name: "Book", role: "Appointment" },
  { name: "Track", role: "Pipeline" },
];

export function SystemPageHero() {
  return (
    <section className="os-hero" aria-labelledby="os-hero-heading">
      <div className="container">
        <div className="os-hero-copy">
          <p className="eyebrow">The ClevOps System</p>
          <h1 id="os-hero-heading">
            From first click to qualified booked conversation.
          </h1>
          <p className="os-hero-description">
            ClevOps connects traffic, conversion, qualification, follow-up and
            booking into one system, so leads do not disappear between an
            enquiry and a sales conversation.
          </p>
          <div className="os-hero-actions">
            <ProjectLink source="hero" />
            <a className="button button-secondary" href="#the-system">
              See the System
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 5v14m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <figure className="os-spine" aria-labelledby="os-spine-caption">
          <figcaption className="os-spine-caption" id="os-spine-caption">
            The path a lead travels
          </figcaption>
          <ol className="os-spine-track" role="list">
            {spine.map((stage, index) => (
              <li className="os-spine-stage" key={stage.name}>
                <span className="os-spine-line" aria-hidden="true" />
                <span className="os-spine-node" aria-hidden="true" />
                <span className="os-spine-index">0{index + 1}</span>
                <span className="os-spine-name">{stage.name}</span>
                <span className="os-spine-role">{stage.role}</span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}
