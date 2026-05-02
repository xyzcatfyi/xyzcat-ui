// ============================================
// ThemeToggle — xyzcat-ui
// ============================================
// A reusable dark/light mode toggle component.
// Uses Lucide icons (Sun + Moon) and persists
// the user's preference to localStorage.
//
// USAGE:
// 1. Import the hook and component:
//    import { useTheme, ThemeToggle } from './components/ThemeToggle';
//
// 2. In your root component, call the hook:
//    const { theme, toggleTheme } = useTheme();
//
// 3. Pass the theme to your app wrapper and the toggle to wherever you want the button:
//    <div style={{ background: theme === 'dark' ? '#111' : '#fff' }}>
//      <ThemeToggle theme={theme} onToggle={toggleTheme} />
//    </div>
//
// PROPS:
// - theme: 'dark' | 'light'
// - onToggle: function — called when the button is clicked
// - size: number — icon size in px (default: 16)
// ============================================

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

// ============================================
// useTheme HOOK
// ============================================
// A custom React hook that manages theme state.
// Checks localStorage first, then system preference.
// Returns the current theme and a toggle function.

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check if user has a saved preference
    const saved = localStorage.getItem("xyzcat-theme");
    if (saved) return saved;

    // 2. Fall back to system preference
    // window.matchMedia checks the OS-level dark/light mode setting
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    // 3. Default to light if nothing else applies
    return "light";
  });

  // Save preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("xyzcat-theme", theme);
  }, [theme]);

  // Toggle between dark and light
  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
}

// ============================================
// THEME TOKENS
// ============================================
// The actual colour values for each theme.
// Import and use these in your app for consistent theming.
// Add more tokens here as your design system grows.

export const THEMES = {
  dark: {
    background:     "#111111",
    surface:        "#1e1e1e",
    surfaceAlt:     "#1a1a1a",
    border:         "#2a2a2a",
    text:           "#e8e8e8",
    textMuted:      "#aaaaaa",
    textSubtle:     "#555555",
    accent:         "#22C55E",
    danger:         "#EF4444",
    warning:        "#F59E0B",
  },
  light: {
    background:     "#f5f5f5",
    surface:        "#ffffff",
    surfaceAlt:     "#fafafa",
    border:         "#e0e0e0",
    text:           "#111111",
    textMuted:      "#555555",
    textSubtle:     "#aaaaaa",
    accent:         "#16a34a",
    danger:         "#dc2626",
    warning:        "#d97706",
  },
};

// ============================================
// ThemeToggle COMPONENT
// ============================================
// The actual toggle button. Pass in the current
// theme and the toggle function from useTheme().

export function ThemeToggle({ theme, onToggle, size = 16 }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        // Pill-shaped toggle button
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: isDark ? "#2a2a2a" : "#e8e8e8",
        border: `1px solid ${isDark ? "#3a3a3a" : "#d0d0d0"}`,
        borderRadius: 99,
        padding: "6px 12px",
        cursor: "pointer",
        color: isDark ? "#e8e8e8" : "#111111",
        fontSize: 12,
        fontWeight: 600,
        fontFamily: "inherit",
        transition: "all 0.2s ease",
      }}
    >
      {/* Show Sun icon in dark mode (click to go light), Moon in light mode (click to go dark) */}
      {isDark ? <Sun size={size} /> : <Moon size={size} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}