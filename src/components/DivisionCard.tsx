import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Division } from "@/data/site";

export function DivisionCard({ division }: { division: Division }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={division.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Division
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-white">
            {division.name}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-muted">{division.description}</p>
        <ul className="mt-5 space-y-2">
          {division.services.map((service) => (
            <li key={service.id}>
              <Link
                href={service.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent focus-ring rounded"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={division.href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-ring rounded"
        >
          Explore {division.name}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
