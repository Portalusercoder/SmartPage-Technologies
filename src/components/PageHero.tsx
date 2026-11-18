import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { cx } from "@/lib/utils";

type Props = {
  crumbs?: Crumb[];
  title: ReactNode;
  description?: string;
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: "light" | "dark";
};

export function PageHero({
  crumbs,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  tone = "light",
}: Props) {
  return (
    <section
      className={cx(
        "relative overflow-hidden",
        tone === "dark" ? "bg-black text-white" : "bg-white text-foreground",
      )}
    >
      <div className="container-page py-14 sm:py-20">
        {crumbs ? <Breadcrumb items={crumbs} /> : null}
        <div className={cx("grid gap-10", image && "lg:grid-cols-[1.15fr_0.85fr] lg:items-end")}>
          <Reveal eager className="min-w-0">
            <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description ? (
              <p
                className={cx(
                  "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
                  tone === "dark" ? "text-white/65" : "text-muted",
                )}
              >
                {description}
              </p>
            ) : null}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {primaryCta ? (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    variant={tone === "dark" ? "light" : "ghost"}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            )}
          </Reveal>
          {image ? (
            <Reveal eager delay={120} className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface">
              <Image
                src={image}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
