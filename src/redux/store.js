import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import persistReducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(persistReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistStore };