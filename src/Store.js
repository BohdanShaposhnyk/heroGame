/**
 * Created by bohdan on 20.02.2018.
 */

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import reducer from './reducers/reducer'

const configureStore = () => {
    "use strict";
    const middleware = applyMiddleware(logger);
    return createStore(reducer, middleware);
};


export default configureStore;