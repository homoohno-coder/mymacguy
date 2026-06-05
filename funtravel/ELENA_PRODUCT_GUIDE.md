# Fun Travel — Elena's Product Update Guide

How to add new products, update prices, and add photos — no coding needed.

---

## How to Update a Price

1. Go to [github.com/homoohno-coder/mymacguy](https://github.com/homoohno-coder/mymacguy)
2. Click the `funtravel` folder → `data` folder → `products.js`
3. Click the ✏️ pencil icon (top right) to edit
4. Find the product by name (use Ctrl+F to search)
5. Change the `price:` number
6. Scroll down → click **Commit changes** → **Commit changes** again
7. Site updates in ~1 minute ✅

---

## How to Add a Payment Link

When you have a payment link for a product (PayPal or Wave):

1. Open `funtravel/data/products.js` (same steps above)
2. Find the product by name
3. Find the line that says: `paypalUrl: '',`
4. Paste your payment link between the quotes: `paypalUrl: 'https://your-payment-link-here',`
5. Commit changes → live in 1 minute ✅

---

## How to Add a New Product

1. Open `funtravel/data/products.js`
2. Find the last product before the closing `];`
3. Copy and paste this template, then fill it in:

```js
{
  id: 'your-product-name-with-dashes',
  name: 'Your Product Name',
  category: 'jewelry',        // jewelry OR pillow
  type: 'bracelet',           // necklace, bracelet, earrings, choker, pillow
  tagline: '',                // optional: '⭐ Best Seller'
  featured: false,
  available: true,
  paypalUrl: '',              // paste payment link here when ready
  image: 'images/photo-coming-soon.svg',   // replace with photo filename when ready
  images: ['images/photo-coming-soon.svg'],
  priceFrom: 16,              // lowest price
  description: 'Your description here.',
  details: '8 in. including clasp',
  colors: ['Multi-color'],
  materials: 'Glass beads',
  orderItems: [
    { label: 'Item Name', price: 16 }
  ],
  tags: ['bracelet', 'multicolor']
},
```

---

## How to Add a Product Photo

1. Take a clear photo of the item (good light, plain background)
2. Go to [github.com/homoohno-coder/mymacguy](https://github.com/homoohno-coder/mymacguy)
3. Click `funtravel` → `images`
4. Click **Add file** → **Upload files**
5. Upload your photo (name it something like `blue-black-bracelet.jpg`)
6. Commit the upload
7. Then edit `products.js` and replace `images/photo-coming-soon.svg` with `images/blue-black-bracelet.jpg`
8. Commit → live in 1 minute ✅

---

## Products Waiting for Photos

These are live on the site with a placeholder image. Send Wahed the photos and he'll swap them in:

| Product | Status |
|---|---|
| Multicolored Bracelet | 📸 Photo needed |
| Fancy Multicolored Bracelet | 📸 Photo needed |
| Blue & Black Bead Bracelet | 📸 Photo needed |
| Magenta & Green Bead Bracelet | 📸 Photo needed |
| African Mino Beads Bracelet | 📸 Photo needed |
| Ceramic Hearts & Glass Earrings | 📸 Photo needed |
| Ceramic & Glass Bead Earrings | 📸 Photo needed |
| Magenta & Black Glass Earrings | 📸 Photo needed |
| Single Strand Multicolored Choker | 📸 Photo needed |
| 2-Strand Multicolored Choker | 📸 Photo needed |
| 2-Strand Multicolored Necklace | 📸 Photo needed |
| Single Strand Choker — 25+ Colors | 📸 Photo needed |
| Multicolored Big Bead Necklace | 📸 Photo needed |

---

## Need Help?

Call or text Wahed: **(310) 980-1964** · mymacguy.net
