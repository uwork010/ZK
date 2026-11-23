export type WorkFilter =
  | "All"
  | "Web"
  | "Mobile"
  | "AI"
  | "Software"
  | "E-commerce"
  | "FinTech"
  | "3D / Creative";

export type WorkVisual =
  | "medicare"
  | "nexus"
  | "aura"
  | "cartora"
  | "finora"
  | "mobilyn"
  | "vista"
  | "pumpwise";

export interface WorkProject {
  slug: string;
  title: string;
  category: string;
  filters: WorkFilter[];
  classification: "Completed Project" | "CORE & CRAFT Studio Demonstration Project";
  description: string;
  overview: string;
  problem: string;
  objectives: string[];
  solution: string;
  features: string[];
  technologies: string[];
  details: {
    platform: string;
    industry: string;
    type: string;
    status: string;
  };
  designDecisions: string[];
  relatedServices: { title: string; href: string }[];
  visual: WorkVisual;
  liveUrl?: string;
}

export const workFilters: WorkFilter[] = [
  "All",
  "Web",
  "Mobile",
  "AI",
  "Software",
  "E-commerce",
  "FinTech",
  "3D / Creative",
];

export const workProjects: WorkProject[] = [
  {
    slug: "medicare",
    title: "MediCare",
    category: "Healthcare Software",
    filters: ["Web", "Software"],
    classification: "Completed Project",
    description: "A modern healthcare management platform designed to simplify clinic operations, patient management and appointment workflows.",
    overview: "MediCare brings important clinic operations into one organized digital workspace. The platform focuses on helping healthcare teams manage doctors, patients, appointments, medical records and billing through a centralized interface.",
    problem: "Clinic teams often rely on disconnected records and manual workflows for appointments, patient history and billing. MediCare creates a shared operational view so that routine work can move through a clear, consistent process.",
    objectives: ["Centralize clinic operations", "Make patient and appointment workflows easier to manage", "Keep operational and billing information organized", "Provide clear role-appropriate dashboard views"],
    solution: "A responsive React application connects a Supabase-backed data model with practical dashboard, patient, appointment and billing workflows. Clinic-scoped information is organized around the daily work of doctors and administrative teams.",
    features: ["Doctor management", "Patient registration and management", "Appointment scheduling and status tracking", "Patient medical history and previous records", "Invoice and billing management", "Dashboard and operational summaries", "Clinic-scoped data management", "Supabase backend integration"],
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Supabase"],
    details: { platform: "Web Application", industry: "Healthcare", type: "Clinic Management System", status: "Completed" },
    designDecisions: ["Dashboard-first information architecture", "Clear separation of patient, doctor and appointment workflows", "Clinic-scoped records and role-aware navigation", "Responsive tables and operational forms"],
    relatedServices: [{ title: "Custom Software", href: "/services/custom-software" }, { title: "Web Development", href: "/services/web-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }],
    visual: "medicare",
  },
  {
    slug: "nexus-flow",
    title: "Nexus Flow",
    category: "Custom Software / Business Automation",
    filters: ["Web", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A connected business operations platform that helps teams manage workflows, projects, tasks and performance from one workspace.",
    overview: "Nexus Flow demonstrates how disconnected business operations can be organized into a centralized management system.",
    problem: "Projects, responsibilities and operational updates can become fragmented across tools. Nexus Flow explores a single workspace that gives leaders and teams a shared view of work, ownership and progress.",
    objectives: ["Unify projects and operational tasks", "Clarify ownership through teams and roles", "Expose progress with useful reports", "Make workflow state visible across the organization"],
    solution: "The concept combines an executive dashboard with project boards, role management, activity timelines and reporting, supported by a modular React and Supabase architecture.",
    features: ["Executive overview dashboard", "Team and role management", "Task and project tracking", "Workflow automation", "Activity timelines", "Reports and analytics", "Notifications and reminders"],
    technologies: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
    details: { platform: "Web Application", industry: "Business Operations", type: "Operations Management Software", status: "Studio Demonstration Project" },
    designDecisions: ["A calm executive overview as the operating entry point", "Consistent workflow states across projects and tasks", "Timeline and table views for different levels of detail", "Modular components for future automation rules"],
    relatedServices: [{ title: "Custom Software", href: "/services/custom-software" }, { title: "AI & Automation", href: "/services/ai-automation" }, { title: "Web Development", href: "/services/web-development" }],
    visual: "nexus",
  },
  {
    slug: "aura-ai",
    title: "Aura AI",
    category: "AI & Automation",
    filters: ["Web", "AI", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "An intelligent AI customer-support assistant designed to help businesses manage customer questions and automate routine support workflows.",
    overview: "Aura AI demonstrates a modern conversational support experience with a structured knowledge base, automated responses and a dashboard for managing customer interactions.",
    problem: "Support teams need to answer familiar questions quickly while preserving the context and control required for more complex issues. Aura AI explores a practical balance between automated assistance and human escalation.",
    objectives: ["Resolve routine enquiries efficiently", "Ground answers in structured knowledge", "Categorize and route customer queries", "Keep conversation history accessible"],
    solution: "A conversational interface is paired with a support dashboard, knowledge-base management and escalation controls. The concept uses clear system states so users understand when automation is answering or when a person is needed.",
    features: ["Conversational AI interface", "Knowledge-base integration", "Customer query categorization", "Conversation history", "Support dashboard", "Escalation to human support", "Analytics and usage insights"],
    technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
    details: { platform: "AI-powered Web Application", industry: "Customer Experience", type: "AI Support Automation", status: "Studio Demonstration Project" },
    designDecisions: ["Transparent answer and escalation states", "Knowledge sources organized for easy review", "Conversation-first interface with a compact support context", "Human handoff as a first-class workflow"],
    relatedServices: [{ title: "AI & Automation", href: "/services/ai-automation" }, { title: "Custom Software", href: "/services/custom-software" }, { title: "Web Development", href: "/services/web-development" }],
    visual: "aura",
  },
  {
    slug: "cartora",
    title: "Cartora",
    category: "E-commerce",
    filters: ["Web", "E-commerce", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A modern commerce platform concept focused on product discovery, smooth shopping experiences and streamlined order management.",
    overview: "Cartora demonstrates a responsive online shopping ecosystem with a customer storefront and an organized administration experience.",
    problem: "A successful online store depends on both a refined buying journey and manageable operational workflows. Cartora brings catalogue, cart, checkout and inventory views into a coherent commerce concept.",
    objectives: ["Create a premium, responsive storefront", "Simplify product discovery and comparison", "Make checkout progress feel clear", "Give administrators an organized order and inventory view"],
    solution: "A Next.js-oriented commerce concept combines rich product presentation with practical catalogue and order interfaces. The visual system keeps the storefront cinematic while preserving a direct shopping flow.",
    features: ["Product catalogue", "Search and filtering", "Product detail pages", "Shopping cart", "Checkout interface", "Order management", "Inventory dashboard", "Sales overview"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Supabase"],
    details: { platform: "E-commerce Web Application", industry: "Retail", type: "Online Commerce Platform", status: "Studio Demonstration Project" },
    designDecisions: ["Editorial product composition rather than a dense catalog grid", "Persistent basket state and clear checkout hierarchy", "Storefront and administration share a consistent visual language", "Mobile-first product discovery"],
    relatedServices: [{ title: "Web Development", href: "/services/web-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }, { title: "Custom Software", href: "/services/custom-software" }],
    visual: "cartora",
  },
  {
    slug: "finora",
    title: "Finora",
    category: "FinTech / Software",
    filters: ["Web", "FinTech", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A financial analytics dashboard concept designed to present transactions, spending patterns and financial performance in a clear and organized interface.",
    overview: "Finora demonstrates how complex financial information can be transformed into an accessible dashboard experience.",
    problem: "Financial dashboards can become difficult to scan when account activity, categories and trends compete for attention. Finora explores a hierarchy that makes the overall picture understandable before opening transaction detail.",
    objectives: ["Clarify monthly financial position", "Organize income and expense information", "Surface meaningful trends", "Make report exports and account activity accessible"],
    solution: "The concept uses progressive information density: summary metrics and charts lead to categorized transactions and downloadable reports. A cohesive chart system supports quick comparison without visual noise.",
    features: ["Financial overview", "Transaction management", "Income and expense categorization", "Interactive charts", "Monthly financial summaries", "Account activity", "Downloadable reports", "Responsive dashboard"],
    technologies: ["React", "TypeScript", "Charting library", "Node.js", "Supabase"],
    details: { platform: "Web Application", industry: "Financial Technology", type: "Financial Analytics Dashboard", status: "Studio Demonstration Project" },
    designDecisions: ["A concise financial summary above detailed records", "Consistent chart and status colors", "Category-level filtering for faster analysis", "Dense data remains readable on smaller screens"],
    relatedServices: [{ title: "Custom Software", href: "/services/custom-software" }, { title: "Web Development", href: "/services/web-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }],
    visual: "finora",
  },
  {
    slug: "mobilyn",
    title: "Mobilyn",
    category: "Mobile Applications",
    filters: ["Mobile", "E-commerce", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A modern mobile marketplace application concept connecting customers with products and services through a simple, intuitive experience.",
    overview: "Mobilyn demonstrates a mobile-first product experience focused on discovery, user accounts, product listings and smooth navigation.",
    problem: "Mobile marketplaces need to feel immediate while helping users evaluate enough information to make a choice. Mobilyn explores concise listings, familiar navigation and a low-friction path from discovery to favourites and orders.",
    objectives: ["Create a clear mobile onboarding path", "Improve product discovery", "Keep account and order actions easy to reach", "Support favourites and notifications"],
    solution: "A React Native concept organizes discovery, category browsing, account management and order history around thumb-friendly mobile patterns and consistent listing components.",
    features: ["Mobile-first interface", "User registration and profiles", "Search and discovery", "Product listings", "Favorites", "Order history", "Notifications", "Clean onboarding experience"],
    technologies: ["React Native", "TypeScript", "Supabase", "REST APIs"],
    details: { platform: "Mobile Application", industry: "Digital Commerce", type: "Marketplace App", status: "Studio Demonstration Project" },
    designDecisions: ["Large touch targets and simple primary actions", "Visual listings with a concise information hierarchy", "Bottom navigation for frequent journeys", "Onboarding separated from core discovery"],
    relatedServices: [{ title: "Mobile App Development", href: "/services/mobile-app-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }, { title: "Custom Software", href: "/services/custom-software" }],
    visual: "mobilyn",
  },
  {
    slug: "vista-3d",
    title: "Vista 3D",
    category: "3D / Creative Production",
    filters: ["3D / Creative", "Web"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A cinematic 3D product presentation concept combining immersive environments, product visualization and digital storytelling.",
    overview: "Vista 3D demonstrates how creative production and technology can be combined to create engaging digital product experiences.",
    problem: "Traditional product presentations can struggle to communicate form, material and atmosphere. Vista 3D explores an interactive presentation that lets the visual story and product detail work together.",
    objectives: ["Create a cinematic 3D product scene", "Support controlled interactive camera movement", "Communicate atmosphere and material quality", "Preserve responsive access across devices"],
    solution: "The concept combines Three.js and React Three Fiber with structured lighting, motion and a responsive presentation shell. 3D elements support the narrative rather than becoming disconnected spectacle.",
    features: ["3D product visualization", "Interactive camera movement", "Atmospheric lighting", "Product storytelling", "Animated transitions", "Responsive presentation", "Immersive visual composition"],
    technologies: ["Three.js", "React Three Fiber", "WebGL", "Blender", "Motion design tools"],
    details: { platform: "Interactive Web Experience", industry: "Creative & Digital Marketing", type: "3D Product Experience", status: "Studio Demonstration Project" },
    designDecisions: ["3D composition remains the primary visual hierarchy", "Camera movement provides context, not distraction", "Lighting reinforces material and depth", "A lightweight interface supports the experience"],
    relatedServices: [{ title: "3D / Video / Creative", href: "/services/3d-video-creative" }, { title: "Web Development", href: "/services/web-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }],
    visual: "vista",
  },
  {
    slug: "pumpwise",
    title: "PumpWise",
    category: "Custom Software / Operations",
    filters: ["Web", "Software"],
    classification: "CORE & CRAFT Studio Demonstration Project",
    description: "A fuel-station management system concept designed to organize daily operations, inventory movement and operational reporting.",
    overview: "PumpWise demonstrates a centralized system for fuel-station operations, including tank monitoring, employee workflows and business reporting.",
    problem: "Fuel operations require careful coordination across inventory, sales records and roles. PumpWise explores a clear operational workspace that makes daily movement and reporting easier to follow.",
    objectives: ["Organize tank and inventory information", "Separate owner and employee workflows", "Record daily sales consistently", "Surface gains and losses in reporting"],
    solution: "A React and Supabase concept combines tank levels, dip-to-litres information, daily records and role-aware dashboards. Operational states are designed to stay legible across desktop and mobile layouts.",
    features: ["Fuel tank management", "Petrol and diesel inventory", "Dip-to-litres mapping", "Daily sales records", "Monthly loss and gain reporting", "Employee and owner roles", "Operational dashboard", "Inventory movement tracking"],
    technologies: ["React", "Vite", "Supabase", "JavaScript", "Tailwind CSS"],
    details: { platform: "Management Web Application", industry: "Fuel & Retail Operations", type: "Business Management Software", status: "Studio Demonstration Project" },
    designDecisions: ["Tank and inventory status shown before detailed records", "Role separation protects operational clarity", "Daily records use consistent units and status patterns", "Reporting emphasizes reviewable movement rather than decorative charts"],
    relatedServices: [{ title: "Custom Software", href: "/services/custom-software" }, { title: "Web Development", href: "/services/web-development" }, { title: "UI/UX Design", href: "/services/ui-ux-design" }],
    visual: "pumpwise",
  },
];
