import React from 'react';

const SearchBar: React.FC<{
  filterByHandler: (event: any) => void;
}> = ({ filterByHandler }) => <input type="text" onChange={filterByHandler} />;

export default SearchBar;
