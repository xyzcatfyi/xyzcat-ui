/**
 * Select
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Labeled dropdown. Companion to Input, consistent styling.
 * props:
 *   label    — select label (optional)
 *   value    — controlled value (required)
 *   onChange — change handler (required)
 *   options  — array of { value, label } (required)
 *   error    — error message string (optional)
 *   disabled — boolean (default: false)
 */

import React from "react";
import "./Select.css";

export function Select({
  label = null,
  value,
  onChange,
  options = [],
  error = null,
  disabled = false,
}) {
  return (
    <div className="select-field">
      {label && <label className="select-field__label">{label}</label>}
      <select
        className={[
          "select-field__select",
          error ? "select-field__select--error" : "",
          disabled ? "select-field__select--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="select-field__error">{error}</span>}
    </div>
  );
}
