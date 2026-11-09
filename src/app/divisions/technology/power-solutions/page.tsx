import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Power Solutions",
  description:
    "Power solutions from Smart Pages Technologies supporting continuity and operational readiness.",
};

export default function PowerSolutionsPage() {
  const division = getDivision("technology")!;
  const service = getService("technology", "power-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
