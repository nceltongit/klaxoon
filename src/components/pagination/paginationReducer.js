import { CHANGE_PAGE, INIT_PAGINATION } from './paginationActionTypes';

export const initialStaState = {
  currentPage: 1,
  nbPage: 1,
  maxItemByPage: 1
};

export default (pagination = initialStaState, action) => {
  switch (action.type) {
    case INIT_PAGINATION: {
      const nbPage = Math.ceil(action.dataLength / action.maxItemByPage);
      return {
        ...pagination,
        nbPage,
        maxItemByPage: action.maxItemByPage
      };
    }
    case CHANGE_PAGE: {
      return {
        ...pagination,
        currentPage: action.page
      };
    }
    default:
      return pagination;
  }
};
