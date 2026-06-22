import Link from "next/link";
import {
  Route,
  MessageSquareWarning,
  Building2,
  Accessibility,
  Siren,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Safe Routes",
    subtitle: "AI-powered route recommendations based on safety.",
    icon: Route,
    href: "/route-planner",
    gradient: "from-emerald-50 to-cream",
    accent: "bg-emerald-500",
    visual: "route",
    reverse: false,
  },
  {
    id: 2,
    title: "Community Reports",
    subtitle: "Real-time incident reporting and alerts.",
    icon: MessageSquareWarning,
    href: "/community-reports",
    gradient: "from-orange/10 to-cream",
    accent: "bg-orange",
    visual: "reports",
    reverse: true,
  },
  {
    id: 3,
    title: "Safe Places",
    subtitle: "Breastfeeding rooms, pharmacies, police stations, women's centers.",
    icon: Building2,
    href: "/safe-places",
    gradient: "from-pink/15 to-cream",
    accent: "bg-pink",
    visual: "places",
    reverse: false,
  },
  {
    id: 4,
    title: "Accessibility",
    subtitle: "Wheelchair-friendly navigation and services.",
    icon: Accessibility,
    href: "/safe-places",
    gradient: "from-blue-50 to-cream",
    accent: "bg-blue-500",
    visual: "accessibility",
    reverse: true,
  },
  {
    id: 5,
    title: "Emergency Mode",
    subtitle: "Panic button and trusted contact support.",
    icon: Siren,
    href: "/report",
    gradient: "from-red-50 to-cream",
    accent: "bg-red-500",
    visual: "emergency",
    reverse: false,
  },
  {
    id: 6,
    title: "Safety Intelligence",
    subtitle: "Live safety scoring powered by community and city data.",
    icon: BarChart3,
    href: "/safety-map",
    gradient: "from-forest/5 to-cream",
    accent: "bg-forest",
    visual: "intelligence",
    reverse: true,
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "route") {
    return (
      <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
        <div className="relative w-full max-w-[280px] aspect-square rounded-[24px] bg-white/80 shadow-premium overflow-hidden">
          <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-emerald-100/50 to-cream">
            <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 100">
              <path d="M 15 80 Q 30 50, 45 40 Q 60 25, 80 20" fill="none" stroke="#003320" strokeWidth="2" strokeDasharray="4 2" />
              <circle cx="15" cy="80" r="4" fill="#003320" />
              <circle cx="80" cy="20" r="4" fill="#F7A500" />
            </svg>
            <div className="absolute bottom-3 left-3 right-3 glass rounded-xl px-3 py-2">
              <p className="text-[10px] font-bold text-forest">92% Safe Route</p>
              <p className="text-[9px] text-forest/50">18 min · Well-lit</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "reports") {
    return (
      <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
        <div className="w-full max-w-[280px] space-y-2">
          {["Harassment on Main St", "Lights fixed on Oak", "Safe update: Elm St"].map((t, i) => (
            <div key={t} className={`glass rounded-2xl px-4 py-3 shadow-sm ${i === 1 ? "ml-6" : i === 2 ? "ml-3" : ""}`}>
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-orange" : i === 1 ? "bg-emerald-500" : "bg-pink"}`} />
                <p className="text-xs font-semibold text-forest">{t}</p>
              </div>
              <p className="text-[10px] text-forest/40 mt-1">{i === 0 ? "2h ago" : i === 1 ? "5h ago" : "1d ago"}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "places") {
    return (
      <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
        <div className="grid grid-cols-2 gap-2 w-full max-w-[260px]">
          {[
            { label: "Pharmacy", color: "bg-emerald-100 text-emerald-700" },
            { label: "Police", color: "bg-blue-100 text-blue-700" },
            { label: "Nursing Room", color: "bg-pink/30 text-forest" },
            { label: "Women's Center", color: "bg-orange/20 text-orange" },
          ].map((p) => (
            <div key={p.label} className={`rounded-2xl ${p.color} p-4 text-center`}>
              <Building2 className="h-5 w-5 mx-auto mb-1 opacity-60" />
              <p className="text-[10px] font-bold">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "accessibility") {
    return (
      <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
        <div className="w-full max-w-[260px] rounded-[24px] bg-white/80 p-5 shadow-premium">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-2xl bg-blue-100 flex items-center justify-center">
              <Accessibility className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-forest">Ramp Access</p>
              <p className="text-[10px] text-forest/50">Verified · 0.2 mi</p>
            </div>
          </div>
          <div className="space-y-2">
            {["Elevator available", "Wide sidewalks", "Accessible transit"].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-forest/70">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "emergency") {
    return (
      <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-red-500/10 flex items-center justify-center animate-pulse-glow">
            <div className="h-20 w-20 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
              <Siren className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 whitespace-nowrap">
            <p className="text-[10px] font-bold text-forest">Hold to activate</p>
          </div>
        </div>
      </div>
    );
  }

  // intelligence
  return (
    <div className="relative h-full min-h-[200px] flex items-center justify-center p-6">
      <div className="w-full max-w-[260px] rounded-[24px] bg-forest p-5 text-white shadow-float">
        <p className="text-[10px] font-medium text-white/50 uppercase tracking-wider">Live Score</p>
        <p className="text-4xl font-bold mt-1">74</p>
        <div className="mt-3 space-y-2">
          {[
            { name: "Riverside", score: 91 },
            { name: "Downtown", score: 72 },
            { name: "Industrial", score: 48 },
          ].map((a) => (
            <div key={a.name}>
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className="text-white/60">{a.name}</span>
                <span className="font-bold">{a.score}</span>
              </div>
              <div className="h-1 rounded-full bg-white/10">
                <div className="h-full rounded-full gradient-pink-orange" style={{ width: `${a.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Platform</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            Everything you need.
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.id}
                href={feature.href}
                className={`group block rounded-[32px] bg-gradient-to-br ${feature.gradient} border border-forest/5 overflow-hidden hover-lift shadow-premium`}
              >
                <div className={`grid lg:grid-cols-2 items-center ${feature.reverse ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`p-8 sm:p-12 lg:p-16 ${feature.reverse ? "lg:[direction:ltr]" : ""}`}>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent} text-white mb-6`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-lg text-forest/50 font-light max-w-md">
                      {feature.subtitle}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div className={feature.reverse ? "lg:[direction:ltr]" : ""}>
                    <FeatureVisual type={feature.visual} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
