export const insightCategories = [
  "AI & Automation",
  "Web & Software Development",
  "Digital Products & Startups",
  "UI/UX & Design",
  "Business & Digital Transformation",
  "3D & Creative Technology",
] as const;

export type InsightCategory = (typeof insightCategories)[number];
export type InsightVisualKind =
  | "ai"
  | "mvp"
  | "website"
  | "stack"
  | "experience"
  | "software"
  | "three-d"
  | "transformation";

export interface InsightArticle {
  slug: string;
  title: string;
  category: InsightCategory;
  summary: string;
  introduction: string;
  keywords: string[];
  visual: InsightVisualKind;
  sections: { title: string; paragraphs: string[]; list?: string[] }[];
  takeaways: string[];
  related: string[];
}

export function getInsightReadingTime(article: InsightArticle): number {
  const content = [
    article.title,
    article.summary,
    article.introduction,
    ...article.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.list ?? [])]),
    ...article.takeaways,
  ].join(" ");
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "ai-automation-business-operations",
    title: "How AI Automation Is Changing Everyday Business Operations",
    category: "AI & Automation",
    summary: "A practical way to find useful automation opportunities without treating AI as a solution in search of a problem.",
    introduction: "The most valuable automation often starts with ordinary work: sorting requests, finding information, preparing a first draft, or moving data between tools. The opportunity is to make those tasks easier while keeping people informed and in control.",
    keywords: ["AI", "automation", "workflows", "operations", "human review"],
    visual: "ai",
    sections: [
      {
        title: "Start with the work, not the model",
        paragraphs: [
          "Map a real workflow from its trigger to its outcome. Notice where a person repeats the same lookup, copies information, or makes a predictable first pass. That friction is a better starting point than choosing a technology and looking for a place to use it.",
          "Then separate routine steps from decisions that need context or accountability. Automation can prepare, classify, or route information; a person can review exceptions, approve consequential actions, and handle cases where the right answer is not clear.",
        ],
      },
      {
        title: "Design a workflow people can trust",
        paragraphs: [
          "A useful AI feature makes its role visible. Show what information it used, where a result needs confirmation, and how someone can correct it. Set boundaries around the task and make it easy to hand work back to a person.",
          "Plan for imperfect output from the outset. Test familiar cases as well as incomplete, ambiguous, and unusual inputs. Decide who monitors quality, what happens when an integration is unavailable, and how users can report a problem.",
        ],
        list: [
          "Choose a bounded, frequent task with a clear owner.",
          "Keep review and correction simple for the people doing the work.",
          "Measure usefulness through workflow feedback, not novelty.",
        ],
      },
      {
        title: "Improve in small, observable steps",
        paragraphs: [
          "Begin with a limited workflow and a small set of real examples. Compare the assisted process with the current one, gather feedback from its users, and refine the instructions, interface, and handoffs before widening access.",
          "The aim is not to remove judgment from work. It is to give people a clearer starting point and reduce avoidable effort, with enough visibility to understand when the system helps and when it needs attention.",
        ],
      },
    ],
    takeaways: [
      "Pick a repetitive business task before picking an AI tool.",
      "Make human review, correction, and escalation part of the design.",
      "Start small and use feedback to guide what should happen next.",
    ],
    related: ["digital-transformation", "custom-software-workflows", "choosing-a-technology-stack"],
  },
  {
    slug: "building-an-mvp",
    title: "Building an MVP: From Idea to a Working Digital Product",
    category: "Digital Products & Startups",
    summary: "Turn an early product idea into a focused first release that can be used, evaluated, and improved.",
    introduction: "An MVP is not simply a smaller version of a finished product. It is a deliberate first release that helps a team test whether a specific user problem and proposed solution belong together.",
    keywords: ["MVP", "startups", "product discovery", "product development", "prototyping"],
    visual: "mvp",
    sections: [
      {
        title: "Define the learning goal",
        paragraphs: [
          "Begin by describing the user, the situation they face, and what they need to accomplish. Make the assumption behind the product explicit: what must be true for this idea to be worth developing further?",
          "A concise problem statement keeps early conversations grounded. It also makes it easier to distinguish essential product behavior from additions that are interesting but do not help test the central assumption.",
        ],
      },
      {
        title: "Choose the smallest complete journey",
        paragraphs: [
          "Map the path a user must take to reach one meaningful outcome. Include the steps around the interface too: how they arrive, what information is needed, what happens when something goes wrong, and how they know the task is complete.",
          "A narrow but coherent journey is more useful than many disconnected screens. Prototype it, review it with prospective users or stakeholders, and adjust the scope before committing to a larger build.",
        ],
        list: [
          "Name the first user and the task they need to complete.",
          "Keep only the features that support the learning goal.",
          "Plan how feedback will influence the next product decision.",
        ],
      },
      {
        title: "Build for the next decision",
        paragraphs: [
          "The first release needs enough engineering care to be dependable, but not speculative complexity for every possible future. Choose an approach the team can understand and maintain, and keep key decisions visible.",
          "After release, look at how people use the product and where they need help. Combine that observation with direct conversations. The next step may be to refine the experience, change the scope, or revisit the underlying idea.",
        ],
      },
    ],
    takeaways: [
      "An MVP is an instrument for learning, not a feature checklist.",
      "Deliver one complete, useful user journey before adding breadth.",
      "Let real feedback shape the roadmap and technical investment.",
    ],
    related: ["importance-of-user-experience", "effective-business-websites", "choosing-a-technology-stack"],
  },
  {
    slug: "effective-business-websites",
    title: "What Makes a Business Website Effective in 2026?",
    category: "Web & Software Development",
    summary: "A useful business website makes the right information easy to find and the next step easy to take.",
    introduction: "A business website is often where a potential customer first tries to understand what an organization does. Its effectiveness depends less on visual novelty than on how clearly it answers that visitor’s questions.",
    keywords: ["web development", "business website", "accessibility", "performance", "content"],
    visual: "website",
    sections: [
      {
        title: "Make the purpose clear quickly",
        paragraphs: [
          "A visitor should be able to tell who the business serves, what it offers, and what they can do next. Use a direct opening message, useful page titles, and navigation that reflects the questions people actually bring.",
          "Organize supporting content around decisions. Explain services in plain language, provide relevant details, and make contact routes visible. Avoid making a visitor decode internal team names or search through several pages for a basic answer.",
        ],
      },
      {
        title: "Treat usability as part of the brand",
        paragraphs: [
          "Readable type, strong contrast, keyboard access, and layouts that work on small screens are part of a professional experience. They help more people use the site and reduce friction in important journeys.",
          "Performance matters too. Use appropriately sized media, limit unnecessary scripts, and test pages on slower connections. A considered visual system can still feel distinctive without making each page heavy or difficult to navigate.",
        ],
        list: [
          "Check the main journey on a phone as well as a large screen.",
          "Use meaningful headings, accessible controls, and descriptive links.",
          "Review content and technical health as ongoing responsibilities.",
        ],
      },
      {
        title: "Keep it useful after launch",
        paragraphs: [
          "A website changes as services, audiences, and business priorities change. Make ownership clear for content updates, form checks, software maintenance, and accessibility reviews.",
          "Use questions from sales and support conversations to identify where the site needs clarification. Improve the pages that matter to users rather than adding content just to make the site larger.",
        ],
      },
    ],
    takeaways: [
      "Explain the offer and the next step in language visitors understand.",
      "Design for accessibility, mobile use, and performance together.",
      "Keep content and technical maintenance part of the plan.",
    ],
    related: ["importance-of-user-experience", "building-an-mvp", "digital-transformation"],
  },
  {
    slug: "choosing-a-technology-stack",
    title: "Choosing the Right Technology Stack for a Growing Startup",
    category: "Web & Software Development",
    summary: "A decision framework for selecting technologies that fit a product, its team, and its likely next steps.",
    introduction: "Choosing a technology stack can feel like predicting every future requirement. A more dependable approach is to choose a well-understood foundation that supports the product’s near-term needs and can be maintained by the people responsible for it.",
    keywords: ["technology stack", "startups", "software architecture", "engineering", "scalability"],
    visual: "stack",
    sections: [
      {
        title: "Start with constraints and capabilities",
        paragraphs: [
          "Clarify the product’s core interactions, integrations, data needs, delivery environment, and any security or regulatory obligations. Consider who will build and operate the system, what they already know, and what support is available.",
          "These details narrow the field more usefully than a generic list of popular tools. A technology is only a good fit when it serves the product and the team can use it responsibly.",
        ],
      },
      {
        title: "Prefer clarity over speculative scale",
        paragraphs: [
          "Early products benefit from a simple architecture with clear boundaries. Keep the system easy to deploy, observe, and change. Add complexity when a specific requirement justifies it, rather than adopting it because growth might eventually demand it.",
          "Look at the whole lifecycle: documentation, testing, dependency updates, deployment, monitoring, and recovery. The everyday cost of maintaining a stack is as important as the initial implementation.",
        ],
        list: [
          "Check ecosystem maturity, documentation, and long-term maintenance.",
          "Evaluate hosting, integration, and operational needs together.",
          "Record the important trade-offs and revisit them as evidence changes.",
        ],
      },
      {
        title: "Keep decisions revisitable",
        paragraphs: [
          "A good decision does not need to be permanent. Isolate components where change is plausible, use well-defined interfaces, and avoid coupling the entire product to a single uncertain assumption.",
          "Review architecture when usage, team skills, or product needs materially change. Make that review evidence-led: a concrete bottleneck or operational challenge is a better reason to change course than fear of future scale.",
        ],
      },
    ],
    takeaways: [
      "Choose for the product and team you have, not a hypothetical company.",
      "Account for operations and maintenance from the beginning.",
      "Keep architecture understandable and revisit it when evidence warrants.",
    ],
    related: ["building-an-mvp", "custom-software-workflows", "digital-transformation"],
  },
  {
    slug: "importance-of-user-experience",
    title: "Why User Experience Matters in Modern Software",
    category: "UI/UX & Design",
    summary: "Good UX connects interface decisions to the real goals, context, and confidence of the people using software.",
    introduction: "A feature can work as specified and still be difficult to use. User experience design helps teams understand the gap between what a system can do and what people need to accomplish with it.",
    keywords: ["user experience", "UX", "product design", "usability", "accessibility"],
    visual: "experience",
    sections: [
      {
        title: "Understand the user’s context",
        paragraphs: [
          "People use software with different levels of familiarity, time, attention, and access. Learn what they are trying to do, what information they have, and what constraints shape the moment they use the product.",
          "Interviews, workflow observation, support questions, and lightweight prototypes can expose assumptions early. The objective is not to gather research for its own sake; it is to make better product decisions.",
        ],
      },
      {
        title: "Design the whole interaction",
        paragraphs: [
          "A clear experience helps users understand where they are, what will happen next, and whether an action succeeded. Labels, feedback, sensible defaults, and recovery paths all contribute to that confidence.",
          "Consistency across screens reduces relearning, while accessibility makes interaction possible through different devices and input methods. These qualities should be considered alongside visual craft and engineering constraints.",
        ],
        list: [
          "Test realistic tasks, not just individual screens.",
          "Make system status, errors, and next steps easy to understand.",
          "Include accessibility checks in design and implementation reviews.",
        ],
      },
      {
        title: "Use feedback to keep improving",
        paragraphs: [
          "Usability does not end at launch. Review where users hesitate, abandon a task, or ask for help. Combine product observations with direct feedback and prioritize fixes that remove genuine barriers.",
          "A shared design and engineering process makes those improvements easier to deliver. Teams can resolve questions early and keep the interface, behavior, and underlying system aligned.",
        ],
      },
    ],
    takeaways: [
      "Design around user goals and the context in which software is used.",
      "Treat accessibility and clear feedback as core product behavior.",
      "Keep learning from real tasks after the first release.",
    ],
    related: ["effective-business-websites", "building-an-mvp", "custom-software-workflows"],
  },
  {
    slug: "custom-software-workflows",
    title: "How Custom Software Can Improve Business Workflows",
    category: "Business & Digital Transformation",
    summary: "A careful way to decide when tailored software can connect a process that off-the-shelf tools do not serve well.",
    introduction: "Custom software is most useful when a business has a clear workflow problem that existing tools cannot address cleanly. The first step is understanding the work, not assuming a new application is always the answer.",
    keywords: ["custom software", "business workflows", "integration", "process design", "operations"],
    visual: "software",
    sections: [
      {
        title: "Map the current process",
        paragraphs: [
          "Follow a real piece of work from request to completion. Identify who handles each step, what information moves between tools, where decisions happen, and where handoffs or repeated entry create confusion.",
          "Distinguish a software limitation from an unclear or outdated process. Sometimes the best improvement is a simpler procedure, a better configuration of an existing product, or an integration rather than a custom platform.",
        ],
      },
      {
        title: "Shape the system around actual needs",
        paragraphs: [
          "When tailored software is appropriate, prioritize the workflows that matter most. Bring users into design reviews, make roles and permissions explicit, and plan how the new system will work with existing data and services.",
          "A focused first release can connect the most valuable parts of a process while leaving room for later improvements. Clear interfaces and documentation help the system remain understandable as teams and responsibilities change.",
        ],
        list: [
          "Document the current workflow before proposing a digital one.",
          "Check integrations, data ownership, and access needs early.",
          "Deliver the smallest complete workflow that improves the experience.",
        ],
      },
      {
        title: "Plan for adoption and ownership",
        paragraphs: [
          "Software only supports a business when people can use it in their daily work. Include onboarding, clear language, support routes, and a way to report problems as part of delivery.",
          "Assign responsibility for maintenance, security updates, and future changes. A system that is useful today should also be supportable by the organization that depends on it.",
        ],
      },
    ],
    takeaways: [
      "Understand the process before deciding whether custom development is needed.",
      "Design around users, integrations, and data responsibilities.",
      "Treat adoption and ongoing ownership as part of the solution.",
    ],
    related: ["digital-transformation", "choosing-a-technology-stack", "ai-automation-business-operations"],
  },
  {
    slug: "3d-digital-experiences",
    title: "The Role of 3D Experiences in Modern Digital Design",
    category: "3D & Creative Technology",
    summary: "Where interactive 3D can add context and depth—and how to keep it useful, accessible, and performant.",
    introduction: "Three-dimensional visuals can help people explore a product, understand spatial relationships, or experience a story. They work best when their purpose is clear and the experience remains usable without unnecessary friction.",
    keywords: ["3D", "creative technology", "interactive design", "WebGL", "performance"],
    visual: "three-d",
    sections: [
      {
        title: "Give the dimension a job",
        paragraphs: [
          "Start with what a visitor needs to understand. A model that can be rotated may help explain a product’s construction; a spatial scene may support a creative narrative. If 3D does not make the information clearer or the interaction more meaningful, a simpler visual may be better.",
          "Keep controls discoverable and provide context around the scene. Clear labels, helpful framing, and a way to reset the view help people explore without feeling lost.",
        ],
      },
      {
        title: "Design for different devices",
        paragraphs: [
          "Real-time graphics have a cost. Consider asset complexity, loading behavior, input methods, and device capability. Optimize geometry and textures, load visual assets thoughtfully, and test with touch and keyboard as well as a pointer.",
          "Offer a lightweight alternative where appropriate. Essential information should remain available if a device cannot render the scene or a visitor prefers reduced motion.",
        ],
        list: [
          "Connect every 3D interaction to a clear user purpose.",
          "Optimize assets and test on a range of devices.",
          "Keep key information accessible outside the 3D scene.",
        ],
      },
      {
        title: "Balance atmosphere with clarity",
        paragraphs: [
          "Motion, lighting, and depth can create a distinctive tone, but they should not compete with important content. Keep contrast and text legibility strong, and make motion restrained and respectful of user preferences.",
          "A considered 3D experience combines art direction with practical engineering. Collaboration between designers and developers helps the final result feel intentional while remaining responsive and maintainable.",
        ],
      },
    ],
    takeaways: [
      "Use 3D when depth or interaction adds real understanding.",
      "Plan performance, accessibility, and alternatives from the start.",
      "Keep visual effects in service of content and user goals.",
    ],
    related: ["importance-of-user-experience", "effective-business-websites", "building-an-mvp"],
  },
  {
    slug: "digital-transformation",
    title: "From Manual Processes to Connected Digital Systems",
    category: "Business & Digital Transformation",
    summary: "A grounded approach to improving operations by connecting tools, information, and people around the work.",
    introduction: "Digital transformation is not a single software purchase. It is a series of decisions about how work happens, how information flows, and what support people need as systems change.",
    keywords: ["digital transformation", "business systems", "automation", "integration", "change"],
    visual: "transformation",
    sections: [
      {
        title: "Find the friction worth addressing",
        paragraphs: [
          "Look for repeated manual entry, information that is difficult to find, unclear ownership, and handoffs that interrupt work. Ask the people closest to each process what slows them down and what must remain reliable.",
          "Set a clear outcome for improvement. It might be more consistent information, easier access to a service, or a more understandable workflow. Avoid treating digitization alone as proof that the underlying problem has been solved.",
        ],
      },
      {
        title: "Connect systems deliberately",
        paragraphs: [
          "Before choosing an integration or platform, understand where data originates, who is allowed to use it, and which system should be authoritative. Plan for errors, access, and changes to connected tools.",
          "A phased approach can reduce disruption. Pilot a well-bounded process, document how it works, and give users a chance to identify gaps before extending the change to other teams or workflows.",
        ],
        list: [
          "Map people, tools, data, and handoffs in the current process.",
          "Define responsibilities and fallback behavior for integrations.",
          "Introduce change in reviewable steps with user feedback.",
        ],
      },
      {
        title: "Make change sustainable",
        paragraphs: [
          "New systems require communication, training, and a route for support. Explain what is changing, what stays the same, and where people can get help. Involve users in testing so the system reflects practical needs.",
          "Assign ongoing ownership for security, maintenance, and process review. A connected system should be adaptable without losing sight of data quality, privacy, and the people who rely on it.",
        ],
      },
    ],
    takeaways: [
      "Start with a defined operational challenge, not a technology purchase.",
      "Make data ownership, integration behavior, and access clear.",
      "Plan for people, support, and continuous improvement alongside delivery.",
    ],
    related: ["custom-software-workflows", "ai-automation-business-operations", "choosing-a-technology-stack"],
  },
];
