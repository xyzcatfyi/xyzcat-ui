---
name: modals
version: 0.2.0
created: 2026-06-05
updated: 2026-06-06
description: Modal and dialog components for the xyzcat-ui library
---

# modals

Modal and confirmation dialog components for the xyzcat ecosystem.

## Components

| Component | Description |
|---|---|
| `ModalConfirm` | Confirmation dialog for destructive or irreversible actions |

## Usage

```jsx
import { ModalConfirm } from 'xyzcat-ui';

<ModalConfirm
  title="Delete account"
  message="This action cannot be undone. Are you sure?"
  onConfirm={handleDelete}
  onClose={() => setOpen(false)}
/>
```

## Props — ModalConfirm

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | — | Modal heading (required) |
| `message` | string | — | Confirmation message body (required) |
| `onConfirm` | function | — | Called when the confirm button is clicked (required) |
| `onClose` | function | — | Called on cancel or overlay click (required) |
| `confirmLabel` | string | `"Confirm"` | Confirm button label |
| `cancelLabel` | string | `"Cancel"` | Cancel button label |
| `destructive` | boolean | `true` | Uses `ButtonDestructive` when true, `ButtonPrimary` when false |

## Notes

- Clicking the overlay calls `onClose`
- `destructive` prop controls which confirm button variant is rendered
- See `CHANGELOG.md` for version history
