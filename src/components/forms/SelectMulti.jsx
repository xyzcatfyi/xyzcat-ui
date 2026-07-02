/**
 * SelectMulti
 * version: 0.1.0
 * created: 11-06-2026
 * updated: 02-07-2026
 * description: Multi-select dropdown. Consistent with Select. Allows multiple selections from a predefined list.
 *              Built as a custom component rather than extending Select because the native HTML
 *              <select multiple> element is not touch-friendly and cannot be styled consistently.
 * props:
 *   label       — input label (optional)
 *   values      — controlled array of selected values (required)
 *   onChange    — change handler, receives updated array (required)
 *   options     — array of { value, label } (required)
 *   placeholder — placeholder text (default: "Select...")
 *   error       — error message string (optional)
 *   disabled    — boolean (default: false)
 *
 * usage:
 *   <SelectMulti
 *     label="Symptoms"
 *     values={symptoms}
 *     onChange={setSymptoms}
 *     options={[{ value: "headache", label: "Headache" }, { value: "fatigue", label: "Fatigue" }]}
 *   />
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

  // useRef gives us a reference to the component's DOM node so we can
  // detect clicks that happen outside of it and close the dropdown
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // ref.current.contains(e.target) checks if the click was inside
      // the component — if not, close the dropdown
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }

    // Attach listener on mount, clean up on unmount to avoid memory leaks
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggle(value) {
    if (values.includes(value)) {
      // Already selected — remove it by filtering it out
      onChange(values.filter((v) => v !== value));
    } else {
      // Not selected — add it by spreading existing values into a new array
      // We never mutate the original array directly
      onChange([...values, value]);
    }
  }

  // Build the display string from selected values
  // If nothing selected, show placeholder; otherwise join selected labels
  const displayText =
    values.length === 0
      ? placeholder
      : options
          .filter((o) => values.includes(o.value))
          .map((o) => o.label)
          .join(", ");

  return (
    // ref attached here so the click-outside handler knows the boundary
    <div
      className={["select-multi", disabled ? "select-multi--disabled" : ""]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
    >
      {/* Label is optional — only renders if provided */}
      {label && <label className="select-multi__label">{label}</label>}

      {/* type="button" prevents accidental form submission if wrapped in a form */}
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
        <span
          className={values.length === 0 ? "select-multi__placeholder" : ""}
        >
          {displayText}
        </span>
        <span className="select-multi__arrow">{open ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown only renders when open — not hidden via CSS,
          fully removed from the DOM when closed */}
      {open && (
        <ul className="select-multi__dropdown">
          {options.map((opt) => (
            <li
              key={opt.value}
              className={[
                "select-multi__option",
                values.includes(opt.value)
                  ? "select-multi__option--selected"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => toggle(opt.value)}
            >
              {/* Visual checkbox — purely decorative, state is tracked in values array */}
              <span className="select-multi__checkbox">
                {values.includes(opt.value) ? "✓" : ""}
              </span>
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {/* Error message only renders when error prop is provided */}
      {error && <span className="select-multi__error">{error}</span>}
    </div>
  );
}
