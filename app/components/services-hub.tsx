import Image from "next/image";
import type { ReactNode } from "react";
import { services as overview } from "./services-index";
import { startingPoints } from "./services-connection";
import { ArrowRight, Funnel, Megaphone, Monitor, Ruler, Search, Target } from "./home-icons";

/**
 * The /services hub, recomposed on the Leed Agency services layout: photo
 * cards that route to each service page, then a grid of common problems with
 * the service that fixes each one. The long-form detail lives on
 * /services/[slug]; the copy here is imported from the same arrays.
 */

const slugOf = (href: string) => href.replace(/^#/, "");

const pipeline = ["Attract", "Capture", "Qualify", "Follow up", "Book", "Track"];

function PipelineVisual() {
  return (
    <ol className="svh-pipeline">
      {pipeline.map((stage, index) => (
        <li key={stage} data-accent={index === pipeline.length - 2 ? "true" : undefined}>
          <span className="svh-pipeline-node" />
          {stage}
        </li>
      ))}
    </ol>
  );
}

const visuals: Record<string, { icon: ReactNode; photo?: string }> = {
  "lead-generation-systems": { icon: <Funnel /> },
  "website-development": { icon: <Monitor />, photo: "/services/web-dev.png" },
  seo: { icon: <Search />, photo: "/services/Seo.png" },
  "google-ads": { icon: <Target />, photo: "/services/Google-ads.png" },
  "meta-ads": { icon: <Megaphone />, photo: "/services/meta-ads.png" },
};

/** The five services as photo cards. Each card keeps the old section id, so
 *  links such as /services#seo still land on the right service. */
export function ServiceCards() {
  return (
    <ul className="svh-cards" aria-label="The five services">
      {overview.map((service, position) => {
        const slug = slugOf(service.href);
        const visual = visuals[slug];
        const flagship = position === 0;
        return (
          <li
            className={`svh-card phase-reveal${flagship ? " svh-card-flagship" : ""}`}
            data-reveal=""
            id={slug}
            tabIndex={-1}
            key={slug}
          >
            <div className="svh-card-visual" aria-hidden="true">
              <span className="svh-chip">0{position + 1}</span>
              <span className="svh-card-arrow"><ArrowRight size={16} /></span>
              {visual?.photo ? (
                <Image
                  className="svh-card-photo"
                  src={visual.photo}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 92vw, (max-width: 1120px) 46vw, 380px"
                />
              ) : (
                <PipelineVisual />
              )}
            </div>
            <div className="svh-card-body">
              <span className="svh-card-icon">{visual?.icon}</span>
              <p className="ui-kicker svh-card-role">{service.role}</p>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <a className="svh-card-link" href={`/services/${slug}`}>
                Explore service
                <ArrowRight size={14} />
                <span className="visually-hidden">: {service.name}</span>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

const problems = [
  ...startingPoints,
  {
    condition: "If ad spend isn't turning into enquiries",
    detail: "Clicks are paid for but enquiries don't follow. The campaign and the page it lands on get fixed together.",
    service: "Google Ads",
    href: "#google-ads",
  },
  {
    condition: "If you can't tell what's working",
    detail: "Enquiries arrive from somewhere, but nobody can say which channel, campaign or page produced them.",
    service: "Lead Generation System",
    href: "#lead-generation-systems",
  },
];

const problemIcons = [<Monitor key="m" />, <Search key="s" />, <Target key="t" />, <Funnel key="f" />, <Megaphone key="g" />, <Ruler key="r" />];

/** Six common problems on one hairline sheet, each ending in its fix. Built on
 *  the kit's cell classes, with an icon added to the top row. */
export function ProblemGrid() {
  return (
    <ul className="ui-cells svh-problems" data-cols={3} aria-label="Common growth problems">
      {problems.map((problem, index) => (
        <li className="ui-cell phase-reveal" data-reveal="" key={problem.condition}>
          <div className="ui-cell-top">
            <span className="ui-kicker">Problem &middot; 0{index + 1}</span>
            <span className="svh-problem-icon" aria-hidden="true">{problemIcons[index]}</span>
          </div>
          <h3>{problem.condition}</h3>
          <p className="ui-cell-body">{problem.detail}</p>
          <div className="ui-cell-foot">
            <span className="ui-kicker">What you need</span>
            <a className="ui-cell-link" href={`/services/${slugOf(problem.href)}`}>
              {problem.service}
              <span className="ui-round-arrow"><ArrowRight size={16} /></span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
