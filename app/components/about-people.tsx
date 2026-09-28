import Image from "next/image";
import { getFounderPortrait } from "./founder-asset";

/**
 * Scenes 06, 07 and 08: the human end of the page.
 *
 * The founder section is restrained by design and by necessity: it carries
 * only what is verified. No years in business, client count, team size,
 * certification, award or office. Until a real photograph is registered in
 * founder-asset.ts the portrait column is a labelled placeholder plate rather
 * than a stock portrait, in the same spirit as the code-drawn case diagrams.
 *
 * "How we operate" turns a small operation into a straight answer instead of
 * implying a larger one, and "what we do not do" is four sentences that each
 * cost us something to say.
 */
export const operating = [
  {
    term: "Focused execution",
    detail: "A small number of engagements at a time, so the work gets actual attention.",
  },
  {
    term: "Direct communication",
    detail: "You talk to the person doing the work, not to an account layer in front of it.",
  },
  {
    term: "Clear scope",
    detail: "What is being built, what it costs and what it does not include, agreed before it starts.",
  },
  {
    term: "No unnecessary layers",
    detail: "Fewer handovers between the strategy, the build and the follow-up that has to run on it.",
  },
  {
    term: "Specialists where they help",
    detail: "Tools and partners are brought in where they are genuinely better. The strategy stays in one place.",
  },
];

export const refusals = [
  {
    claim: "We do not recommend a service simply because we sell it.",
    detail: "If the constraint is the offer or the sales process, more traffic is the wrong invoice.",
  },
  {
    claim: "We do not use fake results to fill a portfolio.",
    detail: "One documented project is worth more than nine invented ones, and it is what we publish.",
  },
  {
    claim: "We do not force every business into the same funnel.",
    detail: "A template that fits everyone fits nobody in particular. The build starts from how you already sell.",
  },
  {
    claim: "We do not treat leads as the finish line.",
    detail: "A lead nobody answers is not a result. Booked work is the number that matters.",
  },
];

export function AboutFounder() {
  const portrait = getFounderPortrait();

  return (
    <section className="ab-founder" id="founder" aria-labelledby="ab-founder-heading">
      <div className="container">
        <div className="ab-founder-grid">
          <figure className="ab-portrait">
            <div className="ab-portrait-frame" data-reveal="">
              {portrait ? (
                <Image
                  className="ab-portrait-image"
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(max-width: 860px) 100vw, 360px"
                />
              ) : (
                <span className="ab-portrait-placeholder" aria-hidden="true">
                  <span className="ab-portrait-rule" />
                  <span className="ab-portrait-label">Portrait to be added</span>
                </span>
              )}
            </div>
            <figcaption className="ab-portrait-caption">
              Zain, Founder of ClevOps
            </figcaption>
          </figure>

          <div className="ab-founder-copy">
            <div className="phase-reveal" data-reveal="">
              <p className="scene-label"><span>06</span> Who is behind ClevOps</p>
              <h2 id="ab-founder-heading">
                Built by someone who wanted the whole system to make sense.
              </h2>
            </div>

            <dl className="ab-founder-meta" data-reveal="">
              <div>
                <dt>Name</dt>
                <dd>Zain</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Founder, ClevOps</dd>
              </div>
            </dl>

            <p className="ab-founder-bio" data-reveal="">
              ClevOps was built around an interest in web development, search,
              paid acquisition and automation, and the idea that these
              disciplines should work together rather than live in separate
              silos.
            </p>
            <p className="ab-founder-bio" data-reveal="">
              Most of them are usually learned and sold apart from one another,
              which is why so few setups are designed as a single route from
              attention to a booked job. Building that route is what the
              company is for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutOperating() {
  return (
    <section className="ab-scene ab-operating" id="how-we-operate" aria-labelledby="ab-operating-heading">
      <div className="container">
        <div className="ab-scene-grid">
          <div className="ab-scene-marker phase-reveal" data-reveal="">
            <p className="scene-label"><span>07</span> How we operate</p>
            <h2 id="ab-operating-heading">Small enough to stay close to the work.</h2>
          </div>

          <div className="ab-scene-body">
            <p className="ab-scene-lead" data-reveal="">
              We are a focused operation rather than a large agency, and the
              work is better for it.
            </p>

            <dl className="ab-rows">
              {operating.map((item) => (
                <div className="ab-row" data-reveal="" key={item.term}>
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

export function AboutRefusals() {
  return (
    <section className="ab-scene ab-refusals" id="what-we-dont-do" aria-labelledby="ab-refusals-heading">
      <div className="container">
        <div className="ab-scene-grid">
          <div className="ab-scene-marker phase-reveal" data-reveal="">
            <p className="scene-label"><span>08</span> What we do not do</p>
            <h2 id="ab-refusals-heading">Some of this is worth saying out loud.</h2>
          </div>

          <div className="ab-scene-body">
            <dl className="ab-refusal-rows">
              {refusals.map((item) => (
                <div className="ab-refusal" data-reveal="" key={item.claim}>
                  <dt>
                    <span className="ab-refusal-node" aria-hidden="true" />
                    {item.claim}
                  </dt>
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
