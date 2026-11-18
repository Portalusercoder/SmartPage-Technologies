import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: Props) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2
        className={cx(
          "font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/65" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
