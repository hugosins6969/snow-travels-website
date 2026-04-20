# SKILL — Snow Travels

You are designing for **Snow Travels**, a founder-led northern-lights tour operator based in Tromsø, Norway. Hassan + Marius take guests into the Arctic (and into Finland if the clouds demand it) to hunt aurora. The brand is committed, warm, slightly defiant, and runs on the visual language of a Norwegian polar night: near-black green, a single aurora-green accent, Cormorant Garamond over Inter, and full-bleed long-exposure aurora photography.

This skill is for any designer (human or Claude) making new pages, promo pieces, emails, decks, or product variations for Snow Travels.

---

## Do this first

1. **Read `README.md`** in the system root — it's the source of truth for voice, visual fundamentals, iconography, and caveats. Don't skim it.
2. **Copy `colors_and_type.css`** into your file tree and link it, or copy its `:root` block directly. All tokens you need live there: color, type, spacing, radii, elevation, motion.
3. **Cross-reference `ui_kits/website/shared.css`** (931 lines) for the real implementation of every pattern — buttons, nav, cards, calendar, trust strip, footer. It's both the system and the kit.
4. **Open `ui_kits/website/index.html`** in a browser. Study how sections rhythm (photo hero → trust strip → tours row → why-strip → gallery → reviews → CTA → footer). New pages should feel like they belong in this rhythm.
5. **Look at every card in `preview/`** (the Design System tab) before designing a new component. If a pattern exists, use it.

## Core commitments (non-negotiable)

- **One accent color.** `--aurora #4ade80` is the only chromatic color in the system. Never introduce a second accent. Never fill a background with it beyond a button-sized surface.
- **Dark-only.** Page background is `#060c08`. Cards are `#080f09`. Footer is `#040a05`. No light mode. No pale-toned surfaces.
- **Hairlines, not borders.** Borders are `0.5px` in `rgba(255,255,255,0.06–0.12)`. Never `1px 2px` etc. unless you have an exceptional reason (the only one in the system is the FAQ group underline).
- **Typography is a pair.** Cormorant Garamond for display (300 with spot-bold 600, sometimes italic); Inter for everything else. Don't swap, don't add a third face.
- **Negative tracking on big serifs, positive tracking on small labels.** `-1px` at hero, `-0.5px` at H2, `+2.5px` on the all-caps eyebrow. Memorize.
- **Photography is the hero.** Full-bleed, long-exposure aurora shots. Always slightly dimmed (`brightness(0.9)` in galleries, `0.35` on CTA backgrounds). Never warm / sunny / staged. Never decorative illustration.
- **No gradients as decoration.** The only gradients in the system are black protection fades over photography. No rainbow, no glow, no glassmorphism.
- **No AI slop.** No emoji-decorated cards, no "glass cards with left-border accent", no rounded-everything, no generic Lucide icons scattered through the UI. See the **Visual Foundations** section of README.md for the full list of things to avoid.

## Voice & copy

- First-person plural. "We" do the work, "you" see the lights.
- Specific evidence over adjectives: `97.54%`, `1,780+`, `5–9 hrs`, `3 seasons`, `#1 on GetYourGuide`, `2,400 kr`.
- Em-dashes for rhythm. Middle dot (`·`) as separator. Arrow glyphs (`→ ↓ ▾ ‹ ›`) on every CTA.
- Emphasize one word per line in serif headlines, using `<strong>` (semibold) or `<em>` (italic soft-green on the hero only).
- **Always ship English + 中文** for visible strings. Use `data-en` / `data-zh` attributes and the existing toggle in `script.js`.

## Iconography

Four systems, each narrowly scoped — see README.md for the full policy.
- **Emoji** for nav category icons (`🌌 ☀️ 🐋 🦌 🐕`) and review flags (`🇦🇺 🇮🇳 🇩🇪 🇬🇧 🇨🇳`).
- **Unicode glyphs** for every UI arrow and glyph (`→ ↓ ▾ ‹ › + − ★ ❄ · ☰`).
- **Inline SVG** for third-party brand marks (GetYourGuide, Google, Tripadvisor) — never bitmap logos.
- **Lucide CDN (stroke 1.5, rounded)** is the allowed fallback if you need a generic icon the system doesn't have — flag as a substitution until reviewed.

Never use an icon font, never use Font Awesome, never use Feather.

## Spacing & layout

- `max-width: 1200px` container.
- Sections: `96px` vertical padding on home, `80px` on interior pages, `48–80px` horizontal (steps down at 1000/760 breakpoints).
- Use the `1px hairline-gap` grid trick for cards (parent `background: rgba(255,255,255,0.06)` + `gap: 1px` + child `background: #080f09`). The why-strip and reviews grid both do this.
- Card radius `10–12px`. Button radius `7–8px`. Pills `30px`. Photos `0` or `2px` — photography does not round.

## Motion

- `0.2s` transitions on everything UI.
- `0.4s` on the nav scroll-to-solid state.
- `0.7s` `scale(1.04)` on image hover.
- `1.2s` `translateY(20px)` fade-up on hero load.
- Primary button lifts `-2px` on hover. That's the press feedback.
- No bounce, no spring physics, no scroll-linked animations beyond nav.

## What to do when you get stuck

- **Need a new component?** Mock it using existing tokens + patterns and flag it for the owners. Don't invent new colors, radii, or shadows.
- **Need a new icon beyond what's in the system?** Use Lucide (stroke 1.5) as a substitute and flag it.
- **Need imagery and the placeholders look too synthetic?** They are synthetic — ask the owners for real aurora JPEGs.
- **Designing a deck or print piece?** Keep the same color, type, and photo rules. Use 1920×1080 at `var(--bg)` background, and scale text generously (never < 24px for slide body).

## Caveats to remember

1. Aurora hero photography in this system is **placeholders** — replace before shipping.
2. No separate logomark exists; only the wordmark + `❄`. If you need an icon-size mark, use just `❄` in `--aurora` set in Cormorant 600.
3. Fonts are **Google Fonts CDN only** — no self-hosted files.
4. The system covers exactly one product surface: the marketing website. Expansion beyond that (app, email templates, print) should be reviewed with the owners.
