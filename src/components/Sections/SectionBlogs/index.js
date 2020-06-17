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
//       <Grid>
//         <Column css={css`
//         grid-column: 2 / span 2;
//       `}
//         >
//           <Title>Sidebar</Title>
//         </Column>
//         <Column css={css`
//         grid-column: 4 / span 8;
//       `}
//         >
//           <Grid css={css`grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;`}>
//             {nodes.map(({ childMarkdownRemark: { frontmatter } }) => (
//               <Grid css={css`grid-column: span 8; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; background: linear-gradient(360deg, #F7FAFB 0%, #F5F5F5 100%);`}>
//                 <img css={css`grid-column: span 3; height: 225px; width: 100%; height: 100%; object-fit: cover;`} src={frontmatter.image} alt={frontmatter.alt} />
//                 <div css={css`grid-column: span 5; padding: 15px 30px 15px 0;`}>
//                   <Title1>{frontmatter.title}</Title1>
//                   <Title2>{frontmatter.subtitle}</Title2>
//                   <ReactMarkdown source={frontmatter.content} renderers={{ paragraph: P }} allowedTypes={['text', 'paragraph']} />
//                   <PLink to={`blog/${frontmatter.title.toLowerCase().split(' ').join('-')}`}>READ MORE...</PLink>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </Column>
//       </Grid>
//     </Container>
//   );
// };

// const GetData = () => {
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
// }
