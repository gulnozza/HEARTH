const stats = [
  { value: "12,847+", label: "Community reports" },
  { value: "10", label: "Tashkent districts" },
  { value: "342", label: "Verified safe places" },
  { value: "100%", label: "Free for citizens" },
];

const zones = [
  { label: "Yunusobod — City Center", status: "Safe", color: "bg-emerald-500", desc: "Rated safe by 47 users this week", emoji: "🟢" },
  { label: "Chilonzor — Metro area", status: "Caution", color: "bg-yellow-500", desc: "2 incidents reported in 24h", emoji: "🟡" },
  { label: "Bus 7 corridor", status: "Alert", color: "bg-orange", desc: "Harassment · 3 min ago · Live", emoji: "🔴" },
  { label: "Amir Temur Pharmacy", status: "Refuge", color: "bg-emerald-400", desc: "Open now · 120m away", emoji: "🏥" },
];

export default function LiveMapCommunity() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Live map cards — Safetymap style */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-4">Live · Tashkent</p>
            {zones.map((z) => (
              <div
                key={z.label}
                className="flex items-center gap-4 rounded-[24px] border border-forest/5 bg-white p-4 shadow-sm hover:shadow-premium transition-shadow"
              >
                <span className="text-xl">{z.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-forest truncate">{z.label}</p>
                  <p className="text-xs text-forest/45">{z.desc}</p>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold text-white ${z.color}`}>
                  {z.status}
                </span>
              </div>
            ))}
          </div>

          {/* Community stats + mascot */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-forest">
              A Tashkent safety network
            </h2>
            <p className="mt-3 text-forest/50 font-light leading-relaxed">
              Built by people who wanted to make their city safer. Hearth turns every report into intelligence for everyone.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-[24px] border border-forest/5 bg-cream/50 p-5 text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-forest">{s.value}</p>
                  <p className="mt-1 text-xs text-forest/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
