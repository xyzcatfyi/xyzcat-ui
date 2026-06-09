/**
 * NavBar
 * version: 0.1.1
 * created: 06-06-2026
 * updated: 09-06-2026
 * description: Navigation bar — horizontal (top) or vertical (sidebar) orientation.
 * props:
 *   items         — array of { label, value, icon? } (required)
 *   activeItem    — value of the currently active item (required)
 *   onItemClick   — function(value) called on item click (required)
 *   orientation   — "horizontal" | "vertical" (default: "horizontal")
 *   showLabels    — boolean, always show labels regardless of screen size (default: false)
 *                   labels also always show automatically when an item has no icon
 */

import React from "react";
import "./NavBar.css";

export function NavBar({
  items = [],
  activeItem,
  onItemClick,
  orientation = "horizontal",
  showLabels = false,
}) {
  return (
    <nav
      className={`navbar navbar--${orientation} ${showLabels ? "navbar--show-labels" : ""}`}
    >
      {items.map(({ label, value, icon: Icon }) => {
        const hasIcon = !!Icon;
        return (
          <button
            key={value}
            className={`navbar__item ${activeItem === value ? "navbar__item--active" : ""}`}
            onClick={() => onItemClick(value)}
            title={label}
          >
            {hasIcon && (
              <span className="navbar__icon" aria-hidden="true">
                <Icon size={15} />
              </span>
            )}
            <span
              className={`navbar__label ${hasIcon ? "navbar__label--has-icon" : ""}`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
