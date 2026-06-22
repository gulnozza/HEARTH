"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import HearthMascot, { type MascotPose } from "@/components/HearthMascot";

interface Waypoint {
  at: number;
  top: number;
  left: number;
  pose: MascotPose;
  size: number;
  flip?: boolean;
}

const WAYPOINTS: Waypoint[] = [
  { at: 0, top: 10, left: 90, pose: "idle", size: 32 },
  { at: 0.06, top: 14, left: 12, pose: "wave", size: 38 },
  { at: 0.18, top: 22, left: 88, pose: "point", size: 44, flip: true },
  { at: 0.3, top: 32, left: 8, pose: "run", size: 50 },
  { at: 0.42, top: 28, left: 86, pose: "think", size: 54, flip: true },
  { at: 0.54, top: 38, left: 10, pose: "wave", size: 56 },
  { at: 0.66, top: 48, left: 84, pose: "run", size: 58, flip: true },
  { at: 0.78, top: 40, left: 14, pose: "point", size: 60 },
  { at: 0.9, top: 52, left: 78, pose: "think", size: 62, flip: true },
  { at: 1, top: 62, left: 48, pose: "celebrate", size: 64 },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function interpolateWaypoints(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  let i = 0;
  while (i < WAYPOINTS.length - 2 && WAYPOINTS[i + 1].at < p) i++;
  const a = WAYPOINTS[i];
  const b = WAYPOINTS[Math.min(i + 1, WAYPOINTS.length - 1)];
  const range = b.at - a.at || 1;
  const t = Math.max(0, Math.min(1, (p - a.at) / range));

  return {
    top: lerp(a.top, b.top, t),
    left: lerp(a.left, b.left, t),
    size: lerp(a.size, b.size, t),
    pose: t > 0.5 ? b.pose : a.pose,
    flip: t > 0.5 ? !!b.flip : !!a.flip,
  };
}

export default function HearthScrollRunner() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [state, setState] = useState({ top: 10, left: 90, size: 32, pose: "idle" as MascotPose, flip: false, visible: false, bounce: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    const wp = interpolateWaypoints(progress);
    const visible = window.scrollY > 40;
    const bounce = wp.pose === "run" ? Math.sin(window.scrollY * 0.08) * 5 : 0;

    setState({ ...wp, visible, bounce });
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMotion = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onMotion);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      mq.removeEventListener("change", onMotion);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome, update]);

  if (!isHome) return null;

  if (reducedMotion) {
    return (
      <div className="fixed bottom-6 left-6 z-40 pointer-events-none hidden md:block" aria-hidden>
        <HearthMascot size={48} id="runner-static" pose="wave" />
      </div>
    );
  }

  return (
    <>
      {/* Dotted trail path — subtle TreeHacks-style guide */}
      <svg
        className="fixed inset-0 z-30 pointer-events-none hidden lg:block"
        width="100%"
        height="100%"
        aria-hidden
      >
        <path
          d="M 92% 8% C 70% 12%, 15% 18%, 10% 28% S 88% 35%, 85% 45% S 12% 52%, 10% 62% S 82% 68%, 78% 78% S 20% 85%, 48% 92%"
          fill="none"
          stroke="#003320"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity={state.visible ? 0.08 : 0}
          className="transition-opacity duration-500"
        />
      </svg>

      <div
        className="fixed z-40 pointer-events-none transition-opacity duration-300 hidden md:block"
        style={{
          top: `${state.top}vh`,
          left: `${state.left}%`,
          transform: `translate(-50%, -50%) translateY(${state.bounce}px)`,
          opacity: state.visible ? 1 : 0,
        }}
        aria-hidden
      >
        <div
          className={state.pose === "run" ? "animate-mascot-run" : ""}
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,51,32,0.12))" }}
        >
          <HearthMascot
            size={state.size}
            id={`runner-${state.pose}`}
            pose={state.pose}
            flip={state.flip}
          />
        </div>
      </div>
    </>
  );
}
