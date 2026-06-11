/**
 * SelectMulti
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 11-06-2026
 * description: Multi-select dropdown. Consistent with Select. Allows multiple selections from a predefined list.
 * props:
 *   label     — input label (optional)
 *   values    — controlled array of selected values (required)
 *   onChange  — change handler, receives updated array (required)
 *   options   — array of { value, label } (required)
 *   placeholder — placeholder text (default: "Select...")
 *   error     — error message string (optional)
 *   disabled  — boolean (default: false)
 */

import React, { useState, useRef, useEffect } from "react";
import "./SelectMulti.css";

export function SelectMulti({
  label = null,
  values = [],
  onChange,
  options = [],
  placeholder = "Select...",
  error = null,
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(value) {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  }

  const displayText =
    values.length === 0
      ? placeholder
      : options
          .filter((o) => values.includes(o.value))
          .map((o) => o.label)
          .join(", ");

  return (
    <div
      className={["select-multi", disabled ? "select-multi--disabled" : ""]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      {label && <label className="select-multi__label">{label}</label>}
      <button
        type="button"
        className={[
          "select-multi__trigger",
          error ? "select-multi__trigger--error" : "",
          open ? "select-multi__trigger--open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
      >
        <span className={values.length === 0 ? "select-multi__placeholder" : ""}>
          {displayText}
        </span>
        <span className="select-multi__arrow">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <ul className="select-multi__dropdown">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={[
                "select-multi__option",
                values.includes(opt.value) ? "select-multi__option--selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => toggle(opt.value)}
            >
              <span className="select-multi__checkbox">
                {values.includes(opt.value) ? "✓" : ""}
              </span>
              {opt.label}
            </li>
          ))}
        </ul>
      )}
      {error && <span className="select-multi__error">{error}</span>}
    </div>
  );
}
