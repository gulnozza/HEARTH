export type MascotPose = "idle" | "wave" | "run" | "point" | "think" | "celebrate";

interface HearthMascotProps {
  size?: number;
  className?: string;
  id?: string;
  pose?: MascotPose;
  flip?: boolean;
}

function MascotBody({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern id={`${id}-earth`} patternUnits="userSpaceOnUse" width="24" height="24">
          <rect width="24" height="24" fill="#8ECAE6" />
          <ellipse cx="8" cy="10" rx="6" ry="5" fill="#003320" opacity="0.75" />
          <ellipse cx="18" cy="16" rx="5" ry="4" fill="#004D33" opacity="0.65" />
          <ellipse cx="14" cy="5" rx="4" ry="3" fill="#003320" opacity="0.5" />
          <circle cx="20" cy="7" r="2" fill="#F7A500" opacity="0.4" />
        </pattern>
        <clipPath id={`${id}-tuft-l`}>
          <path d="M28 38 C18 28, 14 14, 22 6 C30 0, 38 4, 40 16 C42 28, 36 36, 28 38 Z" />
        </clipPath>
        <clipPath id={`${id}-tuft-r`}>
          <path d="M92 38 C102 28, 106 14, 98 6 C90 0, 82 4, 80 16 C78 28, 84 36, 92 38 Z" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}-tuft-l)`}>
        <rect x="12" y="2" width="32" height="40" fill={`url(#${id}-earth)`} />
        <path d="M28 38 C18 28, 14 14, 22 6 C30 0, 38 4, 40 16 C42 28, 36 36, 28 38 Z" fill="none" stroke="#003320" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <ellipse cx="30" cy="36" rx="7" ry="3" fill="#FFF8EF" stroke="#003320" strokeWidth="1.8" />

      <g clipPath={`url(#${id}-tuft-r)`}>
        <rect x="76" y="2" width="32" height="40" fill={`url(#${id}-earth)`} />
        <path d="M92 38 C102 28, 106 14, 98 6 C90 0, 82 4, 80 16 C78 28, 84 36, 92 38 Z" fill="none" stroke="#003320" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      <ellipse cx="90" cy="36" rx="7" ry="3" fill="#FFF8EF" stroke="#003320" strokeWidth="1.8" />

      <rect x="34" y="38" width="52" height="72" rx="26" fill="#FFF8EF" stroke="#003320" strokeWidth="2.5" />

      <circle cx="50" cy="62" r="13" fill="white" stroke="#003320" strokeWidth="2.2" />
      <circle cx="70" cy="62" r="13" fill="white" stroke="#003320" strokeWidth="2.2" />
      <circle cx="52" cy="64" r="4.5" fill="#003320" />
      <circle cx="72" cy="64" r="4.5" fill="#003320" />
      <circle cx="54" cy="62" r="1.5" fill="white" />
      <circle cx="74" cy="62" r="1.5" fill="white" />

      <ellipse cx="44" cy="74" rx="6" ry="3.5" fill="#F0AFFF" opacity="0.55" />
      <ellipse cx="76" cy="74" rx="6" ry="3.5" fill="#F0AFFF" opacity="0.55" />

      <circle cx="60" cy="82" r="3" fill="#F7A500" stroke="#003320" strokeWidth="1.5" />
    </>
  );
}

function MascotLimbs({ pose }: { pose: MascotPose }) {
  const s = { stroke: "#003320", strokeWidth: 2.2, strokeLinecap: "round" as const, fill: "none" };

  switch (pose) {
    case "wave":
      return (
        <>
          <path d="M34 78 C24 80, 20 92, 26 100" {...s} />
          <path d="M86 76 C96 58, 104 48, 108 38" {...s} />
          <path d="M50 110 L48 128" {...s} />
          <path d="M70 110 L72 128" {...s} />
          <path d="M42 128 L54 128" {...s} />
          <path d="M66 128 L78 128" {...s} />
        </>
      );
    case "run":
      return (
        <>
          <path d="M34 80 C22 74, 16 66, 12 58" {...s} />
          <path d="M86 80 C98 74, 104 66, 108 58" {...s} />
          <path d="M52 110 L44 128" {...s} />
          <path d="M68 110 L76 122" {...s} />
          <path d="M38 128 L50 128" {...s} />
          <path d="M70 122 L82 118" {...s} />
        </>
      );
    case "point":
      return (
        <>
          <path d="M34 78 C24 80, 20 92, 26 100" {...s} />
          <path d="M86 76 C102 72, 114 68, 118 64" {...s} />
          <path d="M50 110 L48 128" {...s} />
          <path d="M70 110 L72 128" {...s} />
          <path d="M42 128 L54 128" {...s} />
          <path d="M66 128 L78 128" {...s} />
        </>
      );
    case "think":
      return (
        <>
          <path d="M34 78 C22 76, 18 88, 24 96" {...s} />
          <path d="M86 74 C92 58, 88 48, 82 44" {...s} />
          <path d="M50 110 L48 128" {...s} />
          <path d="M70 110 L72 128" {...s} />
          <path d="M42 128 L54 128" {...s} />
          <path d="M66 128 L78 128" {...s} />
        </>
      );
    case "celebrate":
      return (
        <>
          <path d="M34 76 C20 62, 14 48, 10 36" {...s} />
          <path d="M86 76 C100 62, 106 48, 110 36" {...s} />
          <path d="M48 110 L46 126" {...s} />
          <path d="M72 110 L74 126" {...s} />
          <path d="M40 126 L52 126" {...s} />
          <path d="M68 126 L80 126" {...s} />
        </>
      );
    default: // idle
      return (
        <>
          <path d="M34 78 C22 76, 18 88, 24 96" {...s} />
          <path d="M86 78 C98 76, 102 88, 96 96" {...s} />
          <path d="M50 110 L48 128" {...s} />
          <path d="M70 110 L72 128" {...s} />
          <path d="M42 128 L54 128" {...s} />
          <path d="M66 128 L78 128" {...s} />
        </>
      );
  }
}

export default function HearthMascot({
  size = 120,
  className = "",
  id = "hm",
  pose = "idle",
  flip = false,
}: HearthMascotProps) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 120 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-label="Hearth mascot"
      role="img"
    >
      <MascotBody id={id} />
      <MascotLimbs pose={pose} />
    </svg>
  );
}

/** Compact mascot for navbar */
export function HearthMascotIcon({ size = 32, className = "", id = "hmi" }: HearthMascotProps) {
  return (
    <HearthMascot size={size / 1.15} id={id} pose="idle" className={className} />
  );
}
