/**
 * Sections 10 and 11 - the two scenes that decide whether a reader sees
 * themselves in the system. Both are ruled editorial lists rather than cards,
 * and neither claims exclusivity or a niche we cannot serve.
 */
export const variables = [
  {
    term: "The service",
    detail:
      "A same-day emergency call and a six-figure remodel are not the same sale, and should not run through the same sequence.",
  },
  {
    term: "Average job value",
    detail:
      "What a lead is worth decides how much qualification, follow-up and human time it justifies.",
  },
  {
    term: "Sales cycle",
    detail:
      "Decided in an afternoon or considered over three months. That length sets the follow-up, not the other way round.",
  },
  {
    term: "Service area",
    detail:
      "Where you will travel changes targeting, form logic and which enquiries are disqualified on arrival.",
  },
  {
    term: "Lead volume",
    detail:
      "Twenty enquiries a month and four hundred call for different amounts of automation and different routing.",
  },
  {
    term: "Internal team",
    detail:
      "Who answers, when they are reachable and what they already use determines how much the system should do on its own.",
  },
  {
    term: "Qualification criteria",
    detail:
      "The questions that genuinely separate a good job from a bad one for you, which are rarely the generic ones.",
  },
];

export const conditions = [
  {
    term: "A lead is worth real money",
    detail:
      "When a single job is worth a meaningful amount, the cost of losing one justifies building the process properly.",
  },
  {
    term: "Response time changes the outcome",
    detail:
      "If prospects contact more than one business, the first useful reply usually shapes the decision.",
  },
  {
    term: "Enquiries need sorting",
    detail:
      "If a noticeable share of enquiries are out of area, out of scope or not ready, qualification saves more than it costs.",
  },
  {
    term: "A conversation closes the sale",
    detail:
      "Where a call, a visit or a quote is part of how work is won, getting that appointment booked is the goal worth optimising for.",
  },
];

export const examples = [
  "Home services",
  "Contractors",
  "Cleaning companies",
  "Remodeling",
  "Local service businesses",
];

export function SystemTailoring() {
  return (
    <section className="os-tailoring" aria-labelledby="os-tailoring-heading">
      <div className="container">
        <div className="os-tailoring-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>04</span> Built around the business</p>
            <h2 id="os-tailoring-heading">
              Your business should define the system, <span>not the software.</span>
            </h2>
          </div>
          <div className="os-tailoring-context phase-reveal" data-reveal="">
            <p>
              Template automation works by making every client fit the same
              funnel. It is quick to deploy and it is why so many of those builds
              are quietly abandoned a few months later.
            </p>
            <p>
              We start from how your business already sells, then decide what
              should be automated, what should stay with a person, and what does
              not need to exist at all.
            </p>
          </div>
        </div>

        <div className="os-variables-wrap">
          <p className="os-list-heading phase-reveal" data-reveal="">
            What changes from one build to the next
          </p>
          <dl className="os-variables">
            {variables.map((item) => (
              <div className="os-variable" data-reveal="" key={item.term}>
                <dt>
                  <span className="os-variable-node" aria-hidden="true" />
                  {item.term}
                </dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function SystemAudience() {
  return (
    <section className="os-audience" aria-labelledby="os-audience-heading">
      <div className="container">
        <div className="os-audience-intro phase-reveal" data-reveal="">
          <div>
            <p className="scene-label"><span>05</span> Who this is for</p>
            <h2 id="os-audience-heading">
              Where a system like this earns its place.
            </h2>
          </div>
          <p className="os-audience-description">
            It suits service businesses with a few things in common. If none of
            them describe your business, a system of this size is probably more
            than you need right now.
          </p>
        </div>

        <ul className="os-conditions" role="list">
          {conditions.map((item, index) => (
            <li className="os-condition" data-reveal="" key={item.term}>
              <span className="os-condition-index" aria-hidden="true">0{index + 1}</span>
              <h3>{item.term}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="os-examples phase-reveal" data-reveal="">
          <p className="os-examples-label">Often</p>
          <ul className="os-examples-list" role="list">
            {examples.map((example) => <li key={example}>{example}</li>)}
          </ul>
          <p className="os-examples-note">
            These are the businesses we work with most, not the only ones the
            system fits. The conditions above matter more than the trade.
          </p>
        </div>
      </div>
    </section>
  );
}
