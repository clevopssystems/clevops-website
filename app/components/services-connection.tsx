/**
 * Sections 8 and 9: the two scenes that turn five services back into one
 * system. The connection is a code-drawn diagram: four channels on a bus that
 * converges into a single spine. No cards, no icons, no third-party graphic.
 * The starting points are ruled rows pointing back up the page, never a quiz.
 */
export const sources = ["Website", "SEO", "Google Ads", "Meta Ads"];

export const spine = [
  { name: "Lead capture", detail: "Every enquiry lands in one place, whatever channel produced it." },
  { name: "Qualification", detail: "Fit, location and urgency established before time is spent." },
  { name: "Follow-up", detail: "An immediate response, then a sequence built around your sales cycle." },
  { name: "Booking and pipeline", detail: "An appointment on the calendar and the enquiry visible to the end." },
];

export const startingPoints = [
  {
    condition: "If your website is the bottleneck",
    detail: "Traffic arrives and nothing happens. The site is the first thing to fix.",
    service: "Website Development",
    href: "#website-development",
  },
  {
    condition: "If people cannot find you",
    detail: "You are invisible for the searches your customers actually make.",
    service: "SEO",
    href: "#seo",
  },
  {
    condition: "If you need demand now",
    detail: "The pipeline is thin this quarter and waiting for organic is not an option.",
    service: "Google Ads / Meta Ads",
    href: "#google-ads",
  },
  {
    condition: "If leads arrive but go cold",
    detail: "Enquiries come in, nobody responds fast enough, and they book elsewhere.",
    service: "Lead Generation System",
    href: "#lead-generation-systems",
  },
];

export function ServiceConnection() {
  return (
    <section className="sv-connect" aria-labelledby="sv-connect-heading">
      <div className="container">
        <div className="sv-connect-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>06</span> How the services connect</p>
            <h2 id="sv-connect-heading">
              Different channels. <span>One system.</span>
            </h2>
          </div>
          <div className="sv-connect-context phase-reveal" data-reveal="">
            <p>
              Every service above is a way of getting attention or handling it.
              They are worth more together because they end in the same place:
              one enquiry, in one system, followed up the same way.
            </p>
            <p>
              Not every business needs every service. We build around the problem
              the business actually has. Some companies need a new website. Some
              need paid demand. Others need better follow-up after the lead
              arrives. The system should fit the business, not the other way
              around.
            </p>
          </div>
        </div>

        <figure className="sv-flow" aria-labelledby="sv-flow-caption">
          <figcaption className="sv-flow-caption" id="sv-flow-caption">
            Diagram: where the channels meet
          </figcaption>

          <ul className="sv-flow-sources" role="list">
            {sources.map((source) => (
              <li className="sv-flow-source" data-reveal="" key={source}>
                <span className="sv-flow-node" aria-hidden="true" />
                <span className="sv-flow-source-name">{source}</span>
                <span className="sv-flow-drop" aria-hidden="true" />
              </li>
            ))}
          </ul>

          <span className="sv-flow-bus" aria-hidden="true">
            <span className="sv-flow-line" />
            <span className="sv-flow-stem" />
          </span>

          <ol className="sv-flow-spine" role="list">
            {spine.map((step, position) => (
              <li className="sv-flow-step" data-reveal="" key={step.name}>
                <span className="sv-flow-step-line" aria-hidden="true" />
                <span className="sv-flow-step-node" aria-hidden="true" />
                <span className="sv-flow-step-index">0{position + 1}</span>
                <span className="sv-flow-step-name">{step.name}</span>
                <span className="sv-flow-step-detail">{step.detail}</span>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  );
}

export function ServiceStart() {
  return (
    <section className="sv-start" aria-labelledby="sv-start-heading">
      <div className="container">
        <div className="sv-start-intro phase-reveal" data-reveal="">
          <div>
            <p className="scene-label"><span>07</span> Where to start</p>
            <h2 id="sv-start-heading">Start where the problem is.</h2>
          </div>
          <p className="sv-start-description">
            Most businesses already know which of these describes them. Whichever
            one it is, that is the right place to begin.
          </p>
        </div>

        <ul className="sv-start-rows" role="list">
          {startingPoints.map((point) => (
            <li data-reveal="" key={point.href}>
              <a className="sv-start-row" href={point.href}>
                <span className="sv-start-condition">
                  <span className="sv-start-node" aria-hidden="true" />
                  {point.condition}
                  <span className="sv-start-detail">{point.detail}</span>
                </span>
                <span className="sv-start-service">
                  {point.service}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="sv-start-rule" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
