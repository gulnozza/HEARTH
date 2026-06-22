"use client";

import { useState } from "react";
import { Loader2, Sparkles, MapPin, AlertTriangle, FileText } from "lucide-react";
import { analyzeNewsArticle, DEMO_NEWS, type NewsAnalysis } from "@/lib/aiEngine";
import AIBadge from "./AIBadge";
import HearthMascot from "@/components/HearthMascot";

const severityColors: Record<string, string> = {
  low: "bg-emerald-100 text-emerald-700",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-orange/20 text-orange",
  critical: "bg-red-100 text-red-700",
};

function AnalysisResult({ result }: { result: NewsAnalysis }) {
  return (
    <div className="animate-fade-up space-y-4">
      <div className="flex items-center justify-between">
        <AIBadge label="News Analysis Complete" />
        <span className="text-sm font-semibold text-forest/50">{result.confidence}% confidence</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[24px] border border-forest/5 bg-white p-5 shadow-premium">
          <p className="text-xs font-bold uppercase tracking-wider text-forest/40">Incident Type</p>
          <p className="mt-2 text-lg font-bold text-forest">{result.incidentType}</p>
        </div>
        <div className="rounded-[24px] border border-forest/5 bg-white p-5 shadow-premium">
          <p className="text-xs font-bold uppercase tracking-wider text-forest/40">District</p>
          <p className="mt-2 flex items-center gap-1 text-lg font-bold text-forest">
            <MapPin className="h-4 w-4 text-orange" />
            {result.district}
          </p>
        </div>
        <div className="rounded-[24px] border border-forest/5 bg-white p-5 shadow-premium">
          <p className="text-xs font-bold uppercase tracking-wider text-forest/40">Severity</p>
          <span className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-bold capitalize ${severityColors[result.severity]}`}>
            {result.severity}
          </span>
        </div>
        <div className="rounded-[24px] border border-forest/5 bg-white p-5 shadow-premium">
          <p className="text-xs font-bold uppercase tracking-wider text-forest/40">Extracted Entities</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {result.extractedEntities.map((e) => (
              <span key={e} className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-semibold text-forest">{e}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[24px] border border-orange/20 bg-orange/5 p-5">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange">
          <AlertTriangle className="h-3.5 w-3.5" />
          Safety Impact
        </p>
        <p className="mt-2 text-sm leading-relaxed text-forest/70">{result.safetyImpact}</p>
      </div>

      <div className="rounded-[24px] border border-pink/20 bg-gradient-to-br from-pink/10 to-cream p-5">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest/40">
          <FileText className="h-3.5 w-3.5" />
          Suggested Map Update
        </p>
        <p className="mt-2 text-sm leading-relaxed text-forest/70">{result.suggestedMapUpdate}</p>
      </div>

      <div className="rounded-[24px] bg-forest p-5 text-white">
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
    </div>
  );
}

export default function AINewsAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NewsAnalysis | null>(null);

  async function handleAnalyze(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const analysis = await analyzeNewsArticle(text);
      setResult(analysis);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-forest">AI News Analyzer</h3>
          <p className="mt-1 text-sm font-light text-forest/50">Paste a Tashkent news article — AI extracts safety intelligence.</p>
        </div>
        <AIBadge />
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder="Paste news article text here..."
          className="w-full resize-none rounded-[24px] border border-forest/10 bg-white px-5 py-4 text-sm text-forest placeholder:text-forest/30 focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20"
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-[24px] bg-forest px-6 py-3.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {loading ? "AI Analyzing..." : "Analyze Article"}
          </button>
          <button
            type="button"
            onClick={() => { setText(DEMO_NEWS); setResult(null); }}
            className="rounded-[24px] border border-forest/10 px-6 py-3.5 text-sm font-semibold text-forest hover:bg-cream"
          >
            Load Demo
          </button>
        </div>
      </form>

      {loading && (
        <div className="rounded-[24px] border border-pink/20 bg-pink/5 p-8 text-center">
          <HearthMascot size={80} id="news-loading-mascot" className="mx-auto animate-float-slow" />
          <p className="mt-4 text-sm font-medium text-forest/60">Hearth is reading the article...</p>
        </div>
      )}

      {result && !loading && <AnalysisResult result={result} />}
    </div>
  );
}
