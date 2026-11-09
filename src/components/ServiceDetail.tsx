import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import type { Division, Service } from "@/data/site";

type Props = {
  division: Division;
  service: Service;
  faqs?: Array<{ question: string; answer: string }>;
};

export function ServiceDetail({ division, service, faqs = [] }: Props) {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: division.name, href: division.href },
          { label: service.name },
        ]}
        eyebrow={division.name}
        title={service.name}
        description={service.summary}
        image={service.image}
        primaryCta={{ label: "Enquire About This Service", href: "/contact" }}
        secondaryCta={{ label: `Back to ${division.name}`, href: division.href }}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Service overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {service.overview}
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-surface p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Capabilities and offerings
            </h3>
            <ul className="mt-5 space-y-3">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="container-page grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Applications and business requirements addressed
            </h2>
            <ul className="mt-6 space-y-4">
              {service.applications.map((item) => (
                <li key={item} className="border-l border-accent pl-4 text-white/75">
                  {item}
                </li>
              ))}
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

      {faqs.length > 0 ? (
        <section className="container-page py-16 sm:py-20">
          <h2 className="font-display mb-8 text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion items={faqs} />
        </section>
      ) : null}

      <CTASection
        heading={`Discuss ${service.name}`}
        description={`Share your requirements and we will connect you with the ${division.name} team.`}
      />
    </>
  );
}
