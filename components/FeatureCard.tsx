import Link from "next/link";
import { Map, MapPin, FileWarning, Building2, ArrowUpRight } from "lucide-react";

const icons = {
  map: Map,
  route: MapPin,
  report: FileWarning,
  places: Building2,
};

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof icons;
}

export default function FeatureCard({ title, description, href, icon }: FeatureCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition-all hover:border-rose-200 hover:shadow-md hover:shadow-rose-100/50"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-peach-100 text-rose-600 transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-warm-brown">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-brown/60">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-rose-600">
        Explore
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
