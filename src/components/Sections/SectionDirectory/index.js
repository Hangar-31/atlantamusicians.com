import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';


import { Container, Grid } from 'semantic-ui-react';
import { ThemeProvider } from 'emotion-theming';
import MemberDirectory from '../../usicians-directory';
import { ProviderDirectory } from '../../usicians-directory/context-directory';
import Contractor from '../../usicians-directory/SVGs/Contractor';
import Teacher from '../../usicians-directory/SVGs/Teacher';
import gqlClient from '../../../utilities/gqlClient';

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
    firstName
    gender
    lastName
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
      const { GetFilters, GetMembers } = await gqlClient().request(query);

      setFilters(GetFilters);
      setMembers(GetMembers);
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

      <ThemeProvider theme={{
        colorActive: '#D57E18',
        colorActiveHover: '#000000',
        colorBtnBg: '#1F225B',
        colorBtnHover: '#EC4067',
        colorBtnText: '#FFFFFF',
        colorDarkGray: '#4C4C4C',
        colorDisabled: '#D7D7D7',
        colorHint: '#7D7D7D',
        colorNegative: '#EC4067',
        colorOffWhite: '#FDFDFD',
        colorWhite: '#FFFFFF',
      }}
      >
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
            <MemberDirectory members={members} />
          </Grid>
        </Container>
      </ThemeProvider>
    </ProviderDirectory>
  );
};


export default MemberDirectoryContext;
