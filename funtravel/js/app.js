/* Fun Travel — Shared App JS */

/* ── BUILD IMAGE CATALOG FROM PRODUCTS ─────────────────── */

function buildImageCatalog() {
  const seen = new Set();
  const imgs = [];
  (window.FT && window.FT.PRODUCTS || []).forEach(p => {
    (p.images || [p.image]).forEach(src => {
      if (src && !seen.has(src)) {
        seen.add(src);
        imgs.push({ src, caption: p.name });
      }
    });
  });
  return imgs;
}

let allImages = [];
let currentIdx = 0;

/* ── LIGHTBOX ──────────────────────────────────────── */

function openLightbox(src, caption) {
  if (!allImages.length) allImages = buildImageCatalog();
  currentIdx = allImages.findIndex(i => i.src === src);
  if (currentIdx < 0) {
    allImages.push({ src, caption: caption || src });
    currentIdx = allImages.length - 1;
  } else if (caption) {
    allImages[currentIdx].caption = caption;
  }
  renderLightbox();
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  startCanvas('lb-canvas');
  buildThumbs();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display = 'none';
  document.body.style.overflow = '';
}

function renderLightbox() {
  const img = document.getElementById('lb-img');
  const cap = document.getElementById('lb-caption');
  const ctr = document.getElementById('lb-counter');
  if (!img) return;
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = allImages[currentIdx].src;
    img.alt = allImages[currentIdx].caption;
    img.onload = () => { img.style.opacity = 1; };
    if (cap) cap.textContent = allImages[currentIdx].caption;
    if (ctr) ctr.textContent = (currentIdx + 1) + ' / ' + allImages.length;
    highlightThumb();
  }, 150);
}

function lbNext() { currentIdx = (currentIdx + 1) % allImages.length; renderLightbox(); }
function lbPrev() { currentIdx = (currentIdx - 1 + allImages.length) % allImages.length; renderLightbox(); }

function buildThumbs() {
  const strip = document.getElementById('lb-thumbs');
  if (!strip) return;
  strip.innerHTML = '';
  allImages.forEach((img, i) => {
    const t = document.createElement('img');
    t.src = img.src;
    t.style.cssText = 'width:50px;height:50px;object-fit:cover;border-radius:3px;cursor:pointer;border:2px solid transparent;transition:border-color 0.2s;flex-shrink:0;';
    t.onclick = () => { currentIdx = i; renderLightbox(); };
    t.id = 'thumb-' + i;
    strip.appendChild(t);
  });
  highlightThumb();
}

function highlightThumb() {
  allImages.forEach((_, i) => {
    const t = document.getElementById('thumb-' + i);
    if (t) t.style.borderColor = i === currentIdx ? '#c9a84c' : 'transparent';
  });
}

document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox') &&
      document.getElementById('lightbox').style.display !== 'none') {
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft')  lbPrev();
    if (e.key === 'Escape')     closeLightbox();
  }
  if (document.getElementById('order-panel') &&
      document.getElementById('order-panel').style.display !== 'none') {
    if (e.key === 'Escape') closeOrder();
  }
});

// Touch swipe
document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  if (lb) {
    let tx = 0;
    lb.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const d = tx - e.changedTouches[0].screenX;
      if (Math.abs(d) > 50) { d > 0 ? lbNext() : lbPrev(); }
    }, { passive: true });
    lb.addEventListener('click', function(e) { if (e.target === this) closeLightbox(); });
  }

  // Nav active state
  setNavActive();

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Shop filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.product-card, .pillow-card').forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
      // Show/hide section headers
      const jewelrySection = document.getElementById('jewelry-section');
      const pillowsSection = document.getElementById('pillows-section');
      if (jewelrySection) {
        jewelrySection.style.display = (filter === 'all' || filter === 'jewelry') ? '' : 'none';
      }
      if (pillowsSection) {
        pillowsSection.style.display = (filter === 'all' || filter === 'pillow') ? '' : 'none';
      }
    });
  });
});

/* ── NAV ACTIVE STATE ─────────────────────────────────── */

function setNavActive() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const hPage = href.split('/').pop() || 'index.html';
    if (hPage === page ||
        (page === '' && hPage === 'index.html') ||
        (page.startsWith('product') && hPage === 'shop.html')) {
      a.classList.add('active');
    }
  });
}

/* ── CANVAS ANIMATION ─────────────────────────────────── */

const canvasAnims = new Map();

function startCanvas(id) {
  if (canvasAnims.has(id)) return;
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const palette = ['#c9714a','#c9a84c','#7a9e7e','#e8997a','#e8cf8a','#4a4540'];
  const particles = Array.from({ length: 16 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 80 + Math.random() * 150,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    color: palette[Math.floor(Math.random() * palette.length)],
    alpha: 0.12 + Math.random() * 0.2
  }));

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -p.r) p.x = canvas.width + p.r;
      if (p.x > canvas.width + p.r) p.x = -p.r;
      if (p.y < -p.r) p.y = canvas.height + p.r;
      if (p.y > canvas.height + p.r) p.y = -p.r;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, p.color + Math.floor(p.alpha * 255).toString(16).padStart(2,'0'));
      g.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
  canvasAnims.set(id, raf);
}

/* ── GALLERY PAGE ─────────────────────────────────────── */

function openGallery() {
  if (!allImages.length) allImages = buildImageCatalog();
  const grid = document.getElementById('gallery-grid');
  const page = document.getElementById('gallery-page');
  if (!grid || !page) return;
  grid.innerHTML = '';
  allImages.forEach((img, i) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'break-inside:avoid;margin-bottom:1rem;cursor:zoom-in;position:relative;overflow:hidden;border-radius:4px;';
    wrap.innerHTML = `
      <img src="${img.src}" alt="${img.caption}" style="width:100%;display:block;border-radius:4px;transition:transform 0.4s,opacity 0.3s;"
           onmouseover="this.style.transform='scale(1.04)';this.style.opacity='.85'"
           onmouseout="this.style.transform='scale(1)';this.style.opacity='1'">
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.7));padding:.8rem .7rem .5rem;opacity:0;transition:opacity .3s;"
           onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
        <p style="color:white;font-size:.72rem;font-family:'Jost',sans-serif;margin:0;">${img.caption}</p>
      </div>`;
    wrap.onclick = () => { closeGallery(); openLightbox(img.src, img.caption); };
    grid.appendChild(wrap);
  });
  page.style.display = 'block';
  document.body.style.overflow = 'hidden';
  startCanvas('gallery-canvas');
}

function closeGallery() {
  const page = document.getElementById('gallery-page');
  if (page) page.style.display = 'none';
  document.body.style.overflow = '';
}

/* ── ORDER MODAL ──────────────────────────────────────── */

let currentOrderId = null;

function openOrder(productId, btnEl) {
  const products = window.FT && window.FT.PRODUCTS || [];
  const product  = products.find(p => p.id === productId);
  if (!product) return;

  currentOrderId = productId;

  const imgEl  = document.getElementById('order-img');
  const nameEl = document.getElementById('order-product-name');
  if (imgEl)  imgEl.src = product.image || '';
  if (nameEl) nameEl.textContent = product.name;

  const itemsDiv = document.getElementById('order-items');
  if (!itemsDiv) return;
  itemsDiv.innerHTML = '';

  if (product.setPrice) {
    itemsDiv.appendChild(createOrderRow('full-set', product.setLabel, product.setPrice, true));
    const div = document.createElement('p');
    div.style.cssText = 'font-size:.7rem;color:rgba(255,255,255,.3);letter-spacing:.1em;text-transform:uppercase;margin:.4rem 0;';
    div.textContent = '— or pick individually —';
    itemsDiv.appendChild(div);
  }

  (product.orderItems || []).forEach((item, i) => {
    itemsDiv.appendChild(createOrderRow('item-' + i, item.label, item.price, false));
  });

  updateOrderSummary();

  const panel = document.getElementById('order-panel');
  if (panel) {
    panel.style.display = 'block';
    panel.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    startCanvas('order-canvas');
  }
}

function openOrderWithColor(productId, radioGroupName, btnEl) {
  const sel = document.querySelector(`input[name="${radioGroupName}"]:checked`);
  if (!sel) {
    document.querySelectorAll(`input[name="${radioGroupName}"]`).forEach(o => {
      const lbl = o.closest('.color-option');
      if (lbl) { lbl.style.borderColor = '#c9714a'; setTimeout(() => { lbl.style.borderColor = ''; }, 1200); }
    });
    alert('Please select a color first.');
    return;
  }
  openOrder(productId, btnEl);
  // Pre-check the matching color
  document.querySelectorAll('#order-items input[type=checkbox]').forEach(cb => {
    const labelText = (cb.closest('label') || cb.parentElement).querySelector('span:nth-child(2)');
    if (labelText && labelText.textContent.toLowerCase().includes(sel.value.toLowerCase())) {
      cb.checked = true;
    }
  });
  updateOrderSummary();
}

function createOrderRow(id, label, price, checked) {
  const row = document.createElement('label');
  row.style.cssText = 'display:flex;align-items:center;gap:.8rem;padding:.65rem .9rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:3px;cursor:pointer;transition:background .2s;margin-bottom:.4rem;';
  row.onmouseover = () => { row.style.background = 'rgba(255,255,255,.08)'; };
  row.onmouseout  = () => { row.style.background = 'rgba(255,255,255,.04)'; };
  row.innerHTML = `
    <input type="checkbox" id="${id}" ${checked ? 'checked' : ''} onchange="updateOrderSummary()"
      style="width:16px;height:16px;accent-color:#c9a84c;flex-shrink:0;cursor:pointer;">
    <span style="flex:1;color:rgba(255,255,255,.85);font-size:.85rem;">${label}</span>
    <span style="color:#c9a84c;font-weight:500;font-size:.88rem;">$${typeof price === 'number' ? price.toFixed(2) : price}</span>`;
  return row;
}

function updateOrderSummary() {
  const checks   = document.querySelectorAll('#order-items input[type=checkbox]:checked');
  const summBox  = document.getElementById('order-summary-box');
  const summList = document.getElementById('order-summary-list');
  const totalEl  = document.getElementById('order-total');
  if (!summBox) return;

  if (checks.length === 0) { summBox.style.display = 'none'; return; }
  summBox.style.display = 'block';

  let total = 0;
  const lines = [];
  checks.forEach(cb => {
    const parent = cb.closest('label') || cb.parentElement;
    const lbl  = parent.querySelector('span:nth-child(2)');
    const prEl = parent.querySelector('span:nth-child(3)');
    const price = parseFloat((prEl ? prEl.textContent : '0').replace('$', ''));
    total += price;
    lines.push(`❆ ${lbl ? lbl.textContent : ''} — $${price.toFixed(2)}`);
  });

  const products = window.FT && window.FT.PRODUCTS || [];
  const product  = products.find(p => p.id === currentOrderId);
  const shipping = 3.50;
  const tax      = total * 0.1025; // CA sales tax — Palm Springs 10.25%
  lines.push(`Shipping — $${shipping.toFixed(2)}`);
  lines.push(`Sales Tax (10.25% CA) — $${tax.toFixed(2)}`);
  total += shipping + tax;

  if (summList) summList.innerHTML = lines.join('<br>');
  if (totalEl)  totalEl.textContent = '$' + total.toFixed(2);
}

function closeOrder() {
  const panel = document.getElementById('order-panel');
  if (panel) panel.style.display = 'none';
  document.body.style.overflow = '';
}

function sendOrder() {
  const fname   = (document.getElementById('cf-fname')   || {}).value?.trim() || '';
  const lname   = (document.getElementById('cf-lname')   || {}).value?.trim() || '';
  const email   = (document.getElementById('cf-email')   || {}).value?.trim() || '';
  const phone   = (document.getElementById('cf-phone')   || {}).value?.trim() || '';
  const address = (document.getElementById('cf-address') || {}).value?.trim() || '';
  const notes   = (document.getElementById('cf-notes')   || {}).value?.trim() || '';

  if (!fname || !email || !address) {
    alert('Please fill in your name, email, and shipping address.');
    return;
  }

  const checks = document.querySelectorAll('#order-items input[type=checkbox]:checked');
  if (checks.length === 0) { alert('Please select at least one item.'); return; }

  const products = window.FT && window.FT.PRODUCTS || [];
  const product  = products.find(p => p.id === currentOrderId);
  const productName = product ? product.name : currentOrderId;

  const selectedItems = [];
  let subtotal = 0;
  checks.forEach(cb => {
    const parent = cb.closest('label') || cb.parentElement;
    const lbl   = (parent.querySelector('span:nth-child(2)') || {}).textContent || '';
    const price = parseFloat(((parent.querySelector('span:nth-child(3)') || {}).textContent || '0').replace('$', ''));
    subtotal += price;
    selectedItems.push(`  • ${lbl} — $${price.toFixed(2)}`);
  });

  const shipping = 3.50;
  const tax      = subtotal * 0.1025; // CA sales tax — Palm Springs 10.25%
  const total    = subtotal + shipping + tax;

  const subject = encodeURIComponent(`Order: ${productName} — Fun Travel`);
  const body = encodeURIComponent(
`Hi Elena,

I would like to place an order from Fun Travel.

NAME: ${fname} ${lname}
EMAIL: ${email}
PHONE: ${phone || 'Not provided'}
SHIPPING ADDRESS: ${address}

PRODUCT: ${productName}

SELECTED ITEMS:
${selectedItems.join('\n')}

SUBTOTAL: $${subtotal.toFixed(2)}
SHIPPING: $${shipping.toFixed(2)}
SALES TAX (10.25% CA): $${tax.toFixed(2)}
TOTAL: $${total.toFixed(2)}

NOTES: ${notes || 'None'}

Please reply with payment instructions.

Thank you,
${fname} ${lname}`
  );

  closeOrder();
  window.location.href = `mailto:picswelove2024@gmail.com?subject=${subject}&body=${body}`;
}
