// ============================================
// useTheme — xyzcat-ui
// ============================================
// Custom hook for theme state management.
// Checks localStorage first, then system preference.
// Applies data-theme attribute to document root
// so Flexoki CSS tokens respond automatically.

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("xyzcat-theme");
    if (saved) return saved;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  // Apply data-theme to <html> and persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("xyzcat-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}