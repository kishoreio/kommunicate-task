import React from 'react';
import styled from 'styled-components';

const TR = styled.tr`
  text-align: left;
  background-color: #25c16f;
  color: #f9f9f9;
  font-weight: bold;
`;

const TH = styled.th`
  padding: 0.5rem 1rem;
`;

const TableHead: React.FC = () => {
  const tableTitle = ['User', 'First Name', 'Last Name', 'E-Mail'];
  return (
    <thead>
      <TR>
        {tableTitle.map((title: string, key: number) => (
          <TH key={key}>{title}</TH>
        ))}
      </TR>
    </thead>
  );
};

export default TableHead;
