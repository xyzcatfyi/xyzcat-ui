/**
 * DatePicker
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Labeled date input. Consistent with Input. Supports retroactive dates via max prop.
 *              Defaults max to today so users cannot select future dates unless explicitly allowed.
 * props:
 *   label    — input label (optional)
 *   value    — controlled value YYYY-MM-DD (required)
 *   onChange — change handler (required)
 *   max      — max date string YYYY-MM-DD (optional, defaults to today)
 *   min      — min date string YYYY-MM-DD (optional)
 *   error    — error message string (optional)
 *   disabled — boolean (default: false)
 *
 * usage:
 *   <DatePicker label="Date" value={date} onChange={e => setDate(e.target.value)} />
 *   <DatePicker label="Date" value={date} onChange={e => setDate(e.target.value)} min="2020-01-01" />
 */

import React from "react";
import "./DatePicker.css";

export function DatePicker({
  label = null,
  value,
  onChange,
  // toISOString() returns "YYYY-MM-DDTHH:mm:ss.sssZ" — we split on "T"
  // and take the first part to get just the date in YYYY-MM-DD format,
  // which is what the HTML date input expects
  max = new Date().toISOString().split("T")[0],
  min = null,
  error = null,
  disabled = false,
}) {
  return (
    <div className="date-picker">
      {/* Label is optional — only renders if provided */}
      {label && <label className="date-picker__label">{label}</label>}

      <input
        className={[
          "date-picker__input",
          // Modifier classes added conditionally, falsy values filtered out
          error ? "date-picker__input--error" : "",
          disabled ? "date-picker__input--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        type="date"
        value={value}
        onChange={onChange}
        max={max}
        // passing undefined (not null) removes the attribute from the DOM entirely
        // — null would render as the string "null" which breaks the date input
        min={min || undefined}
        disabled={disabled}
      />

      {/* Error message only renders when error prop is provided */}
      {error && <span className="date-picker__error">{error}</span>}
    </div>
  );
}
