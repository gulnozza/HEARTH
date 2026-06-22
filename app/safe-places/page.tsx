"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SafePlaceCard from "@/components/SafePlaceCard";
import FilterChips from "@/components/FilterChips";
import { safePlaces, placeCategories } from "@/lib/mockData";
import { Search } from "lucide-react";

export default function SafePlacesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = safePlaces.filter((place) => {
    const matchesCategory = activeCategory === "all" || place.category === activeCategory;
    const matchesSearch =
      search === "" ||
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.address.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Hero
        compact
        title="Safe Places Directory"
        subtitle="Find nearby cafés, shelters, hospitals, police stations, and transit hubs verified by the community."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <FilterChips
            filters={placeCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-rose-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search places..."
              className="w-full rounded-2xl border border-forest/10 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-pink/50 focus:outline-none focus:ring-2 focus:ring-pink/20"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((place) => (
            <SafePlaceCard key={place.id} place={place} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-warm-brown/50">No places match your search.</p>
        )}
      </section>
    </>
  );
}
