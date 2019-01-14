import { AppState } from '../types';
import { Category } from './types';

const selectCategoriesState = (state: AppState) => state.categories;

export const selectCategories = (state: AppState): Category[] => {
  const categories = selectCategoriesState(state)

  return Object.values(categories.byId)
    .filter((c): c is Category => c != null);
}

export const selectCategoryById = (state: AppState, categoryId: number): Category | undefined => {
  const categories = selectCategoriesState(state)

  return categories.byId[categoryId];
}