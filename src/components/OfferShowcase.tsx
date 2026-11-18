import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { divisions } from "@/data/site";
import { cx } from "@/lib/utils";

function ArrowButton({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105",
        className,
      )}
    >
      <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
    </span>
  );
}

function SideOfferCard({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[1.75rem] bg-[#f3f3f1] p-5 transition-transform duration-500 hover:-translate-y-1 focus-ring sm:p-6"
    >
      <div className="mb-5 flex justify-end">
        <ArrowButton />
      </div>

      <h3 className="font-display max-w-[14ch] flex-1 text-[1.65rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[1.85rem]">
        {title}
      </h3>

      <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-[1.35rem]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    </Link>
  );
}

function FeaturedOfferCard({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] bg-accent p-5 text-white transition-transform duration-500 hover:-translate-y-1 focus-ring sm:min-h-[480px] sm:p-6"
    >
      <div className="relative mx-auto mt-2 flex aspect-square w-[78%] max-w-[280px] items-center justify-center sm:mt-4 sm:w-[82%]">
        <div
          className="absolute inset-0 overflow-hidden bg-white/10 transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
          style={{
            clipPath:
              "polygon(50% 0%, 61% 28%, 90% 18%, 72% 42%, 100% 50%, 72% 58%, 90% 82%, 61% 72%, 50% 100%, 39% 72%, 10% 82%, 28% 58%, 0% 50%, 28% 42%, 10% 18%, 39% 28%)",
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:rotate-[-360deg] group-hover:scale-105"
            sizes="280px"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <h3 className="font-display min-w-0 max-w-[16ch] text-[1.65rem] font-semibold leading-[1.12] tracking-tight sm:text-[1.85rem]">
          {title}
        </h3>
        <ArrowButton className="mb-1" />
      </div>
    </Link>
  );
}

export function OfferShowcase() {
  const [technology, industries, power] = divisions;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <Reveal className="mb-10 max-w-5xl sm:mb-12 lg:max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
            Solutions across every division.
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            Technology, power, and industrial packaging services — organized
            under one Smart Pages identity, with clear pathways to the right
            team for every enquiry.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <Reveal delay={60} className="h-full">
            <SideOfferCard
              title="Technology infrastructure, security systems, and power solutions."
              href={technology.href}
              image={technology.image}
            />
          </Reveal>
          <Reveal delay={140} className="h-full">
            <FeaturedOfferCard
              title="Industrial packaging across co-packing, boxes, and wrapping."
              href={industries.href}
              image={industries.image}
            />
          </Reveal>
          <Reveal delay={220} className="h-full">
            <SideOfferCard
              title="Electrical works, distribution, and UPS for critical facilities."
              href={power.href}
              image={power.image}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
