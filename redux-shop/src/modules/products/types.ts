import { Action } from 'redux';

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId: number;
}

export interface ProductsState {
  loaded: boolean;
  loadingError?: string;
  byId: {
    [key: number]: Product | undefined;
  }
}

export type ProductsAction = Action;