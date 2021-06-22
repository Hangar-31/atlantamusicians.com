// This file is for developing the actual stripe charge,
// which is transpiled into the /lambda folder
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const statusCode = 200;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = function Handler(event, context, callback) {
  // don't do anything unless you are posting to the endpoint
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: '',
    });
    return;
  }


  // parse the body contents into the data variable
  const data = JSON.parse(event.body);
  console.log('data', data);

  const now = new Date();
  const seconds = 30;
  const before = new Date(now.getTime() - seconds * 1000);
  const after = new Date(now.getTime() + seconds * 1000);
  // check that the request has happened in the last minute
  if (data.date < before || data.date > after) {
    console.log('not date');
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ status: 'incorrect date' }),
    });
    return;
  }
  delete data.date;

  // make sure we have all required data
  if (!data.paymentMethod || !data.amount) {
    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({ status: 'missing-information' }),
    });
    return;
  }
  stripe.paymentIntents.create(
    {
      currency: 'usd',
      amount: data.amount * 100,
      payment_method: data.paymentMethod.id,
      description: data.description,
      metadata: data.extraData,
      confirmation_method: 'automatic',
      confirm: true,
      receipt_email: data.email,
    },
    (err, charge) => {
      if (err !== null) {
        // eslint-disable-next-line no-console
        console.log(err);
      }

      const status = charge === null || charge.status !== 'succeeded'
        ? 'failed'
        : charge.status;

      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({ status }),
      });
    },
  );
};
