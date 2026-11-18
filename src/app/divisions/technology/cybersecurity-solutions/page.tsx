import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions",
  description:
    "Cybersecurity solutions from Smart Pages Technologies protecting people, networks, devices and data.",
};

export default function CybersecuritySolutionsPage() {
  const division = getDivision("technology")!;
  const service = getService("technology", "cybersecurity-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
