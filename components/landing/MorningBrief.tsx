import Link from "next/link";
import Logo from "@/components/Logo";
import HearthMascot from "@/components/HearthMascot";

export default function MorningBrief() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight leading-tight">
              Your morning safety brief, in the inbox you already check.
            </h2>
            <p className="mt-4 text-lg font-light text-forest/50">
              What shifted overnight, which routes are risky, what you committed to. No new app to learn.
            </p>
          </div>

          <div className="rounded-[28px] border border-forest/10 bg-white shadow-float overflow-hidden">
            <div className="flex items-center justify-between border-b border-forest/5 bg-cream/50 px-5 py-3">
              <div className="flex items-center gap-2">
                <HearthMascot size={36} id="brief-mascot" />
                <span className="text-sm font-semibold text-forest">Hearth daily brief</span>
              </div>
              <span className="text-xs text-forest/35">06:00 UZT</span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Logo showText={false} size="sm" />
                <div>
                  <p className="font-semibold text-forest">Hearth</p>
                  <p className="text-xs text-forest/40">brief@hearth.uz</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-forest">3 district shifts. 2 routes at risk. 1 pattern new.</h3>
              <p className="mt-2 text-sm text-forest/45">Built from 47 reports, 8 news items, and 6 transit feeds overnight.</p>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-forest/35">What moved</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-forest/65">
                    <li>· Chilonzor score dropped 6 pts — Bus 7 cluster</li>
                    <li>· Yunusobod safer after 6 PM — foot traffic ↑</li>
                    <li>· Shayxontohur caution near Chorsu 4–7 PM</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-forest/35">Needs you</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-forest/65">
                    <li>· Review safest route to work (updated)</li>
                    <li>· Bektemir still high risk after dark</li>
                  </ul>
                </div>
              </div>

              <Link href="/safety-map" className="mt-6 inline-block text-sm font-semibold text-orange hover:underline">
                View full brief →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-4 gap-4 text-center">
          {[
            { n: "47", l: "Reports parsed" },
            { n: "8", l: "News cross-referenced" },
            { n: "6", l: "Transit feeds linked" },
            { n: "1", l: "New pattern detected" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-forest/5 bg-white py-4">
              <p className="text-2xl font-bold text-forest">{s.n}</p>
              <p className="text-xs text-forest/40 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
