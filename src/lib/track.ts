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

/**
 * Named lead events.
 *
 * Every GA4 event name and category the site emits is defined here, so the
 * taxonomy can't drift across the ~15 call sites that fire them.
 *
 * `boka_click`, `phone_click` and `email_click` (plus `form_submit`, fired
 * from the contact form) are marked as **Key Events** in GA4 — together they
 * are the site's lead count, and GA4 reports them against each acquisition
 * channel. Renaming one here detaches it from that reporting, so treat these
 * strings as a published contract rather than an implementation detail.
 *
 * `kontakt_click` is deliberately NOT a key event: scrolling to the contact
 * section is interest, not a lead, and counting it would inflate the
 * conversion rate we judge SEO work by.
 *
 * `label` is always the placement ("hero", "footer", "contact_section", …) so
 * we can tell which entry points people actually use.
 */

/** Clicked through to MECA's booking system. Key event. */
export const trackBooking = (label: string) =>
  track("boka_click", { category: "booking", label });

/** Tapped the phone number. Key event. Undercounts on desktop, where people read rather than click. */
export const trackPhone = (label: string) =>
  track("phone_click", { category: "contact", label });

/** Tapped the email address. Key event. */
export const trackEmail = (label: string) =>
  track("email_click", { category: "contact", label });

/** Jumped to the contact section. Engagement only — not a lead. */
export const trackContactCta = (label: string) =>
  track("kontakt_click", { category: "contact", label });

/** Submitted the contact form. Key event. */
export const trackFormSubmit = (label: string) =>
  track("form_submit", { category: "contact", label });
