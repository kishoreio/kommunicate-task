import React, { useState } from 'react';
import { UserData } from '../../App';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import Modal from '../Modal/Modal';
import ViewUser from '../ViewUser/ViewUser';
import styled from 'styled-components';

const Div = styled.div`
  overflow-x: auto;
`;

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 1rem 0;
  min-width: 800px;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    min-width: 0px;
    margin: 0 0 1rem;
  }
`;

const Text = styled.p`
  text-align: center;
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
    <Div>
      <TableWrapper>
        <TableHead />
        <TableBody userData={userData} getUserId={getUserId} />
      </TableWrapper>
      {userDetail && (
        <Modal>
          <ViewUser userDetail={userDetail} onClose={closeModal} />
        </Modal>
      )}
      {userData.length === 0 ? <Text>No User</Text> : null}
    </Div>
  );
};

export default Table;
