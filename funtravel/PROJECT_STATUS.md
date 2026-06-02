# Fun Travel — Project Status

> **Single source of truth for all agents and developers.**
> Read this file before making any changes. Update it before ending any session.

---

## Project Summary

Fun Travel is a static multi-page e-commerce website for Elena's handmade jewelry and travel pillows. No framework, no build tool. Pure HTML/CSS/JS. Deployed via Netlify from the `homoohno-coder/mymacguy` GitHub repository. Product images live in a separate repo (`homoohno-coder/funtravel`) and are accessed via raw GitHub URLs.

- **Owner:** Elena (seller)
- **Email:** picswelove2024@gmail.com
- **Payment:** PayPal (order panel → mailto + PayPal redirect)
- **Ships:** USA only
- **Tax:** 10.25% CA sales tax (Palm Springs)
- **Shipping:** $3.50 flat rate on all orders

---

## Current Completion: 95%

---

## Deployment Status

| Environment | URL | Status |
|---|---|---|
| Deploy Preview | https://deploy-preview-7--mymacguy.netlify.app | ✅ Live |
| Production | (pending PR merge) | ⏳ Not merged |

**Active Branch:** `claude/ecommerce-page-setup-Kdk1P`
**Open PR:** homoohno-coder/mymacguy#7 (draft)
**Latest Commit:** `44b5e43`

---

## Completed Features

### Site Architecture
- [x] Multi-page static site: `index.html`, `shop.html`, `product.html`, `about.html`, `contact.html`
- [x] Shared product data: `funtravel/data/products.js` → `window.FT.PRODUCTS`
- [x] Shared styles: `funtravel/css/style.css`
- [x] Shared JS: `funtravel/js/app.js`

### Pages
- [x] **index.html** — Hero, marquee, best sellers, about snippet, footer
- [x] **shop.html** — Full catalog with filter tabs (All / Jewelry / Pillows)
- [x] **product.html** — Dynamic product detail via `?id=` URL param
- [x] **about.html** — Elena's story, philosophy, stats, CTA
- [x] **contact.html** — Contact form (mailto), shipping info, returns policy, FAQ

### Product Catalog (11 products — all verified against PDF price list)
- [x] Products 1–5: Full jewelry sets — Neck $29 / Brac $16 / Ear $15 / Full Set $60
- [x] Products 6–7: Glass bead chokers — 15–16 in. $16 / 17–21 in. $19 (single necklace only)
- [x] Product 8: Glass seed beads any color — up to 18 in. $15
- [x] Product 9: Glass seed bead mix 4mm — 15–17 in. $17 / 18–21 in. $19.50
- [x] Products 10–11: Travel pillows — $24 each, 5 colors, $3.50 shipping
- [x] All images: raw GitHub URLs to `homoohno-coder/funtravel/main/images/`
- [x] Boutique-quality descriptions on all 11 products

### Order Flow
- [x] Order panel with item checkboxes, contact form, order summary
- [x] CA sales tax 10.25% applied to subtotal
- [x] $3.50 flat shipping on all orders
- [x] PayPal redirect + mailto fallback (`sendOrder()`)
- [x] Set products: Full Set pre-checked in order panel; individual items selectable

### UI/UX
- [x] Lightbox gallery (keyboard nav, swipe, thumbnail strip)
- [x] Pillow color radio picker with swatch preview
- [x] Filter tabs on shop page (JS, no reload)
- [x] Related products on product detail page
- [x] Full gallery overlay from home page
- [x] Animated canvas backgrounds (order panel, lightbox)
- [x] Responsive layout (900px, 560px breakpoints)
- [x] Active nav link highlighting
- [x] Open Graph meta tags on all 5 pages
- [x] Product detail OG tags update dynamically from product data
- [x] Shop page subsection split: Jewelry Sets (1–5) / Single Necklaces & Chokers (6–9) / Travel Pillows (10–11)
- [x] Equal-height product cards within each subsection (`min-height` on `.product-desc`)
- [x] **Product Detail Modal** — full ecommerce experience on image click: gallery + zoom, variant picker, qty, Add to Cart, Buy Now, reviews, related products, trust row, accordions

### Ecommerce / Checkout
- [x] Shopping cart — sessionStorage (`FTCart`), cart badge in nav, cart.html
- [x] Stripe Checkout — server-side session via Netlify Function; secret key server-only
- [x] Order storage — Netlify Blobs; orders pre-created before Stripe, updated after payment
- [x] Order tracking — 5-step status, `order-lookup.html`, email-based lookup
- [x] Success page — `success.html` confirms payment, shows order summary
- [x] Clean URL redirect — `/product/:id` → `/funtravel/product.html?id=:id`

### Image Display
- [x] All product images: `object-fit: contain` — full jewelry visible, no cropping
- [x] Shop cards: 320px desktop / 280px tablet / 260px mobile
- [x] Product detail gallery: aspect-ratio 4/5, contain
- [x] Gallery thumbnails, related products, bestseller cards: all contain

---

## Features In Progress

None.

---

## Remaining Features

### Priority 1 — Blocking / Business Critical
- [ ] **PayPal URLs** — Elena must provide her PayPal.me links; set `paypalUrl` in `products.js` to enable direct checkout
- [ ] **Product images in mymacguy repo** — Images load from `homoohno-coder/funtravel` via raw GitHub URL; if that repo changes or is private, all images break. Copy images to `funtravel/images/` as a fallback.

### Priority 2 — Important
- [ ] **Favicon** — No favicon yet; add `favicon.ico` or SVG (FT monogram or ✦)
- [ ] **Product description on `<meta name="description">`** — Verify it updates dynamically on product.html
- [ ] **404 page** — Add `404.html` for Netlify broken-link handling
- [ ] **Seasonal pricing** — Multi-Color Chokers $42 in Sept/Oct; consider date-based auto-switch

### Priority 3 — Nice to Have
- [ ] **Gallery standalone page** — `gallery.html` (currently overlay-only)
- [ ] **Order confirmation state** — Visual confirmation in order panel after `sendOrder()`
- [ ] **Sold-out state** — `available: false` flag exists; wire to "Sold Out" badge
- [ ] **Sitemap** — `sitemap.xml` for SEO
- [ ] **Analytics** — Plausible or Fathom if Elena wants visitor data

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| Images load from external repo (homoohno-coder/funtravel) — breaks if that repo goes private | Medium | Open |
| PR #7 is a draft — not yet merged to main | Low | Open |
| index.html bestseller card hardcodes Earth & Fire price — should come from products.js | Low | Open |

---

## Product Data Reference

| # | Product | Type | Set Price | Piece Prices |
|---|---|---|---|---|
| 1 | Kelly Green & Black African Tube Set | Set | $60 | Neck $29 · Brac $16 · Ear $15 |
| 2 | Earth & Fire Bead Set | Set | $60 | Neck $29 · Brac $16 · Ear $15 |
| 3 | Fuchsia & Black Beads with African Tube Beads | Set | $60 | Neck $29 · Brac $16 · Ear $15 |
| 4 | Kelly Green Glass & Orange Synthetic Beads | Set | $60 | Neck $29 · Brac $16 · Ear $15 |
| 5 | Fun Bead Mix — Glass & Synthetic | Set | $60 | Neck $29 · Brac $16 · Ear $15 |
| 6 | Glass Bead Chokers — Green | Single | — | 15–16 in. $16 · 17–21 in. $19 |
| 7 | Multi-Color Glass Bead Chokers | Single | — | 15–16 in. $16 · 17–21 in. $19 |
| 8 | Glass Seed Beads — Any Color | Single | — | Up to 18 in. $15 |
| 9 | Glass Seed Bead Mix with 4mm Glass Beads | Single | — | 15–17 in. $17 · 18–21 in. $19.50 |
| 10 | Round Neck Pillow | Pillow | — | $24 + $3.50 ship · Colors: Lime Green, Orange, Red, Yellow, Navy |
| 11 | Polka Dot Travel Pillow | Pillow | — | $24 + $3.50 ship · Colors: Fuchsia, Turquoise, White, Orange, Navy |

---

## Recommended Next Task

**Add PayPal URLs** — Ask Elena for her PayPal.me link or PayPal button URLs. Add them to `paypalUrl` fields in `funtravel/data/products.js`. This enables direct-to-PayPal checkout without the mailto step.

Second priority: Add a favicon (`funtravel/favicon.ico`).

---

## Last Updated

**Date:** 2026-06-02
**By:** Claude (claude-sonnet-4-6)
**Commit:** TBD (pending push)
