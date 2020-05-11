/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaCaretDown } from 'react-icons/fa';

// Components
import { Link as GLink, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import ImageLogo1 from '../Images/Logos/ImageLogo1';
import { colors } from '../../configs/styles';

// Styled Components
const Container = styled.section`
  position: relative;
  height: 120px;
  width: 100%;
  background: ${colors.blue};
  border-bottom: 1px solid #ffffff;
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Logo = styled(GLink)`
  display: block;
  width: 300px;
  text-decoration: none;
`;

const ListLinks = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
`;

const ItemLink = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 30px;
`;

const ListSubLinks = styled.ul`
  display: none;
  z-index: 1;
  position: absolute;
  width: 180px;
  top: 100%;
  left: -25px;
  margin: 0;
  padding: 15px;
  background: #324B93;

  list-style: none;
`;

const ItemSubLink = styled.li`
  position: relative;
  display: block;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Link = styled(GLink)`
  display: inline-table;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: Montserrat;
  font-weight: regular;
  text-decoration: none;
`;

export default () => {
  const [links, setLinks] = useState([]);
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {path: {ne: null}}}, sort: {fields: frontmatter___number, order: ASC}) {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `);

  useEffect(() => {
    const pathLinks = [];
    data.nodes.forEach((node) => {
      const { path, title } = node.frontmatter;
      const pathSplit = path.split('/');

      if (pathSplit.length === 2) {
        pathLinks.push({
          name: title,
          path: pathSplit[1],
          subLinks: [],
        });
      }
      if (pathSplit.length === 3) {
        if (pathLinks.filter((item) => item.name === pathSplit[1]).length === 0) {
          pathLinks.push({
            name: pathSplit[1],
            path,
            subLinks: [
              {
                name: title,
                path,
              },
            ],
          });
        } else {
          pathLinks.filter((item) => item.name === pathSplit[1])[0].subLinks.push({
            name: title,
            path,
          });
        }
      }
    });

    // Data
    setLinks(pathLinks);
  }, []);


  return (
    <Container>
      <Wrapper>
        <Logo>
          <ImageLogo1 to="/" cssProp="width: 100%;" />
        </Logo>

        <ListLinks onMouseLeave={() => setActiveSubMenu(-1)}>
          {links.map((link, i) => (
            <ItemLink
              key={link.name}
              onMouseOver={() => {
                if (link.subLinks.length === 0) {
                  setActiveSubMenu(-1);
                } else if (link.subLinks.length > 0 && activeSubMenu >= 0) {
                  setActiveSubMenu(i);
                }
              }}
              onFocus={() => {
                if (link.subLinks.length === 0) {
                  setActiveSubMenu(-1);
                } else if (link.subLinks.length > 0 && activeSubMenu >= 0) {
                  setActiveSubMenu(i);
                }
              }}
            >
              <Link
                to={link.path}
                onMouseOver={() => setActiveSubMenu(i)}
                onFocus={() => setActiveSubMenu(i)}
              >
                {`${link.name} `}
                {link.subLinks.length > 0 ? <FaCaretDown css={css`height: 12px;`} /> : ''}
              </Link>

              {link.subLinks.length > 0
              && (
              <ListSubLinks
                css={css`
                  display: ${activeSubMenu === i ? 'block' : 'none'}
                `}
              >
                {link.subLinks.map((subLink) => (
                  <ItemSubLink key={subLink.name}>
                    <Link to={subLink.path}>{subLink.name}</Link>
                  </ItemSubLink>
                ))}
              </ListSubLinks>
              )}
            </ItemLink>
          ))}
        </ListLinks>
      </Wrapper>
    </Container>
  );
};
