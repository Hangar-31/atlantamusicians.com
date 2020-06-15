import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Components
import Layout from '../components/Layouts/Layout';
import SectionTitleBanner from '../components/Sections/SectionTitleBanner';
import { fonts, colors, contact } from '../configs/styles';

const ReactMarkdown = require('react-markdown');

const Container = styled.article`
  position: relative;
  width: 100%;
  margin: -30px auto 0 auto;
`;
const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
`;

const Column = styled.div``;

const Title1 = styled.h1`
display: flex;
align-items: center;

color: ${colors.darkBlue};
font-weight: 800;
font-size: 2.25rem;
font-family: ${fonts.biryani};
font-style: normal;
line-height: 1;
`;

const Title2 = styled.h2`
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
`;

const P = styled.p`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #747474;
`;

const PLink = styled.a`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #EC4067;
  text-decoration: underline;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

const List = styled.ul`
  padding: 0 0 0 45px;
`;

const Item = styled.li`
  margin-bottom: 15px;
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #747474;
`;

const LinkBack = styled(Link)`
  position: relative;
  border: 1px solid #EC4067;
  border-radius: 3px;
  padding: 5px 30px;
  font-family: ${fonts.montserrat};
  font-size: 1rem;
  color: #EC4067;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: #EC4067;
    color: #ffffff;
  }
`;

const LinksBottom = styled(Link)`
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


export default ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title, image, alt, content,
      },
    },
  } = data;

  const section = { title: 'Blog', content_image: image, content_image_alt: alt };

  return (
    <Layout>

      <SectionTitleBanner section={section} />

      <Container>
        <Grid>
          <Grid css={css`
            grid-column: 2 / span 10;
            padding: 15px 0;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
          `}
          >
            <Column css={css`
              grid-row: 1;
              grid-column: 1 / span 2;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            >
              <svg css={css`margin-right: 10px; width: 9px; height: 18px;`} width="9" height="18" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.18557e-07 5L5 2.18557e-07L5 10L-2.18557e-07 5Z" fill="#EC4067" />
              </svg>
              <LinkBack to="/blog">BACK</LinkBack>
            </Column>

            <Column css={css`
              grid-row: 1;
              grid-column: 11 / span 2;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            >
              <LinksBottom href={contact.facebook}>
                <svg css={css`margin-right: 15px;`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                  <path d="M11.4864 27V18.0547H8V14.5H11.4864V11.6992C11.4864 8.65625 13.65 7 16.8091 7C18.3227 7 19.6227 7.09766 20 7.14062V10.3203H17.8091C16.0909 10.3203 15.7591 11.0234 15.7591 12.0508V14.5H19.6364L19.1045 18.0547H15.7591V27" fill="white" />
                </svg>
              </LinksBottom>
              <LinksBottom href="/blog">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.7129 23.3593C21.3973 21.8851 24 18.2822 24 14.0713C24 8.54844 19.5228 4.07129 14 4.07129C8.47715 4.07129 4 8.54844 4 14.0713C4 18.2811 6.60136 21.8833 10.2843 23.3582V15.0714H7.31787L13.9986 8.64282L20.6793 15.0714H17.7129V23.3593Z" fill="white" />
                </svg>
              </LinksBottom>
            </Column>

            <Column css={css`
              grid-row: 2;
              grid-column: 3 / span 8;
            `}
            >
              <Title1>{title}</Title1>
              <ReactMarkdown
                renderers={{
                  link: PLink,
                  paragraph: P,
                  heading: Title2,
                  image: Image,
                  list: List,
                  listItem: Item,
                }}
                source={content}
              />
              <div css={css`display: flex; height: 120px; width: 100%; align-items: center; justify-content: center;`}>
                <LinksBottom href={contact.facebook}>
                  <svg css={css`margin-right: 15px;`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path d="M11.4864 27V18.0547H8V14.5H11.4864V11.6992C11.4864 8.65625 13.65 7 16.8091 7C18.3227 7 19.6227 7.09766 20 7.14062V10.3203H17.8091C16.0909 10.3203 15.7591 11.0234 15.7591 12.0508V14.5H19.6364L19.1045 18.0547H15.7591V27" fill="white" />
                  </svg>
                </LinksBottom>
                <LinksBottom href="/blog">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.7129 23.3593C21.3973 21.8851 24 18.2822 24 14.0713C24 8.54844 19.5228 4.07129 14 4.07129C8.47715 4.07129 4 8.54844 4 14.0713C4 18.2811 6.60136 21.8833 10.2843 23.3582V15.0714H7.31787L13.9986 8.64282L20.6793 15.0714H17.7129V23.3593Z" fill="white" />
                  </svg>
                </LinksBottom>
              </div>
            </Column>

          </Grid>
          <Column css={css`
              grid-column: 2 / span 10;
              margin: 30px 0 60px 0;
              background: ${colors.darkBlue};
              padding: 10px 15px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <LinksBottom href="/previous">
              <svg css={css`margin-right: 15px;`} width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-4.80825e-07 11L11 4.80825e-07L11 22L-4.80825e-07 11Z" fill="#EC4067" />
              </svg>
              Previous
            </LinksBottom>
            <LinksBottom href="/next">
              Next
              <svg css={css`margin-left: 15px;`} width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11L-9.53674e-07 4.80825e-07L7.97607e-09 22L11 11Z" fill="#EC4067" />
              </svg>
            </LinksBottom>
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const blogQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        date
        image
        alt
        content
      }
    }
  }
`;