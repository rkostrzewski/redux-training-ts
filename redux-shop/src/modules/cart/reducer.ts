import { CartState, CartAction } from './types';
import {
  INCREASE_PRODUCT_QUANTITY,
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from './constants';

const initialState: CartState = {
  quantityByProductId: {},
}

const reducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      throw new Error('Not implemented');
    }
    case INCREASE_PRODUCT_QUANTITY:
      throw new Error('Not implemented');
    case DECREASE_PRODUCT_QUANTITY:
      throw new Error('Not implemented');
    case REMOVE_PRODUCT_FROM_CART:
      throw new Error('Not implemented');
    default:
     return state
  }
}

export default reducer
