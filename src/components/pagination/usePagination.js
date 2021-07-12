import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPagination } from './paginationSelectors';
import { changePage, initPagination } from './paginationActionCreators';

export const usePagination = (dataLength, maxItemByPage) => {
  const pagination = useSelector(getPagination);
  const dispatch = useDispatch();
  const [page, setPage] = useState([]);

  useEffect(() => {
    dispatch(initPagination(dataLength, maxItemByPage));
  }, [dispatch, dataLength, maxItemByPage]);

  const handlePageClick = page => () => {
    dispatch(changePage(page));
  };

  useEffect(() => {
    const page = [];
    for (let i = 1; i <= pagination.nbPage; i++) {
      page.push(
        <a
          key={i}
          data-testid={`page${i}`}
          className={pagination.currentPage === i ? 'pagination__selected' : ''}
          onClick={handlePageClick(i)}
        >
          {i}
        </a>
      );
    }
    setPage(page);
  }, [pagination.currentPage, pagination.nbPage]);

  return {
    page
  };
};
