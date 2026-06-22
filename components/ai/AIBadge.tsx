import { Sparkles } from "lucide-react";

interface AIBadgeProps {
  label?: string;
  className?: string;
}

export default function AIBadge({ label = "AI Powered", className = "" }: AIBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full gradient-pink-orange px-3 py-1 text-xs font-bold text-forest ${className}`}>
      <Sparkles className="h-3 w-3" />
      {label}
    </span>
  );
}
