import Hero from "@/components/Hero";
import AIIncidentReportForm from "@/components/ai/AIIncidentReportForm";
import DistrictScoreMini from "@/components/ai/DistrictScoreMini";

export default function ReportPage() {
  return (
    <>
      <Hero
        compact
        title="AI Incident Classifier"
        subtitle="Describe what happened in natural language — Hearth AI extracts category, district, transport route, time, and severity."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-forest/5 bg-white p-6 sm:p-8 shadow-premium">
            <AIIncidentReportForm />
          </div>
          <div>
            <DistrictScoreMini />
          </div>
        </div>
      </section>
    </>
  );
}
