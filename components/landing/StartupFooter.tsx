import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import HearthMascot from "@/components/HearthMascot";
import { navLinks } from "@/lib/mockData";

const productLinks = navLinks.filter((l) => l.href !== "/" && l.href !== "/about");

export default function StartupFooter() {
  return (
    <footer className="bg-forest text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Stop guessing what&apos;s safe.
                </h2>
                <p className="mt-3 text-white/50 font-light max-w-md">
                  Hearth returns the answer, the district, the source. Every time.
                </p>
            </div>
            <Link
              href="/route-planner"
              className="group inline-flex items-center gap-2 rounded-full gradient-pink-orange px-8 py-4 text-base font-bold text-forest transition-all hover:-translate-y-0.5"
            >
              Try Hearth Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <HearthMascot size={56} id="footer-logo-mascot" pose="celebrate" />
              <Logo size="md" variant="light" showText />
            </div>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              The city safety brain for Tashkent — one map, verified answers.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Product</p>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-pink transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Company</p>
            <ul className="space-y-3">
              {["About", "Manifesto", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="/about" className="text-sm text-white/60 hover:text-pink transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Resources</p>
            <ul className="space-y-3">
              {["Privacy", "Terms", "Safety Guidelines"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60 hover:text-pink transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 Hearth. All rights reserved.</p>
          <p className="text-xs text-white/30">Built with your safety in mind · Tashkent, Uzbekistan</p>
        </div>
      </div>
    </footer>
  );
}
