/**
 * The overview, and the only place the whole process appears at once. It is a
 * map, not an explanation: one line per stage, then the page explains each in
 * turn. The section is deliberately unnumbered, because it is the table of
 * contents for the numbers below it.
 */
export const stages = [
  { name: "Discovery", note: "Understand the business and where work is lost.", href: "#discovery" },
  { name: "Audit & Strategy", note: "Review what exists, then decide what to do.", href: "#audit-strategy" },
  { name: "Build", note: "Build only the pieces the strategy calls for.", href: "#build" },
  { name: "Connect & Test", note: "Walk the whole path before any traffic does.", href: "#connect-test" },
  { name: "Launch", note: "Go live and watch the first leads closely.", href: "#launch" },
  { name: "Optimize & Scale", note: "Improve what the data actually points at.", href: "#optimize" },
];

export function ProcessOverview() {
  return (
    <section className="pr-overview" id="the-process" aria-labelledby="pr-overview-heading" tabIndex={-1}>
      <div className="container">
        <div className="pr-overview-intro phase-reveal" data-reveal="">
          <div>
            {/* Unnumbered: this is the contents page for the numbers below. */}
            <p className="scene-label"><span>00</span> The full process</p>
            <h2 id="pr-overview-heading">Six stages, start to finish.</h2>
          </div>
          <p className="pr-overview-description">
            Every engagement runs through the same six stages. Scope changes
            what happens inside them, it does not change the order.
          </p>
        </div>

        <ol className="pr-map" aria-label="The six stages of a ClevOps engagement">
          {stages.map((stage, index) => (
            <li className="pr-map-step" data-reveal="" key={stage.name}>
              <span className="pr-map-rail" aria-hidden="true" />
              <span className="pr-map-node" aria-hidden="true" />
              <span className="pr-map-index">0{index + 1}</span>
              <div className="pr-map-copy">
                <a className="pr-map-name" href={stage.href}>{stage.name}</a>
                <p className="pr-map-note">{stage.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
