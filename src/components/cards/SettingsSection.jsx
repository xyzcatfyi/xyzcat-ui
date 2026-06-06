/**
 * SettingsSection
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: Settings section wrapper with title and grouped rows.
 * props:
 *   title     — section title (required)
 *   children  — SettingsRow components (required)
 */

import React from 'react';
import './SettingsSection.css';

export function SettingsSection({ title, children }) {
  return (
    <div className="settings-section">
      <div className="settings-section__title">{title}</div>
      <div className="settings-section__body">{children}</div>
    </div>
  );
}
