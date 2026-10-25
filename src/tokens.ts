/**
 * Vectrum for AEC brand tokens.
 *
 * Core palette: the October 2, 2026 palette in BRAND.md (canonical).
 * Semantic themes: ported unchanged from rouler-contract `packages/design-tokens`
 * (approved Claude export). Values in the themes that are not core palette colors are
 * interface tints; they are listed in README.md.
 */

/** The six core palette colors, exactly as listed in BRAND.md. */
export const palette = {
  ironOre: "#4F4B49",
  honeypotGold: "#F7BF4B",
  clementine: "#F08033",
  clayTerracotta: "#BD643F",
  imperialPurple: "#512888",
  midnightViolet: "#2E1A4A",
} as const;

export type PaletteToken = keyof typeof palette;

/** White is a supporting layout color, not a core palette color. */
export const white = "#FFFFFF";

export const products = ["connect", "pursuit", "contract", "exchange"] as const;
export type Product = (typeof products)[number];

export const productNames = {
  connect: "Connect",
  pursuit: "Pursuit",
  contract: "Contract",
  exchange: "Exchange",
} as const satisfies Record<Product, string>;

/**
 * Product accent per BRAND.md. Exchange is Clay Terracotta by owner decision on 2026-10-25
 * (made under the BRAND.md owner-review clause for an Exchange accent).
 */
export const productAccent = {
  connect: "imperialPurple",
  pursuit: "clementine",
  contract: "honeypotGold",
  exchange: "clayTerracotta",
} as const satisfies Record<Product, PaletteToken>;

/**
 * Exchange pill text color: white on Clay Terracotta, measured at 4.15:1, below the WCAG 4.5:1
 * normal-text threshold (BRAND.md: no core color reaches 4.5:1 on Clay Terracotta; Midnight Violet
 * measures 3.71:1, so white is the stronger choice). Accepted exception: the owner accepted this on
 * 2026-10-25 for the wordmark pill only (bold, uppercase, short label). Do not reuse this pairing
 * for body text, buttons, or other normal-text surfaces.
 */
export const exchangePillForeground = white;

/** Measured contrast of `exchangePillForeground` on Clay Terracotta (see above). */
export const exchangePillContrast = 4.15;

/**
 * Normal-text color to use on each product accent, per the BRAND.md accessible-use rules:
 * white on Imperial Purple, Midnight Violet on Honeypot Gold or Clementine. Exchange uses the
 * accepted exception `exchangePillForeground`.
 */
export const productAccentForeground = {
  connect: white,
  pursuit: palette.midnightViolet,
  contract: palette.midnightViolet,
  exchange: exchangePillForeground,
} as const satisfies Record<Product, string>;

/** Semantic colors preserve the approved Claude export in both themes. */
export const lightTheme = {
  background: "#FAF7F2",
  card: "#FFFFFF",
  foreground: "#4F4B49",
  mutedForeground: "#625D5A",
  mutedSurface: "#F3EEE8",
  border: "#D8D3D0",
  input: "#77706C",
  accent: "#F1EAF8",
  primary: "#F7BF4B",
  primaryForeground: "#2E1A4A",
  primaryHover: "#F08033",
  primaryPressed: "#F08033",
  primaryBorder: "#BD643F",
  primarySoft: "#FFF1C4",
  primarySoftForeground: "#2E1A4A",
  link: "#512888",
  focusRing: "#512888",
  highlight: "#F08033",
  highlightSoft: "#FEE9DB",
  highlightForeground: "#2E1A4A",
  highlightBorder: "#BD643F",
  success: "#1B6B45",
  successSoft: "#E3F1E8",
  warning: "#8F3F00",
  warningSoft: "#FCE7D6",
  danger: "#B42318",
  dangerSoft: "#FBE7E4",
  dangerHover: "#8F1C13",
  info: "#1F5A8A",
  infoSoft: "#E4EEF6",
  scrim: "rgba(46,26,74,.42)",
  document: "#FFFFFF",
} as const;

export type SemanticToken = keyof typeof lightTheme;
export type SemanticTheme = Readonly<Record<SemanticToken, string>>;

export const darkTheme = {
  background: "#2E1A4A",
  card: "#3A2754",
  foreground: "#FAF7F2",
  mutedForeground: "#D8D3D0",
  mutedSurface: "#432C60",
  border: "#6B3AA1",
  input: "#DBC8ED",
  accent: "#432C60",
  primary: "#F7BF4B",
  primaryForeground: "#2E1A4A",
  primaryHover: "#F9D477",
  primaryPressed: "#F08033",
  primaryBorder: "#F7BF4B",
  primarySoft: "#493814",
  primarySoftForeground: "#F7BF4B",
  link: "#F7BF4B",
  focusRing: "#F7BF4B",
  highlight: "#F08033",
  highlightSoft: "#4B2A20",
  highlightForeground: "#FEE9DB",
  highlightBorder: "#BD643F",
  success: "#5CC98E",
  successSoft: "#12352A",
  warning: "#F5A962",
  warningSoft: "#3D2412",
  danger: "#FF8A7A",
  dangerSoft: "#3D1A1A",
  dangerHover: "#FFA597",
  info: "#8CC4F0",
  infoSoft: "#13304A",
  scrim: "rgba(20,10,34,.72)",
  document: "#342249",
} as const satisfies SemanticTheme;

export const themes = { light: lightTheme, dark: darkTheme } as const;
export type ThemeName = keyof typeof themes;

/**
 * State colors stay independent of the brand palette (BRAND.md). Always pair a state
 * color with text or an icon.
 */
export const stateColors = {
  light: {
    success: lightTheme.success,
    successSoft: lightTheme.successSoft,
    warning: lightTheme.warning,
    warningSoft: lightTheme.warningSoft,
    danger: lightTheme.danger,
    dangerSoft: lightTheme.dangerSoft,
    info: lightTheme.info,
    infoSoft: lightTheme.infoSoft,
  },
  dark: {
    success: darkTheme.success,
    successSoft: darkTheme.successSoft,
    warning: darkTheme.warning,
    warningSoft: darkTheme.warningSoft,
    danger: darkTheme.danger,
    dangerSoft: darkTheme.dangerSoft,
    info: darkTheme.info,
    infoSoft: darkTheme.infoSoft,
  },
} as const;

/** Spacing scale in px. */
export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

/** Radius scale in px. `pill` is the fully rounded wordmark pill. */
export const radius = { sm: 6, md: 8, lg: 12, pill: 9999 } as const;
