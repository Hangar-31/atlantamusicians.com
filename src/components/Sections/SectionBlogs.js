import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ArticlesDirectory from '../Articles/Directory';

const GetData = () => {
  const { tags, blogs } = useStaticQuery(graphql`
    query AllBlogAndAllTags {
      blogs: allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {order: DESC, fields: childMarkdownRemark___frontmatter___date}) {
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
    <ArticlesDirectory
      tags={tags.nodes[0].childMarkdownRemark.frontmatter.tags}
      blogs={blogs.nodes}
      link="blog"
    />
  );
};


export default GetData;
