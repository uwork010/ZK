import type { Metadata } from "next";
import AboutOverview from "@/components/company/AboutOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/about");

export default function AboutPage() {
  return <AboutOverview />;
}