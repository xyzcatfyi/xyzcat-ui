/**
 * IconBtn
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Icon-only button. For toolbar actions, inline controls, nav extras.
 * props:
 *   icon     — Lucide icon component (required)
 *   onClick  — click handler (required)
 *   title    — tooltip and aria-label (required)
 *   size     — icon size in px (default: 16)
 *   variant  — "default" | "destructive" (default: "default")
 */

import React from "react";
import "./IconBtn.css";

export function IconBtn({
  icon: Icon,
  onClick,
  title,
  size = 16,
  variant = "default",
}) {
  return (
    <button
      className={`icon-btn icon-btn--${variant}`}
      onClick={onClick}
      title={title}
      aria-label={title}
      type="button"
    >
      <Icon size={size} />
    </button>
  );
}
