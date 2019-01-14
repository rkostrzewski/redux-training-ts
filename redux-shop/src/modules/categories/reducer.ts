import { CategoriesState, CategoriesAction } from './types';
import { ProductDto } from '../dtos';
import products from '../products.json'

// TODO: Implement
const getNormalizedCategoriesById = (products: ProductDto[]) => {
  throw new Error('Not implemented');
}

const initialState: CategoriesState = {
  byId: getNormalizedCategoriesById(products),
};

const reducer = (state: CategoriesState = initialState, action: CategoriesAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
