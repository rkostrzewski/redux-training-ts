import { Action } from 'redux';

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

export type CategoriesAction = Action;