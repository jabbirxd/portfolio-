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
    default: "bg-slate-900/90 text-slate-300 border-white/[0.08]",
    studio: "bg-indigo-950/40 text-indigo-300 border-indigo-500/30",
    indigo: "bg-indigo-950/40 text-indigo-300 border-indigo-500/30",
    research: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
    emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-500/30",
    system: "bg-sky-950/40 text-sky-300 border-sky-500/30",
    cyan: "bg-sky-950/40 text-sky-300 border-sky-500/30",
    creative: "bg-amber-950/40 text-amber-300 border-amber-500/30",
    amber: "bg-amber-950/40 text-amber-300 border-amber-500/30",
    outline: "bg-transparent text-slate-300 border-white/[0.12]",
    subtle: "bg-white/[0.03] text-slate-400 border-white/[0.05]",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px] font-mono",
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
