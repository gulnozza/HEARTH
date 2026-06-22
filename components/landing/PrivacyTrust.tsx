const trustItems = [
  {
    title: "Anonymous by default.",
    description: "Reports can be submitted without identity. Your location stays on your device.",
  },
  {
    title: "District-level controls.",
    description: "Choose which Tashkent districts you want alerts for. Exclude areas you don't travel.",
  },
  {
    title: "Community-scoped.",
    description: "Safety data is isolated per city. Tashkent data doesn't mix with other regions.",
  },
  {
    title: "Data you own.",
    description: "Delete any report anytime. Mock MVP — nothing leaves your browser yet.",
  },
];

export default function PrivacyTrust() {
  return (
    <section className="py-20 sm:py-28 border-t border-forest/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Passive capture, on your terms</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest">
            Silently analyzes. Never silently shares.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="rounded-[24px] border border-forest/5 bg-white p-6">
              <h3 className="font-bold text-forest">{item.title}</h3>
              <p className="mt-2 text-sm font-light text-forest/55 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-forest/35">
          Hackathon MVP · Mock AI · Local only · Built for Tashkent, Uzbekistan
        </p>
      </div>
    </section>
  );
}
