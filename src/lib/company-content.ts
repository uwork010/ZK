import { projects } from "@/lib/constants";

export interface CompanyEntry {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  focusAreas: string[];
  sample?: boolean;
}

export interface ServiceEntry {
    heroTitle: string;
    visual: ServiceVisualKind;
    tags: [string, string, string];
    processSteps: [string, string, string];
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  offers: string[];
  technologies: string[];
  projectTypes: string[];
  benefits: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export type ServiceVisualKind =
  | "web"
  | "mobile"
  | "mvp"
  | "game"
  | "ai"
  | "software"
  | "design"
  | "qa"
  | "branding"
  | "creative"
  | "cloud"
  | "maintenance";

export const serviceEntries: ServiceEntry[] = [
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Services / Web Development",
    summary: "High-performance websites, SaaS platforms, e-commerce, dashboards, and custom web applications.",
    heroTitle: "Web experiences engineered for ambitious growth.",
    description: "We build fast, resilient websites and web applications that turn complex business goals into clear digital experiences.",
    visual: "web",
    tags: ["React", "TypeScript", "Node.js"],
    offers: ["Marketing websites", "SaaS platforms", "E-commerce and dashboards"],
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL"],
    projectTypes: ["Corporate websites", "SaaS products", "Online marketplaces"],
    processSteps: ["Discover the product goals", "Design and validate the experience", "Build, test, and launch"],
    benefits: ["Faster user experiences", "Scalable architecture", "A stronger digital presence"],
    useCases: ["Lead generation", "Customer portals", "Operational dashboards"],
    faqs: [
      { question: "Can you work with an existing website?", answer: "Yes. We can improve, rebuild, or extend an existing web product without disrupting its core business workflows." },
      { question: "Do you provide ongoing support?", answer: "Yes. Launch support, performance work, and ongoing improvements can be included in the engagement." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Services / Mobile App Development",
    summary: "iOS, Android, Flutter, React Native, marketplace, booking, and business applications.",
    heroTitle: "Mobile products people return to.",
    description: "From first prototype to app store release, we create thoughtful mobile products for customers, teams, and communities.",
    visual: "mobile",
    tags: ["Flutter", "React Native", "APIs"],
    offers: ["iOS and Android apps", "Cross-platform applications", "Mobile API integration"],
    technologies: ["Flutter", "React Native", "Firebase", "REST APIs", "App Store Connect"],
    projectTypes: ["Marketplace apps", "Booking platforms", "Business productivity apps"],
    processSteps: ["Define the mobile experience", "Prototype the key journeys", "Develop, test, and publish"],
    benefits: ["Consistent cross-platform delivery", "Clear product journeys", "Reliable app performance"],
    useCases: ["Customer self-service", "On-demand services", "Field team workflows"],
    faqs: [
      { question: "Can one codebase support iOS and Android?", answer: "Yes. Cross-platform technologies can deliver a shared foundation while preserving a polished native-feeling experience." },
      { question: "Can you help with app store submission?", answer: "Yes. We can prepare releases, assets, metadata, and submission support for both major app stores." },
    ],
  },
  {
    slug: "mvp-product-development",
    title: "MVP & Product Development",
    eyebrow: "Services / MVP & Product Development",
    summary: "Focused product strategy and engineering to validate ideas, launch MVPs, and build for scale.",
    heroTitle: "Turn a promising idea into a focused first product.",
    description: "We help teams validate assumptions, prioritize the essential experience, and launch an MVP with a foundation for the next stage.",
    visual: "mvp",
    tags: ["MVPs", "Product Strategy", "Prototyping"],
    offers: ["Product discovery", "MVP design and development", "Roadmap planning"],
    technologies: ["React", "Node.js", "TypeScript", "Figma", "Cloud Platforms"],
    projectTypes: ["Startup MVPs", "New product lines", "Internal innovation tools"],
    processSteps: ["Align on the opportunity", "Prioritize the smallest valuable release", "Launch and learn from real users"],
    benefits: ["Earlier market feedback", "Lower initial risk", "A scalable product foundation"],
    useCases: ["Investor-ready prototypes", "Early customer pilots", "New business validation"],
    faqs: [
      { question: "How quickly can an MVP launch?", answer: "Timing depends on scope, but a focused product can move from discovery to a usable release in a short, structured engagement." },
      { question: "Do you help define the MVP scope?", answer: "Yes. We work with stakeholders to separate essential product value from later-stage enhancements." },
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    eyebrow: "Services / Game Development",
    summary: "2D, 3D, mobile, PC, multiplayer games, game assets, and immersive experiences.",
    heroTitle: "Build worlds, games, and interactive experiences.",
    description: "Our game development team combines engineering, art, and interaction design to create memorable experiences across platforms.",
    visual: "game",
    tags: ["Unity", "Unreal", "3D"],
    offers: ["2D and 3D game development", "Multiplayer systems", "Game assets and prototypes"],
    technologies: ["Unity", "Unreal Engine", "Blender", "C#", "Multiplayer APIs"],
    projectTypes: ["Mobile games", "PC and console games", "Interactive brand experiences"],
    processSteps: ["Shape the game concept", "Prototype the core loop", "Build, balance, and release"],
    benefits: ["Engaging player experiences", "Reusable game systems", "Production-ready assets"],
    useCases: ["Entertainment products", "Learning experiences", "Immersive marketing campaigns"],
    faqs: [
      { question: "Can you join an existing game project?", answer: "Yes. We can contribute engineering, art, optimization, or feature development to an active production team." },
      { question: "Do you support multiplayer features?", answer: "Yes. We design and integrate multiplayer systems around the project’s scale and platform requirements." },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    eyebrow: "Services / AI & Automation",
    summary: "AI applications, assistants, chatbots, workflow automation, and intelligent business tools.",
    heroTitle: "Make intelligent technology part of everyday work.",
    description: "We turn practical AI opportunities into useful products, assistants, and automated workflows that improve how teams operate.",
    visual: "ai",
    tags: ["OpenAI", "APIs", "Automation"],
    offers: ["AI assistants and chatbots", "Workflow automation", "AI product integration"],
    technologies: ["OpenAI", "Python", "Node.js", "Vector Databases", "REST APIs"],
    projectTypes: ["Knowledge assistants", "Document workflows", "Intelligent customer tools"],
    processSteps: ["Identify high-value opportunities", "Prototype the intelligence layer", "Measure, refine, and deploy"],
    benefits: ["Reduced repetitive work", "Faster access to insight", "More consistent operations"],
    useCases: ["Support automation", "Internal knowledge search", "Content and data workflows"],
    faqs: [
      { question: "Can AI work with our private data?", answer: "Yes. We design access controls, retrieval workflows, and integrations around your security and data requirements." },
      { question: "Do you automate existing software?", answer: "Yes. We connect AI and automation to the tools your teams already use wherever practical." },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    eyebrow: "Services / Custom Software Development",
    summary: "CRM, ERP, POS, inventory, booking systems, dashboards, and management platforms.",
    heroTitle: "Software shaped around the way your business works.",
    description: "We replace disconnected processes with focused, reliable software that fits your operations and evolves with your team.",
    visual: "software",
    tags: ["Web Apps", "Databases", "APIs"],
    offers: ["Business process platforms", "CRM and ERP systems", "Custom dashboards and portals"],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST APIs"],
    projectTypes: ["CRM systems", "Inventory platforms", "Booking and management tools"],
    processSteps: ["Map the business workflows", "Design the right operating model", "Build, train, and improve"],
    benefits: ["Less manual administration", "Centralized business data", "Workflows that scale with growth"],
    useCases: ["Sales operations", "Inventory management", "Multi-location businesses"],
    faqs: [
      { question: "Can you integrate our existing systems?", answer: "Yes. We plan integrations early so the new platform fits your current tools and data flows." },
      { question: "Will the software be customizable later?", answer: "Yes. We structure custom systems with maintainable foundations and clear paths for future modules." },
    ],
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    eyebrow: "Services / UI/UX & Product Design",
    summary: "Research, wireframes, Figma interfaces, prototypes, design systems, and usability testing.",
    heroTitle: "Design that makes complex products feel clear.",
    description: "We combine research, product thinking, and visual craft to create interfaces that are useful, confident, and easy to understand.",
    visual: "design",
    tags: ["Figma", "UX", "Prototyping"],
    offers: ["Product and UX strategy", "Interface design systems", "Prototyping and usability testing"],
    technologies: ["Figma", "FigJam", "Prototyping", "Design Systems", "Usability Testing"],
    projectTypes: ["Digital products", "SaaS interfaces", "Customer-facing platforms"],
    processSteps: ["Understand users and goals", "Explore and prototype solutions", "Refine the system with feedback"],
    benefits: ["Clearer user journeys", "Stronger product confidence", "Consistent visual language"],
    useCases: ["Product redesigns", "New feature discovery", "Design system creation"],
    faqs: [
      { question: "Do you design before development?", answer: "Usually. We create the right level of research and prototype detail to make development decisions with confidence." },
      { question: "Can you work with our existing brand?", answer: "Yes. We can extend an existing identity into a coherent product and interface system." },
    ],
  },
  {
    slug: "quality-assurance-testing",
    title: "Quality Assurance & Testing",
    eyebrow: "Services / Quality Assurance & Testing",
    summary: "Reliable quality processes, test automation, and performance checks for confident releases.",
    heroTitle: "Quality built into every release.",
    description: "We help teams find issues earlier, automate repeatable checks, and release digital products with greater confidence.",
    visual: "qa",
    tags: ["QA", "Automation", "Performance"],
    offers: ["Test strategy", "Automated testing", "Performance and release checks"],
    technologies: ["Playwright", "Cypress", "Jest", "Postman", "CI Pipelines"],
    projectTypes: ["Web applications", "APIs and platforms", "Mobile product releases"],
    processSteps: ["Assess current quality risks", "Prioritize coverage and automation", "Monitor every release"],
    benefits: ["Fewer production issues", "Faster regression checks", "More predictable delivery"],
    useCases: ["Release readiness", "Legacy application coverage", "High-traffic product testing"],
    faqs: [
      { question: "Can you improve an existing test suite?", answer: "Yes. We review coverage, reliability, and execution speed before creating a practical improvement plan." },
      { question: "Do you test APIs as well as interfaces?", answer: "Yes. Our approach can cover user interfaces, APIs, integrations, performance, and critical workflows." },
    ],
  },
  {
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    eyebrow: "Services / Graphic Design & Branding",
    summary: "Distinctive visual identities, brand systems, marketing assets, and digital design direction.",
    heroTitle: "A visual identity people remember.",
    description: "We create distinctive graphic systems that help businesses communicate clearly across digital and physical touchpoints.",
    visual: "branding",
    tags: ["Branding", "Visual Identity", "Graphic Design"],
    offers: ["Brand identity design", "Marketing collateral", "Digital campaign assets"],
    technologies: ["Figma", "Adobe Creative Cloud", "Illustration", "Typography", "Art Direction"],
    projectTypes: ["Brand launches", "Campaign systems", "Digital marketing packages"],
    processSteps: ["Clarify the brand position", "Explore the visual direction", "Deliver a usable brand system"],
    benefits: ["More consistent communication", "A recognizable market presence", "Flexible brand assets"],
    useCases: ["Startup identities", "Product launches", "Ongoing marketing campaigns"],
    faqs: [
      { question: "Do you create complete brand guidelines?", answer: "Yes. We can document the visual system so your team and partners can use it consistently." },
      { question: "Can branding connect to a website project?", answer: "Yes. We often carry the identity directly into websites, products, and launch campaigns." },
    ],
  },
  {
    slug: "3d-video-creative-production",
    title: "3D, Video & Creative Production",
    eyebrow: "Services / 3D, Video & Creative Production",
    summary: "Immersive 3D visuals, motion design, video content, and creative production for digital brands.",
    heroTitle: "Creative production for ideas that deserve dimension.",
    description: "We produce 3D visuals, motion, and video content that give products, brands, and experiences a more compelling presence.",
    visual: "creative",
    tags: ["3D", "Video", "Motion"],
    offers: ["3D modeling and rendering", "Motion graphics", "Video and creative production"],
    technologies: ["Blender", "Cinema 4D", "After Effects", "Premiere Pro", "WebGL"],
    projectTypes: ["Product visualizations", "Brand films", "Interactive 3D experiences"],
    processSteps: ["Define the creative direction", "Develop and review the visual work", "Prepare final production assets"],
    benefits: ["More memorable storytelling", "Reusable campaign content", "A premium visual presence"],
    useCases: ["Product launches", "Digital campaigns", "Immersive presentations"],
    faqs: [
      { question: "Can you create assets for interactive products?", answer: "Yes. We can prepare optimized creative assets for websites, games, apps, and real-time experiences." },
      { question: "Do you handle the full production?", answer: "Yes. We can support creative direction, production, revisions, and delivery for the agreed formats." },
    ],
  },
  {
    slug: "cloud-devops-it-solutions",
    title: "Cloud, DevOps & IT Solutions",
    eyebrow: "Services / Cloud, DevOps & IT Solutions",
    summary: "Scalable cloud infrastructure, deployment workflows, observability, and practical IT solutions.",
    heroTitle: "Infrastructure that keeps your product moving.",
    description: "We make cloud environments, deployments, and IT foundations more secure, observable, and ready for growth.",
    visual: "cloud",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    offers: ["Cloud architecture", "CI/CD and DevOps", "Infrastructure and IT planning"],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Cloud Monitoring"],
    projectTypes: ["Cloud migrations", "Deployment platforms", "Scalable production systems"],
    processSteps: ["Assess the current environment", "Design a resilient foundation", "Automate, monitor, and optimize"],
    benefits: ["More reliable deployments", "Clearer operational visibility", "Infrastructure ready to scale"],
    useCases: ["Growing SaaS products", "Cloud migrations", "Multi-environment delivery"],
    faqs: [
      { question: "Can you work with our current cloud provider?", answer: "Yes. We work with existing environments and can recommend changes based on reliability, cost, and growth." },
      { question: "Do you provide monitoring after launch?", answer: "Yes. Monitoring, alerting, and operational runbooks can be part of the delivery or ongoing support plan." },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    eyebrow: "Services / Maintenance & Support",
    summary: "Ongoing improvements, monitoring, optimization, and technical support for digital products.",
    heroTitle: "Keep digital products healthy after launch.",
    description: "Our ongoing support keeps websites, apps, and platforms secure, current, performant, and ready for their next improvement.",
    visual: "maintenance",
    tags: ["Maintenance", "Optimization", "Support"],
    offers: ["Technical support", "Performance optimization", "Updates and improvements"],
    technologies: ["Performance Audits", "Monitoring", "Security Updates", "Analytics", "Cloud Tools"],
    projectTypes: ["Existing websites", "Live applications", "Long-term product partnerships"],
    processSteps: ["Review the current product", "Prioritize risks and opportunities", "Improve continuously with clear reporting"],
    benefits: ["Less technical debt", "More stable customer experiences", "A dependable technical partner"],
    useCases: ["Post-launch support", "Performance improvement", "Product evolution"],
    faqs: [
      { question: "Can you support products built by another team?", answer: "Yes. We start with a technical review and documentation pass so support can begin responsibly." },
      { question: "Is support available for urgent issues?", answer: "Support options can be structured around your product’s criticality, operating hours, and response needs." },
    ],
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