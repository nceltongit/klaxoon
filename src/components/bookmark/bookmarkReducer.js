import {
  DELETE_BOOKMARK,
  FETCH_BOOKMARKS_SUCCESS,
  SAVE_BOOKMARK_SUCCESS,
  SAVE_KEYWORDS
} from './bookmarkActionTypes';
import { FETCH_STATUS } from '../../utils/constants';
import { fromNoEmbedToBookmark } from './bookmarkUtils';

export const initialState = {
  status: FETCH_STATUS.LOADING,
  bookmarks: []
};

export default (bookmark = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARKS_SUCCESS: {
      return {
        ...bookmark,
        status: FETCH_STATUS.SUCCESS,
        bookmarks: action.res.data.bookmarks
      };
    }
    case SAVE_KEYWORDS: {
      const updateBookmarks = [...bookmark.bookmarks];
      const bookmarkIndex = bookmark.bookmarks.findIndex(_ => _.id === action.bookmarkId);
      updateBookmarks[bookmarkIndex].keyWords = action.keyWords;
      return {
        ...bookmark,
        bookmarks: updateBookmarks
      };
    }
    case SAVE_BOOKMARK_SUCCESS: {
      if (!action.res.data.error) {
        const maxId = Math.max(...bookmark.bookmarks.map(_ => _.id), 0);
        const newBookmark = fromNoEmbedToBookmark(action.res.data, maxId + 1);
        const copyBookmarks = [...bookmark.bookmarks];
        copyBookmarks.unshift(newBookmark);
        return {
          ...bookmark,
          bookmarks: copyBookmarks
        };
      } else {
        return bookmark;
      }
    }
    case DELETE_BOOKMARK: {
      return {
        ...bookmark,
        bookmarks: bookmark.bookmarks.filter(_ => _.id !== action.bookmarkId)
      };
    }
    default:
      return bookmark;
  }
};
