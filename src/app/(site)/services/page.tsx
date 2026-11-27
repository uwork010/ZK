import type { Metadata } from "next";
import ServicesOverview from "@/components/company/ServicesOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/services");

export default function ServicesPage() {
  return <ServicesOverview />;
}