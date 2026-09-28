import type { ReactNode } from "react";
import Image from "next/image";
import { ProjectLink } from "./project-link";
import { getCaseAssets } from "./case-assets";
import { Header } from "./header";
import { HeroVideo } from "./hero-video";
import { ArrowRight } from "./home-icons";
import { ScrollScene } from "./scroll-scene";
import { SiteFooter } from "./site-footer";

/**
 * The inner-page kit. /our-system, /services, /work, /process and /about are
 * composed from these pieces so they share the homepage's theme without
 * sharing, or touching, the homepage's own components and stylesheet.
 */

type Tone = "light" | "white" | "grey" | "dark" | "ink";

export function UiPage({
  hero,
  children,
}: {
  hero: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="ui-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {hero}
        <ScrollScene>{children}</ScrollScene>
      </main>
      <SiteFooter />
    </div>
  );
}

export function Label({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="ui-label">
      {index && <span className="ui-label-num">{index}</span>}
      {children}
    </p>
  );
}

export function PageHero({
  id,
  label,
  title,
  description,
  actions,
  aside,
  chips,
  media = "video",
}: {
  id: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  chips?: string[];
  media?: "video" | "field";
}) {
  return (
    <section className="ui-hero" data-media={media} aria-labelledby={id}>
      {media === "video" && <HeroVideo className="ui-hero-video" />}
      <span className="ui-hero-scrim" aria-hidden="true" />
      <div className="container ui-hero-grid" data-aside={aside ? "true" : undefined}>
        <div className="ui-hero-copy">
          <Label>{label}</Label>
          <h1 id={id}>{title}</h1>
          <p className="ui-hero-desc">{description}</p>
          {actions && <div className="ui-actions">{actions}</div>}
          {chips && (
            <ul className="ui-hero-chips">
              {chips.map((chip) => <li key={chip}>{chip}</li>)}
            </ul>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}

export type PanelItem = { name: string; detail?: string; href?: string; group?: string };

/** A glass panel listing rows, used beside heroes and in the closing scene. */
export function PanelList({
  title,
  sub,
  items,
  label,
  footer,
}: {
  title: string;
  sub?: string;
  items: PanelItem[];
  label?: string;
  footer?: ReactNode;
}) {
  let count = 0;
  return (
    <nav className="ui-panel" aria-label={label ?? title}>
      <p className="ui-panel-title">{title}</p>
      {sub && <p className="ui-panel-sub">{sub}</p>}
      <ol className="ui-panel-rows">
        {items.flatMap((item) => {
          count += 1;
          const index = String(count).padStart(2, "0");
          const body = (
            <>
              <span className="ui-panel-index" aria-hidden="true">{index}</span>
              <span className="ui-panel-name">{item.name}</span>
              {item.detail && <span className="ui-panel-detail">{item.detail}</span>}
            </>
          );
          const row = (
            <li key={item.name}>
              {item.href
                ? <a className="ui-panel-row" href={item.href}>{body}</a>
                : <span className="ui-panel-row">{body}</span>}
            </li>
          );
          return item.group
            ? [
                <li className="ui-panel-group-row" key={`g-${item.group}`} aria-hidden="true">
                  <span className="ui-panel-group">{item.group}</span>
                </li>,
                row,
              ]
            : [row];
        })}
      </ol>
      {footer}
    </nav>
  );
}

export function Section({
  tone = "light",
  id,
  labelledBy,
  children,
}: {
  tone?: Tone;
  id?: string;
  labelledBy: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`ui-section ui-tone-${tone}`}
      id={id}
      aria-labelledby={labelledBy}
      tabIndex={id ? -1 : undefined}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({
  id,
  index,
  label,
  title,
  aside,
  sub,
  action,
}: {
  id: string;
  index?: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
  sub?: ReactNode;
  action?: ReactNode;
}) {
  const heading = (
    <div>
      <Label index={index}>{label}</Label>
      <h2 id={id}>{title}</h2>
      {sub && <div className="ui-head-sub">{sub}</div>}
    </div>
  );

  if (aside) {
    return (
      <div className="ui-head ui-head-split phase-reveal" data-reveal="">
        {heading}
        <div className="ui-head-aside">{aside}</div>
      </div>
    );
  }
  if (action) {
    return (
      <div className="ui-head ui-head-row phase-reveal" data-reveal="">
        {heading}
        {action}
      </div>
    );
  }
  return <div className="ui-head phase-reveal" data-reveal="">{heading}</div>;
}

export type CellItem = {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  body?: ReactNode;
  tags?: string[];
  footLabel?: string;
  foot?: string;
  href?: string;
};

/** Numbered cells on one hairline sheet, the grid Leed-style inner pages use. */
export function Cells({
  items,
  cols = 3,
  variant,
  big,
  statement,
  label,
}: {
  items: CellItem[];
  cols?: number;
  variant?: "dark" | "glass";
  big?: boolean;
  statement?: ReactNode;
  label?: string;
}) {
  const classes = ["ui-cells"];
  if (variant) classes.push(`ui-cells-${variant}`);
  if (big) classes.push("ui-cells-big");

  return (
    <ul
      className={classes.join(" ")}
      style={{ "--cols": cols } as React.CSSProperties}
      data-cols={cols}
      aria-label={label}
    >
      {items.map((item, index) => (
        <li className="ui-cell phase-reveal" data-reveal="" key={index}>
          <div className="ui-cell-top">
            <span className="ui-kicker">{item.kicker ?? String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3>{item.title}</h3>
          {item.lead && <p className="ui-cell-lead">{item.lead}</p>}
          {item.body && <p className="ui-cell-body">{item.body}</p>}
          {item.tags && (
            <ul className="ui-tags">
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          )}
          {item.href && (
            <div className="ui-cell-foot">
              {item.footLabel && <span className="ui-kicker">{item.footLabel}</span>}
              <a className="ui-cell-link" href={item.href}>
                {item.foot}
                <span className="ui-round-arrow"><ArrowRight size={16} /></span>
              </a>
            </div>
          )}
        </li>
      ))}
      {statement && (
        <li className="ui-cell ui-cell-statement phase-reveal" data-reveal="">
          <p>{statement}</p>
        </li>
      )}
    </ul>
  );
}

export type RowItem = { term: ReactNode; detail: ReactNode };

export function Rows({
  items,
  numbered,
  grid,
  label,
}: {
  items: RowItem[];
  numbered?: boolean;
  grid?: boolean;
  label?: string;
}) {
  const classes = ["ui-rows"];
  if (numbered) classes.push("ui-rows-numbered");
  if (grid) classes.push("ui-rows-grid");

  return (
    <dl className={classes.join(" ")} aria-label={label}>
      {items.map((item, index) => (
        <div className="phase-reveal" data-reveal="" key={index}>
          <dt className="ui-row-term">
            {numbered && <span className="ui-row-index">{String(index + 1).padStart(2, "0")} </span>}
            {item.term}
          </dt>
          <dd className="ui-row-detail">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export type StepItem = { name: string; kicker?: string; detail?: ReactNode; tags?: string[]; href?: string };

export function Steps({
  items,
  label,
  accent = "last",
}: {
  items: StepItem[];
  label: string;
  accent?: "last" | "none";
}) {
  return (
    <ol
      className="ui-steps"
      style={{ "--count": items.length } as React.CSSProperties}
      data-count={items.length}
      aria-label={label}
    >
      {items.map((step, index) => (
        <li
          className="ui-step phase-reveal"
          data-reveal=""
          data-accent={accent === "last" && index === items.length - 1 ? "true" : undefined}
          key={step.name}
        >
          <span className="ui-step-node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          {step.kicker && <span className="ui-kicker ui-step-kicker">{step.kicker}</span>}
          <h3>{step.href ? <a href={step.href}>{step.name}</a> : step.name}</h3>
          {step.detail && <p>{step.detail}</p>}
          {step.tags && (
            <ul className="ui-tags">
              {step.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="ui-note phase-reveal" data-reveal="">{children}</p>;
}

/**
 * The long-form scene: the argument holds a sticky column on the left, the
 * ruled detail sits in a card on the right.
 */
export function SplitScene({
  id,
  tone = "light",
  index,
  label,
  title,
  lead,
  body,
  note,
  listHeading,
  rows,
  dark,
  children,
}: {
  id: string;
  tone?: Tone;
  index?: string;
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  body?: ReactNode;
  note?: ReactNode;
  listHeading?: string;
  rows?: RowItem[];
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`ui-section ui-tone-${tone}`} id={id} aria-labelledby={`${id}-heading`} tabIndex={-1}>
      <div className="container ui-split">
        <div className="ui-split-head phase-reveal" data-reveal="">
          <Label index={index}>{label}</Label>
          <h2 id={`${id}-heading`}>{title}</h2>
          {lead && <p className="ui-split-lead">{lead}</p>}
          {body && <p className="ui-split-body">{body}</p>}
          {note && <p className="ui-note">{note}</p>}
        </div>
        <div>
          {rows && (
            <div className={`ui-card${dark ? " ui-card-dark" : ""} phase-reveal`} data-reveal="">
              {listHeading && <p className="ui-list-heading">{listHeading}</p>}
              <Rows items={rows} />
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export function InlineCta({
  title,
  note,
  secondary,
}: {
  title: ReactNode;
  note: ReactNode;
  secondary?: { href: string; label: string; dark?: boolean };
}) {
  return (
    <div className="ui-inline-cta phase-reveal" data-reveal="">
      <div>
        <p className="ui-inline-cta-title">{title}</p>
        <p className="ui-inline-cta-note">{note}</p>
      </div>
      <div className="ui-actions">
        <ProjectLink source="inline" />
        {secondary && (
          <a className={`button ${secondary.dark ? "ui-btn-ghost" : "ui-btn-outline"}`} href={secondary.href}>
            {secondary.label}
            <ArrowRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

const brief: PanelItem[] = [
  { name: "Your business", detail: "What you sell and who to" },
  { name: "What you need help with", detail: "Website, search, ads or follow-up" },
  { name: "Where things stand today", detail: "What exists and what isn't working" },
  { name: "What you want to improve", detail: "The outcome you are after" },
];

/**
 * The closing scene every inner page ends on, the same footage and glass
 * panel the homepage closes with. It owns #start.
 */
export function ClosingCta({
  label = "Ready when you are",
  title,
  support,
  secondary,
}: {
  label?: string;
  title: ReactNode;
  support: ReactNode;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="ui-cta" id="start" aria-labelledby="ui-cta-heading" tabIndex={-1}>
      <HeroVideo className="ui-hero-video" />
      <span className="ui-cta-scrim" aria-hidden="true" />
      <div className="container ui-cta-grid">
        <div className="phase-reveal" data-reveal="">
          <Label>{label}</Label>
          <h2 id="ui-cta-heading">{title}</h2>
          <p className="ui-cta-support">{support}</p>
          {secondary && (
            <div className="ui-actions">
              <a className="button ui-btn-ghost" href={secondary.href}>
                {secondary.label}
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
        <div className="phase-reveal" data-reveal="">
          <PanelList
            title="Start a project"
            sub="What the enquiry covers"
            items={brief}
            footer={
              <>
                <div className="ui-panel-action">
                  <ProjectLink source="final-cta" />
                </div>
                <p className="ui-panel-note">
                  Tell us what you&rsquo;re trying to improve and we&rsquo;ll help
                  identify the most sensible next step.
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

const defaultLayers = [
  { name: "Architecture", note: "Service structure and page hierarchy" },
  { name: "Service pages", note: "One clear purpose, one clear action" },
  { name: "Local SEO", note: "Service-area relevance in content and markup" },
  { name: "Technical SEO", note: "Crawlable, indexable, fast foundations" },
  { name: "Conversion paths", note: "Enquiry and contact routes" },
  { name: "Tracking", note: "Groundwork for measurement and paid campaigns" },
];

/**
 * The selected build's browser plate. It reads the same case-assets switch as
 * the homepage, so a verified capture replaces the code-drawn structure
 * diagram everywhere at once.
 */
export function CasePlate({ layers = defaultLayers }: { layers?: { name: string; note: string }[] }) {
  const { desktop } = getCaseAssets();
  return (
    <figure className="ui-case phase-reveal" data-reveal="">
      <div className="ui-case-plate">
        <div className="ui-case-frame">
          <div className="ui-case-bar">
            <span className="ui-case-dots" aria-hidden="true"><span /><span /><span /></span>
            <span className="ui-case-address">Service Business Website System</span>
          </div>
          {desktop ? (
            <div className="ui-case-shot">
              <Image
                src={desktop.src}
                alt={desktop.alt}
                width={desktop.width}
                height={desktop.height}
                priority
                sizes="(max-width: 1240px) 92vw, 1140px"
              />
            </div>
          ) : (
            <div className="ui-case-pending">
              <p className="ui-kicker">Structure diagram: verified screenshot pending</p>
              <ol className="ui-case-diagram">
                {layers.map((layer, index) => (
                  <li key={layer.name}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <strong>{layer.name}</strong>
                    <em>{layer.note}</em>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
      <figcaption className="ui-case-caption">
        {desktop
          ? "A screen from the delivered website system."
          : "Build structure: the website architecture, SEO foundations and conversion paths delivered for this project. Drawn in code, not a capture of a live site."}
      </figcaption>
    </figure>
  );
}

export function ArrowLink({ href, children, variant = "outline" }: { href: string; children: ReactNode; variant?: "outline" | "white" | "ghost" }) {
  return (
    <a className={`button ui-btn-${variant}`} href={href}>
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
