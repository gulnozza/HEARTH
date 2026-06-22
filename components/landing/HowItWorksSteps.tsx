const steps = [
  {
    step: "1",
    title: "Open Hearth",
    description: "No account required to explore the map. Start checking your district immediately.",
  },
  {
    step: "2",
    title: "Explore your surroundings",
    description: "See color-coded district scores and recent incidents near you. Green, yellow, orange, red — instantly readable.",
  },
  {
    step: "3",
    title: "Report what you see",
    description: "Tell Hearth in plain language — AI classifies it. Rate an area or flag a bus route in seconds.",
  },
  {
    step: "4",
    title: "Stay informed",
    description: "Get your morning safety brief. Follow AI-detected patterns like Bus 7 morning clusters.",
  },
];

export default function HowItWorksSteps() {
  return (
    <section className="py-20 sm:py-28 border-y border-forest/5 bg-cream/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-2">How it works</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest">
            Simple. Community-powered. Free.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative rounded-[28px] bg-white border border-forest/5 p-6 shadow-premium">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white text-lg font-bold">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-bold text-forest">{s.title}</h3>
              <p className="mt-2 text-sm font-light text-forest/55 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
