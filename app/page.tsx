import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { ProofBar } from "@/components/sections/home/ProofBar";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { SystemFlowSection } from "@/components/sections/home/SystemFlowSection";
import { TransformationSection } from "@/components/sections/home/TransformationSection";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { SmsVisualSection } from "@/components/sections/home/SmsVisualSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { PricingSection } from "@/components/sections/home/PricingSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { WhyDifferent } from "@/components/sections/home/WhyDifferent";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "ClevOps — Get More Clients From Your Website | Service Business Growth",
  description:
    "ClevOps builds conversion-first websites, 24/7 lead capture systems, and automated follow-up for cleaning, detailing, HVAC, and home service businesses. First leads in 14 days.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hook — make the pain immediate */}
      <Hero />
      {/* 2. Credibility spike — numbers before they scroll away */}
      <ProofBar />
      {/* 3. Problem — agitate, make them feel the loss */}
      <ProblemSection />
      {/* 4. Solution — show the system that fixes everything */}
      <SystemFlowSection />
      {/* 5. Visual proof — before/after transformation */}
      <TransformationSection />
      {/* 6. Case study — real client, real numbers */}
      <FeaturedWork />
      {/* 7. Automation demo — make the tech tangible */}
      <SmsVisualSection />
      {/* 8. Process — reduce fear of "how does this work" */}
      <ProcessSection />
      {/* 9. Offer breakdown — what they actually get */}
      <ServicesSection />
      {/* 10. Pricing — investment clarity, filter for serious buyers */}
      <PricingSection />
      {/* 11. Social proof — objection destruction */}
      <TestimonialsSection />
      {/* 12. Trust builders — why us, not anyone else */}
      <WhyDifferent />
      {/* 13. Final push — urgent, specific, zero friction */}
      <CTASection />
    </>
  );
}
