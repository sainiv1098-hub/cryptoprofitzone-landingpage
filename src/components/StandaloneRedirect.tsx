"use client";

import { useEffect } from "react";

const APP_URL = "https://app.cpzone.website/";

// When the installed PWA is launched from the home screen (standalone mode),
// redirect straight to the actual app instead of showing the landing page.
export default function StandaloneRedirect() {
  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true);

    if (isStandalone) {
      window.location.replace(APP_URL);
    }
  }, []);

  return null;
}
