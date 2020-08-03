import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const ContextArticles = createContext();

export const ProviderArticles = ({ children, filterData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(filterData);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <ContextArticles.Provider
      value={{
        filters,
        searchQuery,
        setFilters,
        setSearchQuery,
        selectedFilters,
        setSelectedFilters,
      }}
    >
      {children}
    </ContextArticles.Provider>
  );
};

ProviderArticles.defaultProps = {
  filterData: {},
};

ProviderArticles.propTypes = {
  filterData: PropTypes.objectOf(PropTypes.array),
};

export default ProviderArticles;
