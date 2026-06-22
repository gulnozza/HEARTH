export type SafetyLevel = "safe" | "moderate" | "caution" | "unsafe";

export interface SafetyZone {
  id: string;
  name: string;
  level: SafetyLevel;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MapPin {
  id: string;
  label: string;
  type: "incident" | "safe-place" | "user";
  x: number;
  y: number;
  description?: string;
}

export interface SafePlace {
  id: string;
  name: string;
  category: "cafe" | "pharmacy" | "hospital" | "police" | "shelter" | "transit";
  address: string;
  rating: number;
  openUntil: string;
  features: string[];
  distance: string;
}

export interface CommunityReport {
  id: string;
  title: string;
  description: string;
  category: "harassment" | "theft" | "suspicious" | "lighting" | "safe" | "other";
  location: string;
  timestamp: string;
  verified: boolean;
  upvotes: number;
  safetyLevel: SafetyLevel;
}

export interface RouteOption {
  id: string;
  name: string;
  duration: string;
  distance: string;
  safetyScore: number;
  description: string;
  highlights: string[];
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/safety-map", label: "Tashkent Map" },
  { href: "/route-planner", label: "AI Routes" },
  { href: "/report", label: "AI Report" },
  { href: "/ai-news", label: "AI News" },
  { href: "/safe-places", label: "Safe Places" },
  { href: "/community-reports", label: "Community" },
  { href: "/about", label: "About" },
];

export const safetyZones: SafetyZone[] = [
  { id: "z1", name: "Riverside Park", level: "safe", x: 8, y: 12, width: 28, height: 22 },
  { id: "z2", name: "Market District", level: "moderate", x: 42, y: 8, width: 24, height: 30 },
  { id: "z3", name: "Old Bridge Area", level: "caution", x: 68, y: 35, width: 26, height: 20 },
  { id: "z4", name: "University Quarter", level: "safe", x: 15, y: 55, width: 32, height: 25 },
  { id: "z5", name: "Industrial Lane", level: "unsafe", x: 55, y: 62, width: 22, height: 18 },
  { id: "z6", name: "Downtown Core", level: "moderate", x: 38, y: 42, width: 30, height: 24 },
];

export const mapPins: MapPin[] = [
  { id: "p1", label: "Well-lit café", type: "safe-place", x: 22, y: 28, description: "24hr staff, security cameras" },
  { id: "p2", label: "Harassment report", type: "incident", x: 52, y: 18, description: "Reported 2 hours ago" },
  { id: "p3", label: "Community shelter", type: "safe-place", x: 70, y: 45 },
  { id: "p4", label: "Poor lighting", type: "incident", x: 62, y: 70, description: "Street lights out" },
  { id: "p5", label: "Your location", type: "user", x: 35, y: 50 },
  { id: "p6", label: "Women's health clinic", type: "safe-place", x: 18, y: 68 },
];

export const safePlaces: SafePlace[] = [
  {
    id: "sp1",
    name: "Bloom & Brew Café",
    category: "cafe",
    address: "142 Maple Street",
    rating: 4.8,
    openUntil: "10:00 PM",
    features: ["Well-lit", "Staff trained", "Safe wait area"],
    distance: "0.3 mi",
  },
  {
    id: "sp2",
    name: "City General Hospital",
    category: "hospital",
    address: "500 Health Ave",
    rating: 4.6,
    openUntil: "24 hours",
    features: ["Emergency room", "Security desk", "Well-lit parking"],
    distance: "0.8 mi",
  },
  {
    id: "sp3",
    name: "Central Police Station",
    category: "police",
    address: "88 Justice Blvd",
    rating: 4.5,
    openUntil: "24 hours",
    features: ["Walk-in reports", "Safe lobby", "Officers on duty"],
    distance: "1.2 mi",
  },
  {
    id: "sp4",
    name: "Harbor Women's Shelter",
    category: "shelter",
    address: "12 Harbor Lane",
    rating: 4.9,
    openUntil: "24 hours",
    features: ["Confidential intake", "Counseling", "Transport help"],
    distance: "1.5 mi",
  },
  {
    id: "sp5",
    name: "Greenline Pharmacy",
    category: "pharmacy",
    address: "301 University Dr",
    rating: 4.4,
    openUntil: "9:00 PM",
    features: ["Bright entrance", "Late hours", "Near transit"],
    distance: "0.5 mi",
  },
  {
    id: "sp6",
    name: "Metro Station — Central",
    category: "transit",
    address: "Central Station Plaza",
    rating: 4.3,
    openUntil: "11:30 PM",
    features: ["Security cameras", "Busy area", "Help point"],
    distance: "0.6 mi",
  },
];

export const communityReports: CommunityReport[] = [
  {
    id: "r1",
    title: "Group following on Main St",
    description: "Three individuals followed me for two blocks near the bookstore. Stayed on the main road.",
    category: "harassment",
    location: "Main St & 4th Ave",
    timestamp: "2 hours ago",
    verified: true,
    upvotes: 24,
    safetyLevel: "caution",
  },
  {
    id: "r2",
    title: "Street lights repaired",
    description: "The dark stretch on Oak Lane now has working lights. Much safer walking at night.",
    category: "safe",
    location: "Oak Lane",
    timestamp: "5 hours ago",
    verified: true,
    upvotes: 41,
    safetyLevel: "safe",
  },
  {
    id: "r3",
    title: "Suspicious vehicle parked",
    description: "Dark SUV with tinted windows idling near the park entrance for over an hour.",
    category: "suspicious",
    location: "Riverside Park entrance",
    timestamp: "Yesterday",
    verified: false,
    upvotes: 12,
    safetyLevel: "caution",
  },
  {
    id: "r4",
    title: "Phone snatching attempt",
    description: "Someone on a bike tried to grab a phone near the bus stop. Be alert with devices.",
    category: "theft",
    location: "Bus stop #14, University Dr",
    timestamp: "Yesterday",
    verified: true,
    upvotes: 33,
    safetyLevel: "unsafe",
  },
  {
    id: "r5",
    title: "Unlit alley behind shops",
    description: "The alley connecting Market St to the parking lot has no lighting after 8pm.",
    category: "lighting",
    location: "Market District alley",
    timestamp: "2 days ago",
    verified: true,
    upvotes: 18,
    safetyLevel: "caution",
  },
  {
    id: "r6",
    title: "Friendly neighborhood watch",
    description: "Residents on Elm St are organizing evening check-ins. Feel free to join the group chat.",
    category: "safe",
    location: "Elm Street block",
    timestamp: "3 days ago",
    verified: true,
    upvotes: 56,
    safetyLevel: "safe",
  },
];

export const routeOptions: RouteOption[] = [
  {
    id: "route1",
    name: "Safest Route",
    duration: "18 min",
    distance: "1.4 mi",
    safetyScore: 92,
    description: "Well-lit streets with high foot traffic and nearby safe places.",
    highlights: ["3 safe places along route", "Fully lit path", "Busy sidewalks"],
  },
  {
    id: "route2",
    name: "Balanced Route",
    duration: "14 min",
    distance: "1.1 mi",
    safetyScore: 78,
    description: "Shorter path with moderate safety. One caution zone to be aware of.",
    highlights: ["Fastest option", "One caution area", "Near transit stop"],
  },
  {
    id: "route3",
    name: "Scenic Route",
    duration: "22 min",
    distance: "1.8 mi",
    safetyScore: 85,
    description: "Longer walk through parks and residential areas with good lighting.",
    highlights: ["Park pathway", "Residential streets", "Low traffic"],
  },
];

export const homeFeatures = [
  {
    title: "Safety Map",
    description: "See real-time community safety zones and incident reports on an interactive map.",
    href: "/safety-map",
    icon: "map" as const,
  },
  {
    title: "Route Planner",
    description: "Plan the safest walking route with lighting, foot traffic, and safe place data.",
    href: "/route-planner",
    icon: "route" as const,
  },
  {
    title: "Report Incidents",
    description: "Share what you see to help other women stay informed and prepared.",
    href: "/report",
    icon: "report" as const,
  },
  {
    title: "Safe Places",
    description: "Find nearby cafés, shelters, hospitals, and transit hubs you can trust.",
    href: "/safe-places",
    icon: "places" as const,
  },
];

export const safetyLevelColors: Record<SafetyLevel, { bg: string; text: string; border: string; label: string }> = {
  safe: { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-300", label: "Safe" },
  moderate: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-300", label: "Moderate" },
  caution: { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-300", label: "Caution" },
  unsafe: { bg: "bg-rose-100", text: "text-rose-800", border: "border-rose-300", label: "Unsafe" },
};

export const reportCategories = [
  { id: "harassment", label: "Harassment" },
  { id: "theft", label: "Theft" },
  { id: "suspicious", label: "Suspicious Activity" },
  { id: "lighting", label: "Poor Lighting" },
  { id: "safe", label: "Safe Update" },
  { id: "other", label: "Other" },
];

export const placeCategories = [
  { id: "all", label: "All" },
  { id: "cafe", label: "Cafés" },
  { id: "pharmacy", label: "Pharmacies" },
  { id: "hospital", label: "Hospitals" },
  { id: "police", label: "Police" },
  { id: "shelter", label: "Shelters" },
  { id: "transit", label: "Transit" },
];

export const communityFilters = [
  { id: "all", label: "All Reports" },
  { id: "harassment", label: "Harassment" },
  { id: "theft", label: "Theft" },
  { id: "suspicious", label: "Suspicious" },
  { id: "lighting", label: "Lighting" },
  { id: "safe", label: "Safe Updates" },
];

export const citySafetyScore = {
  overall: 74,
  trend: "+3",
  areas: [
    { name: "Riverside Park", score: 91 },
    { name: "University Quarter", score: 88 },
    { name: "Downtown Core", score: 72 },
    { name: "Industrial Lane", score: 48 },
  ],
};
