/**
 * LayoutHeaderText
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: App header with text title, optional subtitle, and right slot.
 * props:
 *   title       — main app title (required)
 *   subtitle    — optional subtitle or version string
 *   right       — optional right-side slot (nav, toggle, etc.)
 *   sticky      — boolean, sticky at top on scroll (default: true)
 */

import React from 'react';
import './LayoutHeaderText.css';

export function LayoutHeaderText({
  title,
  subtitle = null,
  right = null,
  sticky = true,
}) {
  return (
    <header className={`layout-header ${sticky ? 'layout-header--sticky' : ''}`}>
      <div className="layout-header__inner">

        {/* Left — title + subtitle */}
        <div className="layout-header__title-group">
          <span className="layout-header__title">{title}</span>
          {subtitle && (
            <span className="layout-header__subtitle">{subtitle}</span>
          )}
        </div>

        {/* Right — optional slot */}
        {right && (
          <div className="layout-header__right">
            {right}
          </div>
        )}

      </div>
    </header>
  );
}
