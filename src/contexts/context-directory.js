/* eslint-disable comma-dangle, arrow-parens */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextDirectory = createContext();

export const ProviderDirectory = ({ children, filterData }) => {
  const [search, setSearch] = useState('');
  const [filters, setFilterState] = useState({
    function: ['play'],
    instruments: [],
    styles: [],
  });
  const setFilters = ({ add = true, filter, type }) => {
    if (type === 'function') {
      setFilterState({ ...filters, function: [filter] });
      return;
    }
    if (add) {
      setFilterState({
        ...filters,
        [type]: [...filters[type], filter],
      });
    } else {
      setFilterState({
        ...filters,
        [type]: filters[type].filter((code) => code !== filter),
      });
    }
  };
  return (
    <ContextDirectory.Provider
      value={{
        filterData: {
          ...filterData,
          functions: [
            {
              code: 'play',
              name: 'Plays',
            },
            {
              code: 'teach',
              name: 'Teacher',
            },
          ],
        },
        filters,
        search,
        setFilters,
        setSearch,
      }}
    >
      {children}
    </ContextDirectory.Provider>
  );
};

ProviderDirectory.defaultProps = {
  filterData: {},
};

ProviderDirectory.propTypes = {
  filterData: PropTypes.objectOf(PropTypes.array),
};

export default ProviderDirectory;
