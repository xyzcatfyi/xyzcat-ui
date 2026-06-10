```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: xyzcat-ui
version: 0.4.0
created: 2026-04-01
updated: 2026-06-05
description: Shared component library for the xyzcat ecosystem

---

# xyzcat-ui

Shared component library for the xyzcat ecosystem.
Build once, use everywhere.

Covers design tokens, typography, hooks, and UI components.
Used across all xyzcat projects — standalone apps and Hub integrations alike.

---

## Installation

```bash
npm install github:xyzcatfyi/xyzcat-ui
```

Peer dependency — install separately:

```bash
npm install lucide-react
```

---

## What's in here

| Folder                    | Contents                              |
| ------------------------- | ------------------------------------- |
| `src/components/buttons/` | Button components                     |
| `src/components/cards/`   | Card components                       |
| `src/components/modals/`  | Modal and dialog components           |
| `src/components/tabs/`    | Tab and nav components                |
| `src/components/theme/`   | Dark/light mode toggle and theme hook |
| `src/hooks/`              | Shared React hooks                    |
| `src/layouts/`            | Layout components                     |
| `src/styles/`             | Design tokens and typography          |

---

## Tokens

---

### Flexoki (`flexoki_tokens.js`)

Dark/light colour tokens based on the [Flexoki palette](https://stephango.com/flexoki) (MIT).

```js
import { DARK, LIGHT, ACCENT_KEYS } from "xyzcat-ui";
```

| Export        | What it is                           |
| ------------- | ------------------------------------ |
| `DARK`        | Full dark palette object             |
| `LIGHT`       | Full light palette object            |
| `ACCENT_KEYS` | List of available accent colour keys |

### Per-app accents

| App           | Token | Dark      | Light     |
| ------------- | ----- | --------- | --------- |
| Moolah        | `gr`  | `#879A39` | `#66800B` |
| Privacy Audit | `cy`  | `#3AA99F` | `#24837B` |
| Hub           | `pu`  | `#8B7EC8` | `#5E409D` |
| xyzcat-site   | `ye`  | `#AD8301` | `#7D5E00` |

### Typography (`flexoki_typography.js`)

Outfit + DM Mono. Loaded via Google Fonts.

```js
import { FONTS, FONT_WEIGHTS, FONT_SIZES } from "xyzcat-ui";
```

---

## Components

---

### ToggleDarkLight

Dark/light mode toggle. Reads system preference, persists to localStorage as `xyzcat-theme`.

```jsx
import { ToggleDarkLight, useTheme } from "xyzcat-ui";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <ToggleDarkLight theme={theme} onToggle={toggleTheme} />
    </div>
  );
}
```

### useTheme

Hook that manages theme state. Returns `{ theme, toggleTheme }`.

```js
import { useTheme } from "xyzcat-ui";
const { theme, toggleTheme } = useTheme();
```

> ⚠️ `data-theme` must be on the element where `background` is applied — not on `body`.

---

## Design System

- **Palette:** Flexoki by Steph Ango — [stephango.com/flexoki](https://stephango.com/flexoki) (MIT)
- **Typography:** Outfit + DM Mono (Google Fonts)
- **Icons:** Lucide React

---

## Conventions

See `CONVENTIONS.md` for naming, structure, and versioning rules.

---

## Changelog

See `CHANGELOG.md` for version history.

---

_more components land here as the ecosystem grows_ 🩷

---
