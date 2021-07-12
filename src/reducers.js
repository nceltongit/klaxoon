import { combineReducers } from 'redux';
import bookmark from './components/bookmark/bookmarkReducer';
import pagination from './components/pagination/paginationReducer';

export default combineReducers({ bookmark, pagination });
