/**
 * LayoutFooter
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: Sticky footer, centered content slot.
 * props:
 *   children — content to render inside the footer (required)
 */

import React from 'react';
import './LayoutFooter.css';

export function LayoutFooter({ children }) {
  return (
    <footer className="layout-footer">
      <div className="layout-footer__inner">
        {children}
      </div>
    </footer>
  );
}
