/**
 * CardBase
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Simple surface container. Base card for all card variants.
 * props:
 *   children  — card content (required)
 *   padding   — internal padding (default: "1rem")
 *   className — optional additional class names
 */

import React from "react";
import "./CardBase.css";

export function CardBase({ children, padding = "1rem", className = "" }) {
  return (
    <div className={`card-base ${className}`.trim()} style={{ padding }}>
      {children}
    </div>
  );
}
