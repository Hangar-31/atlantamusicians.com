/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ContextArticles } from '../../../contexts/context-articles';

const Searchbar = styled.input`
  width: 100%;
  margin: 0 0 30px 0;
`;

export default () => {
  const { searchQuery, setSearchQuery } = useContext(ContextArticles);

  return (
    <Searchbar type="text" onChange={(e) => setSearchQuery(e.currentTarget.value)} value={searchQuery} />
  );
};
