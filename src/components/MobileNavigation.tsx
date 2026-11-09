"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";
import { divisions } from "@/data/site";
import { cx } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: Props) {
  const pathname = usePathname();
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button
        type="button"
        className="absolute inset-0 bg-black/45"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl animate-menu-in">
        <div className="flex items-center justify-between border-b border-black/6 px-5 py-4">
          <BrandMark />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-surface focus-ring"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {links.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cx(
                    "block rounded-2xl px-4 py-3 text-base font-medium transition-colors focus-ring",
                    pathname === link.href
                      ? "bg-surface text-foreground"
                      : "text-foreground/80 hover:bg-surface",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium text-foreground/80 hover:bg-surface focus-ring"
                aria-expanded={divisionsOpen}
                onClick={() => setDivisionsOpen((v) => !v)}
              >
                Our Divisions
                <ChevronDown
                  className={cx(
                    "h-4 w-4 transition-transform",
                    divisionsOpen && "rotate-180",
                  )}
                />
              </button>
              {divisionsOpen ? (
                <div className="mt-1 space-y-4 rounded-2xl bg-surface px-4 py-4">
                  {divisions.map((division) => (
                    <div key={division.id}>
                      <Link
                        href={division.href}
                        onClick={onClose}
                        className="mb-2 block text-sm font-semibold text-foreground focus-ring rounded"
                      >
                        {division.name}
                      </Link>
                      <ul className="space-y-1 border-l border-black/10 pl-3">
                        {division.services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              onClick={onClose}
                              className="block py-1.5 text-sm text-muted hover:text-foreground focus-ring rounded"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : null}
            </li>

            {links.slice(2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cx(
                    "block rounded-2xl px-4 py-3 text-base font-medium transition-colors focus-ring",
                    pathname === link.href
                      ? "bg-surface text-foreground"
                      : "text-foreground/80 hover:bg-surface",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-black/6 p-5">
          <Button href="/contact" className="w-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
