import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 12847, label: "Reports submitted", suffix: "+" },
  { value: 342, label: "Safe places verified", suffix: "" },
  { value: 89420, label: "Routes planned", suffix: "+" },
  { value: 48, label: "Communities protected", suffix: "" },
];

export default function CommunityImpact() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-pink/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">Impact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            Community-powered safety.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[32px] glass p-8 sm:p-10 text-center hover-lift shadow-premium"
            >
              <p className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-forest/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Visual bar chart illustration */}
        <div className="mt-16 rounded-[32px] bg-forest p-8 sm:p-12 shadow-float">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Growing every day.
              </h3>
              <p className="mt-3 text-white/50 font-light">
                Real women sharing real data. Every report makes the next route safer.
              </p>
            </div>
            <div className="flex items-end justify-center gap-3 h-32">
              {[40, 55, 48, 72, 65, 88, 95].map((h, i) => (
                <div
                  key={i}
                  className="w-8 sm:w-10 rounded-t-xl gradient-pink-orange opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
