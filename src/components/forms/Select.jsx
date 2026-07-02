/**
 * Select
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Labeled dropdown. Companion to Input, consistent styling.
 *              Single selection only — use SelectMulti for multiple selections.
 * props:
 *   label    — select label (optional)
 *   value    — controlled value (required)
 *   onChange — change handler (required)
 *   options  — array of { value, label } (required)
 *   error    — error message string (optional)
 *   disabled — boolean (default: false)
 *
 * usage:
 *   <Select
 *     label="Category"
 *     value={category}
 *     onChange={e => setCategory(e.target.value)}
 *     options={[{ value: "food", label: "Food" }, { value: "transport", label: "Transport" }]}
 *   />
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
      {/* Label is optional — only renders if provided */}
      {label && <label className="select-field__label">{label}</label>}

      <select
        className={[
          "select-field__select",
          // Modifier classes added conditionally, falsy values filtered out
          error ? "select-field__select--error" : "",
          disabled ? "select-field__select--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {/* options must be { value, label } objects.
            value is used as the React key (must be unique) and as the
            selected value passed back via onChange */}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Error message only renders when error prop is provided */}
      {error && <span className="select-field__error">{error}</span>}
    </div>
  );
}
