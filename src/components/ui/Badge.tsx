import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?:
    | "default"
    | "studio"
    | "research"
    | "system"
    | "creative"
    | "outline"
    | "subtle"
    | "indigo"
    | "emerald"
    | "cyan"
    | "amber";
  size?: "sm" | "md";
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "sm",
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-[var(--bg-surface-raised)] text-[var(--text-secondary)] border-[var(--border-default)]",
    studio: "bg-[var(--accent-studio-subtle)] text-[var(--accent-studio)] border-[var(--accent-studio-border)]",
    indigo: "bg-[var(--accent-studio-subtle)] text-[var(--accent-studio)] border-[var(--accent-studio-border)]",
    research: "bg-[var(--accent-research-subtle)] text-[var(--accent-research)] border-[var(--accent-research-border)]",
    emerald: "bg-[var(--accent-research-subtle)] text-[var(--accent-research)] border-[var(--accent-research-border)]",
    system: "bg-[var(--accent-system-subtle)] text-[var(--accent-system)] border-[var(--accent-system-border)]",
    cyan: "bg-[var(--accent-system-subtle)] text-[var(--accent-system)] border-[var(--accent-system-border)]",
    creative: "bg-[var(--accent-creative-subtle)] text-[var(--accent-creative)] border-[var(--accent-creative-border)]",
    amber: "bg-[var(--accent-creative-subtle)] text-[var(--accent-creative)] border-[var(--accent-creative-border)]",
    outline: "bg-transparent text-[var(--text-secondary)] border-[var(--border-default)]",
    subtle: "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border-[var(--border-subtle)]",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs font-mono",
    md: "px-3 py-1 text-xs font-mono",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-md border tracking-tight transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
