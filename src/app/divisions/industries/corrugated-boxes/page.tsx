import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Corrugated Boxes",
  description:
    "Corrugated box solutions from Smart Pages Technologies for shipping, storage, and product protection.",
};

export default function CorrugatedBoxesPage() {
  const division = getDivision("industries")!;
  const service = getService("industries", "corrugated-boxes")!;
  return <ServiceDetail division={division} service={service} />;
}
