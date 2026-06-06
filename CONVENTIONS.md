# xyzcat-ui — Conventions
version: 0.1.0
created: 05-06-2026
updated: 05-06-2026

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
│   ├── buttons/
│   ├── cards/
│   ├── modals/
│   ├── tabs/
│   └── theme/
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
main     — stable, published
dev      — active development
feat/component-name  — feature branches e.g. feat/button-primary

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


## Changelog

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 05-06-2026 | Initial conventions document |

