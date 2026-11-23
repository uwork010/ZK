import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  Layers3,
  Palette,
  PanelsTopLeft,
  PenTool,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Workflow,
  Users,
  type LucideIcon,
} from "lucide-react";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeWhatsApp from "@/components/sections/HomeWhatsApp";

const services: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: LucideIcon;
  visual: string;
  accent: string;
}[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern business websites, web applications, e-commerce experiences, SaaS interfaces, dashboards, and custom web platforms.",
    tags: ["Web platforms", "SaaS", "E-commerce"],
    href: "/services/web-development",
    icon: Code2,
    visual: "Responsive interfaces",
    accent: "text-violet-200 border-violet-300/20 bg-violet-300/10",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description: "Cross-platform and native mobile applications designed around real user and business needs.",
    tags: ["iOS & Android", "Flutter", "React Native"],
    href: "/services/mobile-app-development",
    icon: Smartphone,
    visual: "Apps made for people",
    accent: "text-rose-200 border-rose-300/20 bg-rose-300/10",
  },
  {
    number: "03",
    title: "AI & Automation",
    description: "AI assistants, intelligent workflows, automation systems, integrations, and practical AI-powered business tools.",
    tags: ["AI assistants", "Workflows", "Integrations"],
    href: "/services/ai-automation",
    icon: Bot,
    visual: "Intelligence in context",
    accent: "text-amber-100 border-amber-200/20 bg-amber-200/10",
  },
  {
    number: "04",
    title: "Custom Software Development",
    description: "Tailored software systems, internal platforms, dashboards, portals, and business applications.",
    tags: ["Internal tools", "Portals", "Platforms"],
    href: "/services/custom-software-development",
    icon: PanelsTopLeft,
    visual: "Systems shaped to fit",
    accent: "text-fuchsia-200 border-fuchsia-300/20 bg-fuchsia-300/10",
  },
  {
    number: "05",
    title: "UI/UX & Product Design",
    description: "User research, product strategy, wireframes, prototypes, interfaces, and scalable design systems.",
    tags: ["Research", "Prototypes", "Design systems"],
    href: "/services/ui-ux-product-design",
    icon: PenTool,
    visual: "Clarity in every detail",
    accent: "text-orange-100 border-orange-200/20 bg-orange-200/10",
  },
  {
    number: "06",
    title: "Game Development",
    description: "2D, 3D, interactive, immersive, and game experiences built for modern platforms.",
    tags: ["2D / 3D", "Interactive", "Immersive"],
    href: "/services/game-development",
    icon: Gamepad2,
    visual: "Worlds worth exploring",
    accent: "text-violet-200 border-violet-300/20 bg-violet-300/10",
  },
];

const work = [
  {
    title: "SaaS Operations Platform",
    category: "Custom Software",
    description: "A modern operations dashboard concept for managing teams, workflows, analytics, and business processes.",
    services: ["Product Strategy", "UI/UX Design", "Web Development", "Dashboard Development"],
    technologies: ["React", "TypeScript", "Supabase"],
    visual: "operations",
  },
  {
    title: "AI Customer Assistant",
    category: "AI & Automation",
    description: "A conversational AI assistant concept designed to help businesses automate customer support and common service workflows.",
    services: ["AI Development", "Automation", "API Integration", "UX Design"],
    technologies: ["OpenAI API", "React", "Node.js"],
    visual: "assistant",
  },
  {
    title: "Mobile Marketplace App",
    category: "Mobile Development",
    description: "A marketplace app concept connecting customers and service providers through booking, messaging, and digital workflows.",
    services: ["Product Planning", "Mobile Development", "UI/UX Design", "Backend Integration"],
    technologies: ["Flutter", "Supabase", "APIs"],
    visual: "marketplace",
  },
  {
    title: "3D Product Campaign",
    category: "Creative Production",
    description: "A premium product visualization concept combining 3D rendering, motion, and digital advertising assets.",
    services: ["3D Modeling", "Rendering", "Motion Graphics", "Creative Direction"],
    technologies: ["Blender", "After Effects", "Photoshop"],
    visual: "campaign",
  },
];

const processSteps = [
  { title: "Discover", description: "Understand the business, users, goals, challenges, and project requirements.", icon: Sparkles },
  { title: "Plan", description: "Define scope, priorities, technical direction, timeline, and product roadmap.", icon: Layers3 },
  { title: "Design", description: "Create user flows, wireframes, interfaces, prototypes, and visual systems.", icon: Palette },
  { title: "Build", description: "Develop the product using modern, scalable technologies and clean architecture.", icon: Code2 },
  { title: "Test", description: "Validate functionality, usability, responsiveness, performance, and quality.", icon: ShieldCheck },
  { title: "Launch", description: "Prepare deployment, production environments, final checks, and release.", icon: ArrowUpRight },
  { title: "Improve", description: "Monitor, maintain, optimize, and continue improving the product after launch.", icon: Workflow },
];

const technologyGroups: { title: string; items: string[]; icon: LucideIcon; motif: string[] }[] = [
  { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Next.js"], icon: Braces, motif: ["</>", "UI", "01"] },
  { title: "Backend", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Firebase"], icon: Database, motif: ["API", "DB", "LINK"] },
  { title: "Mobile", items: ["Flutter", "React Native", "iOS", "Android"], icon: Smartphone, motif: ["iOS", "LINK", "AND"] },
  { title: "AI & Automation", items: ["OpenAI", "LLM APIs", "AI Assistants", "Workflow Automation", "Document Processing"], icon: Bot, motif: ["AI", "FLOW", "LLM"] },
  { title: "Games & Immersive", items: ["Unity", "Unreal Engine", "2D / 3D", "AR / VR"], icon: Gamepad2, motif: ["3D", "AR", "VR"] },
  { title: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD"], icon: Cloud, motif: ["CLI", "PIPE", "CLOUD"] },
  { title: "Testing & QA", items: ["Playwright", "Cypress", "Selenium", "API Testing", "Performance Testing"], icon: ShieldCheck, motif: ["PASS", "QA", "API"] },
  { title: "Design & Creative", items: ["Figma", "Blender", "Photoshop", "Illustrator", "After Effects"], icon: Palette, motif: ["ART", "3D", "FX"] },
];

const premiumPanelClasses = "border border-violet-100/[0.11] bg-[linear-gradient(145deg,rgba(28,26,39,0.94),rgba(9,14,25,0.96)_56%,rgba(20,14,28,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_20px_45px_rgba(0,0,0,0.34)] backdrop-blur-[10px]";

function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description: string }) {
  return (
    <header className="mb-8 px-5 sm:mb-10 sm:px-8 lg:px-12">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">
        <span className="h-px w-7 bg-secondary" />{eyebrow}
      </p>
      <h2 id={id} className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">{description}</p>
    </header>
  );
}

function ServiceArtwork({ icon: Icon, visual, accent }: { icon: LucideIcon; visual: string; accent: string }) {
  return (
    <div className="home-service-art group/art relative -mx-5 -mt-5 mb-1 h-32 overflow-hidden rounded-t-2xl border-b border-white/[0.09] sm:-mx-6 sm:-mt-6 sm:h-36" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_18%,rgba(139,108,255,0.15),transparent_42%),radial-gradient(ellipse_at_86%_90%,rgba(231,102,168,0.11),transparent_38%),linear-gradient(140deg,rgba(25,25,39,0.94),rgba(8,14,24,0.98)_70%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -right-8 -top-12 size-32 rounded-full border border-primary-light/[0.12] transition-transform duration-500 group-hover/art:translate-x-1 group-hover/art:translate-y-1" />

      {visual === "Responsive interfaces" && (
        <>
          <div className="absolute left-[12%] top-5 w-[60%] -rotate-2 overflow-hidden rounded-lg border border-white/15 bg-[#0b101b]/90 shadow-[0_12px_30px_rgba(0,0,0,0.42)] transition-transform duration-500 group-hover/art:-translate-y-1">
            <div className="flex h-5 items-center gap-1 border-b border-white/10 px-2"><i className="size-1.5 rounded-full bg-rose-300/70" /><i className="size-1.5 rounded-full bg-amber-200/70" /><i className="size-1.5 rounded-full bg-emerald-200/60" /><span className="ml-2 h-1 w-12 rounded-full bg-white/10" /></div>
            <div className="grid grid-cols-[28px_1fr] gap-2 p-2.5"><div className="space-y-1.5">{[1, 2, 3].map((line) => <i key={line} className="block h-1 rounded-full bg-primary-light/20" />)}</div><div className="space-y-1.5"><i className="block h-2 w-2/3 rounded bg-white/15" /><i className="block h-1 w-full rounded bg-white/[0.07]" /><i className="block h-1 w-4/5 rounded bg-secondary/25" /></div></div>
          </div>
          <div className="absolute right-[14%] top-8 w-12 rotate-[7deg] rounded-lg border border-primary-light/20 bg-[#11131f]/95 p-1.5 shadow-xl transition-transform duration-500 group-hover/art:translate-x-1">
            <div className="h-1 rounded-full bg-primary-light/45" /><div className="mt-1.5 space-y-1"><i className="block h-4 rounded bg-white/[0.07]" /><i className="block h-1 rounded bg-white/10" /></div>
          </div>
          <span className="absolute bottom-3 right-5 flex size-8 items-center justify-center rounded-lg border border-primary-light/20 bg-primary/10 text-primary-light"><Icon size={15} /></span>
        </>
      )}

      {visual === "Apps made for people" && (
        <>
          <div className="absolute left-[26%] top-3 h-28 w-[18%] min-w-10 rotate-[-9deg] rounded-[14px] border border-white/15 bg-[#111522] p-1.5 shadow-xl transition-transform duration-500 group-hover/art:-translate-y-1"><div className="h-full rounded-[9px] bg-[linear-gradient(160deg,rgba(231,102,168,0.16),rgba(139,108,255,0.08)_45%,rgba(8,14,24,0.95))] p-1.5"><i className="mx-auto block h-1 w-4 rounded bg-white/20" /><i className="mt-4 block h-5 rounded-md border border-white/10 bg-white/[0.05]" /><i className="mt-2 block h-1 rounded bg-white/10" /><i className="mt-1 block h-1 w-2/3 rounded bg-primary-light/30" /></div></div>
          <div className="absolute left-[43%] top-1 h-30 w-[20%] min-w-12 rotate-[4deg] rounded-[16px] border border-primary-light/25 bg-[#121522] p-1.5 shadow-[0_10px_32px_rgba(139,108,255,0.18)] transition-transform duration-500 group-hover/art:-translate-y-1"><div className="h-full rounded-[11px] bg-[linear-gradient(160deg,rgba(139,108,255,0.18),rgba(14,18,30,0.96)_50%,rgba(231,102,168,0.1))] p-2"><i className="mx-auto block h-1 w-4 rounded bg-white/25" /><span className="mt-4 grid size-6 place-items-center rounded-lg bg-secondary/15 text-rose-100/70"><Icon size={13} /></span><i className="mt-2 block h-1 w-full rounded bg-white/15" /><i className="mt-1 block h-1 w-2/3 rounded bg-white/10" /></div></div>
          <div className="absolute left-[61%] top-5 h-24 w-[17%] min-w-10 rotate-[11deg] rounded-[13px] border border-white/15 bg-[#101521] p-1.5 shadow-xl transition-transform duration-500 group-hover/art:translate-y-1"><div className="h-full rounded-[9px] bg-[linear-gradient(150deg,rgba(243,163,107,0.13),rgba(12,18,28,0.96))] p-2"><i className="mt-4 block h-4 rounded-md bg-white/[0.06]" /><i className="mt-2 block h-1 rounded bg-white/15" /></div></div>
        </>
      )}

      {visual === "Intelligence in context" && (
        <>
          <div className="absolute left-[18%] top-[52%] h-px w-[58%] -rotate-[12deg] bg-gradient-to-r from-secondary/10 via-primary-light/50 to-nebula-warm/10" />
          <div className="absolute left-[34%] top-[46%] h-px w-[40%] rotate-[18deg] bg-gradient-to-r from-primary-light/10 via-secondary/45 to-primary-light/10" />
          <div className="absolute left-[52%] top-[25%] h-12 w-px rotate-[18deg] bg-gradient-to-b from-transparent via-primary-light/40 to-transparent" />
          <span className="absolute left-[18%] top-[40%] size-3 rounded-full border border-secondary/50 bg-[#211827] shadow-[0_0_14px_rgba(231,102,168,0.25)]" />
          <span className="absolute left-[36%] top-[31%] size-2 rounded-full bg-primary-light/80 shadow-[0_0_14px_rgba(185,169,255,0.28)]" />
          <span className="absolute left-[51%] top-[50%] size-4 rounded-full border border-primary-light/45 bg-primary/30 shadow-[0_0_20px_rgba(139,108,255,0.2)]" />
          <span className="absolute left-[69%] top-[25%] size-2.5 rounded-full bg-nebula-warm/80" />
          <span className="absolute left-[77%] top-[63%] size-3 rounded-full border border-secondary/50 bg-secondary/20" />
          <span className="absolute right-[10%] bottom-3 flex size-8 items-center justify-center rounded-lg border border-amber-100/15 bg-amber-100/[0.06] text-amber-100/80"><Icon size={15} /></span>
          <p className="absolute bottom-4 left-5 text-[9px] font-medium uppercase tracking-[0.16em] text-text-label">Signals into useful actions</p>
        </>
      )}

      {visual === "Systems shaped to fit" && (
        <>
          <div className="absolute left-[15%] top-5 grid grid-cols-3 gap-1.5 transition-transform duration-500 group-hover/art:translate-y-[-2px]">
            <i className="size-8 rounded-md border border-primary-light/20 bg-primary-light/[0.08]" /><i className="size-8 rounded-md border border-white/10 bg-white/[0.04]" /><i className="size-8 rounded-md border border-secondary/20 bg-secondary/[0.08]" />
            <i className="col-span-2 h-7 rounded-md border border-white/10 bg-white/[0.035]" /><i className="size-7 rounded-md border border-amber-100/20 bg-amber-100/[0.07]" />
          </div>
          <div className="absolute right-[16%] top-7 w-[30%] rounded-lg border border-white/15 bg-[#0d1420]/90 p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover/art:translate-x-1">
            <div className="flex items-center gap-1.5"><Icon size={12} className="text-primary-light" /><i className="h-1 w-12 rounded bg-white/15" /></div><i className="mt-3 block h-1 w-full rounded bg-white/10" /><i className="mt-1.5 block h-1 w-3/4 rounded bg-primary-light/30" />
          </div>
          <span className="absolute bottom-3 left-[46%] h-px w-16 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        </>
      )}

      {visual === "Clarity in every detail" && (
        <>
          <div className="absolute left-[16%] top-5 h-20 w-[34%] rotate-[-5deg] rounded-md border border-white/15 bg-[#0c1421]/80 p-2 shadow-lg transition-transform duration-500 group-hover/art:-translate-y-1"><div className="grid h-full grid-cols-3 gap-1"><i className="rounded border border-primary-light/20 bg-primary-light/[0.08]" /><i className="col-span-2 rounded border border-white/10 bg-white/[0.035]" /><i className="col-span-2 rounded border border-secondary/20 bg-secondary/[0.08]" /><i className="rounded border border-white/10 bg-white/[0.06]" /></div></div>
          <div className="absolute right-[18%] top-7 flex rotate-[5deg] gap-1.5 rounded-lg border border-white/15 bg-[#111520]/90 p-2.5 shadow-xl transition-transform duration-500 group-hover/art:translate-y-1"><i className="size-5 rounded-full bg-primary-light/70" /><i className="size-5 rounded-full bg-secondary/70" /><i className="size-5 rounded-full bg-nebula-warm/70" /><span className="ml-1 flex items-center text-primary-light/70"><Icon size={14} /></span></div>
          <span className="absolute bottom-4 left-[20%] h-px w-32 bg-gradient-to-r from-primary-light/40 via-white/10 to-transparent" />
        </>
      )}

      {visual === "Worlds worth exploring" && (
        <>
          <div className="absolute left-[32%] top-4 size-24 rotate-45 border border-primary-light/25 bg-[linear-gradient(145deg,rgba(185,169,255,0.18),rgba(231,102,168,0.07)_55%,rgba(8,14,24,0.4))] shadow-[inset_0_0_18px_rgba(185,169,255,0.1),0_14px_26px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover/art:rotate-[50deg]" />
          <div className="absolute left-[42%] top-10 size-12 -rotate-12 rounded-xl border border-white/20 bg-white/[0.045] backdrop-blur-sm" />
          <div className="absolute left-[24%] top-12 flex h-10 w-20 items-center justify-center gap-2 rounded-full border border-white/15 bg-[#101521]/90 shadow-xl transition-transform duration-500 group-hover/art:-translate-y-1"><span className="size-3 rounded-full border border-primary-light/60" /><span className="size-1.5 rounded-full bg-secondary/80" /><span className="size-1.5 rounded-full bg-nebula-warm/80" /><Icon size={15} className="ml-1 text-primary-light" /></div>
          <span className="absolute right-[10%] bottom-4 h-px w-12 rotate-[-24deg] bg-secondary/45" />
        </>
      )}

      <p className="absolute bottom-3 left-4 text-[9px] font-medium uppercase tracking-[0.15em] text-text-label">{visual}</p>
      <span className={`absolute bottom-2 right-3 flex size-7 items-center justify-center rounded-lg border ${accent}`}><Icon size={13} /></span>
    </div>
  );
}

function ProjectPreview({ type }: { type: string }) {
  if (type === "operations") {
    return (
      <div className="relative flex h-36 items-stretch gap-3 overflow-hidden border-b border-white/[0.09] bg-[radial-gradient(ellipse_at_78%_15%,rgba(139,108,255,0.16),transparent_35%),linear-gradient(145deg,rgba(24,24,39,0.98),rgba(7,13,23,0.99)_70%)] px-4 py-4 sm:h-40 sm:px-5">
        <div className="flex w-8 shrink-0 flex-col items-center gap-3 border-r border-white/[0.08] pr-2 pt-1 text-text-muted" aria-hidden="true">
          <PanelsTopLeft size={14} className="text-primary-light/80" /><Layers3 size={14} /><Users size={14} />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-center justify-between gap-3"><p className="truncate text-[9px] font-medium text-text-secondary sm:text-[10px]">Operations workspace</p><span className="rounded-full border border-primary-light/15 bg-primary/[0.06] px-1.5 py-0.5 text-[7px] text-primary-light/75">DEMO</span></div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">{["Teams", "Workflows", "Queue"].map((label, index) => <div key={label} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-1.5 py-1"><span className="block truncate text-[7px] text-text-label">{label}</span><span className={`mt-1 block h-1 rounded-full ${index === 1 ? "bg-secondary/45" : "bg-primary-light/35"}`} style={{ width: `${index === 0 ? 72 : index === 1 ? 48 : 60}%` }} /></div>)}</div>
          <div className="mt-2 flex h-8 items-end gap-1 border-b border-l border-white/[0.08] px-1" aria-hidden="true">{[35, 58, 43, 78, 54, 92, 66, 84, 48, 72, 57, 88].map((height, index) => <i key={index} className={`flex-1 rounded-t-[2px] ${index === 5 ? "bg-secondary/55" : "bg-primary-light/35"}`} style={{ height: `${height}%` }} />)}</div>
        </div>
        <div className="absolute bottom-3 right-4 flex size-7 items-center justify-center rounded-lg border border-primary-light/20 bg-primary/[0.08] text-primary-light/80"><Workflow size={14} strokeWidth={1.4} /></div>
      </div>
    );
  }
  if (type === "assistant") {
    return (
      <div className="relative flex h-36 flex-col justify-center gap-2 overflow-hidden border-b border-white/[0.09] bg-[radial-gradient(ellipse_at_18%_20%,rgba(231,102,168,0.12),transparent_36%),linear-gradient(145deg,rgba(23,22,37,0.98),rgba(8,14,24,0.99)_68%)] px-5 sm:h-40">
        <div className="absolute right-5 top-4 size-20 rounded-full border border-primary-light/[0.08]" /><div className="absolute right-10 top-9 size-10 rounded-full border border-secondary/[0.12]" />
        <div className="relative flex items-center gap-2 text-[9px] text-text-label"><span className="flex size-6 items-center justify-center rounded-lg border border-primary-light/20 bg-primary/[0.08] text-primary-light"><Bot size={13} /></span><span>Assistant session</span><i className="ml-auto size-1.5 rounded-full bg-emerald-200/70" /></div>
        <div className="relative w-fit max-w-[78%] rounded-r-lg rounded-bl-lg border border-white/[0.09] bg-white/[0.04] px-3 py-2 text-[9px] leading-4 text-text-secondary">How can I help with your order today?</div>
        <div className="relative ml-auto w-fit max-w-[75%] rounded-l-lg rounded-br-lg border border-secondary/20 bg-secondary/[0.08] px-3 py-2 text-[9px] leading-4 text-rose-100/80">I need to update my delivery details.</div>
        <div className="relative flex items-center gap-1.5 text-[7px] uppercase tracking-[0.12em] text-primary-light/60"><span className="size-1 rounded-full bg-secondary/80" />Guided response flow</div>
      </div>
    );
  }
  if (type === "marketplace") {
    return (
      <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-white/[0.09] bg-[radial-gradient(ellipse_at_55%_80%,rgba(231,102,168,0.12),transparent_36%),linear-gradient(145deg,rgba(26,24,39,0.98),rgba(8,14,24,0.99)_72%)] sm:h-40">
        <div className="absolute left-[17%] top-7 h-24 w-20 -rotate-[10deg] rounded-xl border border-white/15 bg-[#121724]/95 p-2 shadow-xl transition-transform duration-500 group-hover:-translate-y-1"><div className="h-9 rounded-lg border border-primary-light/15 bg-[linear-gradient(135deg,rgba(139,108,255,0.2),rgba(231,102,168,0.1))]" /><i className="mt-2 block h-1 w-3/4 rounded bg-white/15" /><i className="mt-1.5 block h-1 w-1/2 rounded bg-white/10" /></div>
        <div className="relative z-10 h-28 w-[72px] rounded-[15px] border border-primary-light/30 bg-[#0d1420] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.48)] transition-transform duration-500 group-hover:-translate-y-1"><div className="h-full rounded-[10px] bg-[linear-gradient(160deg,rgba(139,108,255,0.16),rgba(11,17,28,0.96)_50%,rgba(231,102,168,0.1))] p-2"><div className="flex items-center justify-between"><ShoppingBag size={11} className="text-primary-light" /><i className="size-2 rounded-full bg-secondary/70" /></div><i className="mt-3 block h-8 rounded-md border border-white/10 bg-white/[0.04]" /><i className="mt-2 block h-1 rounded bg-white/15" /><i className="mt-1 block h-1 w-2/3 rounded bg-white/10" /></div></div>
        <div className="absolute right-[17%] top-7 h-24 w-20 rotate-[10deg] rounded-xl border border-white/15 bg-[#121724]/95 p-2 shadow-xl transition-transform duration-500 group-hover:translate-y-1"><div className="h-9 rounded-lg border border-secondary/15 bg-[linear-gradient(135deg,rgba(243,163,107,0.16),rgba(231,102,168,0.12))]" /><i className="mt-2 block h-1 w-3/4 rounded bg-white/15" /><i className="mt-1.5 block h-1 w-1/2 rounded bg-white/10" /></div>
        <span className="absolute bottom-3 right-5 rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[7px] uppercase tracking-[0.13em] text-text-label">Browse · Book · Connect</span>
      </div>
    );
  }
  return (
    <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-white/[0.09] bg-[radial-gradient(ellipse_at_50%_45%,rgba(243,163,107,0.16),transparent_35%),linear-gradient(145deg,rgba(25,23,38,0.98),rgba(8,14,24,0.99)_70%)] sm:h-40">
      <span className="absolute left-[20%] top-6 size-24 rotate-12 rounded-[22px] border border-primary-light/25 bg-[linear-gradient(145deg,rgba(185,169,255,0.2),rgba(231,102,168,0.12)_48%,rgba(243,163,107,0.12))] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_16px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-[17deg]" aria-hidden="true" />
      <span className="absolute left-[32%] top-8 size-20 -rotate-[13deg] rounded-[18px] border border-white/20 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(12,17,28,0.65)_55%,rgba(231,102,168,0.1))] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-transform duration-500 group-hover:-translate-y-1" aria-hidden="true" />
      <span className="absolute right-[23%] top-7 size-24 rotate-[28deg] rounded-full border border-secondary/25 bg-[radial-gradient(circle_at_35%_30%,rgba(255,230,204,0.2),rgba(231,102,168,0.13)_32%,rgba(139,108,255,0.08)_68%,transparent)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_34px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:rotate-[34deg]" aria-hidden="true" />
      <Sparkles size={18} className="relative z-10 text-orange-100/90" aria-hidden="true" />
      <span className="absolute bottom-3 left-5 text-[7px] uppercase tracking-[0.14em] text-text-label">Illustrative render study</span>
    </div>
  );
}

function WorkCard({ project }: { project: (typeof work)[number] }) {
  return (
    <article className={`${premiumPanelClasses} group flex min-h-[390px] flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_25px_54px_rgba(0,0,0,0.42)] sm:min-h-[400px]`}>
      <ProjectPreview type={project.visual} />
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="badge rounded-full border border-primary/20 bg-primary/[0.08] text-[9px] font-semibold uppercase tracking-[0.1em] text-primary-light">SAMPLE / DEMO CONCEPT</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-secondary">{project.category}</span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">{project.description}</p>
        <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-text-label">Services</p>
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5" aria-label={`${project.title} services`}>
          {project.services.map((service) => <li key={service} className="text-[10px] leading-4 text-text-secondary">{service}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-text-label">Technologies</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => <li key={technology} className="rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-text-secondary">{technology}</li>)}
            </ul>
          </div>
          <Link href="/work" aria-label={`View ${project.title} in selected work`} className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary-light transition-colors hover:text-white">
            View Project <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function TechnologyVisual({ icon: Icon, motif }: { icon: LucideIcon; motif: string[] }) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
      <span className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary-light"><Icon size={20} strokeWidth={1.6} /></span>
      <div className="flex items-center gap-2" aria-hidden="true">
        {motif.map((symbol, index) => <span key={symbol} className={`flex size-8 items-center justify-center rounded-lg border text-[9px] font-semibold ${index === 1 ? "border-secondary/20 bg-secondary/[0.07] text-rose-100/80" : "border-white/[0.08] bg-white/[0.025] text-text-secondary"}`}>{symbol}</span>)}
      </div>
    </div>
  );
}

export default function HomeSections() {
  return (
    <>
      <section id="services" aria-labelledby="home-services-title" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
        <SectionHeading id="home-services-title" eyebrow="What We Do" title="Technology, Design, and Creative Expertise" description="Everything you need to take an idea from concept to launch and beyond." />
        <HorizontalShowcase label="Featured services" itemLabel="service" cardClassName="w-[86%] sm:w-[48%] lg:w-[32%]">
          {services.map(({ number, title, description, tags, href, icon, visual, accent }) => (
            <article key={number} className={`${premiumPanelClasses} group flex min-h-[350px] flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_25px_54px_rgba(0,0,0,0.42)] sm:min-h-[340px] sm:p-6`}>
              <ServiceArtwork icon={icon} visual={visual} accent={accent} />
              <p className="mt-4 font-mono text-[10px] text-primary-light">{number}</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-white">{title}</h3>
              <p className="mt-2 flex-1 text-xs leading-5 text-text-secondary sm:text-sm sm:leading-6">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${title} tags`}>
                {tags.map((tag) => <li key={tag} className="rounded-md border border-white/[0.08] px-2 py-1 text-[9px] text-text-secondary">{tag}</li>)}
              </ul>
              <Link href={href} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary-light transition-colors hover:text-white">
                Explore Service <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </HorizontalShowcase>
        <div className="mt-6 px-5 sm:px-8 lg:px-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-light">
            Explore All Services <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="home-work-title" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
        <SectionHeading id="home-work-title" eyebrow="Selected Work" title="Digital Products Built Around Real Business Needs" description="Explore sample project concepts that demonstrate the types of products and creative experiences our team can design and build." />
        <HorizontalShowcase label="Selected work concepts" itemLabel="project" cardClassName="w-[86%] sm:w-[58%] lg:w-[62%]">
          {work.map((project) => <WorkCard key={project.title} project={project} />)}
        </HorizontalShowcase>
        <div className="mt-6 px-5 sm:px-8 lg:px-12">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-primary-light">
            View All Work <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section id="process" aria-labelledby="home-process-title" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
        <SectionHeading id="home-process-title" eyebrow="How We Work" title="From First Conversation to Launch" description="A clear, structured process that keeps strategy, design, development, testing, and delivery aligned from start to finish." />
        <HorizontalShowcase label="Project process" itemLabel="step" cardClassName="w-[86%] sm:w-[48%] lg:w-[32%]">
          {processSteps.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className={`${premiumPanelClasses} flex min-h-[260px] flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 sm:min-h-[250px] sm:p-6`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-primary-light">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={19} strokeWidth={1.6} className="text-secondary" />
              </div>
              <div className="my-6 h-px bg-gradient-to-r from-primary/45 via-secondary/30 to-transparent" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{description}</p>
            </article>
          ))}
        </HorizontalShowcase>
      </section>

      <section id="technologies" aria-labelledby="home-technologies-title" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
        <SectionHeading id="home-technologies-title" eyebrow="Technology Stack" title="Modern Tools for Modern Digital Products" description="We choose technologies based on the product, business goals, performance needs, and long-term scalability." />
        <HorizontalShowcase label="Technology stack" itemLabel="technology group" cardClassName="w-[86%] sm:w-[48%] lg:w-[32%]">
          {technologyGroups.map(({ title, items, icon, motif }) => (
            <article key={title} className={`${premiumPanelClasses} flex min-h-[300px] flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 sm:min-h-[285px] sm:p-6`}>
              <TechnologyVisual icon={icon} motif={motif} />
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {items.map((item) => <li key={item} className="flex items-center gap-1.5 text-xs text-text-secondary"><span className="size-1 rounded-full bg-secondary/80" aria-hidden="true" />{item}</li>)}
              </ul>
            </article>
          ))}
        </HorizontalShowcase>
      </section>

      <section id="faq" aria-labelledby="home-faq-title" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12">
          <header>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light"><span className="h-px w-7 bg-secondary" />FAQ</p>
            <h2 id="home-faq-title" className="mt-4 font-display text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">Questions Before We Start</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary sm:text-base">A few common questions about working with our technology and creative team.</p>
          </header>
          <HomeFAQ />
        </div>
      </section>

      <section id="start-project" aria-labelledby="home-cta-title" className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 border-y border-white/10 bg-gradient-to-r from-primary/[0.07] via-transparent to-secondary/[0.06] py-9 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">CORE &amp; CRAFT</p>
            <h2 id="home-cta-title" className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">Have an Idea? Let’s Build It.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">Tell us about your project and our team will help you turn it into a digital product.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary/85">
              Start a Project <ArrowRight size={15} />
            </Link>
            <a href="mailto:uwork428@gmail.com" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-semibold text-white transition-colors hover:border-secondary/40 hover:text-rose-100">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <HomeWhatsApp />
    </>
  );
}