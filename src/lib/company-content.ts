export interface CompanyEntry {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  focusAreas: string[];
  sample?: boolean;
}

export const serviceEntries: CompanyEntry[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    eyebrow: "Services / Product engineering",
    summary: "Plan, design, and build digital products around real user and business needs.",
    description: "A flexible product engineering engagement can span discovery, interface design, application development, and ongoing iteration. Scope and delivery approach are shaped around the product rather than a fixed package.",
    focusAreas: ["Product discovery", "Web and mobile applications", "Design systems", "Quality engineering"],
  },
  {
    slug: "data-ai",
    title: "Data & AI",
    eyebrow: "Services / Data and AI",
    summary: "Turn data workflows and AI ideas into useful, maintainable software.",
    description: "Explore data foundations, machine learning, and AI-enabled workflows with a focus on clear use cases, responsible implementation, and systems that teams can operate.",
    focusAreas: ["Data platforms", "Applied machine learning", "AI product integration", "Analytics and visualization"],
  },
  {
    slug: "cloud-platforms",
    title: "Cloud & Platforms",
    eyebrow: "Services / Cloud and platforms",
    summary: "Build dependable cloud foundations for modern software products.",
    description: "Platform work can include architecture, deployment automation, observability, and modernization planning. The right path depends on existing systems, constraints, and operational needs.",
    focusAreas: ["Cloud architecture", "Platform engineering", "DevOps automation", "Application modernization"],
  },
];

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

export const workEntries: CompanyEntry[] = [
  {
    slug: "operations-intelligence",
    title: "Operations Intelligence",
    eyebrow: "Sample / Demo concept",
    summary: "A concept for bringing operational signals into one clear workspace.",
    description: "This sample concept explores how a team might review activity, identify exceptions, and inspect supporting information in one interface. It is illustrative placeholder content, not a client engagement or a report of delivered results.",
    focusAreas: ["Concept interface", "Operational data views", "Exception review flow"],
    sample: true,
  },
  {
    slug: "connected-product-platform",
    title: "Connected Product Platform",
    eyebrow: "Sample / Demo concept",
    summary: "A concept for a digital product spanning customer and operations workflows.",
    description: "This sample concept sketches a connected product experience and the platform capabilities that could support it. It is a design and architecture placeholder, not a named customer project or a claim of measured outcomes.",
    focusAreas: ["Product experience", "Service integrations", "Platform foundations"],
    sample: true,
  },
];

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