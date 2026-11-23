import type { Metadata } from "next";
import AboutOverview from "@/components/company/AboutOverview";
import { canonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...canonicalMetadata("/about"),
  title: "About",
  description: "Meet CORE & CRAFT, explore our philosophy and approach, and see the capabilities we bring together.",
};

export default function AboutPage() {
  return <AboutOverview />;
}