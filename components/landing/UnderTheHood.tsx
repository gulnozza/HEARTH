const steps = [
  {
    num: "01",
    title: "Listens",
    description: "Ingests community reports, crime data, transit feeds, news articles, and lighting scores across Tashkent — continuously.",
  },
  {
    num: "02",
    title: "Analyzes",
    description: "AI fuses 7 safety signals per district, classifies incidents from natural language, and detects patterns like Bus 7 morning clusters.",
  },
  {
    num: "03",
    title: "Serves",
    description: "Map. Route planner. Morning brief. Same verified safety row, every surface.",
  },
];

export default function UnderTheHood() {
  return (
    <section className="py-20 sm:py-28 bg-cream/50 border-y border-forest/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Under the hood</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            Listens silently. Analyzes deeply.
            <br />
            Serves verified safety.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="rounded-[28px] border border-forest/5 bg-white p-8 shadow-premium hover-lift">
              <p className="text-4xl font-bold text-pink/60">{step.num}</p>
              <h3 className="mt-4 text-2xl font-bold text-forest">{step.title}</h3>
              <p className="mt-3 text-sm font-light text-forest/55 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
