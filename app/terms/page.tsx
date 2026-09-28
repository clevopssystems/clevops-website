import type { Metadata } from "next";
import Link from "next/link";
import { UiPage } from "../components/ui";
import { PROJECT_PAGE } from "../components/project-link";
import { LegalContact, LegalDocument, type LegalSection } from "../components/legal";
import { LEGAL_DETAILS } from "../components/legal-details";
import "../components/phase-seven.css";
import "../components/site-ui.css";
import "../components/legal-page.css";

const title = "Terms of Service | ClevOps";
const description =
  "The terms that apply when you use the ClevOps website or send us a project enquiry, and how client work is agreed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title,
    description,
    url: "/terms",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

/*
 * These terms cover the website and the enquiry stage only. Scope, fees,
 * deliverables, ownership of work and liability for client projects are left
 * to each project agreement on purpose, so nothing here fixes a price, a
 * timeline or a cap. Pakistan is the owner's proposed governing law
 * (2026-09-28); no court, address or registration number is named.
 */
const { businessName, operator, country, domain } = LEGAL_DETAILS;

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          These terms apply to your use of {domain}{" "}(the &ldquo;website&rdquo;)
          and to any enquiry you send us through it. {businessName} is an
          independent digital marketing, website development and lead generation
          agency, operated from {country} by its founder, {operator}. In these
          terms, &ldquo;{businessName}&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;
          and &ldquo;our&rdquo; refer to {businessName}, and &ldquo;you&rdquo;
          means the person using the website or the business they represent.
        </p>
        <p>
          By using the website, you agree to these terms. If you do not agree,
          please do not use it. Our <Link href="/privacy">Privacy Policy</Link>{" "}
          explains how we handle the personal information you share with us.
        </p>
      </>
    ),
  },
  {
    id: "using-the-website",
    title: "Use of the website",
    body: (
      <>
        <p>
          You may use the website to learn about ClevOps and to contact us about
          a project. When you use it, you agree not to:
        </p>
        <ul>
          <li>use it for any unlawful, fraudulent or harmful purpose;</li>
          <li>submit false information, or an enquiry in someone else&rsquo;s name without their permission;</li>
          <li>send spam, automated submissions or malicious code through the enquiry form;</li>
          <li>try to gain unauthorised access to the website, its server or related systems; or</li>
          <li>interfere with the website&rsquo;s operation, security or availability for others.</li>
        </ul>
        <p>
          We may change, suspend or withdraw any part of the website at any time.
          We aim to keep it available and accurate, but we do not promise that it
          will always be available, uninterrupted or free of errors.
        </p>
      </>
    ),
  },
  {
    id: "our-services",
    title: "Our services",
    body: (
      <>
        <p>ClevOps provides digital marketing and growth services to businesses, including:</p>
        <ul>
          <li>website development;</li>
          <li>search engine optimisation (SEO);</li>
          <li>Google Ads management;</li>
          <li>Meta Ads management;</li>
          <li>lead generation systems; and</li>
          <li>CRM and automation setup.</li>
        </ul>
        <p>
          The descriptions on the website explain how we generally approach this
          work. They are general information, not an offer, and they do not form
          part of any contract. What we deliver for a particular client is set
          out in that client&rsquo;s project agreement.
        </p>
      </>
    ),
  },
  {
    id: "enquiries-and-proposals",
    title: "Project enquiries and proposals",
    body: (
      <>
        <p>
          You can tell us about a project through the{" "}
          <Link href={PROJECT_PAGE}>Start a Project</Link> form. Please make sure
          the information you give us is accurate and that you are authorised to
          share it on behalf of your business.
        </p>
        <p>
          After reviewing an enquiry, we may ask further questions, suggest a
          next step, prepare a proposal, or explain that we are not the right fit.
          We are not obliged to accept any enquiry or to provide a proposal.
        </p>
        <p>
          Any proposal we send is based on the information available to us at the
          time. It will describe the proposed scope, fees and any other key
          points, and it is valid only for the period it states.
        </p>
      </>
    ),
  },
  {
    id: "no-automatic-contract",
    title: "No contract from an enquiry",
    body: (
      <>
        <p className="lg-callout">
          Submitting the Start a Project form does not create a contract, paid
          or otherwise, between you and {businessName}. Neither does receiving
          our automatic confirmation email, or a proposal.
        </p>
        <p>
          An enquiry does not commit either of us to working together, and you
          owe us nothing for sending one. A contract exists only once a written
          project agreement has been accepted by both you and us.
        </p>
      </>
    ),
  },
  {
    id: "project-agreements",
    title: "Project agreements, payment and deliverables",
    body: (
      <>
        <p>
          Every client engagement is governed by its own written project
          agreement. That agreement sets out, among other things:
        </p>
        <ul>
          <li>the scope of work and the deliverables;</li>
          <li>fees, payment terms and any deposit;</li>
          <li>whether advertising spend is included in, or separate from, our fees;</li>
          <li>timelines, approvals and how changes to the scope are handled;</li>
          <li>who owns the finished work and when ownership transfers; and</li>
          <li>how the agreement can be ended.</li>
        </ul>
        <p>
          If a project agreement conflicts with these terms, the project
          agreement takes priority for that engagement.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client responsibilities",
    body: (
      <>
        <p>Good results depend on both sides. Unless a project agreement says otherwise, clients are responsible for:</p>
        <ul>
          <li>giving us accurate, complete information about their business, offers and goals;</li>
          <li>
            providing timely access to the accounts the work needs, such as the
            website and domain, ad accounts, analytics, Search Console and CRM;
          </li>
          <li>reviewing and approving work within the agreed timeframes;</li>
          <li>
            making sure they have the rights to any content, images, logos and
            data they give us to use;
          </li>
          <li>
            the accuracy of claims made about their own products and services,
            including in adverts and on their website; and
          </li>
          <li>
            complying with the laws that apply to their business, including
            privacy, consumer protection and marketing laws covering the leads
            and customer data they collect.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property and website content",
    body: (
      <>
        <p>
          The website and its content, including text, design, graphics and code,
          belong to ClevOps or the people who licensed it to us. You may view the
          website and print or save pages for your own reference or internal
          business use. You may not copy, republish or sell its content, or use
          it to build a competing service, without our written permission.
        </p>
        <p>
          Ownership of work we create for a client is set out in that
          client&rsquo;s project agreement.
        </p>
        <p>
          Names such as Google, Google Ads, Meta and other third-party platforms
          are trademarks of their owners. Mentioning them on the website does not
          mean those companies endorse or are partnered with ClevOps.
        </p>
      </>
    ),
  },
  {
    id: "third-party-platforms",
    title: "Third-party platforms and services",
    body: (
      <>
        <p>
          Much of our work runs on platforms we do not own or control, such as
          search engines, Google Ads, Meta, hosting providers, CRMs and
          automation tools. Your use of those platforms is governed by their own
          terms and policies.
        </p>
        <p>
          We are not responsible for a platform&rsquo;s decisions or changes,
          including ad disapprovals, account restrictions or suspensions, policy
          or algorithm changes, price changes or outages, although we will work
          with you to respond to them where they affect a project.
        </p>
        <p>
          The website may link to other websites. We provide those links for
          convenience and are not responsible for their content or privacy
          practices.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    title: "No guarantee of results",
    body: (
      <>
        <p className="lg-callout">
          We do not guarantee any particular search ranking, advertising
          performance, cost per lead, number of leads or bookings, revenue or
          return on investment.
        </p>
        <p>
          Results depend on factors outside our control, including your market,
          competition, budget, offer, pricing, the value of each job, how quickly
          leads are followed up, and the decisions of third-party platforms. SEO
          in particular is a long-term channel. Any forecast or estimate we share
          is an informed expectation, not a promise.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          The website and its content are provided for general information. We
          work to keep it accurate, but we do not warrant that it is complete,
          current or suitable for your particular circumstances, and you should
          not rely on it as professional advice for your business.
        </p>
        <p>
          To the extent the law allows, ClevOps is not liable for any indirect or
          consequential loss, or for any loss of profit, revenue, business,
          opportunity or data, arising from your use of, or inability to use, the
          website.
        </p>
        <p>
          Our responsibilities and liability for client work are set out in the
          relevant project agreement.
        </p>
        <p>
          Nothing in these terms excludes or limits any liability that cannot be
          excluded or limited under applicable law, or affects any rights you
          have as a consumer that cannot be waived.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. When we do, we will change
        the &ldquo;Last updated&rdquo; date at the top of this page. The version
        published when you use the website is the one that applies. Changes do
        not alter a project agreement that has already been signed.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <>
        <p>
          These terms, and any dispute arising out of or in connection with them
          or your use of the website, are governed by the laws of {country}, and
          the courts of {country} have jurisdiction to hear such disputes.
        </p>
        <p>
          This does not take away any protection you have under mandatory
          consumer protection or data protection laws of the country where you
          live, including any right to bring proceedings there, where those laws
          apply.
        </p>
        <p>
          A separately signed project agreement may contain its own governing
          law and dispute resolution provisions. Where it does, those provisions
          apply to that engagement.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>If you have a question about these terms, or any other legal enquiry, contact us using the details below.</p>
        <LegalContact subject="Legal enquiry" />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <UiPage
      hero={
        <LegalDocument
          id="lg-terms-heading"
          title="Terms of Service"
          lead={
            <>
              The terms that apply when you use our website or send us a project
              enquiry, and how client work is agreed.
            </>
          }
          appliesTo={`${domain} and project enquiries`}
          sections={sections}
          related={{ href: "/privacy", label: "Privacy Policy" }}
        />
      }
    >
      {null}
    </UiPage>
  );
}
