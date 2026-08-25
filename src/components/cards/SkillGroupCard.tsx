import React from "react";
import Link from "next/link";
import { SkillCategory } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Cpu,
  Palette,
  FlaskConical,
  Film,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface SkillGroupCardProps {
  category: SkillCategory;
}

export function SkillGroupCard({ category }: SkillGroupCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case "Film":
        return <Film className="w-5 h-5 text-amber-400" />;
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getBadgeVariant = (id: string) => {
    switch (id) {
      case "dev":
        return "studio";
      case "design":
        return "studio";
      case "automation":
        return "system";
      case "creative":
        return "creative";
      case "research":
        return "research";
      default:
        return "default";
    }
  };

  return (
    <Card variant="studio" className="h-full flex flex-col justify-between p-6 sm:p-8 space-y-6">
      <div>
        {/* Header with category icon and badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {getIcon(category.iconName)}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight font-sans">
              {category.name}
            </h3>
          </div>
          <Badge variant={getBadgeVariant(category.id)} size="sm">
            {category.skills.length} CONFIRMED
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
          {category.description}
        </p>

        {/* Evidence-Based Skill Rows */}
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="text-sm font-bold text-white">{skill.name}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {skill.discipline}
                </span>
              </div>

              {skill.description && (
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              )}

              {/* Evidence-based link to actual project */}
              {skill.relatedProject && (
                <div className="pt-1.5 flex items-center justify-between text-[11px] font-mono border-t border-white/[0.04]">
                  <span className="text-slate-500">Evidence:</span>
                  <Link
                    href={skill.relatedProject.url}
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                  >
                    <span>{skill.relatedProject.projectTitle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 text-[10px] font-mono text-slate-500">
        STANDARD: EVIDENCE_BASED_VERIFICATION
      </div>
    </Card>
  );
}
