export type HeadlineVariant = "control" | "savings" | "strategic";

export const HEADLINE_VARIANTS: Record<HeadlineVariant, string> = {
  control: "Stop Overpaying on Credit Cards - Optimize Your Debt Portfolio with AI",
  savings: "Stop Overpaying on Credit Cards - Save $1,000+ Annually with AI",
  strategic: "Turn Your Credit Card Debt Into a Strategic Advantage",
};

export function getHeadlineVariant(): HeadlineVariant {
  if (typeof window === "undefined") return "control";
  
  // Simple A/B test: use timestamp to assign variant
  const stored = localStorage.getItem("headline_variant");
  if (stored) return stored as HeadlineVariant;
  
  const variants: HeadlineVariant[] = ["control", "savings", "strategic"];
  const variant = variants[Date.now() % variants.length];
  localStorage.setItem("headline_variant", variant);
  return variant;
}

export function useFeatureFlag(flag: string): boolean {
  // Check environment variable
  const envKey = `NEXT_PUBLIC_FF_${flag.toUpperCase()}`;
  if (process.env[envKey] === "false") return false;
  if (process.env[envKey] === "true") return true;
  
  // Default behavior
  return true;
} 