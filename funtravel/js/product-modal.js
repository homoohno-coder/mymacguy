/* Fun Travel — Product Detail Modal
   Replaces the generic lightbox with a full product-detail experience
   when any product image is clicked on shop.html.
*/

(function () {
  'use strict';

  /* ── State ──────────────────────────────────────────── */
  let _product = null;
  let _imgIdx  = 0;
  let _touchX  = null;
  let _overlay = null;
  const TAX = 0.1025;

  /* ── Sample reviews (conversion element) ───────────── */
  const REVIEWS = [
    { name: 'Margaret S.', location: 'Palm Springs, CA', rating: 5, date: 'April 2026',
      text: 'Absolutely stunning craftsmanship. The beads are vibrant and every piece has that handmade warmth you can feel. Elena is incredibly talented.' },
    { name: 'Jennifer K.', location: 'Austin, TX', rating: 5, date: 'March 2026',
      text: 'I bought three sets and gave two as gifts. Everyone asked where they came from. Lightweight, colorful, and priced so reasonably for the quality.' },
    { name: 'Lisa M.', location: 'New York, NY', rating: 5, date: 'March 2026',
      text: 'The travel pillow is the best I have ever owned. It packs flat, washes beautifully, and the polka dot fabric is adorable. Will order again.' },
    { name: 'Carol B.', location: 'San Diego, CA', rating: 5, date: 'February 2026',
      text: 'Received my choker necklace and it is perfect. The color is exactly as shown, and it arrived quickly and well packed. Highly recommend Elena.' },
  ];

  /* ── Public API ─────────────────────────────────────── */
  window.openProductModal = function (productId) {
    const products = (window.FT && window.FT.PRODUCTS) || [];
    const product  = products.find(p => p.id === productId);
    if (!product) { console.warn('PDM: product not found:', productId); return; }

    _product = product;
    _imgIdx  = 0;

    _ensureOverlay();
    _populate(product);
    _show();

    // Update URL for shareability + SEO
    const cleanUrl = 'product.html?id=' + encodeURIComponent(productId);
    history.pushState({ pdm: productId }, product.name, cleanUrl);
  };

  window.closeProductModal = function () {
    if (!_overlay) return;
    _overlay.classList.remove('pdm-visible');
    document.body.style.overflow = '';
    // Restore URL
    history.back();
  };

  /* ── Overlay construction (once) ───────────────────── */
  function _ensureOverlay() {
    if (document.getElementById('pdm-overlay')) {
      _overlay = document.getElementById('pdm-overlay');
      return;
    }

    _overlay = document.createElement('div');
    _overlay.id = 'pdm-overlay';
    _overlay.className = 'pdm-overlay';
    _overlay.setAttribute('role', 'dialog');
    _overlay.setAttribute('aria-modal', 'true');

    _overlay.innerHTML = `
<div class="pdm-container" id="pdm-container">

  <!-- Close + Breadcrumb -->
  <div class="pdm-topbar">
    <nav class="pdm-breadcrumb">
      <a href="shop.html">Shop</a>
      <span class="pdm-bc-sep">›</span>
      <span id="pdm-bc-cat"></span>
      <span class="pdm-bc-sep">›</span>
      <span id="pdm-bc-name"></span>
    </nav>
    <button class="pdm-close-btn" onclick="closeProductModal()" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Two-column layout -->
  <div class="pdm-layout">

    <!-- LEFT: Gallery -->
    <div class="pdm-gallery">
      <div class="pdm-main-wrap" id="pdm-main-wrap">
        <img id="pdm-main-img" class="pdm-main-img" src="" alt="" onclick="pdmZoom()">
        <div class="pdm-zoom-hint" id="pdm-zoom-hint">Click to zoom</div>
        <button class="pdm-nav pdm-nav-prev" onclick="pdmNavImg(-1)" aria-label="Previous image">&#8249;</button>
        <button class="pdm-nav pdm-nav-next" onclick="pdmNavImg(1)"  aria-label="Next image">&#8250;</button>
      </div>
      <div class="pdm-thumbs" id="pdm-thumbs"></div>
      <a id="pdm-full-link" href="#" class="pdm-full-link">View Full Product Page →</a>
    </div>

    <!-- RIGHT: Info -->
    <div class="pdm-info">

      <!-- Badges -->
      <div class="pdm-badges">
        <span class="pdm-badge pdm-badge-made">✦ Handmade by Elena</span>
        <span class="pdm-badge pdm-badge-swiss">☩ Swiss-Inspired Artisan</span>
      </div>

      <p id="pdm-cat-label" class="pdm-cat-label"></p>
      <h1 id="pdm-name" class="pdm-name"></h1>

      <div id="pdm-availability" class="pdm-avail"></div>

      <!-- Price block -->
      <div id="pdm-price" class="pdm-price-block"></div>

      <!-- SKU -->
      <p id="pdm-sku" class="pdm-sku"></p>

      <!-- Description -->
      <p id="pdm-description" class="pdm-desc"></p>

      <!-- Materials row -->
      <div class="pdm-spec-row" id="pdm-materials-row">
        <span class="pdm-spec-label">Materials</span>
        <span id="pdm-materials" class="pdm-spec-val"></span>
      </div>

      <!-- Variants -->
      <div id="pdm-variants" class="pdm-variants"></div>

      <!-- Quantity -->
      <div class="pdm-qty-row">
        <span class="pdm-spec-label">Quantity</span>
        <div class="pdm-qty-ctrl">
          <button class="pdm-qty-btn" onclick="pdmChangeQty(-1)" aria-label="Decrease">−</button>
          <input type="number" id="pdm-qty" class="pdm-qty-input" value="1" min="1" max="10" aria-label="Quantity">
          <button class="pdm-qty-btn" onclick="pdmChangeQty(1)" aria-label="Increase">+</button>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="pdm-actions">
        <button class="pdm-btn-cart" id="pdm-btn-cart" onclick="pdmAddToCart()">Add to Cart</button>
        <button class="pdm-btn-buy"  id="pdm-btn-buy"  onclick="pdmBuyNow()">Buy Now →</button>
      </div>

      <!-- Trust row -->
      <div class="pdm-trust">
        <span class="pdm-trust-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Secure Checkout
        </span>
        <span class="pdm-trust-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M12 5l7 7-7 7"/></svg>
          Ships USA Only
        </span>
        <span class="pdm-trust-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
          Easy Returns
        </span>
      </div>

      <!-- Accordion: Shipping -->
      <div class="pdm-accordion">
        <button class="pdm-acc-btn" onclick="pdmAcc(this)">
          Shipping Information
          <svg class="pdm-acc-icon" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="pdm-acc-body">
          <p><strong>$3.50 flat rate</strong> on all orders. Ships within the USA only.</p>
          <p>Elena handcrafts each piece to order. Most orders ship within <strong>3–5 business days</strong>.</p>
          <p>You will receive a Stripe receipt by email upon payment.</p>
        </div>
      </div>

      <!-- Accordion: Returns -->
      <div class="pdm-accordion">
        <button class="pdm-acc-btn" onclick="pdmAcc(this)">
          Returns &amp; Exchanges
          <svg class="pdm-acc-icon" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="pdm-acc-body">
          <p>Returns accepted within <strong>14 days</strong> for damaged or defective items.</p>
          <p>Because every piece is handmade to order, exchanges are offered in lieu of returns where possible.</p>
          <p>Contact <a href="mailto:picswelove2024@gmail.com" style="color:var(--terra)">picswelove2024@gmail.com</a> to arrange.</p>
        </div>
      </div>

    </div><!-- /pdm-info -->
  </div><!-- /pdm-layout -->

  <!-- Reviews -->
  <div class="pdm-reviews-section">
    <div class="pdm-section-head">
      <h2 class="pdm-section-title">Customer Reviews</h2>
      <div class="pdm-stars-summary">
        <span class="pdm-stars">★★★★★</span>
        <span class="pdm-rating-text">5.0 · 4 reviews</span>
      </div>
    </div>
    <div class="pdm-reviews-grid" id="pdm-reviews-grid"></div>
  </div>

  <!-- Related Products -->
  <div class="pdm-related-section" id="pdm-related-section">
    <h2 class="pdm-section-title">You May Also Like</h2>
    <div class="pdm-related-grid" id="pdm-related-grid"></div>
  </div>

</div><!-- /pdm-container -->`;

    document.body.appendChild(_overlay);

    // Close on outside click
    _overlay.addEventListener('click', function (e) {
      if (e.target === _overlay) closeProductModal();
    });

    // Keyboard nav
    document.addEventListener('keydown', function (e) {
      if (!_overlay || !_overlay.classList.contains('pdm-visible')) return;
      if (e.key === 'Escape') closeProductModal();
      if (e.key === 'ArrowLeft')  pdmNavImg(-1);
      if (e.key === 'ArrowRight') pdmNavImg(1);
    });

    // Swipe support
    const mainWrap = document.getElementById('pdm-main-wrap');
    if (mainWrap) {
      mainWrap.addEventListener('touchstart', function (e) {
        _touchX = e.touches[0].clientX;
      }, { passive: true });
      mainWrap.addEventListener('touchend', function (e) {
        if (_touchX === null) return;
        const dx = e.changedTouches[0].clientX - _touchX;
        if (Math.abs(dx) > 40) pdmNavImg(dx < 0 ? 1 : -1);
        _touchX = null;
      });
    }

    // Back button
    window.addEventListener('popstate', function (e) {
      if (_overlay && _overlay.classList.contains('pdm-visible')) {
        _overlay.classList.remove('pdm-visible');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Populate modal with product data ───────────────── */
  function _populate(product) {
    const imgs = (product.images && product.images.length) ? product.images : [product.image];

    // Breadcrumb
    document.getElementById('pdm-bc-cat').textContent =
      product.category === 'pillow' ? 'Travel Pillows' : 'Jewelry';
    document.getElementById('pdm-bc-name').textContent =
      product.name.length > 32 ? product.name.substr(0, 30) + '…' : product.name;

    // Gallery
    const mainImg = document.getElementById('pdm-main-img');
    mainImg.src = imgs[0];
    mainImg.alt = product.name;

    const thumbsEl = document.getElementById('pdm-thumbs');
    if (imgs.length > 1) {
      thumbsEl.innerHTML = imgs.map((src, i) =>
        `<img class="pdm-thumb${i === 0 ? ' pdm-thumb-active' : ''}" src="${src}" alt="${product.name} ${i+1}"
             onclick="pdmSetImg(${i})" onerror="this.style.display='none'">`
      ).join('');
      thumbsEl.style.display = 'flex';
    } else {
      thumbsEl.innerHTML = '';
      thumbsEl.style.display = 'none';
    }

    // Nav arrows: hide if only 1 image
    ['pdm-nav-prev', 'pdm-nav-next'].forEach(cls => {
      const btn = document.querySelector('.' + cls);
      if (btn) btn.style.display = imgs.length > 1 ? 'flex' : 'none';
    });

    // Full page link
    const fullLink = document.getElementById('pdm-full-link');
    if (fullLink) {
      fullLink.href = 'product.html?id=' + product.id;
    }

    // Info
    document.getElementById('pdm-cat-label').textContent =
      product.category === 'pillow' ? 'Travel Pillows' : 'Handcrafted Jewelry';

    document.getElementById('pdm-name').textContent = product.name;
    document.getElementById('pdm-sku').textContent = 'SKU: ' + product.id;
    document.getElementById('pdm-description').textContent = product.description || '';
    document.getElementById('pdm-materials').textContent = product.materials || '—';

    // Availability
    const availEl = document.getElementById('pdm-availability');
    availEl.innerHTML = product.available !== false
      ? '<span class="pdm-avail-yes">● In Stock</span>'
      : '<span class="pdm-avail-no">● Currently Unavailable</span>';

    // Price
    _renderPrice(product);

    // Variants
    _renderVariants(product);

    // Reset qty
    const qtyEl = document.getElementById('pdm-qty');
    if (qtyEl) qtyEl.value = 1;

    // Reviews
    _renderReviews();

    // Related
    _renderRelated(product);
  }

  function _renderPrice(product) {
    const el = document.getElementById('pdm-price');
    if (product.setPrice) {
      el.innerHTML =
        `<span class="pdm-price-from">From <strong>$${product.priceFrom}.00</strong></span>` +
        `<span class="pdm-price-set">Full Set — <strong>$${product.setPrice}</strong></span>`;
    } else if (product.orderItems && product.orderItems.length > 0) {
      const prices = product.orderItems.map(i => i.price);
      const lo = Math.min(...prices);
      const hi = Math.max(...prices);
      el.innerHTML = lo === hi
        ? `<span class="pdm-price-main"><strong>$${lo.toFixed(2)}</strong></span>`
        : `<span class="pdm-price-main"><strong>$${lo.toFixed(2)}</strong> – <strong>$${hi.toFixed(2)}</strong></span>`;
    } else {
      el.innerHTML = `<span class="pdm-price-main"><strong>$${(product.priceFrom || 0).toFixed(2)}</strong></span>`;
    }
    if (product.shipping) {
      el.innerHTML += `<span class="pdm-price-ship">+ $${product.shipping.toFixed(2)} shipping</span>`;
    }
  }

  function _renderVariants(product) {
    const el = document.getElementById('pdm-variants');
    if (!product.orderItems || product.orderItems.length === 0) {
      el.innerHTML = '';
      return;
    }

    const isColor  = product.category === 'pillow';
    const isSet    = !!product.setPrice;
    const label    = isColor ? 'Select Color' : isSet ? 'Select Item' : 'Select Length';
    const swatches = product.colorSwatches || [];

    el.innerHTML =
      `<div class="pdm-variant-label">${label}</div>` +
      `<div class="pdm-variant-options">` +
      product.orderItems.map((item, i) => {
        const swatch = swatches.find(s => s.label === item.label);
        const swatchEl = swatch
          ? `<span class="pdm-swatch" style="background:${swatch.hex}"></span>`
          : '';
        return `<label class="pdm-var-opt${i === 0 ? ' pdm-var-opt-checked' : ''}">` +
          `<input type="radio" name="pdm-var" value="${i}"${i === 0 ? ' checked' : ''} onchange="pdmOnVariantChange(this)">` +
          swatchEl +
          `<span class="pdm-var-text">${item.label}</span>` +
          `<span class="pdm-var-price">$${item.price.toFixed(2)}</span>` +
          `</label>`;
      }).join('') +
      `</div>`;

    // If it's a set, add a "Full Set" option prepended
    if (isSet) {
      const setOpt =
        `<label class="pdm-var-opt pdm-var-opt-set" id="pdm-set-opt">` +
        `<input type="radio" name="pdm-var" value="set" onchange="pdmOnVariantChange(this)">` +
        `<span class="pdm-var-text">Full Set</span>` +
        `<span class="pdm-var-price">$${product.setPrice}</span>` +
        `</label>`;
      el.querySelector('.pdm-variant-options').insertAdjacentHTML('afterbegin', setOpt);
    }
  }

  function _renderReviews() {
    const grid = document.getElementById('pdm-reviews-grid');
    if (!grid) return;
    grid.innerHTML = REVIEWS.map(r =>
      `<div class="pdm-review">` +
        `<div class="pdm-review-top">` +
          `<span class="pdm-review-stars">${'★'.repeat(r.rating)}</span>` +
          `<span class="pdm-review-date">${r.date}</span>` +
        `</div>` +
        `<p class="pdm-review-text">"${r.text}"</p>` +
        `<p class="pdm-review-author">— ${r.name}, ${r.location}</p>` +
      `</div>`
    ).join('');
  }

  function _renderRelated(product) {
    const products = (window.FT && window.FT.PRODUCTS) || [];
    const related = products
      .filter(p => p.id !== product.id && p.category === product.category && p.available !== false)
      .slice(0, 4);

    const sectionEl = document.getElementById('pdm-related-section');
    const gridEl    = document.getElementById('pdm-related-grid');
    if (!gridEl) return;

    if (!related.length) {
      if (sectionEl) sectionEl.style.display = 'none';
      return;
    }
    if (sectionEl) sectionEl.style.display = 'block';

    gridEl.innerHTML = related.map(p => {
      const price = p.setPrice ? `From $${p.priceFrom}` : `From $${p.priceFrom}`;
      return `<div class="pdm-related-card">` +
        `<div class="pdm-related-img-wrap" onclick="openProductModal('${p.id}')">` +
          `<img class="pdm-related-img" src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">` +
        `</div>` +
        `<div class="pdm-related-info">` +
          `<p class="pdm-related-name">${p.name}</p>` +
          `<p class="pdm-related-price">${price}</p>` +
          `<button class="pdm-related-add" onclick="pdmRelatedAdd('${p.id}', event)">Quick Add</button>` +
        `</div>` +
      `</div>`;
    }).join('');
  }

  /* ── Show / hide ────────────────────────────────────── */
  function _show() {
    document.body.style.overflow = 'hidden';
    _overlay.classList.add('pdm-visible');
    // Scroll to top of modal
    const container = document.getElementById('pdm-container');
    if (container) container.scrollTop = 0;
  }

  /* ── Image navigation ───────────────────────────────── */
  window.pdmNavImg = function (dir) {
    if (!_product) return;
    const imgs = (_product.images && _product.images.length) ? _product.images : [_product.image];
    _imgIdx = (_imgIdx + dir + imgs.length) % imgs.length;
    pdmSetImg(_imgIdx);
  };

  window.pdmSetImg = function (idx) {
    if (!_product) return;
    const imgs = (_product.images && _product.images.length) ? _product.images : [_product.image];
    _imgIdx = idx;
    const mainImg = document.getElementById('pdm-main-img');
    if (mainImg) {
      mainImg.style.opacity = '0.5';
      setTimeout(() => {
        mainImg.src = imgs[_imgIdx];
        mainImg.style.opacity = '1';
      }, 100);
    }
    // Update thumb active state
    document.querySelectorAll('.pdm-thumb').forEach((t, i) => {
      t.classList.toggle('pdm-thumb-active', i === _imgIdx);
    });
  };

  window.pdmZoom = function () {
    if (!_product) return;
    const imgs = (_product.images && _product.images.length) ? _product.images : [_product.image];
    // Use existing lightbox for zoom
    if (typeof openLightbox === 'function') {
      openLightbox(imgs[_imgIdx], _product.name);
    }
  };

  /* ── Quantity ───────────────────────────────────────── */
  window.pdmChangeQty = function (dir) {
    const input = document.getElementById('pdm-qty');
    if (!input) return;
    const val = Math.max(1, Math.min(10, parseInt(input.value || 1) + dir));
    input.value = val;
  };

  /* ── Variant change ─────────────────────────────────── */
  window.pdmOnVariantChange = function (radio) {
    document.querySelectorAll('.pdm-var-opt').forEach(l => l.classList.remove('pdm-var-opt-checked'));
    if (radio.closest('.pdm-var-opt')) {
      radio.closest('.pdm-var-opt').classList.add('pdm-var-opt-checked');
    }
  };

  function _getSelectedVariant() {
    if (!_product) return null;
    const radio = document.querySelector('input[name="pdm-var"]:checked');
    if (!radio) return null;

    if (radio.value === 'set') {
      return { label: _product.setLabel || 'Full Set', price: _product.setPrice };
    }

    const idx = parseInt(radio.value, 10);
    return _product.orderItems && _product.orderItems[idx] ? _product.orderItems[idx] : null;
  }

  /* ── Add to cart / Buy now ──────────────────────────── */
  window.pdmAddToCart = function () {
    if (!_product) return;
    const variant = _getSelectedVariant();
    if (!variant) {
      alert('Please select an option above.');
      return;
    }
    const qty = parseInt(document.getElementById('pdm-qty').value || 1);

    if (typeof FTCart !== 'undefined') {
      FTCart.addItem(_product.id, variant, qty);
      if (typeof _cartToast === 'function') {
        _cartToast(_product.name + ' — ' + variant.label + ' added');
      }
    }
  };

  window.pdmBuyNow = function () {
    if (!_product) return;
    const variant = _getSelectedVariant();
    if (!variant) {
      alert('Please select an option above.');
      return;
    }
    const qty = parseInt(document.getElementById('pdm-qty').value || 1);

    if (typeof FTCart !== 'undefined') {
      FTCart.addItem(_product.id, variant, qty);
    }
    closeProductModal();
    window.location.href = 'cart.html';
  };

  window.pdmRelatedAdd = function (productId, e) {
    e.stopPropagation();
    const products = (window.FT && window.FT.PRODUCTS) || [];
    const product  = products.find(p => p.id === productId);
    if (!product) return;

    if (product.setPrice) {
      if (typeof FTCart !== 'undefined') {
        FTCart.addItem(productId, { label: product.setLabel || 'Full Set', price: product.setPrice });
      }
      if (typeof _cartToast === 'function') _cartToast(product.name + ' added');
    } else if (product.orderItems && product.orderItems.length === 1) {
      if (typeof FTCart !== 'undefined') FTCart.addItem(productId, product.orderItems[0]);
      if (typeof _cartToast === 'function') _cartToast(product.name + ' added');
    } else {
      // Open the modal instead so they can pick a variant
      openProductModal(productId);
    }
  };

  /* ── Accordion ──────────────────────────────────────── */
  window.pdmAcc = function (btn) {
    const body = btn.nextElementSibling;
    const icon = btn.querySelector('.pdm-acc-icon');
    const open = body.classList.toggle('pdm-acc-open');
    if (icon) icon.style.transform = open ? 'rotate(180deg)' : '';
    btn.classList.toggle('pdm-acc-active', open);
  };

})();
