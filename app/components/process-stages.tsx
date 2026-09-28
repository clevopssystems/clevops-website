/**
 * Scenes 01 to 04. Discovery and Audit &amp; Strategy are two compact editorial
 * scenes sharing one surface; Build takes the deepest light tone and settles
 * under the cut into Connect &amp; Test, the page's dark technical scene.
 *
 * Nothing here is a checklist card grid: every list is a ruled, connected
 * label, the device the rest of the site already uses.
 */

export const learned = [
  {
    term: "The business",
    detail:
      "The model, the offer, what a won job is actually worth, and the customer you want more of.",
  },
  {
    term: "How you sell",
    detail:
      "The sales process itself: who handles an enquiry, how quickly it is answered and what happens after first contact.",
  },
  {
    term: "What is already running",
    detail:
      "Current lead sources, the website, the CRM if there is one, and whatever follow-up exists today.",
  },
  {
    term: "The operating picture",
    detail:
      "Service area, internal team, capacity to take on more work, and the business goals this is meant to serve.",
  },
];

export const reviewed = [
  {
    term: "Website and conversion paths",
    detail:
      "The structure of the site and the route a visitor takes from landing on it to making contact.",
  },
  {
    term: "Search and paid visibility",
    detail:
      "SEO foundations, and whether paid traffic is a sensible channel for this offer at this stage.",
  },
  {
    term: "Lead handling",
    detail:
      "What happens once an enquiry arrives: response speed, qualification, and who picks it up.",
  },
  {
    term: "Tracking and booking",
    detail:
      "What is measured today, and how an appointment actually gets made rather than how it is supposed to.",
  },
];

export const decisions = [
  {
    term: "Fix",
    detail: "What is already in place and losing you work by being broken, slow or unclear.",
  },
  {
    term: "Build",
    detail: "What does not exist yet and would remove the bottleneck we found.",
  },
  {
    term: "Leave for now",
    detail: "What is not the problem yet. Naming this matters as much as naming the rest.",
  },
];

export const built = [
  { name: "Website", note: "Structure, pages and copy organised around how customers search and decide." },
  { name: "Landing pages", note: "Single-intent pages behind a campaign, where a full rebuild is not the point." },
  { name: "SEO architecture", note: "Service and location structure a search engine can read without guessing." },
  { name: "Campaign structure", note: "Google or Meta campaigns built around the services worth paying for." },
  { name: "CRM setup", note: "Pipeline stages that match the way your sales conversation actually goes." },
  { name: "Forms and lead capture", note: "Enquiry routes placed where the decision is made, not only at the bottom of a page." },
  { name: "Qualification logic", note: "Questions and routing that separate a real job from a time-waster before it reaches you." },
  { name: "Follow-up workflows", note: "An automated first response and reminders, so nobody waits while you are on site." },
  { name: "Booking", note: "A direct route from interested to a time in the calendar." },
  { name: "Tracking", note: "The measurement needed to tell which work produced which enquiry." },
];

export const checks = [
  { name: "Forms", note: "Submitted for real and confirmed as received, on desktop and on a phone." },
  { name: "Lead routing", note: "Every enquiry lands where it should, from every entry point on the site." },
  { name: "Notifications", note: "The alerts a new lead triggers actually arrive, and reach the right people." },
  { name: "Booking flows", note: "Walked end to end, including the confirmation and the calendar entry." },
  { name: "Tracking events", note: "Verified as firing on the actions that matter, not assumed because they are installed." },
  { name: "Mobile layouts", note: "Reviewed at the widths people really use, because that is where first contact usually happens." },
  { name: "CRM stages", note: "A test lead moved through the pipeline to confirm the stages behave as designed." },
  { name: "Follow-up logic", note: "Triggered and timed, so the first message goes out when it should and stops when it should." },
];

export function ProcessDiscovery() {
  return (
    <section className="pr-scene" id="discovery" aria-labelledby="pr-discovery-heading">
      <div className="container pr-scene-grid">
        <div className="pr-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>01</span> Discovery</p>
          <h2 id="pr-discovery-heading">Start with the business, not the tools.</h2>
        </div>
        <div className="pr-scene-body">
          <p className="pr-scene-lead phase-reveal" data-reveal="">
            The first conversation is about how your business wins work today,
            not about what we could build.
          </p>
          <dl className="pr-rows">
            {learned.map((item) => (
              <div className="pr-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="pr-scene-note" data-reveal="">
            Until we understand where opportunities are actually being lost,
            anything we build is a guess.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessStrategy() {
  return (
    <section className="pr-scene" id="audit-strategy" aria-labelledby="pr-strategy-heading">
      <div className="container pr-scene-grid">
        <div className="pr-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>02</span> Audit &amp; Strategy</p>
          <h2 id="pr-strategy-heading">Find the bottleneck before building the solution.</h2>
        </div>
        <div className="pr-scene-body">
          <p className="pr-scene-lead phase-reveal" data-reveal="">
            We review what already exists before proposing anything new.
          </p>
          <dl className="pr-rows">
            {reviewed.map((item) => (
              <div className="pr-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="pr-decide" data-reveal="">
            <p className="pr-decide-caption">The strategy then says three things</p>
            <dl className="pr-decide-list">
              {decisions.map((item) => (
                <div className="pr-decide-item" key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="pr-scene-note" data-reveal="">
            We would rather scope less and fix the thing that is costing you
            work than sell every service at once.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProcessBuild() {
  return (
    <section className="pr-build" id="build" aria-labelledby="pr-build-heading">
      <div className="container">
        <div className="pr-build-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>03</span> Build</p>
          <h2 id="pr-build-heading">Build the pieces that actually matter.</h2>
          <p className="pr-build-description">
            The build follows the strategy. Depending on scope it may include
            some of the following, rarely all of it, and never all at once.
          </p>
        </div>

        <ul className="pr-build-rows">
          {built.map((item, index) => (
            <li className="pr-build-row" data-reveal="" key={item.name}>
              <span className="pr-build-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="pr-build-name">{item.name}</span>
              <span className="pr-build-note">{item.note}</span>
            </li>
          ))}
        </ul>

        <p className="pr-build-close" data-reveal="">
          Not every project includes everything on this list. What gets built is
          decided in strategy, and anything that does not serve the bottleneck
          waits until it does.
        </p>
      </div>
    </section>
  );
}

export function ProcessConnect() {
  return (
    <section className="pr-connect" id="connect-test" aria-labelledby="pr-connect-heading">
      <div className="container pr-connect-inner">
        <span className="pr-connect-thread" aria-hidden="true" />

        <div className="pr-connect-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>04</span> Connect &amp; Test</p>
          <h2 id="pr-connect-heading">
            Before traffic arrives, <span>the system should work.</span>
          </h2>
          <p className="pr-connect-description">
            A lead system fails quietly. A form that does not deliver, an alert
            nobody receives, a booking link that breaks on a phone: none
            of it announces itself. It just costs you work. So the whole path
            gets walked before a real enquiry ever uses it.
          </p>
        </div>

        <ol className="pr-check-list" aria-label="What is checked before launch">
          {checks.map((item, index) => (
            <li className="pr-check" data-reveal="" key={item.name}>
              <span className="pr-check-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="pr-check-copy">
                <h3 className="pr-check-name">{item.name}</h3>
                <p className="pr-check-note">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="pr-connect-note" data-reveal="">
          These are checks, not guarantees. We walk the path a real lead takes
          and fix what breaks while it is still a test.
        </p>
      </div>
    </section>
  );
}
