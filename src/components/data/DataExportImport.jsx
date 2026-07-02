/**
 * DataExportImport
 * version: 0.1.1
 * created: 07-06-2026
 * updated: 02-07-2026
 * description: Data export and import panel with JSON, CSV, and PDF format support.
 *              PDF export opens a print dialog — not a true PDF download.
 *              Import accepts .json and .csv files only.
 * props:
 *   data          — data to export (required)
 *   onImport      — called with parsed data on import (required)
 *   showReset     — show reset button (default: false)
 *   onReset       — called on reset (default: null)
 *   dataTransform — optional function to shape data before export (default: passthrough)
 *                   receives raw data, returns shaped data for export
 *                   useful when consuming project's data shape doesn't match CSV expectations
 *
 * usage:
 *   <DataExportImport
 *     data={entries}
 *     onImport={(imported) => setEntries(imported)}
 *     showReset={true}
 *     onReset={handleReset}
 *   />
 */

import React, { useState, useRef } from "react";
import "./DataExportImport.css";

const FORMATS = ["JSON", "CSV", "PDF"];

// Converts an array of objects or a plain object to CSV string
function toCSV(data) {
  if (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0] === "object" &&
    data[0] !== null
  ) {
    // Array of objects — first row is headers, rest are values
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((h) => JSON.stringify(row[h] ?? "")).join(","),
    );
    return [headers.join(","), ...rows].join("\n");
  }
  if (typeof data === "object" && data !== null && !Array.isArray(data)) {
    // Plain object — two columns: key, value
    return [
      "key,value",
      ...Object.entries(data).map(([k, v]) => `${k},${JSON.stringify(v)}`),
    ].join("\n");
  }
  // Fallback for primitives
  return `value\n${JSON.stringify(data)}`;
}

// Custom CSV line splitter — handles quoted values containing commas
// e.g. "hello, world" should not be split on the comma inside the quotes
function splitCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

// Parses CSV text back into an array of objects
function fromCSV(text) {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]);
  return lines.slice(1).map((line) => {
    const values = splitCSVLine(line);
    return Object.fromEntries(
      headers.map((h, i) => {
        const raw = values[i] ?? "";
        try {
          // Attempt to parse JSON values (booleans, numbers, arrays, objects)
          return [h, JSON.parse(raw)];
        } catch {
          // Fall back to raw string if JSON.parse fails
          return [h, raw];
        }
      }),
    );
  });
}

// Creates a temporary anchor element to trigger a file download
function triggerDownload(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  // Revoke the object URL after use to free memory
  URL.revokeObjectURL(url);
}

export function DataExportImport({
  data,
  onImport,
  showReset = false,
  onReset = null,
  dataTransform = (d) => d,
}) {
  const [format, setFormat] = useState("JSON");
  // useRef for the hidden file input — lets us trigger it programmatically
  const fileRef = useRef(null);

  function handleExport() {
    // dataTransform allows the consuming app to reshape data before export
    // defaults to passthrough (d) => d if not provided
    const exportData = dataTransform(data);
    if (format === "JSON") {
      triggerDownload(
        "export.json",
        JSON.stringify(exportData, null, 2),
        "application/json",
      );
    } else if (format === "CSV") {
      triggerDownload("export.csv", toCSV(exportData), "text/csv");
    } else if (format === "PDF") {
      // PDF opens a new window with formatted content and triggers print dialog
      // Not a true PDF — relies on browser's print-to-PDF functionality
      const win = window.open("", "_blank");
      if (!win) return;
      win.document.write(
        `<pre style="font-family:monospace;padding:2rem;white-space:pre-wrap">${JSON.stringify(exportData, null, 2)}</pre>`,
      );
      win.document.close();
      win.print();
    }
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      try {
        if (file.name.endsWith(".json")) {
          onImport(JSON.parse(text));
        } else if (file.name.endsWith(".csv")) {
          onImport(fromCSV(text));
        }
      } catch (err) {
        console.error("[DataExportImport] Failed to parse file:", err);
      }
    };
    reader.readAsText(file);
    // Reset file input so the same file can be re-imported if needed
    e.target.value = "";
  }

  return (
    <div className="dei">
      {/* Format picker — JSON, CSV, PDF */}
      <div className="dei__picker" role="group" aria-label="Export format">
        {FORMATS.map((f) => (
          <button
            key={f}
            className={[
              "dei__format",
              format === f ? "dei__format--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setFormat(f)}
            // aria-pressed signals toggle state to screen readers
            aria-pressed={format === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="dei__actions">
        <button className="dei__btn dei__btn--export" onClick={handleExport}>
          Export
        </button>
        {/* Import button triggers the hidden file input */}
        <button
          className="dei__btn dei__btn--import"
          onClick={() => fileRef.current?.click()}
        >
          Import
        </button>
        {showReset && (
          <button className="dei__btn dei__btn--reset" onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      {/* Hidden file input — visually hidden but functional.
          aria-hidden and tabIndex={-1} remove it from keyboard/screen reader flow */}
      <input
        ref={fileRef}
        type="file"
        accept=".json,.csv"
        onChange={handleFileChange}
        className="dei__file-input"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}
