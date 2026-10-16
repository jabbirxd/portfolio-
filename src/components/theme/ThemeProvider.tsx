"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "jabbir-portfolio-theme";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

/**
 * Reads the theme the blocking <head> script already resolved
 * (localStorage, falling back to prefers-color-scheme) into
 * document.documentElement.dataset.theme before first paint.
 * Using it as the lazy state initializer means the provider never
 * needs a setState-inside-effect to catch up — no theme flash.
 */
function readThemeFromDOM(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light"
    ? "light"
    : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readThemeFromDOM);

  // Sync outward only: persist the choice and keep the DOM attribute
  // (and color-scheme) in step. No state is set here.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
