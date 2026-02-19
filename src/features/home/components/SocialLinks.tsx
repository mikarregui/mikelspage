import { Github, Linkedin, Mail } from "lucide-react";
import { brand } from "@/shared/config/brand";
import type { SocialLink } from "../types";

const icons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
} as const;

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
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground/40 mb-3">
        Get in touch
      </h3>
      <ul className="flex gap-6 flex-wrap">
        {links.map((link) => {
          const Icon = icons[link.label as keyof typeof icons];
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 text-muted-foreground hover:text-emerald-500 transition-colors duration-200 text-xs uppercase tracking-widest"
              >
                <Icon className="w-3 h-3" />
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
