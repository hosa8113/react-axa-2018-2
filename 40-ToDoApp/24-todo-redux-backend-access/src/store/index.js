import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import todoReducer from './todoReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    todoReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);
