import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: white;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: 1px solid #d9d9d9;
  transition: border 250ms ease-in;
  cursor: pointer;
  &:hover {
    border: 1px solid #25c16f;
  }
`;

const Pagination: React.FC<{ paginationHandler: (pageNo: number) => void }> = ({
  paginationHandler,
}) => (
  <Div>
    <Button onClick={paginationHandler.bind(null, 1)}>1</Button>
    <Button onClick={paginationHandler.bind(null, 2)}>2</Button>
    <Button onClick={paginationHandler.bind(null, 3)}>3</Button>
  </Div>
);

export default Pagination;
