import type { CSSProperties } from "react";
import { palette, productAccent, productAccentForeground, productNames, white, type Product } from "./tokens.js";

export type WordmarkTone = "light" | "dark";
export type WordmarkSize = "sm" | "md" | "lg";

export type WordmarkProps = Readonly<{
  /** Product pill. Omit for the umbrella lockup (no pill). */
  product?: Product | undefined;
  /** `light` for light surfaces (Midnight Violet text), `dark` for dark surfaces (white text). */
  tone?: WordmarkTone;
  size?: WordmarkSize;
  className?: string;
}>;

type WordmarkStyle = CSSProperties & Record<`--vb-wm-${string}`, string>;

/** Accessible name of the lockup, e.g. "Vectrum for AEC Connect". */
export function wordmarkLabel(product?: Product): string {
  return product ? `Vectrum for AEC ${productNames[product]}` : "Vectrum for AEC";
}

function wordmarkStyle(product: Product | undefined, tone: WordmarkTone): WordmarkStyle {
  const foreground = tone === "dark" ? white : palette.midnightViolet;
  const style: WordmarkStyle = { "--vb-wm-fg": foreground };
  if (!product) return style;

  const accent = palette[productAccent[product]];
  style["--vb-wm-pill-bg"] = accent;
  style["--vb-wm-pill-fg"] = productAccentForeground[product];
  style["--vb-wm-pill-border"] = accent;
  return style;
}

/**
 * Vectrum / for / AEC / <product pill> lockup. Requires `@vectrum/brand/wordmark.css`.
 * Fonts are inherited; set `--vb-wordmark-font-display` and `--vb-wordmark-font-sans`
 * to use product typography.
 */
export function Wordmark({ product, tone = "light", size = "md", className }: WordmarkProps) {
  return (
    <span
      role="img"
      aria-label={wordmarkLabel(product)}
      className={className ? `vb-wordmark ${className}` : "vb-wordmark"}
      data-tone={tone}
      data-size={size}
      data-product={product}
      style={wordmarkStyle(product, tone)}
    >
      <span className="vb-wordmark__vectrum">Vectrum</span>
      <span className="vb-wordmark__for">for</span>
      <span className="vb-wordmark__aec">AEC</span>
      {product ? <span className="vb-wordmark__pill">{productNames[product]}</span> : null}
    </span>
  );
}
