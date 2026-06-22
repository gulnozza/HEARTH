import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function GAngelHero() {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-pink/15 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-4 py-1.5 mb-6 text-xs font-semibold text-forest/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Your personal safety AI · Tashkent
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-forest leading-[1.1]">
            Walk and explore
            <br />
            Tashkent{" "}
            <span className="gradient-text italic font-serif">in serenity</span>
          </h1>

          <p className="mt-5 text-lg text-forest/50 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hearth is your AI safety companion. Scroll down — she&apos;ll guide you through the city.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="/route-planner"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-white shadow-premium hover:bg-forest-light"
            >
              Try Hearth Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/safety-map"
              className="inline-flex items-center justify-center rounded-full border border-forest/15 bg-white px-7 py-3.5 text-sm font-semibold text-forest hover:bg-cream"
            >
              Explore the map
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
            {["Privacy first", "Anonymous reports", "Free for everyone", "AI-powered"].map((t) => (
              <span key={t} className="rounded-full bg-cream border border-forest/8 px-3 py-1 text-xs font-medium text-forest/55">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Alert cards — mascot runs in via scroll runner */}
        <div className="relative mt-12 flex justify-center gap-4 flex-wrap">
          <div className="rounded-[20px] border border-forest/10 bg-white px-4 py-3 shadow-float max-w-[200px]">
            <p className="text-[10px] font-bold uppercase text-red-500 tracking-wider">Incident nearby</p>
            <p className="text-xs font-semibold text-forest mt-0.5">Reported 2 min ago</p>
            <p className="text-[10px] text-forest/40">180m · Chilonzor</p>
          </div>
          <div className="rounded-[20px] border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-premium max-w-[180px]">
            <p className="text-[10px] font-bold text-emerald-700">🟢 Sector safe</p>
            <p className="text-xs text-forest/60 mt-0.5">Yunusobod · 47 ratings</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-xl mt-14 px-4 sm:px-6">
        <div className="rounded-[28px] border border-forest/10 bg-white shadow-float overflow-hidden">
          <div className="flex items-center gap-2 border-b border-forest/5 px-5 py-3">
            <Logo showText={false} size="sm" />
            <span className="text-sm font-semibold text-forest">Hearth</span>
            <span className="text-forest/30 text-xs">· your safety AI</span>
          </div>
          <div className="p-5 space-y-3 bg-gradient-to-b from-cream/40 to-white">
            <p className="text-sm text-forest/50 text-right">Is it safe to walk home now?</p>
            <div className="rounded-2xl rounded-tl-sm bg-forest/5 border border-forest/5 px-4 py-3 text-sm text-forest/75">
              <span className="font-semibold text-forest">Hearth says:</span> Mustaqillik Ave is your safest bet tonight — 91% score, well-lit, 2 safe places on route.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
