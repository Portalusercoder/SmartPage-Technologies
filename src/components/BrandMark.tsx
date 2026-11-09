import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/utils";

type Props = {
  className?: string;
  priority?: boolean;
  showWordmark?: boolean;
  tone?: "light" | "dark";
};

export function BrandMark({
  className,
  priority,
  showWordmark = true,
  tone = "light",
}: Props) {
  return (
    <Link
      href="/"
      className={cx(
        "group inline-flex items-center gap-2.5 focus-ring rounded-full",
        className,
      )}
      aria-label="Smart Pages Technologies home"
    >
      <Image
        src="/brand/mark.png"
        alt=""
        width={40}
        height={40}
        priority={priority}
        className="h-9 w-9 object-contain"
      />
      {showWordmark ? (
        <span
          className={cx(
            "font-display text-[0.95rem] font-semibold tracking-tight leading-none sm:text-[1.05rem]",
            tone === "dark" ? "text-white" : "text-foreground",
          )}
        >
          Smart Pages
          <span
            className={cx(
              "block text-[0.68rem] font-medium tracking-[0.04em]",
              tone === "dark" ? "text-white/55" : "text-muted",
            )}
          >
            Technologies
          </span>
        </span>
      ) : null}
    </Link>
  );
}
