/**
 * IconBtn
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Icon-only button. For toolbar actions, inline controls, nav extras.
 *              Always requires a title — this doubles as the tooltip and aria-label
 *              so the button is accessible without a visible text label.
 * props:
 *   icon     — Lucide icon component (required)
 *   onClick  — click handler (required)
 *   title    — tooltip and aria-label (required for accessibility)
 *   size     — icon size in px (default: 16)
 *   variant  — "default" | "destructive" (default: "default")
 *
 * usage:
 *   import { Trash2 } from "lucide-react";
 *   <IconBtn icon={Trash2} onClick={handleDelete} title="Delete item" variant="destructive" />
 *   <IconBtn icon={Settings} onClick={handleSettings} title="Open settings" />
 */

import React from "react";
import "./IconBtn.css";

export function IconBtn({
  // Renaming icon to Icon (capital I) lets us use it as a JSX component below.
  // Lucide icons are React components — they must start with a capital letter in JSX.
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
      // title provides the native browser tooltip on hover
      title={title}
      // aria-label makes the button accessible to screen readers
      // since there is no visible text label
      aria-label={title}
      // type="button" prevents accidental form submission if wrapped in a form
      type="button"
    >
      <Icon size={size} />
    </button>
  );
}
