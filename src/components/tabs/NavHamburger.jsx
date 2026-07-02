/**
 * NavHamburger
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Hamburger menu toggle with dropdown. General purpose — extend as needed.
 *              Uses same click-outside pattern as SelectMulti.
 * props:
 *   items   — array of { label, value, onClick? } (required)
 *   align   — "left" | "right" (default: "right")
 *
 * usage:
 *   <NavHamburger
 *     items={[
 *       { label: "Settings", value: "settings", onClick: () => navigate("/settings") },
 *       { label: "About", value: "about", onClick: () => navigate("/about") },
 *     ]}
 *     align="right"
 *   />
 */

import React, { useState, useRef, useEffect } from "react";
import "./NavHamburger.css";

export function NavHamburger({ items = [], align = "left" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside the component
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    // Clean up listener on unmount to avoid memory leaks
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="hamburger" ref={ref}>
      <button
        className={`hamburger__btn ${open ? "hamburger__btn--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        // aria-expanded tells screen readers whether the menu is open
        aria-expanded={open}
      >
        {/* Three bars — the classic hamburger icon */}
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {/* Dropdown only renders when open — fully removed from DOM when closed */}
      {open && (
        <div className={`hamburger__menu hamburger__menu--${align}`}>
          {items.map(({ label, value, onClick }) => (
            <button
              key={value}
              className="hamburger__item"
              onClick={() => {
                // Call the item's own onClick if provided, then close the menu
                onClick?.();
                setOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
