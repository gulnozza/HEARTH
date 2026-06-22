export default function Differentiator() {
  return (
    <section className="py-20 sm:py-28 bg-forest text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Other maps show streets.
            <br />
            <span className="text-pink">Hearth decides what&apos;s safe.</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/50 leading-relaxed">
            When community reports and news disagree, Hearth flags the conflict, updates the district score, and never serves stale safety data.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Conflict card — Neuron-style */}
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Two sources, disagreeing</p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-[10px] font-bold uppercase text-emerald-400">Community reports · verified</p>
                <p className="mt-2 text-sm text-white/80">
                  Bus 7 near Chilonzor: 6 harassment reports, peak 8 AM. Pattern confidence 94%.
                </p>
                <p className="mt-2 text-xs text-white/40">@community · 12 reports this week</p>
              </div>

              <div className="flex justify-center">
                <span className="rounded-full bg-orange/20 px-3 py-1 text-xs font-bold text-orange">conflict</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 opacity-70">
                <p className="text-[10px] font-bold uppercase text-white/40">Official transit page</p>
                <p className="mt-2 text-sm text-white/60">
                  Bus 7: normal schedule, no incidents reported.
                </p>
                <p className="mt-2 text-xs text-white/30">Last updated 3 months ago</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-pink/30 bg-gradient-to-br from-pink/10 to-orange/5 p-6 sm:p-8 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-pink mb-4">Verified by Hearth</p>
            <p className="text-2xl font-bold">Bus 7 — caution 7:30–8:30 AM.</p>
            <p className="mt-3 text-white/60 font-light">
              Community data overrides stale official sources. District score adjusted. Route planner updated.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/50">
              <p>Owner <span className="text-white/80">Chilonzor district model</span></p>
              <p>Conflicts <span className="text-orange">1 frozen · transit page outdated</span></p>
              <p>Pinged <span className="text-white/80">route planner, morning brief, map layer</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
