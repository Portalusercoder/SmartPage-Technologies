import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getDivision, getService, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cafeteria",
  description:
    "Smart Pages Technologies cafeteria — food and beverage services for everyday needs.",
};

export default function CafeteriaPage() {
  const division = getDivision("food-beverages")!;
  const service = getService("food-beverages", "cafeteria")!;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: division.name, href: division.href },
          { label: service.name },
        ]}
        eyebrow="Food & Beverages"
        title={service.name}
        description={service.summary}
        image={service.image}
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
        secondaryCta={{ label: "Back to Division", href: division.href }}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            title="Service overview"
            description={service.overview}
          />
          <div className="rounded-[1.75rem] bg-surface p-7">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              What to expect
            </h3>
            <ul className="mt-5 space-y-3">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Menu categories
            </h2>
            <p className="mt-4 text-white/65">
              Detailed menu categories and offerings will be published once
              supplied. This page does not include online ordering.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>· Hot meals [placeholder]</li>
              <li>· Beverages [placeholder]</li>
              <li>· Light refreshments [placeholder]</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title="Location, hours, and contact"
          description="Visit or enquire about the Smart Pages Technologies cafeteria."
          className="mb-8"
        />
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.5rem] border border-black/8 p-6">
            <h3 className="font-display text-lg font-semibold">Location</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.contact.addressLines.join(", ")}
              <span className="mt-2 block">
                [Cafeteria suite / floor placeholder]
              </span>
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 p-6">
            <h3 className="font-display text-lg font-semibold">Opening hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              [Placeholder — awaiting confirmed opening hours]
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 p-6">
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {site.contact.phone}
              <br />
              {site.contact.email}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Plan a visit or ask a question"
        description="Contact Smart Pages Technologies for cafeteria-related enquiries."
      />
    </>
  );
}
