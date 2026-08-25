import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectVisualPreview } from "@/components/cards/ProjectVisualPreview";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const isLarge = project.displaySize === "large";
  const isWide = project.displaySize === "wide";

  const getBadgeVariant = (filterCat: ProjectItem["filterCategory"]) => {
    switch (filterCat) {
      case "DEVELOPMENT":
        return "studio";
      case "UI/UX":
        return "studio";
      case "AUTOMATION":
        return "system";
      case "CREATIVE":
        return "creative";
      case "RESEARCH":
        return "research";
      default:
        return "default";
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-[#0a0d14] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0d101a] transition-all duration-200 shadow-xl overflow-hidden p-6 sm:p-8",
        isLarge && "lg:col-span-2 lg:row-span-2",
        isWide && "lg:col-span-2",
        className
      )}
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <Badge variant={getBadgeVariant(project.filterCategory)} size="sm">
              {project.filterCategory}
            </Badge>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              // {project.role}
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 tracking-wider">
            {project.timeline}
          </span>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-extrabold text-white group-hover:text-indigo-300 transition-colors font-sans tracking-tight mb-2",
            isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          )}
        >
          <Link href={`/work/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-mono text-slate-300 mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-6">
          {project.summary}
        </p>

        {/* Visual Mockup Preview */}
        <div className="mb-6 rounded-xl overflow-hidden border border-white/[0.04] bg-[#05070a]/60 group-hover:border-white/[0.1] transition-colors">
          <ProjectVisualPreview project={project} />
        </div>
      </div>

      {/* Bottom Technology & Link Footer */}
      <div className="pt-4 border-t border-white/[0.06] space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
          <span className="text-slate-500">
            {project.metrics && project.metrics.length > 0
              ? `${project.metrics[0].label}: ${project.metrics[0].value}`
              : "CASE_STUDY_SPEC"}
          </span>
          <span className="inline-flex items-center gap-1 font-bold text-white group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
            View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
