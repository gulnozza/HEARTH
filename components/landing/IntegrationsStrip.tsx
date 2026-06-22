const integrations = [
  "Tashkent Metro",
  "Bus Routes",
  "Community",
  "Police",
  "News",
  "Safe Places",
  "AI Engine",
  "Routes",
];

const stats = [
  { value: "<1s", label: "Verified safety answer" },
  { value: "10", label: "Tashkent districts" },
  { value: "0", label: "Stale scores served" },
  { value: "7", label: "Data signals fused" },
];

export default function IntegrationsStrip() {
  return (
    <section className="border-y border-forest/5 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium text-forest/40 mb-8">
          Plugs into the city you already live in
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
          {[...integrations, ...integrations].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="rounded-full border border-forest/10 bg-background px-4 py-2 text-sm font-medium text-forest/60 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-forest tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-forest/45 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
