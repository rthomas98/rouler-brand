# Vectrum for AEC brand reference

## Brand architecture

**Vectrum for AEC** is the umbrella platform.

*Where talent and projects meet.*

| Product | Owns |
| --- | --- |
| **Vectrum for AEC Connect** | Readiness, capabilities, relationships, qualifications, and teaming |
| **Vectrum for AEC Pursuit** | Opportunity intelligence, fit, capture, and pursuit decisions |
| **Vectrum for AEC Contract** | Executed-contract requirements, evidence, submission packages, exceptions, and payment observations |
| **Vectrum for AEC Exchange** — Planned | Buyer/supplier procurement; the marketing interest path creates no procurement account or entitlement |

Use the full product name on first reference. Short labels such as **Connect**, **Pursuit**, **Contract**, and **Exchange** are acceptable inside a clearly branded Vectrum for AEC shell.

## Core palette

The October 2, 2026 palette is canonical.

| Token | Name | Hex | Role |
| --- | --- | --- | --- |
| `iron-ore` | Iron Ore | `#4F4B49` | Neutral body text and supporting structure |
| `honeypot-gold` | Honeypot Gold | `#F7BF4B` | Highlight, selected emphasis, and Contract accent |
| `clementine` | Clementine | `#F08033` | Pursuit accent and active warmth |
| `clay-terracotta` | Clay Terracotta | `#BD643F` | Exchange accent, decorative warmth, charts, and large-format emphasis |
| `imperial-purple` | Imperial Purple | `#512888` | Primary action, links, focus, and Connect accent |
| `midnight-violet` | Midnight Violet | `#2E1A4A` | Umbrella identity, dark surfaces, and strong headings |

The shared foundation uses Midnight Violet and Imperial Purple. Connect is distinguished by Imperial Purple, Pursuit by Clementine, Contract by Honeypot Gold, and Exchange by Clay Terracotta (owner decision, October 25, 2026). Iron Ore supports the family without replacing semantic state colors.

White and quiet warm tints may support layout and readability. Derived colors must be documented as interface tints, not presented as additional core palette colors.

## Accessible use

- Use white on Midnight Violet or Imperial Purple for normal text.
- Use Midnight Violet on Honeypot Gold or Clementine for normal text.
- Use Iron Ore on white or a quiet warm surface for body text.
- Do not use Clay Terracotta as a normal-text background without a separately verified foreground; none of the supplied core colors reaches 4.5:1 against it. Accepted exception (October 25, 2026): the Exchange product pill in the shared wordmark uses white on Clay Terracotta at 4.15:1 for its bold, uppercase, short label only; Midnight Violet measures 3.71:1 there. This exception does not extend to body or other normal text.
- Do not use Honeypot Gold, Clementine, or Clay Terracotta as body text on white.
- Keep success, warning, danger, information, evidence state, and payment state independent of the brand palette. Pair state color with text or an icon.
- Recheck contrast after opacity, hover, dark-mode, chart, export, and tenant-theme changes.

Reference contrast ratios for the supplied colors: white on Midnight Violet `15.41:1`; white on Imperial Purple `10.45:1`; Midnight Violet on Honeypot Gold `9.18:1`; Midnight Violet on Clementine `5.75:1`; Iron Ore on Honeypot Gold `5.14:1`; Iron Ore on white `8.62:1`.

## Typography and marks

The approved Vectrum for AEC logo is **Tower Cut**, selected October 2, 2026: a violet V with integrated building forms, no windows, and a clean junction between the central tower and the right arm of the V. Use the [approved logo reference](assets/vectrum-aec-logo-approved.png) as the source of truth for its appearance. The saved asset is a 1254 × 1254 PNG on white. See [asset details](assets/README.md).

Existing product typography remains in place until a separate typography decision changes it. Do not imply that a temporary code-drawn monogram is a final logo. Existing image assets may remain only when they are unbranded or are retained as historical evidence; retired product logos should not appear as the current identity.

## Naming migration

Use the new names in current interfaces, email display names, metadata, onboarding, current product documentation, and generated customer-facing exports. Keep older names when they are required to identify:

- historical evidence or dated decisions;
- repository and folder paths;
- package scopes and import names;
- API headers, environment variables, schemas, database identifiers, and integration contracts;
- existing domains or email addresses until those systems are migrated.

A source rename does not prove a deployment, domain change, trademark clearance, provider update, or data migration.

## October 22 implementation boundary

Confirmed: display name **Vectrum for AEC**, canonical marketing origin `https://vectrumforaec.com`, and inquiry inbox `info@vectrumforaec.com`. DNS, certificate, and mailbox readiness are separate launch checks. Preserve the approved Tower Cut mark. New wordmark artwork requires owner review before use. The Exchange accent (Clay Terracotta) was approved on October 25, 2026 and is implemented in the shared `@vectrum/brand` package.

Public app-catalog copy uses **App Directory** while existing private `/app/exchange` routing remains compatible. Additional proposed display-label changes (Partnering Exchange to Partner requests; Data Exchange to Integrations and data sharing; Opportunity Exchange to Opportunity discovery) remain proposals pending owner approval. Preserve historical and technical identifiers.

> Package note: the two asset links above are adapted from the umbrella text (`brand-assets/`) to this package's `assets/` directory.
