"use client";

interface FilterChip {
  id: string;
  label: string;
}

interface FilterChipsProps {
  filters: FilterChip[];
  active: string;
  onChange: (id: string) => void;
}

export default function FilterChips({ filters, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onChange(filter.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
            active === filter.id
              ? "bg-forest text-white shadow-premium"
              : "border border-forest/10 bg-white text-forest/60 hover:border-pink/30 hover:bg-cream"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
