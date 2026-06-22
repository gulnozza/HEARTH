import { TrendingUp } from "lucide-react";

interface SafetyScoreCardProps {
  overall: number;
  trend: string;
  areas: { name: string; score: number }[];
}

function scoreColor(score: number) {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-orange";
  return "text-red-500";
}

function scoreBarColor(score: number) {
  if (score >= 80) return "gradient-pink-orange";
  if (score >= 60) return "bg-orange";
  return "bg-red-400";
}

export default function SafetyScoreCard({ overall, trend, areas }: SafetyScoreCardProps) {
  return (
    <div className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-forest/50">City Safety Score</p>
          <p className={`mt-1 text-5xl font-bold tracking-tight ${scoreColor(overall)}`}>{overall}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
          <TrendingUp className="h-4 w-4" />
          {trend}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {areas.map((area) => (
          <div key={area.name}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-forest/70">{area.name}</span>
              <span className={`font-bold ${scoreColor(area.score)}`}>{area.score}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-forest/5">
              <div className={`h-full rounded-full ${scoreBarColor(area.score)}`} style={{ width: `${area.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
