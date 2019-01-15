import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import productsReducer from './modules/products/reducer';
import categoriesReducer from './modules/categories/reducer';
import cartReducer from './modules/cart/reducer';
import { AppState } from './modules/types';
import productsSaga from './modules/products/saga';
import cartSaga from './modules/cart/saga';

const rootReducer = combineReducers<AppState>({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})

const rootSaga = function * () {
  yield all([
    productsSaga(),
    cartSaga(),
  ]);
}

const _window = window as any;
const composeEnhancers = _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store