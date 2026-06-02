// Fun Travel — Product Catalog
// To enable direct PayPal checkout, add the full PayPal.me or button URL to paypalUrl.
// Leave paypalUrl: '' to show "Contact to Purchase" instead.

window.FT = window.FT || {};

window.FT.PRODUCTS = [

  /* ── JEWELRY SETS ──────────────────────────────────── */

  {
    id: 'kelly-green-black-set',
    name: 'Kelly Green & Black African Tube Set',
    category: 'jewelry',
    type: 'necklace-set',
    tagline: 'Set Available',
    featured: false,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260531_100438.jpeg',
    images: ['images/Resized_20260531_100438.jpeg'],
    priceFrom: 15,
    description: 'Kelly green & black beads with African tube beads. Each piece hand-strung with care.',
    details: 'Necklace 15.5 inches including clasp.',
    colors: ['Kelly Green', 'Black'],
    materials: 'Glass beads, African tube beads',
    orderItems: [
      { label: 'Necklace (15.5 in.)', price: 29 },
      { label: 'Bracelet (8 in.)', price: 16 },
      { label: 'Earrings', price: 15 }
    ],
    setPrice: 55,
    setLabel: 'Full Set (Necklace + Bracelet + Earrings)',
    tags: ['set', 'necklace', 'bracelet', 'earrings', 'green', 'black']
  },

  {
    id: 'earth-fire-bead-set',
    name: 'Earth & Fire Bead Set',
    category: 'jewelry',
    type: 'necklace-set',
    tagline: '⭐ Best Seller',
    featured: true,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260531_100359.jpeg',
    images: ['images/Resized_20260531_100359.jpeg', 'images/Resized_20260528_081417.jpeg'],
    priceFrom: 15,
    description: 'Coral-orange beads paired with earthy patterned wooden beads — warmth and a natural feel. Necklace, bracelet, and earrings create a harmonious tribal aesthetic.',
    details: '16 inches including clasp.',
    colors: ['Coral Orange', 'Earthy Brown'],
    materials: 'Coral-orange beads, wooden beads',
    orderItems: [
      { label: 'Necklace (16 in.)', price: 29 },
      { label: 'Bracelet (8 in.)', price: 16 },
      { label: 'Earrings', price: 15 }
    ],
    setPrice: 55,
    setLabel: 'Full Set (Necklace + Bracelet + Earrings)',
    tags: ['set', 'necklace', 'bracelet', 'earrings', 'orange', 'tribal', 'bestseller']
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
    image: 'images/Resized_20260531_100501.jpeg',
    images: ['images/Resized_20260531_100501.jpeg'],
    priceFrom: 15,
    description: 'Bold fuchsia and black beads with African tube accents — striking contrast, handmade with care.',
    details: 'Necklace 16 inches including clasp.',
    colors: ['Fuchsia', 'Black'],
    materials: 'Glass beads, African tube beads',
    orderItems: [
      { label: 'Necklace (16 in.)', price: 29 },
      { label: 'Bracelet (8 in.)', price: 16 },
      { label: 'Earrings — Magenta/Black', price: 15 },
      { label: 'Earrings — Black/Zebra drop', price: 15 }
    ],
    setPrice: 55,
    setLabel: 'Full Set (Necklace + Bracelet + Earrings)',
    tags: ['set', 'necklace', 'bracelet', 'earrings', 'fuchsia', 'black', 'bestseller']
  },

  {
    id: 'kelly-green-orange-african-tube-set',
    name: 'Kelly Green Glass & Orange Synthetic Beads with African Tube Beads',
    category: 'jewelry',
    type: 'necklace-set',
    tagline: 'Set Available',
    featured: false,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260531_100506.jpeg',
    images: ['images/Resized_20260531_100506.jpeg'],
    priceFrom: 15,
    description: 'A vibrant pairing of Kelly green glass and orange synthetic beads with African tube accents.',
    details: 'Necklace 16 inches including clasp.',
    colors: ['Kelly Green', 'Orange'],
    materials: 'Glass beads, synthetic beads, African tube beads',
    orderItems: [
      { label: 'Necklace (16 in.)', price: 29 },
      { label: 'Bracelet (8 in.)', price: 16 },
      { label: 'Earrings', price: 15 }
    ],
    setPrice: 55,
    setLabel: 'Full Set (Necklace + Bracelet + Earrings)',
    tags: ['set', 'necklace', 'bracelet', 'earrings', 'green', 'orange']
  },

  {
    id: 'fun-bead-mix-glass-synthetic',
    name: 'Fun Bead Mix — Glass & Synthetic',
    category: 'jewelry',
    type: 'necklace-set',
    tagline: 'Set Available',
    featured: false,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260531_102515.jpeg',
    images: ['images/Resized_20260531_102515.jpeg'],
    priceFrom: 15,
    description: 'A playful mix of glass and synthetic beads in festive colors — full of energy and personality.',
    details: 'Necklace 16 inches including clasp.',
    colors: ['Multi-color'],
    materials: 'Glass beads, synthetic beads',
    orderItems: [
      { label: 'Necklace (16 in.)', price: 29 },
      { label: 'Bracelet (8 in.)', price: 16 },
      { label: 'Earrings', price: 15 }
    ],
    setPrice: 55,
    setLabel: 'Full Set (Necklace + Bracelet + Earrings)',
    tags: ['set', 'necklace', 'bracelet', 'earrings', 'multicolor']
  },

  /* ── CHOKERS & SINGLE NECKLACES ─────────────────────── */

  {
    id: 'glass-bead-chokers-green',
    name: 'Glass Bead Chokers — Green',
    category: 'jewelry',
    type: 'choker',
    tagline: '',
    featured: false,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260531_102540.jpeg',
    images: ['images/Resized_20260531_102540.jpeg'],
    priceFrom: 16,
    description: 'Delicate green glass bead chokers, sold as a single necklace in your choice of length.',
    details: '15–16 inches: $16. 17–21 inches: $19.',
    colors: ['Green'],
    materials: 'Glass beads',
    orderItems: [
      { label: 'Choker 15 inches', price: 16 },
      { label: 'Choker 16 inches', price: 16 },
      { label: 'Choker 17 inches', price: 19 },
      { label: 'Choker 18 inches', price: 19 },
      { label: 'Choker 19 inches', price: 19 },
      { label: 'Choker 20 inches', price: 19 },
      { label: 'Choker 21 inches', price: 19 }
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
    image: 'images/Resized_20260531_102550.jpeg',
    images: ['images/Resized_20260531_102550.jpeg'],
    priceFrom: 32,
    description: 'Multi-color glass bead chokers in a stunning array of hues. Seasonal pricing Sept–Oct.',
    details: '15–21 inches: $32. Sept & Oct: $42.',
    colors: ['Multi-color'],
    materials: 'Glass beads',
    orderItems: [
      { label: 'Choker 15 inches', price: 32 },
      { label: 'Choker 16 inches', price: 32 },
      { label: 'Choker 17 inches', price: 32 },
      { label: 'Choker 18 inches', price: 32 },
      { label: 'Choker 19 inches', price: 32 },
      { label: 'Choker 20 inches', price: 32 },
      { label: 'Choker 21 inches', price: 32 }
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
    image: 'images/Resized_20260531_102628.jpeg',
    images: ['images/Resized_20260531_102628.jpeg'],
    priceFrom: 15,
    description: 'Dainty glass seed bead necklaces available in any color — tell us your preference.',
    details: '15–18 inches: $15.',
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
    image: 'images/IMG_3530.jpeg',
    images: ['images/IMG_3530.jpeg'],
    priceFrom: 17,
    description: 'A beautiful mix of glass seed beads and 4mm glass beads, available in any color.',
    details: '15–17 inches: $17. 18–21 inches: $19.50.',
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

  /* ── TRAVEL PILLOWS ─────────────────────────────────── */

  {
    id: 'round-neck-pillow',
    name: 'Round Neck Pillow',
    category: 'pillow',
    type: 'neck-pillow',
    tagline: '',
    featured: true,
    available: true,
    paypalUrl: '',
    image: 'images/Resized_20260529_085416.jpeg',
    images: [
      'images/Resized_20260529_085416.jpeg',
      'images/Resized_20260529_091718.jpeg',
      'images/Resized_20260301_070435.jpeg'
    ],
    priceFrom: 24,
    description: '12 × 12 inches approx. Cotton fabric, machine washable, low dryer temperature. Available in 5 vibrant colors.',
    details: '12 × 12 inches. Cotton fabric, synthetic fill. Machine washable, low dryer.',
    colors: ['Lime Green', 'Orange', 'Red', 'Yellow', 'Navy'],
    colorSwatches: [
      { label: 'Lime Green', hex: '#8bc34a' },
      { label: 'Orange',     hex: '#ff6b35' },
      { label: 'Red',        hex: '#c62828' },
      { label: 'Yellow',     hex: '#fdd835' },
      { label: 'Navy',       hex: '#1565c0' }
    ],
    materials: 'Cotton fabric, synthetic fill',
    orderItems: [
      { label: 'Lime Green', price: 24 },
      { label: 'Orange',     price: 24 },
      { label: 'Red',        price: 24 },
      { label: 'Yellow',     price: 24 },
      { label: 'Navy',       price: 24 }
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
    image: 'images/Resized_20260301_063640_1_.jpeg',
    images: ['images/Resized_20260301_063640_1_.jpeg'],
    priceFrom: 24,
    description: '12 × 16 inches. Cotton fabric with synthetic fill. Machine washable, low dryer temperature. Available in 5 colors.',
    details: '12 × 16 inches. Cotton fabric, synthetic fill. Machine washable, low dryer.',
    colors: ['Fuchsia with black dots', 'Turquoise with black dots', 'White with black dots', 'Orange with black dots', 'Navy with white dots'],
    colorSwatches: [
      { label: 'Fuchsia',    hex: '#e91e8c' },
      { label: 'Turquoise',  hex: '#00acc1' },
      { label: 'White',      hex: '#f5f5f0' },
      { label: 'Orange',     hex: '#f57c00' },
      { label: 'Navy',       hex: '#1a237e' }
    ],
    materials: 'Cotton fabric, synthetic fill',
    orderItems: [
      { label: 'Fuchsia with black dots',    price: 24 },
      { label: 'Turquoise with black dots',  price: 24 },
      { label: 'White with black dots',      price: 24 },
      { label: 'Orange with black dots',     price: 24 },
      { label: 'Navy with white dots',       price: 24 }
    ],
    shipping: 9.99,
    tags: ['pillow', 'travel', 'polka dot', 'cotton']
  }

];
