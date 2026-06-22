import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "py-12 sm:py-16" : "py-20 sm:py-28"}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-pink/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-forest sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg font-light leading-relaxed text-forest/55 sm:text-xl">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-[24px] bg-forest px-6 py-3 text-sm font-semibold text-white shadow-premium transition-all hover:bg-forest-light hover:-translate-y-0.5"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-[24px] border-2 border-forest/10 bg-white px-6 py-3 text-sm font-semibold text-forest transition-all hover:border-pink/40 hover:bg-cream"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
