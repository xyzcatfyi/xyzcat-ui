---
name: buttons
version: 0.2.0
created: 2026-06-05
updated: 2026-06-05
description: Button components for the xyzcat-ui library
---

# buttons

Button components for the xyzcat ecosystem.

All buttons are unstyled at base and accept theme via CSS variables.
Variants are defined by component name, not by props.

## Components

| Component | Description |
|---|---|
| `ButtonPrimary` | Primary action button. Reference component for the button system. |
| `ButtonSecondary` | Secondary action — not yet built |
| `ButtonDestructive` | Destructive or irreversible actions — not yet built |

## Usage

```jsx
import { ButtonPrimary } from 'xyzcat-ui';

<ButtonPrimary
  label="Save"
  onClick={handleSave}
  shape="rounded"
  size="md"
  iconLeft={<Plus />}
  disabled={false}
  loading={false}
/>
```

## Props — ButtonPrimary

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | string | — | Button text (required) |
| `onClick` | function | — | Click handler (required) |
| `shape` | string | `"rounded"` | `"rounded"` or `"pill"` |
| `size` | string | `"md"` | `"sm"`, `"md"`, or `"lg"` |
| `iconLeft` | node | `null` | Optional Lucide icon |
| `iconRight` | node | `null` | Optional Lucide icon |
| `disabled` | boolean | `false` | Disabled state |
| `loading` | boolean | `false` | Loading state |

## Notes

See `CHANGELOG.md` for version history.