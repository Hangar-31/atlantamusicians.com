
import React from 'react';
import PropTypes from 'prop-types';
import {
  ArrowStyled,
  PagesStyled,
  PaginationStyled,
} from '../../../styles/Directory.Styled';

import MemberDirectorySearchBar from './SearchBar';

export default function MemberDirectoryPagination({
  page,
  results,
  showResults,
}) {
  const total = Math.max(1, Math.ceil(results / 20));
  return (
    <PaginationStyled>
      <PagesStyled>
        {showResults && `(${results} Result${results === 1 ? '' : 's'})`}
      </PagesStyled>
      <MemberDirectorySearchBar />
      <PagesStyled>
        <ArrowStyled left disabled={page === 1} />
        {`${page} of ${total}`}
        <ArrowStyled right disabled={page === total} />
      </PagesStyled>
    </PaginationStyled>
  );
}

MemberDirectoryPagination.propTypes = {
  page: PropTypes.number,
  results: PropTypes.number,
  showResults: PropTypes.bool,
};

MemberDirectoryPagination.defaultProps = {
  page: 1,
  results: 0,
  showResults: true,
};
