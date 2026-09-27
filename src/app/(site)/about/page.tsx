import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";

export const metadata: Metadata = { title: "About", description: "Company overview and technology approach." };

export default function AboutPage() {
  return <CompanyInfoPage
    eyebrow="About"
    title="Technology, shaped around the problem."
    intro="Digital products, software, AI, and creative work can begin in different places. The aim is to bring the right disciplines together around the problem and carry a clear idea toward launch."
    sections={[
      { title: "Technology", body: "Web and mobile development, custom software, AI and automation, cloud foundations, quality assurance, and ongoing support." },
      { title: "Creative", body: "Product experience, UI/UX, graphic design, branding, game development, 3D, and video directions." },
      { title: "From idea to launch", body: "A project can begin with an early concept or a defined technical need. Scope, team, and delivery approach are set around the work rather than assumed in advance." },
    ]}
  />;
}