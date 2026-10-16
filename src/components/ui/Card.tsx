import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "studio" | "interactive" | "subtle" | "bordered" | "glass" | "solid";
  className?: string;
}

export function Card({
  children,
  variant = "studio",
  className,
  ...props
}: CardProps) {
  const variantClasses = {
    studio: "studio-card p-6 sm:p-8",
    interactive: "studio-card-interactive p-6 sm:p-8 cursor-pointer",
    subtle: "bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8",
    bordered: "bg-transparent border border-[var(--border-default)] rounded-2xl p-6 sm:p-8",
    glass: "studio-card p-6 sm:p-8",
    solid: "bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-2xl p-6 sm:p-8",
  };

  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
