import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Wordmark, wordmarkLabel } from "../src/Wordmark.js";
import { palette, white } from "../src/tokens.js";

const render = (...args: Parameters<typeof Wordmark>) => renderToStaticMarkup(Wordmark(...args));
const text = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

describe("Wordmark", () => {
  it.each([
    ["connect", "Vectrum for AEC Connect", palette.imperialPurple, white],
    ["pursuit", "Vectrum for AEC Pursuit", palette.clementine, palette.midnightViolet],
    ["contract", "Vectrum for AEC Contract", palette.honeypotGold, palette.midnightViolet],
    ["exchange", "Vectrum for AEC Exchange", palette.clayTerracotta, white],
  ] as const)("renders the %s lockup with its accent pill", (product, label, bg, fg) => {
    const html = render({ product });
    expect(html).toContain(`aria-label="${label}"`);
    expect(html).toContain('role="img"');
    expect(text(html)).toBe(label);
    expect(html).toContain(`--vb-wm-pill-bg:${bg}`);
    expect(html).toContain(`--vb-wm-pill-fg:${fg}`);
    expect(html).toContain(`--vb-wm-pill-border:${bg}`);
    expect(html).not.toContain("transparent");
  });

  it("renders the umbrella lockup without a pill", () => {
    const html = render({});
    expect(html).toContain('aria-label="Vectrum for AEC"');
    expect(text(html)).toBe("Vectrum for AEC");
    expect(html).not.toContain("vb-wordmark__pill");
  });

  it("applies tone, size, and className", () => {
    const light = render({ product: "connect" });
    expect(light).toContain('data-tone="light"');
    expect(light).toContain('data-size="md"');
    expect(light).toContain(`--vb-wm-fg:${palette.midnightViolet}`);

    const dark = render({ product: "pursuit", tone: "dark", size: "lg", className: "site-logo" });
    expect(dark).toContain('class="vb-wordmark site-logo"');
    expect(dark).toContain('data-tone="dark"');
    expect(dark).toContain('data-size="lg"');
    expect(dark).toContain(`--vb-wm-fg:${white}`);
  });

  it("exposes the accessible label helper", () => {
    expect(wordmarkLabel()).toBe("Vectrum for AEC");
    expect(wordmarkLabel("contract")).toBe("Vectrum for AEC Contract");
  });
});
