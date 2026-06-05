/**
 * ButtonPrimary
 * version: 0.1.0
 * created: 05-06-2026
 * updated: 05-06-2026
 * description: Primary action button. Reference component for the xyzcat-ui button system.
 * props:
 *   label      — button text (required)
 *   onClick    — click handler (required)
 *   shape      — "rounded" | "pill" (default: "rounded")
 *   size       — "sm" | "md" | "lg" (default: "md")
 *   iconLeft   — optional Lucide icon component
 *   iconRight  — optional Lucide icon component
 *   disabled   — boolean (default: false)
 *   loading    — boolean (default: false)
 */

import React from 'react';
import './ButtonPrimary.css';

const SIZES = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
};

const SHAPES = {
  rounded: 'btn--rounded',
  pill: 'btn--pill',
};

export function ButtonPrimary({
  label,
  onClick,
  shape = 'rounded',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  loading = false,
}) {
  const classes = [
    'btn',
    'btn--primary',
    SIZES[size] ?? SIZES.md,
    SHAPES[shape] ?? SHAPES.rounded,
    loading ? 'btn--loading' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-label={loading ? `${label} — loading` : label}
    >
      {/* Left icon — hidden during loading */}
      {iconLeft && !loading && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {iconLeft}
        </span>
      )}

      {/* Loading spinner */}
      {loading && (
        <span className="btn__spinner" aria-hidden="true" />
      )}

      {/* Label */}
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