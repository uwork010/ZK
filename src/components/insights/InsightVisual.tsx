import type { InsightVisualKind } from "@/lib/insights";

const visualLabels: Record<InsightVisualKind, string> = {
  ai: "AI workflow",
  mvp: "Product roadmap",
  website: "Business website",
  stack: "Technology layers",
  experience: "User experience",
  software: "Connected software",
  "three-d": "Three-dimensional creative",
  transformation: "Digital transformation",
};

export default function InsightVisual({
  kind,
  large = false,
}: {
  kind: InsightVisualKind;
  large?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={visualLabels[kind]}
      className={`group/visual relative isolate overflow-hidden rounded-xl border border-white/[0.09] bg-[#0a1220] ${
        large ? "h-64 sm:h-80 lg:h-full lg:min-h-[25rem]" : "h-40 sm:h-44"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_18%,rgba(91,124,255,.15),transparent_38%),radial-gradient(ellipse_at_15%_90%,rgba(139,108,255,.13),transparent_44%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:25px_25px]" />

      {kind === "ai" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex w-[74%] items-center justify-between">
            <span className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-[#111b2b] text-[9px] text-text-secondary">Input</span>
            <span className="absolute left-[17%] right-[17%] h-px bg-gradient-to-r from-white/20 via-primary-light/65 to-nebula-warm/40" />
            <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-primary-light/35 bg-primary/[0.14] font-display text-sm font-semibold text-primary-light shadow-[0_0_34px_rgba(139,108,255,.2)]">AI</span>
            <span className="absolute left-[67%] right-[17%] h-px bg-gradient-to-r from-primary-light/65 to-white/20" />
            <span className="flex size-11 items-center justify-center rounded-xl border border-nebula-warm/20 bg-nebula-warm/[0.06] text-[9px] text-text-primary">Review</span>
            {[0, 1, 2].map((point) => <i key={point} className={`absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full ${point === 1 ? "left-1/2 bg-primary-light shadow-[0_0_12px_rgba(185,169,255,.8)]" : "bg-white/35"}`} style={point === 0 ? { left: "19%" } : point === 2 ? { right: "19%" } : undefined} />)}
          </div>
        </div>
      )}

      {kind === "mvp" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-end gap-2 sm:gap-3">
            {[
              { label: "Problem", height: "h-16", color: "border-white/10" },
              { label: "Prototype", height: "h-24", color: "border-primary-light/25" },
              { label: "Learn", height: "h-32", color: "border-secondary/25" },
            ].map((step, index) => (
              <div key={step.label} className={`relative flex w-20 flex-col justify-end rounded-t-xl border ${step.height} ${step.color} bg-[#111a29]/90 p-2.5 shadow-xl sm:w-24`}>
                <span className="mb-auto font-mono text-[8px] text-text-label">0{index + 1}</span>
                <span className="text-[9px] font-medium text-text-primary/80">{step.label}</span>
                <span className={`absolute -top-1 left-2 right-2 h-px ${index === 1 ? "bg-primary-light/65" : "bg-white/15"}`} />
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "website" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] -rotate-2 overflow-hidden rounded-lg border border-white/15 bg-[#0d1624] shadow-2xl transition-transform duration-500 group-hover/visual:rotate-0">
            <div className="flex h-6 items-center gap-1 border-b border-white/[0.08] px-2.5">
              <i className="size-1.5 rounded-full bg-secondary/60" /><i className="size-1.5 rounded-full bg-nebula-warm/60" /><i className="size-1.5 rounded-full bg-primary-light/60" />
              <span className="ml-2 h-1 w-1/3 rounded-full bg-white/10" />
            </div>
            <div className="grid min-h-24 grid-cols-[1.05fr_0.95fr] gap-3 p-3 sm:min-h-28 sm:p-4">
              <div className="flex flex-col justify-center">
                <span className="h-2 w-4/5 rounded bg-white/70" />
                <span className="mt-2 h-1 w-full rounded bg-white/15" />
                <span className="mt-1 h-1 w-3/4 rounded bg-white/10" />
                <span className="mt-3 h-4 w-14 rounded bg-primary/70" />
              </div>
              <div className="rounded-md border border-primary-light/15 bg-[radial-gradient(circle_at_65%_35%,rgba(185,169,255,.25),transparent_42%),linear-gradient(145deg,rgba(91,124,255,.12),rgba(255,255,255,.025))]" />
            </div>
          </div>
        </div>
      )}

      {kind === "stack" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex w-[70%] flex-col gap-2">
            {[
              { label: "Experience", width: "w-full", tone: "border-primary-light/25 bg-primary/[0.09]" },
              { label: "Application", width: "w-[88%]", tone: "border-white/10 bg-white/[0.035]" },
              { label: "Data & services", width: "w-[76%]", tone: "border-secondary/20 bg-secondary/[0.05]" },
              { label: "Infrastructure", width: "w-[64%]", tone: "border-white/10 bg-white/[0.025]" },
            ].map((layer, index) => (
              <div key={layer.label} className={`flex h-8 items-center justify-between rounded-md border px-3 ${layer.width} ${layer.tone}`}>
                <span className="text-[9px] text-text-primary/75">{layer.label}</span>
                <span className="font-mono text-[8px] text-text-label">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "experience" && (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <div className="h-[68%] w-[28%] max-w-24 rounded-[16px] border border-white/15 bg-[#0d1624] p-1.5 shadow-xl">
            <div className="h-[42%] rounded-[10px] bg-[radial-gradient(circle_at_68%_30%,rgba(185,169,255,.34),transparent_48%),linear-gradient(145deg,rgba(91,124,255,.22),rgba(255,255,255,.025))]" />
            <span className="mt-2 block h-1.5 w-3/4 rounded bg-white/30" />
            <span className="mt-1.5 block h-1 w-full rounded bg-white/10" />
            <span className="mt-1 block h-1 w-4/5 rounded bg-white/10" />
            <span className="mt-2.5 block h-4 rounded-md border border-primary-light/20 bg-primary/[0.12]" />
          </div>
          <div className="flex w-[34%] flex-col gap-2">
            {["Discover", "Understand", "Act"].map((item, index) => (
              <div key={item} className={`rounded-lg border px-2.5 py-2 text-[8px] ${index === 1 ? "border-primary-light/25 bg-primary/[0.08] text-primary-light" : "border-white/10 bg-white/[0.025] text-text-secondary"}`}>
                <span className="mr-2 font-mono opacity-60">0{index + 1}</span>{item}
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === "software" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid w-[68%] grid-cols-[1fr_34px_1fr] items-center gap-2">
            <div className="space-y-2 rounded-lg border border-white/10 bg-[#111a29]/90 p-2.5">
              <span className="block h-1 w-2/3 rounded bg-white/25" />
              <span className="block h-5 rounded border border-white/[0.08] bg-white/[0.025]" />
              <span className="block h-1 w-4/5 rounded bg-white/10" />
            </div>
            <span className="relative h-px bg-gradient-to-r from-primary-light/30 via-primary-light/65 to-nebula-warm/50"><i className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light" /></span>
            <div className="space-y-2 rounded-lg border border-primary-light/20 bg-primary/[0.06] p-2.5">
              <span className="block h-1 w-2/3 rounded bg-primary-light/35" />
              <span className="block h-5 rounded border border-primary-light/10 bg-primary/[0.035]" />
              <span className="block h-1 w-4/5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      )}

      {kind === "three-d" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-40 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-white/10 [transform:rotateX(68deg)_rotateZ(-27deg)]" />
            <span className="absolute inset-4 rounded-full border border-primary-light/20 [transform:rotateX(68deg)_rotateZ(34deg)]" />
            <span className="size-20 rotate-45 rounded-2xl border border-primary-light/35 bg-[linear-gradient(145deg,rgba(185,169,255,.2),rgba(91,124,255,.08),rgba(243,163,107,.1))] shadow-[inset_-9px_-8px_18px_rgba(0,0,0,.4),0_0_35px_rgba(139,108,255,.14)] transition-transform duration-500 group-hover/visual:rotate-[55deg]" />
            <i className="absolute right-3 top-4 size-2 rounded-full bg-nebula-warm shadow-[0_0_14px_rgba(243,163,107,.8)]" />
          </div>
        </div>
      )}

      {kind === "transformation" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex w-[76%] items-center gap-3">
            <div className="flex-1 space-y-2 rounded-lg border border-white/10 bg-[#111a29]/85 p-3">
              <span className="block h-1 w-2/3 rounded bg-white/20" />
              <span className="block h-1 w-full rounded bg-white/10" />
              <span className="block h-1 w-4/5 rounded bg-white/10" />
              <span className="mt-1 block h-5 rounded border border-white/[0.08] bg-white/[0.025]" />
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary-light/25 bg-primary/[0.1] text-primary-light">→</span>
            <div className="flex-1 space-y-2 rounded-lg border border-primary-light/20 bg-primary/[0.055] p-3">
              <span className="block h-1 w-2/3 rounded bg-primary-light/30" />
              <span className="block h-1 w-full rounded bg-white/10" />
              <span className="block h-1 w-4/5 rounded bg-white/10" />
              <span className="mt-1 block h-5 rounded border border-primary-light/10 bg-primary/[0.035]" />
            </div>
          </div>
        </div>
      )}

      <span className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-[#07101b]/75 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-text-secondary backdrop-blur">
        {visualLabels[kind]}
      </span>
      {large && <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-[#07101b]/60 px-2.5 py-1.5 font-mono text-[8px] text-text-label">EDITORIAL / VISUAL</span>}
    </div>
  );
}
