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
    gender
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
            grid-column-gap: 3rem;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            width: 100%;
            max-width: 1440px;
            margin: 45px auto;

            font-family: 'Nunito Sans';
          `}
        >
          <MemberDirectory
            members={members}
            filter={filterMemberDirectory}
            Card={PublicDirectoryCard}
          />
        </Grid>
      </Container>
    </ProviderDirectory>
  );
};


export default MemberDirectoryContext;
