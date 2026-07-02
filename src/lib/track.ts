/**
 * Thin wrapper around Google Analytics' gtag, safe to call anywhere.
 * No-ops on the server or before gtag has loaded.
 */
type GtagFn = (...args: unknown[]) => void;

export function track(
  event: string,
  opts: { category?: string; label?: string } = {},
) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", event, {
    event_category: opts.category ?? "engagement",
    event_label: opts.label,
  });
}
