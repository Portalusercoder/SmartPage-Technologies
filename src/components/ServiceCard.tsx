"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cx } from "@/lib/utils";

type Props = {
  label: string;
  title: string;
  href: string;
  image?: string;
  description?: string;
  featured?: boolean;
};

export function ServiceCard({
  label,
  title,
  href,
  image,
  description,
  featured = false,
}: Props) {
  const [active, setActive] = useState(featured);

  return (
    <Link
      href={href}
      className={cx(
        "group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 transition-all duration-500 focus-ring sm:min-h-[260px]",
        active
          ? "bg-black text-white shadow-[0_24px_50px_rgba(0,0,0,0.2)]"
          : "bg-surface text-foreground hover:bg-surface-soft",
      )}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(featured)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(featured)}
    >
      {active && image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-55 transition-opacity"
            sizes="(max-width: 768px) 50vw, 16vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        </>
      ) : null}

      <div className="relative z-10">
        <span
          className={cx(
            "inline-flex rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
            active ? "bg-white/15 text-white" : "bg-white text-muted",
          )}
        >
          {label}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h3>
        {active && description ? (
          <p className="mt-2 line-clamp-2 text-sm text-white/70">{description}</p>
        ) : null}
        <span
          className={cx(
            "mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
            active
              ? "bg-white text-foreground opacity-100"
              : "bg-transparent text-transparent opacity-0",
          )}
        >
          Get started
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
