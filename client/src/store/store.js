import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { NODE_ENV, API_HOST } from '../config';
import createSagaMiddleware from 'redux-saga';
import Api, { apiReducer } from './api/index';
import { all } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

// const composer =
//   (NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const sagaMiddleware = createSagaMiddleware();
// const enhancements = composer(applyMiddleware(sagaMiddleware));

// const rootReducer = combineReducers({
//   api: apiReducer
// });

const store = createStore();

// const api = new Api({
//   fetch: fetch,
//   apiHost: API_HOST,
// });

export const history = createBrowserHistory();

// const sagaInjections = {
//   api,
//   window,
//   logger: window.console,
//   dispatch: store.dispatch.bind(store),
//   history,
// };

// function* rootSaga() {
//   yield all([]);
// }

// sagaMiddleware.run(rootSaga);

export default store;
