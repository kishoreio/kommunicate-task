import React, { useRef, useEffect } from 'react';
import { UserData } from '../../App';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  border: 1px solid #25c16f;
  outline: none;
  height: 2rem;
  text-indent: 0.5rem;
`;

interface SearchBar {
  userData: UserData[];
  getFilteredData: (data: UserData[]) => void;
}

const SearchBar: React.FC<SearchBar> = ({ userData, getFilteredData }) => {
  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef!.current.focus();
  }, []);

  const filterByName = () => {
    const searchText = inputRef!.current.value;
    const filteredData = userData.filter((user: any) => {
      return (
        user['first_name'].toLowerCase().startsWith(searchText.toLowerCase()) ||
        user['last_name'].toLowerCase().startsWith(searchText.toLowerCase())
      );
    });
    getFilteredData(filteredData);
  };

  return (
    <Div>
      <Heading>Users List</Heading>
      <SearchInput
        type="text"
        placeholder="Search by name fix issue"
        ref={inputRef}
        onChange={filterByName}
      />
    </Div>
  );
};

export default SearchBar;
