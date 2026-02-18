import { brand } from "@/shared/config/brand";
import type { SocialLink } from "../types";

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      label: "LinkedIn",
      href: brand.links.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: brand.links.github,
      external: true,
    },
    {
      label: "Email",
      href: `mailto:${brand.links.email}`,
      external: false,
    },
  ];

  return (
    <nav aria-label="Social links">
      <ul className="flex gap-6 flex-wrap">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xs uppercase tracking-widest"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
