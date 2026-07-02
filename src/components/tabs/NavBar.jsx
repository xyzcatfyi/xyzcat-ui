/**
 * NavBar
 * version: 0.1.1
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Navigation bar — horizontal (top) or vertical (sidebar) orientation.
 *              Use horizontal for top nav on desktop, vertical for sidebar layouts.
 *              On mobile, consider placing horizontal NavBar at the bottom via CSS.
 * props:
 *   items         — array of { label, value, icon? } (required)
 *   activeItem    — value of the currently active item (required)
 *   onItemClick   — function(value) called on item click (required)
 *   orientation   — "horizontal" | "vertical" (default: "horizontal")
 *   showLabels    — boolean, always show labels regardless of screen size (default: false)
 *                   labels also always show automatically when an item has no icon
 *
 * usage:
 *   import { Home, Settings } from "lucide-react";
 *   <NavBar
 *     items={[
 *       { label: "Home", value: "home", icon: Home },
 *       { label: "Settings", value: "settings", icon: Settings },
 *     ]}
 *     activeItem={activeTab}
 *     onItemClick={setActiveTab}
 *   />
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
        // Renaming icon to Icon (capital I) lets us use it as a JSX component
        const hasIcon = !!Icon;
        return (
          <button
            key={value}
            className={`navbar__item ${activeItem === value ? "navbar__item--active" : ""}`}
            onClick={() => onItemClick(value)}
            // title provides tooltip on hover — useful when labels are hidden
            title={label}
          >
            {hasIcon && (
              // aria-hidden — icon is decorative, label provides the accessible name
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
