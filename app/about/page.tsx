import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLink } from "../components/project-link";
import { principles } from "../components/about-page-hero";
import { pieces, beliefs } from "../components/about-beliefs";
import { links, limits } from "../components/about-chain";
import { capabilities, conditions, examples } from "../components/about-practice";
import { operating, refusals } from "../components/about-people";
import { getFounderPortrait } from "../components/founder-asset";
import {
  ArrowLink,
  Cells,
  ClosingCta,
  Label,
  Note,
  PageHero,
  Rows,
  Section,
  SectionHead,
  Steps,
  UiPage,
} from "../components/ui";
import "../components/phase-seven.css";
import "../components/site-ui.css";

const title = "About ClevOps | Connected Growth Systems for Service Businesses";
const description =
  "Learn why ClevOps combines websites, SEO, paid media and lead automation into one connected growth system for service businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

const capabilityLinks = [
  "/services#lead-generation-systems",
  "/services#website-development",
  "/services#seo",
  "/services#google-ads",
];

export default function AboutPage() {
  const portrait = getFounderPortrait();

  return (
    <UiPage
      hero={
        <PageHero
          id="ab-hero-heading"
          label="About ClevOps"
          title={
            <>
              <span className="ui-dim">We built ClevOps around a simple idea:</span>{" "}
              marketing works better when the pieces work together.
            </>
          }
          description={
            <>
              Websites, search, paid media, lead capture and follow-up are often
              treated as separate services. We believe they should operate as one
              connected system.
            </>
          }
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="/our-system" variant="ghost">See How We Work</ArrowLink>
            </>
          }
          chips={principles}
        />
      }
    >
      <Section tone="light" id="why-clevops" labelledBy="ab-origin-heading">
        <div className="ui-two ui-two-wide">
          <div className="phase-reveal" data-reveal="">
            <SectionHead
              id="ab-origin-heading"
              index="01"
              label="Why ClevOps exists"
              title={<>Too many businesses are paying for <span className="ui-dim">disconnected pieces.</span></>}
              sub={
                <>
                  Marketing is usually bought one piece at a time, from whoever is
                  closest to that piece. Each part can be perfectly well built and
                  the result still underperforms, because no single view runs
                  across all of them.
                </>
              }
            />
            <p className="ab2-statement">
              We built ClevOps to connect the pieces around one outcome: helping a
              business generate, handle and convert opportunities more effectively.
            </p>
          </div>
          <div className="ui-card phase-reveal" data-reveal="">
            <p className="ui-list-heading">How it is usually bought</p>
            <Rows items={pieces} />
            <p className="ui-note">
              None of this means the individual pieces are done badly. It means
              nobody owns the full customer journey, so the handovers between them
              are never anyone&rsquo;s job.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="grey" id="what-we-believe" labelledBy="ab-beliefs-heading">
        <SectionHead
          id="ab-beliefs-heading"
          index="02"
          label="What we believe"
          title={<>Four things <span className="ui-dim">we hold to.</span></>}
          aside={
            <p>
              These decide what gets recommended, what gets built and what we
              leave out of a proposal.
            </p>
          }
        />
        <Cells
          cols={4}
          label="What we believe"
          items={beliefs.map((belief) => ({
            kicker: `Principle · ${belief.number}`,
            title: belief.name,
            lead: belief.lead,
            body: belief.detail,
          }))}
        />
      </Section>

      <Section tone="ink" id="how-we-think" labelledBy="ab-chain-heading">
        <SectionHead
          id="ab-chain-heading"
          index="03"
          label="How we think about growth"
          title={<>Growth is a chain. <span className="ui-dim">The weakest link matters.</span></>}
          sub={
            <>
              Every customer you win passes through the same sequence. However
              much attention arrives at the front of it, the whole thing is
              limited by whichever part is weakest.
            </>
          }
        />
        <p className="ui-list-heading phase-reveal" data-reveal="">
          Diagram: the chain every customer moves through
        </p>
        <Steps
          label="The chain every customer moves through"
          items={links.map((link) => ({ name: link.name, detail: link.note }))}
        />
        <div className="ui-mt">
          <Cells
            cols={4}
            variant="glass"
            label="What one link cannot fix for another"
            items={limits.map((limit, position) => ({
              kicker: `Limit · 0${position + 1}`,
              title: limit.claim,
              body: limit.detail,
            }))}
          />
        </div>
        <Note>
          Improving one part while ignoring the rest usually creates waste. The
          useful question is not which piece is best, but which one is currently
          costing you the most.
        </Note>
      </Section>

      <Section tone="light" id="what-we-do" labelledBy="ab-capabilities-heading">
        <SectionHead
          id="ab-capabilities-heading"
          index="04"
          label="What ClevOps does"
          title={<>Four capabilities, <span className="ui-dim">one strategy.</span></>}
          aside={
            <p>
              These can work independently, but they are most powerful when the
              strategy connects them.
            </p>
          }
        />
        <Cells
          cols={4}
          label="What ClevOps does"
          items={capabilities.map((capability, position) => ({
            kicker: `Capability · 0${position + 1}`,
            title: capability.name,
            body: capability.note,
            footLabel: "Services",
            foot: "See the service",
            href: capabilityLinks[position],
          }))}
        />
      </Section>

      <Section tone="white" id="who-we-work-with" labelledBy="ab-fit-heading">
        <SectionHead
          id="ab-fit-heading"
          index="05"
          label="Who we work best with"
          title={<>We work best with businesses where <span className="ui-dim">every opportunity matters.</span></>}
          aside={
            <>
              <p className="ui-list-heading">Often</p>
              <ul className="ui-tags">
                {examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </>
          }
        />
        <Rows grid items={conditions} label="Conditions where we work best" />
        <Note>
          Usually businesses where prospects enquire, call or book before they
          buy. These are examples rather than limits; the conditions above
          matter more than the trade.
        </Note>
      </Section>

      <Section tone="grey" id="founder" labelledBy="ab-founder-heading">
        <div className="ui-two ab2-founder">
          <figure className="ui-portrait phase-reveal" data-reveal="">
            <div className="ui-portrait-frame">
              {portrait ? (
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(max-width: 760px) 100vw, 520px"
                />
              ) : (
                <span className="ui-portrait-label" aria-hidden="true">Portrait to be added</span>
              )}
            </div>
            <figcaption>Zain, Founder of ClevOps</figcaption>
          </figure>
          <div className="phase-reveal" data-reveal="">
            <Label index="06">Who is behind ClevOps</Label>
            <h2 id="ab-founder-heading">
              Built by someone who wanted the whole system <span className="ui-dim">to make sense.</span>
            </h2>
            <dl className="ui-facts ab2-founder-meta" style={{ "--cols": 2 } as React.CSSProperties}>
              <div>
                <dt>Name</dt>
                <dd>Zain</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Founder, ClevOps</dd>
              </div>
            </dl>
            <p className="ui-card-lead">
              ClevOps was built around an interest in web development, search,
              paid acquisition and automation, and the idea that these
              disciplines should work together rather than live in separate silos.
            </p>
            <p className="ui-card-lead">
              Most of them are usually learned and sold apart from one another,
              which is why so few setups are designed as a single route from
              attention to a booked job. Building that route is what the company
              is for.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark" id="how-we-operate" labelledBy="ab-operating-heading">
        <div className="ui-two ui-two-wide">
          <SectionHead
            id="ab-operating-heading"
            index="07"
            label="How we operate"
            title={<>Small enough to stay <span className="ui-dim">close to the work.</span></>}
            sub={
              <>
                We are a focused operation rather than a large agency, and the
                work is better for it.
              </>
            }
          />
          <div className="ui-card ui-card-dark phase-reveal" data-reveal="">
            <Rows items={operating} />
          </div>
        </div>
      </Section>

      <Section tone="light" id="what-we-dont-do" labelledBy="ab-refusals-heading">
        <SectionHead
          id="ab-refusals-heading"
          index="08"
          label="What we do not do"
          title={<>Some of this is worth <span className="ui-dim">saying out loud.</span></>}
        />
        <Cells
          cols={2}
          label="What we do not do"
          items={refusals.map((item, position) => ({
            kicker: `We do not · 0${position + 1}`,
            title: item.claim,
            body: item.detail,
          }))}
        />
      </Section>

      <ClosingCta
        title={
          <>
            If the pieces of your growth system feel disconnected,{" "}
            <span className="ui-dim">let&rsquo;s look at the whole picture.</span>
          </>
        }
        support={
          <>
            Tell us about your website, traffic, lead flow and follow-up,
            and we&rsquo;ll identify where the biggest gaps are.
          </>
        }
      />
    </UiPage>
  );
}
