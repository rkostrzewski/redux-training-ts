import { Action } from "redux";
import { ADD_PRODUCT_TO_CART } from "./constants";
import { AddProductToCart } from "./actions";

export interface ProductInCart {
  productId: number;
  quantity: number;
}

export interface CartState {
  productsInCart: ProductInCart[];
}

// TODO: Add more actions
export type CartAction =
  AddProductToCart;