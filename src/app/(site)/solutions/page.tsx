import type { Metadata } from "next";
import SolutionsOverview from "@/components/company/SolutionsOverview";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/solutions"),
  title: "Solutions",
  description: "Explore startup, SaaS, automation, transformation, commerce, and enterprise software solutions.",
};

export default function SolutionsPage() { return <SolutionsOverview />; }