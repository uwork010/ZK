import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Compass,
  Gamepad2,
  Handshake,
  Layers3,
  Lightbulb,
  Palette,
  PenTool,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const principles: { title: string; description: string; icon: LucideIcon; number: string }[] = [
  {
    title: "Innovation",
    description: "We explore better ways to solve problems and create useful digital experiences.",
    icon: Lightbulb,
    number: "01",
  },
  {
    title: "Collaboration",
    description: "We believe strong results come from clear communication and working closely with clients.",
    icon: Handshake,
    number: "02",
  },
  {
    title: "Quality",
    description: "We value thoughtful design, reliable engineering and attention to detail.",
    icon: BadgeCheck,
    number: "03",
  },
  {
    title: "Growth",
    description: "We build with the future in mind, creating solutions that can evolve alongside businesses.",
    icon: TrendingUp,
    number: "04",
  },
];

const differentiators = [
  "Technology and creative capabilities under one agency",
  "Design-led problem solving",
  "Modern software engineering",
  "Business-focused digital solutions",
  "Responsive and user-centered experiences",
  "Scalable development approaches",
  "Continuous improvement and support",
];

const approach: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "Discover", description: "Understand the business, its objectives, audience and challenges.", icon: Compass },
  { number: "02", title: "Define", description: "Establish project requirements, priorities and direction.", icon: Layers3 },
  { number: "03", title: "Design", description: "Develop the user experience, interface and creative direction.", icon: PenTool },
  { number: "04", title: "Build", description: "Engineer the product using suitable technologies and architecture.", icon: Code2 },
  { number: "05", title: "Test", description: "Validate functionality, usability, responsiveness and quality.", icon: ShieldCheck },
  { number: "06", title: "Launch", description: "Prepare and deliver the digital experience for release.", icon: Rocket },
  { number: "07", title: "Evolve", description: "Improve, maintain and support the product as requirements grow.", icon: RefreshCw },
];

const capabilities: { title: string; href: string; icon: LucideIcon }[] = [
  { title: "Web Development", href: "/services/web-development", icon: Braces },
  { title: "Mobile App Development", href: "/services/mobile-app-development", icon: Smartphone },
  { title: "AI & Automation", href: "/services/ai-automation", icon: Sparkles },
  { title: "Custom Software", href: "/services/custom-software-development", icon: Boxes },
  { title: "UI/UX & Product Design", href: "/services/ui-ux-product-design", icon: PenTool },
  { title: "MVP & Product Development", href: "/services/mvp-product-development", icon: Rocket },
  { title: "Game Development", href: "/services/game-development", icon: Gamepad2 },
  { title: "Quality Assurance", href: "/services/quality-assurance-testing", icon: BadgeCheck },
  { title: "Graphic Design & Branding", href: "/services/graphic-design-branding", icon: Palette },
  { title: "3D & Creative Production", href: "/services/3d-video-creative-production", icon: Sparkles },
  { title: "Cloud & DevOps", href: "/services/cloud-devops-it-solutions", icon: Cloud },
  { title: "Maintenance & Support", href: "/services/maintenance-support", icon: Wrench },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light sm:text-xs">
      <span className="h-px w-8 bg-primary-light/65" />
      {children}
    </p>
  );
}

function HeroArtwork() {
  return (
    <div aria-label="CORE & CRAFT abstract visual" role="img" className="relative mx-auto aspect-[0.95] w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#080f1c]/80 shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_43%,rgba(91,124,255,0.16),transparent_38%),radial-gradient(ellipse_at_38%_75%,rgba(243,163,107,0.08),transparent_42%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="absolute left-1/2 top-[47%] aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out hover:scale-[1.03]">
        <div className="absolute inset-0 rounded-full border border-white/[0.12] [transform:rotateX(67deg)_rotateZ(-24deg)]" />
        <div className="absolute inset-[8%] rounded-full border border-primary-light/20 [transform:rotateX(67deg)_rotateZ(28deg)]" />
        <div className="absolute inset-[17%] rounded-full border border-secondary/20 [transform:rotateX(67deg)_rotateZ(-58deg)]" />
        <div className="absolute inset-[17%] rounded-full bg-[radial-gradient(circle_at_34%_29%,rgba(255,255,255,.42),transparent_7%),radial-gradient(circle_at_36%_32%,rgba(185,169,255,.55),transparent_24%),radial-gradient(circle_at_68%_72%,rgba(91,124,255,.36),transparent_40%),linear-gradient(145deg,#17263e,#080e19_70%)] shadow-[inset_-18px_-20px_40px_rgba(0,0,0,.72),inset_5px_5px_22px_rgba(255,255,255,.12),0_0_70px_rgba(91,124,255,.16)]" />
        <span className="absolute left-[13%] top-[20%] size-2 rounded-full bg-nebula-warm shadow-[0_0_18px_rgba(243,163,107,.9)]" />
        <span className="absolute bottom-[13%] right-[21%] size-1.5 rounded-full bg-primary-light shadow-[0_0_16px_rgba(185,169,255,.9)]" />
      </div>

      <div className="absolute left-[8%] top-[13%] rounded-lg border border-white/[0.12] bg-[#0b1422]/80 px-3 py-2 backdrop-blur-md">
        <span className="block text-[8px] uppercase tracking-[0.16em] text-text-secondary">The practice</span>
        <span className="mt-1 block text-[10px] font-medium text-white sm:text-xs">Ideas into experience</span>
      </div>
      <div className="absolute bottom-[18%] right-[7%] flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#0b1422]/80 px-3 py-2 backdrop-blur-md">
        <span className="flex size-6 items-center justify-center rounded-md border border-primary-light/20 bg-primary-light/[0.08] text-primary-light"><Sparkles size={12} /></span>
        <span className="text-[9px] uppercase tracking-[0.13em] text-text-primary/85">Design · Engineering</span>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/[0.12] pt-4 sm:inset-x-7 sm:bottom-7">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white sm:text-base">CORE <span className="text-primary-light">&amp;</span> CRAFT</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">A connected creative practice</p>
        </div>
        <span className="font-mono text-[9px] text-text-label">01 — 07</span>
      </div>
    </div>
  );
}

function LeadershipArtwork() {
  return (
    <div className="relative isolate flex min-h-[22rem] items-end justify-center overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a1220] sm:min-h-[30rem]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(139,108,255,.2),transparent_42%),radial-gradient(ellipse_at_75%_80%,rgba(243,163,107,.1),transparent_38%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="absolute left-1/2 top-[44%] aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-light/15" />
      <div className="absolute left-1/2 top-[44%] aspect-square w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] [transform:rotateX(67deg)_rotateZ(-26deg)]" />
      <svg viewBox="0 0 360 420" className="relative z-10 w-[88%] max-w-[24rem]" aria-hidden="true">
        <defs>
          <linearGradient id="portrait-glow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#b9a9ff" stopOpacity=".72" />
            <stop offset=".55" stopColor="#5b7cff" stopOpacity=".4" />
            <stop offset="1" stopColor="#f3a36b" stopOpacity=".3" />
          </linearGradient>
          <linearGradient id="portrait-shadow" x1="0" x2="0.9" y1="0" y2="1">
            <stop offset="0" stopColor="#25344c" />
            <stop offset="1" stopColor="#0d1421" />
          </linearGradient>
        </defs>
        <path d="M66 420c7-79 47-120 95-120s88 41 95 120" fill="url(#portrait-glow)" opacity=".38" />
        <path d="M81 420c4-56 34-88 80-88s76 32 80 88" fill="url(#portrait-shadow)" stroke="#b9a9ff" strokeOpacity=".22" />
        <path d="M130 286c6 25 15 38 31 38s25-13 31-38" fill="#121d2c" stroke="#b9a9ff" strokeOpacity=".28" />
        <ellipse cx="180" cy="183" rx="68" ry="84" fill="url(#portrait-shadow)" stroke="#b9a9ff" strokeOpacity=".34" />
        <path d="M113 178c2-68 30-102 75-102 42 0 64 34 61 85-18-9-33-27-40-45-24 28-56 45-96 48Z" fill="#141d2c" stroke="url(#portrait-glow)" strokeOpacity=".72" />
        <path d="M119 181c13 7 28 10 43 9M199 190c14 0 26-4 38-10" fill="none" stroke="#b9a9ff" strokeOpacity=".28" strokeWidth="2" />
        <path d="M149 220c9 7 20 10 31 10s22-3 31-10" fill="none" stroke="#f3a36b" strokeOpacity=".3" strokeWidth="2" />
        <path d="m99 370 39-35 42 40 42-40 39 35" fill="none" stroke="#b9a9ff" strokeOpacity=".19" strokeWidth="1.5" />
      </svg>
      <span className="absolute left-4 top-4 rounded-full border border-white/[0.13] bg-[#080f1c]/70 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-text-secondary backdrop-blur sm:left-5 sm:top-5">Portrait placeholder</span>
      <span className="absolute bottom-4 right-4 font-mono text-[9px] text-text-label sm:bottom-5 sm:right-5">CORE / LEADERSHIP</span>
    </div>
  );
}

export default function AboutOverview() {
  return (
    <main id="main-content" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="atmosphere-about pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl">
        <section aria-labelledby="about-hero-title" className="grid min-h-[calc(100svh-9rem)] items-center gap-10 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20">
          <div className="max-w-2xl">
            <SectionLabel>About CORE &amp; CRAFT</SectionLabel>
            <h1 id="about-hero-title" className="font-display text-[clamp(2.6rem,8vw,5.75rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-white">
              People. Ideas. <span className="text-primary-light">Technology.</span>
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-text-secondary sm:text-2xl">
              We turn ambitious ideas into meaningful digital experiences.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              CORE &amp; CRAFT is a full-service technology and creative agency bringing together engineering, design and innovation to help businesses build, improve and grow through digital solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light hover:text-galaxy-darker">
                Explore Our Services <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.025] px-5 text-sm font-semibold text-white transition-colors hover:border-primary-light/40 hover:bg-white/[0.06]">
                Start a Project <ArrowUpRight size={15} />
              </Link>
            </div>
            <a href="#our-story" className="mt-10 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.17em] text-text-secondary transition-colors hover:text-white">
              Discover our perspective <ArrowDown size={13} />
            </a>
          </div>
          <HeroArtwork />
        </section>

        <section id="our-story" aria-labelledby="story-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>Our story / 01</SectionLabel>
              <h2 id="story-title" className="max-w-lg font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Built Around Ideas. <span className="text-primary-light">Driven by Possibilities.</span>
              </h2>
              <div className="mt-9 flex max-w-sm items-center gap-4 rounded-xl border border-white/[0.09] bg-white/[0.025] p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary-light/20 bg-primary-light/[0.08] text-primary-light"><Sparkles size={18} /></span>
                <div>
                  <p className="text-sm font-semibold text-white">One connected process</p>
                  <p className="mt-1 text-xs leading-5 text-text-secondary">Technology · Design · Problem-solving</p>
                </div>
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-[1fr_0.55fr] sm:gap-9">
              <div className="space-y-5 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                <p>CORE &amp; CRAFT was built around a simple belief: great digital experiences happen when creative thinking and strong engineering work together.</p>
                <p>We bring technology, design and problem-solving into one connected process. From the first idea to the finished digital product, our focus is on creating solutions that are useful, thoughtfully designed and built with purpose.</p>
                <p>Whether developing software platforms, intelligent automation, mobile applications or creative digital experiences, we approach every challenge with curiosity, collaboration and attention to detail.</p>
              </div>
              <div aria-hidden="true" className="relative hidden min-h-64 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1321]/75 sm:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,108,255,.12),transparent_56%)]" />
                <div className="absolute inset-[16%] rounded-full border border-primary-light/20" />
                <div className="absolute inset-[28%] rounded-full border border-white/[0.1] [transform:rotateX(66deg)_rotateZ(34deg)]" />
                <div className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary-light/25 bg-primary/[0.12] shadow-[0_0_38px_rgba(139,108,255,.16)]" />
                <span className="absolute left-[18%] top-[27%] size-2 rounded-full bg-nebula-warm shadow-[0_0_14px_rgba(243,163,107,.8)]" />
                <span className="absolute bottom-[24%] right-[18%] size-1.5 rounded-full bg-primary-light shadow-[0_0_13px_rgba(185,169,255,.8)]" />
                <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.18em] text-text-label">A shared point of view</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="leadership-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <SectionLabel>Leadership / 02</SectionLabel>
              <h2 id="leadership-title" className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Leadership</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-text-secondary">Technology and creative thinking, brought together with purpose.</p>
          </div>
          <article className="grid overflow-hidden rounded-2xl border border-white/[0.09] bg-[linear-gradient(130deg,rgba(21,27,42,.82),rgba(7,14,24,.82))] lg:grid-cols-[0.84fr_1.16fr]">
            <LeadershipArtwork />
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-light">Chief Executive Officer — CORE &amp; CRAFT</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">ZAFFAR KHAN</h3>
              <div className="mt-6 inline-flex self-start items-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.025] px-4 py-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-nebula-warm/25 bg-nebula-warm/[0.08] text-nebula-warm"><span className="font-serif text-lg">C</span></span>
                <span>
                  <span className="block text-[9px] uppercase tracking-[0.15em] text-text-label">Education</span>
                  <span className="mt-1 block text-sm font-medium text-text-primary">Graduate of the University of Cambridge</span>
                </span>
              </div>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                Zaffar Khan leads CORE &amp; CRAFT with a focus on bringing technology, creative thinking and business objectives together. As CEO, he represents the agency’s commitment to purposeful innovation, thoughtful execution and building digital experiences that create value.
              </p>
            </div>
          </article>
        </section>

        <section aria-labelledby="philosophy-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionLabel>Our philosophy / 03</SectionLabel>
              <h2 id="philosophy-title" className="max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">How We Think. <span className="text-primary-light">How We Build.</span></h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-text-secondary">A few principles guide the way we work, from the first conversation through what comes next.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map(({ title, description, icon: Icon, number }) => (
                <article key={title} className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light/25 hover:bg-primary/[0.045] sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-primary-light/20 bg-primary-light/[0.07] text-primary-light transition-transform duration-300 group-hover:rotate-[-6deg]"><Icon size={18} /></span>
                    <span className="font-mono text-[10px] text-text-label">{number}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="difference-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div>
              <SectionLabel>What makes us different / 04</SectionLabel>
              <h2 id="difference-title" className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">One Creative and Technical Partner.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">Technology and creativity should not operate in separate worlds. CORE &amp; CRAFT connects strategy, design and engineering to deliver a more complete digital experience.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0a1220]/80 p-5 sm:p-7">
              <div aria-hidden="true" className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-3">
                <div className="col-span-2 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 sm:p-4">
                  {["Strategy", "Design", "Engineering"].map((item, index) => (
                    <div key={item} className="flex flex-col items-center gap-2 text-center">
                      <span className={`flex size-9 items-center justify-center rounded-lg border ${index === 1 ? "border-secondary/25 bg-secondary/[0.08] text-rose-100" : "border-primary-light/20 bg-primary-light/[0.06] text-primary-light"}`}><span className="size-1.5 rounded-full bg-current" /></span>
                      <span className="text-[9px] font-medium text-text-secondary sm:text-[10px]">{item}</span>
                    </div>
                  ))}
                </div>
                {["Creative thinking", "Purposeful technology"].map((item) => (
                  <div key={item} className="flex min-h-14 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] px-2 text-center text-[10px] font-medium text-text-secondary sm:text-xs">{item}</div>
                ))}
                <div className="col-span-2 flex items-center justify-between rounded-lg border border-primary-light/20 bg-primary/[0.08] px-4 py-3">
                  <span className="font-display text-xs font-semibold text-white sm:text-sm">Meaningful digital experiences</span>
                  <ArrowRight size={15} className="text-primary-light" />
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-primary-light/20 bg-primary-light/[0.06] text-primary-light"><span className="size-1 rounded-full bg-current" /></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="approach-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <SectionLabel>Our approach / 05</SectionLabel>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="approach-title" className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">From Idea to Digital Experience.</h2>
            <p className="max-w-sm text-sm leading-6 text-text-secondary">A clear, collaborative path shaped around the work.</p>
          </div>
          <ol className="relative mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            <div aria-hidden="true" className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary-light/40 via-white/10 to-secondary/30 lg:left-5 lg:right-5 lg:top-5 lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r" />
            {approach.map(({ number, title, description, icon: Icon }) => (
              <li key={number} className="group relative min-w-0 rounded-xl border border-white/[0.08] bg-[#0a1220]/80 p-4 transition-colors duration-300 hover:border-primary-light/25 sm:p-5 lg:mt-10 lg:border-transparent lg:bg-transparent lg:p-2">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-primary-light/30 bg-[#101827] text-primary-light shadow-[0_0_20px_rgba(139,108,255,.1)] transition-colors group-hover:bg-primary/25">
                  <Icon size={16} />
                </span>
                <p className="mt-4 font-mono text-[9px] tracking-[0.15em] text-primary-light/75">{number} / PROCESS</p>
                <h3 className="mt-1 font-display text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-text-secondary">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="capabilities-title" className="border-t border-white/[0.08] py-16 sm:py-20 lg:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Our capabilities / 06</SectionLabel>
              <h2 id="capabilities-title" className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">What We Bring Together.</h2>
            </div>
            <Link href="/services" className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-semibold text-primary-light transition-colors hover:text-white sm:self-auto">
              View all services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {capabilities.map(({ title, href, icon: Icon }, index) => (
              <Link key={href} href={href} className="group flex min-h-[5.5rem] min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light/25 hover:bg-primary/[0.05] focus-visible:border-primary-light/40">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.1] bg-[#0b1422] text-primary-light transition-colors group-hover:border-primary-light/25 group-hover:bg-primary/[0.12]"><Icon size={17} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[8px] font-medium uppercase tracking-[0.15em] text-text-label">{String(index + 1).padStart(2, "0")} / Service</span>
                  <span className="mt-1 block text-sm font-medium leading-5 text-text-primary/90 group-hover:text-white">{title}</span>
                </span>
                <ArrowUpRight size={14} className="shrink-0 text-text-label transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-light" />
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="commitment-title" className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[linear-gradient(115deg,rgba(22,25,43,.9),rgba(8,15,27,.94))] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(139,108,255,.14),transparent_42%),radial-gradient(ellipse_at_10%_100%,rgba(243,163,107,.07),transparent_40%)]" />
          <div className="absolute -right-12 -top-24 size-64 rounded-full border border-primary-light/[0.08] sm:right-8 sm:top-1/2 sm:-translate-y-1/2" />
          <div className="absolute -right-4 -top-16 size-48 rounded-full border border-white/[0.06] sm:right-16 sm:top-1/2 sm:-translate-y-1/2" />
          <div className="relative max-w-3xl">
            <SectionLabel>Our commitment / 07</SectionLabel>
            <h2 id="commitment-title" className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Built with Purpose. Designed for What Comes Next.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">We aim to create digital products and experiences that make a meaningful difference to the way businesses operate, communicate and grow. Every project deserves clear thinking, thoughtful design and engineering that serves a real purpose.</p>
            <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light hover:text-galaxy-darker">
              Start a Project <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        <section aria-labelledby="final-cta-title" className="px-2 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <SectionLabel>Let’s make something meaningful</SectionLabel>
          <h2 id="final-cta-title" className="mx-auto max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">Have an Idea Worth Building?</h2>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">Let’s bring your next digital experience to life.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 min-[400px]:flex-row">
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-light hover:text-galaxy-darker">
              Start a Project <ArrowUpRight size={15} />
            </Link>
            <Link href="/work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.16] px-5 text-sm font-semibold text-white transition-colors hover:border-primary-light/40 hover:bg-white/[0.04]">
              Explore Our Work <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
