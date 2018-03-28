import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer';
import logger from '../middlewares/logger';
import randomId from '../middlewares/randomId';


const enchancer = applyMiddleware(thunk, logger, randomId);

const store = createStore(reducer, {}, enchancer);

//dev only
window.store = store;

export default store;