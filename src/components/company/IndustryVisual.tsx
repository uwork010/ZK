import {
  Activity,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Rocket,
  ShoppingBag,
  Truck,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import type { IndustryVisualKind } from "@/lib/company-content";

const icons: Record<IndustryVisualKind, LucideIcon> = {
  startups: Rocket,
  ecommerce: ShoppingBag,
  healthcare: HeartPulse,
  education: GraduationCap,
  fintech: Landmark,
  realestate: Building2,
  logistics: Truck,
  gaming: Gamepad2,
  professional: Activity,
};

export default function IndustryVisual({ kind, hero = false }: { kind: IndustryVisualKind; hero?: boolean }) {
  const Icon = icons[kind];
  return (
    <div aria-hidden="true" className={`relative isolate overflow-hidden rounded-xl border border-white/[0.09] bg-[#0a1220] ${hero ? "h-64 sm:h-72 lg:h-80" : "h-36 sm:h-40"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(91,124,255,0.15),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(139,108,255,0.12),transparent_38%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:22px_22px]" />

      {kind === "startups" && <div className="absolute inset-0 flex items-center justify-center"><div className="flex items-end gap-2">{[44,64,84].map((height)=><span key={height} className="relative w-14 rounded-t-lg border border-primary-light/20 bg-primary-light/[0.07]" style={{height}}><i className="absolute left-2 right-2 top-2 h-1 rounded bg-primary-light/35"/></span>)}</div></div>}
      {kind === "ecommerce" && <div className="absolute inset-0 flex items-center justify-center gap-3"><div className="h-[70%] w-[44%] rounded-lg border border-white/12 bg-[#101827] p-2"><div className="h-[52%] rounded border border-primary-light/15 bg-primary-light/[0.06]"/><i className="mt-2 block h-1 w-2/3 rounded bg-white/15"/></div><div className="h-[55%] w-[18%] rounded-[12px] border border-white/12 bg-[#101827] p-1.5"><div className="h-[48%] rounded-md bg-secondary/[0.08]"/></div></div>}
      {kind === "healthcare" && <div className="absolute inset-0 flex items-center justify-center"><div className="relative size-28 rounded-full border border-primary-light/20"><span className="absolute left-1/2 top-1/2 h-12 w-4 -translate-x-1/2 -translate-y-1/2 rounded bg-primary-light/30"/><span className="absolute left-1/2 top-1/2 h-4 w-12 -translate-x-1/2 -translate-y-1/2 rounded bg-primary-light/30"/></div></div>}
      {kind === "education" && <div className="absolute inset-0 flex items-center justify-center"><div className="grid w-[68%] grid-cols-3 gap-2">{[1,2,3,4,5,6].map((item)=><i key={item} className={`h-10 rounded-md border ${item===2?"border-secondary/25 bg-secondary/[0.08]":"border-white/10 bg-white/[0.035]"}`}/>)}</div></div>}
      {kind === "fintech" && <div className="absolute inset-0 flex items-center justify-center"><div className="w-[70%] rounded-lg border border-white/12 bg-[#101827] p-3"><div className="flex items-end gap-2">{[35,52,44,68,58].map((height)=><i key={height} className="flex-1 rounded-t border border-primary-light/15 bg-primary-light/[0.12]" style={{height}}/>)}</div></div></div>}
      {kind === "realestate" && <div className="absolute inset-0 flex items-center justify-center"><div className="relative h-[70%] w-[62%] border-b border-white/15"><div className="absolute bottom-0 left-[14%] h-[62%] w-[72%] border border-primary-light/20 bg-[#101827]/90"><i className="absolute left-[18%] top-[38%] size-5 border border-white/15"/><i className="absolute right-[18%] top-[38%] size-5 border border-white/15"/></div></div></div>}
      {kind === "gaming" && <div className="absolute inset-0 flex items-center justify-center"><span className="size-28 rotate-12 rounded-[26px] border border-primary-light/25 bg-[linear-gradient(145deg,rgba(185,169,255,.18),rgba(231,102,168,.1),rgba(91,124,255,.06))] shadow-2xl"/><span className="absolute size-14 -rotate-12 rounded-xl border border-white/15 bg-white/[0.04]"/></div>}
      {kind === "professional" && <div className="absolute inset-0 flex items-center justify-center"><div className="grid w-[72%] grid-cols-3 gap-2"><i className="col-span-3 h-10 rounded border border-white/10 bg-white/[0.035]"/>{[1,2,3].map((item)=><i key={item} className="h-16 rounded border border-primary-light/15 bg-primary-light/[0.05]"/>)}</div></div>}
      <span className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-primary-light"><Icon size={15}/></span>
    </div>
  );
}
