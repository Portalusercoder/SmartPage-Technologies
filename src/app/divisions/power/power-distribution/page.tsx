import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Power Distribution",
  description:
    "LV switchgear, distribution boards and cabling from Smart Pages Technologies.",
};

export default function PowerDistributionPage() {
  const division = getDivision("power")!;
  const service = getService("power", "power-distribution")!;
  return <ServiceDetail division={division} service={service} />;
}
