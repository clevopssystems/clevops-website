import type { Metadata } from "next";
import { ProjectLink } from "../components/project-link";
import { ProblemGrid, ServiceCards } from "../components/services-hub";
import {
  ArrowLink,
  ClosingCta,
  InlineCta,
  PageHero,
  Section,
  SectionHead,
  UiPage,
} from "../components/ui";
import "../components/phase-seven.css";
import "../components/site-ui.css";
import "../components/services-hub.css";

const title = "Digital Marketing & Lead Generation Services | ClevOps";
const description =
  "Explore ClevOps services including lead generation systems, website development, SEO, Google Ads and Meta Ads, built to work together around one growth strategy.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  return (
    <UiPage
      hero={
        <PageHero
          id="sv-hero-heading"
          label="ClevOps Services"
          title={<>Everything your growth system needs, <span className="ui-dim">connected.</span></>}
          description={
            <>
              From websites and search to paid media and lead automation, ClevOps
              brings the pieces together around one clear goal: turning attention
              into qualified opportunities.
            </>
          }
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="#service-index" variant="ghost">Explore Services</ArrowLink>
            </>
          }
        />
      }
    >
      <Section tone="light" id="service-index" labelledBy="sv-index-heading">
        <SectionHead
          id="sv-index-heading"
          label="Our services"
          title={<>Five services. <span className="ui-dim">One objective.</span></>}
          aside={
            <p>
              Each one can stand on its own. Together they form the system that
              takes a stranger from first attention to a conversation with your
              business.
            </p>
          }
        />
        <ServiceCards />
      </Section>

      <Section tone="grey" id="where-to-start" labelledBy="sv-start-heading">
        <SectionHead
          id="sv-start-heading"
          label="Where&rsquo;s your bottleneck?"
          title={<>Common growth problems, <span className="ui-dim">and what fixes them.</span></>}
          aside={
            <p>
              Most businesses already know which of these describes them.
              Whichever one it is, that is the right place to begin.
            </p>
          }
        />
        <ProblemGrid />
        <InlineCta
          title={<>Still not sure <span className="ui-dim">where to start?</span></>}
          note="Tell us where things stand and we'll suggest the highest-leverage place to begin."
        />
      </Section>

      <ClosingCta
        title={<>Not sure which service you <span className="ui-dim">actually need?</span></>}
        support={
          <>
            Tell us about your current website, traffic, lead flow and sales
            process, and we&rsquo;ll identify the highest-leverage place to start.
          </>
        }
      />
    </UiPage>
  );
}
