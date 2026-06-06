---
name: layouts
version: 0.2.0
created: 2026-06-05
updated: 2026-06-06
description: Layout components for the xyzcat-ui library
---

# layouts

Base layout components for the xyzcat ecosystem.
Mobile-friendly by default.

## Components

| Component | Description |
|---|---|
| `LayoutHeaderText` | App header with text title, optional subtitle, and right slot |
| `LayoutFooter` | Fixed footer with centered content slot |

## Usage

```jsx
import { LayoutHeaderText, LayoutFooter } from 'xyzcat-ui';

<LayoutHeaderText
  title="App Title"
  subtitle="v1.0.0 · beta"
  right={<ToggleDarkLight theme={theme} onToggle={toggleTheme} />}
/>

<LayoutFooter>
  your footer content here
</LayoutFooter>
```

## Props — LayoutHeaderText

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string | — | Main app title (required) |
| `subtitle` | string | `null` | Optional subtitle or version string |
| `right` | node | `null` | Optional right-side slot |
| `sticky` | boolean | `true` | Sticky at top on scroll |

## Props — LayoutFooter

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | node | — | Content to render inside the footer (required) |

## Notes

See `CHANGELOG.md` for version history.
