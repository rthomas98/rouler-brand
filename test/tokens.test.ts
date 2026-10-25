import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { darkTheme, lightTheme, palette, productAccent, radius, spacing } from "../src/tokens.js";
import * as contract from "./fixtures/contract-semantic-themes.js";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");
const camel = (kebab: string) => kebab.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
const kebab = (name: string) => name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** Parses `| \`iron-ore\` | Iron Ore | \`#4F4B49\` | ... |` rows from the BRAND.md core palette table. */
function brandPalette(): Record<string, string> {
  const rows = read("../BRAND.md").matchAll(/^\|\s*`([a-z-]+)`\s*\|[^|]+\|\s*`(#[0-9A-Fa-f]{6})`\s*\|/gm);
  return Object.fromEntries([...rows].map(([, token, hex]) => [camel(token!), hex!]));
}

/** Parses `--vb-name: value;` declarations inside the first block matching `selector`. */
function cssBlock(selector: string): Record<string, string> {
  const css = read("../src/tokens.css");
  const start = css.indexOf(`${selector} {`);
  expect(start, `${selector} block`).toBeGreaterThanOrEqual(0);
  const body = css.slice(start, css.indexOf("}", start));
  return Object.fromEntries([...body.matchAll(/--vb-([a-z-]+):\s*([^;]+);/g)].map(([, k, v]) => [k!, v!.trim()]));
}

describe("core palette", () => {
  it("matches BRAND.md exactly (names and hex values)", () => {
    expect(palette).toEqual(brandPalette());
    expect(Object.keys(palette)).toEqual([
      "ironOre", "honeypotGold", "clementine", "clayTerracotta", "imperialPurple", "midnightViolet",
    ]);
  });

  it("maps product accents per BRAND.md and the 2026-10-25 Exchange owner decision", () => {
    expect(productAccent).toEqual({ connect: "imperialPurple", pursuit: "clementine", contract: "honeypotGold", exchange: "clayTerracotta" });
  });
});

describe("semantic themes", () => {
  it("light and dark themes share the same keys", () => {
    expect(Object.keys(darkTheme)).toEqual(Object.keys(lightTheme));
  });

  it("match the approved Contract themes exactly (all keys, order, and values)", () => {
    expect(Object.keys(contract.lightTheme)).toHaveLength(32);
    expect(Object.keys(contract.darkTheme)).toHaveLength(32);
    expect(Object.entries(lightTheme)).toEqual(Object.entries(contract.lightTheme));
    expect(Object.entries(darkTheme)).toEqual(Object.entries(contract.darkTheme));
  });
});

describe("tokens.css", () => {
  const root = cssBlock(":root");
  const dark = cssBlock('[data-theme="dark"]');

  it("declares the core palette", () => {
    for (const [name, hex] of Object.entries(palette)) expect(root[kebab(name)], name).toBe(hex);
  });

  it("declares every light semantic token under :root", () => {
    for (const [name, value] of Object.entries(lightTheme)) expect(root[kebab(name)], name).toBe(value);
  });

  it("declares every dark semantic token under [data-theme=dark]", () => {
    expect(Object.keys(dark)).toHaveLength(Object.keys(darkTheme).length);
    for (const [name, value] of Object.entries(darkTheme)) expect(dark[kebab(name)], name).toBe(value);
  });

  it("matches the approved Contract themes for every semantic token", () => {
    for (const [name, value] of Object.entries(contract.lightTheme)) expect(root[kebab(name)], `light ${name}`).toBe(value);
    for (const [name, value] of Object.entries(contract.darkTheme)) expect(dark[kebab(name)], `dark ${name}`).toBe(value);
  });

  it("declares spacing and radius scales", () => {
    for (const [name, px] of Object.entries(spacing)) expect(root[`space-${name}`]).toBe(`${px}px`);
    for (const [name, px] of Object.entries(radius)) expect(root[`radius-${name}`]).toBe(`${px}px`);
  });

  it("exposes every product accent and its pill foreground", () => {
    for (const [product, token] of Object.entries(productAccent)) {
      expect(root[`product-${product}`], product).toBe(`var(--vb-${kebab(token)})`);
    }
    expect(root["product-connect-foreground"]).toBe("var(--vb-white)");
    expect(root["product-pursuit-foreground"]).toBe("var(--vb-midnight-violet)");
    expect(root["product-contract-foreground"]).toBe("var(--vb-midnight-violet)");
    expect(root["product-exchange-foreground"]).toBe("var(--vb-white)");
  });
});

describe("tailwind.css", () => {
  it("maps every --vb- token it references to a declared token", () => {
    const declared = new Set(Object.keys(cssBlock(":root")));
    const referenced = [...read("../src/tailwind.css").matchAll(/var\(--vb-([a-z-]+)\)/g)].map(([, k]) => k!);
    expect(referenced.length).toBeGreaterThan(40);
    for (const name of referenced) expect(declared.has(name), name).toBe(true);
  });
});

describe("README", () => {
  it("labels every non-palette theme color as an interface tint or state color", () => {
    const readme = read("../README.md");
    const core = new Set<string>([...Object.values(palette), "#FFFFFF"]);
    const documented = new Set(
      [...readme.matchAll(/^\|\s*`([^`]+)`\s*\|\s*(?:interface tint|state)\s*\|/gm)].map(([, value]) => value!),
    );
    for (const theme of [lightTheme, darkTheme]) {
      for (const [name, value] of Object.entries(theme)) {
        if (!core.has(value)) expect(documented.has(value), `${name} ${value}`).toBe(true);
      }
    }
  });
});
