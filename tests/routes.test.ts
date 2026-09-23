import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { spawn, type ChildProcess } from "node:child_process";
import { services, nav, legalNav } from "@/lib/site";

/**
 * End-to-end smoke test: boot the *production* build (`next start`) and assert
 * every real route renders (200) and unknown routes 404. Requires a prior
 * `npm run build`. Run with `npm run test:e2e` (excluded from the fast unit
 * suite because it needs the build output and a live server).
 */

const PORT = 3123;
const BASE = `http://127.0.0.1:${PORT}`;

// Every route the site exposes, derived from the single source of truth so the
// test can't drift from the real nav/services.
const staticRoutes = [
  "/",
  "/tjanster",
  "/om-oss",
  "/boka",
  ...nav.map((n) => n.href),
  ...legalNav.map((n) => n.href),
];
const serviceRoutes = services.map((s) => `/tjanster/${s.slug}`);
const routes = [...new Set([...staticRoutes, ...serviceRoutes])];

let server: ChildProcess;

async function waitForServer(timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(BASE, { signal: AbortSignal.timeout(2000) });
      if (res.status < 500) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start within ${timeoutMs}ms`);
}

beforeAll(async () => {
  server = spawn("npx", ["next", "start", "-p", String(PORT)], {
    stdio: "ignore",
    env: process.env,
  });
  await waitForServer();
}, 90_000);

afterAll(() => {
  server?.kill("SIGTERM");
});

describe("route smoke test (production build)", () => {
  it.each(routes)("GET %s → 200", async (route) => {
    const res = await fetch(BASE + route);
    expect(res.status, route).toBe(200);
    const html = await res.text();
    expect(html.length, route).toBeGreaterThan(0);
  });

  it("GET /this-page-does-not-exist → 404", async () => {
    const res = await fetch(BASE + "/this-page-does-not-exist");
    expect(res.status).toBe(404);
  });

  it("serves /sitemap.xml and /robots.txt", async () => {
    const sitemap = await fetch(BASE + "/sitemap.xml");
    expect(sitemap.status).toBe(200);
    const robots = await fetch(BASE + "/robots.txt");
    expect(robots.status).toBe(200);
  });
});
