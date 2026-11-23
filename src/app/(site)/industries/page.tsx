import type { Metadata } from "next";
import IndustriesOverview from "@/components/company/IndustriesOverview";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/industries"),
  title: "Industries",
  description: "Explore technology solutions for startups, commerce, healthcare, education, finance, real estate, logistics, gaming, and professional services.",
};

export default function IndustriesPage() { return <IndustriesOverview />; }