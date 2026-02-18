import { describe, it, expect } from "vitest";
import { brand } from "./brand";

describe("brand config", () => {
  it("has the correct name", () => {
    expect(brand.name).toBe("Mikel Arregui Saavedra");
  });

  it("has a valid linkedin URL", () => {
    expect(brand.links.linkedin).toMatch(
      /^https:\/\/www\.linkedin\.com\/in\//
    );
  });

  it("has a valid github URL", () => {
    expect(brand.links.github).toMatch(/^https:\/\/github\.com\//);
  });

  it("has a valid email", () => {
    expect(brand.links.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("has exactly three hobbies", () => {
    expect(brand.hobbies).toHaveLength(3);
  });

  it("has an SEO title that includes the name", () => {
    expect(brand.seo.title).toContain("Mikel Arregui Saavedra");
  });
});
