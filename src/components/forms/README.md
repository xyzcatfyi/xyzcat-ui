```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: forms
version: 0.1.0
created: 2026-06-11
updated: 2026-06-11
description: Form components for the xyzcat-ui library

---

# forms

Form input components for the xyzcat ecosystem.

## Components

| Component | Description                                       |
| --------- | ------------------------------------------------- |
| `Input`   | Labeled text input with error and disabled states |

## Usage

```jsx
import { Input } from "xyzcat-ui";

<Input
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="hello@example.com"
  type="email"
/>;
```

## Props — Input

| Prop          | Type     | Default  | Description                         |
| ------------- | -------- | -------- | ----------------------------------- |
| `label`       | string   | `null`   | Input label                         |
| `value`       | string   | —        | Controlled value (required)         |
| `onChange`    | function | —        | Change handler (required)           |
| `placeholder` | string   | `""`     | Placeholder text                    |
| `type`        | string   | `"text"` | Input type                          |
| `error`       | string   | `null`   | Error message — triggers red border |
| `disabled`    | boolean  | `false`  | Disabled state                      |

## Notes

- See `CHANGELOG.md` for version history

---
