import { ConversionEvents } from "@/lib/constants";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: ConversionEvents, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
  } catch {}

  try {
    if (window.fbq) {
      window.fbq("trackCustom", event, payload || {});
    }
  } catch {}
} 