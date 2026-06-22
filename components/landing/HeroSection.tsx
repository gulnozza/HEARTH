import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroMapMockup from "./HeroMapMockup";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-16 lg:pb-36">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-pink/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cream blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
              <span className="text-xs font-semibold text-forest/70 tracking-wide uppercase">AI Hackathon MVP · Tashkent, Uzbekistan</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-forest leading-[1.05]">
              Navigate Cities{" "}
              <span className="gradient-text">Safely.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-forest/55 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              Real-time safety intelligence, safer routes, trusted places, and community-powered reporting — powered by AI for Tashkent.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/route-planner"
                className="group inline-flex items-center justify-center gap-2 rounded-[24px] bg-forest px-8 py-4 text-base font-semibold text-white shadow-premium transition-all hover:bg-forest-light hover:shadow-float hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/safety-map"
                className="inline-flex items-center justify-center gap-2 rounded-[24px] border-2 border-forest/10 bg-white px-8 py-4 text-base font-semibold text-forest transition-all hover:border-pink/40 hover:bg-cream hover:-translate-y-0.5"
              >
                Explore Map
              </Link>
            </div>
          </div>

          {/* Map mockup */}
          <div className="relative lg:pl-8">
            <HeroMapMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
