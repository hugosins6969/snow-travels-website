# Snow Travels — Design System

> *"Tromsø's most passionate aurora guides. We chase the northern lights — all the way to Finland if that's what it takes."*

Snow Travels is a small, founder-led (Hassan + Marius) **northern-lights tour operator** based in Tromsø, Norway. Their brand-new marketing website (this system) is bilingual (English / 中文 zh) and sells two signature tours plus a handful of partner day-tours; bookings run through Stripe direct, GetYourGuide, Viator, and RedNote (小红书). Booking infra uses **Bokun** under the hood.

The brand runs entirely on the visual language of a Norwegian polar night: a near-black green background, the aurora-green of the lights themselves as the single accent, an editorial serif headline (italicized like a whisper: *northern lights*) over a quiet sans, and full-bleed long-exposure photography of the aurora. No gradients. No filler. One accent color. One hero photograph per page.

---

## Sources

- **Codebase** (imported from https://github.com/hugosins6969/snow-travels-website, branch `main`): archived in `_source/`
  - `_source/index.html` — home page
  - `_source/tours.html` — tour listing with tabs (Minibus / Bus / Day tours)
  - `_source/booking.html` — Bokun-style calendar + booking panel
  - `_source/shared.css` — 931 lines; single source of truth for tokens
  - `_source/script.js` — nav scroll state, mobile menu, EN/中文 toggle, FAQ accordion

No Figma, no brand book, no logo files were provided. The snowflake wordmark (`❄ Snow Travels`) is set entirely in type and lives in CSS. Aurora photography is referenced (`images/aurora-couple-green.jpg`, etc.) but **not present in the repo** — see Caveats.

---

## Products covered

Snow Travels has **one product surface**: the marketing + direct-booking website (4 pages — Home, Tours, Booking, FAQ). The `ui_kits/website/` folder recreates it.

---

## CONTENT FUNDAMENTALS

**Voice.** First-person plural, committed, slightly defiant. *"We don't stop until you've seen the lights — even if that means driving to Finland."* "We don't just show the lights. We hunt them." The copy is written by guides who genuinely care and leans on three levers: **evidence** (97.54%, 1,780+, 3 seasons, #1 on GYG), **unlimited effort** (5–9h no time cap, rebooking if you don't see them, driving across the Finnish border), and **warmth** (bonfire, hotdogs, thermal suits, "every single person has seen"). Never salesy — closer to the language of a mountain guide than a travel marketer.

**Person.** Heavily **"we" / "us" / "our"**, addressing the reader as **"you"**. Guides are named in proof points and reviews: Hassan, Marius, Kamil. The brand is plural and human, not corporate.

**Casing.** Sentence case for everything except eyebrow labels, meta keys, and section "kickers", which are ALL-CAPS with tracked letter-spacing (~2.5px). Proper nouns keep their case (Tromsø, GetYourGuide, RedNote). Numbers are never written out: "1,780+", "97.54%", "5–9 hrs", "2,400 kr".

**Punctuation.** Em-dashes as rhythm ("— even if that means driving to Finland"). Middle dots (·) as separators in meta lines ("Minibus · Max 15 guests · 5–9 hrs"). Norwegian kroner written `2,400 kr` lowercase after the number. Arrow glyphs (`→`, `↓`, `▾`) on every CTA and dropdown — never `>` or ">>".

**Emphasis in type.** The serif headline bolds ONE word per phrase (usually the noun: "Choose your **experience**", "We **hunt** them"). On the hero only, an italicized `<em>` in the aurora-soft green picks out the phrase "*northern lights*". That's the entire emphasis system.

**Bilingual.** Every visible string is tagged `data-en` / `data-zh` and swapped at runtime by the 中文 button in the nav. When designing new copy, ship both.

**Emoji.** Yes, emoji are part of the brand — but narrowly scoped:
- `❄` in the wordmark (every `❄ Snow Travels` instance)
- Navigation dropdown icons: `🌌 ☀️ 🐋 🦌` (one per tour category)
- Flag emoji in review attributions: `🇦🇺 🇮🇳 🇩🇪 🇬🇧 🇨🇳`
- `🔥 Bestseller` badge on hot tours
- `★★★★★` for ratings (unicode, not emoji)

No emoji in headlines. No emoji as decoration. No emoji-cards.

**Specific vibe examples** (verbatim from the site):
- Hero eyebrow: "Tromsø, Norway · #1 on GetYourGuide"
- H1: "Chase the · *northern lights* · **with us**"
- CTA: "Book your tour →"
- Why-card: "We don't just show the lights. We **hunt** them."
- CTA closer: "The aurora is waiting. **Are you?**"
- Booking: "Book direct — best price" / "Choose a date & **tour**"

---

## VISUAL FOUNDATIONS

**Overall vibe.** Editorial travel magazine meets polar night. Every screen is 90% dark green-black with a single photograph or a single aurora-green accent breaking the silence. Space is the primary material.

**Color.** One accent (`--aurora` `#4ade80`), one background (`--bg` `#060c08`) with two adjacent raised surfaces (`#080f09`, `#040a05`). White text uses a fixed opacity ladder — `0.85 / 0.70 / 0.55 / 0.40 / 0.25 / 0.18` — instead of grey-scale tones. The aurora-green appears only on: primary buttons, the snowflake in the wordmark, section-label eyebrows, bullet dots, link underlines, the italic word "northern lights", `::before` decorative lines, and hover/focus outlines. **Never as a background fill larger than a button.**

**Typography.** Cormorant Garamond (display) paired with Inter (body). The serif is used light (300) at huge size with a semibold (600) spot-bold inside it for emphasis — "Choose your **experience**" — and italic for soft emphasis. Inter is used small (11–15px) with wide tracking on uppercase labels and normal tracking elsewhere. Negative letter-spacing (-0.5 to -1px) on big serifs; positive tracking (2–2.5px) on small uppercase labels. Never mix: serif for display, Inter for UI/body, no exceptions.

**Backgrounds.** Full-bleed aurora photography on every hero (home, tours, booking). Interior heroes use the photo at 35% opacity darkened by a top-to-bottom gradient from `rgba(6,12,8,0.6)` → `rgba(6,12,8,0.95)`. The home hero uses a left-to-right protection gradient from `0.72 → 0.15` so copy is readable on the left while the aurora breathes on the right. The CTA section dims its photo to `brightness(0.35)`. No patterns, no hand-drawn illustrations, no abstract gradients, no textures. The night sky is the texture.

**Animation.** Gentle, fast, functional. A 1.2s fade-up on hero load (`translateY(20px)` → `0`). `transform: scale(1.04)` over 0.7s on hover for tour-block and gallery images. 0.2s `transition: all` on buttons and links; the primary button lifts `-2px` on hover. Dropdown menu fades+translates 8px over 0.2s. The nav background transitions over 0.4s from transparent to `rgba(6,12,8,0.96)` with `backdrop-filter: blur(12px)` once the user scrolls past 40px. No bounces, no spring physics, no scroll-linked animations beyond that.

**Hover states.**
- Text links: opacity lifts from `0.70 → 1.0` (white)
- Nav links: add a 6% white background wash
- Primary button: darker green (`#22c55e`) + `translateY(-2px)`
- Outline / ghost buttons: border color shifts to aurora-green, text matches
- Image tiles: `scale(1.04)` + `brightness(0.9 → 1.05)`
- Dropdown items: 7% white background wash

**Press states.** No explicit scale-down. The `translateY(-1px)` lift on book buttons and the darker-green color shift double as press feedback.

**Borders.** Nearly all borders are `0.5px solid rgba(255,255,255,0.08–0.12)` — hairline, never 1px. Only the accent bottom on FAQ group titles uses a full `1px` border in `rgba(74,222,128,0.4)`. Card borders use `0.5px` at 8–10% white; separators use `0.5px` at 6%.

**Shadows.** Reserved for floating UI over photography. Three defined: `0 24px 64px rgba(0,0,0,0.7)` on dropdowns, `0 12px 40px rgba(0,0,0,0.5)` on the chat widget, `0 4px 20px rgba(0,0,0,0.3)` on the chat toggle button. Cards **do not** have shadows — they have hairline borders and a slightly raised background tone.

**Protection & chrome.** Fixed top nav (72px) sits transparent over the hero, then turns into a blurred dark capsule (`rgba(6,12,8,0.96)` + `backdrop-filter: blur(12px)`) on scroll — no solid bar. Gradient "protection" regions appear on every hero (bottom-fade to solid `--bg`, horizontal protection on the home hero). Trust strips sit between sections as 10px-tall hairlines. The chat widget is a rounded pill in the bottom-right.

**Layout rules.** `max-width: 1200px` inner container; `96px` vertical section padding (home); `80px` on interior pages. Horizontal padding steps down: `80px` desktop → `48px` → `32px` → `24px` → `20px` at the smallest breakpoints (1000px, 760px). Grids: the "why" strip and card grids use a `1px` white-6% background beneath cells, so cell backgrounds appear to be separated by hairlines instead of borders.

**Transparency & blur.** Used sparingly and only for (a) the nav when scrolled (dark translucent + 12px blur), (b) the dropdown menu (20px blur), (c) ghost buttons over photos (`rgba(255,255,255,0.12)` + 4px backdrop-blur). Body text is never blurred.

**Imagery vibe.** Long-exposure aurora photography: greens, purples, deep blues, high contrast, slight grain, the aurora always reading as "painted across the sky". Subjects are small silhouettes under huge sky. Never warm, never sunny, never staged. In the UI, photos are always slightly dimmed (`filter: brightness(0.9)` on gallery items, `0.35` on the CTA bg) so text reads cleanly.

**Corner radii.** Four sizes in use: `6–7px` (small inline buttons, pills-not-pills like `.nav-link`, `.btn-book-nav`), `8px` (primary button, `.bk-date-row`), `10–12px` (cards, calendar, dropdown), `30px` (full pill for tab buttons and chat toggle). Never `16px+` except the full pill. Images are **square-edged** (`border-radius: 2px` or 0) — photography does not round.

**Cards.** `background: #080f09` + `0.5px solid rgba(255,255,255,0.08)` + `border-radius: 10–12px` + no shadow. Padding `24–36px`. On hover: `translateY(-4px)` and border color → `rgba(74,222,128,0.3)`. Grid layouts use the 1-pixel-hairline-gap trick (a parent with `background: rgba(255,255,255,0.06)` and `gap: 1px`) instead of borders on each child.

---

## ICONOGRAPHY

Snow Travels uses **four icon systems in parallel**, each with a narrowly scoped job:

1. **Emoji as navigation iconography.** The tour dropdown menu uses `🌌 ☀️ 🐋 🦌` in `36×36` rounded squares (`background: rgba(255,255,255,0.06)`, `border-radius: 8px`, `font-size: 18px`). The bilingual nav dropdown has one emoji per tour category and that's its entire icon set. Apple/native system emoji rendering is assumed — no Twemoji or custom SVG sprites.
2. **Unicode glyphs for UI affordances.** Arrow characters carry all the CTAs: `→` on forward buttons, `↓` on "explore" links, `▾` on dropdown triggers, `‹ ›` on calendar navigation (HTML entities `&#8249;` / `&#8250;`), `+` / `−` (`&#8722;`) on quantity steppers, `❄` in the wordmark, `·` as separator, `★` for review ratings, `☰` for the hamburger. No SVG icons for any of these.
3. **Inline SVG for third-party brand logos only.** Trust badges (GetYourGuide orange+white wordmark, multicolor Google wordmark, Tripadvisor owl-and-wordmark) are hand-built as inline SVG `<text>` elements matching each brand's actual mark. See `_source/index.html` lines 85–120 and `assets/trust-badges.svg.html`.
4. **Flag emoji** attached to review attributions (`🇦🇺 · GetYourGuide`). Never as standalone decoration.

No icon font is loaded (no Font Awesome, no Feather, no Lucide). No PNG icons. No generic UI icon system. If the system ever needs a generic icon (e.g. "clock", "pin"), **substitute Lucide via CDN** (stroke-width 1.5, rounded) — flagged as a substitution until Snow Travels designates a real set.

The single brand mark is the snowflake `❄` rendered in the `--aurora` green as part of the Cormorant wordmark. There is no separate logomark.

---

## Index — what's in this folder

### Foundations (root)
- `README.md` — this file
- `colors_and_type.css` — CSS custom properties + semantic type classes
- `SKILL.md` — the skill definition for Claude / Claude Code
- `fonts/` — (none — Google Fonts CDN only)

### Assets
- `assets/snow-travels-logo.svg` — type-only wordmark
- `assets/aurora-*.svg` — placeholder aurora hero stand-ins (until real photos arrive — see Caveats)
- `assets/trust-badges.svg.html` — extracted inline SVG for GetYourGuide / Google / Tripadvisor badges

### Preview cards (for the Design System tab)
- `preview/*.html` — small specimen cards, one concept each

### UI kit — the website
- `ui_kits/website/index.html` — clickable prototype (home → tours → booking)
- `ui_kits/website/README.md` — how it's organized
- `ui_kits/website/*.jsx` — factored React components

### Archived source
- `_source/` — the 5 imported files from the Snow Travels repo

---

## Caveats

1. **Aurora photography** — real long-exposure shots are now wired into `assets/` and `ui_kits/website/images/` (filenames: `aurora-couple-green.jpg`, `aurora-couple-purple.jpg`, `aurora-corona.jpg`, `aurora-purple.jpg`).
2. **No separate logo file.** The wordmark is type + a `❄` glyph, all CSS. I've saved a clean `assets/snow-travels-logo.svg` that recreates it as SVG for use in exports, but there's no icon-only mark to fall back to when the wordmark is too wide.
3. **Fonts are CDN-only.** Google Fonts for Cormorant Garamond and Inter — no `.woff2` files committed. If this system is used offline, download and self-host.
4. **Generic icon coverage is thin** — only emoji + arrow glyphs are "officially" in the system. If the product needs e.g. clock/pin/calendar icons beyond what's here, Lucide (CDN) is my recommended substitute. Flagged for owner review.
