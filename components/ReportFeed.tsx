"use client";

import { ThumbsUp, MapPin, BadgeCheck, Clock } from "lucide-react";
import { safetyLevelColors, type CommunityReport } from "@/lib/mockData";

const categoryLabels: Record<CommunityReport["category"], string> = {
  harassment: "Harassment", theft: "Theft", suspicious: "Suspicious",
  lighting: "Lighting", safe: "Safe Update", other: "Other",
};

export default function ReportFeed({ reports }: { reports: CommunityReport[] }) {
  if (reports.length === 0) {
    return (
      <div className="rounded-[32px] border border-forest/5 bg-white p-12 text-center">
        <p className="text-forest/50">No reports match your filter.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reports.map((report) => {
        const level = safetyLevelColors[report.safetyLevel];
        return (
          <article key={report.id} className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium transition-all hover-lift">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-semibold text-orange">{categoryLabels[report.category]}</span>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${level.bg} ${level.text} ${level.border}`}>{level.label}</span>
                {report.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
                    <BadgeCheck className="h-3 w-3" />Verified
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1 text-xs text-forest/40"><Clock className="h-3 w-3" />{report.timestamp}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold text-forest">{report.title}</h3>
            <p className="mt-1.5 text-sm font-light leading-relaxed text-forest/50">{report.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm text-forest/40"><MapPin className="h-3.5 w-3.5 text-orange" />{report.location}</span>
              <button type="button" className="inline-flex items-center gap-1.5 rounded-2xl bg-cream px-3 py-1.5 text-xs font-semibold text-forest hover:bg-pink/20 transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" />{report.upvotes}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
