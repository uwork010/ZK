import { workProjects } from "@/lib/work-content";

export interface CompanyEntry {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  focusAreas: string[];
  sample?: boolean;
}

export type SolutionVisualKind =
  | "startups"
  | "saas"
  | "automation"
  | "transformation"
  | "commerce"
  | "enterprise";

export interface SolutionEntry extends CompanyEntry {
  visual: SolutionVisualKind;
  capabilities: string[];
  problems: string[];
  deliverables: string[];
  technologies: string[];
  approach: string[];
  relatedServices: { title: string; href: string }[];
  aliases?: string[];
}

export type IndustryVisualKind =
  | "startups"
  | "ecommerce"
  | "healthcare"
  | "education"
  | "fintech"
  | "realestate"
  | "logistics"
  | "gaming"
  | "professional";

export interface IndustryEntry extends CompanyEntry {
  aliases?: string[];
  visual: IndustryVisualKind;
  capabilities: string[];
  challenges: string[];
  opportunities: string[];
  build: string[];
  useCases: string[];
  approach: string[];
  technologies: string[];
  relatedServices: { title: string; href: string }[];
  relatedSolutions: { title: string; href: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceEntry {
  heroTitle: string;
  visual: ServiceVisualKind;
  tags: [string, string, string];
  processSteps: [string, string, string];
  slug: string;
  aliases?: string[];
  category?: string;
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
    aliases: ["custom-software"],
    category: "Digital Products",
    title: "Custom Software",
    eyebrow: "Services / Custom Software",
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
    aliases: ["ui-ux-design"],
    category: "Creative & Continuity",
    title: "UI/UX Design",
    eyebrow: "Services / UI/UX Design",
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
    aliases: ["quality-assurance"],
    category: "Intelligent Systems",
    title: "Quality Assurance",
    eyebrow: "Services / Quality Assurance",
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
    aliases: ["3d-video-creative"],
    category: "Creative & Continuity",
    title: "3D / Video / Creative",
    eyebrow: "Services / 3D / Video / Creative",
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
    aliases: ["cloud-devops"],
    category: "Intelligent Systems",
    title: "Cloud & DevOps",
    eyebrow: "Services / Cloud & DevOps",
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

export const solutionEntries: SolutionEntry[] = [
  {
    slug: "startups",
    aliases: ["digital-products"],
    title: "Startups",
    eyebrow: "Solution / Startups",
    summary: "Idea to MVP to launch.",
    description: "Turn an early product idea into a focused MVP with a clear discovery process, purposeful design, and a practical technical foundation.",
    visual: "startups",
    focusAreas: ["Product discovery", "Validation", "MVP development", "Launch planning"],
    problems: ["An idea is not yet defined as a usable product", "Too many features compete for first-release scope", "Stakeholders need a focused prototype or launch plan"],
    deliverables: ["Discovery and requirement sessions", "Clickable product prototype", "MVP design and development", "Launch-ready release planning"],
    capabilities: ["Product strategy", "Rapid prototyping", "Web and mobile MVPs", "Technical planning"],
    technologies: ["Figma", "React", "Node.js", "PostgreSQL", "Cloud platforms"],
    approach: ["Define the core user and problem", "Validate the smallest valuable release", "Build, test, and prepare the launch"],
    relatedServices: [
      { title: "MVP & Product Development", href: "/services/mvp-product-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Web Development", href: "/services/web-development" },
    ],
  },
  {
    slug: "saas-companies",
    title: "SaaS Companies",
    eyebrow: "Solution / SaaS Companies",
    summary: "A connected dashboard ecosystem.",
    description: "Create cohesive SaaS platforms, user experiences, subscription workflows, and connected dashboards around the needs of customers and operating teams.",
    visual: "saas",
    focusAreas: ["SaaS platforms", "Account and subscription flows", "Admin dashboards", "Connected product experiences"],
    problems: ["Core workflows are fragmented across separate screens", "The product needs clear roles, permissions, and subscription states", "Usage data and administration tools are difficult to manage"],
    deliverables: ["SaaS product architecture", "Customer and admin interfaces", "Subscription and account flows", "Role-aware dashboards and integrations"],
    capabilities: ["Multi-tenant product design", "Billing workflows", "Analytics interfaces", "API-led platform development"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    approach: ["Map customer and administrator journeys", "Create a consistent product system", "Build connected modules and measure usability"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops-it-solutions" },
    ],
  },
  {
    slug: "business-automation",
    aliases: ["intelligent-workflows"],
    title: "Business Automation",
    eyebrow: "Solution / Business Automation",
    summary: "A connected workflow.",
    description: "Connect people, applications, data, and practical AI-assisted steps to reduce repetitive work and make operational workflows easier to manage.",
    visual: "automation",
    focusAreas: ["Process automation", "System integrations", "Operational workflows", "AI-assisted processes"],
    problems: ["Teams repeat manual steps across disconnected tools", "Information is copied or delayed between systems", "Operational exceptions are difficult to route and review"],
    deliverables: ["Workflow discovery and mapping", "Automation and integration design", "Human-review checkpoints", "AI-assisted operational tools"],
    capabilities: ["Process mapping", "Workflow automation", "System integration", "Controlled AI assistance"],
    technologies: ["Node.js", "REST APIs", "Webhooks", "Python", "OpenAI"],
    approach: ["Identify repetitive, high-friction work", "Design reliable and reviewable flows", "Integrate, test, and refine with the team"],
    relatedServices: [
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops-it-solutions" },
    ],
  },
  {
    slug: "digital-transformation",
    aliases: ["modern-platforms"],
    title: "Digital Transformation",
    eyebrow: "Solution / Digital Transformation",
    summary: "Legacy to modern systems.",
    description: "Modernize legacy systems and workflows through staged platform improvements, secure integration, and digital experiences designed for ongoing change.",
    visual: "transformation",
    focusAreas: ["Legacy modernization", "System integration", "Digital platforms", "Workflow improvement"],
    problems: ["Older systems limit new digital workflows", "Data and operations are split across incompatible platforms", "Teams need modernization without disrupting essential work"],
    deliverables: ["System and workflow assessment", "Modernization roadmap", "Incremental migration and integration", "Maintained digital operating tools"],
    capabilities: ["Application modernization", "API integration", "Data workflow modernization", "Platform migration"],
    technologies: ["APIs", "TypeScript", "Node.js", "PostgreSQL", "Cloud platforms"],
    approach: ["Understand existing systems and dependencies", "Prioritize safe modernization steps", "Integrate, migrate, and improve incrementally"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops-it-solutions" },
      { title: "Maintenance & Support", href: "/services/maintenance-support" },
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    eyebrow: "Solution / E-commerce",
    summary: "Commerce and device ecosystem.",
    description: "Build coherent online stores and shopping experiences across customer devices, with connected catalog, checkout, payment, and operational workflows.",
    visual: "commerce",
    focusAreas: ["Online stores", "Shopping experiences", "Payment workflows", "Connected commerce systems"],
    problems: ["The shopping journey is inconsistent across devices", "Catalog, orders, and inventory are managed in disconnected places", "A checkout or storefront needs clearer product context"],
    deliverables: ["Storefront and catalog experience", "Cart and checkout design", "Payment integration", "Commerce administration and operations"],
    capabilities: ["Storefront development", "Catalog and product interfaces", "Checkout integration", "Mobile commerce experiences"],
    technologies: ["Next.js", "Commerce APIs", "Payment providers", "TypeScript", "Headless CMS"],
    approach: ["Map the complete shopping and operations journey", "Design for clear product discovery", "Build and integrate the storefront and supporting workflows"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    eyebrow: "Solution / Enterprise Software",
    summary: "Connected enterprise architecture.",
    description: "Create business applications and internal platforms that connect operational systems, teams, and information through a scalable software foundation.",
    visual: "enterprise",
    focusAreas: ["Business applications", "Integrated systems", "Internal platforms", "Scalable software"],
    problems: ["Teams depend on separate tools and spreadsheets", "Important operational records lack a shared system", "Internal processes need role-aware access and reliable integrations"],
    deliverables: ["Enterprise application architecture", "Internal platforms and portals", "System and data integrations", "Role-based operational workflows"],
    capabilities: ["Internal tools", "ERP and CRM workflows", "Data and API integration", "Permissions and reporting"],
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs", "Cloud infrastructure"],
    approach: ["Document operational processes and system boundaries", "Prioritize shared workflows and integrations", "Deliver maintainable modules that can evolve"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "Quality Assurance", href: "/services/quality-assurance-testing" },
    ],
  },
];

export const industryEntries: IndustryEntry[] = [
  {
    slug: "startups",
    title: "Startups",
    eyebrow: "Industries / Startups",
    summary: "Turn early product ideas into focused, launch-ready digital foundations.",
    description: "Startups need a clear path from opportunity and validation to a usable first product. We help shape the smallest valuable experience and build it with room to learn and scale.",
    visual: "startups",
    focusAreas: ["MVP development", "Product validation", "Startup websites", "SaaS foundations", "Product scaling"],
    challenges: ["Scope is uncertain before real usage", "The first release needs to be fast without becoming difficult to extend", "Teams need a credible product experience for customers and investors"],
    opportunities: ["Validate essential journeys with a focused MVP", "Create a coherent website and product foundation", "Build reusable features that support future growth"],
    build: ["Discovery and product planning", "MVP web and mobile applications", "Launch websites and onboarding flows", "Scalable SaaS foundations"],
    capabilities: ["Product strategy", "Rapid prototyping", "Full-stack development", "Analytics-ready foundations"],
    useCases: ["Investor-ready prototypes", "Early customer pilots", "Startup SaaS products", "New product websites"],
    approach: ["Clarify the user and core problem", "Prioritize a focused first release", "Build, test, learn, and scale deliberately"],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Figma"],
    relatedServices: [
      { title: "MVP & Product Development", href: "/services/mvp-product-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Web Development", href: "/services/web-development" },
    ],
    relatedSolutions: [{ title: "Startups", href: "/solutions/startups" }, { title: "SaaS Companies", href: "/solutions/saas-companies" }],
    faqs: [
      { question: "Can an MVP focus on only the essential product journeys?", answer: "Yes. Product discovery and scoping are used to separate essential first-release value from later enhancements." },
      { question: "Can startup software be designed for future scaling?", answer: "The initial system can use clear boundaries and maintainable foundations while avoiding unnecessary early complexity." },
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    eyebrow: "Industries / E-commerce",
    summary: "Create clear shopping experiences with connected commerce operations.",
    description: "E-commerce platforms must make product discovery, checkout, fulfilment, and administration work together across devices.",
    visual: "ecommerce",
    focusAreas: ["Online stores", "Shopping experiences", "Catalog systems", "Payments", "Inventory and orders"],
    challenges: ["Customers need a consistent journey across devices", "Product and inventory information can become fragmented", "Checkout and operational workflows must stay understandable"],
    opportunities: ["Unify discovery, cart, checkout, and account experiences", "Connect catalog, inventory, payments, and order tools", "Create practical product and promotion interfaces"],
    build: ["Responsive storefronts", "Product catalog and search experiences", "Payment and checkout integrations", "Inventory and order administration"],
    capabilities: ["Headless storefronts", "Commerce integrations", "Payment workflows", "Order management interfaces"],
    useCases: ["Direct-to-consumer stores", "Catalog-led marketplaces", "Product management portals", "Mobile shopping journeys"],
    approach: ["Map the customer and operations journeys", "Design a clear storefront and checkout", "Integrate commerce systems and test critical flows"],
    technologies: ["Next.js", "Commerce APIs", "Payment Providers", "Headless CMS", "TypeScript"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    relatedSolutions: [{ title: "E-commerce Solutions", href: "/solutions/ecommerce-solutions" }, { title: "Digital Transformation", href: "/solutions/digital-transformation" }],
    faqs: [
      { question: "Can a store integrate an existing inventory or payment system?", answer: "Integration requirements can be assessed and connected through APIs or existing commerce platform capabilities." },
      { question: "Can the shopping experience work well on mobile?", answer: "Responsive interfaces and mobile shopping journeys are planned as part of the storefront experience." },
    ],
  },
  {
    slug: "healthcare",
    aliases: ["healthcare-life-sciences"],
    title: "Healthcare",
    eyebrow: "Industries / Healthcare",
    summary: "Build considerate digital tools for care and administration.",
    description: "Healthcare software benefits from clear access, dependable workflows, strong privacy considerations, and careful integration with existing processes.",
    visual: "healthcare",
    focusAreas: ["Healthcare management", "Appointment systems", "Patient portals", "Medical administration", "Secure data handling"],
    challenges: ["Sensitive information must be handled carefully", "Patients and staff need clear, accessible experiences", "Clinical and administrative workflows must remain connected"],
    opportunities: ["Make appointments and follow-up workflows easier", "Create clear patient and staff portals", "Improve access to operational and administrative information"],
    build: ["Patient and staff portals", "Appointment and scheduling systems", "Healthcare administration workflows", "Secure interface and system integrations"],
    capabilities: ["Role-based access", "Scheduling", "Workflow design", "Privacy-conscious integration"],
    useCases: ["Practice appointment portals", "Patient information experiences", "Internal care administration", "Provider operations dashboards"],
    approach: ["Understand users, roles, and sensitive data boundaries", "Prototype critical journeys", "Build with appropriate controls and validate workflows"],
    technologies: ["React", "Node.js", "PostgreSQL", "Secure APIs", "Role-Based Access"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Quality Assurance", href: "/services/quality-assurance-testing" },
    ],
    relatedSolutions: [{ title: "Enterprise Software", href: "/solutions/enterprise-software" }, { title: "Digital Transformation", href: "/solutions/digital-transformation" }],
    faqs: [
      { question: "Do you design healthcare software for accessibility?", answer: "Accessibility is considered during interface design and implementation, with particular attention to clear journeys and readable information." },
      { question: "Can sensitive healthcare data be integrated securely?", answer: "Integration and security requirements should be defined with the appropriate domain and compliance expertise for the project." },
    ],
  },
  {
    slug: "education",
    title: "Education",
    eyebrow: "Industries / Education",
    summary: "Create accessible digital learning and administration experiences.",
    description: "Education platforms combine learning content, student journeys, teaching tools, and administration in one understandable ecosystem.",
    visual: "education",
    focusAreas: ["Learning management", "Online learning", "Student portals", "Educational apps", "Administration"],
    challenges: ["Learners and educators need clear, consistent interfaces", "Course, enrolment, and progress information can be distributed", "Administration tools must remain manageable"],
    opportunities: ["Make course and student journeys easier to navigate", "Connect learning content and progress", "Support educators and administrators with focused tools"],
    build: ["Learning management systems", "Course and lesson experiences", "Student and educator portals", "Educational administration platforms"],
    capabilities: ["Learning journeys", "Content management", "Progress interfaces", "Role-based administration"],
    useCases: ["Online course platforms", "Student self-service portals", "Institutional learning tools", "Training applications"],
    approach: ["Understand learner and educator journeys", "Design clear learning structures", "Build, test, and refine participation workflows"],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Learning APIs"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
    ],
    relatedSolutions: [{ title: "SaaS Companies", href: "/solutions/saas-companies" }, { title: "Enterprise Software", href: "/solutions/enterprise-software" }],
    faqs: [
      { question: "Can online learning tools support different roles?", answer: "Role-based experiences can be designed for learners, educators, and administrators." },
      { question: "Can existing course content be integrated?", answer: "Existing content sources and learning systems can be assessed for API, import, or integration approaches." },
    ],
  },
  {
    slug: "fintech",
    aliases: ["financial-services"],
    title: "FinTech",
    eyebrow: "Industries / FinTech",
    summary: "Create clear, connected financial technology experiences.",
    description: "Financial products need understandable interfaces, dependable integrations, and careful workflow design for users and internal teams.",
    visual: "fintech",
    focusAreas: ["Financial platforms", "Dashboards", "Payment integrations", "Workflow automation", "Secure software"],
    challenges: ["Financial information must be easy to understand", "Payments and workflows may involve multiple systems", "Sensitive actions require clear feedback and role-aware access"],
    opportunities: ["Present financial activity in focused dashboards", "Integrate payment and operational workflows", "Reduce repetitive financial administration"],
    build: ["Financial dashboards and portals", "Payment integrations", "Workflow and approval tools", "Customer-facing financial interfaces"],
    capabilities: ["Financial UI design", "Payment integration", "Workflow automation", "Secure application architecture"],
    useCases: ["Financial account dashboards", "Internal approval workflows", "Payment administration tools", "Customer finance portals"],
    approach: ["Map financial journeys and system boundaries", "Design clear, reviewable interactions", "Implement and test critical integrations"],
    technologies: ["React", "Node.js", "APIs", "PostgreSQL", "Payment Providers"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "AI & Automation", href: "/services/ai-automation" },
      { title: "Quality Assurance", href: "/services/quality-assurance-testing" },
    ],
    relatedSolutions: [{ title: "Business Automation", href: "/solutions/business-automation" }, { title: "Enterprise Software", href: "/solutions/enterprise-software" }],
    faqs: [
      { question: "Can financial dashboards include existing data sources?", answer: "Yes. The project can define APIs or integrations for approved financial data sources." },
      { question: "Do you provide financial compliance expertise?", answer: "Compliance requirements should be led by qualified domain advisers and built into the project requirements." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    eyebrow: "Industries / Real Estate",
    summary: "Connect property discovery, inquiry, and management experiences.",
    description: "Real estate platforms should help people explore properties while giving teams clear tools for listings, inquiries, bookings, and management.",
    visual: "realestate",
    focusAreas: ["Property listings", "Real estate websites", "Property management", "Booking and inquiries", "Property dashboards"],
    challenges: ["Property information must remain clear and current", "Leads and inquiries need useful routing", "Listing, agent, and management workflows can remain separate"],
    opportunities: ["Create rich property discovery experiences", "Connect listings with inquiry and booking flows", "Give teams clearer property administration dashboards"],
    build: ["Property listing websites", "Search and filter experiences", "Inquiry and booking workflows", "Property management dashboards"],
    capabilities: ["Listing platforms", "Map and media interfaces", "Lead workflows", "Property administration"],
    useCases: ["Residential and commercial listings", "Property agency portals", "Viewing and inquiry workflows", "Asset management dashboards"],
    approach: ["Define listing, inquiry, and management journeys", "Design a clear property discovery interface", "Integrate listing data and operational workflows"],
    technologies: ["Next.js", "Maps", "Property APIs", "PostgreSQL", "Headless CMS"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    relatedSolutions: [{ title: "E-commerce Solutions", href: "/solutions/ecommerce-solutions" }, { title: "Enterprise Software", href: "/solutions/enterprise-software" }],
    faqs: [
      { question: "Can listings come from an existing system?", answer: "A property API or import workflow can be planned around the existing listing source." },
      { question: "Can inquiries be routed to team members?", answer: "Inquiry workflows can include status, assignment, and follow-up interfaces where needed." },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    eyebrow: "Industries / Logistics",
    summary: "Improve operational visibility across fleets, shipments, and delivery.",
    description: "Logistics systems connect operational events, inventory, teams, and customer-facing updates in dependable workflows.",
    visual: "logistics",
    focusAreas: ["Fleet management", "Shipment tracking", "Inventory workflows", "Delivery management", "Operational dashboards"],
    challenges: ["Operational activity is distributed across systems", "Teams need timely shipment and fleet visibility", "Delivery exceptions require clear ownership"],
    opportunities: ["Create shared operational dashboards", "Track shipments and delivery status", "Reduce manual inventory and fleet workflows"],
    build: ["Fleet and shipment dashboards", "Tracking and status interfaces", "Inventory and delivery workflows", "Operational reporting tools"],
    capabilities: ["Fleet operations", "Shipment tracking", "Inventory workflows", "Event-driven integrations"],
    useCases: ["Dispatch dashboards", "Shipment tracking portals", "Warehouse workflow tools", "Delivery exception management"],
    approach: ["Map operational events and system sources", "Define clear ownership and statuses", "Build integrated monitoring and action workflows"],
    technologies: ["React", "Node.js", "Maps", "REST APIs", "PostgreSQL"],
    relatedServices: [
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "Cloud & DevOps", href: "/services/cloud-devops-it-solutions" },
      { title: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
    relatedSolutions: [{ title: "Enterprise Software", href: "/solutions/enterprise-software" }, { title: "Business Automation", href: "/solutions/business-automation" }],
    faqs: [
      { question: "Can logistics software use live tracking data?", answer: "It can integrate approved GPS, carrier, or operational data sources through the appropriate APIs." },
      { question: "Can exceptions trigger internal workflows?", answer: "Status changes and exceptions can be mapped into review, assignment, or notification workflows." },
    ],
  },
  {
    slug: "gaming",
    title: "Gaming",
    eyebrow: "Industries / Gaming",
    summary: "Create immersive games and interactive digital experiences.",
    description: "Gaming projects bring interaction, visual craft, real-time systems, and memorable worlds together across suitable platforms.",
    visual: "gaming",
    focusAreas: ["2D and 3D games", "Interactive experiences", "Game assets", "Multiplayer", "Immersive products"],
    challenges: ["Core play loops must feel clear and engaging", "Art, interaction, and technical systems need to work together", "Platforms require practical performance and release planning"],
    opportunities: ["Prototype and refine a distinctive play loop", "Build visual worlds and reusable game assets", "Create multiplayer or interactive brand experiences"],
    build: ["2D and 3D game experiences", "Game prototypes and interactive worlds", "Art and game asset production", "Multiplayer and platform features"],
    capabilities: ["Game engineering", "Interactive 3D", "Game design support", "Asset integration"],
    useCases: ["Mobile and PC game concepts", "Interactive brand experiences", "3D learning worlds", "Multiplayer prototypes"],
    approach: ["Define the intended player experience", "Prototype the core interaction", "Build, test, optimize, and prepare release assets"],
    technologies: ["Unity", "Unreal Engine", "Blender", "C#", "WebGL"],
    relatedServices: [
      { title: "Game Development", href: "/services/game-development" },
      { title: "3D / Video / Creative", href: "/services/3d-video-creative-production" },
      { title: "UI/UX Design", href: "/services/ui-ux-product-design" },
    ],
    relatedSolutions: [{ title: "Startups", href: "/solutions/startups" }, { title: "SaaS Companies", href: "/solutions/saas-companies" }],
    faqs: [
      { question: "Can you develop both 2D and 3D experiences?", answer: "The suitable engine and production approach can be selected according to the project scope and platforms." },
      { question: "Can game work include interactive assets?", answer: "Game assets and interactive visuals can be planned for web, mobile, real-time, or game environments." },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    eyebrow: "Industries / Professional Services",
    summary: "Build stronger digital presence, client workflows, and business tools.",
    description: "Professional service businesses can connect websites, CRM, client access, appointments, and internal process automation around better client experiences.",
    visual: "professional",
    focusAreas: ["Business websites", "CRM platforms", "Client portals", "Appointments", "Process automation"],
    challenges: ["Client information and inquiries can remain fragmented", "Booking and follow-up require repeated administration", "The public website must communicate a credible and clear offer"],
    opportunities: ["Create a more useful business website", "Connect inquiries with CRM and booking workflows", "Give clients clearer self-service and progress access"],
    build: ["Business websites", "CRM and inquiry platforms", "Client portals", "Appointment and booking systems"],
    capabilities: ["Service websites", "CRM workflows", "Client portals", "Business automation"],
    useCases: ["Consultancy websites", "Client onboarding portals", "Appointment scheduling", "Internal lead administration"],
    approach: ["Understand the client and team journey", "Design clear digital touchpoints", "Build, integrate, and maintain useful workflows"],
    technologies: ["Next.js", "React", "CRM APIs", "Node.js", "PostgreSQL"],
    relatedServices: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Custom Software", href: "/services/custom-software-development" },
      { title: "Business Automation", href: "/services/ai-automation" },
    ],
    relatedSolutions: [{ title: "Business Automation", href: "/solutions/business-automation" }, { title: "Enterprise Software", href: "/solutions/enterprise-software" }],
    faqs: [
      { question: "Can a website connect to an existing CRM?", answer: "Forms and account workflows can be connected to existing CRM or enquiry systems through supported integrations." },
      { question: "Can clients access private project information?", answer: "A role-aware client portal can be planned to provide approved documents and progress information." },
    ],
  },
];

export const workEntries: CompanyEntry[] = workProjects.map((project) => ({
  slug: project.slug,
  title: project.title,
  eyebrow: project.category,
  summary: project.description,
  description: project.description,
  focusAreas: project.technologies,
  sample: project.classification !== "Completed Project",
}));

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