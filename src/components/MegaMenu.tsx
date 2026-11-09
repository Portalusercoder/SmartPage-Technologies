"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/data/site";

type Props = {
  open: boolean;
  onNavigate: () => void;
};

export function MegaMenu({ open, onNavigate }: Props) {
  if (!open) return null;

  return (
    <div
      id="divisions-menu"
      role="menu"
      aria-label="Our Divisions"
      className="absolute left-1/2 top-full z-50 mt-3 w-[min(920px,calc(100vw-2rem))] -translate-x-1/2 animate-menu-in"
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
        <div className="grid gap-0 md:grid-cols-3">
          {divisions.map((division, index) => (
            <div
              key={division.id}
              className={`p-5 sm:p-6 ${index < divisions.length - 1 ? "md:border-r md:border-black/6" : ""}`}
            >
              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={division.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {division.name}
                </p>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {division.shortDescription}
              </p>
              <ul className="space-y-2">
                {division.services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      role="menuitem"
                      onClick={onNavigate}
                      className="group/link flex items-center justify-between rounded-xl px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface focus-ring"
                    >
                      {service.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/link:opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={division.href}
                role="menuitem"
                onClick={onNavigate}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover focus-ring rounded"
              >
                Explore {division.name}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
