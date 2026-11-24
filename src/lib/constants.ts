import type { Project } from "@/types";

export const agencyServiceGroups = [
  {
    name: "Digital Products",
    services: [
      { title: "Web Development", slug: "web-development" },
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "MVP & Product Development", slug: "mvp-product-development" },
      { title: "Custom Software", slug: "custom-software" },
    ],
  },
  {
    name: "Intelligent Systems",
    services: [
      { title: "AI & Automation", slug: "ai-automation" },
      { title: "Game Development", slug: "game-development" },
      { title: "Quality Assurance", slug: "quality-assurance" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
  },
  {
    name: "Creative & Continuity",
    services: [
      { title: "UI/UX Design", slug: "ui-ux-design" },
      { title: "Graphic Design & Branding", slug: "graphic-design-branding" },
      { title: "3D / Video / Creative", slug: "3d-video-creative" },
      { title: "Maintenance & Support", slug: "maintenance-support" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "connected-product-experience",
    title: "Connected Product Experience",
    description:
      "SAMPLE / DEMO CONCEPT — An illustrative product direction combining a mobile experience, shared workflows, and a supporting web interface. No client engagement or performance results are represented.",
    technologies: ["Web Development", "Mobile App Development", "UI/UX Design"],
  },
  {
    id: "ai-workflow-studio",
    title: "AI Workflow Studio",
    description:
      "SAMPLE / DEMO CONCEPT — A hypothetical workspace exploring how AI-assisted steps, review controls, and clear workflow states could fit together. This is concept copy, not a shipped system or measured result.",
    technologies: ["AI & Automation", "Custom Software", "Quality Assurance"],
  },
  {
    id: "interactive-game-world",
    title: "Interactive Game World",
    description:
      "SAMPLE / DEMO CONCEPT — An exploratory game and creative-technology direction for an interactive digital environment. No production scope, audience, or commercial outcome is implied.",
    technologies: ["Game Development", "3D / Video / Creative", "Custom Software"],
  },
  {
    id: "cloud-product-platform",
    title: "Cloud Product Platform",
    description:
      "SAMPLE / DEMO CONCEPT — A platform sketch connecting product interfaces, cloud foundations, and operational tooling. It is illustrative concept content, not a customer case study or a claim of delivered results.",
    technologies: ["Cloud & DevOps", "Web Development", "Maintenance & Support"],
  },
];
