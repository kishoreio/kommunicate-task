import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  background: white;
  padding: 0.5rem 1rem;
  outline: none;
  margin: 0 0.5rem;
  border: 1px solid #d9d9d9;
  transition: border 250ms ease-in;
  cursor: pointer;
  &:hover {
    border: 1px solid #25c16f;
  }
`;

interface Pagination {
  pageNo: number;
  paginationHandler: (event: number) => void;
}

const Pagination: React.FC<Pagination> = ({ pageNo, paginationHandler }) => (
  <Div>
    <Button
      onClick={paginationHandler.bind(null, pageNo - 1)}
      disabled={pageNo < 2}
    >
      Prev
    </Button>
    <Button onClick={paginationHandler.bind(null, 1)}>1</Button>
    <Button onClick={paginationHandler.bind(null, 2)}>2</Button>
    <Button onClick={paginationHandler.bind(null, 3)}>3</Button>
    <Button
      onClick={paginationHandler.bind(null, pageNo + 1)}
      disabled={pageNo > 2}
    >
      Next
    </Button>
  </Div>
);

export default Pagination;
