import Link from "next/link";
import { Map, AlertTriangle, Building2, Route, Star, Globe } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Community safety map",
    description: "See real-time ratings of Tashkent districts. Locals share what they've experienced so you decide before you move.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: AlertTriangle,
    title: "Instant incident alerts",
    description: "Get notified when harassment, theft, or poor lighting is reported nearby. Know what's happening in real time.",
    color: "bg-orange/15 text-orange",
  },
  {
    icon: Building2,
    title: "Refuge network",
    description: "Find the nearest verified safe place — pharmacy, police station, women's center, or 24hr café.",
    color: "bg-pink/20 text-forest",
  },
  {
    icon: Route,
    title: "Safe route guidance",
    description: "Choose your route based on AI safety scores. Avoid flagged areas and walk with confidence.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Star,
    title: "Rate any area",
    description: "Share your experience of a neighborhood or route. Your rating protects the next person — takes 5 seconds.",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    icon: Globe,
    title: "Built for Tashkent",
    description: "10 districts, Bus 7 patterns, metro corridors — hyperlocal intelligence starting in Uzbekistan.",
    color: "bg-forest/10 text-forest",
  },
];

export default function CommunityFeatures() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">What Hearth does</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            Your safety,
            <br />
            powered by community
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-[28px] border border-forest/5 bg-background p-6 hover-lift hover:border-pink/20 transition-all"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${f.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-forest">{f.title}</h3>
                <p className="mt-2 text-sm font-light text-forest/55 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/safety-map" className="text-sm font-semibold text-orange hover:underline">
            Explore the Tashkent safety map →
          </Link>
        </div>
      </div>
    </section>
  );
}
