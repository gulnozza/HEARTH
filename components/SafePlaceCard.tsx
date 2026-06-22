import { Star, Clock, MapPin } from "lucide-react";
import type { SafePlace } from "@/lib/mockData";

const categoryLabels: Record<SafePlace["category"], string> = {
  cafe: "Café", pharmacy: "Pharmacy", hospital: "Hospital",
  police: "Police", shelter: "Shelter", transit: "Transit",
};

const categoryColors: Record<SafePlace["category"], string> = {
  cafe: "bg-orange/15 text-orange", pharmacy: "bg-emerald-100 text-emerald-700",
  hospital: "bg-pink/20 text-forest", police: "bg-blue-100 text-blue-700",
  shelter: "bg-purple-100 text-purple-700", transit: "bg-sky-100 text-sky-700",
};

export default function SafePlaceCard({ place }: { place: SafePlace }) {
  return (
    <article className="flex flex-col rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium transition-all hover-lift">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[place.category]}`}>
            {categoryLabels[place.category]}
          </span>
          <h3 className="mt-2 text-lg font-bold text-forest">{place.name}</h3>
        </div>
        <div className="flex items-center gap-1 rounded-xl bg-cream px-2.5 py-1">
          <Star className="h-3.5 w-3.5 fill-orange text-orange" />
          <span className="text-sm font-bold text-forest">{place.rating}</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-sm text-forest/50">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-orange" />
        {place.address}
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-sm text-forest/50">
        <Clock className="h-3.5 w-3.5 shrink-0 text-orange" />
        Open until {place.openUntil}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {place.features.map((f) => (
          <span key={f} className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-forest/60">{f}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-forest/5 pt-4">
        <span className="text-sm text-forest/40">{place.distance} away</span>
        <button type="button" className="rounded-2xl bg-forest px-4 py-2 text-xs font-semibold text-white hover:bg-forest-light transition-colors">
          Get Directions
        </button>
      </div>
    </article>
  );
}
