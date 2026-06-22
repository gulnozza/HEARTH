import { GraduationCap, Baby, Globe, Accessibility, Users, User } from "lucide-react";

const profiles = [
  {
    title: "Women",
    description: "Harassment alerts, safe routes, and trusted places.",
    icon: User,
    gradient: "from-pink/30 to-pink/10",
    stat: "68% of users",
  },
  {
    title: "Students",
    description: "Campus safety, late-night routes, and peer reports.",
    icon: GraduationCap,
    gradient: "from-orange/20 to-orange/5",
    stat: "240 campuses",
  },
  {
    title: "Parents",
    description: "Family-safe zones, childcare facilities, and alerts.",
    icon: Baby,
    gradient: "from-emerald-100 to-emerald-50",
    stat: "Family mode",
  },
  {
    title: "Elderly",
    description: "Accessible paths, rest stops, and emergency support.",
    icon: Users,
    gradient: "from-blue-100 to-blue-50",
    stat: "Large text mode",
  },
  {
    title: "Wheelchair Users",
    description: "Ramp access, elevator routes, and barrier-free navigation.",
    icon: Accessibility,
    gradient: "from-violet-100 to-violet-50",
    stat: "ADA verified",
  },
  {
    title: "Tourists",
    description: "Neighborhood guides, scam alerts, and safe transit.",
    icon: Globe,
    gradient: "from-amber-100 to-amber-50",
    stat: "12 languages",
  },
];

export default function UserProfiles() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange uppercase tracking-widest mb-3">For Everyone</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            Built for how you move.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <div
                key={profile.title}
                className={`group rounded-[32px] bg-gradient-to-br ${profile.gradient} border border-forest/5 p-8 hover-lift shadow-premium`}
              >
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 rounded-[20px] bg-white/80 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-forest" />
                  </div>
                  <span className="text-[10px] font-bold text-forest/40 uppercase tracking-wider bg-white/60 rounded-full px-3 py-1">
                    {profile.stat}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-forest">{profile.title}</h3>
                <p className="mt-2 text-forest/50 font-light leading-relaxed">{profile.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
