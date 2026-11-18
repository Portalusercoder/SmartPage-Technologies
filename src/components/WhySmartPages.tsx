"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Route,
  Star,
  type LucideIcon,
} from "lucide-react";
import { CircleArrowLink } from "@/components/CircleArrowLink";
import { setBrandRedTheme } from "@/lib/page-theme";
import { cx } from "@/lib/utils";

const reasons: Array<{
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}> = [
  {
    number: "01",
    icon: Building2,
    title: "Specialized divisions",
    description:
      "Technology, power, and industrial packaging services under one corporate identity — so capability stays focused.",
    href: "/about",
  },
  {
    number: "02",
    icon: Route,
    title: "Clear enquiry routing",
    description:
      "Requirements are directed to the right team quickly, keeping conversations practical and matched to the right division.",
    href: "/contact",
  },
  {
    number: "03",
    icon: Star,
    title: "Requirement-led solutions",
    description:
      "Recommendations follow what each business actually needs, with a commitment to clear and dependable service quality.",
    href: "/our-work",
  },
];

type Phase = "idle" | "title" | "swap" | "done";

export function WhySmartPages() {
  const sectionRef = useRef<HTMLElement>(null);
  const played = useRef(false);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const id = "why-smart-pages";

    const themeObserver = new IntersectionObserver(
      ([entry]) => {
        setBrandRedTheme(id, entry.isIntersecting);
      },
      {
        threshold: [0, 0.05, 0.1],
        rootMargin: "-22% 0px -22% 0px",
      },
    );

    themeObserver.observe(section);

    return () => {
      themeObserver.disconnect();
      setBrandRedTheme(id, false);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      played.current = true;
      return;
    }

    let titleTimer: number | undefined;
    let doneTimer: number | undefined;

    const play = () => {
      if (played.current) return;
      played.current = true;
      setPhase("title");

      titleTimer = window.setTimeout(() => {
        setPhase("swap");
        doneTimer = window.setTimeout(() => setPhase("done"), 900);
      }, 1100);
    };

    const trigger = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          play();
          trigger.disconnect();
        }
      },
      { threshold: [0.28, 0.4, 0.6] },
    );

    trigger.observe(section);

    return () => {
      trigger.disconnect();
      window.clearTimeout(titleTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const showBillboard = phase === "title" || phase === "swap";
  const contentLive = phase === "swap" || phase === "done";

  return (
    <section
      ref={sectionRef}
      id="why-smart-pages"
      className="why-us bg-transparent py-16 text-white transition-colors duration-700 sm:py-24"
    >
      <div className="container-page relative overflow-hidden">
        {showBillboard ? (
          <p
            className={cx(
              "pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-center font-display font-semibold tracking-tight",
              "text-[clamp(3.75rem,16vw,9.75rem)] leading-none",
              "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]",
              phase === "swap"
                ? "-translate-x-[120%] opacity-0"
                : "translate-x-0 opacity-100",
            )}
            aria-hidden
          >
            Why Us?
          </p>
        ) : null}

        <div
          className={cx(
            "relative z-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            contentLive
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0",
          )}
        >
          <div className="max-w-5xl lg:max-w-6xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
              From specialized divisions to clear next steps — we&apos;re with
              you through{" "}
              <span className="font-medium italic tracking-normal">
                every enquiry.
              </span>
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
              Smart Pages Technologies brings together technology, power, and
              industrial packaging services under one identity, so businesses
              can reach the right capability without the noise.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.number}
                  className={cx(
                    "flex min-h-[280px] flex-col rounded-[1.75rem] bg-black/20 p-6 sm:min-h-[320px] sm:p-7",
                    "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    contentLive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0",
                  )}
                  style={{
                    transitionDelay: contentLive ? `${120 + index * 90}ms` : "0ms",
                  }}
                >
                  <span className="text-sm font-medium tracking-[0.08em] text-white/55">
                    {reason.number}
                  </span>
                  <h3 className="font-display mt-8 text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                    {reason.title}
                  </h3>
                  <div className="mt-4 h-px w-10 bg-white/35" aria-hidden />
                  <p className="mt-5 text-sm leading-relaxed text-white/75">
                    {reason.description}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                    <Icon
                      className="h-8 w-8 text-white"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <CircleArrowLink
                      href={reason.href}
                      label={reason.title}
                      tone="light"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
