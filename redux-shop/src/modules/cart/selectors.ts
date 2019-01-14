import { selectProductDetailsById } from '../products/selectors'
import { AppState } from '../types';
import { Product } from '../products/types';

interface ProductInCartDetails {
  product: Product | undefined;
  quantity: number;
}

export const selectCartProductsDetails = (state: AppState): ProductInCartDetails[] => {
  const { quantityByProductId } = state.cart;

  return Object.keys(quantityByProductId)
    .map(productId => Number(productId))
    .map(productId => ({
      product: selectProductDetailsById(state, productId),
      quantity: quantityByProductId[productId]
    }));
}