import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Color theme for the pill */
  variant?: "default" | "studio" | "research";
  /** Optional leading icon or indicator dot */
  icon?: React.ReactNode;
  className?: string;
}

const variantClasses = {
  default:
    "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border-[var(--border-default)]",
  studio:
    "bg-[var(--accent-studio-subtle)] text-[var(--accent-studio)] border-[var(--accent-studio-border)]",
  research:
    "bg-emerald-500/10 text-[var(--accent-research)] border-emerald-500/20",
};

/**
 * Small pill-shaped label shown above section headings.
 * Replaces the one-off eyebrow badge markup that used to be
 * copy-pasted across pages.
 */
export function Eyebrow({
  children,
  variant = "default",
  icon,
  className,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase",
        variantClasses[variant],
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
