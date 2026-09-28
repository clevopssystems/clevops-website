import { ProjectLink } from "./project-link";
import { ArrowRight } from "./home-icons";

const steps = [
  {
    name: "Discovery",
    copy: "We understand how your business currently attracts, handles and converts opportunities.",
    focus: ["Lead flow", "Sales process"],
  },
  {
    name: "Strategy & Build",
    copy: "We design the acquisition and conversion system around the way your business actually sells.",
    focus: ["Funnel design", "CRM setup"],
  },
  {
    name: "Launch & Connect",
    copy: "We connect the pieces, test the flow and launch the system as one working process.",
    focus: ["Lead routing", "Booking"],
  },
  {
    name: "Optimize & Scale",
    copy: "We improve what is producing quality opportunities and remove friction from what is not.",
    focus: ["Lead quality", "SEO growth"],
  },
];

export function HomeProcess() {
  return (
    <section className="hm-process" id="process" aria-labelledby="hm-process-heading" tabIndex={-1}>
      <div className="container">
        <div className="hm-head phase-reveal" data-reveal="">
          <p className="hm-label hm-label-dark">Process</p>
          <h2 id="hm-process-heading">
            A clear process from first enquiry <span className="hm-dim">to launch.</span>
          </h2>
          <p className="hm-head-sub">
            We keep strategy, execution, tracking and optimization connected so
            you always know what is being built and why.
          </p>
        </div>

        <ol className="hm-steps" aria-label="The four stages of working with ClevOps">
          {steps.map((step, index) => (
            <li className="hm-step phase-reveal" data-reveal="" key={step.name}>
              <span className="hm-step-node">0{index + 1}</span>
              <h3>{step.name}</h3>
              <p>{step.copy}</p>
              <ul className="hm-step-focus">
                {step.focus.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <div className="hm-process-cta phase-reveal" data-reveal="">
          <div>
            <p className="hm-process-cta-title">
              Start with <span className="hm-dim">your project.</span>
            </p>
            <p className="hm-process-cta-note">
              Tell us what you&rsquo;re trying to improve and we&rsquo;ll help
              identify the most sensible next step.
            </p>
          </div>
          <div className="hm-actions">
            <ProjectLink source="process" />
            <a className="button hm-btn-ghost" href="#work">
              See Our Work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
