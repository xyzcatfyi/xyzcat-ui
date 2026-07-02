// ============================================
// ToggleDarkLight
// version: 0.1.0
// updated: 02-07-2026
// description: Dark/light mode toggle button.
//              Pair with useTheme() hook from ./useTheme.js
//              Note: currently uses inline styles — CSS file to be added in future pass.
//
// usage:
//   import { useTheme } from './useTheme';
//   import { ToggleDarkLight } from './ToggleDarkLight';
//
//   const { theme, toggleTheme } = useTheme();
//   <ToggleDarkLight theme={theme} onToggle={toggleTheme} />
//
// props:
//   theme    — "dark" | "light" (required)
//   onToggle — function (required)
//   size     — icon size in px (default: 16)
// ============================================

import { Sun, Moon } from "lucide-react";

export function ToggleDarkLight({ theme, onToggle, size = 16 }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      // title provides native browser tooltip
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "var(--bg2)",
        border: "1px solid var(--ui)",
        borderRadius: 99,
        padding: "6px 12px",
        cursor: "pointer",
        color: "var(--tx)",
        fontSize: 12,
        fontWeight: 500,
        fontFamily: "inherit",
        transition: "all 0.2s ease",
      }}
    >
      {/* Sun icon for dark mode (clicking switches to light), Moon for light mode */}
      {isDark ? <Sun size={size} /> : <Moon size={size} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ToggleDarkLight;
