const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  const sessionId = event.queryStringParameters && event.queryStringParameters.session_id;

  if (!sessionId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing session_id' }),
    };
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'pending', message: 'Payment not yet confirmed' }),
      };
    }

    const orderNumber = session.metadata && session.metadata.orderNumber;
    if (!orderNumber) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Order number missing from session' }),
      };
    }

    const store = getStore('ft-orders');
    const existing = await store.get(orderNumber);

    let orderData;
    if (existing) {
      orderData = JSON.parse(existing);
    } else {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Order record not found' }),
      };
    }

    // Only update if not already confirmed (idempotent)
    if (orderData.paymentStatus !== 'paid') {
      const customerEmail = (session.customer_details && session.customer_details.email) || '';
      const customerName = (session.shipping_details && session.shipping_details.name)
        || (session.customer_details && session.customer_details.name)
        || '';
      const shippingAddress = (session.shipping_details && session.shipping_details.address) || {};

      orderData.paymentStatus = 'paid';
      orderData.status = 'Payment Confirmed';
      orderData.customerEmail = customerEmail;
      orderData.customerName = customerName;
      orderData.shippingAddress = shippingAddress;
      orderData.stripeSessionId = sessionId;
      orderData.paidAt = new Date().toISOString();

      await store.set(orderNumber, JSON.stringify(orderData));

      // Index by email for order lookup
      if (customerEmail) {
        const emailKey = `email:${customerEmail.toLowerCase()}:${orderNumber}`;
        await store.set(emailKey, orderNumber);
      }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderNumber: orderData.orderNumber,
        status: orderData.status,
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        items: orderData.items,
        subtotal: orderData.subtotal,
        shipping: orderData.shipping,
        tax: orderData.tax,
        total: orderData.total,
        trackingNumber: orderData.trackingNumber || '',
        createdAt: orderData.createdAt,
      }),
    };
  } catch (err) {
    console.error('Verify session error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Could not verify payment' }),
    };
  }
};
