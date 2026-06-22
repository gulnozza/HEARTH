"use client";

import { Phone } from "lucide-react";

export default function EmergencyButton() {
  return (
    <a
      href="tel:911"
      className="fixed bottom-6 right-6 z-50 flex h-14 items-center justify-center gap-2 rounded-[24px] bg-red-500 px-5 text-white shadow-float transition-all hover:bg-red-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(239,68,68,0.5)]"
      aria-label="Emergency call 911"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-bold">911</span>
    </a>
  );
}
