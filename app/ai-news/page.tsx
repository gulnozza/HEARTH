import Hero from "@/components/Hero";
import AINewsAnalyzer from "@/components/ai/AINewsAnalyzer";

export default function AINewsPage() {
  return (
    <>
      <Hero
        compact
        title="AI News Analyzer"
        subtitle="Paste a Tashkent news article — AI extracts incident type, district, severity, safety impact, and suggested map updates."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-forest/5 bg-white p-6 sm:p-8 shadow-premium">
          <AINewsAnalyzer />
        </div>
      </section>
    </>
  );
}
