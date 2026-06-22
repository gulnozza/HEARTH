import { Shield, TrendingUp, MapPin } from "lucide-react";

export default function HeroMapMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
      {/* Glow behind map */}
      <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-pink/30 via-transparent to-orange/20 blur-3xl" />

      {/* Main map container */}
      <div className="relative animate-float-slow rounded-[32px] border border-white/60 bg-white shadow-float overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-cream via-background to-pink/10">
          {/* Grid */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="absolute w-full border-t border-forest/10" style={{ top: `${(i + 1) * 8}%` }} />
            ))}
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="absolute h-full border-l border-forest/10" style={{ left: `${(i + 1) * 7}%` }} />
            ))}
          </div>

          {/* Roads */}
          <div className="absolute top-[28%] left-0 h-2 w-full bg-forest/8 rounded-full" />
          <div className="absolute top-[58%] left-0 h-1.5 w-full bg-forest/6 rounded-full" />
          <div className="absolute top-0 left-[32%] h-full w-2 bg-forest/8 rounded-full" />
          <div className="absolute top-0 left-[68%] h-full w-1.5 bg-forest/6 rounded-full" />

          {/* Safety zones - green, orange, red */}
          <div className="absolute rounded-2xl bg-emerald-400/30 border border-emerald-400/40" style={{ left: "8%", top: "10%", width: "30%", height: "28%" }}>
            <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-emerald-800/70">Safe Zone</span>
          </div>
          <div className="absolute rounded-2xl bg-orange/25 border border-orange/40" style={{ left: "42%", top: "8%", width: "26%", height: "32%" }}>
            <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-orange/90">Moderate</span>
          </div>
          <div className="absolute rounded-2xl bg-red-400/25 border border-red-400/40" style={{ left: "58%", top: "55%", width: "24%", height: "22%" }}>
            <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-red-700/70">Caution</span>
          </div>
          <div className="absolute rounded-2xl bg-emerald-400/20 border border-emerald-400/30" style={{ left: "12%", top: "52%", width: "28%", height: "26%" }}>
            <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-emerald-800/60">University</span>
          </div>

          {/* Route visualization */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003320" />
                <stop offset="50%" stopColor="#F7A500" />
                <stop offset="100%" stopColor="#F0AFFF" />
              </linearGradient>
            </defs>
            <path
              d="M 20 65 Q 30 45, 35 35 Q 45 20, 55 25 Q 65 30, 72 42"
              fill="none"
              stroke="url(#routeGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="65" r="2" fill="#003320" />
            <circle cx="72" cy="42" r="2" fill="#F0AFFF" stroke="#003320" strokeWidth="0.5" />
          </svg>

          {/* Map pins */}
          <div className="absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-forest text-white shadow-lg" style={{ left: "20%", top: "63%" }}>
            <div className="h-2 w-2 rounded-full bg-pink" />
          </div>
          <div className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-orange text-white shadow-md text-[8px] font-bold" style={{ left: "52%", top: "22%" }}>!</div>
          <div className="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md" style={{ left: "70%", top: "40%" }}>
            <Shield className="h-3 w-3" />
          </div>

          {/* Map label */}
          <div className="absolute top-4 left-4 glass rounded-2xl px-3 py-1.5 flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-forest" />
            <span className="text-xs font-bold text-forest">Downtown · Tashkent</span>
          </div>
        </div>
      </div>

      {/* Floating safety score card - top right */}
      <div className="absolute -top-4 -right-2 sm:right-4 lg:-right-6 z-20 animate-float glass rounded-[24px] p-4 shadow-premium min-w-[140px]">
        <p className="text-[10px] font-medium text-forest/50 uppercase tracking-wider">Safety Score</p>
        <p className="text-3xl font-bold text-forest mt-0.5">87</p>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp className="h-3 w-3 text-emerald-500" />
          <span className="text-xs font-semibold text-emerald-600">+5 today</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-forest/10 overflow-hidden">
          <div className="h-full w-[87%] rounded-full gradient-pink-orange" />
        </div>
      </div>

      {/* Floating route card - bottom left */}
      <div className="absolute -bottom-4 -left-2 sm:left-4 lg:-left-6 z-20 animate-float-delay glass rounded-[24px] p-4 shadow-premium">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl gradient-pink-orange flex items-center justify-center">
            <Shield className="h-5 w-5 text-forest" />
          </div>
          <div>
            <p className="text-xs font-semibold text-forest">Safest Route</p>
            <p className="text-[10px] text-forest/50">18 min · 92% safe</p>
          </div>
        </div>
      </div>

      {/* Floating alert pill */}
      <div className="absolute top-1/2 -right-4 sm:right-0 lg:-right-8 z-20 animate-float glass-dark rounded-full px-3 py-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
        <span className="text-[10px] font-medium text-white">3 reports nearby</span>
      </div>
    </div>
  );
}
