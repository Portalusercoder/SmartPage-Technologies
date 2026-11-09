import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Smart Pages Technologies.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page outlines how Smart Pages Technologies handles information collected through this website."
      />

      <section className="container-page max-w-3xl space-y-10 pb-20 text-base leading-relaxed text-muted">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Overview
          </h2>
          <p className="mt-3">
            Smart Pages Technologies respects the privacy of visitors and
            enquirers. This policy explains what information may be collected
            through the website and how it may be used. Additional legal detail
            can be added once a formal policy is approved.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Information we may collect
          </h2>
          <p className="mt-3">
            When you submit an enquiry form, we may collect your name, company
            name, email address, phone number, selected division and service,
            subject, and message content.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            How information is used
          </h2>
          <p className="mt-3">
            Enquiry information is used to respond to your request and route it
            to the appropriate Smart Pages Technologies division. We do not sell
            personal information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <p className="mt-3">
            For privacy-related questions, contact{" "}
            <a
              href={`mailto:${site.contact.email}`}
              className="font-medium text-accent hover:text-accent-hover"
            >
              {site.contact.email}
            </a>
            .
          </p>
        </div>

        <p className="text-sm">
          [Placeholder] This policy may be updated as company processes and legal
          requirements are finalized.
        </p>
      </section>
    </>
  );
}
