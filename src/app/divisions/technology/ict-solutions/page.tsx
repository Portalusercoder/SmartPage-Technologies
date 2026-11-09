import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "ICT Solutions",
  description:
    "ICT solutions from Smart Pages Technologies supporting connectivity, systems, and operational technology needs.",
};

export default function IctSolutionsPage() {
  const division = getDivision("technology")!;
  const service = getService("technology", "ict-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
