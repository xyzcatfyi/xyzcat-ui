---
name: data — changelog
version: 0.2.0
created: 2026-06-07
updated: 2026-06-07
---

# data — Changelog

## v0.2.0 — 07-06-2026
- Added `DataExportImport` — export/import panel with JSON, CSV, and PDF format support
- Export: JSON and CSV trigger file download; PDF opens print dialog via new window
- Import: accepts `.json` and `.csv`, parses by file extension, calls `onImport`
- Optional Reset button via `showReset` prop

## v0.1.0 — 07-06-2026
- Folder created, structure established
