# @vectrum/brand

Shared brand tokens, logo assets, and the wordmark component for every Vectrum for AEC surface.

The source of truth for the palette and naming rules is [BRAND.md](BRAND.md), copied from the umbrella. This package ships colors, spacing, radius, the logo, and the wordmark. It ships **no fonts**: **the typography decision is pending**, and each product keeps its current typography until a separate decision changes it.

## Install

Install from git. The prebuilt `dist/` is committed, so no build step runs on install:

```sh
pnpm add github:rthomas98/rouler-brand
# pin a release or commit
pnpm add "github:rthomas98/rouler-brand#<tag-or-sha>"
```

Peer dependency: `react@^19` (needed only for `Wordmark`).

## Tokens in TypeScript

```ts
import {
  palette,            // six core colors, BRAND.md names
  productAccent,      // { connect: "imperialPurple", pursuit: "clementine", contract: "honeypotGold", exchange: "clayTerracotta" }
  productAccentForeground,
  lightTheme, darkTheme, themes,
  stateColors, spacing, radius,
  contrastRatio,      // WCAG 2.x helper
} from "@vectrum/brand";

palette.imperialPurple; // "#512888"
```

## Plain CSS

```css
@import "@vectrum/brand/tokens.css";

.button { background: var(--vb-primary); color: var(--vb-primary-foreground); border-radius: var(--vb-radius-md); }
```

`tokens.css` defines everything under `:root` with a `--vb-` prefix: the core palette (`--vb-imperial-purple`), product accents (`--vb-product-connect` and `--vb-product-connect-foreground`, likewise for `pursuit`, `contract`, and `exchange`), the light semantic theme (`--vb-background`, `--vb-primary`, …), spacing (`--vb-space-md`), and radius (`--vb-radius-md`). Set `data-theme="dark"` on any element to switch its subtree to the dark semantic theme.

## Tailwind 4

```css
@import "tailwindcss";
@import "@vectrum/brand/tailwind.css";
```

This adds `@theme inline` colors that resolve through the `--vb-*` variables, so `data-theme="dark"` works without rebuilding:

- core: `bg-imperial-purple`, `text-midnight-violet`, `bg-honeypot-gold`, `text-iron-ore`, `bg-clementine`, `bg-clay-terracotta`
- product: `bg-product-connect text-product-connect-foreground` (also `pursuit`, `contract`, and `exchange`)
- semantic: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-link`, `ring-focus-ring`, `text-danger`, `bg-success-soft`, …
- radius: `rounded-brand-sm` / `-md` / `-lg`. Tailwind's default `rounded-*` scale is untouched.

`tailwind.css` imports `tokens.css` itself. The default Tailwind palette is not removed; add `--color-*: initial;` in your own `@theme` if you want only brand colors.

## Wordmark

```tsx
import { Wordmark } from "@vectrum/brand";
import "@vectrum/brand/wordmark.css"; // once, e.g. in your root layout or global CSS

<Wordmark product="connect" />                       // Vectrum for AEC + CONNECT pill
<Wordmark product="pursuit" tone="dark" size="lg" />
<Wordmark />                                          // umbrella lockup, no pill
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `product` | `"connect" \| "pursuit" \| "contract" \| "exchange" \| undefined` | `undefined` | Omit for the umbrella lockup (no pill). |
| `tone` | `"light" \| "dark"` | `"light"` | `light` = Midnight Violet text for light surfaces; `dark` = white text for dark surfaces. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | 16 / 22 / 30 px for "Vectrum". |
| `className` | `string` | — | Added after `vb-wordmark`. |

- Rendered as `role="img"` with `aria-label="Vectrum for AEC <Product>"` (or `"Vectrum for AEC"`). `wordmarkLabel(product)` returns the same string.
- Pill colors follow BRAND.md contrast rules: Connect is white on Imperial Purple (10.45:1), Pursuit is Midnight Violet on Clementine (5.75:1), and Contract is Midnight Violet on Honeypot Gold (9.18:1).
- Exchange is white on Clay Terracotta (4.15:1). This is an accepted exception, not a pass; see below.
- Colors are set inline as CSS variables, and layout comes from the small scoped `wordmark.css`. Neither depends on Tailwind, so the component works in Vite, Next.js (including Server Components), and plain React.
- Fonts are inherited. To use product typography, set `--vb-wordmark-font-display` (Vectrum, for) and `--vb-wordmark-font-sans` (AEC, pill) on a parent:

  ```css
  .vb-wordmark { --vb-wordmark-font-display: var(--font-manrope); --vb-wordmark-font-sans: var(--font-inter); }
  ```

## Logo assets

**Tower Cut is the only approved mark.** See [assets/README.md](assets/README.md).

```ts
import logo from "@vectrum/brand/assets/vectrum-aec-logo-approved.png";
```

## Interface tints and accepted exceptions

Core palette (BRAND.md): Iron Ore `#4F4B49`, Honeypot Gold `#F7BF4B`, Clementine `#F08033`, Clay Terracotta `#BD643F`, Imperial Purple `#512888`, and Midnight Violet `#2E1A4A`. White `#FFFFFF` is a supporting layout color.

The semantic themes are ported unchanged from the approved Contract design tokens. Every value below that is not a core palette color is an **interface tint** or an independent **state color**. None is an additional brand color.

| Value | Kind | Used by |
| --- | --- | --- |
| `#FAF7F2` | interface tint | light.background, dark.foreground |
| `#625D5A` | interface tint | light.mutedForeground |
| `#F3EEE8` | interface tint | light.mutedSurface |
| `#D8D3D0` | interface tint | light.border, dark.mutedForeground |
| `#77706C` | interface tint | light.input |
| `#F1EAF8` | interface tint | light.accent |
| `#FFF1C4` | interface tint | light.primarySoft |
| `#FEE9DB` | interface tint | light.highlightSoft, dark.highlightForeground |
| `rgba(46,26,74,.42)` | interface tint | light.scrim |
| `#3A2754` | interface tint | dark.card |
| `#432C60` | interface tint | dark.mutedSurface, dark.accent |
| `#6B3AA1` | interface tint | dark.border |
| `#DBC8ED` | interface tint | dark.input |
| `#F9D477` | interface tint | dark.primaryHover |
| `#493814` | interface tint | dark.primarySoft |
| `#4B2A20` | interface tint | dark.highlightSoft |
| `#342249` | interface tint | dark.document |
| `rgba(20,10,34,.72)` | interface tint | dark.scrim |
| `#1B6B45` | state | light.success |
| `#E3F1E8` | state | light.successSoft |
| `#8F3F00` | state | light.warning |
| `#FCE7D6` | state | light.warningSoft |
| `#B42318` | state | light.danger |
| `#FBE7E4` | state | light.dangerSoft |
| `#8F1C13` | state | light.dangerHover |
| `#1F5A8A` | state | light.info |
| `#E4EEF6` | state | light.infoSoft |
| `#5CC98E` | state | dark.success |
| `#12352A` | state | dark.successSoft |
| `#F5A962` | state | dark.warning |
| `#3D2412` | state | dark.warningSoft |
| `#FF8A7A` | state | dark.danger |
| `#3D1A1A` | state | dark.dangerSoft |
| `#FFA597` | state | dark.dangerHover |
| `#8CC4F0` | state | dark.info |
| `#13304A` | state | dark.infoSoft |

State colors stay independent of the brand palette. Always pair them with text or an icon.

**Accepted exception: Exchange pill.** The Exchange accent is Clay Terracotta `#BD643F` (owner decision, 2026-10-25). Its pill text is white at **4.15:1**, below the 4.5:1 normal-text threshold; Midnight Violet is worse (3.71:1). The owner accepted this on 2026-10-25 for the wordmark pill only (bold, uppercase, short label). Do not use white or any core color as normal text on Clay Terracotta elsewhere. The values are exported as `exchangePillForeground` and `exchangePillContrast`, and a test fails if the measured ratio drifts.

## Development

Requires Node 22.20.0 (`.node-version`) and pnpm 11.15.1.

```sh
pnpm install
pnpm build       # clean dist/, then tsc → dist/ (ESM + .d.ts)
pnpm test        # vitest: BRAND.md hex parity, CSS parity, WCAG contrast, Wordmark rendering
pnpm typecheck
pnpm check:dist  # clean build to a temp dir; fails on missing, obsolete, or changed dist/ files
```

**Commit `dist/` with every source change.** Consumers install straight from git. There is intentionally no `prepare` script: pnpm 11 refuses to run lifecycle scripts of git-hosted dependencies unless each consumer allowlists the exact commit in `allowBuilds`.

## React-free entry points

`@vectrum/brand/tokens` exports the palette, product accents, semantic themes, spacing, and radius with no React dependency, and `@vectrum/brand/contrast` exports the WCAG helpers. Use these from React Native apps, build scripts, or any consumer that should not pull `Wordmark` into its bundle. The root entry re-exports everything including `Wordmark`.
