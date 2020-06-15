
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FilteredListContainerStyled,
  FilterListTitleStyled,
  IndicatorStyled,
} from '../../../../styles/Directory.Styled';

import { ContextDirectory } from '../../../../contexts/context-directory';

import List from './List';
import Selection from './Selection';

export default function MemberDirectoryFilters() {
  const {
    filterData: { functions, instruments, styles },
  } = useContext(ContextDirectory);
  const [toggles, setToggles] = useState({
    filters: true,
    function: true,
    instr: true,
    style: true,
  });
  return (
    <FilteredListContainerStyled>
      <FilterListTitleStyled
        onClick={() => setToggles({ ...toggles, filters: !toggles.filters })}
        sm
      >
        Filters
        <IndicatorStyled toggle={toggles.filters} />
      </FilterListTitleStyled>
      <Selection height={toggles.filters ? 'auto' : 0} />
      <FilterListTitleStyled
        onClick={() => setToggles({ ...toggles, function: !toggles.function })}
        sm
      >
        Function
        <IndicatorStyled toggle={toggles.function} />
      </FilterListTitleStyled>
      <List
        items={functions}
        height={toggles.function ? '40px' : 0}
        type="function"
      />
      <FilterListTitleStyled
        sm
        onClick={() => setToggles({ ...toggles, instr: !toggles.instr })}
      >
        Instrument
        <IndicatorStyled toggle={toggles.instr} />
      </FilterListTitleStyled>
      <List
        items={instruments}
        height={toggles.instr ? '20vh' : 0}
        type="instruments"
      />
      <FilterListTitleStyled
        onClick={() => setToggles({ ...toggles, style: !toggles.style })}
        sm
      >
        Style
        <IndicatorStyled toggle={toggles.style} />
      </FilterListTitleStyled>
      <List items={styles} height={toggles.style ? '20vh' : 0} type="styles" />
    </FilteredListContainerStyled>
  );
}

MemberDirectoryFilters.propTypes = {
  filters: PropTypes.shape({
    instruments: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  }),
};
MemberDirectoryFilters.defaultProps = {
  filters: {},
};
