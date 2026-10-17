"use client";

import { Reveal } from "@/components/motion/Reveal";

import React, { useState } from "react";
;
import { projectsData } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function WorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home-work" className="relative pt-12 sm:pt-16 scroll-mt-24">
      <Container size="xl">
        <Reveal>
        {/* Section Heading & Copy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <SectionHeader
            eyebrow="Portfolio & Case Studies"
            title="Selected Work"
            description="Real projects I designed, built, and shipped. Each one taught me something."
            className="mb-0 max-w-2xl"
          />

        </div>

        {/* Editorial Project Layout Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {projectsData.map((project) => (
              <motion.div data-anim
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  project.displaySize === "large" && "md:col-span-2",
                  project.displaySize === "wide" && "md:col-span-2"
                )}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Explorer Action Link */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <span>Explore individual technical breakdowns and source links</span>
          <Button href="/work" variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
            View Full Index ({projectsData.length})
          </Button>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
