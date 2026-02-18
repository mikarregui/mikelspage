import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/features/home";
import { SocialLinks } from "@/features/home";
import { LanguageSwitcher } from "@/shared/components/LanguageSwitcher";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex min-h-screen flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
      <div className="flex flex-col gap-12">
        <Hero />
        <SocialLinks />
      </div>
      <footer className="fixed bottom-8 right-8">
        <LanguageSwitcher />
      </footer>
    </main>
  );
}
