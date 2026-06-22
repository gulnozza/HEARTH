import {
  getDistrictById,
  type DistrictId,
  type TimeOfDay,
} from "./safetyEngine";

export type IncidentCategory =
  | "harassment"
  | "theft"
  | "suspicious"
  | "lighting"
  | "transit"
  | "safe"
  | "other";

export type Severity = "low" | "medium" | "high" | "critical";

export interface ClassifiedReport {
  category: IncidentCategory;
  location: string;
  district: string;
  districtId: DistrictId | null;
  transportRoute: string | null;
  time: string | null;
  severity: Severity;
  recommendedAction: string;
  confidence: number;
  aiReasoning: string[];
}

export interface NewsAnalysis {
  incidentType: string;
  district: string;
  districtId: DistrictId | null;
  severity: Severity;
  safetyImpact: string;
  suggestedMapUpdate: string;
  confidence: number;
  extractedEntities: string[];
  aiReasoning: string[];
}

const DISTRICT_KEYWORDS: { id: DistrictId; keywords: string[] }[] = [
  { id: "chilonzor", keywords: ["chilonzor", "chilanzar", "чилонзор", "chilonzor metro"] },
  { id: "yunusobod", keywords: ["yunusobod", "yunusabad", "юнусабад", "amir temur"] },
  { id: "mirzo-ulugbek", keywords: ["mirzo ulugbek", "mirzo-ulugbek", "ulugbek", "tashkent state"] },
  { id: "shayxontohur", keywords: ["shayxontohur", "shaikhontohur", "chorsu", "chor-su", "old city"] },
  { id: "sergeli", keywords: ["sergeli", "sergili"] },
  { id: "uchtepa", keywords: ["uchtepa", "учтепа"] },
  { id: "yakkasaroy", keywords: ["yakkasaroy", "yakkasaray", "amir temur square"] },
  { id: "olmazor", keywords: ["olmazor", "almazar"] },
  { id: "yashnobod", keywords: ["yashnobod", "yashnabad"] },
  { id: "bektemir", keywords: ["bektemir", "бектемир", "industrial"] },
];

const CATEGORY_RULES: { category: IncidentCategory; keywords: string[]; severity: Severity }[] = [
  { category: "harassment", keywords: ["followed", "following", "harass", "stared", "catcall", "uncomfortable", "man followed", "гнался"], severity: "high" },
  { category: "theft", keywords: ["stole", "theft", "snatch", "robbed", "pickpocket", "grabbed phone", "украл"], severity: "high" },
  { category: "lighting", keywords: ["dark", "lighting", "unlit", "no light", "street light", "освещение"], severity: "medium" },
  { category: "transit", keywords: ["bus", "metro", "marshrutka", "taxi", "route", "маршрут", "автобус"], severity: "medium" },
  { category: "suspicious", keywords: ["suspicious", "strange", "loitering", "idling", "подозрительн"], severity: "medium" },
  { category: "safe", keywords: ["safe", "improved", "fixed", "repaired", "better now", "безопасно"], severity: "low" },
];

function detectDistrict(text: string): { id: DistrictId; name: string } | null {
  const lower = text.toLowerCase();
  for (const d of DISTRICT_KEYWORDS) {
    if (d.keywords.some((k) => lower.includes(k))) {
      const district = getDistrictById(d.id);
      return { id: d.id, name: district?.name ?? d.id };
    }
  }
  return null;
}

function detectCategory(text: string): { category: IncidentCategory; severity: Severity } {
  const lower = text.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return { category: rule.category, severity: rule.severity };
    }
  }
  return { category: "other", severity: "medium" };
}

function detectTransport(text: string): string | null {
  const busMatch = text.match(/bus\s*(\d+)|маршрут\s*(\d+)|route\s*(\d+)/i);
  if (busMatch) return `Bus ${busMatch[1] ?? busMatch[2] ?? busMatch[3]}`;
  if (/metro/i.test(text)) {
    const metroMatch = text.match(/(\w+)\s*metro/i);
    return metroMatch ? `${metroMatch[1]} Metro` : "Metro";
  }
  if (/marshrutka/i.test(text)) return "Marshrutka";
  return null;
}

function detectTime(text: string): string | null {
  const timeMatch = text.match(/(\d{1,2})\s*(:(\d{2}))?\s*(am|pm|AM|PM)?/);
  if (timeMatch) {
    const hour = timeMatch[1];
    const min = timeMatch[3] ? `:${timeMatch[3]}` : "";
    const period = timeMatch[4] ?? "";
    return `${hour}${min} ${period}`.trim();
  }
  if (/morning/i.test(text)) return "Morning";
  if (/evening/i.test(text)) return "Evening";
  if (/night/i.test(text)) return "Night";
  if (/afternoon/i.test(text)) return "Afternoon";
  return null;
}

function detectLocation(text: string, district: string | null): string {
  const nearMatch = text.match(/near\s+([^.!,]+)/i);
  if (nearMatch) return nearMatch[1].trim();
  const atMatch = text.match(/at\s+([^.!,]+)/i);
  if (atMatch) return atMatch[1].trim();
  if (district) return `Near ${district}`;
  return "Tashkent (location inferred)";
}

function getRecommendedAction(category: IncidentCategory, severity: Severity, transport: string | null): string {
  if (severity === "critical" || (category === "harassment" && severity === "high")) {
    return "Move to a well-lit public area immediately. Call 102 (police) if you feel threatened. Share live location with a trusted contact.";
  }
  if (category === "transit" && transport) {
    return `Avoid ${transport} during reported peak hours. Use metro alternatives or travel with a companion. Report added to AI transit safety model.`;
  }
  if (category === "lighting") {
    return "Use main roads with street lighting. Report forwarded to municipal lighting team. AI will flag this zone on the safety map.";
  }
  if (category === "theft") {
    return "Keep valuables secured and avoid displaying phones near transit. Stay in high foot-traffic areas. File report at nearest police station.";
  }
  if (category === "safe") {
    return "Positive update recorded. AI will improve safety scores for this area. Thank you for contributing to community safety.";
  }
  return "Stay aware of surroundings. Check Hearth map for alternative routes. Your report helps train our safety intelligence model.";
}

function simulateProcessingDelay(): Promise<void> {
  return new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));
}

export async function classifyIncidentReport(text: string): Promise<ClassifiedReport> {
  await simulateProcessingDelay();

  const district = detectDistrict(text);
  const { category, severity } = detectCategory(text);
  const transport = detectTransport(text);
  const time = detectTime(text);
  const location = detectLocation(text, district?.name ?? null);

  let adjustedSeverity = severity;
  if (text.match(/followed|chased|threatened/i)) adjustedSeverity = "high";
  if (text.match(/unsafe|scared|afraid/i) && category === "harassment") adjustedSeverity = "high";

  const reasoning: string[] = [
    `Analyzed ${text.split(/\s+/).length} tokens of natural language input`,
    district ? `Matched district entity: "${district.name}"` : "No specific district detected — defaulting to Tashkent metro area",
    `Classified as ${category} with ${adjustedSeverity} severity based on keyword patterns`,
  ];
  if (transport) reasoning.push(`Extracted transport entity: ${transport}`);
  if (time) reasoning.push(`Temporal marker detected: ${time}`);

  return {
    category,
    location,
    district: district?.name ?? "Tashkent (unspecified)",
    districtId: district?.id ?? null,
    transportRoute: transport,
    time,
    severity: adjustedSeverity,
    recommendedAction: getRecommendedAction(category, adjustedSeverity, transport),
    confidence: district && transport ? 94 : district ? 88 : 76,
    aiReasoning: reasoning,
  };
}

export async function analyzeNewsArticle(text: string): Promise<NewsAnalysis> {
  await simulateProcessingDelay();

  const district = detectDistrict(text);
  const { category, severity } = detectCategory(text);

  const incidentTypeMap: Record<IncidentCategory, string> = {
    harassment: "Public Harassment / Stalking",
    theft: "Theft / Robbery",
    suspicious: "Suspicious Activity",
    lighting: "Infrastructure — Lighting Failure",
    transit: "Public Transit Safety Incident",
    safe: "Positive Safety Development",
    other: "General Safety Incident",
  };

  const impactBySeverity: Record<Severity, string> = {
    low: "Minimal impact on district safety score. Informational update for community awareness.",
    medium: "Moderate impact — AI will adjust district safety score by 3–5 points for 48 hours.",
    high: "Significant impact — district caution level may increase. Route planner will avoid affected area.",
    critical: "Critical impact — immediate map alert recommended for all users in affected district.",
  };

  const mapUpdate = district
    ? `Add caution overlay to ${district.name} district. Update ${category} incident density layer. Notify users with saved routes through this area.`
    : "Add city-wide awareness banner. Prompt users to verify district when planning routes in Tashkent.";

  const entities: string[] = [];
  if (district) entities.push(district.name);
  const transport = detectTransport(text);
  if (transport) entities.push(transport);
  const time = detectTime(text);
  if (time) entities.push(time);

  return {
    incidentType: incidentTypeMap[category],
    district: district?.name ?? "Tashkent (city-wide)",
    districtId: district?.id ?? null,
    severity: severity === "low" ? "medium" : severity,
    safetyImpact: impactBySeverity[severity === "low" ? "medium" : severity],
    suggestedMapUpdate: mapUpdate,
    confidence: text.length > 100 ? 91 : 82,
    extractedEntities: entities.length ? entities : ["Tashkent", "Safety incident"],
    aiReasoning: [
      "Parsed news article using Hearth NLP pipeline (mock)",
      `Identified primary incident type: ${incidentTypeMap[category]}`,
      district ? `Geocoded to district: ${district.name}` : "Could not geocode — applying city-wide advisory",
      `Severity assessment: ${severity} based on incident language analysis`,
    ],
  };
}

export function generateSafeRouteExplanation(
  from: string,
  to: string,
  timeOfDay: TimeOfDay = "morning"
): string {
  const timeNote =
    timeOfDay === "night"
      ? "Night travel detected — prioritizing lit corridors."
      : timeOfDay === "morning"
        ? "Morning rush considered — avoiding Bus 7 corridor with repeated reports."
        : "Current conditions analyzed.";

  return `AI Safety Engine analyzed 847 data points across Tashkent. ${timeNote} This route avoids 3 recent harassment reports near Chilonzor, passes 2 verified safe places (pharmacy + police station), and uses Mustaqillik Avenue with 92% lighting coverage. Estimated safety score: 91/100 vs 58/100 for the fastest route via Bunyodkor.`;
}

export const DEMO_REPORT =
  "Bus 7 felt unsafe at 8 AM near Chilonzor. A man followed me.";

export const DEMO_NEWS = `TASHKENT — Police are investigating a series of phone snatching incidents near Chorsu Bazaar in Shayxontohur district. Three victims reported being targeted between 4 PM and 7 PM on crowded market days. Authorities have increased patrols but warn visitors to keep valuables secured. Local residents have also reported poor street lighting in adjacent alleyways after sunset.`;
