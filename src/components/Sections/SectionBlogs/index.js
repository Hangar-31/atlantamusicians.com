/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React, {
  useContext, useEffect, Children, useState, useRef,
} from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { css } from '@emotion/core';

import ReactMarkdown from 'react-markdown';
import { fonts, colors } from '../../../configs/styles';
import InputCheckBox from '../../Inputs/InputCheckBox';

import { ProviderArticles, ContextArticles } from '../../../contexts/context-articles';
import SearchBar from './SearchBar';

const Container = styled.section`
  width: 100%;
  margin: 30px 0;
`;

const Grid = styled.div`
  display: grid;
  position: relative;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
`;

const Column = styled.div``;

const SidebarTitle = styled.h2`
  background: ${colors.lightBlue};
  color: #FFFFFF;
  padding: 10px 0 5px 0;
  margin: 0;
  font-weight: 800;
  font-size: 0.875rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  
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
  height: 88px;
  display: none;
  font-family: ${fonts.nunitoSans};
  font-size: 1rem;
  color: #747474;
  overflow: hidden;

  &:nth-of-type(1) {
    display: block;
  }
`;

const PLink = styled(Link)`
  font-family: ${fonts.nunitoSans};
  font-size: 1rem;
  color: #EC4067;
  text-decoration: underline;
  text-transform: uppercase;
  float: right;
`;

const GetData = ({ children }) => {
  const { tags, blogs } = useStaticQuery(graphql`
    query AllBlogsAndAllTags {
      blogs: allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {order: ASC, fields: childMarkdownRemark___frontmatter___date}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              subtitle
              image
              alt
              path
              postTags
              content
            }
          }
        }
      }
      tags: allFile(filter: {base: {eq: "blog_tags.md"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              tags {
                tag
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ProviderArticles>
      <SectionBlogs tags={tags.nodes[0].childMarkdownRemark.frontmatter.tags} blogs={blogs.nodes} />
    </ProviderArticles>
  );
};

const SectionBlogs = ({ tags, blogs }) => {
  const { searchQuery } = useContext(ContextArticles);
  const [activeTags, setActiveTags] = useState([]);
  const activeTagsRef = useRef(activeTags);
  const [articles, setArticles] = useState(blogs);

  const setActiveTagsFunc = (data) => {
    activeTagsRef.current = data;
    setActiveTags(data);
  };

  useEffect(() => {
    const articlesFiltered = articles;
    if (activeTags.length > 0) {
      articlesFiltered.filter((article) => article.childMarkdownRemark.frontmatter.postTags.filter((postTag) => activeTags.includes(postTag)));
    }
    if (searchQuery.length > 0) {
      articlesFiltered.filter((article) => article.childMarkdownRemark.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setArticles(articlesFiltered);
  }, [searchQuery, activeTags.current]);

  return (
    <Container>
      <Grid>
        <Column css={css`
        grid-column: 2 / span 2;
      `}
        >
          <SearchBar />
          <SidebarTitle>Tags</SidebarTitle>
          {tags.map((tag, i) => (
            <InputCheckBox
              labelText={tag.tag}
              onClick={(e) => {
                if (!activeTagsRef.current.includes(tag)) {
                  const x = activeTagsRef.current;
                  x.push(tag);
                  setActiveTagsFunc(x);
                } else {
                  const x = activeTagsRef.current;
                  x.filter((activeTag) => activeTag !== tag);
                  setActiveTagsFunc(x);
                }
                e.currentTarget.firstChild.checked = !e.currentTarget.firstChild.checked;
              }}
            />
          ))}
        </Column>
        <Column css={css`
        grid-column: 4 / span 8;
      `}
        >
          <Grid css={css`grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;`}>
            {articles.length > 0 && articles.map(({ childMarkdownRemark: { frontmatter } }) => (
              <Grid css={css`grid-column: span 8; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; background: linear-gradient(360deg, #F7FAFB 0%, #F5F5F5 100%);`}>
                <img css={css`grid-column: span 3; height: 225px; width: 100%; height: 100%; object-fit: cover;`} src={frontmatter.image} alt={frontmatter.alt} />
                <div css={css`grid-column: span 5; padding: 15px 30px 15px 0;`}>
                  <Title1>{frontmatter.title}</Title1>
                  <Title2>{frontmatter.subtitle}</Title2>
                  <ReactMarkdown source={frontmatter.content} renderers={{ paragraph: P }} allowedTypes={['text', 'paragraph']} />
                  <PLink to={`blog/${frontmatter.title.toLowerCase().split(' ').join('-')}`}>READ MORE...</PLink>
                </div>
              </Grid>
            ))}
          </Grid>
        </Column>
      </Grid>
    </Container>
  );
};

export default GetData;
