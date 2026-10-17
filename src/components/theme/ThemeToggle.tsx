"use client";

import React, { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

/**
 * True on the client after hydration, false during SSR.
 * Replaces the old `mounted` useState+useEffect pattern (which the
 * react-hooks/set-state-in-effect lint rule forbids) and keeps the
 * server HTML identical to the first client render (placeholder icon).
 */
function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useIsMounted();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className={cn(
        "relative p-2 rounded-lg border border-[var(--border-subtle)]",
        "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)]",
        "hover:text-[var(--text-primary)] hover:border-[var(--border-default)]",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={theme}
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.span>
        ) : (
          <span key="placeholder" className="block w-4 h-4" />
        )}
      </AnimatePresence>
    </button>
  );
}
