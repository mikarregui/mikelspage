import { describe, it, expect } from "vitest";
import { routing } from "./routing";

describe("i18n routing", () => {
  it("supports exactly two locales: en and es", () => {
    expect(routing.locales).toEqual(["en", "es"]);
  });

  it("has English as the default locale", () => {
    expect(routing.defaultLocale).toBe("en");
  });
});
