import PricingHero from "./_components/PricingHero"
import SystemsVisualization from "./_components/SystemsVisualization"
import AuthorityProof from "./_components/AuthorityProof"
import PricingPhilosophy from "./_components/PricingPhilosophy"
import CaseStudyPreviews from "./_components/CaseStudyPreviews"
import PricingTiers from "./_components/PricingTiers"
import WhyWePrice from "./_components/WhyWePrice"
import ROISection from "./_components/ROISection"
import PricingFAQ from "./_components/PricingFAQ"
import PricingFinalCTA from "./_components/PricingFinalCTA"

export default function PricingContent() {
  return (
    <main className="bg-co-bg min-h-screen">
      <PricingHero />
      <SystemsVisualization />
      <AuthorityProof />
      <PricingPhilosophy />
      <CaseStudyPreviews />
      <PricingTiers />
      <WhyWePrice />
      <ROISection />
      <PricingFAQ />
      <PricingFinalCTA />
    </main>
  )
}
