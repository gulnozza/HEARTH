import Hero from "@/components/Hero";
import TashkentDistrictMap from "@/components/ai/TashkentDistrictMap";
import AIPatternDetection from "@/components/ai/AIPatternDetection";
import { Info } from "lucide-react";

export default function SafetyMapPage() {
  return (
    <>
      <Hero
        compact
        title="Tashkent Safety Map"
        subtitle="AI-powered district safety scores for all 10 Tashkent districts — tap any zone for risk factors and AI summaries."
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-start gap-3 rounded-[24px] glass p-4">
          <Info className="h-5 w-5 shrink-0 text-orange mt-0.5" />
          <p className="text-sm text-forest/70">
            Scores combine user reports, crime data, lighting, transit safety, foot traffic, time of day, and news incidents. Uzbekistan · Tashkent focus.
          </p>
        </div>
        <TashkentDistrictMap />
      </section>

      <div id="patterns">
        <AIPatternDetection />
      </div>
    </>
  );
}
