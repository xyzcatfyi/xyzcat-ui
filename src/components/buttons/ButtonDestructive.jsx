/**
 * ButtonDestructive
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Destructive action button — red tones, signals danger.
 *              Use for delete, reset, remove, and other irreversible actions.
 *              Always pair with a confirmation modal (ModalConfirm) to prevent accidents.
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
 *   <ButtonDestructive label="Delete" onClick={handleDelete} />
 *   <ButtonDestructive label="Reset all data" onClick={handleReset} shape="pill" />
 */

import React from "react";
import "./ButtonDestructive.css";

// Lookup maps keep className logic clean — ?? falls back to default if invalid value passed
const SIZES = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

const SHAPES = {
  rounded: "btn--rounded",
  pill: "btn--pill",
};

export function ButtonDestructive({
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
    "btn--destructive",
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
      aria-busy={loading}
      aria-label={loading ? `${label} — loading` : label}
    >
      {/* Left icon — hidden during loading to make room for spinner */}
      {iconLeft && !loading && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {iconLeft}
        </span>
      )}

      {/* Spinner replaces icons during loading */}
      {loading && <span className="btn__spinner" aria-hidden="true" />}

      <span className="btn__label">{label}</span>

      {/* Right icon — hidden during loading */}
      {iconRight && !loading && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  );
}
