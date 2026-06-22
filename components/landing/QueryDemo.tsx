"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const queries = [
  { tag: "routes", q: "safest route from Chilonzor to Yunusobod at night?" },
  { tag: "transit", q: "is Bus 7 safe at 8 AM?" },
  { tag: "district", q: "why is Bektemir red on the map?" },
  { tag: "places", q: "nearest verified safe place near Amir Temur?" },
  { tag: "reports", q: "harassment reports in Yashnobod this week?" },
  { tag: "news", q: "safety impact of Chorsu Bazaar incident?" },
  { tag: "lighting", q: "which districts have poor lighting?" },
  { tag: "patterns", q: "what patterns did AI detect today?" },
];

export default function QueryDemo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % queries.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            One map. Every question answered.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-wrap gap-2">
            {queries.map((item, i) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-4 py-2 text-left text-sm transition-all ${
                  active === i
                    ? "bg-forest text-white"
                    : "border border-forest/10 text-forest/55 hover:border-forest/20"
                }`}
              >
                <span className="text-[10px] font-bold uppercase opacity-60">{item.tag}</span>
                <span className="block mt-0.5">{item.q}</span>
              </button>
            ))}
          </div>

          <div className="rounded-[28px] border border-forest/10 bg-white shadow-float sticky top-24">
            <div className="flex items-center gap-2 border-b border-forest/5 px-5 py-3">
              <span className="font-bold text-forest">Hearth</span>
              <span className="text-forest/30 text-sm">⌘K</span>
            </div>
            <div className="p-6 min-h-[160px] flex items-center">
              <p className="text-lg text-forest/70">
                <span className="text-forest/30">{queries[active].tag} · </span>
                {queries[active].q}
              </p>
            </div>
            <div className="border-t border-forest/5 px-5 py-3">
              <Link href="/safety-map" className="text-sm font-semibold text-orange hover:underline">
                Try on the map →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
