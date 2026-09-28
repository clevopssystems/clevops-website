/**
 * Section 2: the service overview. The hero index is navigation; this is the
 * same five entries with the problem each one answers and the role it plays,
 * as ruled editorial rows. Never boxed cards or an icon grid.
 */
export const services = [
  {
    name: "Lead Generation Systems",
    role: "Flagship",
    href: "#lead-generation-systems",
    summary:
      "The complete path from a click to a booked appointment: traffic, capture, qualification, follow-up, booking and pipeline tracking in one connected build.",
  },
  {
    name: "Website Development",
    role: "Foundation",
    href: "#website-development",
    summary:
      "The asset everything else points at. Built around the action you want a visitor to take, and around the tracking that proves it happened.",
  },
  {
    name: "SEO",
    role: "Compounding",
    href: "#seo",
    summary:
      "Visibility that builds over months rather than switching on. Technical foundations, page structure, local presence and the intent behind a search.",
  },
  {
    name: "Google Ads",
    role: "Existing demand",
    href: "#google-ads",
    summary:
      "Reaching people already looking for what you sell, and making sure the page they land on answers the search that brought them.",
  },
  {
    name: "Meta Ads",
    role: "New demand",
    href: "#meta-ads",
    summary:
      "Creating interest before the search happens, with an offer and a message aimed at an audience that was not looking for you yet.",
  },
];

export function ServiceIndex() {
  return (
    <section className="sv-index" id="service-index" aria-labelledby="sv-index-heading" tabIndex={-1}>
      <div className="container">
        <div className="sv-index-intro phase-reveal" data-reveal="">
          <h2 id="sv-index-heading">Five services. One objective.</h2>
          <p className="sv-index-description">
            Each one can stand on its own. Together they form the system that
            takes a stranger from first attention to a conversation with your
            business.
          </p>
        </div>

        <ol className="sv-index-rows" role="list">
          {services.map((service, position) => (
            <li key={service.href} data-reveal="">
              <a className="sv-index-row" href={service.href}>
                <span className="sv-index-number">0{position + 1}</span>
                <span className="sv-index-name">
                  {service.name}
                  <span className="sv-index-role">{service.role}</span>
                </span>
                <span className="sv-index-summary">{service.summary}</span>
                <span className="sv-index-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="sv-index-rule" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
