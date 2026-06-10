```
    /\ /\
   (>o.o<)
~~(   Y  )

> private repo · xyzcat ecosystem · est. 2026
```

---

name: auth
version: 0.1.0
created: 2026-06-10
updated: 2026-06-10
description: Authentication components for the xyzcat-ui library

---

# auth

Password gate and logout components for Hub instances.
localStorage-based — personal Hub use only, not real authentication.

## Components

| Component    | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| `AuthLogin`  | Password gate — checks localStorage on mount, calls onSuccess if already authenticated |
| `AuthLogout` | Logout button — clears auth from localStorage                                          |

## Usage

```jsx
import { AuthLogin, AuthLogout } from 'xyzcat-ui';

// In your Hub App.jsx:
<AuthLogin
  onSuccess={() => setAuthed(true)}
  password={import.meta.env.VITE_HUB_PASSWORD}
  storageKey="hub_authed"
/>

// In your Nav:
<AuthLogout
  onLogout={() => setAuthed(false)}
  storageKey="hub_authed"
/>
```

## Props — AuthLogin

| Prop         | Type     | Description                                      |
| ------------ | -------- | ------------------------------------------------ |
| `onSuccess`  | function | Called when auth is confirmed (required)         |
| `password`   | string   | Expected password — pass from env var (required) |
| `storageKey` | string   | localStorage key for auth state (required)       |

## Props — AuthLogout

| Prop         | Type     | Description                          |
| ------------ | -------- | ------------------------------------ |
| `onLogout`   | function | Called after logout (required)       |
| `storageKey` | string   | localStorage key to clear (required) |

## Notes

- `AuthLogin` checks localStorage on mount — calls `onSuccess` immediately if already authenticated
- Never hardcode passwords — always pass via environment variable
- This is localStorage-only auth, intended for personal Hub use
- See `CHANGELOG.md` for version history

---
