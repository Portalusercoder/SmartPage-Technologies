import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities, divisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore the capabilities of Smart Pages Technologies across technology, industries, and food and beverages.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
        eyebrow="Our Work"
        title="Expertise in Action."
        description="A capabilities-focused overview of how Smart Pages Technologies supports businesses. Project case studies will be published when approved materials are available."
        image="/images/capabilities.jpg"
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title="Capabilities showcase"
          description="Rather than inventing case studies, this page highlights confirmed areas of expertise across our three divisions."
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 0 ? "md:col-span-2 min-h-[360px]" : "min-h-[280px]"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/70 sm:text-base">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Explore
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="By division"
            description="Browse services through each specialized business area."
            className="mb-10"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {divisions.map((division) => (
              <div
                key={division.id}
                className="rounded-[1.75rem] bg-white p-6 sm:p-7"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {division.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {division.shortDescription}
                </p>
                <ul className="mt-5 space-y-2">
                  {division.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="text-sm font-medium text-foreground/80 hover:text-accent focus-ring rounded"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={division.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  Explore {division.name}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a project in mind?"
        description="Share your requirements and we will connect you with the appropriate Smart Pages Technologies division."
      />
    </>
  );
}
