import { ProjectLink } from "./project-link";
import { HeroVideo } from "./hero-video";
import { ArrowDown, Automation, Megaphone, Monitor } from "./home-icons";

const steps = [
  { name: "Traffic", detail: "Google, Meta & organic search" },
  { name: "Capture", detail: "Websites & landing pages" },
  { name: "Qualify", detail: "The right leads, identified" },
  { name: "Follow Up", detail: "Timely SMS & email sequences" },
  { name: "Book", detail: "Appointments in your pipeline" },
];

const pillars = [
  { name: "Websites & SEO", Icon: Monitor },
  { name: "Google & Meta Ads", Icon: Megaphone },
  { name: "Automated follow-up", Icon: Automation },
];

const services = ["Website Design", "Web Development", "SEO", "Google Ads", "Meta Ads", "Automation"];

/**
 * The homepage hero: footage behind a dark scrim, the promise on the left and
 * the lead-to-booking system on a glass panel to the right. The panel reads
 * like a form on purpose, one ruled row per step, but it is a description
 * of the system, not an input.
 */
export function HomeHero() {
  return (
    <>
      <section className="hm-hero" aria-labelledby="hm-hero-heading">
        <HeroVideo className="hm-hero-video" />
        <span className="hm-hero-scrim" aria-hidden="true" />

        <div className="container hm-hero-grid">
          <div className="hm-hero-copy">
            <p className="hm-badge">
              <span className="hm-badge-dot" aria-hidden="true" />
              From click to booked call
              <span className="hm-badge-rule" aria-hidden="true" />
              <span className="hm-badge-soft">Lead generation &amp; conversion systems</span>
            </p>

            <h1 id="hm-hero-heading">
              Turn More Traffic Into <span className="hm-dim">Qualified,</span> Booked
              Appointments.
            </h1>

            <p className="hm-hero-description">
              We build websites, run Google and Meta campaigns, and create
              automated lead systems that capture, qualify, follow up with and
              book your prospects.
            </p>

            <ul className="hm-pillars" aria-label="What we connect">
              {pillars.map(({ name, Icon }) => (
                <li key={name}>
                  <span className="hm-pillar-icon"><Icon size={16} /></span>
                  {name}
                </li>
              ))}
            </ul>

            <div className="hm-actions">
              <ProjectLink source="hero" />
              <a className="button hm-btn-ghost" href="#our-system">
                See How It Works
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          <figure className="hm-panel hm-hero-panel">
            <figcaption>
              <span className="hm-panel-title">Your lead-to-booking system</span>
              <span className="hm-panel-sub">One connected process &middot; five steps</span>
            </figcaption>
            <ol className="hm-panel-rows">
              {steps.map((step, index) => (
                <li key={step.name} data-last={index === steps.length - 1}>
                  <span className="hm-panel-index" aria-hidden="true">0{index + 1}</span>
                  <span className="hm-panel-name">{step.name}</span>
                  <span className="hm-panel-detail">{step.detail}</span>
                </li>
              ))}
            </ol>
            <div className="hm-panel-action">
              <ProjectLink source="hero" />
            </div>
            <p className="hm-panel-note">No pressure &middot; A clear look at your lead flow</p>
          </figure>
        </div>
      </section>

      <section className="hm-strip" aria-labelledby="hm-strip-heading">
        <div className="container">
          <h2 className="hm-strip-label" id="hm-strip-heading">One connected growth system</h2>
        </div>
        {/* Full-bleed marquee: two identical halves, so translating by -50% loops seamlessly. */}
        <div className="hm-strip-marquee">
          <div className="hm-strip-track">
            {[0, 1].map((copy) => (
              <ul className="hm-strip-list" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {[...services, ...services].map((service, index) => <li key={`${service}-${index}`}>{service}</li>)}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
