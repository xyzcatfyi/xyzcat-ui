# Changelog

## 0.1.0 — 16-05-2026
### Added
- Flexoki colour tokens (full dark/light palette)
- Typography tokens — Outfit, DM Mono
- Accent colours: `gr` (Moolah), `cy` (Privacy Audit), `pu` (Hub)
- `tokens.js` and `typography.js` published to repo

## 0.2.0 — 19-05-2026
### Changed
- Reorganised components: `ThemeToggle/` → `theme/` subfolder
- Added empty `language/` folder — placeholder for LanguageSwitcher
- Updated `index.js` export paths accordingly

## 0.3.0 — 19-05-2026
### Changed
- Renamed `tokens.js` → `flexoki_tokens.js` — explicit Flexoki attribution, future-proof for other token sets
- Renamed `typography.js` → `flexoki_typography.js` — same reasoning
- Renamed `ThemeToggle.jsx` → `xyzcat-ui_ThemeToggle.jsx` — clear library origin
- Renamed `useTheme.js` → `xyzcat-ui_useTheme.js` — same reasoning
- Updated `index.js` export paths to match
### Added
- `package.json` — xyzcat-ui is now installable as a proper npm package via GitHub
