```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: cards
created: 05-06-2026
updated: 11-06-2026
description: Card components for the xyzcat-ui library

---

# cards

Card and settings layout components for the xyzcat ecosystem.

---

## Components

| Component         | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| `SettingsSection` | Settings section wrapper with a title and grouped rows          |
| `SettingsRow`     | A single settings row — label, optional description, right slot |
| `CardBase`        | Surface container with configurable padding                     |

---

## Usage

```jsx
import { SettingsSection, SettingsRow } from "xyzcat-ui";

<SettingsSection title="Appearance">
  <SettingsRow
    label="Dark mode"
    description="Switch between light and dark theme"
  >
    <ToggleDarkLight />
  </SettingsRow>
  <SettingsRow label="Font size">
    <select>...</select>
  </SettingsRow>
</SettingsSection>;
```

---

## Props — SettingsSection

| Prop       | Type   | Default | Description                         |
| ---------- | ------ | ------- | ----------------------------------- |
| `title`    | string | —       | Section heading (required)          |
| `children` | node   | —       | `SettingsRow` components (required) |

---

## Props — SettingsRow

| Prop          | Type   | Default | Description                               |
| ------------- | ------ | ------- | ----------------------------------------- |
| `label`       | string | —       | Row label (required)                      |
| `description` | string | `null`  | Optional description text below the label |
| `children`    | node   | `null`  | Optional right-side control slot          |

---

## Notes

- `SettingsSection` and `SettingsRow` are designed to be composed together
- See `CHANGELOG.md` for version history

---
