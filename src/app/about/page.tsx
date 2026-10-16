import React from "react";
import { educationData, experiencesData } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  Hammer,
  GraduationCap,
  Briefcase,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  Compass,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Flame,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Md. Jabbir Ali",
  description:
    "Multidisciplinary Developer · Designer · Researcher working at the intersection of software engineering, design systems, and computational biology.",
};

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "Understand first.",
      tagline: "Break the problem down before building.",
      description:
        "Before writing a single line of code or drafting an interface, I deconstruct the problem to understand how the underlying system behaves, where the real bottlenecks exist, and what the core objective demands.",
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      accent: "studio",
    },
    {
      num: "02",
      title: "Build practically.",
      tagline: "Prefer solutions that actually work over unnecessary complexity.",
      description:
        "I favor clean architecture, measurable reliability, and direct utility over superficial trends or convoluted abstractions. The best solution is the one that solves the actual problem cleanly and stays maintainable.",
      icon: <Hammer className="w-5 h-5 text-emerald-400" />,
      accent: "research",
    },
    {
      num: "03",
      title: "Keep learning.",
      tagline: "Move across disciplines when the problem requires it.",
      description:
        "Complex challenges rarely fit into neat departmental silos. When a project demands full-stack backend performance, nuanced interface accessibility, automated data extraction, or biological informatics, I learn whatever is necessary to deliver the outcome.",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      accent: "creative",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20">
      <Container size="xl">
        <Breadcrumb items={[{ label: "About Me" }]} />

        {/* 1. Opening Hero Section */}
        <section className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>MD. JABBIR ALI // BIOGRAPHY & APPROACH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans">
            About Me
          </h1>

          <p className="text-xl sm:text-3xl font-medium text-slate-200 max-w-3xl leading-relaxed font-sans">
            I&apos;m a final-year CSE student learning web development by <span className="text-indigo-400 font-semibold">building real projects</span> and <span className="text-emerald-400 font-semibold">shipping them</span>.
          </p>

          <div className="max-w-3xl text-slate-400 text-sm sm:text-base leading-relaxed space-y-4 pt-2 font-sans">
            <p>
              I work with Next.js and TypeScript on the frontend and I&apos;m learning PHP and Laravel for the backend. I&apos;m honest about where I am: I can read and explain code well, and I&apos;m building the ability to create from scratch by finishing one project at a time.
            </p>
            <p>
              Outside of web dev, I&apos;m doing independent study in computational biology. My approach everywhere is the same: understand how the thing works, then build something small that proves it.
            </p>
          </div>
        </section>

        {/* 2. My Approach — Three Core Principles */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Core Philosophy"
            title="My Approach"
            description="The foundational principles that guide how I solve technical challenges, design interfaces, and conduct research."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((p) => (
              <Card
                key={p.num}
                variant="interactive"
                className="flex flex-col justify-between p-6 sm:p-8 space-y-6 bg-[#0a0d14]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      PRINCIPLE // {p.num}
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      {p.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                    {p.title}
                  </h3>

                  <p className="text-xs font-mono text-indigo-300 font-medium">
                    {p.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-mono text-slate-600">
                  STANDARD: RIGOROUS_EXECUTION
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Education Timeline */}
        <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Academic Foundations"
            title="Education"
            description="Where I studied and what I focused on."
          />

          <div className="space-y-6 relative border-l border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-4 border-[#05070a] group-hover:scale-125 transition-transform" />

                <Card variant="studio" className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      <span className="text-base font-bold text-white">{edu.institution}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-200">
                      {edu.degree} — <span className="text-slate-400">{edu.field}</span>
                    </h4>
                    {edu.honorsOrNotes && (
                      <p className="text-xs font-mono text-slate-400">{edu.honorsOrNotes}</p>
                    )}
                  </div>

                  {edu.relevantCoursework && (
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1.5">
                        Relevant Coursework & Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantCoursework.map((course) => (
                          <span
                            key={course}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.06]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Experience Timeline */}
        <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Practical Experience"
            title="Experience & Engagements"
            description="What I have been doing lately."
          />

          <div className="space-y-6 relative border-l border-white/[0.08] ml-4 sm:ml-6 pl-6 sm:pl-8">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-400 border-4 border-[#05070a] group-hover:scale-125 transition-transform" />

                <Card variant="interactive" className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                      <span className="text-base font-bold text-white">{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={exp.type === "Research" ? "research" : "studio"} size="sm">
                        {exp.type}
                      </Badge>
                      <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-indigo-300">
                    {exp.organization} · {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-400 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Beyond the Screen — Hands-on Engineering & Curiosity */}
        <section className="pt-4">
          <Card variant="studio" className="p-8 sm:p-12 border-white/[0.08] bg-[#070a10] space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Wrench className="w-5 h-5" />
              </div>
              <Badge variant="creative">Hands-On Curiosity</Badge>
            </div>

            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                What I&apos;m looking for
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                I graduate in 2026 and I&apos;m looking for a junior web developer role or internship where I can keep learning on real work. I learn fast, I finish what I start, and I&apos;m comfortable saying &ldquo;I don&apos;t know that yet&rdquo;.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-slate-500">Currently:</span>
                <span className="text-slate-300">Building with Next.js · Learning Laravel · Open to work</span>
              </div>
              <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Get in Touch
              </Button>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}
