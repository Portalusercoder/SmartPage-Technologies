import { Button } from "@/components/Button";
import { StarAccent } from "@/components/StarAccent";

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
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 kinetic-glow opacity-80" aria-hidden />
      <div className="absolute inset-0 kinetic-streaks opacity-70" aria-hidden />
      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            <StarAccent className="h-3.5 w-3.5" />
            Next step
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <Button href={ctaHref} variant="light">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
