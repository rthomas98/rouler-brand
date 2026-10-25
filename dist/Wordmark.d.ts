import { type Product } from "./tokens.js";
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
/** Accessible name of the lockup, e.g. "Vectrum for AEC Connect". */
export declare function wordmarkLabel(product?: Product): string;
/**
 * Vectrum / for / AEC / <product pill> lockup. Requires `@vectrum/brand/wordmark.css`.
 * Fonts are inherited; set `--vb-wordmark-font-display` and `--vb-wordmark-font-sans`
 * to use product typography.
 */
export declare function Wordmark({ product, tone, size, className }: WordmarkProps): import("react").JSX.Element;
//# sourceMappingURL=Wordmark.d.ts.map