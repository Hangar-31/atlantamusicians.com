import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors, mq } from '../../configs/styles';

import FormContact from '../Forms/FormContact';

const Container = styled.article`
  position: relative;

  width: 100%;
  margin: 0 auto;
`;
const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;

  @media(max-width: ${mq.sm}px) {
    padding: 45px 0;
  }

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
    padding: 0 0 30px 0;
  }
`;

const Column = styled.div``;

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const Item = styled.li`
  margin-bottom: 45px;

  @media(max-width: ${mq.sm}px) {
    margin-bottom: 30px;

    text-align: center;
  }
`;

const Title = styled.h4`
  margin: 0;

  color: ${colors.lightBlue};
  font-family: ${fonts.biryani};
`;

const Text = styled.p`
  margin-top: 0;

  font-family: ${fonts.nunitoSans};
`;

export default ({ section }) => (
  <Container
    css={css`
        background: ${section.background_color_toggle ? 'linear-gradient(180deg, #F5F5F5 0%, #F7FAFB 100%);' : 'none'}
      `}
  >
    <Grid>
      <Column css={css`
          grid-column: 2 / span 4;
          grid-row: 1;

          @media(max-width: ${mq.sm}px) {
            grid-column: 2 / span 10;
            grid-row: 1;
          }
        `}
      >
        <List>
          <Item>
            <Title>
              Office Hours:
            </Title>
            <Text>
              {section.hours}
            </Text>
          </Item>
          <Item>
            <Title>
              Phone:
            </Title>
            <Text>
              {section.phone}
            </Text>
          </Item>
          <Item>
            <Title>
              Email:
            </Title>
            <Text>
              {section.email}
            </Text>
          </Item>
          <Item>
            <Title>
              Address:
            </Title>
            {section.address.split('  ').map((text) => (
              <Text css={css`margin-bottom: 0;`}>{text}</Text>
            ))}
          </Item>
        </List>
      </Column>
      <Column css={css`
          grid-column: 6 / span 6;
          grid-row: 1;

          @media(max-width: ${mq.sm}px) {
            grid-column: 2 / span 10;
            grid-row: 2;
            padding-top: 60px;
          }

          @media(max-width: ${mq.xs}px) {
            grid-column: 1 / span 12;
            grid-row: 2;
            padding: 0 15px;
          }
        `}
      >
        <FormContact />
      </Column>
    </Grid>
  </Container>
);
