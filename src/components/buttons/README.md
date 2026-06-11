```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: buttons
created: 05-06-2026
updated: 11-06-2026
description: Button components for the xyzcat-ui library

---

# buttons

Button components for the xyzcat ecosystem.

All buttons are unstyled at base and accept theme via CSS variables.
Variants are defined by component name, not by props.

---

## Components

| Component           | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `ButtonPrimary`     | Primary action button. Reference component for the button system. |
| `ButtonSecondary`   | Secondary action — outlined, less prominent than primary          |
| `ButtonDestructive` | Destructive or irreversible actions — red tones                   |
| `IconBtn`           | Icon-only button, default and destructive variants                |

---

## Usage

```jsx
import { ButtonPrimary, ButtonSecondary, ButtonDestructive } from 'xyzcat-ui';

<ButtonPrimary label="Save" onClick={handleSave} />
<ButtonSecondary label="Cancel" onClick={handleCancel} />
<ButtonDestructive label="Delete" onClick={handleDelete} />
```

---

## Props — all button components

| Prop        | Type     | Default     | Description               |
| ----------- | -------- | ----------- | ------------------------- |
| `label`     | string   | —           | Button text (required)    |
| `onClick`   | function | —           | Click handler (required)  |
| `shape`     | string   | `"rounded"` | `"rounded"` or `"pill"`   |
| `size`      | string   | `"md"`      | `"sm"`, `"md"`, or `"lg"` |
| `iconLeft`  | node     | `null`      | Optional Lucide icon      |
| `iconRight` | node     | `null`      | Optional Lucide icon      |
| `disabled`  | boolean  | `false`     | Disabled state            |
| `loading`   | boolean  | `false`     | Loading state             |

---

## Notes

- `ButtonDestructive` uses `--re` CSS variable — defined in `base_theme.css`
- See `CHANGELOG.md` for version history

---
