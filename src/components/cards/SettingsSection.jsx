/**
 * SettingsSection
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: Settings section wrapper with title and grouped rows.
 *              Always used as a parent of SettingsRow components.
 * props:
 *   title     — section title (required)
 *   children  — SettingsRow components (required)
 *
 * usage:
 *   <SettingsSection title="Appearance">
 *     <SettingsRow label="Dark mode" description="Toggle dark/light theme">
 *       <ToggleDarkLight ... />
 *     </SettingsRow>
 *   </SettingsSection>
 */

import React from "react";
import "./SettingsSection.css";

export function SettingsSection({ title, children }) {
  return (
    <div className="settings-section">
      <div className="settings-section__title">{title}</div>
      {/* body wraps all child SettingsRow components */}
      <div className="settings-section__body">{children}</div>
    </div>
  );
}
