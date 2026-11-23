import type { Metadata } from "next";
import WorkOverview from "@/components/work/WorkOverview";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/work"),
  title: "Selected Work",
  description: "Explore CORE & CRAFT digital products, software, AI, e-commerce, mobile and 3D creative projects.",
};

export default function WorkPage() {
  return <WorkOverview />;
}