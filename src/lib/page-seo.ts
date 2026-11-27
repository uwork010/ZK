import type { Metadata } from "next";
import { canonicalMetadata, getSiteUrl } from "@/lib/seo";

export interface PageSeo {
  path: string;
  title: string;
  description: string;
}

export const pageSeoEntries: PageSeo[] = [
  {
    path: "/",
    title: "CORE & CRAFT | Digital Solutions & Technology Agency",
    description:
      "CORE & CRAFT is a digital solutions agency building software, AI tools, websites, mobile apps and creative experiences for businesses worldwide.",
  },
  {
    path: "/services",
    title: "Digital Services for Web, Software & AI",
    description:
      "Explore web and mobile app development, custom software, AI automation, product design, game development and creative technology services.",
  },
  {
    path: "/solutions",
    title: "Business & Digital Technology Solutions",
    description:
      "Find practical digital solutions for startups, SaaS teams, business automation, digital transformation, e-commerce and enterprise software.",
  },
  {
    path: "/industries",
    title: "Digital Solutions for Modern Industries",
    description:
      "Discover software, websites and digital product expertise for startups, e-commerce, healthcare, education, finance, property, logistics and gaming.",
  },
  {
    path: "/work",
    title: "Digital Product & Software Project Portfolio",
    description:
      "Explore CORE & CRAFT studio projects across custom software, healthcare, AI, e-commerce, fintech, mobile apps and interactive 3D experiences.",
  },
  {
    path: "/about",
    title: "About Our Digital Product Studio",
    description:
      "Meet CORE & CRAFT, a digital product studio bringing strategy, design and technology together to build useful software and memorable experiences.",
  },
  {
    path: "/insights",
    title: "Insights on Software, AI & Digital Products",
    description:
      "Read practical perspectives on AI automation, web development, product design, startup technology and digital transformation.",
  },
  {
    path: "/contact",
    title: "Contact Our Team About a Digital Project",
    description:
      "Discuss your website, software, mobile app, AI or creative technology project with CORE & CRAFT. We work with ambitious teams worldwide.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Learn what information CORE & CRAFT collects through this website, how enquiry details are handled and how to contact us about your data.",
  },
  {
    path: "/terms",
    title: "Website Terms of Use",
    description:
      "Review the terms for using the CORE & CRAFT website, including intellectual property, enquiries, portfolio demonstrations and liability.",
  },
  {
    path: "/services/web-development",
    title: "Web Development for Websites & Platforms",
    description:
      "Build fast business websites, SaaS products, online stores and custom web applications with an experienced web development team.",
  },
  {
    path: "/services/mobile-app-development",
    title: "Mobile App Development for iOS & Android",
    description:
      "Plan, design and develop iOS and Android apps, including cross-platform products, marketplaces, booking tools and business applications.",
  },
  {
    path: "/services/mvp-product-development",
    title: "MVP & Digital Product Development",
    description:
      "Validate a product idea, focus the first release and build a launch-ready MVP with product strategy, design and software engineering.",
  },
  {
    path: "/services/game-development",
    title: "2D & 3D Game Development",
    description:
      "Create mobile, PC and multiplayer games, interactive prototypes and game assets with joined-up engineering, art and interaction design.",
  },
  {
    path: "/services/ai-automation",
    title: "AI Development & Business Process Automation",
    description:
      "Develop practical AI assistants, chatbots and automated workflows that connect business tools and reduce repetitive team work.",
  },
  {
    path: "/services/custom-software-development",
    title: "Custom Software Development for Business",
    description:
      "Build software around your operations, from CRM and ERP systems to inventory, booking platforms, dashboards and customer portals.",
  },
  {
    path: "/services/ui-ux-product-design",
    title: "UI/UX & Digital Product Design",
    description:
      "Improve digital products with user research, UX strategy, interface design, prototypes, design systems and usability testing.",
  },
  {
    path: "/services/quality-assurance-testing",
    title: "Software Testing & Quality Assurance",
    description:
      "Improve release confidence with a practical QA strategy, automated tests, API checks and performance testing for digital products.",
  },
  {
    path: "/services/graphic-design-branding",
    title: "Brand Identity & Graphic Design",
    description:
      "Create a distinctive visual identity with brand systems, graphic design, marketing assets and art direction for digital and physical channels.",
  },
  {
    path: "/services/3d-video-creative-production",
    title: "3D, Video & Creative Production",
    description:
      "Produce 3D visuals, motion design, video content and interactive creative assets for product launches and digital brand experiences.",
  },
  {
    path: "/services/cloud-devops-it-solutions",
    title: "Cloud Infrastructure & DevOps Services",
    description:
      "Plan scalable cloud infrastructure, automate deployments and improve observability with practical DevOps and IT solutions.",
  },
  {
    path: "/services/maintenance-support",
    title: "Website & Software Maintenance Support",
    description:
      "Keep websites, applications and platforms secure, current and reliable with ongoing technical support, monitoring and optimization.",
  },
  {
    path: "/solutions/startups",
    title: "Digital Product Development for Startups",
    description:
      "Move from product idea to MVP with focused discovery, UX design and software development built around early validation and launch.",
  },
  {
    path: "/solutions/saas-companies",
    title: "SaaS Product Development & Platform Design",
    description:
      "Build connected SaaS platforms with clear customer journeys, subscriptions, role-based dashboards and maintainable product architecture.",
  },
  {
    path: "/solutions/business-automation",
    title: "Business Process Automation & AI Workflows",
    description:
      "Connect tools, people and data with integrated business workflows, practical automation and AI-assisted processes with human review.",
  },
  {
    path: "/solutions/digital-transformation",
    title: "Digital Transformation & Legacy Modernization",
    description:
      "Modernize legacy systems and business workflows through phased software improvements, secure integrations and useful digital platforms.",
  },
  {
    path: "/solutions/ecommerce-solutions",
    title: "E-commerce Website & Platform Solutions",
    description:
      "Create connected online stores with product discovery, mobile shopping, checkout, payment integrations and commerce operations.",
  },
  {
    path: "/solutions/enterprise-software",
    title: "Enterprise Software & Business Applications",
    description:
      "Connect teams and operational systems with scalable enterprise software, internal platforms, role-based workflows and integrations.",
  },
  {
    path: "/industries/startups",
    title: "Startup Website, MVP & Software Development",
    description:
      "Give your startup a clear path from idea to launch with product validation, MVP development, startup websites and scalable foundations.",
  },
  {
    path: "/industries/e-commerce",
    title: "E-commerce Website & Software Development",
    description:
      "Improve online retail with responsive storefronts, product discovery, checkout, payment integrations and connected order operations.",
  },
  {
    path: "/industries/healthcare",
    title: "Healthcare Software & Patient Portals",
    description:
      "Build considerate healthcare software for patient portals, appointments and administration, with clear access and privacy-aware workflows.",
  },
  {
    path: "/industries/education",
    title: "Education Software & E-learning Platforms",
    description:
      "Create accessible learning platforms, student portals and education administration tools for learners, educators and institutions.",
  },
  {
    path: "/industries/fintech",
    title: "FinTech Software & Financial Product Design",
    description:
      "Develop clear financial dashboards, payment integrations and digital finance workflows with dependable software and user experience design.",
  },
  {
    path: "/industries/real-estate",
    title: "Real Estate Websites & Property Software",
    description:
      "Connect property listings, search, enquiries, bookings and management with real estate websites and tailored digital tools.",
  },
  {
    path: "/industries/logistics",
    title: "Logistics Software & Fleet Management Systems",
    description:
      "Improve logistics visibility with software for fleet operations, shipment tracking, inventory workflows and delivery exceptions.",
  },
  {
    path: "/industries/gaming",
    title: "Game Development & Interactive Experiences",
    description:
      "Bring game concepts to life with 2D and 3D development, interactive worlds, real-time features and creative game assets.",
  },
  {
    path: "/industries/professional-services",
    title: "Digital Tools for Professional Services",
    description:
      "Connect your professional services website with CRM, client portals, appointment booking and practical business process automation.",
  },
  {
    path: "/work/medicare",
    title: "MediCare | Clinic Management Software Concept",
    description:
      "Explore a clinic management software demonstration for patient records, doctor schedules, appointments and healthcare billing workflows.",
  },
  {
    path: "/work/nexus-flow",
    title: "Nexus Flow | Business Operations Platform",
    description:
      "See a business operations platform concept for project tracking, team roles, workflow automation, activity and reporting.",
  },
  {
    path: "/work/aura-ai",
    title: "Aura AI | Customer Support Assistant Concept",
    description:
      "Explore an AI customer support demonstration with a knowledge base, automated responses, conversation history and human escalation.",
  },
  {
    path: "/work/cartora",
    title: "Cartora | E-commerce Platform Concept",
    description:
      "See an e-commerce platform concept combining product discovery, online shopping, checkout, order management and inventory tools.",
  },
  {
    path: "/work/finora",
    title: "Finora | Financial Analytics Dashboard",
    description:
      "Explore a fintech dashboard concept for financial summaries, transaction management, spending patterns and downloadable reports.",
  },
  {
    path: "/work/mobilyn",
    title: "Mobilyn | Mobile Marketplace App Concept",
    description:
      "See a mobile marketplace app concept with product discovery, user accounts, favourites, notifications and order history.",
  },
  {
    path: "/work/vista-3d",
    title: "Vista 3D | Interactive Product Experience",
    description:
      "Explore a 3D product presentation concept combining interactive visualization, cinematic environments and digital storytelling.",
  },
  {
    path: "/work/pumpwise",
    title: "PumpWise | Fuel Station Management Concept",
    description:
      "See a fuel station management software concept for tank inventory, daily sales, staff roles and operational reporting.",
  },
  {
    path: "/insights/ai-automation-business-operations",
    title: "AI Automation for Business Operations",
    description:
      "Learn how to identify useful business automation opportunities, design reviewable AI workflows and keep people in control of decisions.",
  },
  {
    path: "/insights/building-an-mvp",
    title: "Build an MVP: From Idea to Digital Product",
    description:
      "Learn how to scope a focused MVP, build one complete product journey and use early customer feedback to guide what comes next.",
  },
  {
    path: "/insights/effective-business-websites",
    title: "What Makes a Business Website Effective?",
    description:
      "Explore the essentials of an effective business website, from clear messaging and accessible design to mobile usability and performance.",
  },
  {
    path: "/insights/choosing-a-technology-stack",
    title: "Choose a Technology Stack for a Startup",
    description:
      "Use a practical framework to choose startup technologies that suit your product, team skills, integrations and long-term maintenance needs.",
  },
  {
    path: "/insights/importance-of-user-experience",
    title: "Why UX Matters in Modern Software",
    description:
      "Understand how user experience design, accessibility and feedback help software products meet real user needs with less friction.",
  },
  {
    path: "/insights/custom-software-workflows",
    title: "Custom Software for Business Workflows",
    description:
      "Find out when custom software can help connect business processes, improve integrations and reduce friction in everyday workflows.",
  },
  {
    path: "/insights/3d-digital-experiences",
    title: "Designing Useful 3D Digital Experiences",
    description:
      "Learn when interactive 3D adds value to digital design and how to balance performance, accessibility and visual storytelling.",
  },
  {
    path: "/insights/digital-transformation",
    title: "From Manual Work to Connected Digital Systems",
    description:
      "Explore a practical approach to digital transformation through process mapping, deliberate integrations and sustainable change.",
  },
];

const pageSeoByPath = new Map(
  pageSeoEntries.map((entry) => [entry.path, entry] as const),
);

export function pageMetadata(path: string): Metadata {
  const page = pageSeoByPath.get(path);
  if (!page) {
    throw new Error(`Missing SEO metadata for indexable route: ${path}`);
  }

  const canonicalUrl = new URL(path, getSiteUrl()).toString();
  const title =
    path === "/"
      ? { absolute: page.title }
      : page.title;
  const socialTitle =
    path === "/" ? page.title : `${page.title} | CORE & CRAFT`;

  return {
    ...canonicalMetadata(path),
    title,
    description: page.description,
    openGraph: {
      title: socialTitle,
      description: page.description,
      type: "website",
      url: canonicalUrl,
      siteName: "CORE & CRAFT",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
    },
  };
}
