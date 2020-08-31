import React, { useState, useEffect } from 'react';
import Table from './components/Table/Table';
import Pagination from './components/Pagination/Pagination';
import SearchBar from './components/SearchBar/SearchBar';

export interface UserData {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [filterData, setFilterData] = useState<UserData[]>([]);
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

  const getFilteredData = (data: UserData[]) => {
    setFilterData(data);
  };

  return (
    <div>
      <SearchBar userData={userData} getFilteredData={getFilteredData} />
      <Table userData={filterData} />
      <Pagination pageNo={currentPage} paginationHandler={paginationHandler} />
    </div>
  );
};

export default App;
