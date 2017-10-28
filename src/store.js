import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import addImageData from './reducer';

const store = createStore(
    addImageData,
    applyMiddleware(logger)
);

export default store;
