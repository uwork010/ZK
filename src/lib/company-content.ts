import { agencyServiceGroups, projects } from "@/lib/constants";

export interface CompanyEntry {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  focusAreas: string[];
  sample?: boolean;
}

const serviceDetails: Record<string, Omit<CompanyEntry, "slug" | "title" | "eyebrow">> = {
  "web-development": { summary: "Websites and web applications shaped around the intended audience and use case.", description: "A web engagement can range from a focused site to an application with tailored workflows. The experience, architecture, and delivery scope should follow the project requirements.", focusAreas: ["Websites", "Web applications", "Frontend systems"] },
  "mobile-app-development": { summary: "Mobile product experiences for the platforms and workflows a project requires.", description: "Mobile work may include product definition, interface design, implementation, and release preparation. Platform choices and scope are determined with the project team.", focusAreas: ["iOS and Android concepts", "Cross-platform apps", "Mobile product design"] },
  "mvp-product-development": { summary: "Shape an early product into a focused, testable digital experience.", description: "MVP and product work begins by clarifying the core use case and identifying the smallest useful scope. This is a service direction, not a claim of past delivery outcomes.", focusAreas: ["Product discovery", "Prototype definition", "First-release planning"] },
  "custom-software": { summary: "Software designed for needs that off-the-shelf tools do not address.", description: "Custom software engagements can connect interfaces, business rules, and integrations around a specific workflow. Architecture and implementation are scoped to the actual requirements.", focusAreas: ["Workflow applications", "API integrations", "Internal tools"] },
  "ai-automation": { summary: "AI-enabled features and automation grounded in clear, reviewable workflows.", description: "AI and automation work starts with a concrete task, appropriate data boundaries, and a human review model. Technical choices depend on the use case and risk profile.", focusAreas: ["AI product features", "Workflow automation", "Human review controls"] },
  "game-development": { summary: "Interactive game experiences across mechanics, systems, and presentation.", description: "Game development can bring together gameplay systems, technical implementation, and visual direction. Platform, scope, and production approach depend on the concept.", focusAreas: ["Interactive prototypes", "Game systems", "Real-time experiences"] },
  "quality-assurance": { summary: "Quality practices that make software behavior easier to verify and maintain.", description: "Quality assurance can include test planning, automation, exploratory testing, and release checks. Coverage and acceptance criteria should reflect product risks and team context.", focusAreas: ["Test strategy", "Automated testing", "Release confidence"] },
  "cloud-devops": { summary: "Cloud foundations and delivery workflows for modern software products.", description: "Cloud and DevOps work may address infrastructure, deployment automation, and operational visibility. Recommendations should fit the existing environment and team capabilities.", focusAreas: ["Cloud architecture", "CI/CD workflows", "Observability"] },
  "ui-ux-design": { summary: "Research-informed interface and experience design for digital products.", description: "UI/UX design connects user needs, information structure, interaction patterns, and visual systems. The process is shaped to the project’s audience and constraints.", focusAreas: ["Experience flows", "Interface systems", "Prototyping"] },
  "graphic-design-branding": { summary: "Visual identity and graphic design for products, campaigns, and digital touchpoints.", description: "Graphic design and branding can establish a coherent visual language across a product or communication system. Identity work should be grounded in the organization’s real positioning.", focusAreas: ["Visual identity", "Digital assets", "Brand applications"] },
  "3d-video-creative": { summary: "3D, motion, and video work for expressive digital experiences.", description: "Creative production can combine 3D, animation, video, and interactive elements. Medium and production scope depend on the intended experience and delivery context.", focusAreas: ["3D content", "Motion design", "Video and interactive media"] },
  "maintenance-support": { summary: "Ongoing software care shaped around a product’s operational needs.", description: "Maintenance and support may include updates, issue resolution, and incremental improvement. Service expectations and response arrangements must be agreed for each engagement.", focusAreas: ["Maintenance planning", "Technical updates", "Ongoing improvements"] },
};

export const serviceEntries: CompanyEntry[] = agencyServiceGroups.flatMap((group) =>
  group.services.map(({ slug, title }) => ({
    slug,
    title,
    eyebrow: `Services / ${group.name}`,
    ...serviceDetails[slug],
  })),
);

export const solutionEntries: CompanyEntry[] = [
  {
    slug: "digital-products",
    title: "Digital Products",
    eyebrow: "Solutions / Digital products",
    summary: "Create connected web and mobile experiences for customers and teams.",
    description: "A digital product brings interface, application logic, and supporting services together around a defined need. This solution area is a starting point for shaping the right scope and delivery model.",
    focusAreas: ["Customer-facing applications", "Internal tools", "Product prototypes", "Cross-platform experiences"],
  },
  {
    slug: "intelligent-workflows",
    title: "Intelligent Workflows",
    eyebrow: "Solutions / Intelligent workflows",
    summary: "Connect data, automation, and AI to reduce friction in everyday work.",
    description: "Workflow opportunities are assessed in context: where information comes from, where decisions happen, and how people remain in control. Implementation can range from focused automation to AI-supported features.",
    focusAreas: ["Process automation", "Decision support", "Knowledge tools", "Human-guided AI"],
  },
  {
    slug: "modern-platforms",
    title: "Modern Platforms",
    eyebrow: "Solutions / Modern platforms",
    summary: "Shape adaptable software foundations for evolving products and services.",
    description: "Modern platform initiatives align architecture and engineering practices with the needs of the organization. Work may focus on a new foundation or incremental improvements to an existing environment.",
    focusAreas: ["Composable architecture", "API ecosystems", "Cloud-native foundations", "Developer experience"],
  },
];

export const industryEntries: CompanyEntry[] = [
  {
    slug: "financial-services",
    title: "Financial Services",
    eyebrow: "Industries / Financial services",
    summary: "Digital product and platform concepts for financial workflows.",
    description: "Technology in financial services must account for trust, privacy, accessibility, and operational requirements. This page outlines a focus area, not a claim of existing client work.",
    focusAreas: ["Digital account experiences", "Operational tooling", "Data-informed services", "Secure integrations"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    eyebrow: "Industries / Healthcare",
    summary: "Considerate digital experiences for complex care and research settings.",
    description: "Healthcare and life-sciences software has distinct needs around privacy, accessibility, and dependable information flows. Potential work should be shaped with appropriate domain and compliance expertise.",
    focusAreas: ["Care team tools", "Patient-facing experiences", "Research workflows", "Health data interfaces"],
  },
  {
    slug: "industrial",
    title: "Industrial & Manufacturing",
    eyebrow: "Industries / Industrial",
    summary: "Software concepts that connect operations, equipment, and insight.",
    description: "Industrial systems often span long-lived equipment, operational data, and varied user environments. Technology initiatives can start with a specific workflow and build toward a practical, maintainable platform.",
    focusAreas: ["Operations software", "Data visualization", "Connected products", "Workflow modernization"],
  },
];

export const workEntries: CompanyEntry[] = projects.map((project) => ({
  slug: project.id,
  title: project.title,
  eyebrow: "Sample / Demo concept",
  summary: project.technologies.join(" · "),
  description: project.description,
  focusAreas: project.technologies,
  sample: true,
}));

export const insightEntries: CompanyEntry[] = [
  {
    slug: "designing-useful-ai-workflows",
    title: "Designing Useful AI Workflows",
    eyebrow: "Sample / Demo concept · Perspective",
    summary: "A draft perspective on grounding AI features in real work.",
    description: "Useful AI workflows begin with a specific task, clear boundaries, and a way for people to understand and review system output. This editorial concept is placeholder content for the future insights section.",
    focusAreas: ["Start with the task", "Keep people in control", "Make system behavior legible"],
    sample: true,
  },
  {
    slug: "building-for-change",
    title: "Building Software for Change",
    eyebrow: "Sample / Demo concept · Engineering",
    summary: "A draft note on designing software that can evolve with its context.",
    description: "Adaptable software comes from deliberate boundaries, useful feedback loops, and decisions that fit the team's operating reality. This editorial concept is placeholder content, not a report of company work.",
    focusAreas: ["Explicit boundaries", "Incremental delivery", "Operational feedback"],
    sample: true,
  },
];

export const navigationGroups = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: serviceEntries.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })) },
  { label: "Solutions", href: "/solutions", children: solutionEntries.map(({ title, slug }) => ({ label: title, href: `/solutions/${slug}` })) },
  { label: "Industries", href: "/industries", children: industryEntries.map(({ title, slug }) => ({ label: title, href: `/industries/${slug}` })) },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;