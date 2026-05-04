// ============================================
// XYZCAT-UI — Typography Tokens
// ============================================
// Three-font system:
//   Titles/nav    → Rethink Sans (clean, confident)
//   Numbers       → DotGothic16 (pixel, quirky — Cat's personal pick)
//   Body/UI       → Inter (readable, screen-optimised)
//
// Note: DotGothic16 is Cat's personal preference.
// Space Mono is the clean alternative for future multi-user contexts.

export const FONTS = {
  title:  "'Rethink Sans', sans-serif",
  number: "'DotGothic16', monospace",
  body:   "'Inter', sans-serif",
  numberAlt: "'Space Mono', monospace", // clean alternative
};

export const FONT_WEIGHTS = {
  regular: 400,
  medium:  500,
  semibold: 600,
  bold:    700,
};

export const FONT_SIZES = {
  xs:   '11px',
  sm:   '13px',
  base: '14px',
  md:   '16px',
  lg:   '18px',
  xl:   '24px',
  xxl:  '32px',
  hero: '40px',
};

// Google Fonts import string — add to index.html or CSS
// @import url('https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;600;700&family=DotGothic16&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
