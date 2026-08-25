/**
 * Centralized Design Tokens for Mohammad Jabbir's Portfolio & Research Journal
 * Visual Identity: Premium Technology Studio × Modern Scientific Research Lab
 */

export const designTokens = {
  colors: {
    background: {
      app: "#05070a", // AMOLED baseline
      surface: "#0a0d14", // Primary card & component surface
      surfaceRaised: "#0f131d", // Elevated interactive states
      surfaceHover: "#151b28",
      subtle: "rgba(255, 255, 255, 0.025)",
    },
    border: {
      subtle: "rgba(255, 255, 255, 0.06)",
      default: "rgba(255, 255, 255, 0.10)",
      strong: "rgba(255, 255, 255, 0.16)",
      accentStudio: "rgba(99, 102, 241, 0.35)",
      accentResearch: "rgba(16, 185, 129, 0.35)",
      accentSystem: "rgba(14, 165, 233, 0.35)",
    },
    text: {
      primary: "#f1f5f9", // Off-white, high contrast
      secondary: "#94a3b8", // Clean readable body & metadata
      muted: "#64748b", // Subtle descriptions
      subtle: "#475569", // Footers & small tags
      accentStudio: "#818cf8",
      accentResearch: "#34d399",
      accentSystem: "#38bdf8",
    },
    accents: {
      studio: {
        base: "#6366f1",
        light: "#818cf8",
        subtle: "rgba(99, 102, 241, 0.10)",
        border: "rgba(99, 102, 241, 0.25)",
      },
      research: {
        base: "#10b981",
        light: "#34d399",
        subtle: "rgba(16, 185, 129, 0.10)",
        border: "rgba(16, 185, 129, 0.25)",
      },
      system: {
        base: "#0ea5e9",
        light: "#38bdf8",
        subtle: "rgba(14, 165, 233, 0.10)",
        border: "rgba(14, 165, 233, 0.25)",
      },
      creative: {
        base: "#f59e0b",
        light: "#fbbf24",
        subtle: "rgba(245, 158, 11, 0.10)",
        border: "rgba(245, 158, 11, 0.25)",
      },
    },
  },
  typography: {
    fontDisplay: "var(--font-geist-sans)",
    fontBody: "var(--font-geist-sans)",
    fontMono: "var(--font-geist-mono)",
  },
  radii: {
    sm: "6px",
    md: "10px",
    lg: "14px",
    xl: "20px",
    "2xl": "28px",
    full: "9999px",
  },
  motion: {
    transitionFast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionNormal: "250ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionSlow: "400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;
