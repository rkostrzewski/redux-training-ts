import { ProductDto } from "../dtos";
import {
  LOAD_PRODUCTS_REQUESTED,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCTS_SUCCESS,
} from "./constants";

export interface LoadProductsRequested {
  type: typeof LOAD_PRODUCTS_REQUESTED;
}

export const loadProductsRequested = (): LoadProductsRequested => ({
  type: LOAD_PRODUCTS_REQUESTED
})

export interface LoadProductsSuccess {
  type: typeof LOAD_PRODUCTS_SUCCESS;
  products: ProductDto[];
}

export const loadProductsSuccess = (products: ProductDto[]): LoadProductsSuccess => ({
  type: LOAD_PRODUCTS_SUCCESS,
  products
})

export interface LoadProductsFailure {
  type: typeof LOAD_PRODUCTS_FAILURE;
  error: string;
}

export const loadProductsFailure = (error: string): LoadProductsFailure => ({
  type: LOAD_PRODUCTS_FAILURE,
  error
})
