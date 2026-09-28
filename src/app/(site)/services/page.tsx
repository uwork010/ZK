import type { Metadata } from "next";
import ServicesOverview from "@/components/company/ServicesOverview";

export const metadata: Metadata = {
  title: "Our Services",
  description: "From software engineering and AI to design, games, cloud, and creative production, we help businesses take ideas from concept to launch and scale.",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}