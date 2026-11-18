"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Auto-applies scroll reveals to every `main section` (and `[data-reveal]`)
 * after each route change. First section on a page reveals eagerly.
 */
export function SectionMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector("main");
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("section, [data-reveal]"),
    );

    if (reduce) {
      targets.forEach((el) => {
        el.classList.add("section-reveal");
        el.dataset.revealed = "true";
      });
      return;
    }

    // Force a style flush so the hidden state can transition in.
    targets.forEach((el, index) => {
      el.classList.add("section-reveal");
      if (index === 0) {
        el.dataset.revealed = "true";
        return;
      }
      el.dataset.revealed = "false";
    });

    void root.offsetHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.dataset.revealed = "true";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el, index) => {
      if (index === 0) return;
      // Already in view (short pages / deep links) — reveal immediately.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.dataset.revealed = "true";
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
