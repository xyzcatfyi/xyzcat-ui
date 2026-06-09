```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: icons
version: 0.1.0
created: 2026-06-09
updated: 2026-06-09
description: Icon components for the xyzcat-ui library

---

# icons

Icon components for the xyzcat ecosystem.
Pure SVG, no external dependencies.

## Components

| Component | Description |
|---|---|
| `IconPlaceholder` | Development placeholder icon — use when a real icon hasn't been chosen yet |

## Usage

```jsx
import { IconPlaceholder } from 'xyzcat-ui';

<IconPlaceholder size={24} />
```

## Props — IconPlaceholder

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | number | `24` | Icon size in px — 16, 18, 24, or 32 recommended |

## Notes

- All icons use `currentColor` — inherits colour from parent
- No external dependencies — pure SVG
- Full icon library (Lucide integration, SF Symbols) planned for a later sprint
- See `CHANGELOG.md` for version history