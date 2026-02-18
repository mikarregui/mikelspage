"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const next = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggleLocale}
      className="text-muted-foreground/60 hover:text-foreground transition-colors text-xs uppercase tracking-widest cursor-pointer"
      aria-label={
        locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"
      }
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
