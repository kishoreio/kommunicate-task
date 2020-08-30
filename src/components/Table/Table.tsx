import React, { useState } from 'react';
import { UserData } from '../../App';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import Modal from '../Modal/Modal';
import ViewUser from '../ViewUser/ViewUser';
import styled from 'styled-components';

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 800px;
  font-size: 0.9rem;
`;

const Table: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  const [userDetail, setUserDetail] = useState<UserData | null>(null);
  const getUserId = (id: number) => {
    const user = userData.filter((user) => user.id === id)[0];
    setUserDetail(user);
  };
  const closeModal = () => {
    setUserDetail(null);
  };
  return (
    <>
      <TableWrapper>
        <TableHead />
        <TableBody userData={userData} getUserId={getUserId} />
      </TableWrapper>
      {userDetail && (
        <Modal>
          <ViewUser userDetail={userDetail} onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Table;
