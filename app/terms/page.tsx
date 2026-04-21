import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ClevOps Terms of Service — the terms governing use of our website and services.",
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "April 2025";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-co-bg pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-3">
            Terms of Service
          </h1>
          <p className="text-co-text-secondary text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-co-text-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the ClevOps website, you accept and agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not
              use our website.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">2. Services</h2>
            <p>
              ClevOps provides website design, lead capture systems, automation, local SEO,
              and ongoing growth services for service businesses. Specific terms, scope, and
              deliverables for any engagement are defined in a separate project agreement
              or proposal.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">3. Website Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of the website</li>
              <li>Transmit harmful, offensive, or disruptive content</li>
              <li>Reproduce or distribute content without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, design, graphics, and code — is
              the property of ClevOps and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works without
              express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">5. Disclaimers</h2>
            <p>
              This website is provided &ldquo;as is&rdquo; without warranties of any kind.
              ClevOps does not guarantee specific business outcomes from any services, as
              results depend on many factors outside our control including market conditions,
              client business quality, and implementation.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ClevOps shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this
              website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the
              website following any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">8. Contact</h2>
            <p>
              Questions about these terms? Contact us at{" "}
              <a
                href="mailto:hello@clevops.com"
                className="text-co-accent hover:text-co-accent-light transition-colors"
              >
                hello@clevops.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-co-border">
          <Link
            href="/"
            className="text-sm text-co-text-secondary hover:text-co-text transition-colors duration-200 inline-flex items-center gap-1.5"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
