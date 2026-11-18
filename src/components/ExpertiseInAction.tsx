"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CircleArrowLink } from "@/components/CircleArrowLink";
import { Reveal } from "@/components/Reveal";
import { capabilities } from "@/data/site";
import { cx } from "@/lib/utils";

type Variant = "dark" | "accent" | "photo" | "light";

const cards = capabilities.map((item, index) => {
  const variants: Variant[] = ["dark", "accent", "photo", "light"];
  const ctas = [
    "Our Solutions",
    "See Projects",
    "Discover More",
    "Talk to Us",
  ];
  return {
    ...item,
    number: String(index + 1).padStart(2, "0"),
    variant: variants[index] ?? "dark",
    cta: ctas[index] ?? "Explore",
  };
});

const PAGES = [cards.slice(0, 2), cards.slice(2, 4)] as const;
const INTERVAL_MS = 5000;

function ExpertiseCard({
  number,
  title,
  description,
  href,
  image,
  cta,
  variant,
}: (typeof cards)[number]) {
  const isDark = variant === "dark" || variant === "photo";
  const isAccent = variant === "accent";
  const isLight = variant === "light";

  return (
    <article
      className={cx(
        "expertise-card relative flex min-h-[340px] flex-col overflow-hidden rounded-[1.75rem] p-6 sm:min-h-[380px] sm:p-7",
        variant === "dark" && "bg-[#0a0a0a] text-white",
        isAccent && "bg-accent text-white",
        isLight && "bg-[#efefef] text-foreground",
        variant === "photo" && "bg-[#1a1a1a] text-white",
      )}
    >
      {variant === "photo" ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </>
      ) : null}

      {isAccent ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              clipPath: "polygon(0 28%, 100% 8%, 100% 100%, 0 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ) : null}

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center gap-4">
          <span
            className={cx(
              "text-sm font-medium tracking-wide",
              isDark || isAccent ? "text-white/70" : "text-muted",
            )}
          >
            {number}.
          </span>
          <div
            className={cx(
              "h-px flex-1",
              isDark || isAccent ? "bg-white/25" : "bg-black/15",
            )}
            aria-hidden
          />
        </div>

        <h3 className="font-display mt-8 max-w-[12ch] text-[1.85rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.1rem]">
          {title}
        </h3>

        <p
          className={cx(
            "mt-4 max-w-sm text-sm leading-relaxed",
            isDark || isAccent ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>

        <Link
          href={href}
          className={cx(
            "mt-6 inline-flex w-fit rounded-sm text-sm font-medium underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70 focus-ring",
            isDark || isAccent ? "text-white" : "text-foreground",
          )}
        >
          {cta}
        </Link>

        <div className="mt-auto flex justify-end pt-10">
          <CircleArrowLink
            href={href}
            label={cta}
            tone={isAccent ? "light" : "brand"}
          />
        </div>
      </div>
    </article>
  );
}

export function ExpertiseInAction() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = useEffectEvent((next: number) => {
    const total = PAGES.length;
    setPage(((next % total) + total) % total);
  });

  const advance = useEffectEvent(() => {
    setPage((current) => (current + 1) % PAGES.length);
  });

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      advance();
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-white py-16 text-foreground sm:py-24">
      <div className="container-page">
        <Reveal className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-10">
          <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-foreground/65 uppercase">
            Our Work
          </span>
          <h2 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:justify-self-end lg:text-right lg:text-[2.75rem] lg:leading-[1.1]">
            Expertise that supports businesses across every division.
          </h2>
        </Reveal>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            const end = e.changedTouches[0]?.clientX;
            touchStartX.current = null;
            if (start == null || end == null) return;
            const delta = end - start;
            if (Math.abs(delta) < 48) return;
            goTo(page + (delta < 0 ? 1 : -1));
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {PAGES.map((pair, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-4 px-0 sm:grid-cols-2 sm:gap-5"
              >
                {pair.map((card) => (
                  <ExpertiseCard key={card.title} {...card} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 sm:mt-10">
          <div className="flex items-center gap-2" aria-hidden>
            {PAGES.map((_, index) => (
              <span
                key={index}
                className={cx(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === page
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-foreground/20",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous cards"
              onClick={() => goTo(page - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition-colors hover:bg-black/[0.04] focus-ring"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
            </button>
            <button
              type="button"
              aria-label="Next cards"
              onClick={() => goTo(page + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition-colors hover:bg-black/[0.04] focus-ring"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
