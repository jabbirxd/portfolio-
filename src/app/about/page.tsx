import React from "react";
import { Reveal } from "@/components/motion/Reveal";
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
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "Understand first.",
      tagline: "Break the problem down before building.",
      description:
        "Before writing a single line of code or drafting an interface, I deconstruct the problem to understand how the underlying system behaves, where the real bottlenecks exist, and what the core objective demands.",
      icon: <Compass className="w-5 h-5 text-[var(--accent-studio)]" />,
      accent: "studio",
    },
    {
      num: "02",
      title: "Build practically.",
      tagline: "Prefer solutions that actually work over unnecessary complexity.",
      description:
        "I favor clean architecture, measurable reliability, and direct utility over superficial trends or convoluted abstractions. The best solution is the one that solves the actual problem cleanly and stays maintainable.",
      icon: <Hammer className="w-5 h-5 text-[var(--accent-research)]" />,
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
        <Reveal>
          <section className="space-y-6 pb-12 border-b border-[var(--border-default)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-default)]">
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent-studio)]" />
            <span>MD. JABBIR ALI // BIOGRAPHY & APPROACH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            About Me
          </h1>

          <p className="text-xl sm:text-3xl font-medium text-[var(--text-primary)] max-w-3xl leading-relaxed font-sans">
            I&apos;m a final-year CSE student learning web development by <span className="text-[var(--accent-studio)] font-semibold">building real projects</span> and <span className="text-[var(--accent-research)] font-semibold">shipping them</span>.
          </p>

          <div className="max-w-3xl text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed space-y-4 pt-2 font-sans">
            <p>
              I work with Next.js and TypeScript on the frontend and I&apos;m learning PHP and Laravel for the backend. I&apos;m honest about where I am: I can read and explain code well, and I&apos;m building the ability to create from scratch by finishing one project at a time.
            </p>
            <p>
              Outside of web dev, I&apos;m doing independent study in computational biology. My approach everywhere is the same: understand how the thing works, then build something small that proves it.
            </p>
          </div>
          </section>
        </Reveal>

        {/* 2. My Approach — Three Core Principles */}
        <Reveal>
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
                className="flex flex-col justify-between p-6 sm:p-8 space-y-6 bg-[var(--bg-surface)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[var(--text-muted)] font-bold">
                      PRINCIPLE // {p.num}
                    </span>
                    <div className="p-2 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
                      {p.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight font-sans">
                    {p.title}
                  </h3>

                  <p className="text-xs font-mono text-[var(--accent-studio)] font-medium">
                    {p.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-[var(--text-secondary)]">
                  STANDARD: RIGOROUS_EXECUTION
                </div>
              </Card>
            ))}
          </div>
          </section>
        </Reveal>

        {/* 3. Education Timeline */}
        <Reveal>
          <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Academic Foundations"
            title="Education"
            description="Where I studied and what I focused on."
          />

          <div className="space-y-6 relative border-l border-[var(--border-default)] ml-4 sm:ml-6 pl-6 sm:pl-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-4 border-[var(--bg-app)] group-hover:scale-125 transition-transform" />

                <Card variant="studio" className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[var(--accent-research)]" />
                      <span className="text-base font-bold text-[var(--text-primary)]">{edu.institution}</span>
                    </div>
                    <span className="text-xs font-mono text-[var(--accent-research)] bg-[var(--accent-research-subtle)] px-2 py-0.5 rounded border border-[var(--accent-research-border)]">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                      {edu.degree} — <span className="text-[var(--text-secondary)]">{edu.field}</span>
                    </h4>
                    {edu.honorsOrNotes && (
                      <p className="text-xs font-mono text-[var(--text-secondary)]">{edu.honorsOrNotes}</p>
                    )}
                  </div>

                  {edu.relevantCoursework && (
                    <div className="pt-2">
                      <span className="text-xs font-mono text-[var(--text-secondary)] uppercase block mb-1.5">
                        Relevant Coursework & Focus:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantCoursework.map((course) => (
                          <span
                            key={course}
                            className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
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
        </Reveal>

        {/* 4. Experience Timeline */}
        <Reveal>
          <section className="space-y-8 pt-4">
          <SectionHeader
            eyebrow="Practical Experience"
            title="Experience & Engagements"
            description="What I have been doing lately."
          />

          <div className="space-y-6 relative border-l border-[var(--border-default)] ml-4 sm:ml-6 pl-6 sm:pl-8">
            {experiencesData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-400 border-4 border-[var(--bg-app)] group-hover:scale-125 transition-transform" />

                <Card variant="interactive" className="p-6 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[var(--accent-studio)]" />
                      <span className="text-base font-bold text-[var(--text-primary)]">{exp.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={exp.type === "Research" ? "research" : "studio"} size="sm">
                        {exp.type}
                      </Badge>
                      <span className="text-xs font-mono text-[var(--text-secondary)]">{exp.period}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-[var(--accent-studio)]">
                    {exp.organization} · {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
                    {exp.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
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
        </Reveal>

        {/* 5. Beyond the Screen — Hands-on Engineering & Curiosity */}
        <Reveal>
          <section className="pt-4">
          <Card variant="studio" className="p-8 sm:p-12 border-[var(--border-default)] bg-[var(--bg-surface)] space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[var(--accent-creative)]">
                <Wrench className="w-5 h-5" />
              </div>
              <Badge variant="creative">Hands-On Curiosity</Badge>
            </div>

            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-sans">
                What I&apos;m looking for
              </h2>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans">
                I graduate in 2026 and I&apos;m looking for a junior web developer role or internship where I can keep learning on real work. I learn fast, I finish what I start, and I&apos;m comfortable saying &ldquo;I don&apos;t know that yet&rdquo;.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap gap-4 items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <span className="text-[var(--text-muted)]">Currently:</span>
                <span className="text-[var(--text-secondary)]">Building with Next.js · Learning Laravel · Open to work</span>
              </div>
              <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Get in Touch
              </Button>
            </div>
          </Card>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}
