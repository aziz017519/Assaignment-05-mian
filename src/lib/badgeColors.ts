const BADGE_COLORS: Record<string, string> = {
  blue: "bg-sky-50 text-sky-500",
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-500",
  red: "bg-red-50 text-red-500",
  yellow: "bg-yellow-50 text-yellow-600",
};

// Maps each badge label to one of the palette keys above.
// Falls back to "blue" for anything not listed.
const BADGE_TO_COLOR: Record<string, keyof typeof BADGE_COLORS> = {
  Popular: "blue",
  Versatile: "green",
  Fast: "orange",
  "Full-Stack": "blue",
  Standard: "green",
  "Top SQL": "blue",
  Cache: "red",
  Ubiquitous: "yellow",
  Essential: "blue",
  Robust: "blue",
  Modern: "blue",
  Containers: "blue",
};

export function badgeClasses(badge: string): string {
  const colorKey = BADGE_TO_COLOR[badge] ?? "blue";
  return BADGE_COLORS[colorKey];
}
