---
name: xyzcat-ui — changelog
version: 0.8.1
created: 2026-04-16
updated: 2026-06-09
---

# Changelog


## v0.8.1 — 09-06-2026
### Fixed
- `NavBar` — mobile invisible items when no icon provided; smart label fallback added; `showLabels` prop for explicit override
- `DataExportImport` — added `dataTransform` prop to shape data before export; default is passthrough


## v0.8.0 — 07-06-2026
### Added
- `DataExportImport` — export/import panel with JSON, CSV, and PDF format support


## v0.7.1 — 06-06-2026
### Added
- `SettingsSection` — settings section wrapper with title and grouped rows
- `SettingsRow` — single settings row with label, optional description, and right-side control slot
- `ModalConfirm` — confirmation dialog for destructive or irreversible actions; supports `destructive` prop


## v0.7.0 — 06-06-2026
### Added
- `ButtonSecondary` — outlined, transparent background, less prominent than primary
- `ButtonDestructive` — red tones, signals danger, uses `--re` token
- `--re` token added to `base_tokens.js` and `base_theme.css`
- `base_theme.css` — CSS variable injection file for base monochrome theme
### Fixed
- Dark/light toggle now fully working in playground
- `LayoutHeaderText` changed to `position: fixed`
- Playground z-index and padding fixes
- Token variable names corrected in playground CSS


## v0.6.0 — 06-06-2026
### Added
- `LayoutHeaderText` — app header with text title, optional subtitle, right slot, sticky prop
- `LayoutFooter` — fixed footer with centered content slot
- `NavBar` — navigation bar, horizontal and vertical orientations
### Changed
- Playground updated to test all new components
- Playground `App.css` updated — bottom padding added for fixed footer


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
