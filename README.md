# xyzcat-ui

shared component library for the xyzcat ecosystem.
not for public use. not sorry.

---

## Install

```bash
npm install github:xyzcatfyi/xyzcat-ui
```

---

## What's in here


### Tokens

#### Flexoki (`flexoki_tokens.js`)
Dark/light colour tokens based on the [Flexoki palette](https://stephango.com/flexoki) (MIT).

```js
import { DARK, LIGHT, ACCENT_KEYS } from 'xyzcat-ui';
```


| Export | What it is |
|---|---|
| `DARK` | Full dark palette object |
| `LIGHT` | Full light palette object |
| `ACCENT_KEYS` | List of available accent colour keys |


#### Per-app accents
| App | Token | Dark | Light |
|---|---|---|---|
| Moolah | `gr` | `#879A39` | `#66800B` |
| Privacy Audit | `cy` | `#3AA99F` | `#24837B` |
| Hub | `pu` | `#8B7EC8` | `#5E409D` |
| xyzcat-site | `ye` | `#AD8301` | `#7D5E00` |

---

#### Typography (`flexoki_typography.js`)
Outfit + DM Mono. Loaded via Google Fonts.

```js
import { FONTS, FONT_WEIGHTS, FONT_SIZES } from 'xyzcat-ui';
```

---

### Components

#### ThemeToggle (`xyzcat-ui_ThemeToggle.jsx`)
Dark/light mode toggle. Reads system preference, persists to localStorage as `xyzcat-theme`.

```jsx
import { ThemeToggle, useTheme } from 'xyzcat-ui';

export default function App() {
  const { theme, toggleTheme } = useTheme();

    return (
      <div data-theme={theme}>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
    );
}
```

#### useTheme (`xyzcat-ui_useTheme.js`)
Hook that manages theme state. Returns `{ theme, toggleTheme }`.
Sets `data-theme` on the root element — all CSS variables resolve from there.

```js
import { useTheme } from 'xyzcat-ui';
const { theme, toggleTheme } = useTheme();
```

---

## Structure

```
src/
├── components/
│   ├── theme/
│   │   ├── xyzcat-ui_ThemeToggle.jsx
│   │   └── xyzcat-ui_useTheme.js
│   └── language/        ← coming soon
├── styles/
│   ├── flexoki_tokens.js
│   └── flexoki_typography.js
└── index.js
```

---

## Stack
- React 18
- Flexoki palette (MIT) — stephango.com/flexoki
- Outfit + DM Mono via Google Fonts

---

*more components land here as the ecosystem grows* 🩷