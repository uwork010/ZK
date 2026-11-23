import { Activity, Bot, Boxes, HeartPulse, ShoppingBag, Smartphone, Wallet, Workflow } from "lucide-react";
import type { WorkVisual } from "@/lib/work-content";

export default function WorkVisual({ kind, hero = false }: { kind: WorkVisual; hero?: boolean }) {
  const size = hero ? "aspect-[16/10] min-h-[280px]" : "aspect-[16/11]";

  if (kind === "medicare") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1830] p-5 sm:p-7`} aria-label="MediCare illustrative dashboard">
        <div className="absolute right-[-10%] top-[-20%] h-48 w-48 rounded-full bg-[#5b7cff]/20 blur-3xl" />
        <div className="relative grid h-full grid-cols-[1fr_3fr] gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><HeartPulse className="text-[#b9a9ff]" size={20}/><div className="mt-5 space-y-2">{[55,75,45,65].map((w)=><div key={w} className="h-1.5 rounded-full bg-white/10" style={{width:`${w}%`}} />)}</div></div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 gap-2">{["Patients","Doctors","Visits"].map((label,i)=><div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><p className="text-[8px] text-white/45 sm:text-[10px]">{label}</p><p className="mt-2 font-display text-sm font-semibold text-white sm:text-lg">{[248,18,42][i]}</p></div>)}</div>
            <div className="grid grid-cols-[1.35fr_0.65fr] gap-2"><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><p className="text-[9px] text-white/50">Appointments</p><div className="mt-4 flex h-16 items-end gap-2">{[35,48,30,62,52,76,58].map((h,i)=><span key={i} className="flex-1 rounded-t-sm bg-[#8b6cff]/70" style={{height:`${h}%`}} />)}</div></div><div className="rounded-lg border border-white/10 bg-white/[0.04] p-3"><p className="text-[9px] text-white/50">Today</p>{["09:30","11:00","14:15"].map((time)=><div key={time} className="mt-3 flex items-center gap-2 text-[8px] text-white/70"><span className="h-2 w-2 rounded-full bg-[#f3a36b]" />{time}</div>)}</div></div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "nexus") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#10152b] p-5 sm:p-7`} aria-label="Nexus Flow illustrative workflow dashboard">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,108,255,.18),transparent_38%)]" />
        <div className="relative grid h-full grid-cols-[0.7fr_1.3fr] gap-3">
          <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.035] p-3"><Workflow className="text-[#b9a9ff]" size={20}/><div className="space-y-2">{["Overview","Projects","Automations"].map((item,i)=><div key={item} className={`rounded-md px-2 py-2 text-[8px] ${i===1?"bg-[#8b6cff]/20 text-white":"text-white/45"}`}>{item}</div>)}</div></div>
          <div className="grid grid-rows-[0.35fr_1fr] gap-3"><div className="grid grid-cols-3 gap-2">{[["Active","24"],["Tasks","86"],["Complete","72%"]].map(([label,value])=><div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-2"><p className="text-[8px] text-white/40">{label}</p><p className="mt-1 text-sm font-semibold text-white">{value}</p></div>)}</div><div className="grid grid-cols-3 gap-2">{["Backlog","In progress","Review"].map((column,i)=><div key={column} className="rounded-lg border border-white/10 bg-white/[0.035] p-2"><p className="text-[8px] text-white/55">{column}</p>{[0,1,2].slice(0,i+1).map((n)=><div key={n} className="mt-2 h-7 rounded-md border border-white/[0.07] bg-white/[0.04]" />)}</div>)}</div></div>
        </div>
      </div>
    );
  }

  if (kind === "aura") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1428] p-5 sm:p-7`} aria-label="Aura AI illustrative conversation interface">
        <div className="absolute left-1/2 top-[-30%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#5b7cff]/15 blur-3xl" />
        <div className="relative grid h-full grid-cols-[0.9fr_1.1fr] gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><div className="flex items-center gap-2"><Bot size={18} className="text-[#b9a9ff]"/><p className="text-xs font-semibold text-white">Aura</p></div><div className="mt-5 space-y-3"><div className="ml-5 rounded-lg rounded-tr-sm bg-[#8b6cff]/20 p-2 text-[8px] leading-4 text-white/75">How can I help today?</div><div className="mr-5 rounded-lg rounded-tl-sm border border-white/10 p-2 text-[8px] leading-4 text-white/55">I need help with my order.</div><div className="ml-5 rounded-lg rounded-tr-sm bg-[#8b6cff]/20 p-2 text-[8px] leading-4 text-white/75">I found the order details.</div></div></div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><p className="text-[9px] text-white/50">Live support</p><div className="mt-4 space-y-2">{["Billing enquiry","Delivery update","Account access"].map((item,i)=><div key={item} className="flex items-center justify-between rounded-md border border-white/[0.07] p-2 text-[8px] text-white/65"><span>{item}</span><span className={`h-2 w-2 rounded-full ${i===0?"bg-[#f3a36b]":"bg-[#8b6cff]"}`} /></div>)}</div></div>
        </div>
      </div>
    );
  }

  if (kind === "cartora") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#171728] p-5 sm:p-7`} aria-label="Cartora illustrative storefront">
        <div className="absolute right-[-15%] top-[-20%] h-52 w-52 rounded-full bg-[#e766a8]/10 blur-3xl" />
        <div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><p className="font-display text-xs font-bold text-white sm:text-sm">CARTORA</p><ShoppingBag size={16} className="text-white/70"/></div><div className="mt-3 grid flex-1 grid-cols-[1.2fr_0.8fr] gap-3"><div className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,#efe5dc,#7a6473)]"><div className="absolute bottom-[-16%] left-1/2 h-[75%] w-[46%] -translate-x-1/2 rounded-t-[50%] bg-[#202038] shadow-2xl" /><div className="absolute bottom-4 left-4 rounded-md bg-black/40 px-2 py-1 text-[8px] text-white">New collection</div></div><div className="grid grid-cols-1 gap-2"><div className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,#d8d1c7,#716a75)]"/><div className="rounded-lg border border-white/10 bg-[linear-gradient(145deg,#9ba2a8,#3b4352)]"/></div></div></div>
      </div>
    );
  }

  if (kind === "finora") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#09182a] p-5 sm:p-7`} aria-label="Finora illustrative financial dashboard">
        <div className="relative grid h-full grid-cols-[0.65fr_1.35fr] gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><Wallet size={18} className="text-[#b9a9ff]"/>{["Overview","Transactions","Reports"].map((item,i)=><div key={item} className={`mt-4 rounded-md px-2 py-2 text-[8px] ${i===0?"bg-[#5b7cff]/20 text-white":"text-white/40"}`}>{item}</div>)}</div><div className="grid gap-3"><div className="grid grid-cols-3 gap-2">{["Balance","Income","Spend"].map((label,i)=><div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-2"><p className="text-[8px] text-white/40">{label}</p><p className="mt-2 text-xs font-semibold text-white">${[24,8,5][i]}k</p></div>)}</div><div className="relative rounded-lg border border-white/10 bg-white/[0.035] p-3"><p className="text-[8px] text-white/50">Cash flow</p><div className="absolute bottom-3 left-3 right-3 flex h-[55%] items-end gap-2">{[28,42,35,58,48,68,60,75,54].map((h,i)=><span key={i} className="flex-1 rounded-t-sm bg-[#5b7cff]/60" style={{height:`${h}%`}} />)}</div></div></div></div>
      </div>
    );
  }

  if (kind === "mobilyn") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#11162b] p-5 sm:p-7`} aria-label="Mobilyn illustrative smartphone marketplace">
        <div className="relative mx-auto flex h-full max-w-[290px] items-center justify-center gap-4"><div className="h-[92%] w-[31%] rounded-[18px] border-4 border-[#d7d9df] bg-[#f4f2ed] p-2 shadow-2xl"><div className="mt-2 text-[6px] font-bold text-[#182033]">mobilyn</div><div className="mt-2 h-16 rounded-md bg-[linear-gradient(145deg,#c8b6a5,#6e7289)]"/><div className="mt-2 h-2 w-4/5 rounded-full bg-[#182033]/15"/><div className="mt-1 h-2 w-2/3 rounded-full bg-[#182033]/10"/></div><div className="h-[82%] w-[31%] translate-y-3 rounded-[18px] border-4 border-[#d7d9df] bg-[#f4f2ed] p-2 shadow-2xl"><Smartphone size={12} className="text-[#6556a4]"/><div className="mt-3 h-12 rounded-md bg-[linear-gradient(145deg,#8996aa,#394559)]"/><div className="mt-2 h-2 w-3/4 rounded-full bg-[#182033]/15"/><div className="mt-3 grid grid-cols-2 gap-1"><div className="h-8 rounded bg-[#d8c7b9]"/><div className="h-8 rounded bg-[#b6bdc8]"/></div></div></div>
      </div>
    );
  }

  if (kind === "vista") {
    return (
      <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#090b18] p-5 sm:p-7`} aria-label="Vista 3D illustrative product scene">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(243,163,107,.22),transparent_18%),radial-gradient(circle_at_50%_55%,rgba(91,124,255,.12),transparent_38%)]" />
        <div className="relative flex h-full items-center justify-center"><div className="absolute bottom-[18%] h-5 w-[52%] rounded-[50%] bg-black/60 blur-md" /><Boxes size={hero ? 150 : 96} strokeWidth={0.6} className="text-[#c9bdff] drop-shadow-[0_0_30px_rgba(139,108,255,.35)]"/><div className="absolute bottom-5 left-5 font-display text-[9px] uppercase tracking-[0.22em] text-white/55">Vista / 01</div></div>
      </div>
    );
  }

  return (
    <div className={`${size} relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1a2b] p-5 sm:p-7`} aria-label="PumpWise illustrative operations dashboard">
      <div className="relative grid h-full grid-cols-[0.7fr_1.3fr] gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><Activity size={18} className="text-[#f3a36b]"/>{["Tanks","Sales","Reports"].map((item,i)=><div key={item} className={`mt-4 rounded-md px-2 py-2 text-[8px] ${i===0?"bg-[#f3a36b]/15 text-white":"text-white/40"}`}>{item}</div>)}</div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.035] p-3"><p className="text-[8px] text-white/50">Tank levels</p><div className="mt-4 flex h-[70%] items-end justify-around">{[72,58,64].map((h,i)=><div key={i} className="relative h-full w-[22%] overflow-hidden rounded-t-full border border-white/10 bg-black/20"><div className="absolute bottom-0 w-full rounded-t-full bg-[#f3a36b]/70" style={{height:`${h}%`}}/></div>)}</div></div><div className="grid gap-2">{["Daily sales","Inventory","Movement"].map((item,i)=><div key={item} className="rounded-lg border border-white/10 bg-white/[0.035] p-2"><p className="text-[8px] text-white/45">{item}</p><p className="mt-1 text-xs font-semibold text-white">{[ "$4.8k","82%","+18"][i]}</p></div>)}</div></div></div>
    </div>
  );
}
