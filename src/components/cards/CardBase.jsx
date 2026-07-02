/**
 * CardBase
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Simple surface container. Base card for all card variants.
 *              Use as a wrapper to group related content visually.
 *              Extend by passing className for app-specific card variants.
 * props:
 *   children  — card content (required)
 *   padding   — internal padding (default: "1rem")
 *   className — optional additional class names
 *
 * usage:
 *   <CardBase>
 *     <p>Some content</p>
 *   </CardBase>
 *
 *   <CardBase padding="1.5rem" className="my-custom-card">
 *     <p>Custom padded card</p>
 *   </CardBase>
 */

import React from "react";
import "./CardBase.css";

export function CardBase({ children, padding = "1rem", className = "" }) {
  return (
    // trim() removes any trailing space if className is empty
    <div className={`card-base ${className}`.trim()} style={{ padding }}>
      {/* children renders whatever is passed between the opening and closing tags */}
      {children}
    </div>
  );
}
