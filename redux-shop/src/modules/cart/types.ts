import { Action } from "redux";
import { ADD_PRODUCT_TO_CART } from "./constants";
import { AddProductToCart, RemoveProductFromCart, IncreaseProductQuantity, DecreaseProductQuantity } from "./actions";

export interface ProductInCart {
  productId: number;
  quantity: number;
}

export interface CartState {
  productsInCart: ProductInCart[];
}

export type CartAction =
  AddProductToCart |
  RemoveProductFromCart |
  IncreaseProductQuantity |
  DecreaseProductQuantity;