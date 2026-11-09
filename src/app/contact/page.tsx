import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Smart Pages Technologies. Share your requirements and we will direct your enquiry to the appropriate division.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        eyebrow="Contact"
        title="Let's Talk About Your Requirements."
        description="Share a few details about your enquiry and our team will route it to the right division."
      />

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <aside className="space-y-8">
          <div className="rounded-[1.75rem] bg-surface p-7">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Contact information
            </h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-foreground hover:text-accent focus-ring rounded"
                  >
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="font-medium text-foreground hover:text-accent focus-ring rounded"
                  >
                    {site.contact.phone}
                  </a>
                  <span className="mt-1 block text-muted">
                    Alt: {site.contact.phoneAlt}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Office address
                </dt>
                <dd className="mt-1 space-y-0.5 text-foreground/80">
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-black/8">
            <iframe
              title="Smart Pages Technologies office location"
              src={site.contact.mapEmbedUrl}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

        <div className="rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Enquiry form
          </h2>
          <p className="mt-2 text-sm text-muted">
            Required fields are marked with an asterisk.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
