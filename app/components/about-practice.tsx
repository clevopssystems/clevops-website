import Link from "next/link";

/**
 * Scenes 04 and 05: what we actually do, and who it suits. Both are
 * deliberately compact: /services explains the capabilities properly and this
 * page does not restate it. The fit conditions matter more than the trades,
 * and the trades are named as examples rather than as a list of who we serve.
 */
export const capabilities = [
  {
    name: "Lead Generation Systems",
    note: "Capture, qualification, follow-up, booking and pipeline tracking as one connected flow.",
  },
  {
    name: "Website Development",
    note: "Sites built to be found, understood quickly and acted on, not only to look current.",
  },
  {
    name: "SEO",
    note: "Long-term visibility for the searches your customers actually make.",
  },
  {
    name: "Google & Meta Ads",
    note: "Demand you can turn on, pointed at pages and follow-up that are ready for it.",
  },
];

export const conditions = [
  {
    term: "A customer is worth something meaningful",
    detail: "When a single job carries real value, the cost of losing one justifies building the process properly.",
  },
  {
    term: "There is a clear service area or target market",
    detail: "Knowing who you want and where changes targeting, form logic and what gets disqualified on arrival.",
  },
  {
    term: "Leads matter",
    detail: "The business grows through enquiries rather than through walk-in traffic or shelf space.",
  },
  {
    term: "Follow-up matters",
    detail: "Prospects usually contact more than one company, and the first useful reply shapes the decision.",
  },
  {
    term: "The business wants measurable infrastructure",
    detail: "Not a campaign that runs for a month, but something that keeps working and can be improved.",
  },
];

export const examples = [
  "Service businesses",
  "Local businesses",
  "Contractors",
  "Home services",
  "Cleaning companies",
  "Remodeling",
];

export function AboutCapabilities() {
  return (
    <section className="ab-scene ab-capabilities" id="what-we-do" aria-labelledby="ab-capabilities-heading">
      <div className="container">
        <div className="ab-scene-grid">
          <div className="ab-scene-marker phase-reveal" data-reveal="">
            <p className="scene-label"><span>04</span> What ClevOps does</p>
            <h2 id="ab-capabilities-heading">Four capabilities, one strategy.</h2>
          </div>

          <div className="ab-scene-body">
            <dl className="ab-rows">
              {capabilities.map((capability) => (
                <div className="ab-row" data-reveal="" key={capability.name}>
                  <dt>{capability.name}</dt>
                  <dd>{capability.note}</dd>
                </div>
              ))}
            </dl>

            <div className="ab-scene-close" data-reveal="">
              <p>
                These can work independently, but they are most powerful when
                the strategy connects them.
              </p>
              <Link className="ab-link" href="/services">
                See all services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutFit() {
  return (
    <section className="ab-scene ab-fit" id="who-we-work-with" aria-labelledby="ab-fit-heading">
      <div className="container">
        <div className="ab-scene-grid">
          <div className="ab-scene-marker phase-reveal" data-reveal="">
            <p className="scene-label"><span>05</span> Who we work best with</p>
            <h2 id="ab-fit-heading">
              We work best with businesses where every opportunity matters.
            </h2>
          </div>

          <div className="ab-scene-body">
            <dl className="ab-rows">
              {conditions.map((condition) => (
                <div className="ab-row" data-reveal="" key={condition.term}>
                  <dt>{condition.term}</dt>
                  <dd>{condition.detail}</dd>
                </div>
              ))}
            </dl>

            <div className="ab-examples" data-reveal="">
              <p className="ab-examples-label">Often</p>
              <ul className="ab-examples-list" role="list">
                {examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
              <p className="ab-examples-note">
                Usually businesses where prospects enquire, call or book before
                they buy. These are examples rather than limits; the
                conditions above matter more than the trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
