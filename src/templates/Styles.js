import Link from 'gatsby-plugin-superlink';
import styled from '@emotion/styled';
import {
  fonts, colors, mq,
} from '../configs/styles';

export const Container = styled.article`
  position: relative;

  width: 100%;
  margin: -30px auto 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;

  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    grid-gap: 10px 0;
    padding-right: 15px;
    padding-left: 15px;
  }

`;

export const Column = styled.div`
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
  }
`;

export const Title1 = styled.h1`
display: flex;
align-items: center;

color: ${colors.darkBlue};
font-weight: 800;
font-size: 2.25rem;
font-family: ${fonts.biryani};
font-style: normal;
line-height: 1;

@media(max-width: ${mq.md}px) {
  font-size: 1.5rem;
}
@media(max-width: ${mq.sm}px) {
  font-size: 1.125rem;
}
@media(max-width: ${mq.xs}px) {
  font-size: 0.875rem;
}
`;

export const Title2 = styled.h2`
  display: flex;
  align-items: center;
  margin: 45px 0 30px 0;

  color: ${colors.lightBlue};
  font-weight: 800;
  font-size: 1.5rem;
  font-family: ${fonts.biryani};
  font-style: normal;
  line-height: 1;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  @media(max-width: ${mq.md}px) {
      font-size: 1.125rem;
  }
  @media(max-width: ${mq.sm}px) {
    font-size: 0.875rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 0.625rem;
  }
`;

export const P = styled.p`
  color: #747474;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};

  @media(max-width: ${mq.sm}px) {
    font-size: 0.875rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 0.625rem;
  }
`;

export const PLink = styled.a`
  color: #EC4067;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};
  text-decoration: underline;
  @media(max-width: ${mq.sm}px) {
    font-size: 0.875rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 0.625rem;
  }
`;

export const Image = styled.img`
  position: relative;

  width: 100%;
`;

export const List = styled.ul`
  padding: 0 0 0 45px;
  @media(max-width: ${mq.sm}px) {
    padding: 0 0 0 30px;
  }

  @media(max-width: ${mq.xs}px) {
   padding: 0 0 0 15px;
  }

`;

export const Item = styled.li`
  margin-bottom: 15px;

  color: #747474;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};
  @media(max-width: ${mq.sm}px) {
    margin-bottom: 10px;

    font-size: 0.875rem;
  }

  @media(max-width: ${mq.xs}px) {
    margin-bottom: 5px;

    font-size: 0.625rem;
  }
`;

export const LinkBack = styled(Link)`
  position: relative;

  padding: 5px 30px;

  color: #EC4067;
  font-size: 1rem;
  font-family: ${fonts.montserrat};
  text-decoration: none;

  border: 1px solid #EC4067;
  border-radius: 3px;

  transition: 0.2s;

  &:hover {
    color: #ffffff;

    background: #EC4067;
  }

  @media(max-width: ${mq.sm}px) {
    margin-right: -20px;
    padding: 5px;

    font-size: 0.375rem;
  }
`;


export const LinksBottom = styled(Link)`
  display: flex;
  align-items: center;

  color: #ffffff;
  font-size: 0.875rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
