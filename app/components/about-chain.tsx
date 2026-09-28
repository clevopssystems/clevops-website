/**
 * Scene 03: the first of the two dark surfaces, and the page's argument in
 * one image. The chain is code-drawn and labelled as a diagram: six links on
 * one rail, horizontal above 1120px and vertical below it, matching every
 * other rail on the site. The four limits beneath it are the same point said
 * plainly, and none of them is a claim about anybody's results.
 */
export const links = [
  { name: "Traffic", note: "Someone looks for what you do, or sees you while they are looking." },
  { name: "Website / landing page", note: "The first place they decide whether you are worth contacting." },
  { name: "Qualification", note: "Whether the enquiry is in area, in scope and ready to move." },
  { name: "Follow-up", note: "What happens in the minutes and the days after they reach out." },
  { name: "Booking", note: "An appointment agreed, at a time that actually holds." },
  { name: "Sales process", note: "The conversation, the quote and the decision that ends it." },
];

export const limits = [
  {
    claim: "More ad spend cannot fix a poor landing page.",
    detail: "It buys more visits to the same result, at the same rate, for more money.",
  },
  {
    claim: "Better SEO cannot fix slow follow-up.",
    detail: "A ranking earns the enquiry. It has no say in who answers it, or when.",
  },
  {
    claim: "Automation cannot fix an unclear offer.",
    detail: "A sequence delivers the message faster. It does not make the message persuasive.",
  },
  {
    claim: "A beautiful website cannot create demand on its own.",
    detail: "It converts attention it is given. Something still has to send the attention.",
  },
];

export function AboutChain() {
  return (
    <section className="ab-chain-scene" id="how-we-think" aria-labelledby="ab-chain-heading">
      <div className="container ab-chain-inner">
        <span className="ab-chain-thread" data-reveal="" aria-hidden="true" />

        <div className="ab-chain-intro">
          <div className="phase-reveal" data-reveal="">
            <p className="scene-label"><span>03</span> How we think about growth</p>
            <h2 id="ab-chain-heading">
              Growth is a chain. <span>The weakest link matters.</span>
            </h2>
          </div>
          <p className="ab-chain-description phase-reveal" data-reveal="">
            Every customer you win passes through the same sequence. However
            much attention arrives at the front of it, the whole thing is
            limited by whichever part is weakest.
          </p>
        </div>

        <figure className="ab-chain" aria-labelledby="ab-chain-caption">
          <figcaption className="ab-chain-caption" id="ab-chain-caption">
            Diagram: the chain every customer moves through
          </figcaption>
          <ol className="ab-chain-links" role="list">
            {links.map((link, position) => (
              <li className="ab-chain-link" data-reveal="" key={link.name}>
                <span className="ab-chain-rail" aria-hidden="true" />
                <span className="ab-chain-node" aria-hidden="true" />
                <span className="ab-chain-index">0{position + 1}</span>
                <span className="ab-chain-name">{link.name}</span>
                <span className="ab-chain-note">{link.note}</span>
              </li>
            ))}
          </ol>
        </figure>

        <dl className="ab-limits">
          {limits.map((limit) => (
            <div className="ab-limit" data-reveal="" key={limit.claim}>
              <dt>{limit.claim}</dt>
              <dd>{limit.detail}</dd>
            </div>
          ))}
        </dl>

        <p className="ab-chain-note" data-reveal="">
          Improving one part while ignoring the rest usually creates waste. The
          useful question is not which piece is best, but which one is currently
          costing you the most.
        </p>
      </div>
    </section>
  );
}
