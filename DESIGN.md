# ULURA — DESIGN system

Identity-preserving: colors and wordmark derive from ULURA's real cups &
drinks. Strategy = **Drenched** (green carries the brand), coral as the single
accent. Deliberately avoids the "beige coffee shop" and editorial-serif defaults.

## Color (OKLCH — see `assets/css/styles.css` `:root`)
| Role | Token | Notes |
|---|---|---|
| Brand green ramp | `--green-50 … --green-950` | Olive/forest, from the cups. `--green-700` primary, `--green-800/900` drench. |
| Accent | `--coral` / `--coral-cta` | Strawberry-coral from the drinks. `--coral-cta` is the button bg (white text passes AA). |
| Warm neutral | `--cream`, `--sand` | Secondary surfaces / logo cream. |
| Body | `--paper` | Near-white, a whisper of green (low chroma). |
| Text | `--ink`, `--ink-soft` | Primary + secondary; both ≥4.5:1 on light. |

All foreground/background pairs target **WCAG AA (≥4.5:1 body, ≥3:1 large)**.

## Type
- **Display:** Bricolage Grotesque (characterful grotesque; matches the wordmark).
- **Body/UI:** Hanken Grotesk (clean, warm-neutral). Paired on a contrast axis.
- **Arabic:** IBM Plex Sans Arabic (scoped to Arabic menu terms via `.ar`).
- Fluid `clamp()` scale `--fs-100 … --fs-800` (display ceiling ~96px).
- Loaded via Google Fonts `<link>` in each page `<head>`.

## Logo
Wordmark is rendered as styled text (`.wordmark`, display font, tracked) so it
stays crisp and themeable. `assets/img/ulura-mark.svg` is a cup-shaped monogram
for the favicon / compact placements. **Both are recreations from the photos —
swap in the official vector when available.**

## Motion (`assets/js/main.js`, `menu.js`)
- GSAP (hero entrance timeline + parallax) + Lenis (smooth scroll), vendored in
  `assets/js/vendor/` (no CDN dependency).
- Scroll reveals use **IntersectionObserver**, not GSAP-gated visibility:
  content is visible by default (hidden only under `html.js`), with a failsafe
  so a section can never ship blank. Full `prefers-reduced-motion` fallback.
- Easing: expo/quart ease-out. Durations 180–600ms.

## Layout
- Tokens `--sp-1…8` (fluid), `--container` 1200px, radii `--radius*`.
- Sections drench-alternate: green hero → cream proof → paper story → green-50
  signatures → deep-green brew → coral menu-CTA → paper visit.
- Decorative `.blob` shapes live inside `overflow:hidden` sections.

## Verified
No horizontal overflow at 375/768/1440; reveals fire on scroll (0 stuck
hidden); reduced-motion shows everything; no console errors. See the QA notes
in the repo history.
