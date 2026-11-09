import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs, type Division } from "@/data/site";

export function DivisionLanding({ division }: { division: Division }) {
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
        primaryCta={{ label: "View Services", href: "#services" }}
        secondaryCta={{ label: "Enquire", href: "/contact" }}
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Introduction"
          title={`${division.name} at Smart Pages Technologies`}
          description={division.description}
        />
      </section>

      <section id="services" className="bg-surface py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Services in this division"
            description="Explore the offerings available within this division."
            className="mb-10"
          />
          <div className="space-y-6">
            {division.services.map((service, index) => (
              <article
                key={service.id}
                className="grid overflow-hidden rounded-[2rem] bg-white lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/11] lg:aspect-auto ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Service 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {service.overview}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.capabilities.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        · {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={service.href} variant="secondary">
                      Explore {service.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          title={`Why choose our ${division.name.toLowerCase()} division`}
          description="A focused offering shaped around practical business requirements."
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
        <p className="mt-8 text-sm text-muted">
          Industries served and additional capability details will be published
          once confirmed.{" "}
          <Link href="/contact" className="font-medium text-accent hover:text-accent-hover">
            Contact us
          </Link>{" "}
          to discuss your requirements.
        </p>
      </section>

      <CTASection
        heading={`Talk to our ${division.name} team`}
        description="Tell us what you need and we will route your enquiry to the right specialists."
      />
    </>
  );
}
