/**
 * DataExportImport
 * version: 0.1.0
 * created: 07-06-2026
 * updated: 07-06-2026
 * description: Data export and import panel with JSON, CSV, and PDF format support.
 * props:
 *   data        — data to export (required)
 *   onImport    — called with parsed data on import (required)
 *   showReset   — show reset button (default: false)
 *   onReset     — called on reset (default: null)
 */

import React, { useState, useRef } from 'react';
import './DataExportImport.css';

const FORMATS = ['JSON', 'CSV', 'PDF'];

function toCSV(data) {
  if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object' && data[0] !== null) {
    const headers = Object.keys(data[0]);
    const rows = data.map(row =>
      headers.map(h => JSON.stringify(row[h] ?? '')).join(',')
    );
    return [headers.join(','), ...rows].join('\n');
  }
  if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
    return ['key,value', ...Object.entries(data).map(([k, v]) => `${k},${JSON.stringify(v)}`)].join('\n');
  }
  return `value\n${JSON.stringify(data)}`;
}

function splitCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

function fromCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]);
  return lines.slice(1).map(line => {
    const values = splitCSVLine(line);
    return Object.fromEntries(
      headers.map((h, i) => {
        const raw = values[i] ?? '';
        try { return [h, JSON.parse(raw)]; }
        catch { return [h, raw]; }
      })
    );
  });
}

function triggerDownload(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function DataExportImport({
  data,
  onImport,
  showReset = false,
  onReset = null,
}) {
  const [format, setFormat] = useState('JSON');
  const fileRef = useRef(null);

  function handleExport() {
    if (format === 'JSON') {
      triggerDownload('export.json', JSON.stringify(data, null, 2), 'application/json');
    } else if (format === 'CSV') {
      triggerDownload('export.csv', toCSV(data), 'text/csv');
    } else if (format === 'PDF') {
      const win = window.open('', '_blank');
      if (!win) return;
      win.document.write(
        `<pre style="font-family:monospace;padding:2rem;white-space:pre-wrap">${JSON.stringify(data, null, 2)}</pre>`
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
        if (file.name.endsWith('.json')) {
          onImport(JSON.parse(text));
        } else if (file.name.endsWith('.csv')) {
          onImport(fromCSV(text));
        }
      } catch (err) {
        console.error('[DataExportImport] Failed to parse file:', err);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  return (
    <div className="dei">

      {/* Format picker */}
      <div className="dei__picker" role="group" aria-label="Export format">
        {FORMATS.map(f => (
          <button
            key={f}
            className={['dei__format', format === f ? 'dei__format--active' : ''].filter(Boolean).join(' ')}
            onClick={() => setFormat(f)}
            aria-pressed={format === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="dei__actions">
        <button className="dei__btn dei__btn--export" onClick={handleExport}>
          Export
        </button>
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

      {/* Hidden file input — JSON and CSV only */}
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
