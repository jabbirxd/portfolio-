"use client";

import React from "react";
import { Terminal, Smartphone, Layout, Workflow, Film, Dna, CheckCircle2, Cpu } from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectVisualPreviewProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectVisualPreview({ project, className }: ProjectVisualPreviewProps) {
  switch (project.visualType) {
    case "code-terminal":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-[11px] select-none">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2 text-slate-500 text-[11px]">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-rose-500/80 shrink-0" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="ml-2 text-slate-400 truncate">build output</span>
            </div>
            <span className="hidden sm:inline text-indigo-400 shrink-0">NEXT.JS · TYPESCRIPT</span>
          </div>
          <div className="space-y-1.5 py-2 text-slate-400">
            <div className="text-slate-400">
              <span className="text-slate-500">$</span> npm run build
            </div>
            <div className="text-emerald-400/90">
              ✓ Compiled successfully
            </div>
            <div className="text-emerald-400/90">
              ✓ Deployed to Vercel
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
            <span>STATUS: SHIPPED</span>
            <span className="text-indigo-400">UPTIME: 99.9%</span>
          </div>
        </div>
      );

    case "server-terminal":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-[11px] select-none">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2 text-slate-500 text-[11px]">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-rose-500/80 shrink-0" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="ml-2 text-slate-400 truncate">artisan</span>
            </div>
            <span className="hidden sm:inline text-rose-400 shrink-0">PHP · LARAVEL</span>
          </div>
          <div className="space-y-1.5 py-2 text-slate-400">
            <div className="text-slate-400">
              <span className="text-slate-500">$</span> php artisan migrate
            </div>
            <div className="text-emerald-400/90">
              ✓ Database migrated
            </div>
            <div className="text-slate-400">
              <span className="text-slate-500">$</span> php artisan serve
            </div>
            <div className="text-emerald-400/90">
              ✓ Server running · localhost:8000
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
            <span>STATUS: IN PROGRESS</span>
            <span className="text-rose-400">ENV: LOCAL</span>
          </div>
        </div>
      );

    case "mobile-ui":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5 text-sky-400">
              <Smartphone className="w-3.5 h-3.5" />
              <span>OFFLINE_PERSISTENCE</span>
            </div>
            <span>60 FPS // FLUID</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>SQLite Sync State</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">SYNCED</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-xs text-slate-400">
              <span>Optimistic State Cache</span>
              <span className="font-mono text-[11px] text-slate-500">&lt; 1ms</span>
            </div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex justify-between pt-1">
            <span>CLIENT_PERSIST</span>
            <span className="text-sky-400">TOUCH_GESTURES: ON</span>
          </div>
        </div>
      );

    case "design-system":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5 text-indigo-400">
              <Layout className="w-3.5 h-3.5" />
              <span>DESIGN_TOKENS</span>
            </div>
            <span>DESIGN TOKENS</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-2">
            <div className="p-2 rounded-lg bg-[#05070a] border border-white/[0.08] text-center">
              <div className="w-full h-2 rounded bg-indigo-500 mb-1" />
              <span className="text-[9px] font-mono text-slate-400">Primary</span>
            </div>
            <div className="p-2 rounded-lg bg-[#05070a] border border-white/[0.08] text-center">
              <div className="w-full h-2 rounded bg-cyan-500 mb-1" />
              <span className="text-[9px] font-mono text-slate-400">System</span>
            </div>
            <div className="p-2 rounded-lg bg-[#05070a] border border-white/[0.08] text-center">
              <div className="w-full h-2 rounded bg-emerald-500 mb-1" />
              <span className="text-[9px] font-mono text-slate-400">Research</span>
            </div>
            <div className="p-2 rounded-lg bg-[#05070a] border border-white/[0.08] text-center">
              <div className="w-full h-2 rounded bg-amber-500 mb-1" />
              <span className="text-[9px] font-mono text-slate-400">Media</span>
            </div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex justify-between pt-1">
            <span>SCALE: 4px BASELINE</span>
            <span className="text-indigo-400">SCALE: 4px BASE</span>
          </div>
        </div>
      );

    case "automation-workflow":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5 text-sky-400">
              <Workflow className="w-3.5 h-3.5" />
              <span>N8N + OLLAMA ORCHESTRATION</span>
            </div>
            <span className="text-emerald-400 font-bold">$0 RECURRING COST</span>
          </div>
          <div className="grid grid-cols-4 gap-2 py-3 text-center text-[11px] font-mono items-center">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
              <span className="text-slate-500 block text-[8px]">TRIGGER</span>
              Webhook / Cron
            </div>
            <div className="text-slate-600 font-bold">→</div>
            <div className="p-2 rounded-lg bg-indigo-950/30 border border-indigo-500/30 text-indigo-300">
              <span className="text-indigo-400 block text-[8px]">LOCAL LLM</span>
              Ollama Node
            </div>
            <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300">
              <span className="text-emerald-400 block text-[8px]">OUTPUT</span>
              JSON Sink
            </div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
            <span>INFRA: SELF_HOSTED</span>
            <span className="text-sky-400">PRIVACY: 100% LOCAL</span>
          </div>
        </div>
      );

    case "media-timeline":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Film className="w-3.5 h-3.5" />
              <span>TIMELINE_COMPOSITE</span>
            </div>
            <span>4K 60FPS // REC.709</span>
          </div>
          <div className="space-y-1.5 py-2">
            <div className="h-3 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-2 text-[8px] font-mono text-amber-300">
              V1 // Master Cut & Color Grade
            </div>
            <div className="h-3 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center px-2 text-[8px] font-mono text-indigo-300">
              V2 // Kinetic Motion & Text FX
            </div>
            <div className="h-3 rounded bg-emerald-500/20 border border-emerald-500/30 flex items-center px-2 text-[8px] font-mono text-emerald-300">
              A1 // Mastered Audio & SFX
            </div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex justify-between pt-1">
            <span>COLOR: DAVINCI WIDE GAMUT</span>
            <span className="text-amber-400">SOUND: 24-BIT 48KHZ</span>
          </div>
        </div>
      );

    case "molecular-graph":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Dna className="w-3.5 h-3.5" />
              <span>IN_SILICO_DOCKING</span>
            </div>
            <span>ΔG: -9.8 KCAL/MOL</span>
          </div>
          <div className="space-y-2 py-2">
            <div className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-800/30 flex items-center justify-between text-xs text-emerald-200">
              <span className="font-mono text-[11px]">Binding Affinity Index</span>
              <span className="font-mono font-bold text-emerald-400">HIGH_CONFIDENCE</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Pocket Residues: 14 Target</span>
              <span>RMSD: 0.82 Å</span>
            </div>
          </div>
          <div className="text-[11px] font-mono text-slate-500 flex justify-between pt-1 border-t border-white/[0.04]">
            <span>MODEL: STRUCTURAL_BIO</span>
            <span className="text-emerald-400">PIPELINE: REPRODUCIBLE</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
