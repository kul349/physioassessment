"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return null;
}
