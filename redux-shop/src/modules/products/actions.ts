import { Dispatch } from "../types";
import { ProductDto } from "../dtos";

// TODO: Implement using fetchProducts function
export const loadProducts = () => {
  return (dispatch: Dispatch) => {
    throw new Error('Not implemented')
  }
}

const fetchProducts = () =>
  fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
    .then(r => r as ProductDto[])
    .catch(e => {
      throw new Error('Failed to load data')
    })