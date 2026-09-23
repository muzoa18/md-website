import { describe, it, expect, afterEach, vi } from "vitest";
import {
  track,
  trackBooking,
  trackContactCta,
  trackEmail,
  trackFormSubmit,
  trackPhone,
} from "./track";

/**
 * `track` is a defensive wrapper around GA's gtag: it must never throw,
 * whether it runs on the server, before gtag has loaded, or in the browser.
 */

describe("track", () => {
  afterEach(() => {
    delete (globalThis as { window?: unknown }).window;
  });

  it("no-ops on the server (no window)", () => {
    expect("window" in globalThis).toBe(false);
    expect(() => track("boka_click")).not.toThrow();
  });

  it("no-ops when gtag hasn't loaded yet", () => {
    (globalThis as { window?: unknown }).window = {};
    expect(() => track("boka_click")).not.toThrow();
  });

  it("forwards the event to gtag with default category", () => {
    const gtag = vi.fn();
    (globalThis as { window?: unknown }).window = { gtag };
    track("boka_click", { label: "hero" });
    expect(gtag).toHaveBeenCalledWith("event", "boka_click", {
      event_category: "engagement",
      event_label: "hero",
    });
  });

  it("passes through an explicit category", () => {
    const gtag = vi.fn();
    (globalThis as { window?: unknown }).window = { gtag };
    track("submit", { category: "form", label: "contact" });
    expect(gtag).toHaveBeenCalledWith("event", "submit", {
      event_category: "form",
      event_label: "contact",
    });
  });
});

/**
 * The named lead helpers. Each one pins an event name + category so the
 * GA4 taxonomy lives in one place instead of being retyped at ~15 call
 * sites. `phone_click`, `email_click` and `boka_click` are marked as Key
 * Events in GA4, so a rename here silently breaks conversion reporting —
 * hence the exact-payload assertions.
 */
describe("lead event helpers", () => {
  afterEach(() => {
    delete (globalThis as { window?: unknown }).window;
  });

  function withGtag() {
    const gtag = vi.fn();
    (globalThis as { window?: unknown }).window = { gtag };
    return gtag;
  }

  it("trackBooking fires boka_click in the booking category", () => {
    const gtag = withGtag();
    trackBooking("hero");
    expect(gtag).toHaveBeenCalledWith("event", "boka_click", {
      event_category: "booking",
      event_label: "hero",
    });
  });

  it("trackPhone fires phone_click in the contact category", () => {
    const gtag = withGtag();
    trackPhone("footer");
    expect(gtag).toHaveBeenCalledWith("event", "phone_click", {
      event_category: "contact",
      event_label: "footer",
    });
  });

  it("trackEmail fires email_click in the contact category", () => {
    const gtag = withGtag();
    trackEmail("contact_section");
    expect(gtag).toHaveBeenCalledWith("event", "email_click", {
      event_category: "contact",
      event_label: "contact_section",
    });
  });

  it("trackContactCta fires kontakt_click, which is NOT a lead", () => {
    const gtag = withGtag();
    trackContactCta("hero");
    expect(gtag).toHaveBeenCalledWith("event", "kontakt_click", {
      event_category: "contact",
      event_label: "hero",
    });
  });

  it("trackFormSubmit fires form_submit in the contact category", () => {
    const gtag = withGtag();
    trackFormSubmit("contact_form");
    expect(gtag).toHaveBeenCalledWith("event", "form_submit", {
      event_category: "contact",
      event_label: "contact_form",
    });
  });

  it("inherits the safe no-op behaviour when gtag is absent", () => {
    (globalThis as { window?: unknown }).window = {};
    expect(() => {
      trackBooking("hero");
      trackPhone("footer");
      trackEmail("footer");
      trackContactCta("hero");
    }).not.toThrow();
  });
});
