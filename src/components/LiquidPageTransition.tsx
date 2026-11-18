"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Phase = "idle" | "in" | "hold" | "out";

/**
 * Liquid brand curtain that plays on App Router navigations.
 * Renders under the fixed header (z-50) so chrome stays anchored.
 */
export function LiquidPageTransition() {
  const pathname = usePathname();
  const first = useRef(true);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setPhase("in");
    const hold = window.setTimeout(() => setPhase("hold"), 380);
    const out = window.setTimeout(() => setPhase("out"), 480);
    const done = window.setTimeout(() => setPhase("idle"), 980);

    return () => {
      window.clearTimeout(hold);
      window.clearTimeout(out);
      window.clearTimeout(done);
    };
  }, [pathname]);

  if (phase === "idle") return null;

  return (
    <div
      className="liquid-page-transition"
      data-phase={phase}
      aria-hidden
    >
      <div className="liquid-page-transition__wash kinetic-glow" />
      <div className="liquid-page-transition__streaks kinetic-streaks" />
      <svg
        className="liquid-page-transition__wave"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="rgba(237,37,37,0.55)"
          d="M0,160 C240,240 480,40 720,120 C960,200 1200,280 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
