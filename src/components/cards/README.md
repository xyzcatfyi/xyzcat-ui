---
name: cards
version: 0.3.0
created: 2026-06-05
updated: 2026-06-06
description: Card components for the xyzcat-ui library
---

# cards

Card and settings layout components for the xyzcat ecosystem.

## Components

| Component | Description |
|---|---|
| `SettingsSection` | Settings section wrapper with a title and grouped rows |
| `SettingsRow` | A single settings row — label, optional description, right slot |

## Usage

```jsx
import { SettingsSection, SettingsRow } from 'xyzcat-ui';

<SettingsSection title="Appearance">
  <SettingsRow label="Dark mode" description="Switch between light and dark theme">
    <ToggleDarkLight />
  </SettingsRow>
  <SettingsRow label="Font size">
    <select>...</select>
  </SettingsRow>
</SettingsSection>
```

## Props — SettingsSection

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | — | Section heading (required) |
| `children` | node | — | `SettingsRow` components (required) |

## Props — SettingsRow

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | — | Row label (required) |
| `description` | string | `null` | Optional description text below the label |
| `children` | node | `null` | Optional right-side control slot |

## Notes

- `SettingsSection` and `SettingsRow` are designed to be composed together
- See `CHANGELOG.md` for version history
