import { createSelector } from 'reselect';
import { getPagination } from '../pagination/paginationSelectors';

export const getStatusBookmark = state => state.bookmark.status;
const getAllBookmarks = state => state.bookmark.bookmarks;
export const getAllBookmarksLength = state => state.bookmark.bookmarks.length;

export const geBookmarkByPage = createSelector(
  [getAllBookmarks, getPagination],
  (bookmarks = [], pagination) => {
    return bookmarks.slice((pagination.currentPage - 1) * pagination.maxItemByPage, pagination.currentPage * pagination.maxItemByPage);
  }
);
