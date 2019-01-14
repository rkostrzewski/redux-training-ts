import { selectProductDetailsById } from '../shop/selectors'
import { AppState } from '../types';

export const selectCartProductsDetails = (state: AppState) => {
  const products = state.cart.productsInCart

  return products.map(p => {
    return {
      product: selectProductDetailsById(state, p.productId),
      quantity: p.quantity
    }
  })
}