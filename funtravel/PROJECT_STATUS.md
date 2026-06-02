# Fun Travel — Project Status

**Last updated:** 2026-06-02  
**Branch:** `claude/ecommerce-page-setup-Kdk1P`  
**PR:** homoohno-coder/mymacguy#7

---

## Completed

### Site Architecture
- [x] Multi-page static site (no framework, no build tool)
- [x] Shared product data: `data/products.js` → `window.FT.PRODUCTS`
- [x] Shared styles: `css/style.css`
- [x] Shared JS: `js/app.js`

### Pages
- [x] `index.html` — Home (hero, marquee, best sellers, about snippet, footer)
- [x] `shop.html` — Full catalog with filter tabs (All / Jewelry / Pillows)
- [x] `product.html` — Dynamic product detail via `?id=` URL param
- [x] `about.html` — Elena's story, philosophy, stats, CTA
- [x] `contact.html` — Contact form (mailto), shipping info, returns policy, FAQ

### Product Data (11 products — all verified against PDF price list)
- [x] 9 jewelry products (necklaces, chokers, seed bead strands)
- [x] 2 travel pillows (Round Neck + Polka Dot)
- [x] Set pricing removed from non-set products (confirmed from PDF: all items sold individually)
- [x] All images updated to raw GitHub URLs (`homoohno-coder/funtravel` repo)

### Features
- [x] Lightbox gallery with keyboard nav, swipe, thumbnail strip
- [x] Order panel with item checkboxes, contact form, order summary, estimated total
- [x] PayPal send + mailto fallback (`sendOrder()`)
- [x] Color swatches on pillow product cards and detail page
- [x] Filter tabs on shop page (JS-powered, no reload)
- [x] Related products on product detail page
- [x] Full gallery overlay (`openGallery()`) on home page
- [x] Animated canvas backgrounds (order panel, lightbox)
- [x] Responsive navigation, responsive grid breakpoints
- [x] Active nav link highlighting by current page
- [x] CA sales tax 10.25% (Palm Springs) applied to order totals

### Bug Fixes
- [x] Mislabeled pillow image in lightbox gallery
- [x] Round Neck Pillow main image corrected to `Resized_20260529_091718.jpeg`
- [x] Set pricing removed from 5 individual necklace products
- [x] Fuchsia & Black necklace corrected to single necklace at $15

### Image Display
- [x] All product images: `object-fit: contain` — full jewelry visible, no cropping
- [x] Product card height: 320px desktop / 280px tablet / 260px mobile
- [x] Product detail gallery: aspect-ratio 4/5, contain
- [x] Gallery thumbnails: contain + background
- [x] Related products: contain + 220px height
- [x] Bestseller cards: contain + 260px height
- [x] Pillow cards: contain

### Shipping (fixed per PDF price list)
- [x] `app.js` shipping: now flat $3.50 for all orders (was $5.99/$7.99/$9.99)
- [x] `products.js` pillow `shipping` field: $9.99 → $3.50
- [x] `contact.html` shipping info cards: now show $3.50 flat for all categories

---

## Product Data Verification (2026-06-02, verified against PDF price list)

| # | Product | Set Price | Piece Prices | Image | Status |
|---|---|---|---|---|---|
| 1 | Kelly Green & Black African Tube Set | $60 | Neck $29 · Brac $16 · Ear $15 | Resized_20260531_100438.jpeg | ✓ |
| 2 | Earth & Fire Bead Set | $60 | Neck $29 · Brac $16 · Ear $15 | Resized_20260531_100359.jpeg | ✓ |
| 3 | Fuchsia & Black Beads with African Tube Beads | $60 | Neck $29 · Brac $16 · Ear $15 | Resized_20260531_100501.jpeg | ✓ |
| 4 | Kelly Green Glass & Orange Synthetic Beads | $60 | Neck $29 · Brac $16 · Ear $15 | Resized_20260531_100506.jpeg | ✓ |
| 5 | Fun Bead Mix — Glass & Synthetic | $60 | Neck $29 · Brac $16 · Ear $15 | Resized_20260531_102515.jpeg | ✓ |
| 6 | Glass Bead Chokers — Green | — | 15–16 in. $16 · 17–21 in. $19 | Resized_20260531_102540.jpeg | ✓ |
| 7 | Multi-Color Glass Bead Chokers | — | 15–16 in. $16 · 17–21 in. $19 | Resized_20260531_102550.jpeg | ✓ |
| 8 | Glass Seed Beads — Any Color | — | Up to 18 in. $15 | Resized_20260531_102628.jpeg | ✓ |
| 9 | Glass Seed Bead Mix with 4mm Glass Beads | — | 15–17 in. $17 · 18–21 in. $19.50 | IMG_3530.jpeg | ✓ |
| 10 | Round Neck Pillow | — | $24 + $3.50 ship | Resized_20260529_091718.jpeg | ✓ |
| 11 | Polka Dot Travel Pillow | — | $24 + $3.50 ship | Resized_20260301_063640_1_.jpeg | ✓ |

---

## Notes

- Product images live in `homoohno-coder/funtravel` repo — using raw GitHub URLs for all images
- `paypalUrl: ''` on all products → order panel flow; set a URL to enable direct PayPal checkout
- Elena's email: `picswelove2024@gmail.com`
- Ships USA only, PayPal accepted
- Shipping: $3.50 flat on all orders (per PDF price list)
- CA sales tax: 10.25% (Palm Springs) on subtotal only
