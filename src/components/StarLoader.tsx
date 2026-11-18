"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

/** 8-point spark — same silhouette used elsewhere on the site */
const STAR_PATH =
  "M50 0 L61 28 L90 18 L72 42 L100 50 L72 58 L90 82 L61 72 L50 100 L39 72 L10 82 L28 58 L0 50 L28 42 L10 18 L39 28 Z";

type Phase = "boot" | "expand" | "gone";
type Theme = "brand" | "light";

const BOOT_MS = 520;
const EXPAND_MS = 1100;

/** Survives Strict Mode remounts — only flips after a completed first play */
let brandIntroCompleted = false;

/**
 * Top-most route loader.
 * First completed play: red field + white spinning star → cutout expands.
 * Later navigations: white field + red spinning star → cutout expands.
 */
export function StarLoader() {
  const pathname = usePathname();
  const runId = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("boot");
  const [theme, setTheme] = useState<Theme>("brand");
  const [scale, setScale] = useState(0.11);
  const [maskKey, setMaskKey] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      brandIntroCompleted = true;
      return;
    }

    const id = ++runId.current;
    const nextTheme: Theme = brandIntroCompleted ? "light" : "brand";

    let bootTimer: number | undefined;
    let doneTimer: number | undefined;

    const lock = () => {
      document.documentElement.classList.add("star-loader-active");
      document.documentElement.dataset.starLoaderTheme = nextTheme;
      document.body.style.overflow = "hidden";
    };

    const unlock = () => {
      if (runId.current !== id) return;
      document.documentElement.classList.remove("star-loader-active");
      document.documentElement.removeAttribute("data-star-loader-theme");
      document.body.style.overflow = "";
    };

    lock();
    setTheme(nextTheme);
    setMaskKey((key) => key + 1);
    setPhase("boot");
    setScale(0.11);

    bootTimer = window.setTimeout(() => {
      if (runId.current !== id) return;
      setPhase("expand");
      setScale(0.12);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (runId.current !== id) return;
          setScale(24);
        });
      });

      doneTimer = window.setTimeout(() => {
        if (runId.current !== id) return;
        brandIntroCompleted = true;
        setPhase("gone");
        unlock();
      }, EXPAND_MS);
    }, BOOT_MS);

    return () => {
      window.clearTimeout(bootTimer);
      window.clearTimeout(doneTimer);
      // Don't mark brand complete here — Strict Mode aborts mid-play.
      if (runId.current === id) {
        document.documentElement.classList.remove("star-loader-active");
        document.documentElement.removeAttribute("data-star-loader-theme");
        document.body.style.overflow = "";
      }
    };
  }, [pathname]);

  if (!mounted || phase === "gone") return null;

  const showSolidStar = phase === "boot";
  const showCutout = phase === "expand";
  const field = theme === "brand" ? "#ed2525" : "#ffffff";
  const star = theme === "brand" ? "#ffffff" : "#ed2525";
  const maskId = `star-loader-mask-${maskKey}`;

  return createPortal(
    <div
      className="star-loader"
      data-phase={phase}
      data-theme={theme}
      aria-hidden
      aria-busy={phase === "boot"}
    >
      <svg
        className="star-loader__svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="-80"
            y="-80"
            width="260"
            height="260"
          >
            <rect x="-80" y="-80" width="260" height="260" fill="#fff" />
            {showCutout ? (
              <path
                className="star-loader__cutout"
                d={STAR_PATH}
                fill="#000"
                style={{ ["--star-scale" as string]: String(scale) }}
              />
            ) : null}
          </mask>
        </defs>

        <rect
          x="-80"
          y="-80"
          width="260"
          height="260"
          fill={field}
          mask={showCutout ? `url(#${maskId})` : undefined}
        />

        {showSolidStar ? (
          <path className="star-loader__glyph" d={STAR_PATH} fill={star} />
        ) : null}
      </svg>
    </div>,
    document.body,
  );
}
