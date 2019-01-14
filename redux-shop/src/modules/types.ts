import { Action, Dispatch as ReduxDispatch } from 'redux';
import { ProductsState } from './products/types';
import { CategoriesState } from './categories/types';
import { CartState } from './cart/types';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartState;
}

export type Dispatch = ReduxDispatch<Action, AppState>;
