import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "research";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  isExternal = false,
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white font-semibold border border-indigo-400/40 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30",
    secondary:
      "bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-raised)] text-[var(--text-primary)] font-semibold border border-[var(--border-default)] hover:border-[var(--border-strong)]",
    outline:
      "bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)] font-semibold border border-[var(--border-default)] hover:border-[var(--border-strong)]",
    ghost:
      "bg-transparent hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold border-transparent",
    research:
      "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold border border-emerald-400/40 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30",
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs rounded-xl gap-1.5",
    md: "px-4.5 py-2 text-sm rounded-xl gap-2",
    lg: "px-5.5 py-2.5 text-sm sm:text-base rounded-xl gap-2.5",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-app)] select-none font-sans",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
