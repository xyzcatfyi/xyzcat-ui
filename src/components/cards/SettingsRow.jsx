/**
 * SettingsRow
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 06-06-2026
 * description: A single settings row — label, optional description, right slot.
 * props:
 *   label        — row label (required)
 *   description  — optional description text below label
 *   children     — optional right-side control slot
 */

import React from 'react';
import './SettingsRow.css';

export function SettingsRow({ label, description = null, children = null }) {
  return (
    <div className="settings-row">
      <div className="settings-row__left">
        <div className="settings-row__label">{label}</div>
        {description && (
          <div className="settings-row__description">{description}</div>
        )}
      </div>
      {children && (
        <div className="settings-row__right">{children}</div>
      )}
    </div>
  );
}
