import React from 'react';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

const Table: React.FC<{ userData: any }> = ({ userData }) => {
  return (
    <table>
      <TableHead />
      {userData.map((user: any, key: number) => (
        <TableBody key={key} userInfo={user} />
      ))}
    </table>
  );
};

export default Table;
