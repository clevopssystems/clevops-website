import Image from "next/image";
import Link from "next/link";
import { ProjectLink } from "./project-link";
import { getCaseAssets } from "./case-assets";
import { ArrowRight, Check } from "./home-icons";

/**
 * One delivered build, described by industry and scope rather than by name,
 * and one honest slot for the work still being documented. The plate reads
 * the same case-assets switch as /work, so a verified capture replaces the
 * structure diagram on both pages at once.
 */
const delivered = [
  "Website architecture",
  "Conversion-focused service pages",
  "Local SEO foundations",
  "Technical SEO",
  "Content structure",
  "Lead capture",
  "Tracking foundations",
];

const buildLayers = [
  { name: "Architecture", note: "Service structure and page hierarchy" },
  { name: "Service pages", note: "One clear action per page" },
  { name: "Local SEO", note: "Service-area relevance" },
  { name: "Technical SEO", note: "Crawlable, fast foundations" },
  { name: "Conversion paths", note: "Enquiry and contact routes" },
  { name: "Tracking", note: "Groundwork for paid campaigns" },
];

export function HomeWork() {
  const { desktop } = getCaseAssets();

  return (
    <section className="hm-section hm-work" id="work" aria-labelledby="hm-work-heading" tabIndex={-1}>
      <div className="container">
        <div className="hm-head hm-head-row phase-reveal" data-reveal="">
          <div>
            <p className="hm-label">Selected build</p>
            <h2 id="hm-work-heading">
              Built for real <span className="hm-dim">businesses.</span>
            </h2>
            <p className="hm-head-sub">
              We design and build around the way a business actually acquires,
              handles and converts opportunities.
            </p>
          </div>
          <Link className="button hm-btn-outline" href="/work">
            View all work
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="hm-work-grid">
          <article className="hm-case phase-reveal" data-reveal="" aria-labelledby="hm-case-heading">
            <figure className="hm-case-plate">
              <div className="hm-case-frame">
                <div className="hm-case-bar">
                  <span className="hm-case-dots" aria-hidden="true"><span /><span /><span /></span>
                  <span className="hm-case-address">Service Business Website System</span>
                </div>
                {desktop ? (
                  <div className="hm-case-shot">
                    <Image
                      src={desktop.src}
                      alt={desktop.alt}
                      width={desktop.width}
                      height={desktop.height}
                      sizes="(max-width: 760px) 92vw, (max-width: 1120px) 90vw, 800px"
                    />
                  </div>
                ) : (
                  <div className="hm-case-shot hm-case-pending">
                    <p className="hm-case-pending-label">Structure diagram: verified screenshot pending</p>
                    <ol className="hm-case-diagram">
                      {buildLayers.map((layer, index) => (
                        <li key={layer.name}>
                          <span aria-hidden="true">0{index + 1}</span>
                          <strong>{layer.name}</strong>
                          <em>{layer.note}</em>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
              <figcaption className="visually-hidden">
                {desktop
                  ? "A screen from the delivered website system."
                  : "Build structure drawn in code, not a capture of a live site."}
              </figcaption>
            </figure>
            <div className="hm-case-body">
              <p className="hm-caps">Website Development + SEO Foundations + Conversion Architecture</p>
              <h3 id="hm-case-heading">
                Building a stronger digital foundation for a <span className="hm-dim">service business.</span>
              </h3>
              <p>
                A recent client implementation where ClevOps rebuilt the website
                structure around clearer service architecture, search intent,
                local SEO foundations and stronger conversion paths.
              </p>
            </div>
          </article>

          <div className="hm-work-side">
            <section className="hm-side-card phase-reveal" data-reveal="" aria-labelledby="hm-built-heading">
              <p className="hm-caps">Local Services &middot; Client Implementation</p>
              <h3 id="hm-built-heading">What we built</h3>
              <ul className="hm-checks">
                {delivered.map((item) => (
                  <li key={item}><span className="hm-check"><Check size={12} /></span>{item}</li>
                ))}
              </ul>
            </section>
            <section className="hm-side-card hm-side-reserve phase-reveal" data-reveal="" aria-labelledby="hm-more-heading">
              <h3 id="hm-more-heading">More work is being documented.</h3>
              <p>
                Qualitative outcomes only. We publish performance figures once
                they are measured and verified.
              </p>
            </section>
          </div>
        </div>

        <div className="hm-actions hm-work-actions">
          <ProjectLink source="work" />
          <Link className="button hm-btn-outline" href="/work">
            View the full case study
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
