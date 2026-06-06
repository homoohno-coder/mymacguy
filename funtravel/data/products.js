// Fun Travel — Product Catalog
// To enable direct PayPal checkout, add the full PayPal.me or button URL to paypalUrl.
// Leave paypalUrl: '' to show "Contact to Purchase" instead.

window.FT = window.FT || {};

// Shipping rates
window.FT.SHIPPING = {
    jewelryItem: 5.99,
    jewelrySet: 7.99,
    pillow: 9.99,
    twoPillows: 14.99,
    freeThreshold: 50 // free jewelry shipping over $50
};

window.FT.PRODUCTS = [

  /* ── JEWELRY SETS (1–5) ─────────────────────────────── */

  {
      id: 'kelly-green-black-set',
      name: 'Kelly Green & Black African Tube Set',
      category: 'jewelry',
      type: 'necklace-set',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_100438.jpeg',
      images: ['/images/Resized_20260531_100438.jpeg'],
      priceFrom: 15,
      setPrice: 55,
      setLabel: 'Full Set',
      description: 'Handcrafted African-inspired bead set with rich Kelly green and black beads and traditional tube accents. Sold as a complete set or as individual pieces.',
      details: 'Necklace 15.5 in. · Bracelet 8 in. · Earrings',
      colors: ['Kelly Green', 'Black'],
      materials: 'Glass beads, African tube beads',
      orderItems: [
        { label: 'Necklace (15.5 in.)', price: 29 },
        { label: 'Bracelet (8 in.)', price: 16 },
        { label: 'Earrings', price: 15 }
          ],
      tags: ['necklace', 'bracelet', 'earrings', 'green', 'black', 'set']
  },

  {
      id: 'wood-orange-bead-set',
      name: 'Wood & Orange Synthetic Beads',
      category: 'jewelry',
      type: 'necklace-set',
      tagline: '⭐ Best Seller',
      featured: true,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_100359.jpeg',
      images: ['/images/Resized_20260531_100359.jpeg', '/images/Resized_20260528_081417.jpeg'],
      priceFrom: 15,
      setPrice: 55,
      setLabel: 'Full Set',
      description: 'Warm coral-orange tones meet patterned wooden beads in this artisan bead set. Earthy, natural, and full of character.',
      details: 'Necklace 16 in. · Bracelet 8 in. · Earrings',
      colors: ['Coral Orange', 'Earthy Brown'],
      materials: 'Coral-orange beads, wooden beads',
      orderItems: [
        { label: 'Necklace (16 in.)', price: 29 },
        { label: 'Bracelet (8 in.)', price: 16 },
        { label: 'Earrings', price: 15 }
          ],
      tags: ['necklace', 'bracelet', 'earrings', 'orange', 'tribal', 'bestseller', 'set']
  },

  {
      id: 'fuchsia-black-african-tube-set',
      name: 'Fuchsia & Black Beads with African Tube Beads',
      category: 'jewelry',
      type: 'necklace-set',
      tagline: '⭐ Best Seller',
      featured: true,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_100501.jpeg',
      images: ['/images/Resized_20260531_100501.jpeg'],
      priceFrom: 15,
      setPrice: 55,
      setLabel: 'Full Set',
      description: 'Bold fuchsia and black beads with African tube accents — striking contrast, handmade with care. Necklace 16 inches. Available in any color.',
      details: 'Necklace 16 in. · Bracelet 8 in. · Earrings · Any color available',
      colors: ['Any Color'],
      materials: 'Glass beads, African tube beads',
      orderItems: [
        { label: 'Necklace (16 in.)', price: 29 },
        { label: 'Bracelet (8 in.)', price: 16 },
        { label: 'Earrings', price: 15 }
          ],
      tags: ['necklace', 'bracelet', 'earrings', 'fuchsia', 'black', 'bestseller', 'set']
  },

  {
      id: 'kelly-green-orange-african-tube-set',
      name: 'Kelly Green Glass & Orange Synthetic Beads with African Tube Beads',
      category: 'jewelry',
      type: 'necklace-set',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_100506.jpeg',
      images: ['/images/Resized_20260531_100506.jpeg'],
      priceFrom: 15,
      setPrice: 55,
      setLabel: 'Full Set',
      description: 'Vibrant Kelly green glass and orange synthetic beads with African tube accents. A colorful, hand-strung statement piece.',
      details: 'Necklace 16 in. · Bracelet 8 in. · Earrings',
      colors: ['Kelly Green', 'Orange'],
      materials: 'Glass beads, synthetic beads, African tube beads',
      orderItems: [
        { label: 'Necklace (16 in.)', price: 29 },
        { label: 'Bracelet (8 in.)', price: 16 },
        { label: 'Earrings', price: 15 }
          ],
      tags: ['necklace', 'bracelet', 'earrings', 'green', 'orange', 'set']
  },

  {
      id: 'fun-bead-mix-glass-synthetic',
      name: 'Fun Bead Mix — Glass & Synthetic',
      category: 'jewelry',
      type: 'necklace-set',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_102515.jpeg',
      images: ['/images/Resized_20260531_102515.jpeg'],
      priceFrom: 15,
      setPrice: 55,
      setLabel: 'Full Set',
      description: 'A festive medley of glass and synthetic beads in a mix of colors — playful, bright, and full of personality.',
      details: 'Necklace 16 in. · Bracelet 8 in. · Earrings',
      colors: ['Multi-color'],
      materials: 'Glass beads, synthetic beads',
      orderItems: [
        { label: 'Necklace (16 in.)', price: 29 },
        { label: 'Bracelet (8 in.)', price: 16 },
        { label: 'Earrings', price: 15 }
          ],
      tags: ['necklace', 'bracelet', 'earrings', 'multicolor', 'set']
  },

  /* ── CHOKERS & SINGLE NECKLACES (6–9) ───────────────── */

  {
      id: 'glass-bead-chokers-green',
      name: 'Glass Bead Chokers — Green',
      category: 'jewelry',
      type: 'choker',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_102540.jpeg',
      images: ['/images/Resized_20260531_102540.jpeg'],
      priceFrom: 16,
      description: 'Delicate green glass bead chokers in your choice of length, from 15 to 21 inches. Single necklace only — no bracelet or earrings.',
      details: '15–16 in. — $16 · 17–21 in. — $19',
      colors: ['Green'],
      materials: 'Glass beads',
      orderItems: [
        { label: 'Choker 15 in.', price: 16 },
        { label: 'Choker 16 in.', price: 16 },
        { label: 'Choker 17 in.', price: 19 },
        { label: 'Choker 18 in.', price: 19 },
        { label: 'Choker 19 in.', price: 19 },
        { label: 'Choker 20 in.', price: 19 },
        { label: 'Choker 21 in.', price: 19 }
          ],
      tags: ['choker', 'necklace', 'green', 'single']
  },

  {
      id: 'multi-color-glass-bead-chokers',
      name: 'Multi-Color Glass Bead Chokers',
      category: 'jewelry',
      type: 'choker',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_102550.jpeg',
      images: ['/images/Resized_20260531_102550.jpeg'],
      priceFrom: 16,
      description: 'A kaleidoscope of glass bead hues in your choice of length. Single necklace only — no bracelet or earrings.',
      details: '15–16 in. — $16 · 17–21 in. — $19',
      colors: ['Multi-color'],
      materials: 'Glass beads',
      orderItems: [
        { label: 'Choker 15 in.', price: 16 },
        { label: 'Choker 16 in.', price: 16 },
        { label: 'Choker 17 in.', price: 19 },
        { label: 'Choker 18 in.', price: 19 },
        { label: 'Choker 19 in.', price: 19 },
        { label: 'Choker 20 in.', price: 19 },
        { label: 'Choker 21 in.', price: 19 }
          ],
      tags: ['choker', 'necklace', 'multicolor', 'single']
  },

  {
      id: 'glass-seed-beads-any-color',
      name: 'Glass Seed Beads — Any Color',
      category: 'jewelry',
      type: 'necklace',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260531_102628.jpeg',
      images: ['/images/Resized_20260531_102628.jpeg'],
      priceFrom: 15,
      description: 'Dainty glass seed bead necklaces hand-strung to order in any color you choose, from 15 to 18 inches.',
      details: 'Up to 18 in. — $15',
      colors: ['Any Color'],
      materials: 'Glass seed beads',
      orderItems: [
        { label: 'Single strand 15 in.', price: 15 },
        { label: 'Single strand 16 in.', price: 15 },
        { label: 'Single strand 17 in.', price: 15 },
        { label: 'Single strand 18 in.', price: 15 }
          ],
      tags: ['necklace', 'seed beads', 'any color', 'single']
  },

  {
      id: 'glass-seed-bead-mix-4mm',
      name: 'Glass Seed Bead Mix with 4mm Glass Beads',
      category: 'jewelry',
      type: 'necklace',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260528_081218.png',
      images: ['/images/Resized_20260528_081218.png'],
      priceFrom: 17,
      description: 'A refined strand of mixed glass seed beads and 4mm glass beads, hand-strung in any color and length you choose.',
      details: '15–17 in. — $17 · 18–21 in. — $19.50',
      colors: ['Any Color'],
      materials: 'Glass seed beads, 4mm glass beads',
      orderItems: [
        { label: 'Necklace 15 in.', price: 17 },
        { label: 'Necklace 16 in.', price: 17 },
        { label: 'Necklace 17 in.', price: 17 },
        { label: 'Necklace 18 in.', price: 19.50 },
        { label: 'Necklace 19 in.', price: 19.50 },
        { label: 'Necklace 20 in.', price: 19.50 },
        { label: 'Necklace 21 in.', price: 19.50 }
          ],
      tags: ['necklace', 'seed beads', 'any color', 'single', 'mix']
  },

  /* ── BRACELETS (12–16) ──────────────────────────────── */

  {
      id: 'multicolored-bracelet-no-clasp',
      name: 'Multicolored Bracelet',
      category: 'jewelry',
      type: 'bracelet',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/multicolored-bracelet.jpeg',
      images: ['/images/multicolored-bracelet.jpeg'],
      priceFrom: 16,
      description: 'Cheerful multicolored beaded bracelet with no clasp — slides on easily and stays put. A fun pop of color for any outfit.',
      details: 'No clasp · Stretch fit',
      colors: ['Multi-color'],
      materials: 'Mixed beads',
      orderItems: [
        { label: 'Multicolored Bracelet', price: 16 }
          ],
      tags: ['bracelet', 'multicolor', 'no clasp']
  },

  {
      id: 'fancy-multicolored-bracelet',
      name: 'Fancy Multicolored Bracelet',
      category: 'jewelry',
      type: 'bracelet',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/fancy-multicolored-bracelet.jpeg',
      images: ['/images/fancy-multicolored-bracelet.jpeg'],
      priceFrom: 21,
      description: 'Statement multicolored bracelet with large glass and synthetic beads — bold, vibrant, and handcrafted. No clasp for easy wear.',
      details: 'Large glass & synthetic beads · No clasp · Stretch fit',
      colors: ['Multi-color'],
      materials: 'Large glass beads, synthetic beads',
      orderItems: [
        { label: 'Fancy Multicolored Bracelet', price: 21 }
          ],
      tags: ['bracelet', 'multicolor', 'glass', 'statement']
  },

  {
      id: 'blue-black-bracelet',
      name: 'Blue & Black Bead Bracelet',
      category: 'jewelry',
      type: 'bracelet',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/blue-black-bracelet.jpeg',
      images: ['/images/blue-black-bracelet.jpeg'],
      priceFrom: 16,
      description: 'Classic blue and black beaded bracelet with clasp. 8 inches including clasp — a clean, versatile everyday piece.',
      details: '8 in. including clasp',
      colors: ['Blue', 'Black'],
      materials: 'Glass beads',
      orderItems: [
        { label: 'Blue & Black Bracelet (8 in.)', price: 16 }
          ],
      tags: ['bracelet', 'blue', 'black', 'clasp']
  },

  {
      id: 'magenta-green-bracelet',
      name: 'Magenta & Green Bead Bracelet',
      category: 'jewelry',
      type: 'bracelet',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/magenta-green-bracelet.jpeg',
      images: ['/images/magenta-green-bracelet.jpeg'],
      priceFrom: 16,
      description: 'Vibrant magenta and green beaded bracelet with clasp. 8 inches including clasp — bright and handcrafted with care.',
      details: '8 in. including clasp',
      colors: ['Magenta', 'Green'],
      materials: 'Glass beads',
      orderItems: [
        { label: 'Magenta & Green Bracelet (8 in.)', price: 16 }
          ],
      tags: ['bracelet', 'magenta', 'green', 'clasp']
  },

  {
      id: 'african-mino-beads-bracelet',
      name: 'African Mino Beads Bracelet',
      category: 'jewelry',
      type: 'bracelet',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/african-mino-beads-bracelet.jpeg',
      images: ['/images/african-mino-beads-bracelet.jpeg'],
      priceFrom: 18,
      description: 'Handcrafted bracelet featuring authentic African mino beads. 8 inches including clasp — earthy, artisan, and one of a kind.',
      details: '8 in. including clasp',
      colors: ['Multi-color'],
      materials: 'African mino beads',
      orderItems: [
        { label: 'African Mino Beads Bracelet (8 in.)', price: 18 }
          ],
      tags: ['bracelet', 'african', 'mino', 'artisan']
  },

  /* ── EARRINGS (17–19) ────────────────────────────────── */

  {
      id: 'ceramic-hearts-glass-earrings',
      name: 'Ceramic Hearts & Glass Bead Earrings',
      category: 'jewelry',
      type: 'earrings',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/ceramic-hearts-glass-earrings.jpeg',
      images: ['/images/ceramic-hearts-glass-earrings.jpeg'],
      priceFrom: 16,
      description: 'Charming earrings featuring ceramic heart charms and black glass beads. Handmade and full of personality.',
      details: 'Ceramic hearts · Black glass beads',
      colors: ['Black'],
      materials: 'Ceramic hearts, glass beads',
      orderItems: [
        { label: 'Ceramic Hearts & Glass Earrings', price: 16 }
          ],
      tags: ['earrings', 'ceramic', 'hearts', 'black']
  },

  {
      id: 'ceramic-glass-bead-earrings',
      name: 'Ceramic & Glass Bead Earrings',
      category: 'jewelry',
      type: 'earrings',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/ceramic-glass-bead-earrings.jpeg',
      images: ['/images/ceramic-glass-bead-earrings.jpeg'],
      priceFrom: 16,
      description: 'Elegant earrings combining ceramic and glass beads — lightweight, colorful, and handcrafted by Elena.',
      details: 'Ceramic & glass beads',
      colors: ['Multi-color'],
      materials: 'Ceramic beads, glass beads',
      orderItems: [
        { label: 'Ceramic & Glass Bead Earrings', price: 16 }
          ],
      tags: ['earrings', 'ceramic', 'glass']
  },

  {
      id: 'magenta-black-glass-earrings',
      name: 'Magenta & Black Glass Bead Earrings',
      category: 'jewelry',
      type: 'earrings',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/magenta-black-glass-earrings.jpeg',
      images: ['/images/magenta-black-glass-earrings.jpeg'],
      priceFrom: 16,
      description: 'Bold magenta and black glass bead earrings — striking contrast, handmade with care by Elena.',
      details: 'Magenta & black glass beads',
      colors: ['Magenta', 'Black'],
      materials: 'Glass beads',
      orderItems: [
        { label: 'Magenta & Black Glass Earrings', price: 16 }
          ],
      tags: ['earrings', 'magenta', 'black', 'glass']
  },

  /* ── CHOKERS & NECKLACES (20–24) ─────────────────────── */

  {
      id: 'single-strand-multicolor-choker',
      name: 'Single Strand Multicolored Choker',
      category: 'jewelry',
      type: 'choker',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/single-strand-multicolor-choker.jpeg',
      images: ['/images/single-strand-multicolor-choker.jpeg'],
      priceFrom: 19,
      description: 'Single strand multicolored choker necklace, 15 to 16 inches. Every additional inch in length is $2 extra. Over 25 colors available — contact Elena to customize.',
      details: '15–16 in. · +$2 per additional inch · 25+ colors',
      colors: ['Any Color'],
      materials: 'Mixed beads',
      orderItems: [
        { label: 'Choker 15 in.', price: 19 },
        { label: 'Choker 16 in.', price: 19 },
        { label: 'Choker 17 in.', price: 21 },
        { label: 'Choker 18 in.', price: 23 },
        { label: 'Choker 19 in.', price: 25 }
          ],
      tags: ['choker', 'necklace', 'multicolor', 'single strand']
  },

  {
      id: 'two-strand-multicolor-choker',
      name: '2-Strand Multicolored Choker',
      category: 'jewelry',
      type: 'choker',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/two-strand-multicolor-choker.jpeg',
      images: ['/images/two-strand-multicolor-choker.jpeg'],
      priceFrom: 19,
      description: 'Two-strand multicolored bead choker, 15 to 17 inches including clasp. Every additional inch is $2 extra. A fuller, layered look handmade by Elena.',
      details: '15–17 in. including clasp · +$2 per additional inch',
      colors: ['Multi-color'],
      materials: 'Mixed beads',
      orderItems: [
        { label: '2-Strand Choker 15 in.', price: 19 },
        { label: '2-Strand Choker 16 in.', price: 19 },
        { label: '2-Strand Choker 17 in.', price: 19 },
        { label: '2-Strand Choker 18 in.', price: 21 },
        { label: '2-Strand Choker 19 in.', price: 23 }
          ],
      tags: ['choker', 'necklace', 'multicolor', 'two strand']
  },

  {
      id: 'two-strand-multicolor-necklace',
      name: '2-Strand Multicolored Bead Necklace',
      category: 'jewelry',
      type: 'necklace',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/two-strand-multicolor-necklace.jpeg',
      images: ['/images/two-strand-multicolor-necklace.jpeg'],
      priceFrom: 19,
      description: 'Two-strand multicolored bead necklace, 15 to 17 inches including clasp. Every additional inch is $2 extra. Layered, colorful, and handmade.',
      details: '15–17 in. including clasp · +$2 per additional inch',
      colors: ['Multi-color'],
      materials: 'Mixed beads',
      orderItems: [
        { label: '2-Strand Necklace 15 in.', price: 19 },
        { label: '2-Strand Necklace 16 in.', price: 19 },
        { label: '2-Strand Necklace 17 in.', price: 19 },
        { label: '2-Strand Necklace 18 in.', price: 21 },
        { label: '2-Strand Necklace 19 in.', price: 23 }
          ],
      tags: ['necklace', 'multicolor', 'two strand']
  },

  {
      id: 'single-strand-choker-25-colors',
      name: 'Single Strand Choker — 25+ Colors',
      category: 'jewelry',
      type: 'choker',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/single-strand-choker-25-colors.jpeg',
      images: ['/images/single-strand-choker-25-colors.jpeg'],
      priceFrom: 19,
      description: 'Single strand choker in your choice of over 25 colors, 15 to 17 inches. Every additional inch is $2 extra. Contact Elena to choose your color.',
      details: '15–17 in. · +$2 per additional inch · 25+ colors available',
      colors: ['Any Color'],
      materials: 'Mixed beads',
      orderItems: [
        { label: 'Choker 15 in.', price: 19 },
        { label: 'Choker 16 in.', price: 19 },
        { label: 'Choker 17 in.', price: 19 },
        { label: 'Choker 18 in.', price: 21 },
        { label: 'Choker 19 in.', price: 23 }
          ],
      tags: ['choker', 'necklace', 'any color', 'custom']
  },

  {
      id: 'multicolor-big-bead-necklace',
      name: 'Multicolored Big Bead Necklace',
      category: 'jewelry',
      type: 'necklace',
      tagline: '',
      featured: false,
      available: true,
      paypalUrl: '',
      image: '/images/multicolor-big-bead-necklace.jpeg',
      images: ['/images/multicolor-big-bead-necklace.jpeg'],
      priceFrom: 24,
      description: 'Bold 16-inch necklace featuring large multicolored glass and synthetic beads with clasp. A statement piece that travels well.',
      details: '16 in. including clasp · Large glass & synthetic beads',
      colors: ['Multi-color'],
      materials: 'Large glass beads, synthetic beads',
      orderItems: [
        { label: 'Multicolored Big Bead Necklace (16 in.)', price: 24 }
          ],
      tags: ['necklace', 'multicolor', 'large beads', 'statement']
  },

  /* ── TRAVEL PILLOWS (10–11) ─────────────────────────── */

  {
      id: 'color-splash-neck-pillow',
      name: 'Color Splash Neck Pillow',
      category: 'pillow',
      type: 'neck-pillow',
      tagline: '',
      featured: true,
      available: true,
      paypalUrl: '',
      image: '/images/round-neck-pillow.jpeg',
      images: [
            '/images/round-neck-pillow.jpeg'
          ],
      priceFrom: 24,
      description: 'Cozy 12 × 12-inch travel pillow in cotton fabric with synthetic fill. Machine washable, low dryer temperature. Available in 5 colors.',
      details: '12 × 12 inches. Cotton fabric, synthetic fill. Machine washable, low dryer.',
      colors: ['Lime Green', 'Orange', 'Red', 'Yellow', 'Navy'],
      colorSwatches: [
        { label: 'Lime Green', hex: '#8bc34a' },
        { label: 'Orange', hex: '#ff6b35' },
        { label: 'Red', hex: '#c62828' },
        { label: 'Yellow', hex: '#fdd835' },
        { label: 'Navy', hex: '#1565c0' }
          ],
      materials: 'Cotton fabric, synthetic fill',
      orderItems: [
        { label: 'Lime Green', price: 24 },
        { label: 'Orange', price: 24 },
        { label: 'Red', price: 24 },
        { label: 'Yellow', price: 24 },
        { label: 'Navy', price: 24 }
          ],
      shipping: 9.99,
      tags: ['pillow', 'travel', 'neck pillow', 'cotton']
  },

  {
      id: 'polka-dot-travel-pillow',
      name: 'Polka Dot Travel Pillow',
      category: 'pillow',
      type: 'travel-pillow',
      tagline: '⭐ Best Seller',
      featured: true,
      available: true,
      paypalUrl: '',
      image: '/images/Resized_20260301_063640_1_.jpeg',
      images: [
            '/images/Resized_20260301_063640_1_.jpeg',
            '/images/Resized_20260529_085416.jpeg'
          ],
      priceFrom: 24,
      description: 'Cheerful 12 × 16-inch polka dot travel pillow in cotton fabric with synthetic fill. Machine washable, low dryer temperature. Available in 5 colors.',
      details: '12 × 16 inches. Cotton fabric, synthetic fill. Machine washable, low dryer.',
      colors: ['Fuchsia', 'Turquoise', 'White', 'Orange', 'Navy'],
      colorSwatches: [
        { label: 'Fuchsia', hex: '#e91e8c' },
        { label: 'Turquoise', hex: '#00acc1' },
        { label: 'White', hex: '#f5f5f0' },
        { label: 'Orange', hex: '#f57c00' },
        { label: 'Navy', hex: '#1a237e' }
          ],
      materials: 'Cotton fabric, synthetic fill',
      orderItems: [
        { label: 'Fuchsia', price: 24 },
        { label: 'Turquoise', price: 24 },
        { label: 'White', price: 24 },
        { label: 'Orange', price: 24 },
        { label: 'Navy', price: 24 }
          ],
      shipping: 9.99,
      tags: ['pillow', 'travel', 'polka dot', 'cotton']
  }

  ];
