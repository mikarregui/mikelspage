import Image from "next/image";
import { AnimatedText } from "./AnimatedText";
import { brand } from "@/shared/config/brand";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-end gap-8 md:gap-12">
      <div className="relative w-52 h-80 md:w-64 md:h-96 flex-shrink-0">
        <Image
          src="/mikel_photo_NB.png"
          alt={brand.name}
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
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
          Athlete · Traveler · Lover of simple things
        </p>
      </div>
    </section>
  );
}
