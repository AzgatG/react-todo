import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import reducer from '../reducer';
import logger from '../middlewares/logger'


const enchancer = applyMiddleware(thunk, logger)

const store = createStore(reducer, {}, enchancer)

//dev only
window.store = store

export default store