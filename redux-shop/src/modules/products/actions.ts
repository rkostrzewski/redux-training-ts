import { Dispatch } from "../types";
import { ProductDto } from "../dtos";
import { LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_SUCCESS } from "./constants";

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


export const loadProducts = () => {
  return (dispatch: Dispatch) => {
    fetchProducts()
      .then(products => {
        dispatch(
          loadProductsSuccess(products)
        )
      })
      .catch(error => {
        dispatch(
          loadProductsFailure(error.message)
        )
      })
  }
}

const fetchProducts = () =>
  fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
    .then(r => r as ProductDto[])
    .catch(e => {
      throw new Error('Failed to load data')
    })