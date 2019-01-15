import {
  ADD_PRODUCT_TO_CART,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  CHECKOUT,
} from './constants';

export interface AddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART;
  productId: number;
  quantity: number;
}

export const addProductToCart = (productId: number, quantity: number): AddProductToCart => {
  return {
    type: ADD_PRODUCT_TO_CART,
    productId,
    quantity
  }
}

export interface IncreaseProductQuantity {
  type: typeof INCREASE_PRODUCT_QUANTITY;
  productId: number;
}

export const increaseProductQuantity = (productId: number): IncreaseProductQuantity => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    productId
  }
}

export interface DecreaseProductQuantity {
  type: typeof DECREASE_PRODUCT_QUANTITY;
  productId: number;
}

export const decreaseProductQuantity = (productId: number): DecreaseProductQuantity => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    productId
  }
}

export interface RemoveProductFromCart {
  type: typeof REMOVE_PRODUCT_FROM_CART;
  productId: number;
}

export const removeProductFromCart = (productId: number): RemoveProductFromCart => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    productId
  }
}

export interface Checkout {
  type: typeof CHECKOUT;
}

export const checkout = (): Checkout => ({
  type: CHECKOUT
})