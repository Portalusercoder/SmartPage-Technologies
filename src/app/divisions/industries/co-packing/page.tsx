import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Co-packing",
  description:
    "Co-packing support from Smart Pages Technologies for product preparation and packaging needs.",
};

export default function CoPackingPage() {
  const division = getDivision("industries")!;
  const service = getService("industries", "co-packing")!;
  return <ServiceDetail division={division} service={service} />;
}
