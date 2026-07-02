import { describe, it, expect } from "vitest";
import { getEmail } from "./email";
import { site } from "./site";

describe("getEmail", () => {
  it("assembles user@domain from the site config", () => {
    expect(getEmail()).toBe(`${site.emailUser}@${site.emailDomain}`);
  });

  it("produces a syntactically valid address", () => {
    expect(getEmail()).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});
