"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 14,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: shouldReduceMotion ? 0.05 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-10 sm:mb-12",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-[var(--accent-studio-subtle)] text-[var(--accent-studio)] border border-[var(--accent-studio-border)] mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-studio)] animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
