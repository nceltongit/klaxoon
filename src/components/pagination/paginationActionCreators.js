import { CHANGE_PAGE, INIT_PAGINATION } from './paginationActionTypes';

export const initPagination = (dataLength, maxItemByPage) => {
  return {
    type: INIT_PAGINATION,
    dataLength,
    maxItemByPage
  };
};

export const changePage = page => {
  return {
    type: CHANGE_PAGE,
    page
  };
};
