import config from './config';
import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import loggerMiddleware from './middlewares/tools/logger';
import monitorReducerEnhancer from './middlewares/enhancers/monitorReducerEnhancer';
import imageProcessingEnhancer from './middlewares/imageProcessingEnhancer';

import rootReducers from './reducers';

const configureStore = (preloadedState) => {
    let middlewares = [thunkMiddleware, imageProcessingEnhancer];
    let middlewaresEnhancers = [];

    if (config.isDev) {
        middlewares.push(loggerMiddleware);
        middlewaresEnhancers.push(monitorReducerEnhancer);
    }

    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, ...middlewaresEnhancers];

    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducers, preloadedState, composedEnhancers);

    return store;
};

export default configureStore;
