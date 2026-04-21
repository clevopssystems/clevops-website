import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { ProofBar } from "@/components/sections/home/ProofBar";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { SystemFlowSection } from "@/components/sections/home/SystemFlowSection";
import { SmsVisualSection } from "@/components/sections/home/SmsVisualSection";
import { TransformationSection } from "@/components/sections/home/TransformationSection";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { WhyDifferent } from "@/components/sections/home/WhyDifferent";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { CTASection } from "@/components/sections/home/CTASection";

export const metadata: Metadata = {
  title: "ClevOps — Premium Growth Systems for Service Businesses",
  description:
    "We build high-converting websites, lead capture systems, and growth infrastructure that help service businesses generate more leads, earn more trust, and book more jobs.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <TrustStrip />
      <ServicesSection />
      <ProblemSection />
      <SystemFlowSection />
      <SmsVisualSection />
      <TransformationSection />
      <FeaturedWork />
      <TestimonialsSection />
      <WhyDifferent />
      <ProcessSection />
      <CTASection />
    </>
  );
}
