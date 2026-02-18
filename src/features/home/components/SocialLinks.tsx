import { useTranslations } from "next-intl";
import { brand } from "@/shared/config/brand";
import type { SocialLink } from "../types";

export function SocialLinks() {
  const t = useTranslations("home.social");

  const links: SocialLink[] = [
    {
      label: t("linkedin"),
      href: brand.links.linkedin,
      external: true,
    },
    {
      label: t("github"),
      href: brand.links.github,
      external: true,
    },
    {
      label: t("email"),
      href: `mailto:${brand.links.email}`,
      external: false,
    },
  ];

  return (
    <nav aria-label={t("navLabel")}>
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
