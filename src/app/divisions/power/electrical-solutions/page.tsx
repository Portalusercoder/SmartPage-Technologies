import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Electrical Solutions",
  description:
    "Internal and external electrical works — power, lighting and panel boards from Smart Pages Technologies.",
};

export default function ElectricalSolutionsPage() {
  const division = getDivision("power")!;
  const service = getService("power", "electrical-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
