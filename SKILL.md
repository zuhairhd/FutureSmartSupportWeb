---
name: fss-design
description: Use this skill to generate well-branded interfaces and assets for Future Smart Support (VoiceGate AI) — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `README.md` — full design language reference (content tone, visual foundations, iconography).
- `colors_and_type.css` — drop-in CSS variables for color + type. Import this into any HTML mock to get the brand instantly.
- `assets/FSS_Logo.svg` — primary product logo. Copper/tan, works on dark backgrounds.
- `assets/riyada.png` — Riyada (Oman SME Authority) partner logo. White-bg only.
- `assets/icons.svg` — Feather-style stroked icon sprite (16 glyphs, stroke 1.75). Reference via `<svg><use href="assets/icons.svg#clock"/></svg>`.
- `preview/*.html` — visual specimens for each token group; useful to copy as starter HTML.
- `ui_kits/website/` — high-fidelity React components for the marketing site (header, hero, features grid, offer panel, server card, FAQ, contact form, footer).
- `source/` — the imported Vue 3 codebase. Read it for ground-truth component behavior; do **not** copy Vue templates into outputs.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

### Quick rules of thumb

- **Dark + warm copper.** Page bg `#0f0f10`, brand `#b8885a`. No second hue.
- **Single font: Cairo.** Bilingual (Arabic + Latin) from Google Fonts.
- **No emoji. No photography. No gradients except two subtle radial halos.**
- **Eyebrow → H2 → Sub** is the section opener. 11px uppercase, brand-colored, `letter-spacing: 0.1em`.
- Cards: `#161617` fill, `#262628` border, **16px radius**, **22px padding**. Hover warms the border to brand.
- Buttons: primary = filled brand with dark-ink text; ghost = transparent + line border. 12px radius.
- Icons: Feather-style, stroke 1.75, brand-colored, in a 40×40 brand-dim tile when used in feature cards.
- Bilingual layout: use `inset-inline-*` and `margin-inline-*` everywhere. The site flips RTL/LTR seamlessly.
