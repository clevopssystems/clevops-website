/**
 * Scenes 05 to 08. Launch and Optimize share the surface the page rises onto
 * out of the dark scene; the collaboration band and the timelines scene close
 * the page before the final CTA.
 *
 * The collaboration band is deliberately one band of height rather than two
 * sections: what we need from you and how the project is communicated are the
 * same question asked from two sides.
 */

export const launch = [
  {
    term: "Publish",
    detail: "The website or landing pages go live, with the pages behind every campaign ready first.",
  },
  {
    term: "Activate campaigns",
    detail: "Where paid media is part of the scope, campaigns are switched on once the pages and tracking are in place.",
  },
  {
    term: "Verify tracking",
    detail: "Events are checked against real activity rather than trusted because they worked in testing.",
  },
  {
    term: "Monitor lead flow",
    detail: "The first enquiries are followed from submission to CRM to notification to confirm the path holds.",
  },
  {
    term: "Confirm routing",
    detail: "Leads are landing with the right person, in the right stage, with the information you need to act.",
  },
];

export const optimize = [
  {
    term: "Campaign optimization",
    detail: "Budget and targeting moved toward what produces enquiries worth having.",
  },
  {
    term: "Landing page improvements",
    detail: "Changes to the pages where visitors arrive but do not convert.",
  },
  {
    term: "SEO growth",
    detail: "Continued structure, content and relevance work, which compounds rather than finishes.",
  },
  {
    term: "Lead quality review",
    detail: "Looking at the enquiries you are getting, not just how many, and adjusting qualification.",
  },
  {
    term: "Follow-up refinement",
    detail: "Timing and messaging adjusted based on what people actually respond to.",
  },
  {
    term: "Pipeline review",
    detail: "Where opportunities stall between the first contact and the booked job.",
  },
];

export const needs = [
  { term: "A clear decision-maker", detail: "One person who can approve direction without a committee." },
  { term: "Access where relevant", detail: "Website and domain, ad accounts, analytics and Search Console, and the CRM, as the scope requires." },
  { term: "Service detail", detail: "What you do, what you do not do, and where you do it." },
  { term: "Offer and pricing context", detail: "Where it affects the copy, the qualification questions or the campaigns." },
  { term: "Timely approvals", detail: "Feedback at the agreed points, so the build does not sit waiting." },
  { term: "Accurate information", detail: "We only publish what is true about your business, so we need it from you first." },
];

export const communication = [
  "A scope you have seen and agreed before work starts",
  "Milestones, so progress is visible rather than described",
  "Named approval points where a decision is yours to make",
  "Progress updates as those milestones are reached",
  "Decisions made together, with the reasoning shared",
  "Changes to scope documented rather than assumed",
];

export const timelines = [
  {
    term: "Focused landing page projects",
    detail: "The shortest work we do: one page, one intent, one action behind it.",
  },
  {
    term: "Full websites",
    detail: "Longer, because structure, content, every page and the conversion paths through them all have to be right.",
  },
  {
    term: "Paid campaigns",
    detail: "Can start producing traffic sooner than organic work, once the pages and tracking behind them are ready.",
  },
  {
    term: "SEO",
    detail: "Ongoing by nature. It compounds over time rather than completing on a date, and we will not pretend otherwise.",
  },
  {
    term: "Automation and CRM work",
    detail: "Depends on complexity: how many services, stages and follow-up paths the business actually has.",
  },
];

export function ProcessLaunch() {
  return (
    <section className="pr-scene" id="launch" aria-labelledby="pr-launch-heading">
      <div className="container pr-scene-grid">
        <div className="pr-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>05</span> Launch</p>
          <h2 id="pr-launch-heading">Launch with visibility.</h2>
        </div>
        <div className="pr-scene-body">
          <p className="pr-scene-lead phase-reveal" data-reveal="">
            Going live is a moment to watch closely, not to walk away from.
          </p>
          <dl className="pr-rows">
            {launch.map((item) => (
              <div className="pr-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="pr-scene-note" data-reveal="">
            Launch is a starting point, not a finish line. Early issues are
            normal; catching them quickly is the job.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessOptimize() {
  return (
    <section className="pr-scene" id="optimize" aria-labelledby="pr-optimize-heading">
      <div className="container pr-scene-grid">
        <div className="pr-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>06</span> Optimize &amp; Scale</p>
          <h2 id="pr-optimize-heading">Improve based on what actually happens.</h2>
        </div>
        <div className="pr-scene-body">
          <p className="pr-scene-lead phase-reveal" data-reveal="">
            Once real leads are moving through the system, it tells you what to
            fix next.
          </p>
          <dl className="pr-rows">
            {optimize.map((item) => (
              <div className="pr-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="pr-scene-note" data-reveal="">
            Changes are made because something in the data points to them,
            not to look busy.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessTogether() {
  return (
    <section className="pr-together" id="working-together" aria-labelledby="pr-needs-heading">
      <div className="container pr-together-grid">
        <div className="pr-together-main">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>07</span> Working together</p>
            <h2 id="pr-needs-heading">What we need from you.</h2>
            <p className="pr-together-description">
              Most of the work is ours. These are the few things that keep it
              moving.
            </p>
          </div>
          <dl className="pr-rows pr-needs">
            {needs.map((item) => (
              <div className="pr-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pr-comms phase-reveal" data-reveal="">
          <h3 className="pr-comms-heading" id="pr-comms-heading">
            No guessing where the project stands.
          </h3>
          <ul className="pr-comms-list">
            {communication.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="pr-comms-note">
            How often we check in is agreed with the scope, so it fits the
            project rather than a template.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessTimelines() {
  return (
    <section className="pr-timelines" id="timelines" aria-labelledby="pr-timelines-heading">
      <div className="container">
        <div className="pr-timelines-intro phase-reveal" data-reveal="">
          <div>
            <p className="scene-label"><span>08</span> Timelines</p>
            <h2 id="pr-timelines-heading">Timelines depend on scope.</h2>
          </div>
          <p className="pr-timelines-description">
            We will not quote a delivery date before we understand the work.
            What we can tell you is how the shapes of these projects differ.
          </p>
        </div>

        <dl className="pr-rows pr-timeline-rows">
          {timelines.map((item) => (
            <div className="pr-row" data-reveal="" key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="pr-timelines-note" data-reveal="">
          You get a timeline for your scope once we have seen what is involved,
          not a fixed number of days chosen before anyone looked.
        </p>
      </div>
    </section>
  );
}
