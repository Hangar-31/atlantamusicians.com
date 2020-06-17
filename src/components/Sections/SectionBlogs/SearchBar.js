// /* eslint-disable no-param-reassign */
// import React from 'react';
// // import { css } from '@emotion/core';
// import styled from '@emotion/styled';
// import { Link, useStaticQuery, graphql } from 'gatsby';

// import { css } from '@emotion/core';

// import ReactMarkdown from 'react-markdown';
// import { fonts, colors } from '../../../configs/styles';

// const Container = styled.section`
//   width: 100%;
//   margin: 30px 0;
// `;

// const Grid = styled.div`
//   display: grid;
//   position: relative;
//   grid-column-gap: 30px;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//   max-width: 1440px;
//   margin: 0 auto;
// `;

// const Column = styled.div``;

// const Title = styled.h1`
//   grid-column: 3 / span 8;
//   color: ${colors.darkBlue};
//   font-weight: 800;
//   font-size: 1.875rem;
//   font-family: ${fonts.biryani};
//   text-transform: uppercase;
// `;

// const Title1 = styled.h1`
//   margin: 0;
//   color: ${colors.darkBlue};
//   font-weight: 800;
//   font-size: 1.875rem;
//   font-family: ${fonts.biryani};
//   text-transform: uppercase;
// `;

// const Title2 = styled.h2`
//   margin: 0;
//   color: ${colors.lightBlue};
//   font-weight: 800;
//   font-size: 1.25rem;
//   font-family: ${fonts.biryani};
// `;

// const P = styled.p`
//   height: 88px;
//   display: none;
//   font-family: ${fonts.nunitoSans};
//   font-size: 1rem;
//   color: #747474;
//   overflow: hidden;

//   &:nth-of-type(1) {
//     display: block;
//   }
// `;

// const PLink = styled(Link)`
//   font-family: ${fonts.nunitoSans};
//   font-size: 1rem;
//   color: #EC4067;
//   text-decoration: underline;
//   text-transform: uppercase;
//   float: right;
// `;

// export default () => {
//   const { allFile: { nodes } } = useStaticQuery(graphql`
//     {
//       allFile(filter: {sourceInstanceName: {eq: "blog"}}, sort: {order: ASC, fields: childMarkdownRemark___frontmatter___date}) {
//         nodes {
//           childMarkdownRemark {
//             frontmatter {
//               title
//               subtitle
//               image
//               alt
//               path
//               content
//             }
//           }
//         }
//       }
//     }
//   `);

//   return (
//     <Container>

//     </Container>
//   );
// };
