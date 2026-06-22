import HearthMascot from "@/components/HearthMascot";
import { Map, Shield, Users, Target } from "lucide-react";

const values = [
  { icon: Users, title: "Community-Powered", description: "Safety data comes from the community — real reports from real people across Tashkent, not algorithms alone." },
  { icon: Shield, title: "Privacy First", description: "Anonymous reporting, no tracking, and your location data stays on your device." },
  { icon: Map, title: "Tashkent First", description: "Hyperlocal safety insights for every district — alleys, lighting, foot traffic, transit." },
];

const roadmap = [
  { phase: "Now", items: ["Mock safety map", "Route planner UI", "Community reports", "Safe places directory"] },
  { phase: "Next", items: ["Real map integration", "User accounts", "Push notifications", "Verified safe place program"] },
  { phase: "Future", items: ["AI safety insights", "Buddy walk mode", "Partner integrations", "City-wide rollout"] },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 pb-8 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <HearthMascot size={100} id="about-mascot" className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-forest">About Hearth</h1>
          <p className="mt-4 text-lg font-light text-forest/50">
            Heart + Earth. Your AI safety companion for Tashkent.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-forest/5 bg-white p-8 sm:p-12 shadow-premium">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-orange" />
            <h2 className="text-2xl font-bold text-forest">Our Mission</h2>
          </div>
          <p className="mt-4 text-lg font-light leading-relaxed text-forest/60">
            Hearth was created to give everyone the tools and information they need to move through Tashkent with confidence.
          </p>
          <p className="mt-4 font-light leading-relaxed text-forest/60">
            The name blends <strong className="text-forest">Heart</strong> (care, community) and <strong className="text-forest">Earth</strong> (the world beneath your feet) — your personal safety AI with a global view of your local streets.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-forest">Our Values</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[32px] border border-forest/5 bg-white p-6 text-center shadow-premium hover-lift">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-pink/20 text-forest">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-forest">{value.title}</h3>
                <p className="mt-2 text-sm font-light text-forest/50">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-forest">Roadmap</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {roadmap.map((stage) => (
              <div key={stage.phase} className="rounded-[32px] border border-forest/5 bg-white p-6 shadow-premium">
                <span className="inline-block rounded-full bg-forest px-3 py-1 text-xs font-bold text-white">{stage.phase}</span>
                <ul className="mt-4 space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-light text-forest/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
