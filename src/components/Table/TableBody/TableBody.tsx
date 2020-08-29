import React from 'react';

const TableBody: React.FC<{ userInfo: any }> = ({ userInfo }) => {
  const { first_name, last_name, email, avatar } = userInfo;
  return (
    <tbody>
      <tr>
        <img src={avatar} alt="user_pic" />
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
