import {
  Activity,
  Bot,
  Braces,
  Cloud,
  Code2,
  Gamepad2,
  Layers3,
  Palette,
  PanelsTopLeft,
  PenTool,
  ShieldCheck,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceVisualKind } from "@/lib/company-content";

const visualIcons: Record<ServiceVisualKind, LucideIcon> = {
  web: Code2,
  mobile: Smartphone,
  mvp: Layers3,
  game: Gamepad2,
  ai: Bot,
  software: PanelsTopLeft,
  design: PenTool,
  qa: ShieldCheck,
  branding: Palette,
  creative: Sparkles,
  cloud: Cloud,
  maintenance: Activity,
};

const visualAccents: Record<ServiceVisualKind, string> = {
  web: "from-violet-300/20 via-indigo-300/10 to-transparent",
  mobile: "from-rose-300/18 via-violet-300/10 to-transparent",
  mvp: "from-amber-200/16 via-rose-300/10 to-transparent",
  game: "from-fuchsia-300/18 via-violet-300/12 to-transparent",
  ai: "from-rose-300/16 via-violet-300/12 to-transparent",
  software: "from-violet-300/18 via-fuchsia-300/10 to-transparent",
  design: "from-orange-200/14 via-rose-300/10 to-transparent",
  qa: "from-emerald-200/12 via-violet-300/10 to-transparent",
  branding: "from-rose-300/16 via-amber-200/10 to-transparent",
  creative: "from-amber-200/18 via-fuchsia-300/12 to-transparent",
  cloud: "from-violet-300/16 via-rose-300/10 to-transparent",
  maintenance: "from-emerald-200/12 via-amber-200/10 to-transparent",
};

export default function ServiceVisual({ kind, size = "card" }: { kind: ServiceVisualKind; size?: "card" | "hero" }) {
  const Icon = visualIcons[kind];
  const isHero = size === "hero";

  return (
    <div
      aria-hidden="true"
      className={`service-visual group relative isolate overflow-hidden rounded-xl border border-white/[0.09] bg-[#0c111d] ${isHero ? "h-52 sm:h-60" : "h-32 sm:h-36"}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${visualAccents[kind]}`} />
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -right-10 -top-12 size-40 rounded-full border border-primary-light/[0.09]" />

      {kind === "web" && (
        <div className="absolute left-[12%] top-[17%] w-[65%] -rotate-2 overflow-hidden rounded-lg border border-white/15 bg-[#101522]/95 shadow-[0_16px_34px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex h-5 items-center gap-1 border-b border-white/10 px-2"><i className="size-1.5 rounded-full bg-rose-200/70" /><i className="size-1.5 rounded-full bg-amber-100/70" /><i className="size-1.5 rounded-full bg-emerald-100/60" /><i className="ml-2 h-1 w-1/3 rounded bg-white/10" /></div>
          <div className={`grid ${isHero ? "h-36 grid-cols-[24%_1fr]" : "h-20 grid-cols-[28px_1fr]"} gap-2 p-2`}><div className="space-y-2 border-r border-white/[0.06] pr-2">{[1, 2, 3].map((item) => <i key={item} className="block h-1 rounded bg-primary-light/25" />)}</div><div className="space-y-2"><i className="block h-2 w-2/3 rounded bg-white/15" /><i className="block h-1 w-full rounded bg-white/[0.07]" /><i className="block h-1 w-4/5 rounded bg-secondary/25" /><i className="block h-5 rounded border border-white/[0.06] bg-white/[0.025]" /></div></div>
        </div>
      )}

      {kind === "mobile" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2].map((item) => <div key={item} className={`absolute rounded-[15px] border ${item === 1 ? "z-10 h-[76%] w-[20%] border-primary-light/30 bg-[#111725] shadow-[0_14px_34px_rgba(0,0,0,0.42)]" : "h-[65%] w-[18%] border-white/15 bg-[#101522]/95"} ${item === 0 ? "-translate-x-[78%] -rotate-[12deg]" : item === 2 ? "translate-x-[78%] rotate-[12deg]" : "transition-transform duration-500 group-hover:-translate-y-1"}`}><div className="m-1.5 h-[42%] rounded-lg bg-gradient-to-br from-primary-light/20 via-secondary/10 to-white/[0.03]" /><i className="mx-2 mt-2 block h-1 rounded bg-white/15" /><i className="mx-2 mt-1.5 block h-1 w-2/3 rounded bg-white/10" /></div>)}
        </div>
      )}

      {kind === "mvp" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center gap-3">
            {["Problem", "Prototype", "Launch"].map((label, index) => <div key={label} className={`relative rounded-lg border px-3 py-2 shadow-lg ${index === 1 ? "border-secondary/25 bg-secondary/[0.08]" : "border-white/10 bg-[#101522]/90"}`}><span className="block text-[8px] uppercase tracking-wider text-text-secondary/60">0{index + 1}</span><span className="mt-1 block text-[9px] font-medium text-text-primary/80">{label}</span>{index < 2 && <span className="absolute -right-3 top-1/2 h-px w-3 bg-primary-light/35" />}</div>)}
          </div>
          <span className="absolute bottom-[17%] h-px w-[54%] bg-gradient-to-r from-transparent via-nebula-warm/25 to-transparent" />
        </div>
      )}

      {kind === "game" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="absolute left-[29%] size-20 rotate-45 border border-primary-light/25 bg-gradient-to-br from-primary-light/20 via-secondary/10 to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_16px_34px_rgba(0,0,0,0.36)] transition-transform duration-500 group-hover:rotate-[52deg]" />
          <span className="absolute right-[27%] top-[22%] size-12 -rotate-12 rounded-xl border border-secondary/20 bg-white/[0.035] backdrop-blur-sm" />
          <span className="absolute bottom-[20%] left-[22%] flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#101522]/90 text-primary-light"><Gamepad2 size={19} /></span>
        </div>
      )}

      {kind === "ai" && (
        <div className="absolute inset-0">
          <span className="absolute left-[16%] top-[58%] h-px w-[64%] -rotate-[12deg] bg-gradient-to-r from-secondary/10 via-primary-light/55 to-nebula-warm/15" />
          <span className="absolute left-[25%] top-[35%] h-px w-[48%] rotate-[17deg] bg-gradient-to-r from-primary-light/10 via-secondary/50 to-primary-light/10" />
          {[["18%", "35%"], ["34%", "61%"], ["49%", "28%"], ["65%", "52%"], ["81%", "33%"]].map(([left, top], index) => <i key={left} className={`absolute rounded-full border ${index === 2 ? "size-4 border-primary-light/50 bg-primary/35 shadow-[0_0_20px_rgba(139,108,255,0.22)]" : "size-2.5 border-secondary/35 bg-secondary/25"}`} style={{ left, top }} />)}
          <span className="absolute bottom-[15%] right-[12%] flex size-8 items-center justify-center rounded-lg border border-amber-100/15 bg-amber-100/[0.06] text-amber-100/80"><Bot size={15} /></span>
        </div>
      )}

      {kind === "software" && (
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <div className="grid grid-cols-3 gap-1.5">{Array.from({ length: 6 }, (_, index) => <i key={index} className={`size-8 rounded-md border ${index === 1 ? "border-secondary/25 bg-secondary/[0.09]" : index === 4 ? "border-amber-100/20 bg-amber-100/[0.07]" : "border-primary-light/15 bg-primary-light/[0.06]"}`} />)}</div>
          <span className="h-px w-5 bg-primary-light/45" />
          <div className="rounded-lg border border-white/15 bg-[#101522]/90 p-3 shadow-lg"><PanelsTopLeft size={20} className="text-primary-light" /><i className="mt-2 block h-1 w-12 rounded bg-white/15" /><i className="mt-1.5 block h-1 w-8 rounded bg-secondary/35" /></div>
        </div>
      )}

      {kind === "design" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute left-[18%] top-[18%] h-[62%] w-[38%] -rotate-3 rounded-md border border-white/15 bg-[#101522]/75 p-3 shadow-lg"><div className="grid h-full grid-cols-3 gap-1.5"><i className="rounded border border-primary-light/20 bg-primary-light/[0.08]" /><i className="col-span-2 rounded border border-white/10 bg-white/[0.035]" /><i className="col-span-2 rounded border border-secondary/20 bg-secondary/[0.08]" /><i className="rounded border border-white/10 bg-white/[0.06]" /></div></div>
          <div className="absolute right-[17%] top-[28%] flex rotate-3 gap-2 rounded-lg border border-white/15 bg-[#111725]/90 p-3 shadow-xl">{["bg-primary-light/80", "bg-secondary/75", "bg-nebula-warm/75"].map((color) => <i key={color} className={`size-6 rounded-full ${color}`} />)}<Palette size={15} className="ml-1 text-primary-light/80" /></div>
        </div>
      )}

      {kind === "qa" && (
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          {["Unit", "API", "UI"].map((label, index) => <div key={label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#101522]/85 px-3 py-2"><span className={`flex size-5 items-center justify-center rounded-full border ${index === 1 ? "border-emerald-200/30 text-emerald-100/80" : "border-primary-light/25 text-primary-light/75"}`}><ShieldCheck size={12} /></span><span className="text-[9px] text-text-secondary/80">{label}</span></div>)}
        </div>
      )}

      {kind === "branding" && (
        <div className="absolute inset-0 flex items-center justify-center gap-5">
          <span className="font-display text-4xl font-semibold tracking-[0.12em] text-text-primary/80">Aa</span>
          <div className="flex flex-col gap-2">{["bg-primary-light/75", "bg-secondary/75", "bg-nebula-warm/75", "bg-white/20"].map((color) => <i key={color} className={`h-3 w-14 rounded-sm ${color}`} />)}</div>
          <span className="absolute bottom-[16%] right-[17%] text-[8px] uppercase tracking-[0.16em] text-text-secondary/60">Identity system</span>
        </div>
      )}

      {kind === "creative" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="size-24 rotate-12 rounded-[24px] border border-primary-light/25 bg-[linear-gradient(145deg,rgba(185,169,255,0.2),rgba(231,102,168,0.12)_48%,rgba(243,163,107,0.12))] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_16px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:rotate-[18deg]" />
          <span className="absolute left-[28%] size-16 -rotate-[15deg] rounded-[18px] border border-white/20 bg-white/[0.05] backdrop-blur-sm" />
          <span className="absolute right-[27%] size-20 rounded-full border border-secondary/25 bg-[radial-gradient(circle_at_35%_30%,rgba(255,230,204,0.2),rgba(231,102,168,0.13)_32%,rgba(139,108,255,0.08)_68%,transparent)]" />
        </div>
      )}

      {kind === "cloud" && (
        <div className="absolute inset-0">
          <span className="absolute left-[16%] top-[47%] h-px w-[68%] bg-gradient-to-r from-transparent via-primary-light/35 to-transparent" />
          {[["18%", "40%"], ["36%", "27%"], ["52%", "51%"], ["69%", "32%"], ["84%", "48%"]].map(([left, top], index) => <span key={left} className={`absolute flex size-10 items-center justify-center rounded-xl border ${index === 2 ? "border-secondary/25 bg-secondary/[0.08] text-rose-100/80" : "border-white/12 bg-[#101522]/90 text-primary-light/75"}`} style={{ left, top }}><Cloud size={16} /></span>)}
          <span className="absolute bottom-[13%] left-[37%] text-[8px] uppercase tracking-[0.15em] text-text-secondary/60">Build · Ship · Observe</span>
        </div>
      )}

      {kind === "maintenance" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="size-24 rounded-full border border-white/10 border-t-primary-light/60 border-r-secondary/45 transition-transform duration-700 group-hover:rotate-12" />
          <span className="absolute size-16 rounded-full border border-dashed border-primary-light/25" />
          <span className="absolute flex size-9 items-center justify-center rounded-full border border-emerald-100/20 bg-emerald-100/[0.06] text-emerald-100/75"><Activity size={17} /></span>
          <i className="absolute left-[22%] top-[30%] size-2 rounded-full bg-secondary/70" /><i className="absolute right-[23%] bottom-[27%] size-2 rounded-full bg-nebula-warm/80" />
        </div>
      )}

      <span className="absolute bottom-3 left-3 flex size-7 items-center justify-center rounded-lg border border-white/10 bg-black/25 text-primary-light/75"><Icon size={14} /></span>
    </div>
  );
}