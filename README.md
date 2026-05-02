# xyzcat-ui

A personal component library by [@xyzcatfyi](https://github.com/xyzcatfyi).

Reusable React components built for use across personal projects.

---

## Components

### ThemeToggle

A dark/light mode toggle with system preference detection and localStorage persistence.

**Includes:**
- `useTheme()` — custom hook for theme state management
- `ThemeToggle` — the toggle button component
- `THEMES` — colour tokens for dark and light modes

**Usage:**
```jsx
import { useTheme, ThemeToggle, THEMES } from './components/ThemeToggle';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const t = THEMES[theme];

  return (
    <div style={{ background: t.background, color: t.text }}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <p>Hello world!</p>
    </div>
  );
}
```

---

## Stack
- React
- Lucide React (icons)

---

*More components coming as projects grow* 🩷