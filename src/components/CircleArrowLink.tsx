import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cx } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  /** brand = red on light cards; light = white on red cards */
  tone?: "brand" | "light";
  className?: string;
};

export function CircleArrowLink({
  href,
  label,
  tone = "brand",
  className,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cx(
        "circle-arrow inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 focus-ring",
        tone === "brand"
          ? "bg-accent text-white"
          : "bg-white text-foreground",
        className,
      )}
    >
      <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
    </Link>
  );
}
