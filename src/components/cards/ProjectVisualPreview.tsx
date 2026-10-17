"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Smartphone, Workflow, Film, Dna, CheckCircle2, Cpu } from "lucide-react";
import { ProjectItem } from "@/types";

interface ProjectVisualPreviewProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectVisualPreview({ project, className }: ProjectVisualPreviewProps) {
  // Real screenshot wins when one exists — never fabricate images.
  if (project.screenshot) {
    return (
      <div className={`relative w-full h-full min-h-[160px] rounded-xl overflow-hidden border border-white/[0.06] ${className ?? ""}`}>
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

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
      // Honest preview of the Task Manager: a task list with priorities
      // and a status filter. No fake stats — just what the app does.
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2">
            <span className="text-[11px] font-mono text-slate-400">My Tasks</span>
            <div className="flex gap-1 text-[9px] font-mono">
              <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">All</span>
              <span className="px-1.5 py-0.5 rounded text-slate-500">Active</span>
              <span className="px-1.5 py-0.5 rounded text-slate-500">Done</span>
            </div>
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-3 h-3 rounded border border-slate-600 shrink-0" />
              <span className="text-slate-300 flex-1 truncate">Review pull request</span>
              <span className="text-[9px] font-mono px-1 rounded bg-rose-500/20 text-rose-300">High</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-3 h-3 rounded border border-slate-600 shrink-0" />
              <span className="text-slate-300 flex-1 truncate">Update documentation</span>
              <span className="text-[9px] font-mono px-1 rounded bg-amber-500/20 text-amber-300">Medium</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="w-3 h-3 rounded bg-emerald-500/80 border border-emerald-500/80 shrink-0" />
              <span className="text-slate-500 flex-1 truncate line-through">Setup project</span>
              <span className="text-[9px] font-mono px-1 rounded bg-slate-500/20 text-slate-400">Low</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-slate-600 pt-2 mt-1 border-t border-white/[0.04]">
            Saved locally · persists on refresh
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
