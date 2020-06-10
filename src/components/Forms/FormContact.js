import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors } from '../../configs/styles';

const Form = styled.form`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: 1fr 1fr;
`;

const Text = styled.p`
  font-size: 1.15rem;
  font-family: Blinker;
  color: #fff;
`;

const InputText = styled.input`
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  padding: 10px 15px;
  margin-bottom: 15px;
  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;

  &:focus {
    background: #ffffff;
  }
`;

const Textbox = styled.textarea`
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  padding: 10px 15px;
  margin-bottom: 15px;
  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  resize: vertical;
  min-height: 212px;

  &:focus {
    background: #ffffff;
  }
`;

const ButtonSubmit = styled.button`
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  padding: 15px;
  color: #EC4067;
  background: transparent;
  border: 1px solid #EC4067;
  border-radius: 4px;
  transition: 0.2s;

  cursor: pointer;

  &:hover {
    color: #ffffff;
    background: ${colors.darkBlue};
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
  return (
    <Form
      onSubmit={submitForm}
      action="https://formspree.io/xgenavdv"
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
        <Text>Thanks!</Text>
      ) : (
        <ButtonSubmit type="submit" css={css`grid-column: 2 / span 1;`}>
          Send
        </ButtonSubmit>
      )}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
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
