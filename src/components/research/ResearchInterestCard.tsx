import React from "react";
import { ResearchInterest } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Activity, ShieldAlert, Dna, Cpu, Sparkles, Microscope, Layers } from "lucide-react";

interface ResearchInterestCardProps {
  interest: ResearchInterest;
}

export function ResearchInterestCard({ interest }: ResearchInterestCardProps) {
  const getIcon = (type: ResearchInterest["iconType"]) => {
    switch (type) {
      case "cancer":
        return <Activity className="w-5 h-5 text-rose-400" />;
      case "apoptosis":
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      case "bcl2":
        return <Dna className="w-5 h-5 text-cyan-400" />;
      case "comp-bio":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "drug-discovery":
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "mol-bio":
        return <Microscope className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <Card variant="interactive" className="flex flex-col justify-between h-full p-6 sm:p-7">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            {getIcon(interest.iconType)}
          </div>
          <Badge variant="research" size="sm">
            {interest.category}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-white tracking-tight font-sans mb-1">
          {interest.title}
        </h3>
        <p className="text-xs font-mono text-emerald-400/90 font-medium mb-3">
          {interest.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {interest.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.06]">
        <div className="text-[10px] font-mono text-slate-500 uppercase mb-2">
          Key Investigative Themes
        </div>
        <div className="flex flex-wrap gap-1.5">
          {interest.keyConcepts.map((concept) => (
            <span
              key={concept}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/20 text-emerald-300 border border-emerald-800/30"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
