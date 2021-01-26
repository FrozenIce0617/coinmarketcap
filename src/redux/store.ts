import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { createBrowserHistory as createHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
