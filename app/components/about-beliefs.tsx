/**
 * Scenes 01 and 02: why the company exists, and what it holds to. Both are
 * ruled editorial lists rather than cards. The problem is described as a
 * structural one: the individual pieces are usually fine, and nobody is
 * responsible for the space between them. That is the argument, not a
 * complaint about other agencies.
 */
export const pieces = [
  {
    term: "The website",
    detail: "Built by one team, to a brief that quietly ends at launch.",
  },
  {
    term: "The ads",
    detail: "Run by another, and reported on clicks rather than on booked work.",
  },
  {
    term: "Search",
    detail: "A third arrangement, measured on its own terms and nobody else's.",
  },
  {
    term: "The leads",
    detail: "Landing in an inbox, a form tool or a phone that nobody is watching.",
  },
  {
    term: "Follow-up",
    detail: "Left to whoever is free, which on a busy week is usually nobody.",
  },
  {
    term: "The journey itself",
    detail: "Unowned. The gaps between the pieces are where the opportunities go.",
  },
];

export const beliefs = [
  {
    number: "01",
    name: "Strategy before tools",
    lead: "The software should support the business, not define it.",
    detail:
      "The platform is chosen once we understand how the business actually sells. A tool bought first tends to decide the process by accident.",
  },
  {
    number: "02",
    name: "Traffic is only useful if it converts",
    lead: "More clicks are not the goal. Better opportunities are.",
    detail:
      "Visits, impressions and rankings are inputs. What matters is how many of them turn into an enquiry worth having, and how many of those turn into work.",
  },
  {
    number: "03",
    name: "Systems should reduce friction",
    lead: "Good automation should make the sales process simpler, not more complicated.",
    detail:
      "If a system needs constant supervision to keep running, it has moved the work rather than removed it. Anything that does not earn its complexity should not exist.",
  },
  {
    number: "04",
    name: "Proof matters",
    lead: "We do not invent case studies, metrics or testimonials to make the agency look larger.",
    detail:
      "The work we publish is work we delivered. Figures appear only where they are measured, and a review we do not have is stated as missing rather than written for us.",
  },
];

export function AboutOrigin() {
  return (
    <section className="ab-origin" id="why-clevops" aria-labelledby="ab-origin-heading">
      <div className="container">
        <div className="ab-origin-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>01</span> Why ClevOps exists</p>
            <h2 id="ab-origin-heading">
              Too many businesses are paying for disconnected pieces.
            </h2>
          </div>
          <p className="ab-origin-description phase-reveal" data-reveal="">
            Marketing is usually bought one piece at a time, from whoever is
            closest to that piece. Each part can be perfectly well built and the
            result still underperforms, because no single view runs across all
            of them.
          </p>
        </div>

        <dl className="ab-pieces">
          {pieces.map((piece) => (
            <div className="ab-piece" data-reveal="" key={piece.term}>
              <dt>
                <span className="ab-piece-node" aria-hidden="true" />
                {piece.term}
              </dt>
              <dd>{piece.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="ab-origin-note" data-reveal="">
          None of this means the individual pieces are done badly. It means
          nobody owns the full customer journey, so the handovers between them
          are never anyone&rsquo;s job.
        </p>

        <p className="ab-origin-statement" data-reveal="">
          We built ClevOps to connect the pieces around one outcome: helping a
          business generate, handle and convert opportunities more effectively.
        </p>
      </div>
    </section>
  );
}

export function AboutBeliefs() {
  return (
    <section className="ab-beliefs" id="what-we-believe" aria-labelledby="ab-beliefs-heading">
      <div className="container">
        <div className="ab-beliefs-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>02</span> What we believe</p>
            <h2 id="ab-beliefs-heading">Four things we hold to.</h2>
          </div>
          <p className="ab-beliefs-description phase-reveal" data-reveal="">
            These decide what gets recommended, what gets built and what we
            leave out of a proposal.
          </p>
        </div>

        <ol className="ab-belief-rows" role="list">
          {beliefs.map((belief) => (
            <li className="ab-belief" data-reveal="" key={belief.number}>
              <span className="ab-belief-number">{belief.number}</span>
              <div className="ab-belief-body">
                <h3 className="ab-belief-name">{belief.name}</h3>
                <p className="ab-belief-lead">{belief.lead}</p>
                <p className="ab-belief-detail">{belief.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
