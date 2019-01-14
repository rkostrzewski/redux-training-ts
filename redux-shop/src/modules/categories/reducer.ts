import { CategoriesState, CategoriesAction, Category } from './types';
import { ProductDto } from '../dtos';
import { LOAD_PRODUCTS_SUCCESS } from '../products/constants';

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
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        byId: getNormalizedCategoriesById(action.products)
      }
    default:
      return state
  }
}

export default reducer
