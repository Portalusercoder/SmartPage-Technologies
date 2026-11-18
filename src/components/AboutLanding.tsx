import Link from "next/link";
import {
  ArrowUpRight,
  Cpu,
  Package,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { CircleArrowLink } from "@/components/CircleArrowLink";
import { Reveal } from "@/components/Reveal";

const pillars: Array<{
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}> = [
  {
    number: "01",
    icon: Cpu,
    title: "Technology",
    description:
      "ICT, security, and power solutions designed to support modern business operations and connected environments.",
    href: "/divisions/technology",
  },
  {
    number: "02",
    icon: Package,
    title: "Industries",
    description:
      "Industrial packaging across co-packing, corrugated boxes, and wrapping for production and logistics needs.",
    href: "/divisions/industries",
  },
  {
    number: "03",
    icon: Zap,
    title: "Power",
    description:
      "Electrical works, power distribution, and UPS systems for facilities where downtime is not an option.",
    href: "/divisions/power",
  },
];

export function AboutLanding() {
  return (
    <section
      id="about-landing"
      className="bg-white py-16 text-foreground sm:py-24"
    >
      <div className="container-page">
        <Reveal className="max-w-5xl lg:max-w-6xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
            One company bringing together technology, power, and industrial
            services under{" "}
            <span className="font-medium italic tracking-normal text-foreground/55">
              one identity.
            </span>
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            Explore our specialized divisions with pathways designed for clear
            enquiries. Each area includes focused services, practical
            capabilities, and a direct route to the right team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] focus-ring"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-foreground transition-colors hover:bg-black/[0.04] focus-ring"
              aria-label="Discover our company"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:gap-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.number}
                delay={80 + index * 90}
                className="flex min-h-[280px] flex-col rounded-[1.75rem] bg-[#f3f3f1] p-6 sm:min-h-[320px] sm:p-7"
              >
                <span className="text-sm font-medium tracking-[0.08em] text-muted">
                  {pillar.number}
                </span>
                <h3 className="font-display mt-8 text-2xl font-semibold tracking-tight sm:text-[1.65rem]">
                  {pillar.title}
                </h3>
                <div className="mt-4 h-px w-10 bg-black/15" aria-hidden />
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-10">
                  <Icon
                    className="h-8 w-8 text-foreground"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <CircleArrowLink
                    href={pillar.href}
                    label={`Explore ${pillar.title}`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
