const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { items } = body;
  if (!Array.isArray(items) || items.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Cart is empty' }) };
  }

  for (const item of items) {
    if (!item.name || typeof item.price !== 'number' || item.price <= 0 || !item.qty || item.qty <= 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid cart item data' }) };
    }
  }

  // Generate order number
  const ts = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).substr(2, 4).toUpperCase();
  const orderNumber = `FT-${ts}-${rnd}`;

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 3.50;
  const tax = subtotal * 0.1025;

  // Store initial order record in Netlify Blobs before creating Stripe session
  const orderData = {
    orderNumber,
    status: 'Order Received',
    paymentStatus: 'pending',
    customerName: '',
    customerEmail: '',
    shippingAddress: {},
    items: items.map(i => ({
      productId: i.productId || '',
      name: i.name,
      variant: i.variant || '',
      price: i.price,
      qty: i.qty,
      image: i.image || '',
    })),
    subtotal,
    shipping,
    tax,
    total: subtotal + shipping + tax,
    createdAt: new Date().toISOString(),
    trackingNumber: '',
  };

  try {
    const store = getStore('ft-orders');
    await store.set(orderNumber, JSON.stringify(orderData));
  } catch (blobErr) {
    console.error('Failed to store order before checkout:', blobErr.message);
    return { statusCode: 500, body: JSON.stringify({ error: 'Could not create order record' }) };
  }

  const siteUrl = (process.env.URL || 'http://localhost:8888').replace(/\/$/, '');

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        ...items.map(item => ({
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.variant ? `${item.name} — ${item.variant}` : item.name,
              ...(item.image ? { images: [item.image] } : {}),
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.qty,
        })),
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Shipping (USA Flat Rate)' },
            unit_amount: 350,
          },
          quantity: 1,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'CA Sales Tax (10.25%)' },
            unit_amount: Math.round(subtotal * 0.1025 * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      shipping_address_collection: { allowed_countries: ['US'] },
      metadata: { orderNumber },
      success_url: `${siteUrl}/funtravel/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/funtravel/cancel.html`,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url, orderNumber }),
    };
  } catch (err) {
    console.error('Stripe error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not create checkout session' }),
    };
  }
};
