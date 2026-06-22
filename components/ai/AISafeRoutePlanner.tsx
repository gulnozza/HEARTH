"use client";

import { useState } from "react";
import { Navigation, MapPin, Clock, Sparkles, Shield, Zap, Loader2 } from "lucide-react";
import { TASHKENT_ROUTES } from "@/lib/safetyEngine";
import { generateSafeRouteExplanation } from "@/lib/aiEngine";
import type { TimeOfDay } from "@/lib/safetyEngine";
import AIBadge from "./AIBadge";

export default function AISafeRoutePlanner() {
  const [from, setFrom] = useState("Chilonzor Metro");
  const [to, setTo] = useState("Yunusobod Bazaar");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("morning");
  const [planned, setPlanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiExplanation, setAiExplanation] = useState("");

  async function handlePlan(e: React.FormEvent) {
    e.preventDefault();
    if (!to.trim()) return;
    setLoading(true);
    setPlanned(false);
    await new Promise((r) => setTimeout(r, 1000));
    setAiExplanation(generateSafeRouteExplanation(from, to, timeOfDay));
    setPlanned(true);
    setLoading(false);
  }

  const inputClass = "w-full rounded-2xl border border-forest/10 bg-white py-3 pl-10 pr-4 text-sm text-forest focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20";

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <AIBadge label="AI Route Intelligence" />
      </div>

      <form onSubmit={handlePlan} className="rounded-[32px] border border-forest/5 bg-white p-6 sm:p-8 shadow-premium">
        <h3 className="text-xl font-bold text-forest">Plan Route in Tashkent</h3>
        <p className="mt-1 text-sm font-light text-forest/50">AI compares fastest vs safest routes using live safety data.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-forest">From</label>
            <div className="relative mt-1.5">
              <Navigation className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest" />
              <input value={from} onChange={(e) => setFrom(e.target.value)} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-forest">To</label>
            <div className="relative mt-1.5">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-orange" />
              <input value={to} onChange={(e) => setTo(e.target.value)} required className={inputClass} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-forest mb-2">Time of Day</label>
          <div className="flex flex-wrap gap-2">
            {(["morning", "afternoon", "evening", "night"] as TimeOfDay[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeOfDay(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all ${
                  timeOfDay === t ? "bg-forest text-white" : "border border-forest/10 text-forest/60 hover:bg-cream"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-[24px] bg-forest py-3.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {loading ? "AI Computing Routes..." : "Compare Routes with AI"}
        </button>
      </form>

      {planned && (
        <div className="grid gap-6 lg:grid-cols-2 animate-fade-up">
          {/* Fastest */}
          <div className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/20">
                <Zap className="h-6 w-6 text-orange" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-forest">{TASHKENT_ROUTES.fastest.name}</h4>
                <p className="text-sm text-forest/50">{TASHKENT_ROUTES.fastest.path}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-forest/60">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{TASHKENT_ROUTES.fastest.duration}</span>
              <span>{TASHKENT_ROUTES.fastest.distance}</span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-forest/50">Safety Score</span>
                <span className="font-bold text-orange">{TASHKENT_ROUTES.fastest.safetyScore}%</span>
              </div>
              <div className="h-2 rounded-full bg-forest/5">
                <div className="h-full rounded-full bg-orange" style={{ width: `${TASHKENT_ROUTES.fastest.safetyScore}%` }} />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {TASHKENT_ROUTES.fastest.via.map((v) => (
                <span key={v} className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-forest/60">{v}</span>
              ))}
            </div>
          </div>

          {/* Safest */}
          <div className="rounded-[32px] border-2 border-pink/40 bg-gradient-to-br from-pink/10 to-cream p-6 shadow-float relative">
            <div className="absolute -top-3 right-4">
              <AIBadge label="AI Recommended" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-pink-orange">
                <Shield className="h-6 w-6 text-forest" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-forest">{TASHKENT_ROUTES.safest.name}</h4>
                <p className="text-sm text-forest/50">{TASHKENT_ROUTES.safest.path}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-forest/60">
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{TASHKENT_ROUTES.safest.duration}</span>
              <span>{TASHKENT_ROUTES.safest.distance}</span>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-forest/50">Safety Score</span>
                <span className="font-bold text-emerald-600">{TASHKENT_ROUTES.safest.safetyScore}%</span>
              </div>
              <div className="h-2 rounded-full bg-forest/5">
                <div className="h-full rounded-full gradient-pink-orange" style={{ width: `${TASHKENT_ROUTES.safest.safetyScore}%` }} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-forest/40 mb-2">Safe Places Along Route</p>
              <div className="flex flex-wrap gap-1.5">
                {TASHKENT_ROUTES.safest.safePlaces.map((p) => (
                  <span key={p} className="rounded-full bg-white/80 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {planned && aiExplanation && (
        <div className="rounded-[32px] bg-forest p-6 sm:p-8 text-white animate-fade-up">
          <p className="flex items-center gap-2 text-sm font-bold text-pink">
            <Sparkles className="h-4 w-4" />
            AI Safety Explanation
          </p>
          <p className="mt-4 text-lg font-light leading-relaxed text-white/80">{aiExplanation}</p>
          <p className="mt-4 text-sm text-white/50 italic">
            &ldquo;This route avoids recent reports, passes verified safe places, and uses better-lit areas.&rdquo;
          </p>
        </div>
      )}

      {/* Route visualization */}
      {planned && (
        <div className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium animate-fade-up">
          <p className="text-sm font-bold text-forest mb-4">Route Visualization — Tashkent</p>
          <div className="relative aspect-[16/7] rounded-[24px] bg-gradient-to-br from-cream to-background overflow-hidden">
            <div className="absolute top-[40%] left-[10%] right-[10%] h-1.5 rounded-full bg-orange/40" />
            <div className="absolute top-[55%] left-[15%] right-[20%] h-2 rounded-full bg-gradient-to-r from-forest via-orange to-pink" />
            <div className="absolute top-[38%] left-[10%] h-4 w-4 rounded-full bg-forest border-2 border-white shadow" />
            <div className="absolute top-[53%] right-[20%] h-4 w-4 rounded-full bg-pink border-2 border-white shadow" />
            <span className="absolute top-[30%] left-[8%] text-[10px] font-bold text-forest">Chilonzor</span>
            <span className="absolute top-[48%] right-[18%] text-[10px] font-bold text-forest">Yunusobod</span>
            <span className="absolute bottom-3 left-3 text-[10px] text-forest/40">— Fastest (orange) · Safest (gradient)</span>
          </div>
        </div>
      )}
    </div>
  );
}
