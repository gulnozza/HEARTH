import Hero from "@/components/Hero";
import AISafeRoutePlanner from "@/components/ai/AISafeRoutePlanner";

export default function RoutePlannerPage() {
  return (
    <>
      <Hero
        compact
        title="AI Safe Route Planner"
        subtitle="Compare fastest vs safest routes across Tashkent — with AI explanations powered by community safety intelligence."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <AISafeRoutePlanner />
      </section>
    </>
  );
}
