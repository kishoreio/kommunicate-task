import React, { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';

const App: React.FC = () => {
  const [userData, setUserData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://reqres.in/api/users?page=${currentPage}&per_page=4`
        );
        const { data } = await response.json();
        setUserData(data);
        setFilterData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserData();
  }, [currentPage]);

  const paginationHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  const filterByHandler = (event: any) => {
    const searchText = event.target.value;
    const filteredData = userData.filter((user: any) => {
      return (
        user['first_name'].toLowerCase().startsWith(searchText.toLowerCase()) ||
        user['last_name'].toLowerCase().startsWith(searchText.toLowerCase())
      );
    });
    setFilterData(filteredData);
  };
  return (
    <>
      <SearchBar filterByHandler={filterByHandler} />
      <Table userData={filterData} />
      <Pagination paginationHandler={paginationHandler} />
    </>
  );
};

export default App;
