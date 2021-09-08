import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';

// Components
import { Helmet } from 'react-helmet';
import Layout from '../components/Layouts/Layout';
import SectionBanner from '../components/Sections/SectionBanner';
import {
  colors, mq,
} from '../configs/styles';
import {
  List, LinkBack, Container, P, Grid, Column, LinksBottom, Title1, PLink, Title2, Item, Image,
} from './Styles';

const ReactMarkdown = require('react-markdown');

export default ({ data, pageContext }) => {
  const {
    markdownRemark: {
      frontmatter: {
        title, image, alt, content,
      },
    },
  } = data;

  const section = { title: 'Press', content_image: image, content_image_alt: alt };

  return (
    <Layout>

      <Helmet>
        <title>{`${title} | Press`}</title>
        <meta name="description" content={content} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="og:image" content={`https://atlantamusicians.com${image}`} />
      </Helmet>

      <SectionBanner section={section} />

      <Container>
        <Grid>
          <Grid css={css`
            grid-column: 2 / span 10;
            padding: 15px 0;

            box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
          `}
          >
            <Column css={css`
              display: flex;
              grid-column: 1 / span 2 !important;
              grid-row: 1;
              justify-content: center;
              align-items: center;
              svg {
                width: 9px;
                height: 18px;
                margin-right: 10px;
                @media(max-width: ${mq.sm}px) {
                  height: 12px;
                  margin-right: 5px;
                }
              }
            `}
            >
              <svg width="9" height="18" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-2.18557e-07 5L5 2.18557e-07L5 10L-2.18557e-07 5Z" fill="#EC4067" />
              </svg>
              <LinkBack to="/press">BACK</LinkBack>
            </Column>

            <Column css={css`
              display: flex;
              grid-column: 11 / span 2 !important;
              grid-row: 1;
              justify-content: center;
              align-items: center;
              svg {
                margin-right: 15px;
                @media(max-width: ${mq.sm}px) {
                  width: 14px;
                  height: 14px;
                  margin-right: 10px;
                }
              }
            `}
            >
              {typeof window !== 'undefined'
              && (
              <>
                <LinksBottom href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`} target="_blank">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path d="M11.4864 27V18.0547H8V14.5H11.4864V11.6992C11.4864 8.65625 13.65 7 16.8091 7C18.3227 7 19.6227 7.09766 20 7.14062V10.3203H17.8091C16.0909 10.3203 15.7591 11.0234 15.7591 12.0508V14.5H19.6364L19.1045 18.0547H15.7591V27" fill="white" />
                  </svg>
                </LinksBottom>
                <LinksBottom href={`mailto:?subject=AFM Article | ${title}&body=${window.location}`}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.7129 23.3593C21.3973 21.8851 24 18.2822 24 14.0713C24 8.54844 19.5228 4.07129 14 4.07129C8.47715 4.07129 4 8.54844 4 14.0713C4 18.2811 6.60136 21.8833 10.2843 23.3582V15.0714H7.31787L13.9986 8.64282L20.6793 15.0714H17.7129V23.3593Z" fill="white" />
                  </svg>
                </LinksBottom>
              </>
              )}
            </Column>

            <Column css={css`
              grid-column: 3 / span 8;
              grid-row: 2;
              @media(max-width: ${mq.xs}px) {
                grid-column: 2 / span 10;
              }
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
              {typeof window !== 'undefined'
              && (
              <div css={css`display: flex; justify-content: center; align-items: center; width: 100%; height: 120px;`}>
                <LinksBottom href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}`} target="_blank">
                  <svg css={css`margin-right: 15px;`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path d="M11.4864 27V18.0547H8V14.5H11.4864V11.6992C11.4864 8.65625 13.65 7 16.8091 7C18.3227 7 19.6227 7.09766 20 7.14062V10.3203H17.8091C16.0909 10.3203 15.7591 11.0234 15.7591 12.0508V14.5H19.6364L19.1045 18.0547H15.7591V27" fill="white" />
                  </svg>
                </LinksBottom>
                <LinksBottom href={`mailto:?subject=AFM Article | ${title}&body=${window.location}`}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="13.5" fill="#EC4067" stroke="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.7129 23.3593C21.3973 21.8851 24 18.2822 24 14.0713C24 8.54844 19.5228 4.07129 14 4.07129C8.47715 4.07129 4 8.54844 4 14.0713C4 18.2811 6.60136 21.8833 10.2843 23.3582V15.0714H7.31787L13.9986 8.64282L20.6793 15.0714H17.7129V23.3593Z" fill="white" />
                  </svg>
                </LinksBottom>
              </div>
              )}
            </Column>

          </Grid>
          <Column css={css`
              display: flex;
              grid-column: 2 / span 10;
              justify-content: space-between;
              align-items: center;
              margin: 30px 0 60px 0;
              padding: 10px 15px;

              background: ${colors.darkBlue};

              @media(max-width: ${mq.sm}px) {
                margin: 15px 0 30px;
              }
            `}
          >
            {pageContext.previousLink
              ? (
                <LinksBottom to={pageContext.previousLink}>
                  <svg css={css`margin-right: 15px;`} width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-4.80825e-07 11L11 4.80825e-07L11 22L-4.80825e-07 11Z" fill="#EC4067" />
                  </svg>
                  Previous
                </LinksBottom>
              )
              : <div />}
            {pageContext.nextLink
            && (
              <LinksBottom to={pageContext.nextLink}>
                Next
                <svg css={css`margin-left: 15px;`} width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 11L-9.53674e-07 4.80825e-07L7.97607e-09 22L11 11Z" fill="#EC4067" />
                </svg>
              </LinksBottom>
            )}
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
