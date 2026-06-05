---
name: theme
version: 0.4.0
created: 2026-04-01
updated: 2026-06-05
description: Dark/light mode toggle and theme hook for the xyzcat-ui library
---

# theme

Dark/light mode toggle component and `useTheme` hook for the xyzcat ecosystem.

## Components

| Component | Description |
|---|---|
| `ToggleDarkLight` | Dark/light mode toggle button |
| `useTheme` | Hook for reading and setting the current theme |

## Usage

```jsx
import { ToggleDarkLight, useTheme } from 'xyzcat-ui'
```

## Notes

- `data-theme` must be on the element where `background` is applied — not on `body`
- See `CHANGELOG.md` for version history.
