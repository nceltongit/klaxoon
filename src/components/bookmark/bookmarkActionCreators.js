import axios from 'axios';
import {
  DELETE_BOOKMARK,
  FETCH_BOOKMARKS,
  SAVE_BOOKMARK,
  SAVE_KEYWORDS
} from './bookmarkActionTypes';

export const fetchBookmarks = () => {
  return {
    type: FETCH_BOOKMARKS,
    promise: axios.get('./mockListBookmarks.json')
  };
};

export const saveKeyWords = (keyWords, bookmarkId) => {
  // In real project it should be a promise axios.patch but in our example we gonna just update the store
  return {
    type: SAVE_KEYWORDS,
    bookmarkId,
    keyWords
  };
};

export const deleteBookmark = bookmarkId => {
  // In real project it should be a promise axios.delete but in our example we gonna just update the store
  return {
    type: DELETE_BOOKMARK,
    bookmarkId
  };
};

export const saveBookmark = url => {
  return {
    type: SAVE_BOOKMARK,
    promise: axios.get(`https://noembed.com/embed?url=${url}`)
  };
};
