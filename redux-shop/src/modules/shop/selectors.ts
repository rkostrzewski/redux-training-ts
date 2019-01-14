import { AppState } from '../types';
import { Category } from './types';

const selectShopState = (state: AppState) => state.shop

const uniqueCategoryFilter = (value: Category, index: number, array: Category[]) => {
  return array.findIndex(c => c.id === value.id) === index
}

export const selectCategories = (state: AppState) => {
  const shop = selectShopState(state)

  return shop.products.map(p => p.category)
    .filter(uniqueCategoryFilter)
}

export const selectCategoryById = (state: AppState, categoryId: number) => {
  const categories = selectCategories(state)

  return categories.find(c => c.id === categoryId)
}

export const selectProductsByCategory = (state: AppState, categoryId: number) => {
  const shop = selectShopState(state)

  return shop.products.filter(p => p.category.id === categoryId)
}

export const selectProductDetailsById = (state: AppState, productId: number) => {
  const shop = selectShopState(state)

  return shop.products.find(p => p.id === productId)
}