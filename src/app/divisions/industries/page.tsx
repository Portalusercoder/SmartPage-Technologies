import type { Metadata } from "next";
import { DivisionLanding } from "@/components/DivisionLanding";
import { getDivision } from "@/data/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Discover Smart Pages Technologies industrial capabilities across co-packing, corrugated boxes, and wrapping solutions.",
};

export default function IndustriesPage() {
  const division = getDivision("industries")!;
  return <DivisionLanding division={division} />;
}
