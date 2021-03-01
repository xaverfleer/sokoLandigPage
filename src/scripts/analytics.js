import amplitudeSnippet from "~/scripts/amplitudeSnippet";
import fbPixel from "~/scripts/fbPixel";

export default function trackUrl(path) {
  if (typeof amplitude === "object") {
    amplitude.getInstance().logEvent(`${path} page loaded/`);
  }
}
