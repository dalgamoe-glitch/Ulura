# ULURA Coffee House — Website

A high-conversion, animated marketing site for **ULURA Coffee House** — Petra
St., Irbid, Jordan. Organic green-drench identity, motion graphics, and a
custom-built menu page. Static HTML/CSS/JS — no build step.

```
index.html          Landing page
menu.html           Full custom menu
assets/
  css/styles.css    Design system (tokens) + landing styles
  css/menu.css      Menu-page styles
  js/main.js        Landing motion (GSAP + Lenis, IntersectionObserver reveals)
  js/menu.js        Menu render + sticky scroll-spy + reveals
  js/menu-data.js   ← EDIT THIS to change menu items / prices
  js/vendor/        GSAP, ScrollTrigger, Lenis (vendored — no CDN needed)
  img/              Photos, favicon/monogram
PRODUCT.md DESIGN.md  Brand + design source of truth
```

## Run locally
Any static server works — no build:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content
- **Menu items / prices:** edit `assets/js/menu-data.js` (one structured list;
  supports `price`, `sizes` M/L, and `options` for mixes/breads). The menu page
  re-renders automatically.
- **Business details** (phone, hours, Instagram, map link) live directly in
  `index.html` / `menu.html`. Search for `770120013`, `ulura.jo`, and
  `Petra%20St` to update every reference.

## Deploy
Drag-and-drop or connect the repo to any static host:
- **Vercel / Netlify:** no build command; publish directory = repo root.
- **GitHub Pages:** serve from the branch root.

## Before you go live — asset swaps
1. **Logo:** the wordmark is CSS text and `assets/img/ulura-mark.svg` is a
   recreated monogram. Drop in ULURA's **official logo vector** for perfect
   fidelity.
2. **Photos:** the 5 supplied images are ~165×220 thumbnails, so they're used
   in small framed compositions. Replace the files in `assets/img/` with
   **high-resolution originals** (same filenames) for crisper hero/cards.

## Accessibility & performance
Semantic headings, alt text, visible focus rings, ≥44px touch targets,
`prefers-reduced-motion` support, lazy-loaded below-fold images with declared
dimensions, and AA-target contrast throughout. Verified: no horizontal scroll
at 375/768/1440 and no console errors.
