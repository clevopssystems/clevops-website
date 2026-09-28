import Link from "next/link";
import { ArrowRight } from "./home-icons";

const missedSteps = [
  { name: "Lead generated", detail: "Interest is there." },
  { name: "Waits for response", detail: "Momentum slows." },
  { name: "Missed call", detail: "The connection breaks." },
  { name: "Forgotten follow-up", detail: "The lead goes quiet." },
  { name: "Lost opportunity", detail: "The conversation never starts." },
];

const stages = [
  { name: "Attract", description: "Google Ads, Meta Ads and SEO bring qualified traffic." },
  { name: "Capture", description: "Focused websites and landing pages turn interest into enquiries." },
  { name: "Qualify", description: "Forms, logic and CRM workflows identify the right opportunities." },
  { name: "Follow Up", description: "Automated SMS and email respond quickly and keep leads moving." },
  { name: "Book", description: "Qualified prospects are directed into the booking process." },
  { name: "Track", description: "Each lead enters a clear sales pipeline so progress can be monitored." },
];

/**
 * The problem on the left, the system that answers it on glass tiles to the
 * right. The tiles carry stage names, never figures.
 */
export function HomeSystem() {
  return (
    <section className="hm-system" id="our-system" aria-labelledby="hm-problem-heading" tabIndex={-1}>
      <span className="hm-system-field" aria-hidden="true" />
      <div className="container hm-system-grid">
        <div className="hm-system-copy phase-reveal" data-reveal="">
          <p className="hm-label hm-label-dark">The disconnect</p>
          <h2 id="hm-problem-heading">
            Getting the lead is only <span className="hm-dim">half the job.</span>
          </h2>
          <p className="hm-system-lead">
            Most businesses focus on generating more leads. But much of the
            opportunity is lost after the form is submitted. Slow responses,
            inconsistent follow-up, poor qualification and disconnected tools
            stand between interest and a real sales conversation.
          </p>

          <p className="hm-dash-caption">When the next step is missing</p>
          <ol className="hm-dash-list">
            {missedSteps.map((step) => (
              <li key={step.name}>
                <span className="hm-dash" aria-hidden="true" />
                <span>
                  <strong>{step.name}</strong> {step.detail}
                </span>
              </li>
            ))}
          </ol>

          <p className="hm-system-bridge">
            The gap between enquiry and conversation is where{" "}
            <span>opportunities disappear.</span>
          </p>

          <div className="hm-actions">
            <Link className="button hm-btn-white" href="/our-system">
              Explore Our System
              <ArrowRight size={16} />
            </Link>
            <Link className="button hm-btn-ghost" href="/about">
              About ClevOps
            </Link>
          </div>
        </div>

        <div className="hm-system-side">
          <div className="hm-system-side-head phase-reveal" data-reveal="">
            <h3>The ClevOps System</h3>
            <p>From first click to booked conversation.</p>
          </div>
          <ol className="hm-tiles" aria-label="The six stages of the ClevOps System">
            {stages.map((stage, index) => (
              <li className="hm-tile phase-reveal" data-reveal="" key={stage.name}>
                <span className="hm-tile-index" aria-hidden="true">0{index + 1}</span>
                <h4>{stage.name}</h4>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
          <p className="hm-system-summary">
            Acquisition <span aria-hidden="true">&rarr;</span> Conversion{" "}
            <span aria-hidden="true">&rarr;</span> Sales pipeline &middot; Built around your sales process.
          </p>
        </div>
      </div>
    </section>
  );
}
