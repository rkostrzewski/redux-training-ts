import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import productsReducer from './modules/products/reducer'
import categoriesReducer from './modules/categories/reducer'
import cartReducer from './modules/cart/reducer'
import { AppState } from './modules/types';

const rootReducer = combineReducers<AppState>({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})

const _window = window as any;
const composeEnhancers = _window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store