"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

/**
 * Embeds the Gift Up! gift-card checkout. The Gift Up script scans the page
 * for `.gift-up-target` elements and renders into them. We load the script
 * once and let it hydrate the target div.
 */
export function GiftUp() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    const w = window as unknown as {
      giftup?: (...args: unknown[]) => void;
    };
    w.giftup =
      w.giftup ||
      function (...args: unknown[]) {
        (
          (w.giftup as unknown as { q?: unknown[] }).q =
            (w.giftup as unknown as { q?: unknown[] }).q || []
        ).push(args);
      };

    const existing = document.querySelector(
      'script[src="https://cdn.giftup.app/dist/gift-up.js"]',
    );
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://cdn.giftup.app/dist/gift-up.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div
      className="gift-up-target"
      data-site-id={site.giftUpSiteId}
      data-platform="Other"
    />
  );
}
