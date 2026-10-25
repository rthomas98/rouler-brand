import { describe, expect, it } from "vitest";
import { contrastRatio } from "../src/contrast.js";
import { exchangePillContrast, exchangePillForeground, palette, productAccent, productAccentForeground, white } from "../src/tokens.js";

const { ironOre, honeypotGold, clementine, clayTerracotta, imperialPurple, midnightViolet } = palette;

describe("contrastRatio", () => {
  it("returns 21:1 for black on white and 1:1 for identical colors", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
    expect(contrastRatio(ironOre, ironOre)).toBe(1);
  });

  it("rejects non-hex input", () => {
    expect(() => contrastRatio("rgba(0,0,0,.5)", white)).toThrow();
  });
});

describe("BRAND.md documented pairs", () => {
  const pairs: Array<[string, string, string, number]> = [
    ["white on Midnight Violet", white, midnightViolet, 15.41],
    ["white on Imperial Purple", white, imperialPurple, 10.45],
    ["Midnight Violet on Honeypot Gold", midnightViolet, honeypotGold, 9.18],
    ["Midnight Violet on Clementine", midnightViolet, clementine, 5.75],
    ["Iron Ore on Honeypot Gold", ironOre, honeypotGold, 5.14],
    ["Iron Ore on white", ironOre, white, 8.62],
  ];

  it.each(pairs)("%s is >= 4.5:1 and matches the documented ratio", (_, fg, bg, documented) => {
    const ratio = contrastRatio(fg, bg);
    expect(ratio).toBeGreaterThanOrEqual(4.5);
    expect(Math.round(ratio * 100) / 100).toBe(documented);
  });

  it("no core color or white reaches 4.5:1 on Clay Terracotta", () => {
    for (const fg of [white, ...Object.values(palette)]) expect(contrastRatio(fg, clayTerracotta)).toBeLessThan(4.5);
  });
});

describe("wordmark pills", () => {
  it.each(["connect", "pursuit", "contract"] as const)("%s pill text is >= 4.5:1 on its accent", (product) => {
    expect(contrastRatio(productAccentForeground[product], palette[productAccent[product]])).toBeGreaterThanOrEqual(4.5);
  });

  it("Exchange pill uses the accepted exception: white on Clay Terracotta at the documented ratio", () => {
    expect(productAccent.exchange).toBe("clayTerracotta");
    expect(productAccentForeground.exchange).toBe(exchangePillForeground);
    expect(exchangePillForeground).toBe(white);
    const ratio = contrastRatio(exchangePillForeground, clayTerracotta);
    expect(Math.round(ratio * 100) / 100).toBe(exchangePillContrast);
    expect(exchangePillContrast).toBe(4.15);
    expect(ratio).toBeLessThan(4.5); // documented exception, not a pass
  });

  it("white was chosen because Midnight Violet is worse on Clay Terracotta", () => {
    expect(contrastRatio(midnightViolet, clayTerracotta)).toBeLessThan(contrastRatio(white, clayTerracotta));
  });
});
