import React from 'react';
import { UserData } from '../../App';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import styled from 'styled-components';

const TableWrapper = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 800px;
  font-size: 0.9rem;
`;

const Table: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  return (
    <TableWrapper>
      <TableHead />
      <TableBody userData={userData} />
    </TableWrapper>
  );
};

export default Table;
