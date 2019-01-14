import { ShopState, ShopAction } from './types';

import products from './products.json'

const initialState: ShopState = {
  products,
};

const reducer = (state: ShopState = initialState, action: ShopAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer