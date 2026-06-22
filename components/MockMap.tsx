"use client";

import { useState } from "react";
import { MapPin, AlertTriangle, Shield, Navigation } from "lucide-react";
import {
  safetyZones,
  mapPins,
  safetyLevelColors,
  type MapPin as MapPinType,
} from "@/lib/mockData";

const zoneFill: Record<string, string> = {
  safe: "bg-emerald-400/25 border-emerald-400/40",
  moderate: "bg-orange/25 border-orange/40",
  caution: "bg-orange/30 border-orange/50",
  unsafe: "bg-red-400/25 border-red-400/40",
};

interface MockMapProps {
  showLegend?: boolean;
  showRoute?: boolean;
  className?: string;
}

export default function MockMap({ showLegend = true, showRoute = false, className = "" }: MockMapProps) {
  const [activePin, setActivePin] = useState<MapPinType | null>(null);

  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-forest/5 bg-gradient-to-br from-cream via-background to-pink/10 shadow-premium sm:aspect-[16/10]">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full border-t border-forest/10" style={{ top: `${(i + 1) * 11}%` }} />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full border-l border-forest/10" style={{ left: `${(i + 1) * 9}%` }} />
          ))}
        </div>

        <div className="absolute top-[30%] left-0 h-3 w-full rounded-sm bg-forest/8" />
        <div className="absolute top-[55%] left-0 h-2.5 w-full rounded-sm bg-forest/6" />
        <div className="absolute top-0 left-[35%] h-full w-3 rounded-sm bg-forest/8" />
        <div className="absolute top-0 left-[65%] h-full w-2.5 rounded-sm bg-forest/6" />

        {safetyZones.map((zone) => (
          <div
            key={zone.id}
            className={`absolute rounded-2xl border-2 ${zoneFill[zone.level]} backdrop-blur-[1px]`}
            style={{ left: `${zone.x}%`, top: `${zone.y}%`, width: `${zone.width}%`, height: `${zone.height}%` }}
          >
            <span className="absolute bottom-1 left-1.5 text-[10px] font-semibold text-forest/50 sm:text-xs">{zone.name}</span>
          </div>
        ))}

        {showRoute && (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 35 50 Q 25 35, 22 28 Q 30 20, 45 25 Q 55 30, 52 45 Q 48 55, 35 50" fill="none" stroke="#F7A500" strokeWidth="0.8" strokeDasharray="2 1" />
            <circle cx="35" cy="50" r="1.5" fill="#003320" />
            <circle cx="22" cy="28" r="1.5" fill="#F0AFFF" />
          </svg>
        )}

        {mapPins.map((pin) => {
          const isActive = activePin?.id === pin.id;
          const pinIcon =
            pin.type === "incident" ? <AlertTriangle className="h-3.5 w-3.5 text-white" /> :
            pin.type === "safe-place" ? <Shield className="h-3.5 w-3.5 text-white" /> :
            <Navigation className="h-3.5 w-3.5 text-white" />;
          const pinColor =
            pin.type === "incident" ? "bg-orange shadow-orange/30" :
            pin.type === "safe-place" ? "bg-emerald-500 shadow-emerald-200" :
            "bg-forest shadow-forest/30 animate-pulse-soft";

          return (
            <button
              key={pin.id}
              type="button"
              onClick={() => setActivePin(isActive ? null : pin)}
              className="absolute z-10 -translate-x-1/2 -translate-y-full rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              aria-label={pin.label}
            >
              <div className={`flex h-8 w-8 items-center justify-center rounded-full shadow-lg ${pinColor}`}>{pinIcon}</div>
            </button>
          );
        })}

        <div className="glass absolute top-3 left-3 rounded-2xl px-3 py-1.5 text-xs font-semibold text-forest shadow-sm">
          <MapPin className="mr-1 inline h-3 w-3 text-orange" />
          Downtown District
        </div>
      </div>

      {activePin && (
        <div className="glass absolute bottom-4 left-4 right-4 z-20 animate-fade-up rounded-[24px] p-4 shadow-float sm:left-auto sm:right-4 sm:w-72">
          <p className="font-semibold text-forest">{activePin.label}</p>
          {activePin.description && <p className="mt-1 text-sm text-forest/50">{activePin.description}</p>}
        </div>
      )}

      {showLegend && (
        <div className="mt-4 flex flex-wrap gap-2">
          {(["safe", "moderate", "caution", "unsafe"] as const).map((level) => (
            <span key={level} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${safetyLevelColors[level].bg} ${safetyLevelColors[level].text} ${safetyLevelColors[level].border}`}>
              {safetyLevelColors[level].label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
