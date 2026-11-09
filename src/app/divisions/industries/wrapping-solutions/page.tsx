import type { Metadata } from "next";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getDivision, getService } from "@/data/site";

export const metadata: Metadata = {
  title: "Wrapping Solutions",
  description:
    "Wrapping solutions from Smart Pages Technologies for protecting and preparing goods.",
};

export default function WrappingSolutionsPage() {
  const division = getDivision("industries")!;
  const service = getService("industries", "wrapping-solutions")!;
  return <ServiceDetail division={division} service={service} />;
}
