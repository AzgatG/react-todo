import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';


const enchancer = applyMiddleware(thunk, logger, randomId);
const initialState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {};

const store = createStore(reducer, initialState, enchancer);

store.subscribe(() => localStorage.setItem('store', JSON.stringify(store.getState())));

//dev only
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  console.log('Looks like we are in development mode!');
}

export default store;