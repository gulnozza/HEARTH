import Link from "next/link";
import { Sparkles, Map, FileText, Route, Newspaper, ArrowRight } from "lucide-react";
import AIBadge from "@/components/ai/AIBadge";
import { getCityOverallScore, getDetectedPatterns } from "@/lib/safetyEngine";

const aiFeatures = [
  {
    title: "Safety Score Engine",
    description: "10 Tashkent districts scored from 7 data signals.",
    href: "/safety-map",
    icon: Map,
    stat: `${getCityOverallScore()}/100`,
  },
  {
    title: "Incident Classifier",
    description: "Natural language reports → structured safety data.",
    href: "/report",
    icon: FileText,
    stat: "94% accuracy",
  },
  {
    title: "Safe Route AI",
    description: "Fastest vs safest with AI explanations.",
    href: "/route-planner",
    icon: Route,
    stat: "2 routes",
  },
  {
    title: "News Analyzer",
    description: "Paste articles → map safety updates.",
    href: "/ai-news",
    icon: Newspaper,
    stat: "NLP pipeline",
  },
];

export default function AIIntelligenceShowcase() {
  const patternCount = getDetectedPatterns().length;

  return (
    <section className="py-20 sm:py-28 bg-forest text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink/10 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange/10 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AIBadge label="Hackathon MVP" className="mb-4" />
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            AI Safety Intelligence Engine
          </h2>
          <p className="mt-4 text-lg font-light text-white/50 max-w-2xl mx-auto">
            Hearth AI powering Tashkent — mock intelligence, fully local, demo-ready.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {aiFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.href}
                href={f.href}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 hover-lift transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-pink-orange">
                  <Icon className="h-6 w-6 text-forest" />
                </div>
                <p className="mt-4 text-2xl font-bold text-pink">{f.stat}</p>
                <h3 className="mt-1 text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/50 font-light">{f.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pink group-hover:gap-2 transition-all">
                  Try it <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink/20">
              <Sparkles className="h-7 w-7 text-pink" />
            </div>
            <div>
              <p className="text-xl font-bold">{patternCount} AI patterns detected in Tashkent</p>
              <p className="text-sm text-white/50">Bus routes, lighting clusters, foot traffic trends</p>
            </div>
          </div>
          <Link
            href="/safety-map#patterns"
            className="rounded-[24px] gradient-pink-orange px-6 py-3 text-sm font-bold text-forest hover:-translate-y-0.5 transition-transform"
          >
            View Patterns
          </Link>
        </div>
      </div>
    </section>
  );
}
