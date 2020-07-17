// This file is for developing the actual stripe charge,
// which is transpiled into the /lambda folder
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const statusCode = 200;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = function (event, context, callback) {
  // don't do anything unless you are posting to the endpoint
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: '',
    });
  }

  // parse the body contents into the data variable
  const data = JSON.parse(event.body);
  console.log(data);

  // make sure we have all required data
  if (!data.paymentMethod || !data.amount) {
    console.error('Required information is missing.');

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
    },
    (err, charge) => {
      if (err !== null) {
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
