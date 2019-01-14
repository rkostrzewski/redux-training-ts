import { selectProductDetailsById } from '../products/selectors'
import { AppState } from '../types';
import { Product } from '../products/types';

interface ProductInCartDetails {
  product: Product | undefined;
  quantity: number;
}

// TODO: Implement and use selectProductDetailsById to retrieve a product
export const selectCartProductsDetails = (state: AppState): ProductInCartDetails[] => {
  throw new Error('Not implemented');
}