```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

# xyzcat-ui — Roadmap

**Last updated: 10-06-2026**

---

## Foundation Sprint — in progress (June 2026)

### Completed

- `ToggleDarkLight` — theme toggle component ✅
- `useTheme` — theme hook ✅
- `ButtonPrimary` / `ButtonSecondary` / `ButtonDestructive` ✅
- `LayoutHeaderText` / `LayoutFooter` ✅
- `NavBar` / `NavHamburger` ✅
- `SettingsSection` / `SettingsRow` ✅
- `ModalConfirm` ✅
- `DataExportImport` ✅
- `IconPlaceholder` ✅
- Base monochrome theme (`base_tokens.js`, `base_typography.js`) ✅
- Flexoki theme (`flexoki_tokens.js`, `flexoki_typography.js`) ✅
- `package.json` — installable via GitHub ✅
- `CONVENTIONS.md` ✅
- Playground + `lab.xyzcat.fyi` ✅

### In progress / next

- `AuthLogin` + `AuthLogout` components
- Formally document standalone vs Hub integration pattern in `CONVENTIONS.md`
- Populate `lab.xyzcat.fyi` with component demos
- Repo rename (deferred to end of sprint)

### From archaeology (10-06-2026)

Components confirmed missing, reference in `hub/src/pages/Finance.jsx`:

- `Input` — labeled text input, theme-aware
- `Select` — labeled dropdown, theme-aware
- `Card` — surface container
- `IconBtn` — icon-only button

---

## Post-sprint

### Integration pattern formalisation

- Document standalone vs Hub pattern in `CONVENTIONS.md`
- Hub shell owns theme — modules receive `theme` + `toggleTheme` as props only
- Modules never call `useTheme()` themselves
- Styling convention: CSS file preferred over inline `<style>` tag
- Version-pin `xyzcat-ui` in consuming projects

### Extended component library

- `CategorySelector` — configurable category + item toggle (shared by Typsi + Moolah)
- Icon library — Lucide + SF Symbols (export settings TBD)
- Typography library expansion
- Localisation scaffolding (i18next pattern — after Moolah proves it)

### Personality skins (future)

- Flexoki full skin
- Sims-coded theme (private)
- Others TBD

### Infrastructure

- npm registry publish (deferred — GitHub install works for now)
- Version pinning in consuming projects

---

## Retirement plan (from archaeology)

| Item                               | Action                         | When                         |
| ---------------------------------- | ------------------------------ | ---------------------------- |
| `motherlode` branch                | Delete                         | Now — confirmed no-op        |
| `moolah/legacy` branch             | Delete                         | After Hub migration complete |
| Hub `Finance.jsx` local components | Replace with xyzcat-ui imports | During Hub migration         |
| Hub duplicate ThemeToggle          | Remove                         | During Hub migration         |

---
