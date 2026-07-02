import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  site,
  services,
  reviews,
  googleScore,
  faqs,
  vehicles,
  guarantees,
  nav,
  legalNav,
} from "./site";

/**
 * `site.ts` is the single source of truth: the homepage, every subpage, the
 * footer, the sitemap and the JSON-LD all read from it. A typo or a duplicate
 * slug here silently breaks a whole route, so these tests guard the shape and
 * the invariants the rest of the app relies on.
 */

describe("site (business data)", () => {
  it("has the core NAP fields filled in", () => {
    expect(site.name).toBeTruthy();
    expect(site.legalName).toBeTruthy();
    expect(site.address).toBeTruthy();
    expect(site.postal).toBeTruthy();
    expect(site.city).toBeTruthy();
  });

  it("uses an absolute https url with no trailing slash", () => {
    expect(site.url).toMatch(/^https:\/\//);
    expect(site.url).not.toMatch(/\/$/);
  });

  it("has a tel: href that matches E.164 formatting", () => {
    expect(site.phoneHref).toMatch(/^tel:\+\d+$/);
  });

  it("has three opening-hours rows", () => {
    expect(site.openingHours).toHaveLength(3);
    for (const row of site.openingHours) {
      expect(row.day).toBeTruthy();
      expect(row.hours).toBeTruthy();
    }
  });
});

describe("services", () => {
  const ICONS = [
    "Wrench",
    "ScanLine",
    "CircleDot",
    "Disc3",
    "BatteryCharging",
    "Snowflake",
  ];

  it("has at least one service", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("has unique slugs (each becomes a static /tjanster/[slug] page)", () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses url-safe slugs", () => {
    for (const s of services) {
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("has all required content on every service", () => {
    for (const s of services) {
      expect(s.title, s.slug).toBeTruthy();
      expect(s.short, s.slug).toBeTruthy();
      expect(s.intro, s.slug).toBeTruthy();
      expect(s.bullets.length, s.slug).toBeGreaterThan(0);
      expect(ICONS, s.slug).toContain(s.icon);
    }
  });

  it("points every image at a real file under public/", () => {
    const publicDir = fileURLToPath(new URL("../../public", import.meta.url));
    for (const s of services) {
      if (!s.image) continue;
      expect(s.image, s.slug).toMatch(/^\/images\/.+\.(png|jpe?g|webp|svg)$/);
      expect(existsSync(publicDir + s.image), `${s.slug}: ${s.image} missing`).toBe(true);
    }
  });
});

describe("reviews & score", () => {
  it("has reviews with valid 1–5 star counts and text", () => {
    expect(reviews.length).toBeGreaterThan(0);
    for (const r of reviews) {
      expect(r.stars).toBeGreaterThanOrEqual(1);
      expect(r.stars).toBeLessThanOrEqual(5);
      expect(r.text).toBeTruthy();
      expect(r.author).toBeTruthy();
    }
  });

  it("has a Google score within range", () => {
    expect(googleScore.rating).toBeGreaterThan(0);
    expect(googleScore.rating).toBeLessThanOrEqual(5);
  });
});

describe("faqs", () => {
  it("has a question and answer for every entry", () => {
    expect(faqs.length).toBeGreaterThan(0);
    for (const f of faqs) {
      expect(f.q).toBeTruthy();
      expect(f.a).toBeTruthy();
    }
  });
});

describe("vehicles & guarantees", () => {
  it("has non-empty vehicle entries", () => {
    expect(vehicles.length).toBeGreaterThan(0);
    for (const v of vehicles) {
      expect(v.icon).toBeTruthy();
      expect(v.name).toBeTruthy();
    }
  });

  it("has non-empty guarantee entries", () => {
    expect(guarantees.length).toBeGreaterThan(0);
    for (const g of guarantees) {
      expect(g.icon).toBeTruthy();
      expect(g.title).toBeTruthy();
      expect(g.text).toBeTruthy();
    }
  });
});

describe("navigation", () => {
  it("uses absolute, root-relative hrefs everywhere", () => {
    for (const item of [...nav, ...legalNav]) {
      expect(item.href, item.label).toMatch(/^\//);
      expect(item.label).toBeTruthy();
    }
  });

  it("has unique nav hrefs", () => {
    const hrefs = nav.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
