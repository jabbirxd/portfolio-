"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { experiencesData, educationData } from "@/data/experience";
import { skillsCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
;
import {
  Printer,
  Download,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  FlaskConical,
  Code,
  Layers,
  Info,
} from "lucide-react";

export function ResumeClient() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownload = () => {
    // Graceful degradation: Check if cv.pdf exists via head request; if not, trigger print-to-pdf dialog
    fetch("/cv.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.status === 200) {
          window.location.href = "/cv.pdf";
        } else {
          setDownloadNotice(true);
          // Fallback to print dialog after short delay
          setTimeout(() => {
            window.print();
          }, 400);
        }
      })
      .catch(() => {
        setDownloadNotice(true);
        setTimeout(() => {
          window.print();
        }, 400);
      });
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container size="lg">
        <Breadcrumb items={[{ label: "Resume" }]} />

        {/* Action Header — hidden in print (the resume sheet has its own header) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[var(--border-default)] print-hide-header">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">Resume</h1>
            <p className="text-[var(--text-secondary)] text-sm mt-1">
              Education, projects, skills, and experience — printable as a PDF.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={handleDownload}
              variant="primary"
              size="sm"
              icon={<Download className="w-4 h-4" />}
            >
              Download Resume (PDF)
            </Button>
            <Button
              onClick={handlePrint}
              variant="outline"
              size="sm"
              icon={<Printer className="w-4 h-4" />}
            >
              Print / Save PDF
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="sm"
              className="no-print"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {downloadNotice && (
          <div
            role="status"
            className="p-4 rounded-xl bg-[var(--accent-studio-subtle)] border border-[var(--accent-studio-border)] text-[var(--accent-studio)] text-xs font-mono flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[var(--accent-studio)] shrink-0" />
              <span>
                PDF not available yet — opening print view instead.
              </span>
            </div>
            <button
              onClick={() => setDownloadNotice(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Printable Resume Sheet */}
        <div className="rounded-3xl p-6 sm:p-12 space-y-10 bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-2xl">
          {/* Header Identity */}
          <div className="border-b border-[var(--border-default)] pb-8 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
              {siteConfig.name}
            </h2>
            <p className="text-base font-semibold text-[var(--accent-studio)] font-mono">
              Web Developer
            </p>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed font-sans">
              Final-year CSE student building real web projects with Next.js, TypeScript, and Laravel.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-studio)]" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[var(--accent-studio)]" />
                {siteConfig.url}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[var(--accent-studio)]" />
                {siteConfig.socials.email}
              </span>
            </div>
          </div>

          {/* 1. Education */}
          <Reveal>
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[var(--accent-research)] flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              01. Academic Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <Card
                  variant="subtle"
                  key={edu.id}
                  className="p-5 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                    <span className="self-start text-xs font-mono text-[var(--accent-research)] bg-[var(--accent-research-subtle)] px-2 py-0.5 rounded border border-[var(--accent-research-border)]">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">
                    {edu.institution}
                  </p>
                  {edu.honorsOrNotes && (
                    <p className="text-xs text-[var(--text-secondary)]">{edu.honorsOrNotes}</p>
                  )}
                  {edu.relevantCoursework && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
          </Reveal>

          {/* 2. Research Interest */}
          <Reveal>
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[var(--accent-research)] flex items-center gap-2">
              <FlaskConical className="w-4 h-4" />
              02. Research Interest
            </h3>
            <Card variant="subtle" className="p-5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Independent Study — Computational Drug Design
                </h4>
                <span className="text-xs font-mono text-[var(--text-secondary)]">2024 - Present</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                Independent study in computational drug design. Details stay private until published.
              </p>
            </Card>
          </div>
          </Reveal>

          {/* 3. Selected Projects & Engineering Systems */}
          <Reveal>
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[var(--accent-studio)] flex items-center gap-2">
              <Code className="w-4 h-4" />
              03. Selected Engineering Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.slice(0, 4).map((proj, i, arr) => (
                <Card
                  variant="subtle"
                  key={proj.id}
                  className={`p-4 rounded-xl space-y-2${arr.length % 2 === 1 && i === arr.length - 1 ? " sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-[var(--text-primary)]">{proj.title}</h4>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">{proj.timeline}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-1.5 py-0.5 rounded bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          </Reveal>

          {/* 4. Core Competencies */}
          <Reveal>
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[var(--accent-studio)] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              04. Technical & Methodological Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsCategories.map((category, i, arr) => (
                <Card
                  variant="subtle"
                  key={category.id}
                  className={`p-4 rounded-xl space-y-1.5${arr.length % 2 === 1 && i === arr.length - 1 ? " sm:col-span-2" : ""}`}
                >
                  <h4 className="text-xs font-bold text-[var(--text-primary)]">{category.name}</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {category.skills.map((s) => s.name).join(" · ")}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          </Reveal>

          {/* 5. Experience */}
          <Reveal>
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[var(--accent-studio)] flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              05. Practical Experience
            </h3>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <Card
                  variant="subtle"
                  key={exp.id}
                  className="p-5 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">{exp.role}</h4>
                      <p className="text-xs font-mono text-[var(--accent-studio)]">
                        {exp.organization} — {exp.location}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-mono text-[var(--text-secondary)]">{exp.period}</span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-[var(--text-secondary)]">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
