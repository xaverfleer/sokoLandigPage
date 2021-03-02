import amplitudeSnippet from "~/scripts/amplitudeSnippet";
import fbPixel from "~/scripts/fbPixel";

export function trackCustomEvent(eventName) {
  if (typeof amplitude === "object") {
    amplitude.getInstance().logEvent(eventName);
  }
}

export function trackPageLoad(path) {
  trackCustomEvent(`${path} page loaded`);
}
