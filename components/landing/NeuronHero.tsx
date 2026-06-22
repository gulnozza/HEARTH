import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/mockData";

export default function NeuronHero() {
  return (
    <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-pink/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-1.5 mb-8 text-xs font-semibold text-forest/60 uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Now in beta · Tashkent
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-forest leading-[1.08]">
          One map.
          <br />
          For every street
          <br />
          <span className="gradient-text">you walk.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-forest/50 font-light max-w-2xl mx-auto leading-relaxed">
          Hearth captures how Tashkent moves and serves verified safety answers to every person navigating the city.
        </p>

        <Link
          href="/route-planner"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-semibold text-white shadow-premium hover:bg-forest-light transition-all"
        >
          Try Hearth Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Product preview — Neuron-style ask UI */}
      <div className="mx-auto max-w-2xl mt-16 px-4 sm:px-6">
        <div className="rounded-[28px] border border-forest/10 bg-white shadow-float overflow-hidden">
          <div className="flex items-center justify-between border-b border-forest/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <Logo showText={false} size="sm" />
              <span className="text-sm font-semibold text-forest">hearth</span>
              <span className="text-forest/30">·</span>
              <span className="text-sm text-forest/40">ask anything</span>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              connected
            </span>
          </div>
          <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-cream/50 to-white min-h-[200px]">
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-br-md bg-forest px-4 py-2.5 text-sm text-white max-w-[85%]">
                Is Bus 7 safe at 8 AM near Chilonzor?
              </div>
            </div>
            <div className="flex gap-3">
              <Logo showText={false} size="sm" />
              <div className="rounded-2xl rounded-tl-md border border-forest/5 bg-white px-4 py-3 text-sm text-forest/80 max-w-[90%] shadow-sm">
                <p className="font-medium text-forest">Caution advised.</p>
                <p className="mt-1 text-forest/60 leading-relaxed">
                  4 harassment reports on Bus 7 between 7:30–8:30 AM this week. AI recommends Metro Chilonzor or the safest walking route via Mustaqillik Ave.
                </p>
                <p className="mt-2 text-xs text-forest/40">Verified · Chilonzor district · 94% confidence</p>
              </div>
            </div>
          </div>
          <div className="border-t border-forest/5 px-5 py-2.5 text-center">
            <p className="text-[11px] text-forest/35">Same verified answer · in the app, on the map, in your morning brief</p>
          </div>
        </div>
      </div>
    </section>
  );
}
