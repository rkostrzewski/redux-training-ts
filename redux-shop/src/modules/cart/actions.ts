import { ADD_PRODUCT_TO_CART } from './constants';

export interface AddProductToCart {
  type: typeof ADD_PRODUCT_TO_CART;
  productId: number;
  quantity: number;
}

// TODO: Implement actions and interfaces
export const addProductToCart = (productId: number, quantity: number): AddProductToCart => {
  throw new Error('Not implemented')
}

export const increaseProductQuantity = (productId: number) => {
  throw new Error('Not implemented')
}

export const decreaseProductQuantity = (productId: number) => {
  throw new Error('Not implemented')
}

export const removeProductFromCart = (productId: number) => {
  throw new Error('Not implemented')
}