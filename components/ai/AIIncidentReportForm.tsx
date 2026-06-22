"use client";

import { useState } from "react";
import { Loader2, Sparkles, MapPin, Clock, Bus, AlertTriangle, CheckCircle2 } from "lucide-react";
import { classifyIncidentReport, DEMO_REPORT, type ClassifiedReport } from "@/lib/aiEngine";
import AIBadge from "./AIBadge";
import HearthMascot from "@/components/HearthMascot";

const categoryColors: Record<string, string> = {
  harassment: "bg-red-100 text-red-700",
  theft: "bg-orange/20 text-orange",
  transit: "bg-blue-100 text-blue-700",
  lighting: "bg-yellow-100 text-yellow-800",
  suspicious: "bg-purple-100 text-purple-700",
  safe: "bg-emerald-100 text-emerald-700",
  other: "bg-forest/10 text-forest",
};

const severityColors: Record<string, string> = {
  low: "text-emerald-600",
  medium: "text-orange",
  high: "text-red-600",
  critical: "text-red-800",
};

function ResultCard({ result }: { result: ClassifiedReport }) {
  return (
    <div className="animate-fade-up space-y-4">
      <div className="flex items-center justify-between">
        <AIBadge label="AI Analysis Complete" />
        <span className="text-sm font-semibold text-forest/50">{result.confidence}% confidence</span>
      </div>

      <div className="rounded-[24px] border border-pink/30 bg-gradient-to-br from-pink/10 to-cream p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">Category</p>
            <span className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-bold capitalize ${categoryColors[result.category]}`}>
              {result.category}
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">Severity</p>
            <p className={`mt-1 text-lg font-bold capitalize ${severityColors[result.severity]}`}>{result.severity}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">District</p>
            <p className="mt-1 font-bold text-forest">{result.district}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">Location</p>
            <p className="mt-1 flex items-center gap-1 font-medium text-forest/70">
              <MapPin className="h-3.5 w-3.5 text-orange" />
              {result.location}
            </p>
          </div>
          {result.transportRoute && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">Transport Route</p>
              <p className="mt-1 flex items-center gap-1 font-bold text-forest">
                <Bus className="h-3.5 w-3.5 text-orange" />
                {result.transportRoute}
              </p>
            </div>
          )}
          {result.time && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-forest/40">Time</p>
              <p className="mt-1 flex items-center gap-1 font-bold text-forest">
                <Clock className="h-3.5 w-3.5 text-orange" />
                {result.time}
              </p>
            </div>
          )}
        </div>

        <div className="mt-5 rounded-2xl bg-white/80 p-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest/40">
            <AlertTriangle className="h-3.5 w-3.5 text-orange" />
            Recommended Action
          </p>
          <p className="mt-2 text-sm leading-relaxed text-forest/70">{result.recommendedAction}</p>
        </div>
      </div>

      <div className="rounded-[24px] border border-forest/5 bg-forest p-5 text-white">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink">
          <Sparkles className="h-3.5 w-3.5" />
          AI Reasoning Chain
        </p>
        <ul className="mt-3 space-y-2">
          {result.aiReasoning.map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
              {step}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        <p className="text-sm text-emerald-800">Report logged to Tashkent safety intelligence model.</p>
      </div>
    </div>
  );
}

export default function AIIncidentReportForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ClassifiedReport | null>(null);

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const classified = await classifyIncidentReport(text);
      setResult(classified);
    } finally {
      setLoading(false);
    }
  }

  function loadDemo() {
    setText(DEMO_REPORT);
    setResult(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-forest">AI Incident Classifier</h3>
          <p className="mt-1 text-sm font-light text-forest/50">Describe what happened in your own words — AI extracts the details.</p>
        </div>
        <AIBadge />
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          placeholder='e.g. "Bus 7 felt unsafe at 8 AM near Chilonzor. A man followed me."'
          className="w-full resize-none rounded-[24px] border border-forest/10 bg-white px-5 py-4 text-sm text-forest placeholder:text-forest/30 focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20"
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-[24px] bg-forest px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition-all hover:bg-forest-light disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? "AI Analyzing..." : "Analyze with AI"}
          </button>
          <button
            type="button"
            onClick={loadDemo}
            className="rounded-[24px] border border-forest/10 px-6 py-3.5 text-sm font-semibold text-forest hover:bg-cream transition-colors"
          >
            Load Demo
          </button>
        </div>
      </form>

      {loading && (
        <div className="rounded-[24px] border border-pink/20 bg-pink/5 p-8 text-center">
          <HearthMascot size={80} id="ai-loading-mascot" className="mx-auto animate-float-slow" />
          <p className="mt-4 text-sm font-medium text-forest/60">Hearth AI is parsing your report...</p>
          <p className="mt-1 text-xs text-forest/40">Extracting location · district · transport · severity</p>
        </div>
      )}

      {result && !loading && <ResultCard result={result} />}
    </div>
  );
}
