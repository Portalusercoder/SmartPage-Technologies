import { AboutLanding } from "@/components/AboutLanding";
import { CTASection } from "@/components/CTASection";
import { DivisionsFocus } from "@/components/DivisionsFocus";
import { ExpertiseInAction } from "@/components/ExpertiseInAction";
import { HomeHero } from "@/components/HomeHero";
import { OfferShowcase } from "@/components/OfferShowcase";
import { WhySmartPages } from "@/components/WhySmartPages";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <OfferShowcase />

      <AboutLanding />

      <DivisionsFocus />

      <WhySmartPages />

      <ExpertiseInAction />

      <CTASection />
    </>
  );
}
