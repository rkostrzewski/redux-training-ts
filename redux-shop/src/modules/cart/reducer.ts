import { CartState, CartAction } from './types';
import { INCREASE_PRODUCT_QUANTITY, ADD_PRODUCT_TO_CART, DECREASE_PRODUCT_QUANTITY, REMOVE_PRODUCT_FROM_CART } from './constants';
import ProductInCart from '../../components/Cart/ProductInCart';

const initialState: CartState = {
  productsInCart: [],
}

const reducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const { productId, quantity } = action;
      if (!state.productsInCart.find(p => p.productId === productId)) {
        return {
          ...state,
          productsInCart: [
            ...state.productsInCart,
            { productId, quantity }
          ]
        }
      }

      return changeProductQuantity(
        state,
        productId,
        quantity
      )
    }
    case INCREASE_PRODUCT_QUANTITY:
      return changeProductQuantity(
        state,
        action.productId,
        1
      )
    case DECREASE_PRODUCT_QUANTITY:
      return changeProductQuantity(
        state,
        action.productId,
        -1
      )
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart
          .filter(p => p.productId !== action.productId)
      }
    default:
     return state
  }
}

export default reducer

const changeProductQuantity = (state: CartState, productId: number, delta: number): CartState => {
  return {
    ...state,
    productsInCart: state.productsInCart
      .map(p => {
        return p.productId === productId
          ? {
            productId,
            quantity: p.quantity + delta
          }
          : p
      })
      .filter(p => p.quantity > 0)
  }
}