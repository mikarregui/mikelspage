import { Hero, Experience, SocialLinks } from "@/features/home";
import { brand } from "@/shared/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: brand.seo.title,
  description: brand.seo.description,
};

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">
      <Hero>
        <Experience />
        <SocialLinks />
      </Hero>
    </main>
  );
}
