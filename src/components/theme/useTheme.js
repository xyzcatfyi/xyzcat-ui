// ============================================
// useTheme
// version: 0.1.0
// created: (unknown)
// updated: 02-07-2026
// description: Custom hook for theme state management.
//              Checks localStorage first, then system preference, then defaults to light.
//              Applies data-theme attribute to document root so base monochrome
//              CSS tokens respond automatically.
//
// usage:
//   import { useTheme } from './useTheme';
//   const { theme, toggleTheme } = useTheme();
//   <div data-theme={theme}>...</div>
// ============================================

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Priority order: 1) saved preference, 2) system preference, 3) light default
    const saved = localStorage.getItem("xyzcat-theme");
    if (saved) return saved;

    // matchMedia checks the OS/browser dark mode setting
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    // data-theme on <html> means all CSS token definitions respond globally
    document.documentElement.setAttribute("data-theme", theme);
    // Persist so the preference survives page refresh
    localStorage.setItem("xyzcat-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
