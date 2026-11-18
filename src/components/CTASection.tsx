import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

/** 8-point spark — same silhouette as the site loader */
const STAR_PATH =
  "M50 0 L61 28 L90 18 L72 42 L100 50 L72 58 L90 82 L61 72 L50 100 L39 72 L10 82 L28 58 L0 50 L28 42 L10 18 L39 28 Z";

type Props = {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTASection({
  heading = "Let's Build Something Together.",
  description = "Have a requirement or looking for the right solution? Connect with Smart Pages Technologies and let us direct your enquiry to the appropriate division.",
  ctaLabel = "Get in Touch",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="cta-finale relative overflow-hidden bg-accent text-white">
      {/* Smaller star — half in / half out on the right edge, 360° / 15s */}
      <div
        className="cta-finale__star pointer-events-none absolute top-1/2 right-0 z-0 translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <svg
          viewBox="0 0 100 100"
          className="cta-finale__star-glyph h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52"
          fill="none"
        >
          <path d={STAR_PATH} fill="#ffffff" />
        </svg>
      </div>

      <div className="container-page relative z-10 py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <Button href={ctaHref} variant="light">
              {ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
