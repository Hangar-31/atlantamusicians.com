import React, { useEffect, useState } from 'react';


import { Container } from 'semantic-ui-react';
import { css } from '@emotion/core';
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
        <div
          css={css`
          max-width: 1200px;
          margin: 0 auto;
         `}
        >

          <MemberDirectory
            members={members}
            filter={filterMemberDirectory}
            Card={PublicDirectoryCard}
          />
        </div>
      </Container>
    </ProviderDirectory>
  );
};


export default MemberDirectoryContext;
