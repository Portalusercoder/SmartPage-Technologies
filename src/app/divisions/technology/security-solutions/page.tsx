import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Security Solutions",
  description:
    "Security solutions from Smart Pages Technologies supporting safer business environments.",
};

export default function SecuritySolutionsPage() {
  const division = getDivision("technology")!;
  const service = getService("technology", "security-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
