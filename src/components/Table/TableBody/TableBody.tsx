import React from 'react';
import { UserData } from '../../../App';
import styled from 'styled-components';

const TR = styled.tr`
  border-bottom: 1px solid #ddd;
  &:last-of-type {
    border-bottom: 3px solid #25c16f;
  }
`;

const TD = styled.td`
  padding: 0.5rem 1rem;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const TableBody: React.FC<{ userData: UserData[] }> = ({ userData }) => {
  return (
    <tbody>
      {userData.map((userInfo: UserData, key: number) => (
        <TR key={key}>
          <TD className="avatar">
            <Img src={userInfo.avatar} alt="user_pic" />
          </TD>
          <TD>{userInfo.first_name}</TD>
          <TD>{userInfo.last_name}</TD>
          <TD>{userInfo.email}</TD>
        </TR>
      ))}
    </tbody>
  );
};

export default TableBody;
