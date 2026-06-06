/**
 * NavBar
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: Navigation bar — horizontal (top) or vertical (sidebar) orientation.
 * props:
 *   items         — array of { label, value, icon? } (required)
 *   activeItem    — value of the currently active item (required)
 *   onItemClick   — function(value) called on item click (required)
 *   orientation   — "horizontal" | "vertical" (default: "horizontal")
 */

import React from 'react';
import './NavBar.css';

export function NavBar({
  items = [],
  activeItem,
  onItemClick,
  orientation = 'horizontal',
}) {
  return (
    <nav className={`navbar navbar--${orientation}`}>
      {items.map(({ label, value, icon: Icon }) => (
        <button
          key={value}
          className={`navbar__item ${activeItem === value ? 'navbar__item--active' : ''}`}
          onClick={() => onItemClick(value)}
          title={label}
        >
          {Icon && (
            <span className="navbar__icon" aria-hidden="true">
              <Icon size={15} />
            </span>
          )}
          <span className="navbar__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
