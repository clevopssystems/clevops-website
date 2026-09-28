import Link from "next/link";

/**
 * Section 3: the flagship, and the first of the two dark scenes this page
 * allows itself. It summarises the offer in the established
 * Traffic → Capture → Qualify → Follow Up → Book → Track language and then
 * sends the reader to /our-system rather than repeating that page here.
 */
export const stages = [
  { name: "Traffic", detail: "Search, paid media and your website bring the right people in." },
  { name: "Capture", detail: "Forms, calls and messages arrive in one place instead of four." },
  { name: "Qualify", detail: "Fit, location and urgency are established before anyone calls back." },
  { name: "Follow Up", detail: "Automated SMS and email keep the conversation alive." },
  { name: "Book", detail: "The prospect picks a time against your real availability." },
  { name: "Track", detail: "Every enquiry stays visible from first contact to won or lost." },
];

export const inside = [
  {
    term: "Demand and destination",
    detail:
      "Campaigns or organic visibility bringing traffic to a landing page or funnel written for that specific offer, not to a generic homepage.",
  },
  {
    term: "Capture and qualification",
    detail:
      "Forms, call tracking and chat feeding one CRM, with the questions that separate a good job from a bad one asked before a person spends time on it.",
  },
  {
    term: "Follow-up and booking",
    detail:
      "Automated SMS and email sequences built around your sales cycle, ending at a calendar the prospect can book directly into.",
  },
  {
    term: "Pipeline and visibility",
    detail:
      "Every enquiry on one board with its source and stage, so you can see where leads come from and where they stall.",
  },
];

export function ServicesFlagship() {
  return (
    <section className="sv-flagship" id="lead-generation-systems" aria-labelledby="sv-flagship-heading" tabIndex={-1}>
      <div className="container sv-flagship-inner">
        <span className="sv-flagship-thread" aria-hidden="true" />

        <div className="sv-flagship-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>01</span> Lead Generation Systems</p>
          <h2 id="sv-flagship-heading">
            More than ads. <span>A complete lead-to-booking system.</span>
          </h2>
          <p className="sv-flagship-description">
            Most businesses do not lose leads because they cannot generate
            attention. They lose them in the gap between an enquiry arriving and
            somebody useful responding. This is the service that closes that gap.
          </p>
        </div>

        <figure className="sv-track" aria-labelledby="sv-track-caption">
          <figcaption className="sv-track-caption" id="sv-track-caption">
            The path a lead travels
          </figcaption>
          <ol className="sv-track-list" role="list">
            {stages.map((stage, position) => (
              <li className="sv-track-stage" data-reveal="" key={stage.name}>
                <span className="sv-track-line" aria-hidden="true" />
                <span className="sv-track-node" aria-hidden="true" />
                <span className="sv-track-index">0{position + 1}</span>
                <span className="sv-track-name">{stage.name}</span>
                <span className="sv-track-detail">{stage.detail}</span>
              </li>
            ))}
          </ol>
        </figure>

        <div className="sv-flagship-body">
          <p className="sv-dark-label phase-reveal" data-reveal="">What the build includes</p>
          <dl className="sv-flagship-list">
            {inside.map((item) => (
              <div className="sv-flagship-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="sv-flagship-close phase-reveal" data-reveal="">
          <p>
            Automation, CRM workflows, qualification, follow-up, booking and
            pipeline tracking all live here rather than being sold separately,
            because none of them works well on its own.
          </p>
          <Link className="button sv-ghost" href="/our-system">
            Explore the ClevOps System
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
