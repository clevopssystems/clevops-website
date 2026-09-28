import type { Metadata } from "next";
import { ProjectLink } from "../components/project-link";
import { stages as heroStages } from "../components/process-page-hero";
import { stages as overviewStages } from "../components/process-overview";
import { learned, reviewed, decisions, built, checks } from "../components/process-stages";
import { launch, optimize, needs, communication, timelines } from "../components/process-delivery";
import { Check } from "../components/home-icons";
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
  SplitScene,
  Steps,
  UiPage,
} from "../components/ui";
import "../components/phase-seven.css";
import "../components/site-ui.css";

const title = "Our Process | Strategy, Build, Launch & Growth | ClevOps";
const description =
  "See how ClevOps takes projects from discovery and strategy through build, launch, tracking and ongoing optimization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: {
    title,
    description,
    url: "/process",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

export default function ProcessPage() {
  return (
    <UiPage
      hero={
        <PageHero
          id="pr-hero-heading"
          media="field"
          label="The ClevOps Process"
          title={<>A clear process from first enquiry <span className="ui-dim">to launch.</span></>}
          description={
            <>
              We keep strategy, execution, tracking and optimization connected so
              you always know what is being built, why it matters and what
              happens next.
            </>
          }
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="#the-process" variant="ghost">See the Process</ArrowLink>
            </>
          }
          aside={
            <PanelList
              title="Six stages"
              sub="Grouped by where you are in the engagement"
              label="The six stages"
              items={heroStages.map((stage) => ({ name: stage.name, href: stage.href, group: stage.phase }))}
            />
          }
        />
      }
    >
      <Section tone="light" id="the-process" labelledBy="pr-overview-heading">
        <SectionHead
          id="pr-overview-heading"
          label="The full process"
          title={<>Six stages, <span className="ui-dim">start to finish.</span></>}
          aside={
            <p>
              Every engagement runs through the same six stages. Scope changes
              what happens inside them, it does not change the order.
            </p>
          }
        />
        <Steps
          label="The six stages of a ClevOps engagement"
          items={overviewStages.map((stage) => ({ name: stage.name, detail: stage.note, href: stage.href }))}
        />
      </Section>

      <SplitScene
        id="discovery"
        tone="grey"
        index="01"
        label="Discovery"
        title={<>Start with the business, <span className="ui-dim">not the tools.</span></>}
        lead={
          <>
            Discovery is about how your business wins work today, not
            about what we could build.
          </>
        }
        note="Until we understand where opportunities are actually being lost, anything we build is a guess."
        listHeading="What we learn"
        rows={learned}
      />

      <SplitScene
        id="audit-strategy"
        tone="light"
        index="02"
        label="Audit & Strategy"
        title={<>Find the bottleneck before <span className="ui-dim">building the solution.</span></>}
        lead="We review what already exists before proposing anything new."
        note="We would rather scope less and fix the thing that is costing you work than sell every service at once."
        listHeading="What we review"
        rows={reviewed}
      >
        <div className="ui-mt">
          <p className="ui-list-heading phase-reveal" data-reveal="">The strategy then says three things</p>
          <Cells
            cols={3}
            label="The strategy then says three things"
            items={decisions.map((item) => ({ kicker: "Decision", title: item.term, body: item.detail }))}
          />
        </div>
      </SplitScene>

      <Section tone="grey" id="build" labelledBy="pr-build-heading">
        <SectionHead
          id="pr-build-heading"
          index="03"
          label="Build"
          title={<>Build the pieces that <span className="ui-dim">actually matter.</span></>}
          aside={
            <p>
              The build follows the strategy. Depending on scope it may include
              some of the following, rarely all of it, and never all at once.
            </p>
          }
        />
        <Rows grid numbered items={built.map((item) => ({ term: item.name, detail: item.note }))} label="What a build may include" />
        <Note>
          Not every project includes everything on this list. What gets built is
          decided in strategy, and anything that does not serve the bottleneck
          waits until it does.
        </Note>
      </Section>

      <Section tone="ink" id="connect-test" labelledBy="pr-connect-heading">
        <SectionHead
          id="pr-connect-heading"
          index="04"
          label="Connect & Test"
          title={<>Before traffic arrives, <span className="ui-dim">the system should work.</span></>}
          sub={
            <>
              A lead system fails quietly. A form that does not deliver, an alert
              nobody receives, a booking link that breaks on a phone: none
              of it announces itself. It just costs you work. So the whole path
              gets walked before a real enquiry ever uses it.
            </>
          }
        />
        <Cells
          cols={4}
          variant="glass"
          label="What is checked before launch"
          items={checks.map((item, position) => ({
            kicker: `Check · ${String(position + 1).padStart(2, "0")}`,
            title: item.name,
            body: item.note,
          }))}
        />
        <Note>
          These are checks, not guarantees. We walk the path a real lead takes
          and fix what breaks while it is still a test.
        </Note>
      </Section>

      <SplitScene
        id="launch"
        tone="light"
        index="05"
        label="Launch"
        title={<>Launch with <span className="ui-dim">visibility.</span></>}
        lead="Going live is a moment to watch closely, not to walk away from."
        note="Launch is a starting point, not a finish line. Early issues are normal; catching them quickly is the job."
        listHeading="What happens at launch"
        rows={launch}
      />

      <SplitScene
        id="optimize"
        tone="grey"
        index="06"
        label="Optimize & Scale"
        title={<>Improve based on what <span className="ui-dim">actually happens.</span></>}
        lead="Once real leads are moving through the system, it tells you what to fix next."
        note={<>Changes are made because something in the data points to them, not to look busy.</>}
        listHeading="What gets improved"
        rows={optimize}
      />

      <Section tone="light" id="working-together" labelledBy="pr-needs-heading">
        <div className="ui-two ui-two-wide">
          <div>
            <SectionHead
              id="pr-needs-heading"
              index="07"
              label="Working together"
              title={<>What we need <span className="ui-dim">from you.</span></>}
              sub="Most of the work is ours. These are the few things that keep it moving."
            />
            <Rows items={needs} />
          </div>
          <div className="ui-card ui-card-dark phase-reveal" data-reveal="">
            <h3 className="pr2-comms-heading" id="pr-comms-heading">
              No guessing where the project stands.
            </h3>
            <ul className="ui-checks pr2-comms" aria-labelledby="pr-comms-heading">
              {communication.map((item) => (
                <li key={item}><span className="ui-check"><Check size={12} /></span>{item}</li>
              ))}
            </ul>
            <p className="ui-note">
              How often we check in is agreed with the scope, so it fits the
              project rather than a template.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="grey" id="timelines" labelledBy="pr-timelines-heading">
        <SectionHead
          id="pr-timelines-heading"
          index="08"
          label="Timelines"
          title={<>Timelines depend <span className="ui-dim">on scope.</span></>}
          aside={
            <p>
              We will not quote a delivery date before we understand the work.
              What we can tell you is how the shapes of these projects differ.
            </p>
          }
        />
        <Cells
          cols={3}
          label="How project timelines differ"
          items={timelines.map((item, position) => ({
            kicker: `Project type · 0${position + 1}`,
            title: item.term,
            body: item.detail,
          }))}
          statement={
            <>
              You get a timeline for your scope once we have seen what is involved,
              <span>not a fixed number of days chosen before anyone looked.</span>
            </>
          }
        />
      </Section>

      <ClosingCta
        title={<>Know what happens next <span className="ui-dim">before we start.</span></>}
        support={
          <>
            Send us the details of your current setup. We&rsquo;ll identify the
            bottleneck and outline the most sensible next step.
          </>
        }
      />
    </UiPage>
  );
}
