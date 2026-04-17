# UI Kit — Snow Travels Website

A clickable prototype of the full 3-page marketing website (**Home → Tours → Booking**). This is the canonical, living implementation of the design system: every pattern in `preview/` appears here in real context.

## Structure

```
ui_kits/website/
├── index.html        Home page — hero, tours row, why-strip, gallery, reviews, CTA
├── tours.html        Tours listing with Minibus / Bus / Day tours tabs
├── booking.html      Bokun-style calendar + booking panel
├── shared.css        Single source of truth for tokens (931 lines)
├── script.js         Nav scroll state · mobile menu · EN/中文 toggle · FAQ accordion
└── images/           Aurora photo placeholders (replace with real photography)
    ├── aurora-couple-green.jpg
    ├── aurora-couple-purple.jpg
    ├── aurora-corona.jpg
    └── aurora-purple.jpg
```

## How to browse

Open `index.html`. The top nav wires through to `tours.html` and `booking.html`; click `中文` to toggle the whole site to Chinese; hover "Tours ▾" to see the dropdown menu with emoji category icons.

## Notes on the implementation

- `shared.css` is intentionally left verbatim from the Snow Travels repo — it's the system. Don't re-organize it; token values are referenced in a few places in prose.
- The images in `images/` are real long-exposure aurora photography supplied by Snow Travels.
- Third-party brand marks (GetYourGuide, Google, Tripadvisor) are rebuilt as inline SVG inside the page — no external logo files.
- The hamburger / mobile menu works below 760px.
- Booking calendar is driven by a small in-file JS date model; dates are color-coded by availability (`avail` / `few` / `full`) and clicking a day selects it.
