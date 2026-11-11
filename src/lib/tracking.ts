export type TrackEvent =
  | "ViewContent"
  | "Contact"
  | "WhatsAppClick"
  | "PhoneClick"
  | "AppointmentFormStart"
  | "AppointmentFormSubmit";

type TrackParams = Record<string, string>;

const standardEvents = new Set<TrackEvent>(["ViewContent", "Contact"]);

declare global {
  interface Window {
    fbq?: (command: "track" | "trackCustom", event: string, params?: TrackParams) => void;
  }
}

export function track(event: TrackEvent, params: TrackParams = {}) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq(standardEvents.has(event) ? "track" : "trackCustom", event, params);
}
