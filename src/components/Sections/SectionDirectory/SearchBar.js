import React, { useContext } from 'react';
import {
  SearchContainerStyled,
  SearchIconStyled,
  SearchInputStyled,
} from '../../../styles/Directory.Styled';


import { ContextDirectory } from '../../../contexts/context-directory';

export default function MemberDirectorySearchBar() {
  const { search, setSearch } = useContext(ContextDirectory);
  return (
    <SearchContainerStyled>
      <SearchIconStyled />
      <SearchInputStyled
        onChange={(e) => setSearch(e.currentTarget.value)}
        value={search}
        name="search"
        placeholder="Search By Name"
      />
    </SearchContainerStyled>
  );
}
