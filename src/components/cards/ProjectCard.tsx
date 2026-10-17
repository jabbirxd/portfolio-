import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectVisualPreview } from "@/components/cards/ProjectVisualPreview";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/motion/Spotlight";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  headingLevel?: "h2" | "h3";
  showLearning?: boolean;
}

export function ProjectCard({ project, className, headingLevel = "h3", showLearning = false }: ProjectCardProps) {
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
    <Spotlight
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-raised)] hover:-translate-y-1 transition-all duration-200 shadow-xl hover:shadow-2xl overflow-hidden p-6 sm:p-8",
        isLarge && "lg:col-span-2 lg:row-span-2",
        isWide && "lg:col-span-2",
        className
      )}
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[var(--text-secondary)] hidden sm:inline">
              {"//"} {project.role}
            </span>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)] tracking-wider">
            {project.timeline}
          </span>
        </div>

        {/* Title */}
        {React.createElement(
          headingLevel,
          {
            className: cn(
              "font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-studio)] transition-colors font-sans tracking-tight mb-2",
              isLarge ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            ),
          },
          <Link href={`/work/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {project.title}
          </Link>
        )}

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Summary Description - full on /work, teaser on home */}
        <p className={`text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 ${showLearning ? "" : "line-clamp-3"}`}>
          {showLearning ? project.description : project.summary}
        </p>

        {showLearning && project.whatILearned && project.whatILearned[0] && (
          <p className="text-xs text-[var(--text-muted)] italic leading-relaxed mb-4 border-l-2 border-[var(--accent-studio)] pl-3">
            What I learned: {project.whatILearned[0]}
          </p>
        )}

        {showLearning && (project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3 mb-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-studio)] hover:underline"
              >
                Live demo <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline"
              >
                Source code <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}

        {/* Visual Mockup Preview */}
        <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-app)]/60 group-hover:border-[var(--border-default)] transition-colors">
          <ProjectVisualPreview project={project} />
        </div>
      </div>

      {/* Bottom Technology & Link Footer */}
      <div className="pt-4 border-t border-[var(--border-subtle)] space-y-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)] pt-1">
          <span className="text-[var(--text-muted)]">
            {project.metrics && project.metrics.length > 0
              ? `${project.metrics[0].label}: ${project.metrics[0].value}`
              : "CASE_STUDY_SPEC"}
          </span>
          <span className="inline-flex items-center gap-1 font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-studio)] group-hover:translate-x-1 transition-all">
            View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Spotlight>
  );
}
