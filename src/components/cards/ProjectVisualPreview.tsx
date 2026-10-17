"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";

interface ProjectVisualPreviewProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectVisualPreview({ project, className }: ProjectVisualPreviewProps) {
  // Real screenshot wins when one exists — never fabricate images.
  if (project.screenshot) {
    return (
      <div className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.06] ${className ?? ""}`}>
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1100px"
        />
      </div>
    );
  }

  switch (project.visualType) {
    case "code-terminal":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2 text-[#8a9bb0] text-xs">
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
              <span className="text-[#8a9bb0]">$</span> npm run build
            </div>
            <div className="text-emerald-400/90">
              ✓ Compiled successfully
            </div>
            <div className="text-emerald-400/90">
              ✓ Deployed to Vercel
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#8a9bb0] pt-2 border-t border-white/[0.04]">
            <span>STATUS: SHIPPED</span>
          </div>
        </div>
      );

    case "server-terminal":
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col justify-between font-mono text-xs select-none">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2 text-[#8a9bb0] text-xs">
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
              <span className="text-[#8a9bb0]">$</span> php artisan migrate
            </div>
            <div className="text-emerald-400/90">
              ✓ Database migrated
            </div>
            <div className="text-slate-400">
              <span className="text-[#8a9bb0]">$</span> php artisan serve
            </div>
            <div className="text-emerald-400/90">
              ✓ Server running · localhost:8000
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-[#8a9bb0] pt-2 border-t border-white/[0.04]">
            <span>STATUS: IN PROGRESS</span>
            <span className="text-rose-400">ENV: LOCAL</span>
          </div>
        </div>
      );

    case "task-list":
      // Honest preview of the Task Manager (visualType: "task-list"): a task list with priorities
      // and a status filter. No fake stats — just what the app does.
      return (
        <div className="w-full h-full min-h-[160px] bg-[#06080d] rounded-xl border border-white/[0.06] p-4 flex flex-col select-none">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2">
            <span className="text-xs font-mono text-slate-400">My Tasks</span>
            <div className="flex gap-1 text-xs font-mono">
              <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">All</span>
              <span className="px-1.5 py-0.5 rounded text-[#8a9bb0]">Active</span>
              <span className="px-1.5 py-0.5 rounded text-[#8a9bb0]">Done</span>
            </div>
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded border border-slate-600 shrink-0" />
              <span className="text-slate-300 flex-1 truncate">Review pull request</span>
              <span className="text-xs font-mono px-1 rounded bg-rose-500/20 text-rose-300">High</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded border border-slate-600 shrink-0" />
              <span className="text-slate-300 flex-1 truncate">Update documentation</span>
              <span className="text-xs font-mono px-1 rounded bg-amber-500/20 text-amber-300">Medium</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-3 rounded bg-emerald-500/80 border border-emerald-500/80 shrink-0" />
              <span className="text-[#8a9bb0] flex-1 truncate line-through">Setup project</span>
              <span className="text-xs font-mono px-1 rounded bg-slate-500/20 text-slate-400">Low</span>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 pt-2 mt-1 border-t border-white/[0.04]">
            Saved locally · persists on refresh
          </div>
        </div>
      );



    default:
      return null;
  }
}
