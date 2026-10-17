import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProjectVisualPreview } from "@/components/cards/ProjectVisualPreview";
import { GithubIcon } from "@/components/icons/BrandIcons";
import {
  ExternalLink,
  Calendar,
  UserCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Workflow,
  Sparkles,
  BookOpen,
  ArrowRight,
  Film,
  Dna,
  Layout,
  Play,
} from "lucide-react";
import type { Metadata } from "next";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Case Study Not Found" };
  }

  return {
    title: `${project.title} | Selected Work`,
    description: project.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Section numbering: only sections with content get numbers, in order.
  // This keeps numbering sequential (01, 02, 03…) even when a project
  // skips optional sections like Implementation or Results.
  const sectionOrder = [
    { key: "overview", show: true },
    { key: "challenge", show: !!project.problem },
    { key: "approach", show: !!project.approach },
    { key: "process", show: !!project.process && project.process.length > 0 },
    { key: "implementation", show: !!project.implementation && project.implementation.length > 0 },
    { key: "results", show: !!project.results && project.results.length > 0 },
    { key: "learnings", show: !!project.whatILearned && project.whatILearned.length > 0 },
  ];
  const sectionNum = (key: string) =>
    String(
      sectionOrder.filter((s) => s.show).findIndex((s) => s.key === key) + 1
    ).padStart(2, "0");

  const getCategoryBadgeVariant = (cat: typeof project.filterCategory) => {
    switch (cat) {
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

  const getCategoryIcon = (cat: typeof project.filterCategory) => {
    switch (cat) {
      case "DEVELOPMENT":
        return <Cpu className="w-4 h-4" />;
      case "UI/UX":
        return <Layout className="w-4 h-4" />;
      case "AUTOMATION":
        return <Workflow className="w-4 h-4" />;
      case "CREATIVE":
        return <Film className="w-4 h-4" />;
      case "RESEARCH":
        return <Dna className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Check if at least one link exists
  const hasAnyLink = Boolean(
    project.liveUrl || project.repoUrl || project.prototypeUrl || project.demoUrl
  );

  return (
    <div className="py-12 sm:py-16">
      <Container size="lg" className="space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Selected Work", href: "/work" },
            { label: project.title },
          ]}
        />

        {/* 1. Header Section */}
        <header className="space-y-6 pb-10 border-b border-[var(--border-default)]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={getCategoryBadgeVariant(project.filterCategory)} size="md">
              {getCategoryIcon(project.filterCategory)}
              <span className="ml-1">{project.filterCategory}</span>
            </Badge>
            <span className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              {project.timeline}
            </span>
            <span className="text-xs font-mono text-[var(--text-secondary)] flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.15] font-sans">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-sans">
            {project.tagline}
          </p>

          {/* Hero Visual Mockup / Schematic */}
          <div className="pt-4 rounded-2xl overflow-hidden border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl p-2 sm:p-4">
            <ProjectVisualPreview project={project} />
          </div>

          {/* External Action Links (Only rendered if they exist) */}
          {hasAnyLink && (
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  size="md"
                  isExternal
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Demonstration
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  href={project.repoUrl}
                  variant="outline"
                  size="md"
                  isExternal
                  icon={<GithubIcon className="w-4 h-4 text-[var(--text-secondary)]" />}
                >
                  Source Repository
                </Button>
              )}
              {project.prototypeUrl && (
                <Button
                  href={project.prototypeUrl}
                  variant="primary"
                  size="md"
                  isExternal
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Figma Prototype
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  variant="outline"
                  size="md"
                  isExternal
                  icon={<Play className="w-4 h-4 text-[var(--accent-creative)]" />}
                >
                  Watch Video Reel
                </Button>
              )}
            </div>
          )}
        </header>

        {/* 2. Key Metrics Bar (if provided) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 sm:p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center"
              >
                <div className="text-sm sm:text-2xl font-extrabold text-[var(--text-primary)] font-mono break-words">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider font-mono mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Main Case Study Body: Overview -> Problem -> Approach -> Process -> Implementation -> Results -> Learnings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("overview")}.</span> Overview
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Problem Statement */}
            {project.problem && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("challenge")}.</span> The Challenge & Problem Scope
                </h2>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Approach */}
            {project.approach && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("approach")}.</span> Strategic Approach & Solution
                </h2>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  {project.approach}
                </p>
              </section>
            )}

            {/* Process Phases */}
            {project.process && project.process.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("process")}.</span> Execution & Process
                </h2>
                <div className="space-y-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--accent-studio)]">
                        <span>{step.phase}</span>
                      </div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Implementation Details */}
            {project.implementation && project.implementation.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("implementation")}.</span> Implementation Architecture
                </h2>
                <div className="space-y-4">
                  {project.implementation.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3"
                    >
                      <h3 className="text-base font-bold text-[var(--text-primary)]">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                      {item.technicalDetails && (
                        <ul className="space-y-1.5 pl-4 list-disc text-xs text-[var(--text-secondary)]">
                          {item.technicalDetails.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results & Measurable Impact */}
            {project.results && project.results.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("results")}.</span> Results & Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--accent-research-subtle)] border border-[var(--accent-research-border)] space-y-2"
                    >
                      {res.metric && (
                        <span className="text-2xl font-extrabold font-mono text-[var(--accent-research)] block">
                          {res.metric}
                        </span>
                      )}
                      <span className="text-xs font-mono uppercase text-[var(--accent-research)] font-bold block">
                        {res.label}
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{res.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {project.whatILearned && project.whatILearned.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[var(--accent-studio)] font-mono text-base">{sectionNum("learnings")}.</span>
                  What I Learned & Key Takeaways
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.whatILearned.map((learning, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-secondary)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar: Metadata & Tech Spec */}
          <aside className="space-y-6">
            <Card variant="studio" className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3 text-xs font-mono">
                <div>
                  <span className="text-[var(--text-muted)] block">Disciplines:</span>
                  <span className="text-[var(--text-secondary)]">{project.disciplines.join(" · ")}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block">Primary Role:</span>
                  <span className="text-[var(--text-secondary)]">{project.role}</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)] block">Timeline:</span>
                  <span className="text-[var(--text-secondary)]">{project.timeline}</span>
                </div>
              </div>
            </Card>

          </aside>
        </div>

        {/* Closing CTA: full-width, not squeezed into the sidebar */}
        <Card variant="solid" className="mt-12 p-8 sm:p-10 text-center space-y-4">
          <h4 className="text-lg font-bold text-[var(--text-primary)]">Questions about this project?</h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            The code is on GitHub — or just ask me about it directly.
          </p>
          <Button href="/contact" variant="primary" size="md">
            Get in Touch
          </Button>
        </Card>
      </Container>
    </div>
  );
}
