import {
  Boxes,
  BriefcaseBusiness,
  Layers3,
  Network,
  Rocket,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { SolutionVisualKind } from "@/lib/company-content";

const icons: Record<SolutionVisualKind, LucideIcon> = {
  startups: Rocket,
  saas: Layers3,
  automation: Network,
  transformation: Boxes,
  commerce: ShoppingBag,
  enterprise: BriefcaseBusiness,
};

export default function SolutionVisual({ kind, hero = false }: { kind: SolutionVisualKind; hero?: boolean }) {
  const Icon = icons[kind];
  return (
    <div aria-hidden="true" className={`solution-visual relative isolate overflow-hidden rounded-xl border border-white/[0.09] bg-[#0b1220] ${hero ? "h-64 sm:h-72 lg:h-80" : "h-36 sm:h-40"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(91,124,255,0.16),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(139,108,255,0.12),transparent_38%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:22px_22px]" />

      {kind === "startups" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-end gap-3">{["Idea", "MVP", "Launch"].map((label, index) => <div key={label} className={`relative rounded-lg border border-white/10 bg-[#111827]/95 px-3 py-2 shadow-xl ${index === 1 ? "mb-5 border-violet-300/25" : index === 2 ? "mb-10" : "mb-1"}`}><span className="block text-[8px] uppercase tracking-wider text-text-label">0{index + 1}</span><span className="mt-1 block text-[9px] text-text-primary/80">{label}</span></div>)}</div>
        </div>
      )}
      {kind === "saas" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid w-[68%] grid-cols-[28%_1fr] gap-2 rounded-lg border border-white/12 bg-[#101827]/95 p-2 shadow-2xl"><div className="space-y-2 border-r border-white/[0.07] pr-2">{[1,2,3].map((item)=><i key={item} className="block h-1.5 rounded bg-primary-light/20"/>)}</div><div className="grid grid-cols-2 gap-2"><i className="h-10 rounded border border-white/[0.08] bg-white/[0.035]" /><i className="h-10 rounded border border-secondary/15 bg-secondary/[0.06]" /><i className="col-span-2 h-16 rounded border border-primary-light/15 bg-primary-light/[0.05]" /></div></div>
        </div>
      )}
      {kind === "automation" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center gap-8">{[0,1,2,3].map((item)=><span key={item} className={`relative z-10 flex size-9 items-center justify-center rounded-full border ${item === 1 ? "border-primary-light/40 bg-primary/20" : "border-white/12 bg-[#111827]"}`}><i className="size-2 rounded-full bg-primary-light/70"/></span>)}<span className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-primary-light/25 via-secondary/35 to-primary-light/25"/></div>
        </div>
      )}
      {kind === "transformation" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid w-[78%] grid-cols-[1fr_36px_1fr] items-center gap-2"><div className="rounded-lg border border-white/10 bg-white/[0.035] p-3"><i className="block h-1 w-2/3 rounded bg-white/15"/><i className="mt-2 block h-12 rounded border border-dashed border-white/10"/></div><span className="h-px w-full bg-primary-light/50"/><div className="rounded-lg border border-primary-light/20 bg-primary-light/[0.07] p-3"><i className="block h-1 w-1/2 rounded bg-primary-light/40"/><i className="mt-2 block h-12 rounded border border-primary-light/15 bg-secondary/[0.04]"/></div></div>
        </div>
      )}
      {kind === "commerce" && (
        <div className="absolute inset-0 flex items-center justify-center gap-3">
          <div className="h-[72%] w-[42%] rounded-lg border border-white/12 bg-[#101827]/95 p-2 shadow-xl"><div className="h-[55%] rounded border border-primary-light/15 bg-gradient-to-br from-primary-light/10 to-secondary/[0.04]"/><i className="mt-2 block h-1 w-2/3 rounded bg-white/15"/><i className="mt-1.5 block h-1 w-1/3 rounded bg-primary-light/35"/></div>
          <div className="h-[58%] w-[20%] rounded-[12px] border border-white/12 bg-[#101827]/95 p-1.5"><div className="h-[52%] rounded-md bg-primary-light/[0.08]"/><i className="mt-2 block h-1 rounded bg-white/15"/></div>
        </div>
      )}
      {kind === "enterprise" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative size-32"><span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-primary-light/30 bg-primary/15"><Icon size={18}/></span>{[0,60,120,180,240,300].map((degree)=><i key={degree} className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/12 bg-[#111827]" style={{transform:`translate(-50%, -50%) rotate(${degree}deg) translateY(-58px)`}}/>)}<span className="absolute inset-5 rounded-full border border-dashed border-primary-light/15"/></div>
        </div>
      )}
      <span className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-primary-light"><Icon size={15}/></span>
    </div>
  );
}
