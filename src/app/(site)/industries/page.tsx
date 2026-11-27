import type { Metadata } from "next";
import IndustriesOverview from "@/components/company/IndustriesOverview";
import { pageMetadata } from "@/lib/page-seo";

export const metadata: Metadata = pageMetadata("/industries");

export default function IndustriesPage() { return <IndustriesOverview />; }