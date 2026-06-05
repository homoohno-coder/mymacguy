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

  const email = (body.email || '').trim().toLowerCase();
  const orderNumber = (body.orderNumber || '').trim().toUpperCase();

  if (!email || !orderNumber) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Email and order number are required' }),
    };
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid email format' }),
    };
  }

  try {
    const store = getStore('ft-orders');

    // Verify email owns this order
    const emailKey = `email:${email}:${orderNumber}`;
    const storedOrderNumber = await store.get(emailKey);

    if (!storedOrderNumber) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'No order found. Please check your order number and email address.' }),
      };
    }

    const orderJson = await store.get(storedOrderNumber);
    if (!orderJson) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Order data not found.' }),
      };
    }

    const order = JSON.parse(orderJson);

    // Status progression for display
    const STATUS_ORDER = [
      'Order Received',
      'Payment Confirmed',
      'In Production',
      'Shipped',
      'Delivered',
    ];

    const statusIndex = STATUS_ORDER.indexOf(order.status);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderNumber: order.orderNumber,
        status: order.status,
        statusIndex,
        statusSteps: STATUS_ORDER,
        items: order.items,
        subtotal: order.subtotal,
        shipping: order.shipping,
        tax: order.tax,
        total: order.total,
        trackingNumber: order.trackingNumber || '',
        createdAt: order.createdAt,
        shippingCity: (order.shippingAddress && order.shippingAddress.city) || '',
        shippingState: (order.shippingAddress && order.shippingAddress.state) || '',
      }),
    };
  } catch (err) {
    console.error('Get order error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not retrieve order. Please try again.' }),
    };
  }
};
