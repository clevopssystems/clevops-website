import type { Metadata } from "next";
import { ProjectLink } from "../components/project-link";
import { spine } from "../components/system-page-hero";
import { moments, breakdowns } from "../components/system-breakdown";
import { layers, pipeline } from "../components/system-depth";
import { variables, conditions, examples } from "../components/system-fit";
import {
  ArrowLink,
  Cells,
  ClosingCta,
  Note,
  PageHero,
  PanelList,
  Rows,
  Section,
  SectionHead,
  Steps,
  UiPage,
} from "../components/ui";
import "../components/phase-seven.css";
import "../components/site-ui.css";

const title = "Lead Generation & Appointment Booking System | ClevOps";
const description =
  "ClevOps connects paid traffic, landing pages, lead qualification, CRM automation, follow-up and appointment booking into one complete lead generation system.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/our-system" },
  openGraph: {
    title,
    description,
    url: "/our-system",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

/** Kept here rather than imported: system-stages.tsx is a client module. */
const stages = [
  {
    name: "Traffic",
    lead: "Google Ads, Meta Ads and SEO create demand.",
    keys: ["Paid search", "Paid social", "Organic"],
  },
  {
    name: "Capture",
    lead: "Focused landing pages and websites convert interest into enquiries.",
    keys: ["Landing pages", "Offer clarity", "Forms"],
  },
  {
    name: "Qualify",
    lead: "Forms, routing logic and CRM workflows identify the best opportunities.",
    keys: ["Form logic", "Routing", "Criteria"],
  },
  {
    name: "Follow Up",
    lead: "SMS and email workflows respond quickly and continue nurturing.",
    keys: ["Instant reply", "Sequences", "Reminders"],
  },
  {
    name: "Book",
    lead: "Qualified prospects move directly into the booking process.",
    keys: ["Calendar", "Confirmations", "Reminders"],
  },
  {
    name: "Track",
    lead: "Every lead enters a pipeline so progress and outcomes can be monitored.",
    keys: ["Source", "Pipeline", "Outcomes"],
  },
];

export default function OurSystemPage() {
  return (
    <UiPage
      hero={
        <PageHero
          id="os-hero-heading"
          label="The ClevOps System"
          title={<>From first click to <span className="ui-dim">qualified booked conversation.</span></>}
          description={
            <>
              ClevOps connects traffic, conversion, qualification, follow-up and
              booking into one system, so leads do not disappear between an
              enquiry and a sales conversation.
            </>
          }
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="#the-system" variant="ghost">See the System</ArrowLink>
            </>
          }
          aside={
            <PanelList
              title="The path a lead travels"
              sub="Six connected stages"
              items={spine.map((stage) => ({ name: stage.name, detail: stage.role }))}
            />
          }
        />
      }
    >
      <Section tone="light" labelledBy="os-breakdown-heading">
        <SectionHead
          id="os-breakdown-heading"
          index="01"
          label="Where it breaks"
          title={<>Generating the lead is not the hard part. <span className="ui-dim">Managing what happens next is.</span></>}
          aside={
            <>
              <p>
                Most businesses invest in the top of the process. More traffic,
                more campaigns, more enquiries. That part is well understood, and
                it is usually not where the money is lost.
              </p>
              <p>
                The loss happens quietly, in the hours after an enquiry arrives,
                when responding depends on someone being free, remembering, and
                having the full picture in front of them.
              </p>
            </>
          }
        />
        <p className="ui-list-heading phase-reveal" data-reveal="">What an unmanaged enquiry looks like over time</p>
        <Steps
          label="What an unmanaged enquiry looks like over time"
          items={moments.map((moment) => ({ name: moment.state, kicker: moment.time }))}
        />
      </Section>

      <Section tone="grey" labelledBy="os-seven-heading">
        <SectionHead
          id="os-seven-heading"
          label="Where it breaks"
          title={<>The seven places it usually <span className="ui-dim">goes wrong.</span></>}
        />
        <Cells
          cols={4}
          label="The seven places it usually goes wrong"
          items={breakdowns.map((item, index) => ({
            kicker: `Breakdown · 0${index + 1}`,
            title: item.term,
            body: item.detail,
          }))}
          statement={<>None of this is a traffic problem. <span>It is a system problem.</span></>}
        />
      </Section>

      <Section tone="ink" id="the-system" labelledBy="os-system-heading">
        <SectionHead
          id="os-system-heading"
          index="02"
          label="The complete system"
          title={<>Six connected stages, <span className="ui-dim">one continuous path.</span></>}
          sub={
            <>
              Each stage hands the lead to the next one deliberately. Nothing
              waits on someone noticing an email, and no step depends on a
              handover that might not happen.
            </>
          }
        />
        <Steps
          label="The six stages of the ClevOps system"
          items={stages.map((stage) => ({ name: stage.name, detail: stage.lead, tags: stage.keys }))}
        />
        <Note>
          One process, end to end, not a collection of tools that happen to
          be running at the same time.
        </Note>
      </Section>

      <Section tone="light" labelledBy="os-depth-heading">
        <SectionHead
          id="os-depth-heading"
          index="03"
          label="Inside each stage"
          title={<>What each stage <span className="ui-dim">actually involves.</span></>}
          aside={
            <p>
              The same six stages, in detail. This is the part that decides
              whether the system is something your business runs on, or
              something it works around.
            </p>
          }
        />
        <div className="os2-layers">
          {layers.map((layer) => (
            <article className="ui-card os2-layer phase-reveal" data-reveal="" key={layer.name} aria-labelledby={`os2-layer-${layer.index}`}>
              <div className="os2-layer-head">
                <span className="ui-kicker">Stage · {layer.index}</span>
                <h3 id={`os2-layer-${layer.index}`}>{layer.name}</h3>
                <p className="os2-layer-headline">{layer.headline}</p>
                {layer.body.map((paragraph) => (
                  <p className="ui-card-lead" key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
              <div>
                <p className="ui-list-heading">{layer.listHeading}</p>
                <Rows items={layer.items.map((item) => ({ term: item.term, detail: item.detail }))} />
                {layer.diagram && (
                  <figure className="ui-pipeline">
                    <figcaption className="ui-kicker">Diagram: pipeline structure, not live data</figcaption>
                    <ol>
                      {pipeline.map((stage) => <li key={stage}><span>{stage}</span></li>)}
                    </ol>
                  </figure>
                )}
                {layer.note && <p className="ui-note">{layer.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="grey" labelledBy="os-tailoring-heading">
        <SectionHead
          id="os-tailoring-heading"
          index="04"
          label="Built around the business"
          title={<>Your business should define the system, <span className="ui-dim">not the software.</span></>}
          aside={
            <p>
              Template automation works by making every client fit the same
              funnel. It is quick to deploy and it is why so many of those
              builds are quietly abandoned a few months later.
            </p>
          }
        />
        <Cells
          cols={4}
          label="What changes from one build to the next"
          items={variables.map((item, index) => ({
            kicker: `Variable · 0${index + 1}`,
            title: item.term,
            body: item.detail,
          }))}
          statement={
            <>
              We start from how your business already sells, then decide what
              should be automated, what should stay with a person, and{" "}
              <span>what does not need to exist at all.</span>
            </>
          }
        />
      </Section>

      <Section tone="dark" labelledBy="os-audience-heading">
        <div className="ui-two ui-two-wide">
          <div className="phase-reveal" data-reveal="">
            <SectionHead
              id="os-audience-heading"
              index="05"
              label="Who this is for"
              title={<>Where a system like this <span className="ui-dim">earns its place.</span></>}
              sub={
                <>
                  It suits service businesses with a few things in common. If none
                  of them describe your business, a system of this size is
                  probably more than you need right now.
                </>
              }
            />
            <p className="ui-list-heading">Often</p>
            <ul className="ui-tags">
              {examples.map((example) => <li key={example}>{example}</li>)}
            </ul>
            <p className="ui-note">
              These are the businesses we work with most, not the only ones the
              system fits. The conditions matter more than the trade.
            </p>
          </div>
          <Cells
            cols={2}
            variant="dark"
            label="Conditions where the system fits"
            items={conditions.map((item, index) => ({
              kicker: `Condition · 0${index + 1}`,
              title: item.term,
              body: item.detail,
            }))}
          />
        </div>
      </Section>

      <ClosingCta
        title={<>Build the system behind <span className="ui-dim">your leads.</span></>}
        support={
          <>
            Tell us how leads currently enter your business and what happens
            after they enquire, and we&rsquo;ll show you where opportunities are
            being lost.
          </>
        }
      />
    </UiPage>
  );
}
