import { ViewTransition } from "react";

/** Remounts on navigation — enables liquid View Transition enter/exit. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="liquid-enter" exit="liquid-exit" default="none">
      {children}
    </ViewTransition>
  );
}
