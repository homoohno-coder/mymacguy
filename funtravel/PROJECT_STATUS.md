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

### Shipping (fixed per PDF price list)
- [x] `app.js` shipping: now flat $3.50 for all orders (was $5.99/$7.99/$9.99)
- [x] `products.js` pillow `shipping` field: $9.99 → $3.50
- [x] `contact.html` shipping info cards: now show $3.50 flat for all categories

---

## Product Data Verification (2026-06-02, verified against PDF price list)

| Product | Price From | Image | Status |
|---|---|---|---|
| Kelly Green & Black African Tube Set | $15 | Resized_20260531_100438.jpeg | ✓ |
| Earth & Fire Bead Set | $15 | Resized_20260531_100359.jpeg | ✓ |
| Fuchsia & Black Beads — Any Color | $15 | Resized_20260531_100501.jpeg | ✓ |
| Kelly Green Glass & Orange Synthetic Beads | $15 | Resized_20260531_100506.jpeg | ✓ |
| Fun Bead Mix — Glass & Synthetic | $15 | Resized_20260531_102515.jpeg | ✓ |
| Glass Bead Chokers — Green | $16 | Resized_20260531_102540.jpeg | ✓ |
| Multi-Color Glass Bead Chokers | $32 | Resized_20260531_102550.jpeg | ✓ |
| Glass Seed Beads — Any Color | $15 | Resized_20260531_102628.jpeg | ✓ |
| Glass Seed Bead Mix with 4mm Glass Beads | $17 | IMG_3530.jpeg | ✓ |
| Round Neck Pillow | $24 | Resized_20260529_091718.jpeg | ✓ |
| Polka Dot Travel Pillow | $24 | Resized_20260301_063640_1_.jpeg | ✓ |

---

## Notes

- Product images live in `homoohno-coder/funtravel` repo — using raw GitHub URLs for all images
- `paypalUrl: ''` on all products → order panel flow; set a URL to enable direct PayPal checkout
- Elena's email: `picswelove2024@gmail.com`
- Ships USA only, PayPal accepted
- Shipping: $3.50 flat on all orders (per PDF price list)
- CA sales tax: 10.25% (Palm Springs) on subtotal only
