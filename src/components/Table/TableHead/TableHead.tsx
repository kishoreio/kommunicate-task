import React from 'react';

const TableHead: React.FC = () => {
  const tableTitle = ['User', 'FirstName', 'LastName', 'E-Mail'];
  return (
    <thead>
      <tr>
        {tableTitle.map((title: string, key: number) => (
          <td key={key}>{title}</td>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
