```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

# xyzcat-ui — Conventions

version: 0.1.0
created: 05-06-2026
updated: 10-06-2026

---

## Purpose

This document is the source of truth for all naming, structure, and organisational conventions in this repository.
Nothing gets built, named, or filed without following these rules.

Eventually these conventions will expand to cover the full xyzcat ecosystem.
For now, scope is xyzcat-ui only.

---

## Core Principle

**Names are self-documenting. Frontmatter carries the metadata.**

If you have to open a file to know what it is, the name failed.
Dates, versions, and context live in frontmatter, headers, and changelogs — not in the name, unless two versions genuinely need to coexist in the repo at the same time.

---

## Folder Structure

src/
├── components/
│ ├── buttons/
│ ├── cards/
│ ├── modals/
│ ├── tabs/
│ └── theme/
├── hooks/
├── layouts/
└── styles/

- Organised by component type (not domain or feature)
- Every folder has its own `README.md` and `CHANGELOG.md`
- Folder `README.md` describes what lives there and how to use it
- Folder `CHANGELOG.md` is kept in sync with every change to components inside that folder

---

## Naming Conventions

### Components

- PascalCase
- Pattern: `TypeFunctionDescriptor`
- Type comes first — makes file explorers sort by component type
- Examples:
  - `ButtonPrimary`
  - `ButtonDestructive`
  - `CardBase`
  - `ModalConfirm`
  - `ToggleDarkLight`
  - `TabsNav`

### Version suffixes

- Underscores are reserved for version suffixes only
- Use only when two versions must coexist in the repo simultaneously
- Pattern: `TypeFunctionDescriptor_v2`
- Otherwise, version lives in frontmatter and changelog only

### Files

- Component files: `ComponentName.jsx`
- Hook files: `HookName.js` — named for what the hook does
- Token/style files: `lowercase_hyphenated.js`
- No prefixes — the folder path provides context

### Folders

- All lowercase, no hyphens or underscores
- Single clear noun: `buttons`, `cards`, `hooks`, `layouts`

### Branches

main — stable, published
dev — active development
feat/component-name — feature branches e.g. feat/button-primary

---

## File Frontmatter

All `README.md` and `CHANGELOG.md` files open with:

```md
---
name:
version:
created:
updated:
description:
---
```

Component files include a header comment block:

```js
/**
 * ComponentName
 * version:
 * created:
 * updated:
 * description:
 */
```

---

## Versioning

- Follows semver: `MAJOR.MINOR.PATCH`
- Version lives in frontmatter and changelog
- Filename versioning only when two versions coexist in repo
- **One minor version bump per day maximum**
- Multiple changes in the same day use patch increments: `0.7.1`, `0.7.2`, etc.

---

## Credits

- Flexoki design system: Steph Ango (stephango.com/flexoki) — MIT licence
- Lucide icons: Lucide contributors — ISC licence

---

## Standalone vs Hub Integration Pattern

### The rule

**Hub shell owns theme state. Modules never manage their own theme.**

This is the single most important architectural rule for Hub integrations.
Violating it creates duplicate toggles, dead props, and theme conflicts.

### Standalone apps

A standalone app (e.g. Moolah, Typsi) manages its own theme:

```jsx
// App.jsx — standalone
import { useTheme, ToggleDarkLight } from "xyzcat-ui";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <ToggleDarkLight theme={theme} onToggle={toggleTheme} />
      <YourContent />
    </div>
  );
}
```

- App calls `useTheme()` itself
- App owns `data-theme` on its root element
- App renders its own `ToggleDarkLight`
- No theme props passed down

### Hub modules

A Hub module (e.g. Finance, PrivacyAudit, Typsi) never manages theme:

```jsx
// Finance.jsx — Hub module
export default function Finance({ theme, toggleTheme }) {
  // ✅ Use theme prop directly
  // ❌ Never call useTheme() here
  // ❌ Never render ToggleDarkLight here

  return (
    <div>
      <YourContent />
    </div>
  );
}
```

- Module receives `theme` + `toggleTheme` as props from Hub shell
- Module never calls `useTheme()`
- Module never renders `ToggleDarkLight`
- `data-theme` is set by Hub shell, not the module

### Hub shell

Hub shell owns everything at the top level:

```jsx
// App.jsx — Hub shell
import { useTheme } from "xyzcat-ui";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div data-theme={theme}>
      <Nav theme={theme} onToggle={toggleTheme} />
      <Routes>
        <Route
          path="/finance"
          element={<Finance theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </div>
  );
}
```

### `data-theme` placement rule

`data-theme` must be on the element that has `background` applied.
If `background` is on `body`, put `data-theme` on `body`.
If `background` is on a wrapper div, put `data-theme` on that div.
CSS variables will not resolve if `data-theme` is on a parent without `background`.

### Styling convention

- Prefer a dedicated `.css` file over inline `<style>` tags
- Inline `<style>` tags in components create specificity issues and
  are harder to override in Hub context

### Summary table

|                           | Standalone         | Hub module         |
| ------------------------- | ------------------ | ------------------ |
| Calls `useTheme()`        | ✅ Yes             | ❌ Never           |
| Renders `ToggleDarkLight` | ✅ Yes             | ❌ Never           |
| Owns `data-theme`         | ✅ Yes             | ❌ Never           |
| Receives theme props      | ❌ No              | ✅ Yes             |
| Styling                   | CSS file or inline | CSS file preferred |

---

## Changelog

| Version | Date       | Notes                                       |
| ------- | ---------- | ------------------------------------------- |
| 0.1.0   | 05-06-2026 | Initial conventions document                |
| 0.2.0   | 10-06-2026 | Added standalone vs Hub integration pattern |

---
