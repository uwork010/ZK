import type { Metadata } from "next";
import { CollectionPage } from "@/components/company/CompanyPages";
import { serviceEntries } from "@/lib/company-content";

export const metadata: Metadata = { title: "Services", description: "Explore technology services across product engineering, data and AI, and cloud platforms." };

export default function ServicesPage() {
  return <CollectionPage title="Technology services" eyebrow="What we do" description="Explore flexible service areas for planning, building, and evolving digital products and platforms." basePath="/services" entries={serviceEntries} atmosphere="services" />;
}