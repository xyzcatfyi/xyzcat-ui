---
name: data
version: 0.2.0
created: 2026-06-07
updated: 2026-06-07
description: Data export and import components for the xyzcat-ui library
---

# data

Data export and import components for the xyzcat ecosystem.

## Components

| Component | Description |
|---|---|
| `DataExportImport` | Export and import panel with JSON, CSV, and PDF format support |

## Usage

```jsx
import { DataExportImport } from 'xyzcat-ui';

<DataExportImport
  data={myData}
  onImport={parsed => setData(parsed)}
/>

{/* With reset button */}
<DataExportImport
  data={myData}
  onImport={parsed => setData(parsed)}
  showReset
  onReset={handleReset}
/>
```

## Props — DataExportImport

| Prop | Type | Default | Description |
|---|---|---|---|
| `data` | any | — | Data to export (required) |
| `onImport` | function | — | Called with parsed data on import (required) |
| `showReset` | boolean | `false` | Show the Reset button |
| `onReset` | function | `null` | Called when Reset is clicked |

## Notes

- Export formats: JSON (download), CSV (download), PDF (print dialog via new window)
- Import accepts `.json` and `.csv` files only — PDF cannot be imported
- CSV export: arrays of objects → full CSV with headers; plain objects → two-column key/value CSV
- CSV import: parses back to an array of objects
- See `CHANGELOG.md` for version history
