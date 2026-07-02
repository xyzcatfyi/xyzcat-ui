/**
 * LayoutFooter
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Sticky footer, centered content slot.
 *              Pass any content as children — text, links, version string, etc.
 * props:
 *   children — content to render inside the footer (required)
 *
 * usage:
 *   <LayoutFooter>
 *     <span>cycle-tracker — your data stays yours</span>
 *   </LayoutFooter>
 */

import React from "react";
import "./LayoutFooter.css";

export function LayoutFooter({ children }) {
  return (
    <footer className="layout-footer">
      {/* Inner wrapper handles max-width and padding via CSS */}
      <div className="layout-footer__inner">{children}</div>
    </footer>
  );
}
