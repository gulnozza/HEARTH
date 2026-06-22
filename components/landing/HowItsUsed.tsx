"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "me",
    label: "Just me",
    title: "Just me",
    description: "A safety brain that doesn't make you organize anything.",
    bullets: [
      "Routes, reports, and safe places in one query",
      "Morning safety brief while you sleep",
      "No account needed for the demo",
    ],
    preview: {
      label: "Personal · Dilnoza",
      status: "live",
      stats: ["Reports nearby: 3", "Safest route ready", "District score: 74"],
      query: "what's the safest way home from Yunusobod at 9 PM?",
      answer: "Mustaqillik Ave → Amir Temur. 91% safe score. 2 verified safe places along route. Avoid Bunyodkor shortcut (3 lighting reports).",
    },
  },
  {
    id: "commute",
    label: "My commute",
    title: "My commute",
    description: "Every bus route, metro line, and alley risk is one query away.",
    bullets: [
      "Bus 7, Metro, and marshrutka patterns tracked",
      "Time-of-day risk adjustments",
      "Fastest vs safest route comparison",
    ],
    preview: {
      label: "Commute · Bus 7 corridor",
      status: "live",
      stats: ["Peak risk: 8 AM", "Alt route ready", "4 patterns detected"],
      query: "why is Bus 7 flagged every morning?",
      answer: "AI detected 6 repeated harassment reports between 7:30–8:30 AM near Chilonzor metro. Pattern confidence: 94%. Recommend Metro or safest walking route.",
    },
  },
  {
    id: "district",
    label: "My district",
    title: "My district",
    description: "When reports spike, Hearth flags the zone and serves verified scores only.",
    bullets: [
      "10 Tashkent districts scored in real time",
      "Conflict detection across news + community data",
      "AI summaries per district",
    ],
    preview: {
      label: "District · Chilonzor",
      status: "caution",
      stats: ["Score: 58", "Lighting reports ↑", "Bus 7 flagged"],
      query: "why is Chilonzor orange on the map?",
      answer: "Poor lighting near metro exits (12 reports this week) + Bus 7 morning cluster. Score dropped 6 points since Monday. Top risk: unlit park paths after 9 PM.",
    },
  },
  {
    id: "community",
    label: "My community",
    title: "My community",
    description: "Natural language reports become structured safety intelligence for everyone.",
    bullets: [
      "AI incident classifier from plain text",
      "News articles → map updates",
      "Pattern detection across the city",
    ],
    preview: {
      label: "Community · 12,847 reports",
      status: "live",
      stats: ["6 AI patterns", "342 safe places", "48 communities"],
      query: "paste a news article about Chorsu Bazaar",
      answer: "Incident: phone snatching. District: Shayxontohur. Severity: high. Map update: caution overlay near Chorsu, 4–7 PM peak. Safety impact: route planner will avoid market alleys.",
    },
  },
];

export default function HowItsUsed() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">How it&apos;s used</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            One map. Four ways to use it.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === i
                  ? "bg-forest text-white shadow-premium"
                  : "border border-forest/10 text-forest/60 hover:bg-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-xs font-bold text-forest/35 uppercase tracking-widest mb-2">
              {String(active + 1).padStart(2, "0")} / {String(tabs.length).padStart(2, "0")}
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-forest">{tab.title}</h3>
            <p className="mt-3 text-lg font-light text-forest/50">{tab.description}</p>
            <ul className="mt-6 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-forest/65">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/safety-map"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-forest hover:gap-2 transition-all"
            >
              Explore <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[28px] border border-forest/10 bg-white shadow-premium overflow-hidden">
            <div className="flex items-center justify-between border-b border-forest/5 px-5 py-3">
              <span className="text-sm font-semibold text-forest">{tab.preview.label}</span>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${
                tab.preview.status === "caution" ? "bg-orange/20 text-orange" : "bg-emerald-100 text-emerald-700"
              }`}>
                {tab.preview.status}
              </span>
            </div>
            <div className="p-5 space-y-3">
              {tab.preview.stats.map((s) => (
                <div key={s} className="flex justify-between text-sm border-b border-forest/5 pb-2">
                  <span className="text-forest/40">{s.split(":")[0]}</span>
                  <span className="font-semibold text-forest">{s.includes(":") ? s.split(":")[1].trim() : s}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-forest/5 p-5 bg-cream/30">
              <p className="text-sm text-forest/50 italic">&gt; {tab.preview.query}</p>
              <p className="mt-3 text-sm text-forest/75 leading-relaxed">{tab.preview.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
