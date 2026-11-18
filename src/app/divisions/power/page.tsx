import type { Metadata } from "next";
import { DivisionLanding } from "@/components/DivisionLanding";
import { getDivision } from "@/data/site";

export const metadata: Metadata = {
  title: "Power",
  description:
    "Electrical works, power distribution, UPS and backup power solutions from Smart Pages Technologies.",
};

export default function PowerPage() {
  const division = getDivision("power")!;
  return <DivisionLanding division={division} />;
}
