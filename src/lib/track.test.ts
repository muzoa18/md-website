import { describe, it, expect, afterEach, vi } from "vitest";
import { track } from "./track";

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
