# Fun Travel — TODO

> Maintained as part of the Project Continuity System.
> Update item status (Open → In Progress → Completed) before ending any session.

---

## Priority 1 — Blocking / Business Critical

| Status | Task | Notes |
|---|---|---|
| 🔴 Open | **PayPal URLs** | Elena must provide PayPal.me or button URLs. Add to `paypalUrl` in `data/products.js`. Currently all products show order-panel + mailto flow. |
| 🔴 Open | **Copy product images to mymacguy repo** | Images load from raw GitHub URL at `homoohno-coder/funtravel`. If that repo changes, all images break. Copy to `funtravel/images/` as local fallback. |

---

## Priority 2 — Important

| Status | Task | Notes |
|---|---|---|
| 🔴 Open | **Favicon** | No favicon set. Add `funtravel/favicon.ico` or SVG. Suggested: "FT" monogram or ✦ symbol in terra/gold brand colors. |
| 🔴 Open | **404 page** | Add `funtravel/404.html` for Netlify broken-link handling. |
| 🔴 Open | **Verify `<meta name="description">` on product.html** | OG tags update dynamically from product data; verify `<meta name="description">` also updates. |
| 🔴 Open | **Seasonal pricing for Multi-Color Chokers** | Product #7 costs $42 in Sept/Oct per PDF. Currently shows $16/$19 year-round. Consider date-based auto-switch in JS. |
| ✅ Completed | **Shipping cost** | Fixed to $3.50 flat in app.js, products.js, contact.html, shop.html, index.html |
| ✅ Completed | **CA sales tax (10.25%)** | Applied to order totals in app.js |
| ✅ Completed | **Image cropping** | All product images use `object-fit: contain` |
| ✅ Completed | **Set pricing (Products 1–5)** | Necklace $29 / Bracelet $16 / Earrings $15 / Full Set $60 |
| ✅ Completed | **Multi-Color Choker pricing** | Corrected from $32 flat → $16 (15–16 in.) / $19 (17–21 in.) |
| ✅ Completed | **Product descriptions** | All 11 products have boutique-quality copy |
| ✅ Completed | **Open Graph / social meta tags** | All 5 pages; product.html updates dynamically |
| ✅ Completed | **Pillow color radio picker** | Radio buttons on shop.html and product.html |
| ✅ Completed | **Shop page visual consistency** | Split into 3 subsections (Sets 1–5, Singles 6–9, Pillows 10–11); equal card heights via `min-height` on `.product-desc` |
| ✅ Completed | **Product Detail Modal** | Full ecommerce overlay on product image click — gallery, variants, qty, Add to Cart, Buy Now, reviews, related products |
| ✅ Completed | **Shopping cart** | sessionStorage FTCart, nav badge, cart.html checkout page |
| ✅ Completed | **Stripe Checkout** | Server-side session via Netlify Function; secret key never in frontend |
| ✅ Completed | **Order tracking** | Netlify Blobs storage, verify-session.js, get-order.js, order-lookup.html |

---

## Priority 3 — Nice to Have

| Status | Task | Notes |
|---|---|---|
| 🔴 Open | **Gallery standalone page** | `gallery.html` as a real page. Currently gallery is overlay-only from home page. |
| 🔴 Open | **Order confirmation state** | After `sendOrder()`, show visual confirmation in the order panel instead of just closing it. |
| 🔴 Open | **Sold-out state** | `available: false` flag exists in product data. Wire to a "Sold Out" badge on cards and disable Buy Now button. |
| 🔴 Open | **Sitemap** | `funtravel/sitemap.xml` for SEO. |
| 🔴 Open | **Analytics** | Add Plausible or Fathom if Elena wants visitor tracking. |
| 🔴 Open | **Print-friendly contact page** | Simple print stylesheet for returns policy. |

---

## Technical Debt

| Status | Task | Notes |
|---|---|---|
| 🔴 Open | **Order panel HTML duplicated** | `#order-panel` HTML is copy-pasted in `index.html`, `shop.html`, and `product.html`. Could be JS-rendered from a shared template. |
| 🔴 Open | **index.html bestseller hardcodes price** | Earth & Fire price ($60) and Polka Dot shipping ($3.50) are hardcoded in index.html. Should be driven from `window.FT.PRODUCTS`. |
| 🔴 Open | **Inline styles in about.html** | Philosophy section uses inline styles. Should move to `style.css`. |
