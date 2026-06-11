/**
 * DatePicker
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Labeled date input. Consistent with Input. Supports retroactive dates via max prop.
 * props:
 *   label    — input label (optional)
 *   value    — controlled value YYYY-MM-DD (required)
 *   onChange — change handler (required)
 *   max      — max date string YYYY-MM-DD (optional, defaults to today)
 *   min      — min date string YYYY-MM-DD (optional)
 *   error    — error message string (optional)
 *   disabled — boolean (default: false)
 */

import React from "react";
import "./DatePicker.css";

export function DatePicker({
  label = null,
  value,
  onChange,
  max = new Date().toISOString().split("T")[0],
  min = null,
  error = null,
  disabled = false,
}) {
  return (
    <div className="date-picker">
      {label && <label className="date-picker__label">{label}</label>}
      <input
        className={[
          "date-picker__input",
          error ? "date-picker__input--error" : "",
          disabled ? "date-picker__input--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        type="date"
        value={value}
        onChange={onChange}
        max={max}
        min={min || undefined}
        disabled={disabled}
      />
      {error && <span className="date-picker__error">{error}</span>}
    </div>
  );
}
