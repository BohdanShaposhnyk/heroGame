/**
 * Created by bohdan on 20.02.2018.
 */

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import levelReducer from './reducers/levelReducer'

const configureStore = () => {
    "use strict";
    const middleware = applyMiddleware(logger);
    return createStore(levelReducer, middleware);
};


export default configureStore;