import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { palette, productAccent, productAccentForeground, productNames, white } from "./tokens.js";
/** Accessible name of the lockup, e.g. "Vectrum for AEC Connect". */
export function wordmarkLabel(product) {
    return product ? `Vectrum for AEC ${productNames[product]}` : "Vectrum for AEC";
}
function wordmarkStyle(product, tone) {
    const foreground = tone === "dark" ? white : palette.midnightViolet;
    const style = { "--vb-wm-fg": foreground };
    if (!product)
        return style;
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
export function Wordmark({ product, tone = "light", size = "md", className }) {
    return (_jsxs("span", { role: "img", "aria-label": wordmarkLabel(product), className: className ? `vb-wordmark ${className}` : "vb-wordmark", "data-tone": tone, "data-size": size, "data-product": product, style: wordmarkStyle(product, tone), children: [_jsx("span", { className: "vb-wordmark__vectrum", children: "Vectrum" }), _jsx("span", { className: "vb-wordmark__for", children: "for" }), _jsx("span", { className: "vb-wordmark__aec", children: "AEC" }), product ? _jsx("span", { className: "vb-wordmark__pill", children: productNames[product] }) : null] }));
}
//# sourceMappingURL=Wordmark.js.map