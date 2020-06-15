import styled from '@emotion/styled';
import { Heading3Styled } from './Text.Styled';


export const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: span 6;
  justify-content: space-between;

  background: ${(props) => props.theme.colorWhite};
`;

export const CardDescriptionStyled = styled.p`
  height: 100%;
  max-height: 4.8em;
  padding: 0 3.5rem;
  overflow: hidden;

  color: ${(props) => props.theme.colorHint};
`;

export const CardArrow = styled.button`
  display: block;
  width: 0;
  height: 0;
  margin: 0 auto;
  padding: 0;

  background: none;
  border-width: 0.5rem 1.1rem;
  border-style: solid;
  border-color: ${(props) => props.theme.colorHint} transparent transparent
    transparent;
  outline: none;
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;
export const ContainerFile = styled.div`
  width: 90%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleStyled = styled(Heading3Styled)`
  padding: 0 2.5rem;

  color: ${(props) => (props.fileView === true ? props.theme.colorWhite : 'inherit')};
  text-align: ${(props) => (props.fileView === true ? 'center' : 'left')};
`;
