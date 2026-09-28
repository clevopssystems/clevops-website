import Link from "next/link";
import { ProjectLink } from "./project-link";

/**
 * Phase 12: the /about opening, and none of the five heroes already on the
 * site. The statement is the composition: a two-tier headline where the
 * premise is dimmed and the conclusion carries full weight, a ruled row
 * holding the supporting copy against the actions, and a short principles
 * rail that names what the page is about to argue.
 */
export const principles = [
  "Strategy before tools",
  "Conversion over clicks",
  "Less friction, not more",
  "Proof over claims",
];

export function AboutPageHero() {
  return (
    <section className="ab-hero" aria-labelledby="ab-hero-heading">
      <div className="container">
        <p className="eyebrow">About ClevOps</p>

        <h1 id="ab-hero-heading">
          {/* The premise and the conclusion are one sentence, so the space
              between them is explicit: the block only breaks the line. */}
          <span className="ab-hero-premise">
            We built ClevOps around a simple idea:
          </span>{" "}
          marketing works better when the pieces work together.
        </h1>

        <div className="ab-hero-row">
          <p className="ab-hero-description">
            Websites, search, paid media, lead capture and follow-up are often
            treated as separate services. We believe they should operate as one
            connected system.
          </p>
          <div className="ab-hero-actions">
            <ProjectLink source="hero" />
            <Link className="button button-secondary" href="/our-system">
              See How We Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <ul className="ab-hero-principles" role="list">
          {principles.map((principle) => (
            <li className="ab-hero-principle" key={principle}>
              <span className="ab-hero-node" aria-hidden="true" />
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
