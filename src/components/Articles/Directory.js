/* eslint-disable no-param-reassign */
import styled from '@emotion/styled';
import React from 'react';
import { ProviderDirectory } from '../usicians-directory/context-directory';
import MemberDirectory from '../usicians-directory';
import filterSortDirectory from '../usicians-directory/filterSortDirectory';
import Article from './Card';
import { fonts } from '../../configs/styles';

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

  div:nth-of-type(2) {
    div {
      margin-bottom: 30px;
    }
  }
`;


export default ({ tags, blogs, link }) => {
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
        <Grid>
          <MemberDirectory
            members={blogs.map(({ childMarkdownRemark: { frontmatter } }) => frontmatter)}
            filter={tagFilter}
            Card={Article(link)}
          />
        </Grid>
      </Container>
    </ProviderDirectory>

  );
};
