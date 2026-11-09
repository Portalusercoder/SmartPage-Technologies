"use client";

import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  /** Full loop duration in seconds — longer = barely noticeable */
  durationSec?: number;
  className?: string;
};

/**
 * Static ribbed plate. Only a huge blurry spotlight field moves —
 * all positions are sin/cos of a 0→2π phase for a perfect seamless loop.
 */
export function LiquidHeroBackground({
  src = "/images/hero-ribbed.jpg",
  durationSec = 96,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let running = true;
    let start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const glow = (
      x: number,
      y: number,
      radius: number,
      stops: Array<[number, string]>,
    ) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      for (const [t, c] of stops) g.addColorStop(t, c);
      ctx.fillStyle = g;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    };

    const paint = (phase: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w < 1 || h < 1) return;

      ctx.clearRect(0, 0, w, h);

      // Giant primary spotlight — slow liquid drift
      const x1 = w * (0.55 + Math.sin(phase) * 0.28);
      const y1 = h * (0.3 + Math.cos(phase) * 0.22);
      const r1 = Math.max(w, h) * (0.85 + Math.sin(phase * 2) * 0.08);
      glow(x1, y1, r1, [
        [0, "rgba(255, 120, 70, 0.95)"],
        [0.22, "rgba(255, 50, 40, 0.55)"],
        [0.5, "rgba(200, 20, 30, 0.22)"],
        [1, "rgba(0, 0, 0, 0)"],
      ]);

      // Secondary ember — opposite phase
      const x2 = w * (0.25 + Math.cos(phase * 0.9) * 0.24);
      const y2 = h * (0.7 + Math.sin(phase * 0.9) * 0.2);
      const r2 = Math.max(w, h) * (0.65 + Math.cos(phase * 2) * 0.07);
      glow(x2, y2, r2, [
        [0, "rgba(255, 160, 100, 0.55)"],
        [0.35, "rgba(220, 40, 40, 0.25)"],
        [1, "rgba(0, 0, 0, 0)"],
      ]);

      // Hot edge kiss near top-right
      const x3 = w * (0.82 + Math.sin(phase * 1.25 + 0.8) * 0.12);
      const y3 = h * (0.15 + Math.cos(phase * 1.25 + 0.8) * 0.1);
      glow(x3, y3, Math.max(w, h) * 0.4, [
        [0, "rgba(255, 200, 160, 0.45)"],
        [0.4, "rgba(255, 80, 50, 0.15)"],
        [1, "rgba(0, 0, 0, 0)"],
      ]);
    };

    const tick = (now: number) => {
      if (!running) return;
      const t = ((now - start) / (durationSec * 1000)) % 1;
      paint(t * Math.PI * 2);
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      const t = ((performance.now() - start) / (durationSec * 1000)) % 1;
      paint(reduceMotion ? 0 : t * Math.PI * 2);
    };

    resize();
    if (reduceMotion) {
      paint(0);
    } else {
      start = performance.now();
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [durationSec]);

  return (
    <div className={className} aria-hidden>
      <div
        className="absolute inset-0 scale-105 bg-[#120303] bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-[-12%] h-[124%] w-[124%]"
        style={{
          filter: "blur(90px) saturate(1.15)",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}
