import { Sparkles, Bus, Lightbulb, Users, AlertTriangle, TrendingUp } from "lucide-react";
import { getDetectedPatterns, type DetectedPattern } from "@/lib/safetyEngine";
import AIBadge from "./AIBadge";

const categoryIcons: Record<DetectedPattern["category"], typeof Bus> = {
  transit: Bus,
  lighting: Lightbulb,
  harassment: AlertTriangle,
  theft: AlertTriangle,
  "foot-traffic": Users,
  general: TrendingUp,
};

const severityStyles: Record<DetectedPattern["severity"], string> = {
  low: "border-emerald-200 bg-emerald-50",
  medium: "border-yellow-200 bg-yellow-50",
  high: "border-red-200 bg-red-50",
};

export default function AIPatternDetection() {
  const patterns = getDetectedPatterns();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <AIBadge label="Pattern Detection Engine" className="mb-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
              AI Detected Patterns
            </h2>
            <p className="mt-3 text-lg font-light text-forest/50 max-w-xl">
              Machine learning surfaces recurring safety trends across Tashkent — updated in real time from community data.
            </p>
          </div>
          <div className="rounded-[24px] bg-forest px-5 py-3 text-white text-center">
            <p className="text-2xl font-bold">{patterns.length}</p>
            <p className="text-xs text-white/50">Active patterns</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {patterns.map((pattern) => {
            const Icon = categoryIcons[pattern.category];
            return (
              <div
                key={pattern.id}
                className={`rounded-[32px] border p-6 hover-lift shadow-premium transition-all ${severityStyles[pattern.severity]}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/80">
                    <Icon className="h-5 w-5 text-forest" />
                  </div>
                  <span className="rounded-full bg-forest px-2.5 py-0.5 text-[10px] font-bold text-white">
                    {pattern.confidence}% AI
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-forest/80">
                  &ldquo;{pattern.pattern}&rdquo;
                </p>
                {pattern.district && (
                  <p className="mt-3 text-xs font-semibold text-forest/40 uppercase tracking-wider">
                    {pattern.district} · {pattern.category}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[32px] bg-gradient-to-br from-forest to-forest-light p-8 text-white">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-pink" />
            <p className="text-sm font-bold uppercase tracking-wider text-pink">How it works</p>
          </div>
          <p className="text-lg font-light text-white/70 max-w-3xl">
            Hearth AI analyzes user reports, crime data, lighting scores, transit safety, foot traffic patterns, time-of-day risk, and news incidents to detect clusters — like repeated Bus 7 reports at 8 AM — before they become widespread safety issues.
          </p>
        </div>
      </div>
    </section>
  );
}
