# Fun Travel — Changelog

> Every significant session is recorded here.
> Format: newest first.

---

## Session 2026-06-02 — Shop Visual Consistency Pass

### Commits
| Hash | Message |
|---|---|
| (pending) | feat(funtravel): shop visual consistency — split jewelry into subsections |

### Files Changed
- `funtravel/shop.html`
- `funtravel/css/style.css`
- `funtravel/PROJECT_STATUS.md`
- `funtravel/TODO.md`
- `funtravel/CHANGELOG.md`

### Features Added
- Shop page split into 3 named subsections: Handcrafted Jewelry Sets (1–5), Single Necklaces & Chokers (6–9), Travel Pillows (10–11)
- New CSS classes: `.shop-subsection`, `.subsection-heading`, `.subsection-sub`
- `min-height: 3.5em` on `.product-desc` for consistent card heights within each grid
- Set card descriptions end with "Includes necklace, bracelet, and earrings."
- Singles card descriptions end with "Single necklace only."

### Notes
- Filter tabs still work: Jewelry tab hides/shows `#jewelry-section` (both subsections inside); Pillows tab shows `#pillows-section`
- Product #9 (Glass Seed Bead Mix) verified: correct image, description, pricing ($17/$19.50)

---

## Session 2026-06-02 — Catalog Update, Image Fix, Shipping Fix

### Commits
| Hash | Message |
|---|---|
| `22c790a` | Update catalog from PDF: set pricing, descriptions, choker prices |
| `14d9bce` | Fix product image cropping — switch all images to object-fit: contain |
| `db20eed` | Fix shipping to $3.50 flat rate per PDF price list |
| `072b9b9` | fix(funtravel): correct Round Neck Pillow image |
| `3412ece` | fix(funtravel): remove set pricing from non-set products |
| `b5c49e1` | feat(funtravel): add CA sales tax (10.25%) to order panel |
| `d61b71e` | fix(funtravel): use raw GitHub URLs for product images |
| `9567af7` | feat(funtravel): pillow color picker, OG meta tags, project docs |
| `3fbf20a` | feat(funtravel): complete multi-page store — Shop, Product Detail, About, Contact |
| `a4fc365` | fix(funtravel): correct pillow image mislabeled as necklace in gallery |

### Files Changed (cumulative across session)
- `funtravel/data/products.js`
- `funtravel/shop.html`
- `funtravel/product.html`
- `funtravel/index.html`
- `funtravel/contact.html`
- `funtravel/js/app.js`
- `funtravel/css/style.css`
- `funtravel/PROJECT_STATUS.md`
- `funtravel/TODO.md`
- `funtravel/CHANGELOG.md` ← this file (new)

### Features Added
- Complete 5-page static e-commerce site (index, shop, product detail, about, contact)
- Dynamic product detail page via `?id=` URL param
- Order panel: item selection, contact form, order summary, PayPal + mailto
- Lightbox gallery (keyboard, swipe, thumbnails)
- Pillow color radio picker with swatch preview
- Filter tabs on shop page
- Related products on product detail
- Animated canvas backgrounds
- Open Graph meta tags on all pages
- Project continuity documentation system (PROJECT_STATUS.md, TODO.md, CHANGELOG.md)

### Bugs Fixed
- Product images broken in deploy preview → switched to raw GitHub URLs
- Round Neck Pillow showing polka dot photo → corrected to `Resized_20260529_091718.jpeg`
- Set pricing on non-set products → removed from products 1–5 (then corrected below)
- Product 3 (Fuchsia & Black) had wrong single-item pricing → restored as full set
- Multi-Color Chokers priced at $32 flat → corrected to $16/$19 by length
- Jewelry images cropped/cut off → switched all to `object-fit: contain`
- Shipping displayed as $5.99/$9.99 → corrected to $3.50 flat (per PDF)
- CA sales tax missing from order totals → added 10.25%

### Prices Corrected (per PDF price list)
| Product | Before | After |
|---|---|---|
| Products 1–5 (sets) | No set price | Full Set $60 |
| Product 3 (Fuchsia & Black) | Necklace $15 only | Set $60 (Neck $29 / Brac $16 / Ear $15) |
| Product 7 (Multi-Color Chokers) | $32 flat | $16 (15–16 in.) / $19 (17–21 in.) |
| Shipping (all) | $5.99/$7.99/$9.99 | $3.50 flat |
| Home page bestseller | Full Set $55 | Full Set $60 |
| Pillow shipping display | $9.99 | $3.50 |

### Notes
- PDF price list (necklaces.pdf, 11 pages, scanned) was used as authoritative source
- All product data authoritative source: `funtravel/data/products.js`
- Deploy preview: https://deploy-preview-7--mymacguy.netlify.app
- PR #7 is a draft — not yet merged to main
- PayPal URLs not yet set — Elena needs to provide them

---

## How to Read This File

Each session entry contains:
- **Commits** — all git hashes for traceability
- **Files Changed** — everything touched
- **Features Added** — new capabilities
- **Bugs Fixed** — what was broken and how it was fixed
- **Notes** — context for the next agent
