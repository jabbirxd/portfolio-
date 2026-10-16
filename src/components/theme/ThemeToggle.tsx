"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        "transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
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
