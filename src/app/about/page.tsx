import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { DivisionCard } from "@/components/DivisionCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { StarAccent } from "@/components/StarAccent";
import { divisions, whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Pages Technologies — one company with specialized capabilities across technology, industries, and food and beverages.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        eyebrow="About Us"
        title="One Company. Three Areas of Expertise."
        description="Smart Pages Technologies brings together specialized capabilities across technology, industrial packaging, and food and beverage services under one corporate identity."
        image="/images/about-office.jpg"
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            title="Company introduction"
            description="Smart Pages Technologies is a diversified organization structured around three business divisions. Each division focuses on a distinct set of services while remaining part of one parent company."
          />
          <div className="rounded-[1.75rem] bg-surface p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Company overview
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Through Technology, Industries, and Food & Beverages, the company
              aims to address diverse operational and commercial requirements.
              Visitors can explore each division independently while understanding
              how they connect under the Smart Pages Technologies identity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 p-7 sm:p-9">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <StarAccent />
              Mission
            </div>
            <p className="font-display text-2xl font-semibold tracking-tight text-balance">
              [Mission statement placeholder — awaiting approved content]
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              This section will be updated once the official mission statement is
              confirmed by Smart Pages Technologies.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 p-7 sm:p-9">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <StarAccent />
              Vision
            </div>
            <p className="font-display text-2xl font-semibold tracking-tight text-balance">
              [Vision statement placeholder — awaiting approved content]
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              This section will be updated once the official vision statement is
              confirmed by Smart Pages Technologies.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Our business divisions"
            description="Explore the three specialized divisions that make up Smart Pages Technologies."
            className="mb-10"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {divisions.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          title="Why choose us"
          description="Practical strengths that guide how we work with businesses."
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-black/8 p-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-12 aspect-[21/9] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/capabilities.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          Looking for a specific offering?{" "}
          <Link href="/contact" className="font-medium text-accent hover:text-accent-hover">
            Get in touch
          </Link>{" "}
          and we will direct your enquiry to the appropriate division.
        </p>
      </section>

      <CTASection />
    </>
  );
}
