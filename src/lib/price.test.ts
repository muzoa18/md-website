import { describe, it, expect } from "vitest";
import { formatFrom } from "./price";

describe("formatFrom", () => {
  it("formats with Swedish thousands grouping and 'kr'", () => {
    // sv-SE groups with a no-break space; normalise for the assertion
    expect(formatFrom(1995).replace(/\s/g, " ")).toBe("från 1 995 kr");
  });

  it("leaves small prices ungrouped", () => {
    expect(formatFrom(395)).toBe("från 395 kr");
  });

  it("drops 'från' for a fixed price", () => {
    expect(formatFrom(700, true)).toBe("700 kr");
  });

  it("falls back to 'Ring för pris' when no price is set", () => {
    expect(formatFrom(null)).toBe("Ring för pris");
  });
});
