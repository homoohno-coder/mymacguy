# Fun Travel — TODO

## High Priority

- [ ] **PayPal URLs** — Elena needs to provide PayPal.me links or button URLs for each product; set `paypalUrl` in `data/products.js` to enable direct checkout
- [ ] **Product images in mymacguy repo** — copy images from `homoohno-coder/funtravel/images/` into `funtravel/images/` so deploy preview works
- [x] **Pillow color picker on product.html** — radio button color pickers added; Buy Now wired to `openOrderWithColor()`
- [x] **Shipping cost** — fixed to $3.50 flat for all orders (per PDF price list); updated in `app.js` and `contact.html`
- [x] **Image cropping** — all product images now use `object-fit: contain`; jewelry/necklaces fully visible on all pages
- [x] **Set pricing** — products 1–5 restored as sets: Necklace $29, Bracelet $16, Earrings $15, Full Set $60
- [x] **Multi-Color Choker pricing** — corrected from $32 flat to $16 (15–16 in.) / $19 (17–21 in.)
- [x] **Product descriptions** — all 11 products updated to boutique-quality copy
- [x] **Pillow shipping on shop/index pages** — corrected from $9.99 to $3.50

## Medium Priority

- [x] **Open Graph / social meta tags** — added to all 5 pages; product.html updates dynamically from product data
- [x] **CA sales tax** — 10.25% (Palm Springs) applied to order totals in app.js
- [ ] **Product descriptions from PDF** — update product names/descriptions to match the official PDF price list exactly
- [ ] **Favicon** — add `favicon.ico` or SVG favicon (Fun Travel "FT" monogram or ✦ symbol)
- [ ] **Page title for product.html** — verify `<meta name="description">` updates dynamically from product data
- [ ] **404 page** — add `404.html` for Netlify / GitHub Pages broken link handling
- [ ] **Sitemap** — add `sitemap.xml` for SEO

## Low Priority / Nice to Have

- [ ] **Gallery page** — add `gallery.html` as a standalone page (currently gallery is only accessible via the overlay on the home page)
- [ ] **Order confirmation** — after `sendOrder()`, show a visual confirmation state in the order panel instead of just opening PayPal
- [ ] **Seasonal pricing note** — Multi-Color Glass Bead Chokers have Sept/Oct pricing ($42); consider auto-switching based on current date
- [ ] **Sold-out state** — `available: false` flag exists in product data; wire it up to show "Sold Out" badge on cards
- [ ] **Print-friendly contact page** — adds a simple print stylesheet so the returns policy is printable
- [ ] **Analytics** — add a privacy-respecting analytics snippet (e.g., Plausible or Fathom) if Elena wants visitor data

## Technical Debt

- [ ] Inline styles in about.html philosophy section — move to `style.css`
- [ ] Order panel HTML is duplicated in `index.html`, `shop.html`, and `product.html` — consider extracting to a JS-rendered component
- [ ] `app.js` `sendOrder()` currently opens mailto + PayPal; once real PayPal URLs are set, the mailto flow becomes redundant for direct-checkout products
