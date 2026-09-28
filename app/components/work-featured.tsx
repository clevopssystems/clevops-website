import Image from "next/image";
import { getCaseAssets } from "./case-assets";

/**
 * Scenes 01 and 02: the selected build. The plate is the Phase 4 browser
 * frame scaled up for a page whose whole job is the work: it holds the wider
 * column and stays beside the narrative on desktop, and becomes an inline
 * block above it below 1121px. Native scrolling throughout.
 *
 * The build is described; the client is not named. Everything here is work
 * that was delivered, the identity is simply left out of it.
 */

/**
 * Honest fallback only. These layers are drawn in code and labelled as a
 * structure diagram; they are never presented as a capture of a live site.
 * Register a verified screenshot in case-assets.ts and the frame swaps to
 * next/image on its own, see that file for the switch.
 */
export const buildLayers = [
  { name: "Architecture", note: "Service structure and page hierarchy" },
  { name: "Service pages", note: "One clear purpose, one clear action" },
  { name: "Local SEO", note: "Service-area relevance in content and markup" },
  { name: "Technical SEO", note: "Crawlable, indexable, fast foundations" },
  { name: "Conversion paths", note: "Enquiry and contact routes" },
  { name: "Tracking", note: "Groundwork for measurement and paid campaigns" },
];

export const needs = [
  {
    term: "Service information needed clearer organisation",
    detail:
      "The range of work on offer had to be grouped the way customers think about it, not the way a business writes it down internally.",
  },
  {
    term: "Customers needed a stronger path to the right service",
    detail:
      "Someone arriving with a specific job in mind should reach the page for that job in one step, and know what to do when they get there.",
  },
  {
    term: "Local search visibility needed better structure",
    detail:
      "The service area had to be unambiguous to a customer reading the page and to a search engine reading the markup.",
  },
  {
    term: "The site needed to support future marketing",
    detail:
      "Whatever ran later, organic content or paid campaigns, needed somewhere solid to send traffic, rather than a homepage doing every job at once.",
  },
  {
    term: "Lead capture needed stronger foundations",
    detail:
      "Enquiry routes had to sit where the decision is actually made, and the groundwork for measuring them had to exist from the start.",
  },
];

export function WorkFeatured() {
  const { desktop, mobile } = getCaseAssets();

  return (
    <section
      className="wk-featured"
      id="selected-build"
      aria-labelledby="wk-featured-heading"
      tabIndex={-1}
    >
      <div className="container">
        <div className="wk-featured-intro phase-reveal" data-reveal="">
          <p className="scene-label"><span>01</span> Selected build</p>
          <h2 id="wk-featured-heading">
            Building a stronger digital foundation for a{" "}
            <span>service business.</span>
          </h2>
          <p className="wk-featured-summary">
            A recent client implementation where ClevOps rebuilt the website
            structure around clearer service architecture, search intent, local
            SEO foundations and stronger conversion paths.
          </p>
        </div>

        <div className="wk-case">
          {/* The plate leads: it is the wider column and holds its place beside
              the narrative on desktop. */}
          <div className="wk-case-visual" data-reveal="">
            <figure className="wk-plate">
              <div className="wk-stage">
                <div className="wk-frame">
                  <div className="wk-frame-bar">
                    <span className="wk-frame-dots" aria-hidden="true">
                      <span /><span /><span />
                    </span>
                    {/* Neutral label rather than the client domain. */}
                    <span className="wk-frame-address">Service Business Website System</span>
                  </div>
                  <span className="wk-frame-line" aria-hidden="true" />

                  {desktop ? (
                    <div className="wk-shot">
                      <Image
                        src={desktop.src}
                        alt={desktop.alt}
                        width={desktop.width}
                        height={desktop.height}
                        priority
                        sizes="(max-width: 760px) 92vw, (max-width: 1120px) 700px, 680px"
                      />
                    </div>
                  ) : (
                    /* Fallback until a verified capture exists. */
                    <div className="wk-shot wk-shot-pending">
                      <p className="wk-pending-label">
                        Structure diagram: verified screenshot pending
                      </p>
                      <ol className="wk-diagram">
                        {buildLayers.map((layer, index) => (
                          <li key={layer.name}>
                            <span className="wk-layer-index" aria-hidden="true">0{index + 1}</span>
                            <span className="wk-layer-name">{layer.name}</span>
                            <span className="wk-layer-note">{layer.note}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                {mobile ? (
                  <div className="wk-device">
                    <Image
                      src={mobile.src}
                      alt={mobile.alt}
                      width={mobile.width}
                      height={mobile.height}
                      sizes="(max-width: 760px) 34vw, 186px"
                    />
                  </div>
                ) : null}
              </div>

              <figcaption>
                {desktop
                  ? "A screen from the delivered website system."
                  : "Build structure: the website architecture, SEO foundations and conversion paths delivered for this project. Drawn in code, not a capture of a live site."}
              </figcaption>
            </figure>
          </div>

          <div className="wk-case-narrative">
            <section className="wk-challenge" aria-labelledby="wk-challenge-heading">
              <div className="phase-reveal" data-reveal="">
                <p className="scene-label"><span>02</span> The challenge</p>
                <h3 id="wk-challenge-heading">
                  The challenge was bigger than making the website look better.
                </h3>
                <div className="wk-challenge-copy">
                  <p>
                    This was a working service business with real demand. The
                    question was never whether the work was good. It was whether
                    the website made it easy for the right customer to
                    understand the services, choose the right one and get in
                    touch.
                  </p>
                  <p>
                    So the brief was structural rather than cosmetic: organise
                    the services clearly, align each page with the search intent
                    behind it, strengthen the local SEO structure, give every
                    page one obvious next step, and prepare the site so that
                    future acquisition campaigns, organic or paid,
                    have something solid to land on.
                  </p>
                </div>
              </div>

              <dl className="wk-needs">
                {needs.map((need) => (
                  <div className="wk-need" data-reveal="" key={need.term}>
                    <dt>
                      <span className="wk-need-node" aria-hidden="true" />
                      {need.term}
                    </dt>
                    <dd>{need.detail}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
