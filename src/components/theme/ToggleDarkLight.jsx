// ============================================
// ThemeToggle — xyzcat-ui
// ============================================
// Dark/light mode toggle button.
// Pair with useTheme() hook from ./useTheme.js
//
// USAGE:
// import { useTheme } from './useTheme';
// import { ThemeToggle } from './ThemeToggle';
//
// const { theme, toggleTheme } = useTheme();
// <ThemeToggle theme={theme} onToggle={toggleTheme} />
//
// PROPS:
// - theme: 'dark' | 'light'
// - onToggle: function
// - size: number — icon size in px (default: 16)
// ============================================

import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ theme, onToggle, size = 16 }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display:     "flex",
        alignItems:  "center",
        gap:         6,
        background:  "var(--ui)",
        border:      "1px solid var(--ui-2)",
        borderRadius: 99,
        padding:     "6px 12px",
        cursor:      "pointer",
        color:       "var(--tx)",
        fontSize:    12,
        fontWeight:  500,
        fontFamily:  "inherit",
        transition:  "all 0.2s ease",
      }}
    >
      {isDark ? <Sun size={size} /> : <Moon size={size} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}