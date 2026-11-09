"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <div className="divide-y divide-black/8 rounded-[1.75rem] border border-black/8 bg-white">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="px-5 sm:px-6">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-ring rounded-xl"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={cx(
                  "h-4 w-4 shrink-0 text-muted transition-transform",
                  open && "rotate-180",
                )}
              />
            </button>
            <div
              className={cx(
                "grid transition-[grid-template-rows] duration-300",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
