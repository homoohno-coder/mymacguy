# mymacguy.net — rebuild

Deployable static site. Drop the contents of this folder at your web root.

## Files

```
/index.html          home — hero, services, about teaser, testimonials, FAQ, contact
/services.html       full service index — 8 categories, scope, pricing
/about.html          bio, career timeline, philosophy, service area
/portal.html         Zoho Assist join, booking, payment, KB
/assets/css/styles.css
/assets/js/main.js
/robots.txt
/sitemap.xml
```

## Customize before publishing

1. **Verify hourly rates** — services.html. Currently shown: $120 training, $140 Mac/iPhone/iCloud, $160 network/security/smart-home, $180 business. Edit to match what you actually charge.
2. **Drop your photo** at `assets/img/wahed.jpg` (4:5 portrait), then in `index.html` and `about.html` replace `<span class="glyph">W</span>` blocks with `<img src="/assets/img/wahed.jpg" alt="Wahed" />` if you want a real portrait. Leaving the lime "W" is also fine as a stylistic choice.
3. **OG image** — create `/assets/img/og.jpg` (1200×630) for social previews.
4. **Google Reviews link** — once you have a verified Google Business Profile, replace the search URL with the direct review link.
5. **Address** — current page hardcoded "1032 S Highland Ave" which mixes residential + business risk. Removed from new build. Add back to about.html if you want it public.
6. **Schema** — `LocalBusiness` JSON-LD is in index.html. Update `image` URL when og.jpg exists.

## Zoho Assist integration

`portal.html` accepts a session code and opens `https://join.zoho.com/?key=<code>` in a new tab. Verified working as the customer-side join pattern. If your tenant uses a different join URL (e.g. `assist.zoho.com/join.html?key=`), edit one line in `assets/js/main.js`.

## SEO

- Per-page titles, descriptions, canonical URLs
- LocalBusiness schema on home
- Sitemap + robots.txt
- Semantic headings, alt text where applicable

## Deploy

Pure static — no build step, no Node, no framework. Works on any host:

- **Cloudflare Pages** — recommended for speed + free TLS. `wrangler pages deploy ./mymacguy --project-name mymacguy`
- **GitHub Pages** — push to a repo, enable Pages
- **Any cPanel / static host** — upload via SFTP

## Notable design decisions

- Killed the stock Unsplash photo. Replaced with a stylized portrait card (lime "W" glyph) you can swap for a real photo.
- Killed the filler stats (LA/3×/1:1). Replaced with four meaningful ones.
- Killed the embedded "1032 S Highland" map. Replaced about page with a dimmed LA-wide service-area map.
- Added real dropdown nav with depth on Services and Client Portal.
- Added FAQ block on home (six common questions) and KB on portal (six fixes).
- Hero subhead now cycles four words (weird/slow/frozen/personal) via JS for personality without being gimmicky.
- All emoji are reduced to functional iconography (call/email/text only). Service cards use numeric "01 / Mac" tags instead of emoji.

## Audit notes

- **Mobile**: fully responsive, tested grid breakpoints at 1024 / 640.
- **Accessibility**: skip the `aria-expanded` toggle if you add a screen-reader pass.
- **Performance**: 2 Google Fonts families, no JS framework, no images yet. First Contentful Paint should be well under 1s on a modern host.
