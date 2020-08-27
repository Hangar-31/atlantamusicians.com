import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'gatsby-plugin-superlink';
import ReactMarkdown from 'react-markdown';
import { fonts, colors, mq } from '../../configs/styles';

const Grid = styled(Link)`
  position: relative;

  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto 5px 0;

  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }

`;

const Title1 = styled.h1`
  margin: 0;

  color: ${colors.darkBlue};
  font-weight: 800;
  font-size: 1.875rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
`;

const Title2 = styled.h2`
  margin: 0;

  color: ${colors.lightBlue};
  font-weight: 800;
  font-size: 1.25rem;
  font-family: ${fonts.biryani};
`;

const P = styled.p`
  display: none;
  height: 88px;
  overflow: hidden;

  color: #747474;
  font-size: 1rem;
  font-family: ${fonts.nunitoSans};

  &:nth-of-type(1) {
    display: block;
  }
`;


const PLink = styled(Link)`
  float: right;

  color: #EC4067;
  font-size: 1rem;
  font-family: ${fonts.nunitoSans};
  text-transform: uppercase;
  text-decoration: underline;
`;


export default (link) => ({ member }) => (

  <Grid
    to={`${link}/${member.title.toLowerCase().split(' ').join('-')}`}
    css={css`grid-column: span 8; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    background: linear-gradient(360deg, #F7FAFB 0%, #F5F5F5 100%);`}
  >
    <img css={css`grid-column: span 3; width: 100%; height: 225px; height: 100%; object-fit: cover;`} src={member.image} alt={member.alt} />
    <div css={css`grid-column: span 5; padding: 15px 30px 15px 0;`}>
      <Title1>{member.title}</Title1>
      <Title2>{member.subtitle}</Title2>
      <ReactMarkdown source={member.content} renderers={{ paragraph: P }} allowedTypes={['text', 'paragraph']} />
      <PLink to={`${link}/${member.title.toLowerCase().split(' ').join('-')}`}>READ MORE...</PLink>
    </div>
  </Grid>
);
