import type { Metadata } from "next";
import { CompanyInfoPage } from "@/components/company/CompanyPages";

export const metadata: Metadata = { title: "About", description: "Company overview and technology approach." };

export default function AboutPage() {
  return <CompanyInfoPage
    eyebrow="About"
    title="Technology, shaped around the problem."
    intro="This company profile is a starting point for the organization’s story. Add verified details about the team, purpose, and operating principles here."
    sections={[
      { title: "Company profile", body: "Replace this section with an approved company introduction, including its purpose, history, and the people behind the work." },
      { title: "How we work", body: "Describe the company’s actual collaboration model, decision-making practices, and delivery approach once those details are confirmed." },
      { title: "What we build", body: "Use this space to summarize the company’s verified capabilities and the kinds of technology challenges it chooses to take on." },
    ]}
  />;
}