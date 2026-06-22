"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/mockData";

const navItems = [
  { href: "/safety-map", label: "Product" },
  { href: "/ai-news", label: "AI Engine" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-premium border-b border-forest/5" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo size="sm" showText />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-forest" : "text-forest/50 hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/route-planner"
            className="group inline-flex items-center gap-1.5 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-forest-light"
          >
            Try Hearth Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2.5 text-forest hover:bg-forest/5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="glass border-t border-forest/5 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  pathname === link.href ? "bg-forest text-white" : "text-forest/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/route-planner"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-white text-center"
            >
              Try Hearth Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
