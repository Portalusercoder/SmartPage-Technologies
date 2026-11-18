"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/Button";
import { MegaMenu } from "@/components/MegaMenu";
import { MobileNavigation } from "@/components/MobileNavigation";
import { cx } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const divisionsActive = pathname.startsWith("/divisions") || menuOpen;
  const isHome = pathname === "/";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="mx-auto w-full max-w-[72rem] px-3 pt-2.5 sm:px-5 sm:pt-3 lg:px-6">
          <div
            className={cx(
              "flex h-12 items-center justify-between gap-3 rounded-full bg-white pl-3 pr-2 sm:h-14 sm:pl-4 sm:pr-2.5",
              "shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]",
              "transition-shadow duration-300",
              scrolled && "shadow-[0_12px_40px_rgba(0,0,0,0.16)]",
            )}
          >
            <BrandMark priority className="shrink-0" />

            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Primary"
            >
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cx(
                    "rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors focus-ring",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-foreground/55 hover:text-foreground",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="relative"
                ref={menuRef}
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  id={triggerId}
                  type="button"
                  className={cx(
                    "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors focus-ring",
                    divisionsActive
                      ? "text-foreground"
                      : "text-foreground/55 hover:text-foreground",
                  )}
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                  aria-controls="divisions-menu"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  Our Divisions
                  <ChevronDown
                    className={cx(
                      "h-3.5 w-3.5 transition-transform",
                      menuOpen && "rotate-180",
                    )}
                  />
                </button>
                <MegaMenu
                  open={menuOpen}
                  onNavigate={() => setMenuOpen(false)}
                />
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cx(
                    "rounded-full px-2.5 py-1.5 text-sm font-medium transition-colors focus-ring",
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-foreground/55 hover:text-foreground",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <Button
                href="/contact"
                className="hidden sm:inline-flex !px-4 !py-2 text-[0.8125rem]"
                variant="secondary"
              >
                Get in Touch
              </Button>
              <button
                type="button"
                className="inline-flex rounded-full p-2 text-foreground hover:bg-black/[0.04] focus-ring lg:hidden"
                aria-label="Open navigation menu"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Reserve space under the floating pill on non-home pages */}
      {!isHome ? (
        <div className="h-[4.25rem] sm:h-[4.75rem]" aria-hidden />
      ) : null}

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
