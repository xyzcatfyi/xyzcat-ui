// ============================================
// XYZCAT-UI — Typography Tokens
// ============================================
// Two-font system:
//   Prose / UI / headings  → Outfit
//   Code / labels / mono   → DM Mono

export const FONTS = {
  import: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap",
  prose: "'Outfit', sans-serif",
  mono:  "'DM Mono', monospace",
};

export const FONT_WEIGHTS = {
  regular: 400,
  medium:  500,
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

// Google Fonts import — add to index.html or top-level CSS
// @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');