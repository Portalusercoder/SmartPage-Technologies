import type { Metadata } from "next";
import { DivisionLanding } from "@/components/DivisionLanding";
import { getDivision } from "@/data/site";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Smart Pages Technologies capabilities across ICT infrastructure, security systems, and power solutions.",
};

export default function TechnologyPage() {
  const division = getDivision("technology")!;
  return <DivisionLanding division={division} />;
}
