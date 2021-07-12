import React, { useEffect } from 'react';
import Loader from '../../app/loader/Loader';
import { FETCH_STATUS } from '../../utils/constants';
import BookmarkTable from './bookmarkTable/BookmarkTable';
import { getStatusBookmark } from './bookmarkSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookmarks } from './bookmarkActionCreators';
import BookmarkHeader from './bookmarkHeader/BookmarkHeader';

const Bookmark = () => {
  const status = useSelector(getStatusBookmark);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <>
      <div className={'bookmark'}>
        <BookmarkHeader />
        {status === FETCH_STATUS.LOADING ? <Loader /> : <BookmarkTable />}
      </div>
    </>
  );
};

Bookmark.displayName = 'Bookmark';
export default Bookmark;
