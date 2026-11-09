import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { DivisionCard } from "@/components/DivisionCard";
import { HomeHero } from "@/components/HomeHero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { StarAccent } from "@/components/StarAccent";
import { capabilities, divisions, whyChooseUs } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Featured solutions — Kinetic service cards */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              What we offer
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Solutions across every division.
            </h2>
          </div>
          <ServiceGrid featuredId="ict-solutions" />
        </div>
      </section>

      {/* SECTION 03 — ABOUT */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              About the company
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              One Company.{" "}
              <span className="headline-fade">Three Areas of Expertise.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Smart Pages Technologies brings together specialized capabilities
              across technology, industrial packaging, and food and beverage
              services. Through its three business divisions, the company aims to
              address diverse operational and commercial requirements under one
              corporate identity.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Discover Our Company
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about-office.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* SECTION 04 — DIVISIONS */}
      <section id="divisions" className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our divisions
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Three Divisions. One Vision.
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Explore our specialized business divisions and discover the
              solutions and services we offer.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {divisions.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — FEATURED SOLUTIONS */}
      <section className="container-page py-20 sm:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Featured solutions
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Solutions That Support Businesses.
          </h2>
        </div>
        <div className="space-y-10">
          {divisions.map((division) => (
            <div key={division.id}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {division.name}
                </h3>
                <Link
                  href={division.href}
                  className="hidden text-sm font-semibold text-accent sm:inline-flex"
                >
                  Explore division
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {division.services.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group flex items-center justify-between rounded-[1.5rem] border border-black/8 bg-white px-5 py-5 transition-all hover:border-accent/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] focus-ring"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                        {division.name}
                      </p>
                      <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                        {service.name}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 06 — WHY US */}
      <section className="bg-black py-20 text-white sm:py-28">
        <div className="container-page">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              <StarAccent />
              Why Smart Pages Technologies
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Built Around{" "}
              <span className="text-white/45">Business Needs.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              We are the team{" "}
              <span className="mx-1 inline-flex h-8 w-14 overflow-hidden rounded-full align-middle">
                <Image
                  src="/images/about-office.jpg"
                  alt=""
                  width={56}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </span>{" "}
              shaping practical pathways across technology, industry, and everyday
              service experiences.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — CAPABILITIES */}
      <section className="container-page py-20 sm:py-28">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Our work / capabilities
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Expertise in Action.
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              A capabilities-focused showcase of how Smart Pages Technologies
              supports businesses across its three divisions.
            </p>
          </div>
          <Button href="/our-work" variant="ghost">
            View capabilities
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:row-span-2 min-h-[420px]" : "min-h-[240px]"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/70">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
