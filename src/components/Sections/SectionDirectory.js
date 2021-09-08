import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';

import { Container, Grid } from 'semantic-ui-react';
import MemberDirectory from '../usicians-directory';
import { ProviderDirectory } from '../usicians-directory/context-directory';
import Contractor from '../usicians-directory/SVGs/Contractor';
import Teacher from '../usicians-directory/SVGs/Teacher';
import gqlClient from '../../utilities/gqlClient';
import PublicDirectoryCard from '../usicians-directory/DirectoryCard/Public';
import filterMemberDirectory from '../usicians-directory/filterMemberDirectory';
import { mq, colors } from '../../configs/styles';
import { TagsStyled, FilteredListContainerStyled } from '../usicians-directory/Directory.Styled';

const query = `{
  GetFilters {
    instruments {
      name
      code
    }
    musicStyles {
      name
      code
    }
  }
  GetMembers(type: "PUBLIC") {
    id
    avatar
    bio
    contractor
    email
    phone
    professionalName
    website
    address {
      formatted
    }
    userInstruments {
      instruments {
        code
        name
      }
      play
      teach
    }
    musicStyles {
      code
      name
    }
    localInfo {
      membershipStatus
      membershipType
      authRole
    }
  }
}`;

const MemberDirectoryContext = () => {
  const [members, setMembers] = useState([]);
  const [filters, setFilters] = useState({ instruments: [], musicStyles: [] });
  useEffect(() => {
    const getData = async () => {
      try {
        const { GetFilters, GetMembers } = await gqlClient().request(query);
        console.log('GetFilters, GetMembers', GetFilters, GetMembers);
        setFilters(GetFilters);
        setMembers(GetMembers);
      } catch (e) {
        console.log('e', e);
      }
    };
    getData();
  }, []);
  // eslint-disable-next-line no-param-reassign
  filters.functions = [
    {
      code: 'contractor',
      name: (
        <>
          <Contractor />
          Contractor
        </>
      ),
    },
    {
      code: 'teach',
      name: (
        <>
          <Teacher />
          Teacher
        </>
      ),
    },
  ];
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

            @media(max-width: ${mq.xs}px) {
              padding: 0 10px;
            }

            ${FilteredListContainerStyled} {
              padding: 15px 0;
            }
          `}
        >
          <div
            css={css`
              grid-column: 2 / span 10;

              @media(max-width: ${mq.xs}px) {
                grid-column: span 12;
                padding: 0 5px 5px 5px;
              }

              aside {
                button {
                  background-color: ${colors.blue};
                }
              }

              nav {
                padding: 15px 0 0 0;
              }

              article {
                margin-top: 0;

                border:none;

                a {
                  color: #EC4067!important;

                  transition: 0.2s;

                  &:hover {
                    color: #469FD1!important;
                  }

                  @media(max-width: ${mq.md}px) {
                    font-size: 0.75rem;
                  }
                  @media(max-width: ${mq.xs}px) {
                    font-size: 0.675rem;
                  }
                }

                @media(max-width: ${mq.xs}px) {
                  ${TagsStyled} {
                    height: 25px;
                  }
                span {


                    font-size: 0.675rem;
                    svg {
                      height: 8px;
                    }
                  }
                }
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
              members={members}
              filter={filterMemberDirectory}
              Card={PublicDirectoryCard}
            />
          </div>
        </Grid>
      </Container>
    </ProviderDirectory>
  );
};

export default MemberDirectoryContext;
