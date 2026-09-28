/**
 * Scenes 03 and 04: what was delivered, then the thinking behind the
 * structure. 03 is ruled rows on the deepest light tone of the first half of
 * the page; 04 is the first of the two dark scenes and carries the only
 * diagram of the site architecture, labelled as a diagram.
 */

export const delivered = [
  {
    name: "Website architecture",
    note: "Service structure and page hierarchy mapped to the way customers look for the work.",
  },
  {
    name: "Conversion-focused service pages",
    note: "One service, one intent and one clear action per page, instead of a homepage carrying everything.",
  },
  {
    name: "Local SEO foundations",
    note: "The service area stated clearly in the content and the markup.",
  },
  {
    name: "On-page SEO",
    note: "Titles, headings, descriptions and body copy written around what customers actually search for.",
  },
  {
    name: "Technical SEO",
    note: "Clean, crawlable markup, sensible metadata and a site a search engine can index without guessing.",
  },
  {
    name: "Content structure",
    note: "A repeatable page pattern the business can extend with new services without a rebuild.",
  },
  {
    name: "Lead capture",
    note: "Enquiry and contact routes placed where the decision is actually made, not only at the bottom.",
  },
  {
    name: "Tracking foundations",
    note: "The groundwork needed to measure traffic and enquiries as activity grows.",
  },
  {
    name: "Growth-ready architecture",
    note: "Structure that can carry paid campaigns and additional services later without being unpicked.",
  },
];

/**
 * A diagram of how the architecture is organised, described by the role each
 * level plays, which is what we actually determined. It is not a page-by-page
 * map of the live site and is labelled so it is never read as one.
 */
export const levels = [
  {
    name: "Entry",
    note: "One clear promise, and a direct route to the right service rather than a single page trying to sell everything.",
  },
  {
    name: "Service hub",
    note: "Every service in one place, so a visitor can self-select instead of reading through work that does not apply to them.",
  },
  {
    name: "Service pages",
    note: "One service, one search intent, one action. The page a customer lands on answers the question they arrived with.",
  },
  {
    name: "Local relevance",
    note: "The service area stated in the content itself, so the market is clear to a customer and to a search engine.",
  },
  {
    name: "Enquiry",
    note: "The same contact action reachable from every level, so nobody has to navigate backwards to get in touch.",
  },
];

export const principles = [
  {
    term: "Service hierarchy",
    detail:
      "Grouping the work into services a customer would recognise, then giving each one a page of its own rather than a paragraph on a shared one.",
  },
  {
    term: "Search intent",
    detail:
      "Different jobs are searched for in different words. The structure follows those differences instead of flattening them into one page.",
  },
  {
    term: "Local relevance",
    detail:
      "A local service business is chosen locally. Where the work is done belongs in the structure, not only in a footer address line.",
  },
  {
    term: "Navigation and conversion paths",
    detail:
      "The route from arriving to enquiring is short and obvious from anywhere on the site, on a phone as much as on a desktop.",
  },
  {
    term: "Scalable page structure",
    detail:
      "New services, new content and new campaigns slot into the existing pattern rather than forcing another redesign.",
  },
];

export function WorkBuild() {
  return (
    <section className="wk-build" aria-labelledby="wk-build-heading">
      <div className="container">
        <div className="wk-build-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>03</span> What we built</p>
          <h2 id="wk-build-heading">The work that was actually delivered.</h2>
          <p className="wk-build-description">
            Nine pieces of this build. They are listed plainly because each of
            them is something that exists on the site, not a capability we are
            describing in general.
          </p>
        </div>

        <ol className="wk-build-rows">
          {delivered.map((item, index) => (
            <li className="wk-build-row" data-reveal="" key={item.name}>
              <span className="wk-build-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="wk-build-name">{item.name}</span>
              <span className="wk-build-note">{item.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WorkArchitecture() {
  return (
    <section className="wk-arch" aria-labelledby="wk-arch-heading" tabIndex={-1} id="architecture">
      <div className="container wk-arch-inner">
        <span className="wk-arch-thread" aria-hidden="true" />

        <div className="wk-arch-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>04</span> Website architecture</p>
          <h2 id="wk-arch-heading">
            Built around how customers <span>actually search.</span>
          </h2>
          <p className="wk-arch-description">
            Most small business websites are organised around the business:
            everything the company does, on one page, in the order the owner
            thinks of it. Customers do not arrive that way. They arrive with one
            job in mind, in one place, and they want the page about that job.
          </p>
        </div>

        <div className="wk-arch-layout">
          <figure className="wk-arch-figure" aria-labelledby="wk-arch-caption">
            <figcaption className="wk-arch-caption" id="wk-arch-caption">
              Diagram: how the service architecture is organised
            </figcaption>
            <ol className="wk-arch-levels" role="list">
              {levels.map((level, index) => (
                <li className="wk-arch-level" data-reveal="" key={level.name}>
                  <span className="wk-arch-line" aria-hidden="true" />
                  <span className="wk-arch-node" aria-hidden="true" />
                  <span className="wk-arch-index">0{index + 1}</span>
                  <span className="wk-arch-name">{level.name}</span>
                  <span className="wk-arch-note">{level.note}</span>
                </li>
              ))}
            </ol>
            <p className="wk-arch-disclaimer">
              Drawn in code to show the structure of the build. Not a screenshot
              and not a page-by-page map of the live site.
            </p>
          </figure>

          <div className="wk-arch-principles">
            <p className="wk-dark-label phase-reveal" data-reveal="">Why the structure matters</p>
            <dl className="wk-arch-list">
              {principles.map((item) => (
                <div className="wk-arch-row" data-reveal="" key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
