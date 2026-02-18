"use client";

import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  tag: Tag = "span",
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} style={{ whiteSpace: "nowrap" }}>
          {word.split("").map((char, i) => (
            <CharSpan key={i} char={char} />
          ))}
          {wi < words.length - 1 && <CharSpan char=" " />}
        </span>
      ))}
    </Tag>
  );
}

function CharSpan({ char }: { char: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("animate-char");
    void el.offsetWidth; // force reflow to restart animation
    el.classList.add("animate-char");
  };

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLSpanElement>) => {
    (e.currentTarget as HTMLElement).classList.remove("animate-char");
  };

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  );
}
