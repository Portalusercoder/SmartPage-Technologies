import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Focus, Layers, Route } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { DivisionCard } from "@/components/DivisionCard";
import { divisions } from "@/data/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Pages Technologies — one company with specialized capabilities across technology, power, and industries.",
};

const principles = [
  {
    title: "Clarity",
    description:
      "Three specialized divisions under one identity, so you always know where to take your requirement.",
    icon: Layers,
  },
  {
    title: "Adaptability",
    description:
      "Each division focuses on practical offerings shaped around real operational and commercial needs.",
    icon: Route,
  },
  {
    title: "Focus",
    description:
      "Enquiries are directed to the team best placed to understand and support what you need.",
    icon: Focus,
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#ececec] pb-4 pt-[4.25rem] sm:pb-6 sm:pt-[4.75rem]">
        <div className="container-page">
          {/* Dark cinematic hero card */}
          <section className="relative isolate min-h-[42vh] overflow-hidden rounded-[1.75rem] bg-black text-white sm:min-h-[48vh] sm:rounded-[2rem] lg:min-h-[52vh]">
            <Image
              src={asset("/images/about-office.jpg")}
              alt=""
              fill
              priority
              className="object-cover opacity-55"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(237,37,37,0.28),transparent_55%)]" />

            <div className="relative z-10 flex min-h-[42vh] flex-col px-5 py-5 sm:min-h-[48vh] sm:px-8 sm:py-6 lg:min-h-[52vh]">
              <p className="font-display text-sm font-semibold tracking-[0.08em] text-white/90">
                Smart Pages
              </p>

              <div className="flex flex-1 items-center justify-center py-8 sm:py-10">
                <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  About Us
                </h1>
              </div>
            </div>
          </section>

          {/* Principles panel */}
          <section className="mt-3 rounded-[1.75rem] bg-[#f4f4f2] px-5 py-9 sm:mt-4 sm:rounded-[2rem] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <span className="inline-flex rounded-md bg-black/[0.06] px-2.5 py-1 text-xs font-medium text-foreground/60">
              Principles
            </span>

            <p className="font-display mt-6 max-w-4xl text-2xl font-semibold leading-[1.15] tracking-tight text-balance sm:mt-7 sm:text-3xl lg:text-[2.35rem]">
              Smart Pages Technologies is built on a simple idea:{" "}
              <span className="text-foreground/35">
                business requirements should feel clear, not overwhelming.
              </span>{" "}
              We focus on how specialized divisions work together under one
              corporate identity.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {principles.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] bg-white p-6 sm:p-7"
                >
                  <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a1a1a] text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-xl font-semibold tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Mission / Vision placeholders */}
      <section className="bg-black py-16 text-white sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance">
              Mission
            </h2>
            <p className="mt-4 font-display text-xl font-semibold tracking-tight text-balance text-white/90">
              [Mission statement placeholder — awaiting approved content]
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              This section will be updated once the official mission statement is
              confirmed by Smart Pages Technologies.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-balance">
              Vision
            </h2>
            <p className="mt-4 font-display text-xl font-semibold tracking-tight text-balance text-white/90">
              [Vision statement placeholder — awaiting approved content]
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              This section will be updated once the official vision statement is
              confirmed by Smart Pages Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Three areas of expertise.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {divisions.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Looking for a specific offering?{" "}
            <Link
              href="/contact"
              className="font-medium text-accent hover:text-accent-hover"
            >
              Get in touch
            </Link>{" "}
            and we will direct your enquiry to the appropriate division.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
