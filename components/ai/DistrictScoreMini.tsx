import { getAllDistrictScores, SAFETY_COLOR_STYLES } from "@/lib/safetyEngine";
import AIBadge from "./AIBadge";

export default function DistrictScoreMini() {
  const districts = getAllDistrictScores("morning").slice(0, 5);

  return (
    <div className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-forest">Tashkent Districts</h3>
        <AIBadge />
      </div>
      <p className="text-sm font-light text-forest/50 mb-4">
        AI scores update when your report is classified to a district.
      </p>
      <div className="space-y-2">
        {districts.map((d) => (
          <div key={d.id} className="flex items-center justify-between rounded-2xl bg-cream px-4 py-3">
            <span className="text-sm font-semibold text-forest">{d.name}</span>
            <span className={`text-sm font-bold ${SAFETY_COLOR_STYLES[d.color].text}`}>{d.score}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-forest/40 text-center">
        Chilonzor often flagged for Bus 7 morning reports
      </p>
    </div>
  );
}
