"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Code2, Sparkles, FlaskConical, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0.05 : 0.35,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  });

  return (
    <section id="home-intro" className="relative pt-6 sm:pt-10 scroll-mt-24">
      {/* Editorial Transition Divider */}
      <div className="w-full border-t border-[var(--border-default)] mb-12 sm:mb-16">
        <Container size="xl">
          <div className="flex items-center justify-between py-2 text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest">
            <span>01 // How I work</span>
            <span className="hidden sm:inline">Perspective: Curious generalist</span>
            <span className="hidden sm:inline">Axis [Build × Learn × Explore]</span>
          </div>
        </Container>
      </div>

      <Container size="xl">
        {/* Editorial Heading & Supporting Copy */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <motion.div data-anim
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.05)}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] font-sans leading-[1.15]">
              I like solving problems from different angles.
            </h2>
          </motion.div>

          <motion.div data-anim
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.12)}
          >
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-sans">
              I build web apps, keep learning new parts of the stack, and stay curious about science. I enjoy taking a problem apart, understanding how it works, and building something that actually runs.
            </p>
          </motion.div>
        </div>

        {/* 3 Distinct Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: BUILD */}
          <motion.div data-anim
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.1)}
            className="h-full"
          >
            <Link
              href="/work"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-indigo-500/40 hover:bg-[var(--bg-surface-raised)] transition-all duration-200 shadow-lg hover:shadow-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-[var(--accent-studio)] group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <Badge variant="studio" size="sm">
                  ENGINEERING
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-studio)] transition-colors">
                  BUILD
                </h3>
                <p className="text-xs font-mono text-[var(--accent-studio)] font-semibold tracking-wide uppercase">
                  Web · Frontend · Backend
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                Shipping real web apps with Next.js and TypeScript, and built a complete Laravel e-commerce app for my field work.
              </p>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                <span className="text-[var(--text-muted)]">Next.js · TS · Laravel</span>
                <span className="inline-flex items-center gap-1 text-[var(--accent-studio)] font-bold group-hover:translate-x-1 transition-transform">
                  Explore Work <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 2: DESIGN */}
          <motion.div data-anim
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.18)}
            className="h-full"
          >
            <Link
              href="/skills"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-[var(--accent-system-border)] hover:bg-[var(--bg-surface-raised)] transition-all duration-200 shadow-lg hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-system-subtle)] border border-[var(--accent-system-border)] flex items-center justify-center text-[var(--accent-system)] group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="system" size="sm">
                  CREATIVE
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-system)] transition-colors">
                  DESIGN
                </h3>
                <p className="text-xs font-mono text-[var(--accent-system)] font-semibold tracking-wide uppercase">
                  UI · Responsive · Details
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                Interfaces that stay readable on any screen. I study real sites to learn what good UI feels like, then apply it.
              </p>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                <span className="text-[var(--text-muted)]">Tailwind · Responsive</span>
                <span className="inline-flex items-center gap-1 text-[var(--accent-system)] font-bold group-hover:translate-x-1 transition-transform">
                  View Skills <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Card 3: RESEARCH */}
          <motion.div data-anim
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={getTransition(0.26)}
            className="h-full"
          >
            <Link
              href="/research"
              className="group relative flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] hover:border-emerald-500/40 hover:bg-[var(--bg-surface-raised)] transition-all duration-200 shadow-lg hover:shadow-emerald-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 block"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[var(--accent-research)] group-hover:scale-105 transition-transform">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <Badge variant="research" size="sm">
                  INVESTIGATION
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-research)] transition-colors">
                  RESEARCH
                </h3>
                <p className="text-xs font-mono text-[var(--accent-research)] font-semibold tracking-wide uppercase">
                  Biology · Computation · Curiosity
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                Independent study in computational biology alongside my degree. Details stay private until published.
              </p>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                <span className="text-[var(--text-muted)]">Learning in public</span>
                <span className="inline-flex items-center gap-1 text-[var(--accent-research)] font-bold group-hover:translate-x-1 transition-transform">
                  View Research <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
