import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import {
  Elements, CardNumberElement, CardCvcElement, CardExpiryElement, useElements, useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { fonts, colors, mq } from '../../configs/styles';

const stripePromise = loadStripe('pk_test_Zd3IHWkCmxYa2N0qHDaPi8SE00k3qwXpOd');


const Grid = styled.div`
  position: relative;
  z-index: 2;

  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  margin: 0 auto;

  padding: 60px 0;

  background-color: #fff;

  transition: opacity 0.6s ease, z-index 0.6s 1s;



  @media(max-width: ${mq.sm}px) {
    padding: 45px 0;
  }

  @media(max-width: ${mq.xs}px) {
    padding: 0 0 30px 0;
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-column-gap: 30px;
  grid-row: 1;
  grid-template-columns: repeat(10, 1fr);
  padding: 100px 0;

  border: 1px solid #F5F5F5;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: ${mq.sm}px) {
    grid-column: span 12;
    grid-row: 1;
  }

`;
const Form = styled.form`
  display: grid;
  grid-column: 3 / span 6;
  grid-column-gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1195px;
`;


const InputText = styled.input`
  margin-bottom: 15px;
  padding: 10px 15px;

  font-size: 1rem;
  font-family: ${fonts.montserrat};

  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;

  &:focus {
    background: #ffffff;
  }

  @media(max-width: ${mq.xs}px) {
    grid-column: span 2 !important;
  }
`;
const InputSelect = styled.select`
  margin-bottom: 15px;
  padding: 10px 15px;

  font-size: 1rem;
  font-family: ${fonts.montserrat};

  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;

  &:focus {
    background: #ffffff;
  }

  @media(max-width: ${mq.xs}px) {
    grid-column: span 2 !important;
  }
`;

const StripeWrapper = styled.label`
margin-bottom: 15px;
  padding: 10px 15px;

  font-size: 1rem;
  font-family: ${fonts.montserrat};

  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;

  &:focus {
    background: #ffffff;
  }
`;

const ButtonSubmit = styled.button`
  padding: 15px;

  color: #EC4067;
  font-size: 1rem;
  font-family: ${fonts.montserrat};

  background: transparent;
  border: 1px solid #EC4067;
  border-radius: 4px;

  cursor: pointer;

  transition: all 0.2s;


  &:hover {
    color: #ffffff;

    background: ${colors.darkBlue};
  }

  @media(max-width: ${mq.xs}px) {
    grid-column: span 2 !important;
  }
`;
const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontFamily: 'Montserrat',
      color: '#424770',
      backgroundColor: '#f5f5f5',
      fontSize: '16px',
      '::placeholder': {
        color: '#989898',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const SectionCreditCard = ({ section, ThankYou }) => {
  const [status, setStatus] = useState();
  const elements = useElements();
  const stripe = useStripe();
  const [forInput, setFor] = useState('');
  const [name, setName] = useState('');
  const [postal, setPostal] = useState('');
  const [amount, setAmount] = useState('');
  const submitForm = async (ev) => {
    ev.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const valid = ev.target.reportValidity();
    if (!valid) {
      setStatus('ERROR');
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name,
        address: {
          postal_code: postal,
        },
      },
    });

    const info = await fetch(
      '/.netlify/functions/payment',
      {
        method: 'POST',
        body: JSON.stringify({
          amount,
          paymentMethod: payload.paymentMethod,
          type: section.payment_type,
          description: section.title,
          extraData: {
            ...(section.payment_type === 'payment' ? section.list.reduce((acc, { name: key, text }) => {
              acc[key] = text;
              return acc;
            }) : {}),
            for: forInput,
            name,
          },
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      },
    );
    const data = await info.json();
    if (payload.error || data.status !== 'succeeded') {
      setStatus('ERROR');
      // eslint-disable-next-line no-console
      console.log('[error]', payload.error, data.status);
    } else {
      setStatus('SUCCESS');
    }
  };
  return (
    <div css={css`
        position: relative;

        max-width: 1440px;
        margin: 0 auto;
      `}
    >
      <Grid css={css`
        ${status === 'SUCCESS' && `
          opacity: 0;
          z-index: 1;
        `}
      `}
      >
        <FormContainer>
          <Form
            onSubmit={submitForm}
          >
            {section.payment_type === 'PAYMENT' && <InputText css={css`grid-column: span 6; margin-bottom: 3rem;`} name="for" placeholder="Name or Invoice Number" required value={forInput} onChange={(e) => setFor(e.target.value)} />}
            {section.payment_type === 'DONATE' && (
            <InputSelect
              css={css`grid-column: span 6; margin-bottom: 3rem;`}
              name="for"
              required
              value={forInput}
              onChange={(e) => setFor(e.target.value)}
            >
              <option selected="true" disabled="disabled" value="">Select Program</option>
              {section.list.map((i) => <option value={i.name}>{i.name}</option>)}
            </InputSelect>
            )}
            <InputText css={css`grid-column: span 6;`} name="name" placeholder="Name on Card" value={name} onChange={(e) => setName(e.target.value)} />
            <StripeWrapper css={css`grid-column: span 4;`}>
              <CardNumberElement
                id="cardNumber"


                options={ELEMENT_OPTIONS}
              />
            </StripeWrapper>
            <StripeWrapper css={css`grid-column: span 2;`}>
              <CardCvcElement
                id="cvc"
                options={ELEMENT_OPTIONS}
              />
            </StripeWrapper>
            <StripeWrapper css={css`grid-column: span 3;`}>
              <CardExpiryElement
                id="expiry"
                options={ELEMENT_OPTIONS}
              />
            </StripeWrapper>
            <InputText css={css`grid-column: span 3;`} name="zip" placeholder="Zip Code" required value={postal} onChange={(e) => setPostal(e.target.value)} />
            <InputText css={css`grid-column: span 6; margin: 2rem 0;`} name="amount" placeholder="Amount" required value={amount} onChange={(e) => setAmount(e.target.value)} />


            <ButtonSubmit type="submit" css={css`grid-column:  span 6;`}>
              Send
            </ButtonSubmit>

            {status === 'ERROR' && <p css={css`grid-column:  span 6;`}>Ooops! There was an error.</p>}
          </Form>
        </FormContainer>

      </Grid>
      <div css={css`
        position: absolute;

        opacity: 1;

        transition: opacity 0.6s ease, z-index 0.6s 1s;

        top: 30px;

        z-index: 1;
        ${status === 'SUCCESS' && `
          opacity: 1;
          z-index: 2;
        `}
      `}
      >
        {ThankYou}
      </div>
    </div>
  );
};

// SectionCreditCard.defaultProps = {
// prop: "test"
// };
// SectionCreditCard.propTypes = {
// prop: PropTypes.string
// };

export default (props) => (
  <Elements stripe={stripePromise}>
    <SectionCreditCard {...props} />
  </Elements>
);
