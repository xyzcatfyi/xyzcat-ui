/**
 * Input
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Labeled text input with error and disabled states.
 * props:
 *   label       — input label (optional)
 *   value       — controlled value (required)
 *   onChange    — change handler (required)
 *   placeholder — placeholder text (optional)
 *   type        — input type (default: "text")
 *   error       — error message string (optional)
 *   disabled    — boolean (default: false)
 */

import React from "react";
import "./Input.css";

export function Input({
  label = null,
  value,
  onChange,
  placeholder = "",
  type = "text",
  error = null,
  disabled = false,
}) {
  return (
    <div className="input-field">
      {label && <label className="input-field__label">{label}</label>}
      <input
        className={[
          "input-field__input",
          error ? "input-field__input--error" : "",
          disabled ? "input-field__input--disabled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
}
