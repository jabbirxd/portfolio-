import React from "react";
import Link from "next/link";
import { ResearchItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, FlaskConical } from "lucide-react";

interface ResearchCardProps {
  research: ResearchItem;
}

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Card variant="interactive" className="flex flex-col h-full group relative overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-4">
        <Badge variant="research" size="sm">
          <FlaskConical className="w-3 h-3 text-emerald-400" />
          {research.domain}
        </Badge>
        <span className="text-[11px] font-mono text-slate-500 uppercase">
          Status: {research.status}
        </span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
        <Link href={`/research/${research.slug}`} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          {research.title}
        </Link>
      </h3>

      <p className="text-xs sm:text-sm font-mono text-emerald-400/90 mb-3">
        {research.tagline}
      </p>

      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6 flex-grow">
        {research.abstract}
      </p>

      {/* Methods & Keywords */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
        {research.methods.slice(0, 3).map((method) => (
          <span
            key={method}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/20 text-emerald-300 border border-emerald-800/30"
          >
            {method}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
        <span>Timeline: {research.timeline}</span>
        <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
          Read Investigation <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Card>
  );
}
