import type { Metadata } from "next";
import Link from "next/link";
import { UiPage } from "../components/ui";
import { PROJECT_PAGE } from "../components/project-link";
import { LegalContact, LegalDocument, type LegalSection } from "../components/legal";
import { LEGAL_DETAILS, RESEND_PRIVACY_URL } from "../components/legal-details";
import "../components/phase-seven.css";
import "../components/site-ui.css";
import "../components/legal-page.css";

const { businessName, operator, country, domain, contactEmail, hostingProvider, emailProvider } = LEGAL_DETAILS;

const title = "Privacy Policy | ClevOps";
const description =
  "How ClevOps collects, uses and protects the information you share through our website and the Start a Project enquiry form.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title,
    description,
    url: "/privacy",
    siteName: "ClevOps",
    type: "website",
    locale: "en_US",
  },
};

/*
 * Every statement about how data moves is taken from the code as it stands
 * (checked 2026-09-28): the enquiry goes to app/api/leads, is emailed through
 * Resend's REST API and is not written to a database; rate limiting is an
 * in-memory map on the server (no Upstash or other store); the site sets no
 * cookies and loads no analytics, tag manager, pixel or other third-party
 * script (see the CSP in next.config.ts). If any of that changes, this page
 * has to change in the same commit.
 */
const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and scope",
    body: (
      <>
        <p>
          {businessName} is an independent digital marketing, website development
          and lead generation agency, operated from {country} by its founder,{" "}
          {operator}. We work with businesses in the United States, the United
          Kingdom, Canada, Australia, the United Arab Emirates and elsewhere, on
          website development, SEO, Google Ads, Meta Ads, lead generation systems,
          and CRM and automation.
        </p>
        <p>
          This policy explains what personal information we collect through{" "}
          {domain}{" "}(the &ldquo;website&rdquo;) and our Start a Project enquiry
          form, why we collect it, who processes it on our behalf and the choices
          you have. In this policy, &ldquo;{businessName}&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to {businessName}.
        </p>
        <p>
          This policy does not cover the data we handle while delivering work for
          a client, such as the leads, customer records or ad account data in a
          client&rsquo;s own systems. That processing is governed by the project
          agreement with that client.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Information you give us through the enquiry form</h3>
        <p>
          When you submit the <Link href={PROJECT_PAGE}>Start a Project</Link>{" "}
          form, we collect:
        </p>
        <ul>
          <li>your full name (required);</li>
          <li>your business name (required);</li>
          <li>your email address (required);</li>
          <li>your phone number (required);</li>
          <li>your website URL (optional);</li>
          <li>the services you need help with (required);</li>
          <li>your description of the project (required); and</li>
          <li>your approximate monthly marketing budget (optional).</li>
        </ul>
        <p>
          Please do not include sensitive information, such as health or
          financial account details, in the project description. We do not need
          it to respond to an enquiry.
        </p>

        <h3>Information you send us directly</h3>
        <p>
          If you correspond with us by email, we receive your email address, the
          content of your messages and anything you attach.
        </p>

        <h3>Technical information</h3>
        <p>
          Like any website, ours receives technical information each time a page
          is requested, such as your IP address, browser type and the page you
          asked for. Our hosting provider processes this to deliver the website
          and keep it secure. When you submit the enquiry form, our server also
          uses your IP address to limit repeated submissions, as described in
          section 4.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use enquiry information",
    body: (
      <>
        <p>We use the information you submit to:</p>
        <ul>
          <li>review your enquiry and understand your business and goals;</li>
          <li>reply to you by email or phone with questions or a suggested next step;</li>
          <li>prepare a proposal, audit or quote if you ask for one;</li>
          <li>send you an automatic email confirming we received your enquiry;</li>
          <li>keep a record of our correspondence with you; and</li>
          <li>protect the form and the website from spam and misuse.</li>
        </ul>
        <p>
          We do not use enquiry information for automated decision-making that
          has legal or similarly significant effects on you, and we do not sell
          it.
        </p>
        <p>
          Where laws such as the UK GDPR or the EU GDPR apply, we rely on our
          legitimate interest in responding to business enquiries, and on taking
          steps at your request before entering into a contract.
        </p>
      </>
    ),
  },
  {
    id: "form-processing",
    title: "How form submissions are processed",
    body: (
      <>
        <p>
          When you submit the enquiry form, our website server checks the details
          and then sends two emails through{" "}
          <a href={RESEND_PRIVACY_URL} rel="noopener noreferrer">Resend</a>, a
          third-party email delivery service:
        </p>
        <ul>
          <li>
            a notification to the {businessName} business inbox containing the
            details you submitted, set up so that we can reply to you directly;
            and
          </li>
          <li>an automatic confirmation email to the address you gave us.</li>
        </ul>
        <p>
          Resend processes the content of these emails, including your name,
          email address and enquiry details, in order to deliver them. The
          website itself does not store your enquiry in a database. After
          delivery, your enquiry is held in our business email account, which is
          provided by {emailProvider}.
        </p>
        <p>
          The confirmation email is sent automatically. If you reply to it, your
          reply goes to our business inbox at{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h3>Limiting repeated submissions</h3>
        <p>
          To reduce spam, our website server counts recent submissions from each
          IP address and temporarily refuses further ones after a small number.
          This check runs on the server itself: it does not use a separate
          database or rate-limiting service, and the IP addresses it uses are
          held only in the server&rsquo;s temporary memory. They are not stored
          alongside, or sent with, your enquiry.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Analytics and cookies",
    body: (
      <>
        <p>
          The website does not use analytics tools, tag managers, advertising
          pixels, tracking cookies or similar technologies, and it does not set
          cookies of its own. It does not load scripts, fonts or videos from
          third-party services.
        </p>
        <p>
          If this changes, we will update this policy before the change takes
          effect.
        </p>
      </>
    ),
  },
  {
    id: "storage-and-security",
    title: "Data storage and security",
    body: (
      <>
        <p>
          We take reasonable steps to protect the information you send us. The
          website is served over encrypted HTTPS connections. The enquiry form is
          validated on our server, which rejects submissions sent from other
          websites and limits repeated submissions. The credentials used to send
          email are kept on the server and never sent to your browser. Access to
          enquiries is limited to the people at {businessName} who need it to
          respond.
        </p>
        <p className="lg-callout">
          No method of transmitting or storing information over the internet is
          completely secure, so we cannot guarantee absolute security. If you
          believe information you sent us has been put at risk, please contact
          us using the details in <a href="#contact">section 13</a>.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Service providers and international transfers",
    body: (
      <>
        <p>
          We use a small number of service providers to run the website and
          handle enquiries. They process personal information on our behalf, for
          the purposes described in this policy:
        </p>
        <ul>
          <li>
            <strong>Resend</strong>, which delivers the notification and
            confirmation emails described in section 4.
          </li>
          <li>
            <strong>{hostingProvider}</strong>, which hosts the website and
            processes technical request data to serve it.
          </li>
          <li>
            <strong>{emailProvider}</strong>, which provides the business email
            account where enquiries are received.
          </li>
        </ul>
        <p>
          We may also disclose information where the law requires it, or where
          it is necessary to protect our rights or the safety of others. We do
          not sell your personal information or share it for targeted
          advertising.
        </p>
        <p>
          {businessName} operates from {country}, and our service providers
          operate internationally, including in the United States. This means
          your information will be processed outside your own country. The data
          protection laws of those countries may differ from, and may not be as
          protective as, the laws where you live. Each provider describes how it
          handles international transfers in its own privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <>
        <p>
          We keep enquiry information only for as long as we need it for the
          purposes in this policy:
        </p>
        <ul>
          <li>
            If your enquiry does not lead to a project, we keep it for up to 12
            months after our last meaningful interaction with you, unless you ask
            us to delete it sooner or we reasonably need to keep it longer, for
            example to deal with a dispute or meet a legal obligation.
          </li>
          <li>
            If you become a client, we keep it for the length of our working
            relationship and afterwards for as long as we need to for legal,
            accounting and record-keeping reasons.
          </li>
        </ul>
        <p>
          Enquiries are held in our business email account and are deleted from
          it by hand; nothing deletes them automatically.
        </p>
        <p>
          IP addresses used to limit repeated form submissions are not saved
          (see <a href="#form-processing">section 4</a>). Our service providers
          keep technical and delivery logs for periods set by their own policies.
        </p>
        <p>You can ask us to delete your information earlier. See <a href="#your-rights">section 10</a>.</p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing communications",
    body: (
      <>
        <p>
          Submitting the enquiry form does not subscribe you to a newsletter or
          mailing list. The confirmation email you receive is a direct response
          to your enquiry, not a marketing message.
        </p>
        <p>
          We will only send you marketing emails where the law allows it, for
          example where you have agreed to receive them. Every marketing email
          will tell you how to opt out, and you can also opt out at any time by
          contacting us. Opting out of marketing does not stop us replying to an
          enquiry you have made or corresponding with you about a project.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your privacy rights",
    body: (
      <>
        <p>
          Depending on where you live, including the UK, the European Union,
          California and other US states, Canada, Australia and the United Arab
          Emirates, you may have some or all of these rights over your personal
          information:
        </p>
        <ul>
          <li>to ask what information we hold about you and receive a copy of it;</li>
          <li>to ask us to correct information that is inaccurate or incomplete;</li>
          <li>to ask us to delete your information;</li>
          <li>to object to, or ask us to restrict, how we use it;</li>
          <li>to receive your information in a portable format;</li>
          <li>to withdraw consent, where we rely on consent; and</li>
          <li>not to be treated differently for exercising these rights.</li>
        </ul>
        <p>
          To make a request, including a request to delete your data, email{" "}
          <a href={`mailto:${contactEmail}?subject=Privacy%20request`}>{contactEmail}</a>{" "}
          (see also <a href="#contact">section 13</a>) and tell us which right
          you want to exercise. We may need to confirm your identity before acting on it,
          usually by corresponding with the email address you gave us. We will
          respond within the time the law that applies to you requires.
        </p>
        <p>
          If you are not satisfied with our response, you may be able to
          complain to your local data protection authority, such as the
          Information Commissioner&rsquo;s Office in the UK, the Office of the
          Privacy Commissioner of Canada or the Office of the Australian
          Information Commissioner. We would appreciate the chance to resolve
          your concern first.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s privacy",
    body: (
      <p>
        Our website and services are intended for businesses and are not directed
        at children. We do not knowingly collect personal information from
        anyone under 16. If you believe a child has sent us their information,
        please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy when our services, our providers or the law
        change. When we do, we will change the &ldquo;Last updated&rdquo; date at
        the top of this page. If a change significantly affects how we use
        information you have already given us, we will take reasonable steps to
        let you know.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          For questions about this policy, or to make a privacy or data deletion
          request, contact us using the details below.
        </p>
        <LegalContact subject="Privacy request" />
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <UiPage
      hero={
        <LegalDocument
          id="lg-privacy-heading"
          title="Privacy Policy"
          lead={
            <>
              What we collect when you use our website or send us an enquiry,
              what we do with it, and the choices you have.
            </>
          }
          appliesTo={`${domain} and project enquiries`}
          sections={sections}
          related={{ href: "/terms", label: "Terms of Service" }}
        />
      }
    >
      {null}
    </UiPage>
  );
}
