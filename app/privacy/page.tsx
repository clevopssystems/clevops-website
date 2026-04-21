import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ClevOps Privacy Policy — how we collect, use, and protect your information.",
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "April 2025";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-co-bg pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-co-text-muted mb-3">
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-co-text mb-3">
            Privacy Policy
          </h1>
          <p className="text-co-text-secondary text-sm">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-co-text-secondary text-sm leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through our website, we collect the information you
              provide — including your name, business name, email address, phone number,
              website URL, and project details. We use this information solely to respond
              to your inquiry and provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your consultation request</li>
              <li>Communicate about your project or services</li>
              <li>Provide the services you have engaged us for</li>
              <li>Send relevant updates or proposals (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">3. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may use trusted third-party tools (such as CRM or communication platforms)
              to process your information, and these tools are bound by appropriate
              confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">4. Cookies & Analytics</h2>
            <p>
              Our website may use analytics tools (such as Google Analytics) to understand
              how visitors interact with our site. These tools may collect anonymised
              usage data. You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services
              or as required by law. You may request deletion of your data at any time
              by contacting us at{" "}
              <a
                href="mailto:hello@clevops.com"
                className="text-co-accent hover:text-co-accent-light transition-colors"
              >
                hello@clevops.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">6. Security</h2>
            <p>
              We take reasonable precautions to protect your information. Our website
              uses HTTPS encryption for all data transmission. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-co-text mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
