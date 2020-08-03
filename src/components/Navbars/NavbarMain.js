/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaCaretDown } from 'react-icons/fa';

// Components
import { Link as GLink, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import ImageLogo1 from '../Images/Logos/ImageLogo1';
import { colors, fonts, mq } from '../../configs/styles';

// Styled Components
const Container = styled.section`
  position: relative;

  width: 100%;
  height: 120px;

  background: ${colors.blue};
  border-bottom: 1px solid #ffffff;
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.6);

  @media(max-width: ${mq.md}px) {
    display: none;
  }
`;

const Wrapper = styled.nav`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled(GLink)`
  display: block;
  width: 300px;
  padding-left: 15px;

  text-decoration: none;
  @media(max-width: ${mq.lg}px) {
    width: 250px;
  }
`;

const ListLinks = styled.ul`
  position: relative;

  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;

  text-transform: uppercase;

  list-style: none;
`;

const ItemLink = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 20px;
  @media(max-width: ${mq.lg}px) {
    margin: 0 15px;
  }
`;

const ListSubLinks = styled.ul`
  position: absolute;
  top: 100%;
  left: -25px;
  z-index: 1;

  display: none;
  width: 180px;
  margin: 0;
  padding: 15px;

  list-style: none;
  background: #324B93;
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
  font-weight: regular;
  font-size: 0.75rem;
  font-family: Montserrat;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledLink = styled(GLink)`
  position: relative;

  color: #ffffff;
  font-size: 0.75rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    span {
      background: ${colors.darkBlue};
    }
  }

  span {
    position: relative;

    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    background: ${colors.blue};

    transition: 0.2s;
  }

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 0;

    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
    content: "";
  }
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
            number
          }
        }
      }
    }
  `);

  useEffect(() => {
    const pathLinks = [];
    data.nodes.forEach((node) => {
      const { path, title, number } = node.frontmatter;
      const pathSplit = path.split('/');
      if (number === '0') {
        return;
      }

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
          <ItemLink>
            <StyledLink to="/">
              <span>
                Join Now
              </span>
            </StyledLink>
          </ItemLink>
        </ListLinks>
      </Wrapper>
    </Container>
  );
};
