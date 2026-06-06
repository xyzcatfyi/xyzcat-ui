---
name: tabs
version: 0.2.0
created: 2026-06-05
updated: 2026-06-06
description: Tab and navigation components for the xyzcat-ui library
---

# tabs

Tab and navigation components for the xyzcat ecosystem.

## Components

| Component | Description |
|---|---|
| `NavBar` | Navigation bar — horizontal or vertical orientation |

## Usage

```jsx
import { NavBar } from 'xyzcat-ui';

<NavBar
  orientation="horizontal"
  items={[
    { label: 'Overview', value: 'overview' },
    { label: 'Transactions', value: 'transactions' },
    { label: 'Settings', value: 'settings' },
  ]}
  activeItem={activeTab}
  onItemClick={setActiveTab}
/>
```

## Props — NavBar

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | array | — | Array of `{ label, value, icon? }` (required) |
| `activeItem` | string | — | Value of the currently active item (required) |
| `onItemClick` | function | — | Called with value on item click (required) |
| `orientation` | string | `"horizontal"` | `"horizontal"` or `"vertical"` |

## Notes

See `CHANGELOG.md` for version history.
