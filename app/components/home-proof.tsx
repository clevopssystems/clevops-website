import type { ReactNode } from "react";
import { Ban, Check, Ruler } from "./home-icons";

/**
 * Proof, laid out where a reviews block would usually sit, and saying
 * plainly that there are no reviews to show yet. The summary bar carries the
 * engagement's real facts instead of ratings. When a real client review
 * arrives, it replaces the reserve line with the quote, the person's name,
 * their role and the business, never anything anonymous.
 */
const facts = [
  { value: "Delivered", label: "Status" },
  { value: "Local Services", label: "Industry" },
  { value: "Client Implementation", label: "Engagement" },
];

const standards: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "Live, not proposed",
    icon: <Check />,
    body:
      "The architecture, service pages, local SEO foundations and conversion paths in the build above are delivered work on a live site, not a concept or a proposal.",
  },
  {
    title: "No borrowed credibility",
    icon: <Ban />,
    body:
      "You will not find logo walls, review widgets or recognisable brands here. Only work we have actually delivered appears on this site.",
  },
  {
    title: "Numbers come last",
    icon: <Ruler />,
    body:
      "Leads, rankings, traffic and revenue get published once they are tracked and attributed to the work, not before.",
  },
];

export function HomeProof() {
  return (
    <section className="hm-section hm-proof" id="proof" aria-labelledby="hm-proof-heading" tabIndex={-1}>
      <span className="hm-proof-field" aria-hidden="true" />
      <div className="container">
        <div className="hm-proof-head phase-reveal" data-reveal="">
          <p className="hm-badge hm-badge-light">
            <span className="hm-badge-dot" aria-hidden="true" />
            Publishing standard
            <span className="hm-badge-rule" aria-hidden="true" />
            <span className="hm-badge-soft">Verified work only</span>
          </p>
          <h2 id="hm-proof-heading">
            Proof matters more than <span className="hm-dim">promises.</span>
          </h2>
          <p className="hm-head-sub">
            Agency websites are usually written in adjectives. This one is written
            from work that exists: a delivered implementation, described by
            what was actually built.
          </p>
        </div>

        <dl className="hm-facts phase-reveal" data-reveal="">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="hm-proof-grid">
          {standards.map((item) => (
            <section className="hm-proof-card phase-reveal" data-reveal="" key={item.title}>
              <div className="hm-proof-card-head">
                <span className="hm-proof-icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="hm-proof-meta">How we handle proof</p>
                </div>
              </div>
              <p>{item.body}</p>
            </section>
          ))}

          <figure className="hm-statement phase-reveal" data-reveal="">
            <span className="hm-statement-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              <p>
                We would rather show one build we can stand behind than a wall of
                logos we have never touched.
              </p>
            </blockquote>
            <figcaption>
              <cite>ClevOps</cite> &middot; Publishing standard
            </figcaption>
          </figure>
        </div>

        <p className="hm-reserve phase-reveal" data-reveal="">
          <span aria-hidden="true">&ldquo;</span>
          Client review: published here once it is written and approved by
          the client, under their own name.
        </p>
      </div>
    </section>
  );
}
