/**
 * Input
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Labeled text input with error and disabled states.
 * props:
 *   label       — input label (optional)
 *   value       — controlled value (required)
 *   onChange    — change handler (required)
 *   placeholder — placeholder text (optional)
 *   type        — input type (default: "text")
 *   error       — error message string (optional)
 *   disabled    — boolean (default: false)
 *
 * usage:
 *   <Input label="Name" value={name} onChange={e => setName(e.target.value)} />
 *   <Input type="email" value={email} onChange={e => setEmail(e.target.value)} error="Invalid email" />
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
      {/* Label is optional — only renders if provided */}
      {label && <label className="input-field__label">{label}</label>}

      <input
        className={[
          "input-field__input",
          // Modifier classes are added conditionally and falsy values
          // are filtered out — keeps the className string clean
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

      {/* Error message only renders when error prop is provided */}
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
}
