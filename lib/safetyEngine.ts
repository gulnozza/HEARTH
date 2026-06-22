export type DistrictId =
  | "chilonzor"
  | "yunusobod"
  | "mirzo-ulugbek"
  | "shayxontohur"
  | "sergeli"
  | "uchtepa"
  | "yakkasaroy"
  | "olmazor"
  | "yashnobod"
  | "bektemir";

export type SafetyColor = "green" | "yellow" | "orange" | "red";
export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

export interface DistrictFactors {
  userReports: number; // 0-100, higher = more negative reports (inverted in score)
  crimeReports: number;
  lightingScore: number; // 0-100, higher = better lit
  transitSafety: number;
  footTraffic: number;
  newsIncidents: number; // 0-100, higher = more incidents
}

export interface DistrictData {
  id: DistrictId;
  name: string;
  nameUz: string;
  factors: DistrictFactors;
  topRiskFactors: string[];
  mapPosition: { x: number; y: number; width: number; height: number };
}

export interface DistrictSafetyResult {
  id: DistrictId;
  name: string;
  nameUz: string;
  score: number;
  color: SafetyColor;
  topRiskFactors: string[];
  aiSummary: string;
  breakdown: {
    userReports: number;
    crimeReports: number;
    lightingScore: number;
    transitSafety: number;
    footTraffic: number;
    timeModifier: number;
    newsIncidents: number;
  };
  mapPosition: DistrictData["mapPosition"];
}

export interface DetectedPattern {
  id: string;
  pattern: string;
  confidence: number;
  district?: string;
  category: "transit" | "lighting" | "harassment" | "theft" | "foot-traffic" | "general";
  severity: "low" | "medium" | "high";
}

const WEIGHTS = {
  userReports: 0.22,
  crimeReports: 0.18,
  lightingScore: 0.16,
  transitSafety: 0.16,
  footTraffic: 0.12,
  timeModifier: 0.11,
  newsIncidents: 0.05,
};

const TIME_MODIFIERS: Record<TimeOfDay, number> = {
  morning: 8,
  afternoon: 5,
  evening: -5,
  night: -15,
};

export const TASHKENT_DISTRICTS: DistrictData[] = [
  {
    id: "chilonzor",
    name: "Chilonzor",
    nameUz: "Chilonzor",
    factors: { userReports: 62, crimeReports: 58, lightingScore: 55, transitSafety: 52, footTraffic: 70, newsIncidents: 48 },
    topRiskFactors: ["Poor lighting near metro exits", "Bus 7 morning crowding", "Unlit park paths after 9 PM"],
    mapPosition: { x: 18, y: 48, width: 28, height: 32 },
  },
  {
    id: "yunusobod",
    name: "Yunusobod",
    nameUz: "Yunusobod",
    factors: { userReports: 35, crimeReports: 30, lightingScore: 82, transitSafety: 78, footTraffic: 85, newsIncidents: 22 },
    topRiskFactors: ["Occasional phone snatching near bazaar", "Construction zones reduce visibility"],
    mapPosition: { x: 58, y: 8, width: 26, height: 28 },
  },
  {
    id: "mirzo-ulugbek",
    name: "Mirzo Ulugbek",
    nameUz: "Mirzo Ulugbek",
    factors: { userReports: 40, crimeReports: 38, lightingScore: 75, transitSafety: 72, footTraffic: 80, newsIncidents: 30 },
    topRiskFactors: ["University area late-night isolation", "Limited lighting on side streets"],
    mapPosition: { x: 72, y: 22, width: 24, height: 26 },
  },
  {
    id: "shayxontohur",
    name: "Shayxontohur",
    nameUz: "Shayxontohur",
    factors: { userReports: 45, crimeReports: 42, lightingScore: 78, transitSafety: 80, footTraffic: 88, newsIncidents: 35 },
    topRiskFactors: ["Tourist pickpocketing near Chorsu", "Crowded bazaar harassment reports"],
    mapPosition: { x: 32, y: 28, width: 22, height: 22 },
  },
  {
    id: "sergeli",
    name: "Sergeli",
    nameUz: "Sergeli",
    factors: { userReports: 55, crimeReports: 52, lightingScore: 48, transitSafety: 45, footTraffic: 55, newsIncidents: 42 },
    topRiskFactors: ["Sparse street lighting", "Long distances between safe places", "Limited night transit"],
    mapPosition: { x: 42, y: 72, width: 24, height: 22 },
  },
  {
    id: "uchtepa",
    name: "Uchtepa",
    nameUz: "Uchtepa",
    factors: { userReports: 50, crimeReports: 48, lightingScore: 60, transitSafety: 58, footTraffic: 62, newsIncidents: 40 },
    topRiskFactors: ["Industrial area foot traffic drops after 7 PM", "Bus stop isolation"],
    mapPosition: { x: 4, y: 22, width: 22, height: 28 },
  },
  {
    id: "yakkasaroy",
    name: "Yakkasaroy",
    nameUz: "Yakkasaroy",
    factors: { userReports: 28, crimeReports: 25, lightingScore: 88, transitSafety: 85, footTraffic: 90, newsIncidents: 18 },
    topRiskFactors: ["Minor traffic safety near Amir Temur square"],
    mapPosition: { x: 48, y: 32, width: 20, height: 18 },
  },
  {
    id: "olmazor",
    name: "Olmazor",
    nameUz: "Olmazor",
    factors: { userReports: 48, crimeReports: 45, lightingScore: 65, transitSafety: 62, footTraffic: 68, newsIncidents: 38 },
    topRiskFactors: ["Park pathway lighting gaps", "Evening foot traffic decline"],
    mapPosition: { x: 8, y: 42, width: 22, height: 24 },
  },
  {
    id: "yashnobod",
    name: "Yashnobod",
    nameUz: "Yashnobod",
    factors: { userReports: 52, crimeReports: 50, lightingScore: 58, transitSafety: 55, footTraffic: 65, newsIncidents: 45 },
    topRiskFactors: ["Bus route harassment clusters", "Unverified safe places sparse"],
    mapPosition: { x: 68, y: 52, width: 26, height: 28 },
  },
  {
    id: "bektemir",
    name: "Bektemir",
    nameUz: "Bektemir",
    factors: { userReports: 65, crimeReports: 60, lightingScore: 42, transitSafety: 40, footTraffic: 48, newsIncidents: 55 },
    topRiskFactors: ["Industrial zone low visibility", "Highest crime report density", "Poor transit coverage at night"],
    mapPosition: { x: 22, y: 78, width: 26, height: 18 },
  },
];

function invertRisk(value: number): number {
  return 100 - value;
}

export function scoreToColor(score: number): SafetyColor {
  if (score >= 75) return "green";
  if (score >= 60) return "yellow";
  if (score >= 45) return "orange";
  return "red";
}

export const SAFETY_COLOR_STYLES: Record<SafetyColor, { bg: string; border: string; text: string; fill: string; label: string }> = {
  green: { bg: "bg-emerald-400/25", border: "border-emerald-500/50", text: "text-emerald-800", fill: "bg-emerald-500", label: "Safe" },
  yellow: { bg: "bg-yellow-400/25", border: "border-yellow-500/50", text: "text-yellow-800", fill: "bg-yellow-500", label: "Moderate" },
  orange: { bg: "bg-orange/25", border: "border-orange/50", text: "text-orange", fill: "bg-orange", label: "Caution" },
  red: { bg: "bg-red-400/25", border: "border-red-500/50", text: "text-red-800", fill: "bg-red-500", label: "High Risk" },
};

export function calculateDistrictScore(
  district: DistrictData,
  timeOfDay: TimeOfDay = "afternoon"
): number {
  const { factors } = district;
  const timeMod = TIME_MODIFIERS[timeOfDay];

  const raw =
    invertRisk(factors.userReports) * WEIGHTS.userReports +
    invertRisk(factors.crimeReports) * WEIGHTS.crimeReports +
    factors.lightingScore * WEIGHTS.lightingScore +
    factors.transitSafety * WEIGHTS.transitSafety +
    factors.footTraffic * WEIGHTS.footTraffic +
    (50 + timeMod) * WEIGHTS.timeModifier +
    invertRisk(factors.newsIncidents) * WEIGHTS.newsIncidents;

  return Math.round(Math.max(0, Math.min(100, raw)));
}

export function generateDistrictSummary(district: DistrictData, score: number, timeOfDay: TimeOfDay): string {
  const color = scoreToColor(score);
  const timeLabel = { morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }[timeOfDay];

  if (color === "green") {
    return `${district.name} scores ${score}/100 this ${timeLabel}. Strong lighting and foot traffic make it one of Tashkent's safer districts. AI recommends standard awareness near transit hubs.`;
  }
  if (color === "yellow") {
    return `${district.name} scores ${score}/100. Generally safe with elevated risk near ${district.topRiskFactors[0]?.toLowerCase() ?? "transit areas"}. AI suggests well-lit main roads after 8 PM.`;
  }
  if (color === "orange") {
    return `${district.name} scores ${score}/100 — caution advised. AI detected patterns around ${district.topRiskFactors[0]?.toLowerCase() ?? "lighting gaps"}. Share location with a trusted contact when traveling here at night.`;
  }
  return `${district.name} scores ${score}/100 — high risk zone. Primary concerns: ${district.topRiskFactors.slice(0, 2).join(", ").toLowerCase()}. AI strongly recommends alternative routes or travel with company after dark.`;
}

export function getAllDistrictScores(timeOfDay: TimeOfDay = "afternoon"): DistrictSafetyResult[] {
  return TASHKENT_DISTRICTS.map((d) => {
    const score = calculateDistrictScore(d, timeOfDay);
    const timeMod = TIME_MODIFIERS[timeOfDay];
    return {
      id: d.id,
      name: d.name,
      nameUz: d.nameUz,
      score,
      color: scoreToColor(score),
      topRiskFactors: d.topRiskFactors,
      aiSummary: generateDistrictSummary(d, score, timeOfDay),
      breakdown: {
        userReports: invertRisk(d.factors.userReports),
        crimeReports: invertRisk(d.factors.crimeReports),
        lightingScore: d.factors.lightingScore,
        transitSafety: d.factors.transitSafety,
        footTraffic: d.factors.footTraffic,
        timeModifier: 50 + timeMod,
        newsIncidents: invertRisk(d.factors.newsIncidents),
      },
      mapPosition: d.mapPosition,
    };
  }).sort((a, b) => b.score - a.score);
}

export function getCityOverallScore(timeOfDay: TimeOfDay = "afternoon"): number {
  const scores = getAllDistrictScores(timeOfDay);
  return Math.round(scores.reduce((s, d) => s + d.score, 0) / scores.length);
}

export function getDistrictById(id: DistrictId): DistrictData | undefined {
  return TASHKENT_DISTRICTS.find((d) => d.id === id);
}

export function getDetectedPatterns(): DetectedPattern[] {
  return [
    {
      id: "p1",
      pattern: "Bus 7 has repeated harassment reports around 8 AM near Chilonzor metro.",
      confidence: 94,
      district: "Chilonzor",
      category: "transit",
      severity: "high",
    },
    {
      id: "p2",
      pattern: "Poor lighting reports are increasing in Chilonzor — 12 new reports this week.",
      confidence: 89,
      district: "Chilonzor",
      category: "lighting",
      severity: "medium",
    },
    {
      id: "p3",
      pattern: "Yunusobod is safer after 6 PM because of higher foot traffic near Amir Temur avenue.",
      confidence: 91,
      district: "Yunusobod",
      category: "foot-traffic",
      severity: "low",
    },
    {
      id: "p4",
      pattern: "Phone snatching cluster detected near Chorsu Bazaar, Shayxontohur — peak 4–7 PM.",
      confidence: 87,
      district: "Shayxontohur",
      category: "theft",
      severity: "high",
    },
    {
      id: "p5",
      pattern: "Bektemir industrial zone shows 23% rise in night-time incident reports this month.",
      confidence: 85,
      district: "Bektemir",
      category: "general",
      severity: "high",
    },
    {
      id: "p6",
      pattern: "Mirzo Ulugbek university area: harassment reports spike Fridays 10 PM–1 AM.",
      confidence: 82,
      district: "Mirzo Ulugbek",
      category: "harassment",
      severity: "medium",
    },
  ];
}

export const TASHKENT_ROUTES = {
  fastest: {
    name: "Fastest Route",
    duration: "22 min",
    distance: "4.8 km",
    safetyScore: 58,
    path: "Chilonzor Metro → Bunyodkor Ave → Amir Temur → Yunusobod",
    via: ["Bunyodkor Avenue", "Amir Temur Shoh ko'chasi"],
  },
  safest: {
    name: "Safest Route",
    duration: "31 min",
    distance: "6.2 km",
    safetyScore: 91,
    path: "Chilonzor Metro → Mustaqillik Ave → Yunusobod Bazaar → Destination",
    via: ["Mustaqillik Avenue", "Yunusobod main street", "Verified safe café stop"],
    safePlaces: ["Yunusobod Police Station", "24hr Pharmacy — Amir Temur", "Hearth Verified Café"],
  },
};
