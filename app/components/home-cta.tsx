import { ProjectLink } from "./project-link";
import { HeroVideo } from "./hero-video";
import { ArrowRight } from "./home-icons";

const brief = [
  { name: "Your business", detail: "What you sell and who to" },
  { name: "What you need help with", detail: "Website, search, ads or follow-up" },
  { name: "Where things stand today", detail: "What exists and what isn't working" },
  { name: "What you want to improve", detail: "The outcome you are after" },
];

/**
 * The closing scene bookends the hero: the same footage under a deeper scrim,
 * the ask on the left and what an enquiry covers on a glass panel to the right.
 * It owns #start, which the footer's Contact link resolves to.
 */
export function HomeCta() {
  return (
    <section className="hm-cta" id="start" aria-labelledby="hm-cta-heading" tabIndex={-1}>
      <HeroVideo className="hm-hero-video" />
      <span className="hm-cta-scrim" aria-hidden="true" />

      <div className="container hm-cta-grid">
        <div className="hm-cta-copy phase-reveal" data-reveal="">
          <p className="hm-label hm-label-dark">Ready when you are</p>
          <h2 id="hm-cta-heading">
            Build a better system for turning attention into{" "}
            <span className="hm-dim">appointments.</span>
          </h2>
          <p className="hm-cta-support">
            We&rsquo;ll look at how you currently generate, handle and convert
            leads, then show you where the biggest opportunities are.
          </p>
          <div className="hm-actions">
            <a className="button hm-btn-ghost" href="#work">
              See Our Work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hm-panel hm-cta-panel phase-reveal" data-reveal="">
          <h3 className="hm-panel-title">Start a project</h3>
          <p className="hm-panel-sub">What the enquiry covers</p>
          <ol className="hm-panel-rows">
            {brief.map((item, index) => (
              <li key={item.name}>
                <span className="hm-panel-index" aria-hidden="true">0{index + 1}</span>
                <span className="hm-panel-name">{item.name}</span>
                <span className="hm-panel-detail">{item.detail}</span>
              </li>
            ))}
          </ol>
          <div className="hm-panel-action">
            <ProjectLink source="final-cta" />
          </div>
          <p className="hm-panel-note">
            Tell us what you&rsquo;re trying to improve and we&rsquo;ll help
            identify the most sensible next step.
          </p>
        </div>
      </div>
    </section>
  );
}
