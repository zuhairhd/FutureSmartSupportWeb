# UI Kit — Marketing Website

A premium AI-SaaS marketing site for **VoiceGate AI**, by Future Smart Support. Deep navy + cyan AI palette with glassmorphism, live call mockup, AI pipeline diagram, security pillars, and a recommended-deployment comparison.

## Files

- `index.html` — entry point. Loads React + Babel + all JSX.
- `styles.css` — full stylesheet (tokens, layout, components, animations, v2 premium additions).
- `i18n.js` — bilingual content (English + Arabic) for every section.
- `icons.jsx` — inline React icon set (Feather-style, stroke 1.75).
- `sections.jsx` — all section components.
- `app.jsx` — main App that wires sections + Tweaks + lang/theme state.
- `tweaks-panel.jsx` — Tweaks control library.

## Sections (top → bottom)

1. **Hero** — Bold "Your AI receptionist that never sleeps" headline with cyan gradient, plus a **Live Call card** on the right showing an Arabic conversation between caller and AI with animated waveform and listening indicator.
2. **Logo strip** — Trusted-by row.
3. **Features** — 4×2 feature grid with brand-tile icons.
4. **Conversation Preview** — Standalone "Watch Live Demo" section with the live-call card centered.
5. **AI Pipeline** — 5-node "Speech→Text · Language ID · Intent+Slots · Workflow · Text→Speech" diagram with glowing icon tiles and connecting lines.
6. **How it Works** — 5-step horizontal track.
7. **Industries** — 3×2 industry grid.
8. **Why Us** — 6 advantages + 4-stat KPI grid.
9. **Cloud Dashboard preview** — Browser-chromed dashboard mock with sidebar, KPIs, line chart, recent-calls list.
10. **Deployment comparison** — Two cards (On-Premise + Cloud "Recommended" vs Cloud-Only) showing pros & cons.
11. **Integrations** — 6×2 grid of integration logos (HubSpot / Salesforce / Zoho / Pipedrive / Google Cal / Outlook / Slack / Twilio / Webhook / Zapier / WhatsApp / Telegram).
12. **Security & Privacy** — 4 enterprise pillars (On-premise audio · TLS 1.3 + AES-256 · Role-based access · Data residency) with mono tag badges.
13. **Pricing** — 3 tiers; 372 OMR Business tier is featured with gradient border + ribbon.
14. **Testimonials** — 4-metric KPI strip + 3 quote cards each with a green ROI badge.
15. **FAQ** — Accordion with cyan plus → close icon morph.
16. **Contact** — WhatsApp / Phone / Email channels (real WhatsApp: +968 9277 1730) + multi-field form with success state.
17. **Footer** — 4-column with social, Riyada partner pill, legal links.

Plus: **floating WhatsApp CTA** (always visible, links to `wa.me/96892771730`), **sticky glass header**, and a **mobile sticky CTA** that appears under 720px wide.

## Tweaks

- **Brand palette:** Cyan/Blue (default, AI-SaaS look) ↔ Copper (legacy FSS warm aesthetic for comparison).
- **Theme:** Dark ↔ Light.
- **Language:** English (LTR) ↔ Arabic (RTL).

All three settings persist to localStorage and to the `EDITMODE` block on disk.

## Design system

The site uses the exact palette specified by the brand brief:

- **Primary navy:** `#0B1220` (page bg)
- **Secondary navy:** `#111827` (elevations)
- **Accent cyan:** `#22D3EE`
- **Glow blue:** `#38BDF8`
- **Indigo violet:** `#818CF8` (gradient terminator)
- **White:** `#F9FAFB`
- **Muted gray:** `#94A3B8`

The AI gradient `linear-gradient(135deg, #22D3EE, #38BDF8, #818CF8)` is used sparingly: the headline accent, primary CTA fill, pricing ribbon, KPI metric text, deployment-card border, security-pillar tile haze. Copper (`#B8885A`) is available as a Tweak but is **not** used in the default brand.

Typography is **Inter** (variable, self-hosted from `fonts/InterVariable.ttf` + italic) for Latin, and **Cairo** (variable, self-hosted from `fonts/Cairo-VariableFont_slnt_wght.ttf`) for Arabic. Both are pulled in via `@font-face` at the top of `styles.css`. The only remaining Google Fonts call is for **JetBrains Mono** (used in numerics, codes, and badge tags) which has not been uploaded.

Animations: subtle reveal-on-scroll fades (300–700ms ease-out), a pulsing cyan "live" dot, a typing-dot indicator, a CSS-driven waveform, and per-card hover lifts. No bouncing, no parallax, no Lottie.

## Caveats

- Testimonial quotes are written in-brand but are **placeholders**.
- The 6 "trusted by" company names + 12 integration logo tiles are placeholder names — replace with real customer / partner brands when available.
- Starter and Enterprise pricing tiers are illustrative — the only documented offer in the upstream repo is the 372 OMR Business tier.
- The cloud dashboard preview is a static mock (no real product dashboard exists yet).

## Loading from the file system

`index.html` references its sibling files with relative paths. Open it directly in a browser or serve the parent folder — no build step needed.

