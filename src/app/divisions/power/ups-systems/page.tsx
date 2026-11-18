import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "UPS Systems",
  description:
    "Uninterruptible power systems for IT, security and life-safety loads from Smart Pages Technologies.",
};

export default function UpsSystemsPage() {
  const division = getDivision("power")!;
  const service = getService("power", "ups-systems")!;
  return <ServiceDetail division={division} service={service} />;
}
