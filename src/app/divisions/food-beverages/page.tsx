import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getDivision, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Food & Beverages",
  description:
    "Discover the Smart Pages Technologies cafeteria and food and beverage offering.",
};

export default function FoodBeveragesPage() {
  const division = getDivision("food-beverages")!;
  const cafeteria = division.services[0];

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Divisions", href: "/#divisions" },
          { label: division.name },
        ]}
        eyebrow="Division"
        title={division.heroHeading}
        description={division.heroDescription}
        image={division.image}
        primaryCta={{ label: "Explore Cafeteria", href: cafeteria.href }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Cafeteria introduction"
            description={cafeteria.overview}
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={cafeteria.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-7 sm:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Service information
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {cafeteria.summary}
            </p>
            <ul className="mt-6 space-y-3">
              {cafeteria.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={cafeteria.href}>View Cafeteria Details</Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-7 sm:p-10">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Location & hours
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Opening hours and on-site cafeteria location details will be
              published once confirmed.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p>
                <span className="font-medium text-foreground">Address:</span>{" "}
                {site.contact.addressLines.join(", ")}
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                {site.contact.phone}
              </p>
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                {site.contact.email}
              </p>
              <p className="text-muted">
                Hours: [Placeholder — awaiting confirmed opening hours]
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions about our cafeteria?"
        description="Contact Smart Pages Technologies for food and beverage service information."
      />
    </>
  );
}
