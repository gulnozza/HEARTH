"use client";

import { useState } from "react";
import { Navigation, Clock, Shield, MapPin } from "lucide-react";
import { routeOptions } from "@/lib/mockData";
import MockMap from "./MockMap";

export default function RoutePlanner() {
  const [from, setFrom] = useState("Current Location");
  const [to, setTo] = useState("");
  const [planned, setPlanned] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(routeOptions[0].id);

  function handlePlan(e: React.FormEvent) {
    e.preventDefault();
    if (to.trim()) setPlanned(true);
  }

  const activeRoute = routeOptions.find((r) => r.id === selectedRoute) ?? routeOptions[0];
  const inputClass = "w-full rounded-2xl border border-forest/10 bg-white py-3 pl-10 pr-4 text-sm text-forest placeholder:text-forest/30 focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20";

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <form onSubmit={handlePlan} className="rounded-[32px] border border-forest/5 bg-white p-6 sm:p-8 shadow-premium">
          <h3 className="text-xl font-bold text-forest">Plan Your Route</h3>
          <p className="mt-1 text-sm font-light text-forest/50">Well-lit streets with nearby safe places.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="from" className="block text-sm font-medium text-forest">From</label>
              <div className="relative mt-1.5">
                <Navigation className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-forest" />
                <input id="from" type="text" value={from} onChange={(e) => setFrom(e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="to" className="block text-sm font-medium text-forest">To</label>
              <div className="relative mt-1.5">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-orange" />
                <input id="to" type="text" required value={to} onChange={(e) => setTo(e.target.value)} placeholder="Enter destination" className={inputClass} />
              </div>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full rounded-[24px] bg-forest py-3.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light transition-all">
            Find Safest Route
          </button>
        </form>

        {planned && (
          <div className="space-y-3 animate-fade-up">
            {routeOptions.map((route) => (
              <button
                key={route.id}
                type="button"
                onClick={() => setSelectedRoute(route.id)}
                className={`w-full rounded-[24px] border p-5 text-left transition-all ${
                  selectedRoute === route.id ? "border-pink/40 bg-cream shadow-premium" : "border-forest/5 bg-white hover:border-pink/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-forest">{route.name}</span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">{route.safetyScore}% safe</span>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-forest/50">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{route.duration}</span>
                  <span>{route.distance}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <MockMap showRoute={planned} showLegend={!planned} />
        {planned && (
          <div className="mt-4 rounded-[24px] border border-emerald-200/50 bg-emerald-50 p-5 animate-fade-up">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600" />
              <span className="font-bold text-emerald-800">{activeRoute.name} Selected</span>
            </div>
            <ul className="mt-2 space-y-1">
              {activeRoute.highlights.map((h) => (
                <li key={h} className="text-sm text-emerald-700">• {h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
