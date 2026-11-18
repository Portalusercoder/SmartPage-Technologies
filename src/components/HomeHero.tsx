import { Button } from "@/components/Button";
import { LiquidHeroBackground } from "@/components/LiquidHeroBackground";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#120303] text-white">
      <LiquidHeroBackground className="absolute inset-0" durationSec={108} />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="container-page flex flex-1 flex-col justify-end pb-14 pt-[calc(var(--header-h)+1.25rem)] sm:pb-16 lg:pb-20">
          <Reveal eager className="max-w-5xl lg:max-w-6xl">
            <h1 className="font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Technology. Power. Industry.
            </h1>
            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/70 sm:mt-8 sm:text-base lg:text-lg">
              {site.description}
            </p>
          </Reveal>

          <Reveal
            eager
            delay={160}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <Button href="#divisions" variant="light">
              Explore Our Divisions
            </Button>
            <Button
              href="/contact"
              className="border border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
