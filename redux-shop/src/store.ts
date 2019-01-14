import { createStore, combineReducers } from 'redux'
import shopReducer from './modules/shop/reducer'
import cartReducer from './modules/cart/reducer'
import { AppState } from './modules/types';

const rootReducer = combineReducers<AppState>({
  shop: shopReducer,
  cart: cartReducer,
})

const _window = window as any;

const store = createStore(
  rootReducer,
  _window.__REDUX_DEVTOOLS_EXTENSION__ && _window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store