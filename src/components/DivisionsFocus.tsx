"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Cpu, Package, Zap } from "lucide-react";
import { CircleArrowLink } from "@/components/CircleArrowLink";
import { divisions } from "@/data/site";
import { setBrandRedTheme } from "@/lib/page-theme";
import { cx } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  technology: Cpu,
  industries: Package,
  power: Zap,
};

const titles: Record<string, string> = {
  technology: "Technology that supports modern operations",
  industries: "Industrial packaging for production needs",
  power: "Power systems built for continuity",
};

function DivisionColumn({
  division,
  className,
}: {
  division: (typeof divisions)[number];
  className?: string;
}) {
  const Icon = icons[division.id] ?? Cpu;

  return (
    <div
      className={cx(
        "group/card flex h-full flex-col rounded-[1.75rem] p-6 transition-all duration-300 sm:p-7",
        "bg-transparent text-foreground",
        "hover:bg-gradient-to-b hover:from-accent hover:to-[#b81a1a] hover:text-white hover:shadow-[0_20px_50px_rgba(237,37,37,0.25)]",
        className,
      )}
    >
      <div
        className={cx(
          "mb-8 inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-300",
          "bg-black/[0.05] text-foreground",
          "group-hover/card:bg-white/15 group-hover/card:text-white",
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>

      <h3 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight transition-colors duration-300 group-hover/card:text-white">
        {titles[division.id] ?? division.name}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover/card:text-white/75">
        {division.description}
      </p>

      <ul className="mt-6 space-y-2">
        {division.services.map((service) => (
          <li key={service.id}>
            <Link
              href={service.href}
              className={cx(
                "rounded text-sm font-medium transition-colors focus-ring",
                "text-foreground/80 hover:text-accent",
                "group-hover/card:text-white/90 group-hover/card:hover:text-white",
              )}
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex justify-end pt-8">
        <CircleArrowLink
          href={division.href}
          label={`Explore ${division.name}`}
          className="group-hover/card:bg-white group-hover/card:text-foreground"
        />
      </div>
    </div>
  );
}

export function DivisionsFocus() {
  const sectionRef = useRef<HTMLElement>(null);
  const [technology, industries, power] = divisions;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const id = "divisions";

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Middle viewport band — works for tall sections where
        // intersectionRatio can never reach a fixed fraction of height.
        setBrandRedTheme(id, entry.isIntersecting);
      },
      {
        threshold: [0, 0.05, 0.1],
        rootMargin: "-22% 0px -22% 0px",
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      setBrandRedTheme(id, false);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="divisions"
      className="bg-transparent py-16 transition-colors duration-700 sm:py-24"
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.08)] sm:rounded-[2.25rem] sm:p-7 lg:p-8">
          <div className="mb-6 grid gap-6 lg:mb-4 lg:grid-cols-3 lg:gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-2 lg:pr-4">
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Our
              </h2>
              <span className="relative inline-block h-10 w-16 overflow-hidden rounded-xl sm:h-12 sm:w-20">
                <Image
                  src="/images/capabilities.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </span>
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Divisions
              </h2>
            </div>

            <div className="hidden lg:block" aria-hidden />

            <div className="px-2 lg:pl-4">
              <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                We don’t add noise — we organize capability. Here’s where Smart
                Pages Technologies brings focused expertise across its three
                business divisions.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:border-r lg:border-black/10 lg:pr-4">
              <DivisionColumn division={technology} />
            </div>
            <DivisionColumn division={industries} />
            <div className="lg:border-l lg:border-black/10 lg:pl-4">
              <DivisionColumn division={power} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
