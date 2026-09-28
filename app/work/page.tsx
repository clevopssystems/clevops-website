import type { Metadata } from "next";
import { ProjectLink } from "../components/project-link";
import { ledger } from "../components/work-page-hero";
import { buildLayers, needs } from "../components/work-featured";
import { delivered, levels, principles } from "../components/work-build";
import { seo, conversion, outcomes } from "../components/work-foundations";
import { Check } from "../components/home-icons";
import {
  ArrowLink,
  CasePlate,
  Cells,
  ClosingCta,
  InlineCta,
  Label,
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

const title = "Web Design, SEO & Growth System Work | ClevOps";
const description =
  "See how ClevOps approaches website development, SEO, conversion architecture and lead infrastructure through a real service-business implementation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title,
    description,
    url: "/work",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

const summary = [
  { label: "Industry", value: "Local Services" },
  { label: "Project type", value: "Client Implementation" },
  { label: "Services", value: "Website Development · SEO Foundations · Conversion Architecture · Lead Infrastructure" },
  { label: "Status", value: "Delivered" },
];

export default function WorkPage() {
  return (
    <UiPage
      hero={
        <PageHero
          id="wk-hero-heading"
          media="field"
          label="Selected work"
          title={<>Work built around <span className="ui-dim">real business problems.</span></>}
          description={
            <>
              We design websites and growth systems around how customers
              discover, evaluate and contact a business, not around what
              looks impressive in a portfolio.
            </>
          }
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="#selected-build" variant="ghost">View Selected Build</ArrowLink>
            </>
          }
          aside={
            <PanelList
              title="Selected build"
              sub="The engagement, not the client"
              items={ledger.map((entry) => ({ name: entry.value, detail: entry.label }))}
            />
          }
        />
      }
    >
      <Section tone="light" id="selected-build" labelledBy="wk-featured-heading">
        <SectionHead
          id="wk-featured-heading"
          index="01"
          label="Selected build"
          title={<>Building a stronger digital foundation for a <span className="ui-dim">service business.</span></>}
          aside={
            <p>
              A recent client implementation where ClevOps rebuilt the website
              structure around clearer service architecture, search intent, local
              SEO foundations and stronger conversion paths.
            </p>
          }
        />
        <CasePlate layers={buildLayers} />

        <div className="ui-two ui-two-wide ui-mt">
          <div className="phase-reveal" data-reveal="">
            <Label index="02">The challenge</Label>
            <h2 className="wk2-challenge-heading" id="wk-challenge-heading">
              The challenge was bigger than making <span className="ui-dim">the website look better.</span>
            </h2>
            <p className="ui-card-lead">
              This was a working service business with real demand. The question
              was never whether the work was good. It was whether the website made
              it easy for the right customer to understand the services, choose
              the right one and get in touch.
            </p>
            <p className="ui-card-lead">
              So the brief was structural rather than cosmetic: organise the
              services clearly, align each page with the search intent behind it,
              strengthen the local SEO structure, give every page one obvious next
              step, and prepare the site so that future acquisition campaigns,
              organic or paid, have something solid to land on.
            </p>
          </div>
          <div className="ui-card phase-reveal" data-reveal="">
            <p className="ui-list-heading">What the site needed</p>
            <Rows items={needs.map((need) => ({ term: need.term, detail: need.detail }))} />
          </div>
        </div>
      </Section>

      <Section tone="grey" labelledBy="wk-build-heading">
        <SectionHead
          id="wk-build-heading"
          index="03"
          label="What we built"
          title={<>The work that was <span className="ui-dim">actually delivered.</span></>}
          aside={
            <p>
              Nine pieces of this build. They are listed plainly because each of
              them is something that exists on the site, not a capability we are
              describing in general.
            </p>
          }
        />
        <Cells
          cols={3}
          label="What was delivered"
          items={delivered.map((item, position) => ({
            kicker: `Delivered · ${String(position + 1).padStart(2, "0")}`,
            title: item.name,
            body: item.note,
          }))}
        />
      </Section>

      <Section tone="ink" id="architecture" labelledBy="wk-arch-heading">
        <SectionHead
          id="wk-arch-heading"
          index="04"
          label="Website architecture"
          title={<>Built around how customers <span className="ui-dim">actually search.</span></>}
          sub={
            <>
              Most small business websites are organised around the business:
              everything the company does, on one page, in the order the owner
              thinks of it. Customers do not arrive that way. They arrive with one
              job in mind, in one place, and they want the page about that job.
            </>
          }
        />
        <p className="ui-list-heading phase-reveal" data-reveal="">
          Diagram: how the service architecture is organised
        </p>
        <Steps
          label="How the service architecture is organised"
          items={levels.map((level) => ({ name: level.name, detail: level.note }))}
        />
        <p className="ui-note">
          Drawn in code to show the structure of the build. Not a screenshot and
          not a page-by-page map of the live site.
        </p>
        <div className="ui-card ui-card-dark ui-mt phase-reveal" data-reveal="">
          <p className="ui-list-heading">Why the structure matters</p>
          <Rows items={principles.map((item) => ({ term: item.term, detail: item.detail }))} />
        </div>
      </Section>

      <Section tone="light" labelledBy="wk-seo-heading">
        <div className="ui-two">
          <article className="ui-card phase-reveal" data-reveal="" id="seo-foundation" aria-labelledby="wk-seo-heading">
            <Label index="05">SEO foundation</Label>
            <h3 id="wk-seo-heading">SEO built into the structure, <span className="ui-dim">not added afterward.</span></h3>
            <p className="ui-card-lead">
              Search work bolted on after a site is finished spends most of its
              budget compensating for decisions already made. On this build the
              structure and the search work were the same job.
            </p>
            <p className="ui-list-heading">What was built in</p>
            <Rows items={seo.map((item) => ({ term: item.term, detail: item.detail }))} />
            <p className="ui-note">
              No ranking claims are made here. Where a site appears depends on
              competition, market and time. What a build controls is the
              structure search engines assess, and that is what was delivered.
            </p>
          </article>
          <article className="ui-card phase-reveal" data-reveal="" id="conversion" aria-labelledby="wk-conversion-heading">
            <Label index="06">Conversion &amp; lead flow</Label>
            <h3 id="wk-conversion-heading">Making the next step <span className="ui-dim">obvious.</span></h3>
            <p className="ui-card-lead">
              Traffic is only useful if the person who arrives knows what to do.
              The site was structured so that the next step is visible from
              wherever a visitor happens to land.
            </p>
            <p className="ui-list-heading">What was built in</p>
            <Rows items={conversion.map((item) => ({ term: item.term, detail: item.detail }))} />
            <p className="ui-note">
              Automated qualification, CRM workflows and follow-up sequences are
              part of the wider ClevOps system. They are not claimed here: this
              project covers the website side of the lead flow and the foundations
              that make the rest possible later.
            </p>
          </article>
        </div>
      </Section>

      <Section tone="dark" labelledBy="wk-growth-heading">
        <div className="ui-two ui-two-wide">
          <SectionHead
            id="wk-growth-heading"
            index="07"
            label="Foundation built for growth"
            title={<>A foundation, <span className="ui-dim">not a finish line.</span></>}
            sub={
              <>
                <p>
                  What changed is structural, and structure is what everything
                  after it stands on. These are the outcomes we can state
                  accurately today.
                </p>
                <p className="ui-note">Performance figures are published only when measured and verified.</p>
              </>
            }
          />
          <ul className="ui-card ui-card-dark ui-checks wk2-outcomes phase-reveal" data-reveal="" aria-label="Qualitative outcomes">
            {outcomes.map((outcome) => (
              <li key={outcome}><span className="ui-check"><Check size={12} /></span>{outcome}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="grey" labelledBy="wk-summary-heading">
        <SectionHead
          id="wk-summary-heading"
          index="08"
          label="Project summary"
          title={<>The project <span className="ui-dim">at a glance.</span></>}
        />
        <dl className="ui-facts phase-reveal" data-reveal="" style={{ "--cols": 4 } as React.CSSProperties}>
          {summary.map((entry) => (
            <div key={entry.label}>
              <dt>{entry.label}</dt>
              <dd>{entry.value}</dd>
            </div>
          ))}
        </dl>
        <InlineCta
          title={<>Different businesses. <span className="ui-dim">The same principle: build around the real bottleneck.</span></>}
          note={
            <>
              Some businesses need a stronger website. Others need better search
              visibility, paid demand or follow-up infrastructure. We start with
              the problem rather than forcing every client into the same package.
            </>
          }
        />
      </Section>

      <ClosingCta
        title={<>Have a project that needs more than a <span className="ui-dim">cosmetic redesign?</span></>}
        support={
          <>
            Tell us about the website, traffic, lead flow and sales process,
            and we&rsquo;ll identify what actually needs fixing.
          </>
        }
      />
    </UiPage>
  );
}
