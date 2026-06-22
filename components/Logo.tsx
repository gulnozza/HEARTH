import HearthMascot, { HearthMascotIcon } from "@/components/HearthMascot";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "light";
  /** Full mascot vs compact icon */
  mascot?: boolean;
}

const iconSizes = { sm: 28, md: 36, lg: 48, xl: 64 };
const mascotSizes = { sm: 48, md: 72, lg: 100, xl: 140 };
const textSizes = { sm: "text-lg", md: "text-xl", lg: "text-2xl", xl: "text-3xl" };

export default function Logo({
  showText = true,
  size = "md",
  className = "",
  variant = "default",
  mascot = false,
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-forest";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mascot ? (
        <HearthMascot size={mascotSizes[size]} id={`logo-${size}`} />
      ) : (
        <HearthMascotIcon size={iconSizes[size]} id={`icon-${size}`} />
      )}
      {showText && (
        <span className={`font-bold tracking-tight ${textColor} ${textSizes[size]}`}>
          Hearth
        </span>
      )}
    </span>
  );
}

export { HearthMascot, HearthMascotIcon };
