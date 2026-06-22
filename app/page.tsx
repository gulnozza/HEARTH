import GAngelHero from "@/components/landing/GAngelHero";
import CommunityFeatures from "@/components/landing/CommunityFeatures";
import LiveMapCommunity from "@/components/landing/LiveMapCommunity";
import HowItWorksSteps from "@/components/landing/HowItWorksSteps";
import HowItsUsed from "@/components/landing/HowItsUsed";
import UnderTheHood from "@/components/landing/UnderTheHood";
import AIIntelligenceShowcase from "@/components/landing/AIIntelligenceShowcase";
import AIPatternDetection from "@/components/ai/AIPatternDetection";
import PrivacyTrust from "@/components/landing/PrivacyTrust";
import HearthScrollRunner from "@/components/HearthScrollRunner";

export default function HomePage() {
  return (
    <div className="relative">
      <HearthScrollRunner />
      <GAngelHero />
      <CommunityFeatures />
      <LiveMapCommunity />
      <HowItWorksSteps />
      <HowItsUsed />
      <UnderTheHood />
      <AIIntelligenceShowcase />
      <div id="patterns">
        <AIPatternDetection />
      </div>
      <PrivacyTrust />
    </div>
  );
}
