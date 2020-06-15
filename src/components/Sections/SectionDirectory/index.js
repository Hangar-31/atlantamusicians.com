
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import MemberDirectoryCard from './Card';
import Filters from './Filters';
import Pagination from './Pagination';
import {
  ContextDirectory,
  ProviderDirectory,
} from '../../../contexts/context-directory';
import getSettings from '../../../utilities/getSettings';
import gqlClient from '../../../utilities/gqlClient';
// import privateRoute from '../../utils/privateRoute';
import { GET_FILTERS, GET_MEMBERS } from '../../../utilities/queries';


const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;
`;


const MemberDirectory = ({ members }) => {
  const { filters, search } = useContext(ContextDirectory);

  const filteredMembers = members.filter((member) => {
    // create the full name all lower case
    const name = `${member.firstName} ${member.lastName}`.toLowerCase();
    // if there is a search term, check if it's in the name
    if (search && !name.includes(search.toLowerCase())) return false;
    // play or teach
    const functionType = filters.function[0];
    // find if the member plays or teaches an instrument
    const matchesFunction = member.userInstruments.filter(
      (instrument) => instrument[functionType],
    );
    // filter out anyone who doesn't match the function type
    if (matchesFunction.length === 0) return false;

    let matchesInstruments = true;
    // if we are filtering by instrument
    if (filters.instruments.length) {
      // if they match all the instruments selected and the function type
      const matchedInstruments = filters.instruments.filter((code) => {
        const instrumentAndType = member.userInstruments.find(
          (instrument) => instrument.instruments.code === code && instrument[functionType],
        );
        return instrumentAndType;
      });
      // if the members matched instruments is the same as the number of filtered instruments
      matchesInstruments = matchedInstruments.length === filters.instruments.length;
    }
    // if they don't match the instruments and remove them
    if (!matchesInstruments) return false;

    let matchesStyle = true;
    // if we are filtering on style
    if (filters.styles.length) {
      const matchedStyles = filters.styles.filter((code) => (
        member.styles.find((style) => style.code === code)));
      matchesStyle = matchedStyles.length === filters.styles.length;
    }
    return matchesStyle;
  });

  return (
    <Container>
      <Grid>
        <div
          css={css`
            grid-column: 2 / span 3;
          `}
        >
          <Filters />
        </div>
        <div
          css={css`
            grid-column: span 7;
          `}
        >
          <Pagination
            showResults={filteredMembers.length !== members.length}
            results={filteredMembers.length}
            page={1}
          />
          {filteredMembers.map((member) => (
            <MemberDirectoryCard key={member.id} member={member} />
          ))}
        </div>
      </Grid>
    </Container>
  );
};

MemberDirectory.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object),
};

MemberDirectory.defaultProps = {
  members: [],
};

const MemberDirectoryContext = ({ filters, ...props }) => (
  <ProviderDirectory filterData={filters}>
    <MemberDirectory {...props} />
  </ProviderDirectory>
);

MemberDirectoryContext.propTypes = {
  filters: PropTypes.objectOf(PropTypes.array).isRequired,
};
export const getServerSideProps = async (ctx) => {
  // const auth = await privateRoute(ctx);
  // if (!auth) return { props: {} };
  const data = await getSettings(ctx);
  const query = `{
   ${GET_FILTERS}
   ${GET_MEMBERS}
  }`;

  const { GetFilters, GetMembers } = await gqlClient(ctx).request(query);
  data.props.filters = GetFilters || {};
  data.props.members = GetMembers || [];
  return data;
};
export default MemberDirectoryContext;
