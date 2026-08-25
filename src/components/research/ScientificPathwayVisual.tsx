"use client";

import React from "react";
import { PathwayNode } from "@/types";
import { ArrowRight, Dna, Activity, ShieldAlert, Target, Sparkles } from "lucide-react";

interface ScientificPathwayVisualProps {
  nodes?: PathwayNode[];
  className?: string;
}

export function ScientificPathwayVisual({ nodes, className }: ScientificPathwayVisualProps) {
  const defaultPathway = [
    {
      order: "01",
      title: "Cancer Pathogenesis",
      subtitle: "Oncogenic Stress",
      description: "Malignant cellular transformation and metabolic deregulation.",
      icon: <Activity className="w-4 h-4 text-rose-400" />,
    },
    {
      order: "02",
      title: "Dysregulated Apoptosis",
      subtitle: "Cell Death Evasion",
      description: "Loss of intrinsic mitochondrial programmed cell death checkpoints.",
      icon: <ShieldAlert className="w-4 h-4 text-amber-400" />,
    },
    {
      order: "03",
      title: "Anti-Apoptotic Sentinels",
      subtitle: "Survival Sequestration",
      description: "Overexpression of pro-survival proteins neutralizing apoptotic signals.",
      icon: <Dna className="w-4 h-4 text-indigo-400" />,
    },
    {
      order: "04",
      title: "Bcl-2 / Bcl-xL / Mcl-1",
      subtitle: "Primary Target Groove",
      description: "Conserved hydrophobic surface pockets (BH3 binding domains).",
      icon: <Target className="w-4 h-4 text-cyan-400" />,
    },
    {
      order: "05",
      title: "Therapeutic Targeting",
      subtitle: "In Silico Candidate Screening",
      description: "Selective small-molecule BH3 mimetics restoring cell death sensitivity.",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#06080d] border border-white/[0.08] p-6 sm:p-8 space-y-6 shadow-2xl select-none">
      {/* Top Laboratory Telemetry Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wider uppercase">PATHWAY_MAP // APOPTOTIC_CASCADE</span>
        </div>
        <span>TARGET_AXIS: [BCL2_FAMILY_MECHANISM]</span>
      </div>

      {/* Interactive Scientific Node Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {defaultPathway.map((step, idx) => (
          <div
            key={step.order}
            className="group relative flex flex-col justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-emerald-950/10 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/30">
                  {step.order}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  {step.icon}
                </div>
              </div>

              <h4 className="text-xs font-bold text-white tracking-tight mb-1 font-sans">
                {step.title}
              </h4>
              <p className="text-[10px] font-mono text-slate-400 mb-2 font-semibold">
                {step.subtitle}
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>

            {/* Directional Connector Arrow (desktop) */}
            {idx < defaultPathway.length - 1 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Sub-Pocket Matrix Key */}
      <div className="pt-3 border-t border-white/[0.04] flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-3">
          <span>STRUCTURAL DOMAINS:</span>
          <span className="text-slate-400">BH1 · BH2 · BH3 · BH4</span>
        </div>
        <div className="flex items-center gap-2 text-emerald-400/90">
          <span>PARADIGM: DUAL/SELECTIVE_INHIBITION</span>
        </div>
      </div>
    </div>
  );
}
