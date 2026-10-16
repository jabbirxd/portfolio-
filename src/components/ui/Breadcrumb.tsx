import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-xs sm:text-sm text-[var(--text-secondary)] mb-6", className)}
    >
      <Link
        href="/"
        className="flex items-center hover:text-[var(--text-primary)] transition-colors"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[var(--text-primary)] font-medium truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[var(--text-primary)] transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
