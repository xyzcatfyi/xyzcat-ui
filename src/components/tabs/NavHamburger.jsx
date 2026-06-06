/**
 * NavHamburger
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: Hamburger menu toggle with dropdown. General purpose — extend as needed.
 * props:
 *   items       — array of { label, value, onClick? } (required)
 *   align       — "left" | "right" (default: "right")
 */

import React, { useState, useRef, useEffect } from 'react';
import './NavHamburger.css';

export function NavHamburger({ items = [], align = 'left' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="hamburger" ref={ref}>

      {/* Toggle button */}
      <button
        className={`hamburger__btn ${open ? 'hamburger__btn--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
        <span className="hamburger__bar" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className={`hamburger__menu hamburger__menu--${align}`}>
          {items.map(({ label, value, onClick }) => (
            <button
              key={value}
              className="hamburger__item"
              onClick={() => {
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
