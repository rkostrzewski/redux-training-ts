import { CartState, CartAction } from './types';

const initialState: CartState = {
  productsInCart: [],
}

const reducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    default:
     return state
  }
}

export default reducer