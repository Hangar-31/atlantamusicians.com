import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors, mq } from '../../configs/styles';

const Form = styled.form`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

// const Text = styled.p`
//   color: #fff;
//   font-size: 1.15rem;
//   font-family: Blinker;
// `;

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

const Textbox = styled.textarea`
  min-height: 212px;
  margin-bottom: 15px;
  padding: 10px 15px;

  font-size: 1rem;
  font-family: ${fonts.montserrat};

  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;

  resize: vertical;

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

  transition: 0.2s;

  &:hover {
    color: #ffffff;

    background: ${colors.darkBlue};
  }

  @media(max-width: ${mq.xs}px) {
    grid-column: span 2 !important;
  }
`;

const ContactForm = () => {
  const [status, setStatus] = useState();
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  console.log(status);
  return (
    <Form
      onSubmit={submitForm}
      action="https://formspree.io/f/mleolwvg"
      method="POST"
    >
      <InputText name="Name" label="Name" placeholder="*Name" required />
      <InputText name="Phone" label="Phone" placeholder="Phone" />
      <InputText css={css`grid-column: span 2;`} name="Email" label="Email" placeholder="*Email" required />
      <InputText css={css`grid-column: span 2;`} name="Subject" label="Subject" placeholder="Subject" />
      <Textbox
        name="Message"
        label="*Message"
        placeholder="*Message"
        rows="10"
        required
        css={css`grid-column: span 2;`}
      />
      {status === 'SUCCESS' ? (
        <ButtonSubmit type="submit" css={css`grid-column: 2 / span 1; background: ${colors.blue}; color: #ffffff; pointer-events: none;`}>
          Submitted Successfully!
        </ButtonSubmit>
      ) : (
        <ButtonSubmit type="submit" css={css`grid-column: 2 / span 1;`}>
          Send
        </ButtonSubmit>
      )}
      {status === 'ERROR' && (
      <ButtonSubmit type="submit" css={css`grid-column: 2 / span 1; background: ${colors.blue}; color: #ffffff; pointer-events: none;`}>
        Error, Please Try Again
      </ButtonSubmit>
      )}
    </Form>
  );
};

// ContactForm.defaultProps = {
// prop: "test"
// };
// ContactForm.propTypes = {
// prop: PropTypes.string
// };

export default ContactForm;
