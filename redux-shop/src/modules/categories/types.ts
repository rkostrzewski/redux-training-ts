import { Action } from 'redux';
import { LoadProductsSuccess } from '../products/actions';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface CategoriesState {
  byId: {
    [key: number]: Category | undefined;
  }
}

export type CategoriesAction = LoadProductsSuccess;