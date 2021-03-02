import amplitudeSnippet from "~/scripts/amplitudeSnippet";
import fbPixel from "~/scripts/fbPixel";

export default { trackCustomEvent, trackPageLoad };

export function trackCustomEvent(eventName) {
  if (typeof amplitude === "object") {
    amplitude.getInstance().logEvent(eventName);
  }
}

export function trackPageLoad(path) {
  trackCustomEvent(`${path} page loaded`);
}
