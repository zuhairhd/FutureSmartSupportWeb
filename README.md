# Future Smart Support — Design System

A living spec for the **Future Smart Support** brand, the company behind **VoiceGate AI** — a 24/7 Arabic + English AI voice receptionist installed on-premise at small and medium businesses in Oman and the wider Gulf.

The system is bilingual (Arabic primary, English secondary), runs in a **dark, warm-copper** aesthetic, and reads like a serious enterprise product targeted at clinics, salons, auto workshops, real estate offices and other SMEs.

---

## Sources

This design system was reconstructed from the live marketing site code. If you have access, browse these sources for deeper context:

- **Live site:** [https://futuresmartsupport.com](https://futuresmartsupport.com)
- **Primary repo (Vue 3 + Vite):** [github.com/zuhairhd/FutureSmartSupportWeb](https://github.com/zuhairhd/FutureSmartSupportWeb) — the canonical implementation, mirrored under `source/` in this project.
- **Static prototype (older, single-page HTML):** [github.com/zuhairhd/FutureSmartSubpport](https://github.com/zuhairhd/FutureSmartSubpport)
- **Partner credential:** Riyada — SMEs Development Authority of Oman (logo at `assets/riyada.png`).

The `source/` folder in this project is the imported Vue 3 codebase; everything else (`assets/`, `colors_and_type.css`, `preview/`, `ui_kits/`, `SKILL.md`) is the curated design system on top of it.

---

## What the company sells

**VoiceGate AI** is *not* a generic cloud SaaS. The pitch is "**local server + cloud dashboard**":

1. **On-premise AI server** — a physical box (server + Grandstream HT813 VoIP adapter + Grandstream GXP1625 desk phone) installed at the client's site for **372 OMR one-time** setup, plus a monthly subscription for cloud features.
2. **Bilingual AI receptionist** — answers every call 24/7 in **Arabic or English**, auto-detects the caller's language, books appointments, takes orders, logs follow-ups, can transfer to a human.
3. **Cloud dashboard** — call logs, full recordings, transcripts, analytics; accessible from anywhere while raw call data stays on-prem.

The product is positioned for **Oman & Gulf SMEs** that can't justify a full-time receptionist: clinics, salons, auto workshops, real estate, law offices, restaurants, retail.

---

## CONTENT FUNDAMENTALS

### Voice & tone

Confident, professional, plain. Reads like a serious B2B vendor pitch — **not** a startup landing page, **not** a hype-y consumer brand. Sentences are short and outcome-led. Each section opens with a benefit (`"Never miss a customer call again"`), then earns it with concrete deliverables.

### Person & address

- **English:** Second person, addressed to the business owner — "your customers", "your team", "your dashboard". Never "we'll help you" boilerplate.
- **Arabic:** Maintains the same direct B2B address. The site treats Arabic as the **primary** language (the HTML loads `dir="rtl"` by default) and English as secondary.

### Casing

- **Title Case** for section titles, feature names, and CTAs (`"Request Demo"`, `"View Special Offer"`, `"Local Server + Cloud Monitoring"`).
- **UPPERCASE with wide letter-spacing** for eyebrow labels above each section (`FEATURES`, `HOW IT WORKS`, `SPECIAL OFFER`). 11px, brand-colored, `letter-spacing: 0.1em`.
- **Sentence case** in body copy.

### Vocabulary tics

- "**VoiceGate AI**" is the product name — always written together, capital V, capital G, capital AI, no hyphen.
- "**Future Smart Support**" is the company name (used in the footer, legal pages, and email).
- Capabilities are framed as **workflows** ("appointment booking workflow", "order-taking workflow") rather than features — implying configurability.
- "**Local server + cloud dashboard**" is the recurring brand-positioning phrase; expect it in the hero, the trust strip, and the deploy section.
- Numbers carry weight: `24/7`, `372 OMR`, `2 Languages` — used in the trust strip and the price block as standalone tokens.

### What's avoided

- **No emoji.** None. Not in nav, not in CTAs, not in features.
- No exclamation marks. No "🚀 amazing!" tone.
- No abstract metaphors. Every value prop is concrete: hardware included, transcripts stored, calls transferred.
- No "powered by GPT" / "powered by LLM" name-dropping — the AI is presented as a product capability, not a model.

### Example copy specimens

> **Eyebrow:** `FEATURES`
> **H2:** `A complete AI receptionist system`
> **Sub:** `Everything you need to handle calls professionally, with full visibility into every conversation.`

> **Feature card title:** `24/7 AI Call Answering`
> **Feature card body:** `Never miss a call. VoiceGate AI is always on — outside business hours, weekends, and public holidays.`

> **Price block:** `372 OMR  ·  One-time setup fee`
> **Subscription note (with info icon):** `A monthly AI service subscription applies for cloud access, ongoing support, updates, monitoring, and AI processing.`

---

## VISUAL FOUNDATIONS

### The single most important rule

**Dark + warm copper.** Everything sits on a near-black ink (`#0f0f10`) and is accented in a single warm tan (`#b8885a`). There is no second hue. Green and red appear only as status signals (live / error).

### Color

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#0f0f10` | Page canvas |
| `--surface` (card) | `#161617` | Card background |
| `--surface-2` (card-hover) | `#1c1c1e` | Card hover |
| `--line` | `#262628` | All hairlines + borders |
| `--fg` | `#e9e6e3` | Warm white body text |
| `--muted` | `#bfb6ae` | Secondary text, labels |
| `--brand` | `#b8885a` | All accents, primary CTAs, icons |
| `--brand-soft` | `#cdab8f` | Logo fill, light accents |
| `--brand-dim` | `rgba(184,136,90,0.15)` | Tinted icon tiles, dot halos |
| `--brand-glow` | `rgba(184,136,90,0.30)` | CTA hover shadow |
| `--success` | `#6fbf73` | Active dot, success state |
| `--warning` | `#d4a029` | Server "yellow light" dot |
| `--error` | `#e05c5c` | Form error, "red light" dot |

The body text is **warm white**, not pure white. The page bg is **ink**, not pure black. This warm-on-warm bias is what stops the dark theme reading as generic tech-grey.

### Typography

- **Two faces, both self-hosted as variable fonts** in `fonts/`:
  - **Inter** (`fonts/InterVariable.ttf` + `fonts/InterVariable-Italic.ttf`) — primary Latin face. Variable weight 100–900, normal + italic. Used for all UI in LTR mode.
  - **Cairo** (`fonts/Cairo-VariableFont_slnt_wght.ttf`) — primary Arabic face. Variable weight 200–1000 with a `slnt` slant axis. Used automatically when `dir="rtl"`, and as the Latin fallback after Inter.
- **Sizes** anchor at body 15px / sub 16-17px / h2 30px / h1 42px / display 48px (used only for the 372 OMR price).
- **Letter-spacing:** wide (`0.1em`) on uppercase eyebrows, slightly tight (`-0.02em`) on h1 and display numbers.
- **Line-height:** `1.65–1.7` for paragraphs (loose, easy on small text), `1.2` for h1, `1.4` for card headings.
- **Weight contrast** is the main hierarchy tool: 400 sub, 600 card title, 700 section title, 800 price.
- **Inter feature settings:** the system turns on `cv02 · cv03 · cv04 · cv11 · ss01` for the alternate single-storey `a`, straight-leg `l`, and curved-tail forms that make the face feel slightly less "ubiquitous Inter."

### Spacing

A loose 4-step scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80`. Most components sit on **16 / 22 / 28** for padding and **44 / 80** for section vertical rhythm. Sections breathe — 80px top/bottom on desktop, collapsing to 44px on mobile.

### Backgrounds

- The page is flat ink. **No texture, no grain, no full-bleed photography.**
- Two **subtle radial gradients** punctuate the page: a warm halo in the hero (`radial-gradient(ellipse 1200px 500px at 20% -5%, rgba(184,136,90,0.12), transparent)`), and a softer one centered on the Special Offer section. These are the only "decorations".
- Alternating sections get a near-invisible top-down white wash (`linear-gradient(180deg, rgba(255,255,255,0.025), transparent)`) — just enough to separate adjacent sections without a hard divider.
- The sticky header is a **glassy** surface: `rgba(15,15,16,0.92)` + `backdrop-filter: saturate(180%) blur(10px)`.

### Borders

- All hairlines are **1px solid `#262628`** (`--line`). One color, applied universally.
- On hover, branded surfaces upgrade their border to `rgba(184,136,90,0.35)` — a 1-step warmer ring, no width change.
- Inputs swap their border to solid `--brand` on focus.

### Corner radii

| Use | Radius |
|---|---|
| Inputs, small icon tiles | `10px` |
| Buttons, FAQ items | `12px` |
| Cards (`.card`), server card | `16px` |
| Badges, status dots, chips | `999px` (pill) |
| Lang toggle, small chips | `8px` |

### Shadows / elevation

The system is **mostly flat**. Three shadows in use:

1. **Scroll-state header shadow** — `0 4px 32px rgba(0,0,0,0.50)` (kicks in once scrolled).
2. **Primary CTA hover** — `0 4px 16px var(--brand-glow)` paired with a `-1px` lift.
3. **Server visualization glow** — `0 0 40px rgba(184,136,90,0.08), 0 0 0 1px var(--line)`. Used **only** on the local-deploy server card.

Cards otherwise rely on the border alone.

### Buttons

- **Primary:** filled brand color `#b8885a`, dark-ink text (`#1a120a`), 12px radius, 11px / 22px padding, weight 600. Hover: `translateY(-1px)` + brand glow.
- **Ghost:** transparent fill, line border, regular text color. Hover: `rgba(255,255,255,0.05)` fill.
- Disabled: 55% opacity, no transform.
- Buttons never use rounded-pill shapes (those are reserved for tags/badges).

### Form inputs

- 10px radius, `rgba(255,255,255,0.03)` fill, line border.
- Focus shifts the border to brand. **No focus ring.**
- Labels above the field in muted color, 13px, weight 500.

### Cards

- Background `#161617`, line border, **16px radius**, **22px padding** (28px on the price-includes card).
- Hover variant: border becomes `rgba(184,136,90,0.35)`, fill becomes `#1c1c1e`.
- Cards never carry colored left borders or stripes. That AI-slop pattern is explicitly avoided.

### Lists & dots

- **Checklist** items use a circular brand-dim well with a brand-colored tick SVG inside — embedded as a data-URI in `base.css`. Always 18px circle, 1.5px brand border.
- **Step numbers** sit in a 36px brand-dim circle with a brand-colored numeral and a horizontal connecting line behind them.
- **Industry numbers** sit in a 34px brand-dim **rounded square** (10px radius) — the only place where numbered tiles use square corners.

### Hover states

- **Links:** drop opacity to `0.85`.
- **Cards:** border warms to brand, surface lifts one step (`#161617 → #1c1c1e`).
- **Buttons:** lift `-1px` + brand glow shadow.
- **Lang toggle:** border + text shift to brand.
- **Nav links:** active route picks up brand color.

### Press / active states

No explicit press scale-down — buttons rely on the `:hover` lift inverting back to flat on click. Focus is handled by border color shift, not outline rings.

### Transparency & blur

- **One blur** only — the sticky header (`backdrop-filter: blur(10px) saturate(180%)`).
- Translucent fills (`rgba(255,255,255,0.02–0.05)`) are used for: badge backgrounds, ghost-button hover, alt-section gradient wash, input fills.
- The brand-dim color (`rgba(184,136,90,0.15)`) carries the entire tinted-fill system — icon tiles, step numbers, status dots, brand chips.

### Animation

- **Easing:** `ease` and `cubic-bezier(0.22, 0.61, 0.36, 1)` (subtle ease-out). No bounce, no spring.
- **Durations:** mostly `0.15–0.25s` for color/border transitions, `0.30s` for panel open/close.
- **Pulses:** the live status dot in the hero card pulses every 2s (`box-shadow` ring expanding then shrinking). The server "Active" dot pulses opacity every 2s.
- **FAQ open:** `max-height` transition with a `0.3s ease`, plus a + → × icon morph (scaleY the vertical line to 0).
- **Mobile menu:** opacity + 6px translate-down, 0.2s ease.
- **No scroll-linked animation, no parallax, no Lottie.**

### Iconography

See dedicated section below.

### Layout rules

- Max container width: `1120px`, side padding `24px` (16px on mobile).
- "Narrow" container variant at `820px` is used for legal pages.
- Section vertical padding: `80px` desktop / `56px` tablet / `44px` mobile.
- Section labels sit on a 3-line stack: **eyebrow → h2 → sub**, all left-aligned, sub capped at 560px wide.
- Hero is **1.15fr / 0.85fr** two-column on desktop, collapses to one column at 900px.
- Cards laid out in `repeat(3, 1fr)` for features, `repeat(2, 1fr)` for industries, with a 16px gap.
- **Bidirectional layout** is first-class: every margin/padding uses `inset-inline-*` and `margin-inline-*`. The same components ship without modification in RTL.

### Imagery

The site **does not use photography**. The closest thing to imagery is:

- The **logo** (`assets/FSS_Logo.svg`) — copper/tan geometric mark.
- The **partner credential** (`assets/riyada.png`) — Riyada / Oman SME Authority co-brand.
- A **mocked "server card" visualization** in the LocalDeploySection — pure HTML/CSS, no image. Three traffic-light dots, CPU/RAM/NET bars, a lock-icon footer.
- Feather-style **stroked icons** for features (see Iconography).

When new imagery is needed (e.g. a case study photo), keep it **warm, low-saturation, no blue tint**. The brand's color memory is copper-on-ink; cool imagery breaks it instantly.

---

## ICONOGRAPHY

### Approach

The site uses a **single coherent stroked icon set**, hand-extracted into `source/components/FeatureIcon.vue`. They are essentially **Feather Icons** drawn on a 24×24 viewbox with **stroke-width 1.75**, round line caps + joins, `fill: none`.

We've extracted them to a clean SVG sprite at **`assets/icons.svg`** for reuse across mocks. The full list of available glyphs:

`bell · calendar · cart · chart · check · clock · file · globe · layout · mic · phone · play · repeat · server · shield · star`

Plus a handful of inline-only glyphs used as decorative micro-icons (the lock in the server card, the info `i` in the subscription note, the plus → close morph in the FAQ toggle). Those are kept inline in the components where they appear, not in the sprite.

### Usage rules

- **Color:** icons are `currentColor` and always rendered in `var(--brand)` (#b8885a).
- **Container:** feature/why-us cards wrap the icon in a **40 × 40 rounded-10px tile** with `--brand-dim` fill and a `rgba(184,136,90,0.25)` border. The icon itself is 22×22 inside that.
- **Size scale:** 12px (inline meta — lock, info dot), 14px (trust line shield), 16px (FAQ toggle), 22px (feature tile).
- **Never** use Material, FontAwesome, emoji, or solid/duotone icon sets. The visual signature is **stroked-thin, sharp corners, generous viewbox padding**.

### Substitutions

If you need a glyph not in the set, the closest match is the **Lucide** CDN — Lucide is a maintained fork of Feather with the same stroke conventions. Pull from `https://unpkg.com/lucide-static/icons/<name>.svg` and override `stroke-width="1.75"` for consistency.

> **Flag:** if you use a Lucide icon that doesn't appear in `assets/icons.svg`, note it inline (`<!-- substituted from Lucide: bar-chart-2 -->`) so the canonical set can be expanded later.

### Emoji

**Never.** Not in copy, not in icons. The brand explicitly avoids emoji to read as enterprise.

### Unicode characters

A few non-icon unicode marks are used as separators or numerics: `·` (middle dot in price blocks), `©` (footer), `—` (em-dash in body copy). That's the limit.

### Logos

- `assets/FSS_Logo.svg` — primary product mark. Copper/tan on transparent. Renders fine on both ink and white. Used in the header (42px tall) and meta `og:image`.
- `assets/riyada.png` — SMEs Development Authority of Oman (Riyada) partner logo. Cyan + navy on white; **use only on white backgrounds**, or wrap in a white pill.

---

## File index

| Path | What's here |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent-Skill manifest for Claude Code. |
| `colors_and_type.css` | The single token file — drop into any prototype to get the brand. |
| `assets/FSS_Logo.svg` | Primary product logo. |
| `assets/riyada.png` | Riyada (Oman SME Authority) partner logo. |
| `assets/icons.svg` | The 16-glyph stroked icon sprite (Feather-style). |
| `preview/_card.css` | Shared layout for design-system specimen cards. |
| `preview/01-colors-brand.html` | Brand palette: Brand · Soft · Dim · Glow. |
| `preview/02-colors-neutrals.html` | Ink scale (900→600) + Paper / Muted. |
| `preview/03-colors-semantic.html` | Success · Warning · Error state pills. |
| `preview/04-type-display.html` | Display + H1/H2/H3 specimens. |
| `preview/05-type-body.html` | Hero sub · sub · card title · body · label. |
| `preview/06-type-eyebrow-price.html` | Eyebrow · hot badge · tag · 372 display. |
| `preview/07-buttons.html` | Primary · Ghost · Disabled · Lang toggle. |
| `preview/08-form-inputs.html` | Input field — default / focus / error. |
| `preview/09-card.html` | Feature card — default + hover. |
| `preview/10-status-pills.html` | Live · warn · offline · chip · server lights. |
| `preview/11-checklist-steps.html` | Checklist · step numbers · industry tile. |
| `preview/12-spacing-scale.html` | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80. |
| `preview/13-radii.html` | 8 · 10 · 12 · 16 · 999 px. |
| `preview/14-shadows.html` | Flat · scroll header · CTA glow · server glow. |
| `preview/15-logo.html` | FSS logo on three backgrounds. |
| `preview/16-icons.html` | Full 16-glyph icon sprite. |
| `preview/17-riyada.html` | Riyada partner pill spec. |
| `preview/18-fonts.html` | Inter + Cairo variable-font specimens. |
| `fonts/InterVariable.ttf` | Inter variable (Latin) — self-hosted. |
| `fonts/InterVariable-Italic.ttf` | Inter italic variable — self-hosted. |
| `fonts/Cairo-VariableFont_slnt_wght.ttf` | Cairo variable (Arabic) — self-hosted. |
| `ui_kits/website/` | High-fidelity premium AI-SaaS marketing site. See `ui_kits/website/README.md`. |
| `source/` | The imported Vue 3 codebase — read-only reference. |

## UI kits

- **`ui_kits/website/`** — **VoiceGate AI marketing site**. Premium AI-SaaS recreation of the full marketing surface, built in React with the deep-blue + cyan AI brand direction. Tweaks let you flip between the new *Cyan/Blue* palette and the legacy *Copper* FSS palette, plus dark/light mode and EN/AR. See [`ui_kits/website/README.md`](./ui_kits/website/README.md) for component-by-component breakdown.

> The marketing site uses a new visual direction (deep blue + cyan + glass) that departs from the legacy FSS warm-copper look documented above. Both directions ship together as Tweaks so the brand evolution can be evaluated side-by-side.

Only one product surface exists in the upstream repo (the marketing website); there is **no separate dashboard codebase**. The dashboard preview in the marketing site is a static mock. If a real customer-facing cloud dashboard ships later, a second UI kit should be added under `ui_kits/dashboard/`.

---

## Caveats & known gaps

- The **icon set** is hand-extracted from the Vue component; if upstream adds more glyphs, `assets/icons.svg` should be regenerated.
- There is **no dashboard product** in scope yet — the cloud dashboard is *described* on the marketing site but no UI exists in the repo. Designs for it should be created fresh using the tokens here.
- The **`FutureSmartSubpport`** repo (with the misspelling) is an older static-HTML prototype — superseded by the Vue site. Listed for historical context only.
