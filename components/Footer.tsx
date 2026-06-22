import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rose-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
              <Heart className="h-4 w-4 fill-rose-600" />
            </span>
            <span className="font-bold text-warm-brown">
              Safe<span className="text-rose-600">Her</span>
            </span>
          </div>
          <p className="text-sm text-warm-brown/50 text-center">
            A community safety platform for women. Local MVP — mock data only.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/about" className="text-warm-brown/60 hover:text-rose-600">About</Link>
            <Link href="/report" className="text-warm-brown/60 hover:text-rose-600">Report</Link>
            <Link href="/safe-places" className="text-warm-brown/60 hover:text-rose-600">Safe Places</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
