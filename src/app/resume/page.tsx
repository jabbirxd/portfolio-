"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { experiencesData, educationData } from "@/data/experience";
import { skillsCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Printer,
  Download,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
  FlaskConical,
  Code,
  Trophy,
  Layers,
  Info,
} from "lucide-react";

export default function ResumePage() {
  const [downloadNotice, setDownloadNotice] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
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

  const achievementsData = [
    {
      title: "[Placeholder] Academic & Research Milestone",
      details: "[Placeholder: Thesis presentation / research grant / honors recognition]",
      year: "2024 - 2025",
    },
    {
      title: "[Placeholder] Technical / Open-Source Milestone",
      details: "[Placeholder: Architecture delivery / workflow automation milestone / publication]",
      year: "2024",
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <Container size="lg">
        <Breadcrumb items={[{ label: "Curriculum Vitae" }]} />

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Curriculum Vitae</h1>
            <p className="text-slate-400 text-sm mt-1">
              Interactive & printable resume record for Md. Jabbir Ali.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={handleDownload}
              variant="primary"
              size="sm"
              icon={<Download className="w-4 h-4" />}
            >
              Download CV (PDF)
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
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {downloadNotice && (
          <div
            role="status"
            className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-200 text-xs font-mono flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                Physical /cv.pdf file is currently pending placement. Opening native browser Print / Save to PDF generator.
              </span>
            </div>
            <button
              onClick={() => setDownloadNotice(false)}
              className="text-slate-400 hover:text-white text-xs underline cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Printable Resume Sheet */}
        <div className="rounded-3xl p-6 sm:p-12 space-y-10 bg-[#080b11] border border-white/[0.08] shadow-2xl">
          {/* Header Identity */}
          <div className="border-b border-white/[0.08] pb-8 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {siteConfig.name}
            </h2>
            <p className="text-base font-semibold text-indigo-400 font-mono">
              Web Developer
            </p>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-sans">
              Final-year CSE student building real web projects with Next.js, TypeScript, and Laravel.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                {siteConfig.url}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {siteConfig.socials.email}
              </span>
            </div>
          </div>

          {/* 1. Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-emerald-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              01. Academic Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/30">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-300">
                    {edu.institution} — {edu.location} ({edu.field})
                  </p>
                  {edu.honorsOrNotes && (
                    <p className="text-xs text-slate-400">{edu.honorsOrNotes}</p>
                  )}
                  {edu.relevantCoursework && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {edu.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-400 border border-white/[0.04]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Research Interest */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-emerald-400 flex items-center gap-2">
              <FlaskConical className="w-4 h-4" />
              02. Research Interest
            </h3>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-base font-bold text-white">
                  Independent Study — Computational Drug Design
                </h4>
                <span className="text-xs font-mono text-slate-400">2024 - Present</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Independent academic exploration of computational drug design
                (molecular docking, dynamics simulations, trajectory analysis).
                Manuscript in preparation — details stay private until published.
              </p>
            </div>
          </div>

          {/* 3. Selected Projects & Engineering Systems */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-indigo-400 flex items-center gap-2">
              <Code className="w-4 h-4" />
              03. Selected Engineering Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectsData.slice(0, 4).map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">{proj.title}</h4>
                    <span className="text-[10px] font-mono text-slate-500">{proj.timeline}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {proj.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-slate-300 border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Core Competencies */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-indigo-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              04. Technical & Methodological Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsCategories.map((category) => (
                <div
                  key={category.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5"
                >
                  <h4 className="text-xs font-bold text-white">{category.name}</h4>
                  <p className="text-xs text-slate-400">
                    {category.skills.map((s) => s.name).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-indigo-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              05. Practical Experience
            </h3>
            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-xs font-mono text-indigo-300">
                        {exp.organization} — {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="space-y-1 pl-4 list-disc text-xs text-slate-400">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Achievements */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-wider uppercase text-amber-400 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              06. Achievements & Milestones
            </h3>
            <div className="space-y-3">
              {achievementsData.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-xs font-bold text-white">{ach.title}</h4>
                    <p className="text-xs text-slate-400">{ach.details}</p>
                  </div>
                  <span className="text-xs font-mono text-amber-400/90 whitespace-nowrap">
                    {ach.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
