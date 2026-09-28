import type { ReactNode } from "react";
import Link from "next/link";
import { PROJECT_PAGE } from "./project-link";
import { LEGAL_DETAILS, formatLegalDate } from "./legal-details";
import { Label } from "./ui";

/**
 * The long-form legal document shared by /privacy and /terms. One light
 * scene: title block, then a numbered contents list beside the text (sticky
 * above 1120px, stacked above the text below it). No reveals, no footage.
 */

export type LegalSection = { id: string; title: string; body: ReactNode };

export function LegalDocument({
  id,
  title,
  lead,
  appliesTo,
  sections,
  related,
}: {
  id: string;
  title: string;
  lead: ReactNode;
  appliesTo: string;
  sections: LegalSection[];
  related: { href: string; label: string };
}) {
  const number = (index: number) => String(index + 1).padStart(2, "0");

  return (
    <article className="lg-scene" aria-labelledby={id}>
      <div className="container">
        <header className="lg-head">
          <Label>Legal</Label>
          <h1 id={id}>{title}</h1>
          <p className="lg-lead">{lead}</p>
          <dl className="lg-meta">
            <div>
              <dt>Last updated</dt>
              <dd>
                <time dateTime={LEGAL_DETAILS.lastUpdated}>{formatLegalDate(LEGAL_DETAILS.lastUpdated)}</time>
              </dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>{appliesTo}</dd>
            </div>
          </dl>
        </header>

        <div className="lg-layout">
          <nav className="lg-toc" aria-labelledby={`${id}-toc`}>
            <h2 className="lg-toc-title" id={`${id}-toc`}>On this page</h2>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span className="lg-toc-num" aria-hidden="true">{number(index)}</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg-body">
            {sections.map((section, index) => (
              <section className="lg-section" id={section.id} aria-labelledby={`${section.id}-heading`} key={section.id}>
                <h2 id={`${section.id}-heading`}>
                  <span className="lg-num">{number(index)}</span> {section.title}
                </h2>
                <div className="lg-prose">{section.body}</div>
              </section>
            ))}

            <p className="lg-related">
              See also our <Link href={related.href}>{related.label}</Link>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/** The contact block both documents end on. No postal address by design. */
export function LegalContact({ subject }: { subject: string }) {
  const { businessName, operator, country, domain, contactEmail } = LEGAL_DETAILS;
  return (
    <dl className="lg-contact">
      <div>
        <dt>Business</dt>
        <dd>{businessName}, operated by {operator}, founder</dd>
      </div>
      <div>
        <dt>Based in</dt>
        <dd>{country}</dd>
      </div>
      <div>
        <dt>Website</dt>
        <dd>{domain}</dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`}>{contactEmail}</a>
        </dd>
      </div>
      <div>
        <dt>How to reach us</dt>
        <dd>
          Email us with &ldquo;{subject}&rdquo; in the subject line. You can also
          use the <Link href={PROJECT_PAGE}>Start a Project</Link>{" "}form, or reply
          to any email you have received from us.
        </dd>
      </div>
    </dl>
  );
}
