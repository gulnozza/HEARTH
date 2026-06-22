"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, AlertTriangle } from "lucide-react";
import {
  getAllDistrictScores,
  getCityOverallScore,
  SAFETY_COLOR_STYLES,
  type DistrictSafetyResult,
  type TimeOfDay,
  type SafetyColor,
} from "@/lib/safetyEngine";
import AIBadge from "./AIBadge";

const FILL_CLASSES: Record<SafetyColor, string> = {
  green: "bg-emerald-400/35 border-emerald-500/50",
  yellow: "bg-yellow-400/30 border-yellow-500/50",
  orange: "bg-orange/30 border-orange/50",
  red: "bg-red-400/30 border-red-500/50",
};

function DistrictDetail({ district }: { district: DistrictSafetyResult }) {
  const style = SAFETY_COLOR_STYLES[district.color];
  return (
    <div className="animate-fade-up rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-forest">{district.name}</h3>
          <p className="text-sm text-forest/40">{district.nameUz} · Tashkent</p>
        </div>
        <div className="text-right">
          <p className={`text-4xl font-bold ${style.text}`}>{district.score}</p>
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${style.bg} ${style.text}`}>
            {style.label}
          </span>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-cream p-4">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest/40">
          <Sparkles className="h-3.5 w-3.5 text-pink" />
          AI Safety Summary
        </p>
        <p className="mt-2 text-sm leading-relaxed text-forest/70">{district.aiSummary}</p>
      </div>

      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-wider text-forest/40 mb-2">Top Risk Factors</p>
        <ul className="space-y-2">
          {district.topRiskFactors.map((risk) => (
            <li key={risk} className="flex items-start gap-2 text-sm text-forest/60">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-orange mt-0.5" />
              {risk}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {Object.entries(district.breakdown).slice(0, 4).map(([key, val]) => (
          <div key={key} className="rounded-xl bg-forest/5 p-2 text-center">
            <p className="text-lg font-bold text-forest">{val}</p>
            <p className="text-[9px] font-medium text-forest/40 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TashkentDistrictMap() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("afternoon");
  const [selected, setSelected] = useState<DistrictSafetyResult | null>(null);

  const districts = getAllDistrictScores(timeOfDay);
  const cityScore = getCityOverallScore(timeOfDay);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <AIBadge label="AI Safety Score Engine" />
          <span className="text-sm text-forest/50">Tashkent · {districts.length} districts</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(["morning", "afternoon", "evening", "night"] as TimeOfDay[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setTimeOfDay(t); setSelected(null); }}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-all ${
                timeOfDay === t ? "bg-forest text-white" : "border border-forest/10 text-forest/60 hover:bg-cream"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative rounded-[32px] border border-forest/5 bg-white p-4 shadow-premium">
            <div className="relative aspect-[4/3] w-full rounded-[24px] bg-gradient-to-br from-cream via-background to-pink/5 overflow-hidden">
              {/* City outline hint */}
              <div className="absolute inset-4 rounded-3xl border-2 border-dashed border-forest/10" />
              <p className="absolute top-6 left-6 text-xs font-bold text-forest/40 uppercase tracking-widest">Tashkent</p>

              {districts.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelected(d)}
                  className={`absolute rounded-2xl border-2 transition-all hover:scale-[1.02] hover:z-10 focus:outline-none focus:ring-2 focus:ring-pink ${
                    FILL_CLASSES[d.color]
                  } ${selected?.id === d.id ? "ring-2 ring-pink ring-offset-2 z-10" : ""}`}
                  style={{
                    left: `${d.mapPosition.x}%`,
                    top: `${d.mapPosition.y}%`,
                    width: `${d.mapPosition.width}%`,
                    height: `${d.mapPosition.height}%`,
                  }}
                >
                  <span className="absolute bottom-1 left-1.5 text-[9px] sm:text-[10px] font-bold text-forest/80 leading-tight">
                    {d.name}
                  </span>
                  <span className={`absolute top-1 right-1.5 text-[10px] sm:text-xs font-bold ${SAFETY_COLOR_STYLES[d.color].text}`}>
                    {d.score}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {(["green", "yellow", "orange", "red"] as SafetyColor[]).map((c) => (
                <span key={c} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${SAFETY_COLOR_STYLES[c].bg} ${SAFETY_COLOR_STYLES[c].text} ${SAFETY_COLOR_STYLES[c].border}`}>
                  <span className={`h-2 w-2 rounded-full ${SAFETY_COLOR_STYLES[c].fill}`} />
                  {SAFETY_COLOR_STYLES[c].label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[32px] bg-forest p-6 text-white shadow-float">
            <p className="text-sm font-medium text-white/50">Tashkent Overall</p>
            <p className="text-5xl font-bold mt-1">{cityScore}</p>
            <div className="flex items-center gap-1 mt-2 text-emerald-400 text-sm">
              <TrendingUp className="h-4 w-4" />
              AI-adjusted for {timeOfDay}
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full gradient-pink-orange" style={{ width: `${cityScore}%` }} />
            </div>
          </div>

          <div className="rounded-[32px] border border-forest/5 bg-white p-4 shadow-premium max-h-[320px] overflow-y-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-forest/40 mb-3">All Districts</p>
            <div className="space-y-2">
              {districts.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setSelected(d)}
                  className={`w-full flex items-center justify-between rounded-2xl px-3 py-2.5 text-left transition-all ${
                    selected?.id === d.id ? "bg-pink/10 border border-pink/30" : "hover:bg-cream"
                  }`}
                >
                  <span className="text-sm font-semibold text-forest">{d.name}</span>
                  <span className={`text-sm font-bold ${SAFETY_COLOR_STYLES[d.color].text}`}>{d.score}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selected && <DistrictDetail district={selected} />}
    </div>
  );
}
