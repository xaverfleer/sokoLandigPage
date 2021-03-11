export function trackCampaign() {
  const search = document.location.search;
  const campaignName = (search.split("c=")[1] || "").split("&")[0];
  campaignName && trackCustomEvent(`Campaign ${campaignName}`);
  window.history.replaceState(
    {},
    "",
    search
      .split(`c=${campaignName}`)
      .join("")
      .split("&&")
      .join("")
  );
}

export function trackCustomEvent(eventName) {
  if (typeof amplitude === "object") {
    amplitude.getInstance().logEvent(eventName);
  }
}

export function trackPageLoad(path) {
  trackCustomEvent(`${path} page loaded`);
}

export function trackScrolling(targetId, targetName) {
  if (window.IntersectionObserver !== null) {
    function handler(entries, observer) {
      if (entries[0].isIntersecting) {
        trackCustomEvent(`Scrolled to ${targetName}`);
        observer.disconnect();
      }
    }

    let observer = new IntersectionObserver(handler);
    observer.observe(document.getElementById(targetId));
  }
}
