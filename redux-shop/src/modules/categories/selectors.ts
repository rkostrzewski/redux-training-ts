import { AppState } from '../types';
import { Category } from './types';

const selectCategoriesState = (state: AppState) => state.categories;

// TODO: Implement
export const selectCategories = (state: AppState): Category[] => {
  const categories = selectCategoriesState(state)

  throw new Error('Not implemented')
}

// TODO: Implement
export const selectCategoryById = (state: AppState, categoryId: number): Category | undefined => {
  const categories = selectCategoriesState(state)

  throw new Error('Not implemented')
}