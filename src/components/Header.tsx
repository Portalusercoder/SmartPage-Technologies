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
  const overDarkHero = pathname === "/" && !scrolled;
  const linkIdle = overDarkHero
    ? "text-white/65 hover:text-white"
    : "text-muted hover:text-foreground";
  const linkActive = overDarkHero ? "text-white" : "text-foreground";

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-black/6 bg-white/90 backdrop-blur-xl"
            : overDarkHero
              ? "border-b border-transparent bg-transparent"
              : "bg-white/70 backdrop-blur-md",
        )}
      >
        <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-4">
          <BrandMark priority tone={overDarkHero ? "dark" : "light"} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-ring",
                  isActive(link.href) ? linkActive : linkIdle,
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
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-ring",
                  divisionsActive ? linkActive : linkIdle,
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
              <MegaMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-ring",
                  isActive(link.href) ? linkActive : linkIdle,
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/contact"
              className="hidden sm:inline-flex"
              variant={overDarkHero ? "light" : "primary"}
            >
              Get in Touch
            </Button>
            <button
              type="button"
              className={cx(
                "inline-flex rounded-full p-2.5 focus-ring lg:hidden",
                overDarkHero
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-surface",
              )}
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
