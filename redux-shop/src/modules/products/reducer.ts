import { ProductsState, ProductsAction } from './types';
import { ProductDto } from '../dtos';
import products from '../products.json'

// TODO: Implement
const getNormalizedProductsById = (products: ProductDto[]) => {
  throw new Error('Not implemented');
}

const initialState: ProductsState = {
  byId: getNormalizedProductsById(products),
};

const reducer = (state: ProductsState = initialState, action: ProductsAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
