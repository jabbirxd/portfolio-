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
        return <Code2 className="w-5 h-5 text-[var(--accent-studio)]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[var(--accent-system)]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[var(--accent-system)]" />;
      case "Film":
        return <Film className="w-5 h-5 text-[var(--accent-creative)]" />;
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5 text-[var(--accent-research)]" />;
      default:
        return <Code2 className="w-5 h-5 text-[var(--accent-studio)]" />;
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
              {getIcon(category.iconName)}
            </div>
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-sans">
              {category.name}
            </h2>
          </div>
          <Badge variant={getBadgeVariant(category.id)} size="sm" className="whitespace-nowrap shrink-0 self-start sm:self-auto">
            {category.skills.length} skills
          </Badge>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-sans">
          {category.description}
        </p>

        {/* Evidence-Based Skill Rows */}
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-default)] transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-studio)] shrink-0" />
                  <span className="text-sm font-bold text-[var(--text-primary)]">{skill.name}</span>
                </div>
                <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                  {skill.discipline}
                </span>
              </div>

              {skill.description && (
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {skill.description}
                </p>
              )}

              {/* Evidence-based link to actual project */}
              {skill.relatedProject && (
                <div className="pt-1.5 flex items-center justify-between gap-3 text-xs font-mono border-t border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)] shrink-0">Evidence:</span>
                  <Link
                    href={skill.relatedProject.url}
                    className="inline-flex items-center gap-1 text-[var(--accent-studio)] hover:text-[var(--accent-studio)] transition-colors font-medium text-right"
                  >
                    <span>{skill.relatedProject.projectTitle}</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </Card>
  );
}
