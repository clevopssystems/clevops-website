import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectLink } from "../../components/project-link";
import { services as overview } from "../../components/services-index";
import { stages as flagshipStages, inside } from "../../components/services-flagship";
import { sources, spine } from "../../components/services-connection";
import { channels } from "../../components/service-channels-data";
import {
  ArrowLink,
  Cells,
  ClosingCta,
  PageHero,
  PanelList,
  Section,
  SectionHead,
  SplitScene,
  Steps,
  UiPage,
} from "../../components/ui";
import "../../components/phase-seven.css";
import "../../components/site-ui.css";

/**
 * One page per service. The copy is the same copy the /services hub carries,
 * the overview summary, and for the channels the full scene from
 * service-channels-data, so the hub and the service pages can never drift.
 */
const slugOf = (href: string) => href.replace(/^#/, "");
const flagshipSlug = "lead-generation-systems";

function findService(slug: string) {
  const index = overview.findIndex((service) => slugOf(service.href) === slug);
  if (index < 0) return null;
  return { index, service: overview[index], channel: channels.find((channel) => channel.id === slug) };
}

export function generateStaticParams() {
  return overview.map((service) => ({ slug: slugOf(service.href) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) return {};
  const title = `${found.service.name} | ClevOps Services`;
  const description = found.service.summary;
  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${slug}`,
      siteName: "ClevOps",
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findService(slug);
  if (!found) notFound();

  const { index, service, channel } = found;
  const number = String(index + 1).padStart(2, "0");
  const isFlagship = slug === flagshipSlug;
  const isAds = slug === "google-ads" || slug === "meta-ads";
  const others = overview.filter((entry) => slugOf(entry.href) !== slug);

  const heroTitle = isFlagship
    ? <>More than ads. <span className="ui-dim">A complete lead-to-booking system.</span></>
    : <>{service.name}. <span className="ui-dim">{service.role}.</span></>;

  const panelItems = isFlagship
    ? flagshipStages.map((stage) => ({ name: stage.name, detail: stage.detail }))
    : (channel?.rows ?? []).map((row) => ({ name: String(row.term) }));

  return (
    <UiPage
      hero={
        <PageHero
          id="svc-hero-heading"
          label={`Service ${number} · ${service.name}`}
          title={heroTitle}
          description={service.summary}
          actions={
            <>
              <ProjectLink source="hero" />
              <ArrowLink href="/services" variant="ghost">All Services</ArrowLink>
            </>
          }
          aside={
            <PanelList
              title={isFlagship ? "The path a lead travels" : channel?.listHeading ?? service.name}
              sub={`${service.role} · ${service.name}`}
              items={panelItems}
            />
          }
        />
      }
    >
      {isFlagship ? (
        <Section tone="ink" id="the-service" labelledBy="svc-flagship-heading">
          <SectionHead
            id="svc-flagship-heading"
            index={number}
            label={service.name}
            title={<>The path a lead travels, <span className="ui-dim">built as one system.</span></>}
            sub={
              <>
                Most businesses do not lose leads because they cannot generate
                attention. They lose them in the gap between an enquiry arriving and
                somebody useful responding. This is the service that closes that gap.
              </>
            }
          />
          <Steps
            label="The path a lead travels"
            items={flagshipStages.map((stage) => ({ name: stage.name, detail: stage.detail }))}
          />
          <div className="ui-mt">
            <p className="ui-list-heading phase-reveal" data-reveal="">What the build includes</p>
            <Cells
              cols={4}
              variant="glass"
              label="What the build includes"
              items={inside.map((item, position) => ({
                kicker: `Included · 0${position + 1}`,
                title: item.term,
                body: item.detail,
              }))}
            />
          </div>
          <div className="ui-inline-cta phase-reveal" data-reveal="">
            <p className="ui-inline-cta-note sv2-flagship-close">
              Automation, CRM workflows, qualification, follow-up, booking and
              pipeline tracking all live here rather than being sold separately,
              because none of them works well on its own.
            </p>
            <div className="ui-actions">
              <ArrowLink href="/our-system" variant="white">Explore the ClevOps System</ArrowLink>
            </div>
          </div>
        </Section>
      ) : channel ? (
        <SplitScene
          id="the-service"
          tone="light"
          index={number}
          label={channel.label}
          title={channel.title}
          lead={channel.lead}
          body={channel.body}
          note={channel.note}
          listHeading={channel.listHeading}
          rows={channel.rows}
        >
          {isAds && (
            <div className="ui-mt">
              <p className="ui-list-heading phase-reveal" data-reveal="">The difference in one line</p>
              <Cells
                cols={2}
                label="Google Ads compared with Meta Ads"
                items={[
                  {
                    kicker: "Google Ads",
                    title: "Captures demand that already exists.",
                    body: "The person is searching.",
                    ...(slug === "meta-ads" ? { href: "/services/google-ads", footLabel: "Service page", foot: "Google Ads" } : {}),
                  },
                  {
                    kicker: "Meta Ads",
                    title: "Creates demand that does not exist yet.",
                    body: "The person is scrolling.",
                    ...(slug === "google-ads" ? { href: "/services/meta-ads", footLabel: "Service page", foot: "Meta Ads" } : {}),
                  },
                ]}
              />
            </div>
          )}
        </SplitScene>
      ) : null}

      <Section tone="white" labelledBy="svc-connect-heading">
        <SectionHead
          id="svc-connect-heading"
          label="How the services connect"
          title={<>Different channels. <span className="ui-dim">One system.</span></>}
          aside={
            <p>
              Not every business needs every service. We build around the problem
              the business actually has. Some companies need a new website. Some
              need paid demand. Others need better follow-up after the lead
              arrives. The system should fit the business, not the other way
              around.
            </p>
          }
        />
        <figure className="ui-flow phase-reveal" data-reveal="">
          <figcaption className="ui-kicker">Diagram: where the channels meet</figcaption>
          <ul className="ui-flow-sources">
            {sources.map((source) => <li key={source}>{source}</li>)}
          </ul>
          <span className="ui-flow-bus" aria-hidden="true" />
          <Steps
            label="What every channel feeds into"
            items={spine.map((step) => ({ name: step.name, detail: step.detail }))}
          />
        </figure>
      </Section>

      <Section tone="grey" labelledBy="svc-others-heading">
        <SectionHead
          id="svc-others-heading"
          label="Other services"
          title={<>The rest of <span className="ui-dim">the system.</span></>}
          action={<ArrowLink href="/services">All services</ArrowLink>}
        />
        <Cells
          cols={4}
          label="Other services"
          items={others.map((entry) => ({
            kicker: entry.role,
            title: entry.name,
            body: entry.summary,
            footLabel: "Service page",
            foot: "Explore service",
            href: `/services/${slugOf(entry.href)}`,
          }))}
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
