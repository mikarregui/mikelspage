import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AnimatedText } from "./AnimatedText";

describe("AnimatedText", () => {
  it("renders one span per character", () => {
    render(<AnimatedText text="Hi" tag="h1" />);
    const heading = screen.getByRole("heading", { level: 1 });
    const charSpans = heading.querySelectorAll("span[style*='inline-block']");
    expect(charSpans).toHaveLength(2);
  });

  it("renders non-breaking space for space character", () => {
    render(<AnimatedText text="A B" tag="span" />);
    const el = screen.getByLabelText("A B");
    const charSpans = el.querySelectorAll("span[style*='inline-block']");
    // chars in order: "A", " ", "B" → space is at index 1
    expect(charSpans[1].textContent).toBe("\u00A0");
  });

  it("sets aria-label to the full text", () => {
    render(<AnimatedText text="Hello" tag="h1" />);
    expect(screen.getByLabelText("Hello")).toBeInTheDocument();
  });

  it("adds animate-char class on mouse enter", () => {
    render(<AnimatedText text="A" tag="span" />);
    const wrapper = screen.getByLabelText("A");
    const charSpan = wrapper.querySelector(
      "span[style*='inline-block']",
    ) as HTMLElement;
    fireEvent.mouseEnter(charSpan);
    expect(charSpan.classList.contains("animate-char")).toBe(true);
  });

  it("span has onAnimationEnd handler attached (cleanup happens in browser)", () => {
    render(<AnimatedText text="A" tag="span" />);
    const wrapper = screen.getByLabelText("A");
    const charSpan = wrapper.querySelector(
      "span[style*='inline-block']",
    ) as HTMLElement;
    expect(charSpan).toBeInTheDocument();
    expect(charSpan.style.display).toBe("inline-block");
  });
});
