import React from 'react';

const Pagination: React.FC<{ paginationHandler: (pageNo: number) => void }> = ({
  paginationHandler,
}) => (
  <>
    <button onClick={paginationHandler.bind(null, 1)}>1</button>
    <button onClick={paginationHandler.bind(null, 2)}>2</button>
    <button onClick={paginationHandler.bind(null, 3)}>3</button>
  </>
);

export default Pagination;
