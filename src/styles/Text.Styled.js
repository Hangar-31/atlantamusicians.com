import styled from '@emotion/styled';

export const Heading1Styled = styled.h1`
  margin: 20px 0;

  font-size: 2.4rem;
  line-height: 4rem;
  text-transform: uppercase;
`;

export const Heading2Styled = styled.h2`
  grid-column: span 12;
  padding-bottom: 10px;

  color: ${(props) => props.theme.colorBlack};
  font-weight: bold;
  font-size: 1.8rem;
  text-align: left;
  text-transform: uppercase;

  border-bottom: 1px solid ${(props) => props.theme.colorHint};
`;

export const Heading3Styled = styled.h3`
  grid-column: span 12;

  color: ${(props) => props.theme.colorHint};
  font-weight: bold;
  font-size: 1.6rem;
  text-align: left;
  text-transform: uppercase;
`;

export const ErrorMessageStyled = styled.p`
  color: ${(props) => props.theme.colorNegative};
`;

export const HintStyled = styled.p`
  max-width: 450px;
  margin: 1rem auto;

  color: ${(props) => props.theme.colorHint};
  font-size: 1.2rem;
  text-align: left;
`;

export const ActiveLinkStyled = styled.a`
  color: ${(props) => props.theme.colorActive};
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colorActiveHover};
  }
`;

export const ButtonStyled = styled.button`
  padding: 0.5rem 1.5rem;

  color: ${(props) => props.theme.colorBtnText};
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;

  background-color: ${(props) => props.theme.colorBtnBg};
  border: none;

  outline: none;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colorBtnHover};
  }

  ${(props) => props.lg
    && `
  width: 100%;
  font-size: 4.8rem;
  text-align: right;
  margin-top: 3rem;
  padding: 2rem 2.5rem;
  `}

  ${(props) => props.md
    && `
  width: 100%;
  font-size: 2.4rem;
  text-align: right;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  `}

     ${(props) => props.sm
       && `
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  `}

  ${(props) => {
    if (props.charged === undefined) return '';
    return `background-color: ${
      props.charged ? props.theme.colorNegative : props.theme.colorPositive
    }`;
  }}
`;
