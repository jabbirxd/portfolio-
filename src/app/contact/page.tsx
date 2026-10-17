import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Md. Jabbir Ali",
  description:
    "Get in touch with Md. Jabbir Ali — email, GitHub, and LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="lg" className="space-y-12">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="space-y-6 pb-10 border-b border-[var(--border-default)]">
          <Eyebrow icon={<Mail className="w-3.5 h-3.5 text-[var(--accent-studio)]" />}>
            DIRECT CHANNELS
          </Eyebrow>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-sans">
            Let&apos;s talk.
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed font-sans">
            I&apos;m looking for junior web developer roles and internships.
            The fastest way to reach me is email — I usually reply within a
            day or two.
          </p>
        </div>

        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="interactive" className="p-6 sm:p-8">
            <a href={`mailto:${siteConfig.socials.email}`} className="group block space-y-4">
              <div className="p-3 rounded-xl bg-[var(--accent-studio-subtle)] text-[var(--accent-studio)] w-fit">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-1">Email</div>
                <div className="text-sm font-mono text-[var(--text-primary)] break-all group-hover:text-[var(--accent-studio)] transition-colors">
                  {siteConfig.socials.email}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                Write me <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </Card>

          <Card variant="interactive" className="p-6 sm:p-8">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
            >
              <div className="p-3 rounded-xl bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] w-fit">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-1">GitHub</div>
                <div className="text-sm font-mono text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors">
                  github.com/jabbirxd
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                See my code <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </Card>

          <Card variant="interactive" className="p-6 sm:p-8">
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block space-y-4"
            >
              <div className="p-3 rounded-xl bg-sky-500/10 text-[var(--accent-system)] w-fit">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--text-muted)] uppercase mb-1">LinkedIn</div>
                <div className="text-sm font-mono text-[var(--text-primary)] group-hover:text-[var(--accent-system)] transition-colors">
                  Md. Jabbir Ali
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                Connect <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </Card>
        </div>
        </Reveal>

        <Reveal>
        <Card variant="studio" className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[var(--text-secondary)] font-sans">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--text-muted)]" />
              {siteConfig.location}
            </div>
          </div>
        </Card>
        </Reveal>
      </Container>
    </div>
  );
}
