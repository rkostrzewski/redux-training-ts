import { CategoriesState, CategoriesAction, Category } from './types';
import { ProductDto } from '../dtos';

const getNormalizedCategoriesById = (products: ProductDto[]) => {
  return products.reduce(
    (byId, { category }) => ({
      ...byId,
      [category.id]: {
        id: category.id,
        name: category.name,
        image: category.image,
      }
    }),
    {} as { [id: number]: Category }
  )
}

const initialState: CategoriesState = {
  byId: {},
};

const reducer = (state: CategoriesState = initialState, action: CategoriesAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
