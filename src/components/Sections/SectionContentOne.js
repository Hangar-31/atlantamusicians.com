import React from 'react';
import styled from '@emotion/styled';

const Container = styled.section`
  position: relative;

  max-width: 1170px;
  margin: 0 auto;
`;
const Content = styled.article`
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
`;

const Title = styled.h1`
display: flex;
align-items: center;

color: #469FD1;
font-weight: 800;
font-size: 30px;
font-family: Biryani;
font-style: normal;
line-height: 53px;
`;


export default ({ section }) => {
  console.log('section content-one', section);
  return (
    <Container>
      <Content>
        <Title>{section.title}</Title>
      </Content>
    </Container>
  );
};
