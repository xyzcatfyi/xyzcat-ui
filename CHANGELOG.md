---
name: xyzcat-ui — changelog
version: 0.5.0
created: 2026-04-16
updated: 2026-06-05
---

# Changelog

## v0.5.0 — 05-06-2026
### Added
- `CONVENTIONS.md` — naming, structure, and versioning rules for the repo
- Folder structure expanded: `buttons/`, `cards/`, `modals/`, `tabs/`, `layouts/`, `hooks/`
- `README.md` and `CHANGELOG.md` added to every folder
- Root `README.md` updated — merged old token/component documentation into new structure
### Changed
- `language/` folder removed — placeholder, never used; will be re-added properly during localisation sprint
- Component rename pending: `xyzcat-ui_ThemeToggle.jsx` → `ToggleDarkLight.jsx` (naming convention applied — file rename in next commit)
- Component rename pending: `xyzcat-ui_useTheme.js` → `useTheme.js` (same)

## v0.4.0 — 23-05-2026
### Added
- `base_tokens.js` — monochrome dark/light theme tokens
- `base_typography.js` — system-ui fonts, no Google Fonts dependency
- Both exported from `index.js` under "Base (Monochrome) Theme"

## v0.3.1 — 19-05-2026
### Fixed
- Added `FONTS.import` to typography exports — Google Fonts URL now accessible via `FONTS.import`

## v0.3.0 — 19-05-2026
### Changed
- Renamed `tokens.js` → `flexoki_tokens.js` — explicit Flexoki attribution, future-proof for other token sets
- Renamed `typography.js` → `flexoki_typography.js` — same reasoning
- Renamed `ThemeToggle.jsx` → `xyzcat-ui_ThemeToggle.jsx` — clear library origin
- Renamed `useTheme.js` → `xyzcat-ui_useTheme.js` — same reasoning
- Updated `index.js` export paths to match
### Added
- `package.json` — xyzcat-ui is now installable as a proper npm package via GitHub

## v0.2.0 — 19-05-2026
### Changed
- Reorganised components: `ThemeToggle/` → `theme/` subfolder
- Added empty `language/` folder — placeholder for LanguageSwitcher
- Updated `index.js` export paths accordingly

## v0.1.0 — 16-05-2026
### Added
- Flexoki colour tokens (full dark/light palette)
- Typography tokens — Outfit, DM Mono
- Accent colours: `gr` (Moolah), `cy` (Privacy Audit), `pu` (Hub)
- `tokens.js` and `typography.js` published to repo