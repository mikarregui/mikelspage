import Image from "next/image";
import { AnimatedText } from "./AnimatedText";
import { brand } from "@/shared/config/brand";

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
      <div className="relative w-52 h-80 md:w-64 md:h-96 flex-shrink-0">
        <Image
          src="/mikel_photo_NB.png"
          alt={brand.name}
          fill
          className="object-contain object-top"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 min-w-0">
        <AnimatedText
          text={brand.name.toUpperCase()}
          tag="h1"
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
        />
        <AnimatedText
          text="Senior Product Manager"
          tag="h2"
          className="text-lg md:text-2xl text-muted-foreground font-light"
        />
        <p className="text-sm text-muted-foreground/60 mt-1 tracking-wide">
          Sporty · Traveler · Lover of simple things
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-sm text-foreground">
            I turn messy problems into products people actually use.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Currently at Factorial, building spend tools - cards, expense flows,
            and ERP integrations - that finance teams actually enjoy. On the
            side, I also vibe-code my own projects and experiment with AI tools.
            Before that, I led squads at Libere and Lookiero across field
            operations, AI personalization, and inventory. Natural problem
            solver. Transparency obsessed.
          </p>
        </div>
        {children && <div className="flex flex-col gap-8 mt-4">{children}</div>}
      </div>
    </section>
  );
}
