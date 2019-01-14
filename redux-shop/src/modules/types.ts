import { ProductsState } from './products/types';
import { CategoriesState } from './categories/types';
import { CartState } from './cart/types';

export interface AppState {
  products: ProductsState;
  categories: CategoriesState;
  cart: CartState;
}
