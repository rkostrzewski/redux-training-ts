import {
  AddProductToCart,
  RemoveProductFromCart,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
} from "./actions";

export interface CartState {
  quantityByProductId: {
    [productId: number]: number;
  }
}

export type CartAction =
  AddProductToCart |
  RemoveProductFromCart |
  IncreaseProductQuantity |
  DecreaseProductQuantity;