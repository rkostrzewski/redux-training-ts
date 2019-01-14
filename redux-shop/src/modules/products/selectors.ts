import { AppState } from '../types';
import { Product } from './types';

const selectProductsState = (state: AppState) => state.products

// TODO: Implement
export const selectProductsByCategory = (state: AppState, categoryId: number): Product[] => {
  const products = selectProductsState(state)

  throw new Error('Not implemented')
}

// TODO: Implement
export const selectProductDetailsById = (state: AppState, productId: number): Product | undefined => {
  const products = selectProductsState(state)

  throw new Error('Not implemented')
}
