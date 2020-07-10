import React from 'react';
import styled from '@emotion/styled';
import { mq } from '../../configs/styles';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;
  @media(max-width: ${mq.lg}px) {
    height: 35vh;
  }
  @media(max-width: ${mq.md}px) {
    height: 30vh;
  }
  @media(max-width: ${mq.sm}px) {
    height: 25vh;
  }
`;

const Img = styled.img`
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
`;

export default ({ section }) => (
  <Container>
    {section.list.map((image) => (
      <Img
        key={image.alt_text}
        src={image.image}
        alt={image.alt_text}
      />
    ))}
  </Container>
);
