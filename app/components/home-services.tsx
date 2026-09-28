import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Funnel, Megaphone, Monitor, Search, Target } from "./home-icons";

/**
 * Service cards. Lead Generation keeps its code-drawn pipeline; the other
 * services use the artwork in public/services.
 */

const pipeline = ["Attract", "Capture", "Qualify", "Follow Up", "Book", "Track"];

function PipelineVisual() {
  return (
    <div className="hm-vis hm-vis-pipeline">
      <ol>
        {pipeline.map((stage, index) => (
          <li key={stage} data-accent={index === pipeline.length - 2}>
            <span className="hm-vis-node" />
            <span className="hm-vis-label">{stage}</span>
          </li>
        ))}
      </ol>
      <div className="hm-vis-lead">
        <span className="hm-vis-avatar" />
        <span className="hm-vis-bars"><span /><span /></span>
        <span className="hm-vis-pill">Booked</span>
      </div>
    </div>
  );
}

function ServicePhoto({ src }: { src: string }) {
  return (
    <Image
      className="hm-card-photo"
      src={src}
      alt=""
      fill
      sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 400px"
    />
  );
}

type Service = {
  name: string;
  href: string;
  icon: ReactNode;
  visual: ReactNode;
  copy: string;
  tags: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    name: "Lead Generation Systems",
    href: "/services/lead-generation-systems",
    icon: <Funnel />,
    visual: <PipelineVisual />,
    copy:
      "More than ads. A complete lead-to-booking system: paid acquisition, focused landing pages, qualification, CRM workflows, automated follow-up and booking in one connected process.",
    tags: [
      "Google & Meta advertising",
      "Landing pages & funnels",
      "Lead capture",
      "Qualification logic",
      "CRM workflows",
      "SMS & email follow-up",
      "Booking automation",
      "Pipeline tracking",
    ],
    featured: true,
  },
  {
    name: "Website Development",
    href: "/services/website-development",
    icon: <Monitor />,
    visual: <ServicePhoto src="/services/web-dev.png" />,
    copy: "Fast, conversion-focused websites built around the action you want customers to take.",
    tags: ["Strategy", "UX", "Development", "SEO foundations", "Tracking", "Lead capture"],
  },
  {
    name: "SEO",
    href: "/services/seo",
    icon: <Search />,
    visual: <ServicePhoto src="/services/Seo.png" />,
    copy: "Build compounding organic visibility around the searches that matter to your business.",
    tags: ["Technical SEO", "On-page SEO", "Local SEO", "Content strategy", "Authority building"],
  },
  {
    name: "Google Ads",
    href: "/services/google-ads",
    icon: <Target />,
    visual: <ServicePhoto src="/services/Google-ads.png" />,
    copy: "Reaching people already looking for what you sell, and making sure the page they land on answers the search that brought them.",
    tags: ["Keyword strategy", "Campaign structure", "Landing-page alignment", "Conversion tracking"],
  },
  {
    name: "Meta Ads",
    href: "/services/meta-ads",
    icon: <Megaphone />,
    visual: <ServicePhoto src="/services/meta-ads.png" />,
    copy: "Creating interest before the search happens, with an offer and a message aimed at an audience that was not looking for you yet.",
    tags: ["Audience strategy", "Offer positioning", "Creative & messaging", "Follow-up connection"],
  },
];

export function HomeServices() {
  return (
    <section className="hm-section hm-services" id="services" aria-labelledby="hm-services-heading" tabIndex={-1}>
      <div className="container">
        <div className="hm-head hm-head-split phase-reveal" data-reveal="">
          <div>
            <p className="hm-label">Services</p>
            <h2 id="hm-services-heading">
              Everything your growth system <span className="hm-dim">needs.</span>
            </h2>
          </div>
          <p className="hm-head-aside">
            ClevOps brings together the pieces that usually sit across different
            agencies, tools and teams, so acquisition, conversion and
            follow-up work as one system.
          </p>
        </div>

        <div className="hm-card-grid">
          {services.map((service, index) => (
            <article
              className={`hm-card phase-reveal${index < 2 ? " hm-card-top" : ""}${service.featured ? " hm-card-featured" : ""}`}
              data-reveal=""
              key={service.name}
            >
              <div className="hm-card-visual" aria-hidden="true">
                <span className="hm-chip">0{index + 1}</span>
                <span className="hm-card-arrow"><ArrowRight size={16} /></span>
                {service.visual}
              </div>
              <div className="hm-card-body">
                <span className="hm-card-icon">{service.icon}</span>
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
                <ul className="hm-tags" aria-label={`${service.name} includes`}>
                  {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <a className="hm-card-link" href={service.href}>
                  Explore service
                  <span className="visually-hidden">: {service.name}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
