import styled from '@emotion/styled';

const imageUrl = process.env.NEXT_PUBLIC_ASSET_URL;

export const FormValidatedStyled = styled.form`
  ${(props) => (
    props.submitted
      && `
  *:invalid, .StripeElement--invalid, *:invalid + span  {
    border-color:  ${props.theme.colorNegative};
  }
`
  )}
  input:focus, select:focus, .StripeElement--focus {
    border-color: transparent;
    box-shadow: 0 0 3px 1px ${(props) => props.theme.colorBtnBg};
  }
`;
export const BoxFormStyled = styled.section`
  width: 100%;
  max-width: 69.0rem;
  margin: 9rem auto;

  text-align: center;

  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: .0rem .0rem 3.0rem rgba(0, 0, 0, 0.1);


  :before {
    display: block;
    content: '';

    height: 16rem;

    background-image: url('${(props) => imageUrl + props.theme.imageBanner}');
    background-position: center center;
    background-size: cover;
  }


`;

export const SpacerStyled = styled.hr`
  height: 0;
  margin: 1rem;

  border-color: transparent;
`;

export const LabelStyled = styled.label`
  position: relative;

  display: block;
  width: 100%;
  margin: 1rem auto;

  color: ${(props) => props.theme.colorHint};

  font-weight: bold;
  line-height: 2rem;
  text-align: left;
  text-transform: uppercase;
  vertical-align: middle;

  cursor: pointer;

  user-select: none;
`;

export const ActiveLabelStyled = styled(LabelStyled)`
  position: relative;

  display: block;

  cursor: text;


  ::before {
    position: absolute;
    top: 1rem;
    left: 4rem;
    z-index: 3;

    display: block;


    padding: 0;

    font-size: 7px;

    transform: scale(1.75);

    transition: 0.2s;
    content: '${(props) => props.text}';

    ${(props) => props.active === true
      && `
      background: white;
      transform: scale(1.1);
      padding: 0 1rem;
      top: -0.9rem;
      left: 0.7rem;
    `}
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 1rem 2rem;

  font-weight: bold;

  font-size: 1.2rem;
  line-height: 2rem;

  border: 0.1rem solid ${(props) => props.theme.colorDisabled};
  outline: none;
`;
export const TextareaStyled = styled.textarea`
  width: 100%;
  min-height: 9rem;
  padding: 1rem 2rem;

  font-weight: bold;

  font-size: 1.2rem;
  line-height: 2rem;

  border: 0.1rem solid ${(props) => props.theme.colorDisabled};
  outline: none;
`;

export const CheckBoxInputStyled = styled.input`
  position: absolute;
  left: -3rem;

  width: 0;

  height: 0;
  margin: 0;

  opacity: 0;
  &:checked ~ span {
    background-color: ${(props) => props.theme.colorDarkGray};
  }
`;

export const CheckBoxCheckStyled = styled.span`
  display: inline-block;
  width: 1.4rem;

  height: 1.4rem;
  margin: 0 10px 3px 0;

  line-height: 2rem;
  vertical-align: middle;

  border: 1px solid ${(props) => props.theme.colorDarkGray};
  content: '';
`;

export const TextDisclaimerStyled = styled.blockquote`
  height: 100px;
  margin: 0;
  overflow-y: scroll;

  color: ${(props) => props.theme.colorHint};
  text-align: left;
`;

export const FormQuestionStyled = styled.p`
  display: flex;
  align-items: center;
  height: 4rem;
  margin: 1rem;

  color: ${(props) => props.theme.colorHint};
  font-weight: bold;
  line-height: 2rem;
  text-align: left;
  vertical-align: middle;
`;

export const SelectStyled = styled.select`
  width: 100%;
  padding: 1rem 2rem;

  font-weight: bold;

  font-size: 1.2rem;
  line-height: 2rem;

  background: ${(props) => props.theme.colorWhite};

  border: 0.1rem solid ${(props) => props.theme.colorDisabled};
  border-radius: 0;
  outline: none;
  cursor: pointer;

  appearance: none;

  &:invalid {
    color: ${(props) => props.theme.colorHint};
  }

  [disabled] {
    color: ${(props) => props.theme.colorHint};
  }

  /* For IE <= 11 */
  select::-ms-expand {
    display: none;
  }
`;

export const SelectArrowStyled = styled.i`
  position: absolute;
  top: 1.9rem;
  right: 1rem;
  z-index: 1;

  display: block;
  width: 0;
  height: 0;

  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.theme.colorDisabled} transparent transparent
    transparent;
  content: '';
`;

export const BoxStyled = styled.div`
  grid-column: span 12;
  margin: 1rem 0;
  padding: 2rem 2.5rem;

  color: ${(props) => props.theme.colorHint};

  text-align: left;

  border: 0.1rem solid ${(props) => props.theme.colorDisabled};
`;

export const NoteStyled = styled.p`
  color: ${(props) => props.theme.colorHint};
  text-align: left;
`;

export const FormGroupStyled = styled.div`
  display: grid;
  grid-column: span 12;
  grid-column-gap: 15px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 2rem;

  border: 0.1rem solid ${(props) => props.theme.colorDisabled};

  ${LabelStyled}, ${FormQuestionStyled} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
