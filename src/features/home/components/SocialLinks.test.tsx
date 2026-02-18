import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SocialLinks } from "./SocialLinks";

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("SocialLinks", () => {
  it("renders three social links", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("linkedin and github links have target=_blank and rel=noopener", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    const externalLinks = links.filter(
      (link) => link.getAttribute("target") === "_blank"
    );
    expect(externalLinks).toHaveLength(2);
    externalLinks.forEach((link) => {
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });
  });

  it("email link has mailto: href", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    const emailLink = links.find((link) =>
      link.getAttribute("href")?.startsWith("mailto:")
    );
    expect(emailLink).toBeDefined();
  });

  it("email link does not have target=_blank", () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole("link");
    const emailLink = links.find((link) =>
      link.getAttribute("href")?.startsWith("mailto:")
    );
    expect(emailLink?.getAttribute("target")).toBeNull();
  });
});
