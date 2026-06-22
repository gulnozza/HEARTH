export const colors = {
  pink: "#F0AFFF",
  orange: "#F7A500",
  forest: "#003320",
  background: "#FAFAF8",
  cream: "#FFF8EF",
  forestLight: "#004D33",
  pinkMuted: "#F0AFFF40",
  orangeMuted: "#F7A50030",
} as const;

export const radii = {
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  full: "9999px",
} as const;

export const shadows = {
  soft: "0 4px 24px -4px rgba(0, 51, 32, 0.08)",
  card: "0 8px 40px -8px rgba(0, 51, 32, 0.12)",
  float: "0 24px 64px -16px rgba(0, 51, 32, 0.18)",
  glow: "0 0 60px -12px rgba(240, 175, 255, 0.5)",
} as const;

export const gradients = {
  hero: "linear-gradient(135deg, #FFF8EF 0%, #FAFAF8 50%, #F0AFFF20 100%)",
  forest: "linear-gradient(135deg, #003320 0%, #004D33 100%)",
  pinkOrange: "linear-gradient(135deg, #F0AFFF 0%, #F7A500 100%)",
  subtle: "linear-gradient(180deg, #FAFAF8 0%, #FFF8EF 100%)",
} as const;
