/**
 * SettingsRow
 * version: 0.1.0
 * created: 06-06-2026
 * updated: 02-07-2026
 * description: A single settings row — label, optional description, right slot.
 *              The right slot (children) is for controls: toggles, buttons, selects.
 *              Used inside SettingsSection.
 * props:
 *   label        — row label (required)
 *   description  — optional description text below label
 *   children     — optional right-side control slot
 *
 * usage:
 *   <SettingsRow label="Dark mode">
 *     <ToggleDarkLight ... />
 *   </SettingsRow>
 *
 *   <SettingsRow label="Export data" description="Download your data as JSON">
 *     <ButtonSecondary label="Export" onClick={handleExport} size="sm" />
 *   </SettingsRow>
 */

import React from "react";
import "./SettingsRow.css";

export function SettingsRow({ label, description = null, children = null }) {
  return (
    <div className="settings-row">
      {/* Left side: label and optional description */}
      <div className="settings-row__left">
        <div className="settings-row__label">{label}</div>
        {description && (
          <div className="settings-row__description">{description}</div>
        )}
      </div>
      {/* Right slot: only renders if children are passed */}
      {children && <div className="settings-row__right">{children}</div>}
    </div>
  );
}
