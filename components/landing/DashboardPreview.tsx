"use client";

import { useState } from "react";
import { Map, FileText, Route, Building2 } from "lucide-react";
import { communityReports, safePlaces, routeOptions } from "@/lib/mockData";

const tabs = [
  { id: "map", label: "Safety Map", icon: Map },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "routes", label: "Routes", icon: Route },
  { id: "places", label: "Safe Places", icon: Building2 },
];

function MiniMap() {
  return (
    <div className="relative h-full min-h-[280px] rounded-[20px] bg-gradient-to-br from-cream to-background overflow-hidden">
      <div className="absolute rounded-xl bg-emerald-400/25 border border-emerald-400/30" style={{ left: "10%", top: "15%", width: "35%", height: "30%" }} />
      <div className="absolute rounded-xl bg-orange/20 border border-orange/30" style={{ left: "50%", top: "10%", width: "30%", height: "35%" }} />
      <div className="absolute rounded-xl bg-red-400/20 border border-red-400/30" style={{ left: "55%", top: "55%", width: "28%", height: "25%" }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 25 70 Q 40 45, 55 30 Q 65 22, 75 35" fill="none" stroke="#F7A500" strokeWidth="1" />
      </svg>
      <div className="absolute top-3 left-3 glass rounded-xl px-2 py-1">
        <span className="text-[9px] font-bold text-forest">Score: 87</span>
      </div>
      <div className="absolute bottom-3 right-3 flex gap-1">
        {["Safe", "Moderate", "Caution"].map((l, i) => (
          <span key={l} className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-emerald-100 text-emerald-700" : i === 1 ? "bg-orange/20 text-orange" : "bg-red-100 text-red-600"}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function ReportsPanel() {
  return (
    <div className="space-y-2 h-full min-h-[280px] overflow-hidden">
      {communityReports.slice(0, 4).map((r) => (
        <div key={r.id} className="glass rounded-2xl p-3 hover:bg-white/90 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-orange uppercase">{r.category}</span>
            <span className="text-[9px] text-forest/40">{r.timestamp}</span>
          </div>
          <p className="text-xs font-bold text-forest mt-1">{r.title}</p>
          <p className="text-[10px] text-forest/50 mt-0.5 line-clamp-1">{r.location}</p>
        </div>
      ))}
    </div>
  );
}

function RoutesPanel() {
  return (
    <div className="space-y-2 h-full min-h-[280px]">
      {routeOptions.map((r) => (
        <div key={r.id} className="glass rounded-2xl p-4 hover:bg-white/90 transition-colors">
          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-forest">{r.name}</p>
            <span className="text-xs font-bold text-emerald-600">{r.safetyScore}%</span>
          </div>
          <p className="text-[10px] text-forest/50 mt-1">{r.duration} · {r.distance}</p>
          <div className="mt-2 h-1 rounded-full bg-forest/10">
            <div className="h-full rounded-full gradient-pink-orange" style={{ width: `${r.safetyScore}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function PlacesPanel() {
  return (
    <div className="grid grid-cols-2 gap-2 h-full min-h-[280px]">
      {safePlaces.slice(0, 4).map((p) => (
        <div key={p.id} className="glass rounded-2xl p-3 hover:bg-white/90 transition-colors">
          <p className="text-[10px] font-bold text-forest line-clamp-1">{p.name}</p>
          <p className="text-[9px] text-forest/40 mt-1">{p.distance}</p>
          <div className="mt-2 flex items-center gap-1">
            <span className="text-[9px] font-bold text-orange">★ {p.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPreview() {
  const [active, setActive] = useState("map");

  return (
    <section className="py-20 sm:py-28 bg-forest text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-pink uppercase tracking-widest mb-3">Dashboard</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your safety command center.
          </h2>
        </div>

        <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-float">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 mb-4 px-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-orange/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-4 text-xs text-white/40 font-medium">app.hearth.uz</span>
          </div>

          <div className="grid lg:grid-cols-[200px_1fr] gap-4">
            {/* Sidebar tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
                      active === tab.id
                        ? "bg-white text-forest shadow-premium"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Content panel */}
            <div className="rounded-[24px] bg-background p-4 sm:p-6 min-h-[320px]">
              {active === "map" && <MiniMap />}
              {active === "reports" && <ReportsPanel />}
              {active === "routes" && <RoutesPanel />}
              {active === "places" && <PlacesPanel />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
