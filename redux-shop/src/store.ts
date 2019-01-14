import { createStore, combineReducers } from 'redux'
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

const store = createStore(
  rootReducer,
  _window.__REDUX_DEVTOOLS_EXTENSION__ && _window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store