/**
 * IconPlaceholder
 * version: 0.1.0
 * created: 09-06-2026
 * updated: 09-06-2026
 * description: Development placeholder icon. Use when a real icon hasn't been chosen yet.
 * props:
 *   size — icon size in px: 16 | 18 | 24 | 32 (default: 24)
 */

import React from "react";

export function IconPlaceholder({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <line
        x1="8"
        y1="8"
        x2="16"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="8"
        x2="8"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
