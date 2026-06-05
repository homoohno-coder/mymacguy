/* Fun Travel — Cart */

const FTCart = (() => {
  const KEY = 'ft-cart-v1';

  function load() {
    try { return JSON.parse(sessionStorage.getItem(KEY)) || []; }
    catch { return []; }
  }

  function save(items) {
    sessionStorage.setItem(KEY, JSON.stringify(items));
    _updateBadge();
  }

  function getItems() { return load(); }

  function addItem(productId, variant, qty) {
    qty = qty || 1;
    const products = (window.FT && window.FT.PRODUCTS) || [];
    const product = products.find(p => p.id === productId);
    if (!product) return false;
    const items = load();
    const cartId = `${productId}::${variant.label}`;
    const existing = items.find(i => i.cartId === cartId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        cartId,
        productId,
        name: product.name,
        variant: variant.label,
        price: variant.price,
        image: product.image || '',
        qty,
      });
    }
    save(items);
    return true;
  }

  function removeItem(cartId) {
    save(load().filter(i => i.cartId !== cartId));
  }

  function updateQty(cartId, qty) {
    qty = parseInt(qty, 10);
    if (isNaN(qty) || qty <= 0) { removeItem(cartId); return; }
    const items = load();
    const item = items.find(i => i.cartId === cartId);
    if (item) { item.qty = qty; save(items); }
  }

  function clear() {
    sessionStorage.removeItem(KEY);
    _updateBadge();
  }

  function count() {
    return load().reduce((s, i) => s + i.qty, 0);
  }

  function _updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const n = count();
    badge.textContent = n;
    badge.style.display = n > 0 ? 'inline-flex' : 'none';
  }

  function updateCartBadge() { _updateBadge(); }

  return { getItems, addItem, removeItem, updateQty, clear, count, updateCartBadge };
})();

/* ── NAV CART ICON ──────────────────────────────────── */

(function injectCartNav() {
  function inject() {
    const navLinks = document.querySelector('nav .nav-links');
    if (!navLinks || document.getElementById('nav-cart-link')) return;
    const li = document.createElement('li');
    li.innerHTML =
      '<a href="cart.html" class="nav-cart-link" id="nav-cart-link" title="Cart">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
        '<span id="cart-badge" class="cart-badge" style="display:none">0</span>' +
      '</a>';
    navLinks.appendChild(li);
    FTCart.updateCartBadge();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

/* ── ADD TO CART FLOW ───────────────────────────────── */

function addToCartClick(productId, btnEl) {
  const products = (window.FT && window.FT.PRODUCTS) || [];
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Sets: always add full set
  if (product.setPrice) {
    FTCart.addItem(productId, { label: product.setLabel || 'Full Set', price: product.setPrice });
    _cartToast(product.name + ' — Full Set added');
    return;
  }

  // Single orderItem: add directly
  if (product.orderItems && product.orderItems.length === 1) {
    FTCart.addItem(productId, product.orderItems[0]);
    _cartToast(product.name + ' added');
    return;
  }

  // Multiple variants: show picker
  if (product.orderItems && product.orderItems.length > 1) {
    _showVariantPicker(product, btnEl);
    return;
  }

  // Fallback
  FTCart.addItem(productId, { label: 'Item', price: product.priceFrom || 0 });
  _cartToast(product.name + ' added');
}

function _showVariantPicker(product, btnEl) {
  const existing = document.getElementById('ft-variant-picker');
  if (existing) existing.remove();

  const isColor = product.category === 'pillow';
  const label = isColor ? 'Color' : 'Length';

  const picker = document.createElement('div');
  picker.id = 'ft-variant-picker';
  picker.className = 'ft-variant-picker';
  picker.innerHTML =
    `<div class="ft-picker-title">Select ${label}</div>` +
    `<div class="ft-picker-options">` +
    product.orderItems.map((item, i) =>
      `<label class="ft-picker-option">` +
        `<input type="radio" name="ft-var" value="${i}"${i === 0 ? ' checked' : ''}>` +
        `<span>${item.label} &mdash; <strong>$${item.price.toFixed(2)}</strong></span>` +
      `</label>`
    ).join('') +
    `</div>` +
    `<div class="ft-picker-actions">` +
      `<button class="ft-picker-cancel" onclick="document.getElementById('ft-variant-picker').remove()">Cancel</button>` +
      `<button class="ft-picker-add" onclick="_confirmVariantAdd('${product.id}')">Add to Cart</button>` +
    `</div>`;

  document.body.appendChild(picker);

  // Position near button
  requestAnimationFrame(() => {
    const br = btnEl.getBoundingClientRect();
    const pr = picker.getBoundingClientRect();
    let top = br.top - pr.height - 8 + window.scrollY;
    if (top < window.scrollY + 8) top = br.bottom + 8 + window.scrollY;
    let left = br.left + window.scrollX;
    if (left + pr.width > window.innerWidth - 8) left = window.innerWidth - pr.width - 8;
    if (left < 8) left = 8;
    picker.style.top = top + 'px';
    picker.style.left = left + 'px';
  });

  setTimeout(() => {
    document.addEventListener('click', function _close(e) {
      const p = document.getElementById('ft-variant-picker');
      if (!p) { document.removeEventListener('click', _close); return; }
      if (!p.contains(e.target) && e.target !== btnEl) {
        p.remove();
        document.removeEventListener('click', _close);
      }
    });
  }, 50);
}

function _confirmVariantAdd(productId) {
  const picker = document.getElementById('ft-variant-picker');
  if (!picker) return;
  const radio = picker.querySelector('input[name="ft-var"]:checked');
  if (!radio) return;
  const products = (window.FT && window.FT.PRODUCTS) || [];
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const variant = product.orderItems[parseInt(radio.value, 10)];
  FTCart.addItem(productId, variant);
  picker.remove();
  _cartToast(`${product.name} — ${variant.label} added`);
}

function _cartToast(msg) {
  const existing = document.getElementById('ft-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'ft-toast';
  toast.className = 'ft-toast';
  toast.textContent = msg;
  const link = document.createElement('a');
  link.href = 'cart.html';
  link.className = 'ft-toast-link';
  link.textContent = 'View Cart →';
  toast.appendChild(link);
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('ft-toast-show'));
  setTimeout(() => {
    toast.classList.remove('ft-toast-show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
