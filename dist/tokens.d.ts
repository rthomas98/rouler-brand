/**
 * Vectrum for AEC brand tokens.
 *
 * Core palette: the October 2, 2026 palette in BRAND.md (canonical).
 * Semantic themes: ported unchanged from rouler-contract `packages/design-tokens`
 * (approved Claude export). Values in the themes that are not core palette colors are
 * interface tints; they are listed in README.md.
 */
/** The six core palette colors, exactly as listed in BRAND.md. */
export declare const palette: {
    readonly ironOre: "#4F4B49";
    readonly honeypotGold: "#F7BF4B";
    readonly clementine: "#F08033";
    readonly clayTerracotta: "#BD643F";
    readonly imperialPurple: "#512888";
    readonly midnightViolet: "#2E1A4A";
};
export type PaletteToken = keyof typeof palette;
/** White is a supporting layout color, not a core palette color. */
export declare const white = "#FFFFFF";
export declare const products: readonly ["connect", "pursuit", "contract", "exchange"];
export type Product = (typeof products)[number];
export declare const productNames: {
    readonly connect: "Connect";
    readonly pursuit: "Pursuit";
    readonly contract: "Contract";
    readonly exchange: "Exchange";
};
/**
 * Product accent per BRAND.md. Exchange is Clay Terracotta by owner decision on 2026-10-25
 * (made under the BRAND.md owner-review clause for an Exchange accent).
 */
export declare const productAccent: {
    readonly connect: "imperialPurple";
    readonly pursuit: "clementine";
    readonly contract: "honeypotGold";
    readonly exchange: "clayTerracotta";
};
/**
 * Exchange pill text color: white on Clay Terracotta, measured at 4.15:1, below the WCAG 4.5:1
 * normal-text threshold (BRAND.md: no core color reaches 4.5:1 on Clay Terracotta; Midnight Violet
 * measures 3.71:1, so white is the stronger choice). Accepted exception: the owner accepted this on
 * 2026-10-25 for the wordmark pill only (bold, uppercase, short label). Do not reuse this pairing
 * for body text, buttons, or other normal-text surfaces.
 */
export declare const exchangePillForeground = "#FFFFFF";
/** Measured contrast of `exchangePillForeground` on Clay Terracotta (see above). */
export declare const exchangePillContrast = 4.15;
/**
 * Normal-text color to use on each product accent, per the BRAND.md accessible-use rules:
 * white on Imperial Purple, Midnight Violet on Honeypot Gold or Clementine. Exchange uses the
 * accepted exception `exchangePillForeground`.
 */
export declare const productAccentForeground: {
    readonly connect: "#FFFFFF";
    readonly pursuit: "#2E1A4A";
    readonly contract: "#2E1A4A";
    readonly exchange: "#FFFFFF";
};
/** Semantic colors preserve the approved Claude export in both themes. */
export declare const lightTheme: {
    readonly background: "#FAF7F2";
    readonly card: "#FFFFFF";
    readonly foreground: "#4F4B49";
    readonly mutedForeground: "#625D5A";
    readonly mutedSurface: "#F3EEE8";
    readonly border: "#D8D3D0";
    readonly input: "#77706C";
    readonly accent: "#F1EAF8";
    readonly primary: "#F7BF4B";
    readonly primaryForeground: "#2E1A4A";
    readonly primaryHover: "#F08033";
    readonly primaryPressed: "#F08033";
    readonly primaryBorder: "#BD643F";
    readonly primarySoft: "#FFF1C4";
    readonly primarySoftForeground: "#2E1A4A";
    readonly link: "#512888";
    readonly focusRing: "#512888";
    readonly highlight: "#F08033";
    readonly highlightSoft: "#FEE9DB";
    readonly highlightForeground: "#2E1A4A";
    readonly highlightBorder: "#BD643F";
    readonly success: "#1B6B45";
    readonly successSoft: "#E3F1E8";
    readonly warning: "#8F3F00";
    readonly warningSoft: "#FCE7D6";
    readonly danger: "#B42318";
    readonly dangerSoft: "#FBE7E4";
    readonly dangerHover: "#8F1C13";
    readonly info: "#1F5A8A";
    readonly infoSoft: "#E4EEF6";
    readonly scrim: "rgba(46,26,74,.42)";
    readonly document: "#FFFFFF";
};
export type SemanticToken = keyof typeof lightTheme;
export type SemanticTheme = Readonly<Record<SemanticToken, string>>;
export declare const darkTheme: {
    readonly background: "#2E1A4A";
    readonly card: "#3A2754";
    readonly foreground: "#FAF7F2";
    readonly mutedForeground: "#D8D3D0";
    readonly mutedSurface: "#432C60";
    readonly border: "#6B3AA1";
    readonly input: "#DBC8ED";
    readonly accent: "#432C60";
    readonly primary: "#F7BF4B";
    readonly primaryForeground: "#2E1A4A";
    readonly primaryHover: "#F9D477";
    readonly primaryPressed: "#F08033";
    readonly primaryBorder: "#F7BF4B";
    readonly primarySoft: "#493814";
    readonly primarySoftForeground: "#F7BF4B";
    readonly link: "#F7BF4B";
    readonly focusRing: "#F7BF4B";
    readonly highlight: "#F08033";
    readonly highlightSoft: "#4B2A20";
    readonly highlightForeground: "#FEE9DB";
    readonly highlightBorder: "#BD643F";
    readonly success: "#5CC98E";
    readonly successSoft: "#12352A";
    readonly warning: "#F5A962";
    readonly warningSoft: "#3D2412";
    readonly danger: "#FF8A7A";
    readonly dangerSoft: "#3D1A1A";
    readonly dangerHover: "#FFA597";
    readonly info: "#8CC4F0";
    readonly infoSoft: "#13304A";
    readonly scrim: "rgba(20,10,34,.72)";
    readonly document: "#342249";
};
export declare const themes: {
    readonly light: {
        readonly background: "#FAF7F2";
        readonly card: "#FFFFFF";
        readonly foreground: "#4F4B49";
        readonly mutedForeground: "#625D5A";
        readonly mutedSurface: "#F3EEE8";
        readonly border: "#D8D3D0";
        readonly input: "#77706C";
        readonly accent: "#F1EAF8";
        readonly primary: "#F7BF4B";
        readonly primaryForeground: "#2E1A4A";
        readonly primaryHover: "#F08033";
        readonly primaryPressed: "#F08033";
        readonly primaryBorder: "#BD643F";
        readonly primarySoft: "#FFF1C4";
        readonly primarySoftForeground: "#2E1A4A";
        readonly link: "#512888";
        readonly focusRing: "#512888";
        readonly highlight: "#F08033";
        readonly highlightSoft: "#FEE9DB";
        readonly highlightForeground: "#2E1A4A";
        readonly highlightBorder: "#BD643F";
        readonly success: "#1B6B45";
        readonly successSoft: "#E3F1E8";
        readonly warning: "#8F3F00";
        readonly warningSoft: "#FCE7D6";
        readonly danger: "#B42318";
        readonly dangerSoft: "#FBE7E4";
        readonly dangerHover: "#8F1C13";
        readonly info: "#1F5A8A";
        readonly infoSoft: "#E4EEF6";
        readonly scrim: "rgba(46,26,74,.42)";
        readonly document: "#FFFFFF";
    };
    readonly dark: {
        readonly background: "#2E1A4A";
        readonly card: "#3A2754";
        readonly foreground: "#FAF7F2";
        readonly mutedForeground: "#D8D3D0";
        readonly mutedSurface: "#432C60";
        readonly border: "#6B3AA1";
        readonly input: "#DBC8ED";
        readonly accent: "#432C60";
        readonly primary: "#F7BF4B";
        readonly primaryForeground: "#2E1A4A";
        readonly primaryHover: "#F9D477";
        readonly primaryPressed: "#F08033";
        readonly primaryBorder: "#F7BF4B";
        readonly primarySoft: "#493814";
        readonly primarySoftForeground: "#F7BF4B";
        readonly link: "#F7BF4B";
        readonly focusRing: "#F7BF4B";
        readonly highlight: "#F08033";
        readonly highlightSoft: "#4B2A20";
        readonly highlightForeground: "#FEE9DB";
        readonly highlightBorder: "#BD643F";
        readonly success: "#5CC98E";
        readonly successSoft: "#12352A";
        readonly warning: "#F5A962";
        readonly warningSoft: "#3D2412";
        readonly danger: "#FF8A7A";
        readonly dangerSoft: "#3D1A1A";
        readonly dangerHover: "#FFA597";
        readonly info: "#8CC4F0";
        readonly infoSoft: "#13304A";
        readonly scrim: "rgba(20,10,34,.72)";
        readonly document: "#342249";
    };
};
export type ThemeName = keyof typeof themes;
/**
 * State colors stay independent of the brand palette (BRAND.md). Always pair a state
 * color with text or an icon.
 */
export declare const stateColors: {
    readonly light: {
        readonly success: "#1B6B45";
        readonly successSoft: "#E3F1E8";
        readonly warning: "#8F3F00";
        readonly warningSoft: "#FCE7D6";
        readonly danger: "#B42318";
        readonly dangerSoft: "#FBE7E4";
        readonly info: "#1F5A8A";
        readonly infoSoft: "#E4EEF6";
    };
    readonly dark: {
        readonly success: "#5CC98E";
        readonly successSoft: "#12352A";
        readonly warning: "#F5A962";
        readonly warningSoft: "#3D2412";
        readonly danger: "#FF8A7A";
        readonly dangerSoft: "#3D1A1A";
        readonly info: "#8CC4F0";
        readonly infoSoft: "#13304A";
    };
};
/** Spacing scale in px. */
export declare const spacing: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 16;
    readonly lg: 24;
    readonly xl: 32;
};
/** Radius scale in px. `pill` is the fully rounded wordmark pill. */
export declare const radius: {
    readonly sm: 6;
    readonly md: 8;
    readonly lg: 12;
    readonly pill: 9999;
};
//# sourceMappingURL=tokens.d.ts.map