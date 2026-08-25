import React from "react";
import { notFound } from "next/navigation";
import { getResearchBySlug, getAllResearchSlugs } from "@/data/research";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PlaceholderCallout } from "@/components/ui/PlaceholderCallout";
import { ScientificPathwayVisual } from "@/components/research/ScientificPathwayVisual";
import {
  FlaskConical,
  Dna,
  FileText,
  Calendar,
  UserCheck,
  Compass,
  CheckCircle2,
  ExternalLink,
  Target,
  Layers,
  ArrowRight,
  BookOpen,
  Microscope,
  Cpu,
} from "lucide-react";
import type { Metadata } from "next";

interface ResearchDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllResearchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResearchDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const research = getResearchBySlug(slug);

  if (!research) {
    return { title: "Research Study Not Found" };
  }

  return {
    title: `${research.title} | Research`,
    description: research.abstract,
  };
}

export default async function ResearchDetailPage({
  params,
}: ResearchDetailPageProps) {
  const { slug } = await params;
  const research = getResearchBySlug(slug);

  if (!research) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <Container size="lg">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Scientific Research", href: "/research" },
            { label: research.title },
          ]}
        />

        {/* 1. Academic Header Section */}
        <header className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="research" size="md">
              <FlaskConical className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              {research.domain}
            </Badge>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
              Status: {research.status}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {research.timeline}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              {research.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
            {research.title}
          </h1>

          <p className="text-lg sm:text-xl text-emerald-400/90 max-w-3xl leading-relaxed font-sans">
            {research.tagline}
          </p>

          <PlaceholderCallout
            label="Academic Case Study"
            field={`Dynamic study active at /research/${research.slug}. Structured for peer-review methodology and in silico docking workflows`}
          />

          {/* Scientific Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {research.paperUrl ? (
              <Button
                href={research.paperUrl}
                variant="research"
                size="md"
                isExternal
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Read Published Preprint / Paper
              </Button>
            ) : (
              <div className="text-xs font-mono text-slate-500 flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <FileText className="w-4 h-4 text-emerald-400/80" />
                <span>Preprint / Journal links will be indexed upon manuscript publication</span>
              </div>
            )}
          </div>
        </header>

        {/* 2. Scientific Pathway Diagram (Featured Visual) */}
        {research.pathwayNodes && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Mechanistic Pathway Mapping
              </h2>
            </div>
            <ScientificPathwayVisual nodes={research.pathwayNodes} />
          </section>
        )}

        {/* 3. Main Case Study Body: Background -> Research Question -> Hypothesis -> Targets -> Methodology -> Analysis -> Results -> Discussion -> Future Work -> References */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Background */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-base">01.</span> Background & Biological Context
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {research.background || research.abstract}
              </p>
            </section>

            {/* Research Question */}
            {research.researchQuestion && (
              <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">02.</span> Primary Research Question
                </h2>
                <p className="text-emerald-200 text-sm sm:text-base leading-relaxed italic font-serif">
                  &ldquo;{research.researchQuestion}&rdquo;
                </p>
              </section>
            )}

            {/* Hypothesis */}
            {research.hypothesis && (
              <section className="p-6 sm:p-8 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-emerald-400 font-mono text-base">03.</span> Working Hypothesis
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-sans">
                  {research.hypothesis}
                </p>
              </section>
            )}

            {/* Target Biomolecules Breakdown */}
            {research.targets && research.targets.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">04.</span> Targeted Anti-Apoptotic Biomolecules
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {research.targets.map((tgt) => (
                    <div
                      key={tgt.symbol}
                      className="p-4 rounded-xl bg-[#0a0d14] border border-white/[0.08] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white font-mono">{tgt.symbol}</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/30">
                          TARGET
                        </span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-300">{tgt.name}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tgt.significance}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Methodology (In Silico & Computational Screening) */}
            {research.methodology && research.methodology.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">05.</span> In Silico Methodology & Pipeline
                </h2>
                <div className="space-y-4">
                  {research.methodology.map((phase, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0a0d14] border border-white/[0.06] space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                        <span>{phase.phase}</span>
                        {phase.domainFocus && <span className="text-slate-500">{phase.domainFocus}</span>}
                      </div>
                      <h3 className="text-base font-bold text-white">{phase.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {phase.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Analysis & Computational Evaluation */}
            {research.analysis && research.analysis.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">06.</span> Analytical Framework
                </h2>
                <div className="space-y-4">
                  {research.analysis.map((sec, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#0a0d14] border border-white/[0.06] space-y-3"
                    >
                      <h3 className="text-base font-bold text-white">{sec.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {sec.description}
                      </p>
                      {sec.parametersEvaluated && (
                        <div className="pt-2 border-t border-white/[0.04]">
                          <span className="text-[10px] font-mono text-slate-500 block mb-1">
                            PARAMETERS EVALUATED:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {sec.parametersEvaluated.map((param, pIdx) => (
                              <span
                                key={pIdx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.06]"
                              >
                                {param}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            {research.results && research.results.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">07.</span> In Silico Findings & Observations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {research.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 space-y-2"
                    >
                      {res.statusTag && (
                        <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">
                          [{res.statusTag}]
                        </span>
                      )}
                      <h4 className="text-sm font-bold text-white">{res.label}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{res.finding}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Discussion */}
            {research.discussion && (
              <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">08.</span> Discussion & Structural Rationale
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  {research.discussion}
                </p>
              </section>
            )}

            {/* Future Work */}
            {research.futureWork && research.futureWork.length > 0 && (
              <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.08]">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Dna className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-base">09.</span> Future Investigative Directions
                </h2>
                <ul className="space-y-2.5 pt-2">
                  {research.futureWork.map((fw, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{fw}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* References & Scientific Literature */}
            {research.references && research.references.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-white/[0.08]">
                <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono uppercase text-xs tracking-wider text-slate-400">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  Key Scientific Literature
                </h2>
                <div className="space-y-3 text-xs font-mono text-slate-400">
                  {research.references.map((ref, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                      <p className="text-slate-300 leading-relaxed">{ref.citation}</p>
                      {ref.doiOrUrl && (
                        <a
                          href={ref.doiOrUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors pt-1"
                        >
                          <span>{ref.doiOrUrl}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card variant="studio" className="space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                  Methodologies & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {research.methods.map((method) => (
                    <span
                      key={method}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-emerald-950/20 text-emerald-300 border border-emerald-800/30"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-3 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">Investigative Domain:</span>
                  <span className="text-slate-300">{research.domain}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Keywords:</span>
                  <span className="text-slate-300">{research.keywords.join(", ")}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Timeline:</span>
                  <span className="text-slate-300">{research.timeline}</span>
                </div>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-white/[0.08] text-center space-y-4">
              <h4 className="text-sm font-bold text-white">Scientific Collaboration</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open to discussions regarding in silico macromolecular modeling, apoptotic pathways, and computational biology pipelines.
              </p>
              <Button href="/contact" variant="research" size="sm" className="w-full">
                Reach Out for Inquiry
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
