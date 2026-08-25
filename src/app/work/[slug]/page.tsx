import React from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderCallout } from "@/components/ui/PlaceholderCallout";
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
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Selected Work", href: "/work" },
            { label: project.title },
          ]}
        />

        {/* 1. Header Section */}
        <header className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={getCategoryBadgeVariant(project.filterCategory)} size="md">
              {getCategoryIcon(project.filterCategory)}
              <span className="ml-1">{project.filterCategory}</span>
            </Badge>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {project.timeline}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans">
            {project.tagline}
          </p>

          <PlaceholderCallout
            label="Case Study Template"
            field={`Dynamic route active at /work/${project.slug}. Tailored for ${project.filterCategory} domain presentation`}
          />

          {/* Hero Visual Mockup / Schematic */}
          <div className="pt-4 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090e] shadow-2xl p-2 sm:p-4">
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
                  icon={<GithubIcon className="w-4 h-4 text-slate-400" />}
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
                  icon={<Play className="w-4 h-4 text-amber-400" />}
                >
                  Watch Video Reel
                </Button>
              )}
            </div>
          )}
        </header>

        {/* 2. Key Metrics Bar (if provided) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl bg-[#0a0d14] border border-white/[0.06] text-center"
              >
                <div className="text-2xl font-extrabold text-white font-mono">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono mt-1">
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
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-indigo-400 font-mono text-base">01.</span> Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Problem Statement */}
            {project.problem && (
              <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-amber-400 font-mono text-base">02.</span> The Challenge & Problem Scope
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Approach */}
            {project.approach && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono text-base">03.</span> Strategic Approach & Solution
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.approach}
                </p>
              </section>
            )}

            {/* Process Phases */}
            {project.process && project.process.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-indigo-400 font-mono text-base">04.</span> Execution & Process
                </h2>
                <div className="space-y-4">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0a0d14] border border-white/[0.06] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-indigo-400">
                        <span>{step.phase}</span>
                      </div>
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-base">05.</span> Implementation Architecture
                </h2>
                <div className="space-y-4">
                  {project.implementation.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0a0d14] border border-white/[0.06] space-y-3"
                    >
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                      {item.technicalDetails && (
                        <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-400">
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
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-base">06.</span> Results & Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 space-y-2"
                    >
                      {res.metric && (
                        <span className="text-2xl font-extrabold font-mono text-emerald-400 block">
                          {res.metric}
                        </span>
                      )}
                      <span className="text-xs font-mono uppercase text-emerald-300 font-bold block">
                        {res.label}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300">{res.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {project.whatILearned && project.whatILearned.length > 0 && (
              <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.08]">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  What I Learned & Key Takeaways
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.whatILearned.map((learning, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
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
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">Disciplines:</span>
                  <span className="text-slate-300">{project.disciplines.join(" · ")}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Role:</span>
                  <span className="text-slate-300">{project.role}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Timeline:</span>
                  <span className="text-slate-300">{project.timeline}</span>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-white/[0.08] text-center space-y-4">
              <h4 className="text-sm font-bold text-white">Have a related problem?</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether you need scalable architecture, workflow automation, or interface design, let&apos;s build it.
              </p>
              <Button href="/contact" variant="primary" size="sm" className="w-full">
                Initiate Discussion
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
