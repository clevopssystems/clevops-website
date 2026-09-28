import type { Metadata } from "next";
import { ProjectForm } from "../components/project-form";
import { Label, UiPage } from "../components/ui";
import "../components/phase-seven.css";
import "../components/site-ui.css";
import "../components/start-page.css";

const title = "Start a Project | ClevOps";
const description =
  "Tell ClevOps about your website, SEO, paid media or lead generation project and request a tailored proposal.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/start-a-project" },
  openGraph: {
    title,
    description,
    url: "/start-a-project",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

// The next step is deliberately open: questions by email, a proposal, an audit
// or a conversation. Nothing here promises a call or a response time.
const nextSteps = [
  "You send the project details.",
  "We review your current situation and what you’re trying to achieve.",
  "We reply with the most sensible next step.",
];

export default function StartAProjectPage() {
  return (
    <UiPage
      hero={
        <section className="sp-scene" aria-labelledby="sp-heading">
          <div className="container sp-grid">
            <div className="sp-intro">
              <Label>Start a Project</Label>
              <h1 id="sp-heading">
                Tell us what you&rsquo;re <span className="ui-dim">looking to build.</span>
              </h1>
              <p className="sp-lead">
                Share a little about your business, what you need help with and
                where things stand today. We&rsquo;ll review the details and come
                back with the most sensible next step.
              </p>

              <div className="sp-next">
                <h2 className="sp-next-title">What happens next</h2>
                <ol className="sp-next-list">
                  {nextSteps.map((step, index) => (
                    <li key={step}>
                      <span className="sp-next-num" aria-hidden="true">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <p className="sp-assure">
                No obligation and no fixed package. The next step depends on what
                you send. It might be a few questions by email, a proposal,
                an audit or a conversation.
              </p>
            </div>

            <div className="sp-form-col">
              <ProjectForm />
              <noscript>
                <p className="sp-noscript">This form needs JavaScript to send. Please enable it and reload the page.</p>
              </noscript>
            </div>
          </div>
        </section>
      }
    >
      {null}
    </UiPage>
  );
}
