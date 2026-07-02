/**
 * ButtonPrimary
 * version: 0.1.0
 * created: 05-06-2026
 * updated: 02-07-2026
 * description: Primary action button. Reference component for the xyzcat-ui button system.
 *              Use for the main/most important action on a screen. One per view ideally.
 * props:
 *   label      — button text (required)
 *   onClick    — click handler (required)
 *   shape      — "rounded" | "pill" (default: "rounded")
 *   size       — "sm" | "md" | "lg" (default: "md")
 *   iconLeft   — optional Lucide icon component
 *   iconRight  — optional Lucide icon component
 *   disabled   — boolean (default: false)
 *   loading    — boolean (default: false)
 *
 * usage:
 *   <ButtonPrimary label="Save" onClick={handleSave} />
 *   <ButtonPrimary label="Saving..." onClick={handleSave} loading={true} />
 *   <ButtonPrimary label="Delete" onClick={handleDelete} shape="pill" size="sm" />
 */

import React from "react";
import "./ButtonPrimary.css";

// Lookup maps keep the className logic clean and make valid values explicit.
// If an invalid size/shape is passed, ?? falls back to the default safely.
const SIZES = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

const SHAPES = {
  rounded: "btn--rounded",
  pill: "btn--pill",
};

export function ButtonPrimary({
  label,
  onClick,
  shape = "rounded",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  loading = false,
}) {
  const classes = [
    "btn",
    "btn--primary",
    // ?? (nullish coalescing) falls back to default if size/shape is undefined or null
    SIZES[size] ?? SIZES.md,
    SHAPES[shape] ?? SHAPES.rounded,
    loading ? "btn--loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}
      // Disabled during loading too — prevents double-submits
      disabled={disabled || loading}
      // aria-busy tells screen readers the button is processing
      aria-busy={loading}
      // aria-label provides context for screen readers during loading state
      aria-label={loading ? `${label} — loading` : label}
    >
      {/* Left icon — hidden during loading to make room for spinner */}
      {iconLeft && !loading && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {iconLeft}
        </span>
      )}

      {/* Spinner replaces icons during loading — CSS animated via btn--loading class */}
      {loading && <span className="btn__spinner" aria-hidden="true" />}

      <span className="btn__label">{label}</span>

      {/* Right icon — hidden during loading to make room for spinner */}
      {iconRight && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
}
