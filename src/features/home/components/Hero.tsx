import { useTranslations } from "next-intl";
import { AnimatedText } from "./AnimatedText";
import { brand } from "@/shared/config/brand";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="flex flex-col gap-4">
      <AnimatedText
        text={brand.name.toUpperCase()}
        tag="h1"
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
      />
      <AnimatedText
        text={t("role")}
        tag="h2"
        className="text-lg md:text-2xl text-muted-foreground font-light"
      />
      <p className="text-sm text-muted-foreground/60 mt-1 tracking-wide">
        {t("hobbyList")}
      </p>
    </section>
  );
}
