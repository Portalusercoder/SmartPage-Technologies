import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { divisions, site } from "@/data/site";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-black/6 bg-[#0a0a0a] text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <BrandMark tone="dark" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Smart Pages Technologies brings together specialized capabilities
              across technology, industrial packaging, and food and beverage
              services under one corporate identity.
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.social).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs capitalize text-white/70 transition-colors hover:border-white/35 hover:text-white focus-ring"
                  aria-label={`${name} (placeholder)`}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {divisions.map((division) => (
            <div key={division.id}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                {division.name}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={division.href}
                    className="text-sm text-white/70 transition-colors hover:text-white focus-ring rounded"
                  >
                    Overview
                  </Link>
                </li>
                {division.services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      className="text-sm text-white/70 transition-colors hover:text-white focus-ring rounded"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-[1.4fr_1fr] sm:items-end">
          <div className="text-sm text-white/55">
            <p>{site.contact.addressLines.join(", ")}</p>
            <p className="mt-1">
              <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white focus-ring rounded">
                {site.contact.phone}
              </a>
              {" · "}
              <a href={`mailto:${site.contact.email}`} className="hover:text-white focus-ring rounded">
                {site.contact.email}
              </a>
            </p>
          </div>
          <p className="text-sm text-white/45 sm:text-right">
            © {year} Smart Pages Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
