/* eslint-disable no-param-reassign */
import styled from '@emotion/styled';
import React from 'react';
import { css } from '@emotion/core';
import { ProviderDirectory } from '../usicians-directory/context-directory';
import MemberDirectory from '../usicians-directory';
import filterSortDirectory from '../usicians-directory/filterSortDirectory';
import Article from './Card';
import { fonts, mq, colors } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
  margin: 30px 0;
`;

const Grid = styled.div`
  position: relative;

  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;
  max-width: 1195px;
  margin: 0 auto;

  font-family: ${fonts.nunitoSans};

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }
`;


export default ({ tags, blogs, link }) => {
  // console.log('link', link);
  const tagFilter = (filters, search, articles) => {
    const filteringOn = {
      search: !!search,
      tags: !!filters.tags.length,
    };
    return filterSortDirectory(filteringOn, articles.map((article) => {
      article.matches = {
        tags: false,
        search: false,
      };
      // if there is a search term, check if it's in the name
      if (filteringOn.search) {
        // check if the search term is in any of the parts
        article.matches.search = article.title.toLowerCase().includes(search.toLowerCase());
      }
      if (filteringOn.tags) {
        const matchedTags = filters.tags
          .filter((c) => (article.postTags || []).find((t) => t === c));
        // does the article match ALL the tags
        article.matches.tags = matchedTags.length === filters.tags.length;
      }
      return article;
    }));
  };
  const filters = { tags: tags.map(({ tag }) => ({ code: tag, name: tag })) };

  return (
    <ProviderDirectory filterData={filters}>
      <Container>
        <Grid
          css={css`
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;

            font-family: 'Nunito Sans';
          `}
        >
          <div
            css={css`
              grid-column: 2 / span 10;
              p {
                height: 88px;
              }

              @media(max-width: ${mq.lg}px) {
                h1 {
                  font-size: 1.5rem;
                }
                h2 {
                  font-size: 1rem;
                }
                p {
                  height: 78px;

                  font-size: 0.875rem;
                }
              }

              @media(max-width: ${mq.sm}px) {
                h1 {
                  font-size: 1.25rem;
                }
                h2 {
                  font-size: 0.925rem;
                }
                p {
                  font-size: 0.875rem;
                }
                a {
                  font-size: 0.875rem;
                }
              }


              @media(max-width: ${mq.xs}px) {
                grid-column: span 12;
                padding: 0 5px 5px 5px;

                img {
                  grid-column: span 12;
                  grid-row: 1;
                  height: 250px;
                  padding: 15px;
                }

                img + div {
                  grid-column: span 12;
                  grid-row: 2;
                  padding: 0 15px 15px 15px;
                }
              }

              aside {
                button {
                  background-color: ${colors.blue};
                }
              }

              nav {
                padding: 15px 0 0 0;
              }

              article > div {

                @media(max-width: ${mq.md}px) {
                  padding: 15px;
                }
              }

              article:nth-of-type(odd) {
                background: linear-gradient(360deg, #F7FAFB 0%, #F5F5F5 100%);
              }
            `}
          >
            <MemberDirectory
              members={blogs.map(({ childMarkdownRemark: { frontmatter } }) => frontmatter)}
              filter={tagFilter}
              Card={Article(link)}
            />
          </div>
        </Grid>
      </Container>
    </ProviderDirectory>

  );
};
