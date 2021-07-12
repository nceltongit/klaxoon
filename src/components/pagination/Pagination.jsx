import React from 'react';
import PropTypes from 'prop-types';
import { usePagination } from './usePagination';

const Pagination = ({ dataLength, maxItemByPage }) => {
  const { page } = usePagination(dataLength, maxItemByPage);

  return <div className={'pagination'}>{page}</div>;
};

Pagination.propTypes = {
  dataLength: PropTypes.number,
  maxItemByPage: PropTypes.number
};

Pagination.displayName = 'Pagination';
export default Pagination;
