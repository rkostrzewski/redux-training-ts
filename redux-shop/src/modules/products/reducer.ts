import { ProductsState, ProductsAction, Product } from './types';
import { ProductDto } from '../dtos';
import products from '../products.json'

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
  byId: getNormalizedProductsById(products),
};

const reducer = (state: ProductsState = initialState, action: ProductsAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
