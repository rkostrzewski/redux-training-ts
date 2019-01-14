import { ShopState } from './shop/types';
import { CartState } from './cart/types';

export interface AppState {
  shop: ShopState;
  cart: CartState;
}