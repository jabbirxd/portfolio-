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
    subtle: "bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8",
    bordered: "bg-transparent border border-white/[0.1] rounded-2xl p-6 sm:p-8",
    glass: "studio-card p-6 sm:p-8",
    solid: "bg-[#0a0d14] border border-white/[0.08] rounded-2xl p-6 sm:p-8",
  };

  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
