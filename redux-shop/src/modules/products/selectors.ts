import { AppState } from '../types';
import { Product } from './types';

export const selectProductsState = (state: AppState) => state.products

export const selectProductsByCategory = (state: AppState, categoryId: number): Product[] => {
  const products = selectProductsState(state)

  return Object.values(products.byId)
    .filter((p): p is Product => p != null)
    .filter(p => p.categoryId === categoryId);
}

export const selectProductDetailsById = (state: AppState, productId: number): Product | undefined => {
  const products = selectProductsState(state)

  return products.byId[productId];
}
