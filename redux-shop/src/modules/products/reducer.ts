import { ProductsState, ProductsAction, Product } from './types';
import { ProductDto } from '../dtos';
import { LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE } from './constants';

const getNormalizedProductsById = (products: ProductDto[]) => {
  return products.reduce(
    (byId, product) => ({
      ...byId,
      [product.id]: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        categoryId: product.category.id,
      }
    }),
    {} as { [id: number]: Product }
  )
}

const initialState: ProductsState = {
  loaded: false,
  byId: {},
};

const reducer = (state: ProductsState = initialState, action: ProductsAction) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loadingError: undefined,
        byId: getNormalizedProductsById(action.products)
      };
    case LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        loaded: false,
        loadingError: action.error
      };
    default:
      return state
  }
}

export default reducer
