import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers.js';
import promiseMiddleware from './utils/promiseMiddleware';

const store = createStore(rootReducer, {}, applyMiddleware(promiseMiddleware));

export default store;
