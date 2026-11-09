import { cx } from "@/lib/utils";

export function StarAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cx("inline-block h-4 w-4 text-accent", className)}
      fill="currentColor"
    >
      <path d="M12 1.5 13.8 9.2 21.5 11 13.8 12.8 12 20.5 10.2 12.8 2.5 11 10.2 9.2 12 1.5Z" />
    </svg>
  );
}
