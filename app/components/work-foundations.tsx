/**
 * Scenes 05, 06 and 07: the SEO foundation, the conversion and lead flow, and
 * the qualitative outcome. 05 and 06 share one surface, entered on the
 * established rise gradient out of the dark architecture scene; 07 settles a
 * tone deeper. Every claim here is about structure we built, never about
 * performance we have not measured.
 */

export const seo = [
  {
    term: "Technical foundations",
    detail:
      "Clean markup, sensible heading structure and pages a crawler can read without working around the design.",
  },
  {
    term: "Metadata",
    detail:
      "Titles and descriptions written per page for the search that page answers, rather than one line repeated across the site.",
  },
  {
    term: "Internal linking",
    detail:
      "Services connected to each other and back to the hub, so both customers and crawlers can move between related work.",
  },
  {
    term: "Service page targeting",
    detail:
      "One page per service, aimed at the way that specific job is searched for, instead of competing pages aimed at the same thing.",
  },
  {
    term: "Local relevance",
    detail:
      "The service area expressed in the content and structure, not implied by an address in the footer.",
  },
  {
    term: "Structured content",
    detail:
      "A consistent pattern, what the service is, who it is for, what happens next, so every page carries the same useful shape.",
  },
  {
    term: "Sitemap and indexing",
    detail:
      "A sitemap and indexing foundations in place from launch, so new pages are discoverable as they are added.",
  },
];

export const conversion = [
  {
    term: "Enquiry forms",
    detail:
      "A short form that asks for what is needed to respond usefully, and nothing else. Long forms cost enquiries.",
  },
  {
    term: "Calls to action",
    detail:
      "One primary action per page, repeated where a reader is most likely to have decided rather than only at the very bottom.",
  },
  {
    term: "Service paths",
    detail:
      "A visitor who lands anywhere can reach the right service and the enquiry step without going back to the homepage first.",
  },
  {
    term: "Trust and clarity",
    detail:
      "What the service covers, where it is offered and what happens after an enquiry, stated plainly, because uncertainty is what stops people acting.",
  },
  {
    term: "Lead routing foundations",
    detail:
      "Enquiries arrive in one predictable place, so nothing depends on somebody remembering to check a second inbox.",
  },
  {
    term: "Paid traffic readiness",
    detail:
      "Pages that a campaign can point at directly, with the action and the offer already clear on arrival.",
  },
];

export const outcomes = [
  "Clearer service architecture",
  "A stronger SEO foundation",
  "A more scalable content system",
  "Improved conversion structure",
  "A better foundation for future paid acquisition",
];

export function WorkSeo() {
  return (
    <section className="wk-scene" id="seo-foundation" aria-labelledby="wk-seo-heading">
      <div className="container wk-scene-grid">
        <div className="wk-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>05</span> SEO foundation</p>
          <h2 id="wk-seo-heading">SEO built into the structure, not added afterward.</h2>
        </div>

        <div className="wk-scene-body">
          <p className="wk-scene-lead phase-reveal" data-reveal="">
            Search work bolted on after a site is finished spends most of its
            budget compensating for decisions already made. On this build the
            structure and the search work were the same job.
          </p>

          <dl className="wk-rows">
            {seo.map((item) => (
              <div className="wk-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="wk-scene-note phase-reveal" data-reveal="">
            No ranking claims are made here. Where a site appears depends on
            competition, market and time. What a build controls is the structure
            search engines assess, and that is what was delivered.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WorkConversion() {
  return (
    <section className="wk-scene" id="conversion" aria-labelledby="wk-conversion-heading">
      <div className="container wk-scene-grid">
        <div className="wk-scene-marker phase-reveal" data-reveal="">
          <p className="scene-label"><span>06</span> Conversion &amp; lead flow</p>
          <h2 id="wk-conversion-heading">Making the next step obvious.</h2>
        </div>

        <div className="wk-scene-body">
          <p className="wk-scene-lead phase-reveal" data-reveal="">
            Traffic is only useful if the person who arrives knows what to do.
            The site was structured so that the next step is visible from
            wherever a visitor happens to land.
          </p>

          <dl className="wk-rows">
            {conversion.map((item) => (
              <div className="wk-row" data-reveal="" key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>

          <p className="wk-scene-note phase-reveal" data-reveal="">
            Automated qualification, CRM workflows and follow-up sequences are
            part of the wider ClevOps system. They are not claimed here: this
            project covers the website side of the lead flow and the foundations
            that make the rest possible later.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WorkGrowth() {
  return (
    <section className="wk-growth" aria-labelledby="wk-growth-heading">
      <div className="container">
        <div className="wk-growth-intro phase-reveal" data-reveal="">
          <div>
            <p className="scene-label"><span>07</span> Foundation built for growth</p>
            <h2 id="wk-growth-heading">A foundation, not a finish line.</h2>
          </div>
          <p className="wk-growth-description">
            What changed is structural, and structure is what everything after
            it stands on. These are the outcomes we can state accurately today.
          </p>
        </div>

        <ul className="wk-outcomes" role="list">
          {outcomes.map((outcome) => (
            <li data-reveal="" key={outcome}>
              <span className="wk-outcome-node" aria-hidden="true" />
              {outcome}
            </li>
          ))}
        </ul>

        <p className="wk-growth-note phase-reveal" data-reveal="">
          Performance figures are published only when measured and verified.
        </p>
      </div>
    </section>
  );
}
